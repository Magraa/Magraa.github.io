(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const header = document.querySelector("[data-header]");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const progress = document.querySelector("[data-scroll-progress]");

  if (progress) {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const localTime = document.querySelector("[data-local-time]");

  if (localTime) {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const updateLocalTime = () => {
      localTime.textContent = `${formatter.format(new Date())} IST`;
    };

    updateLocalTime();
    window.setInterval(updateLocalTime, 30000);
  }

  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

  if (revealItems.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-revealed"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        }
      );

      revealItems.forEach((item) => observer.observe(item));
    }
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-stage]").forEach((stage) => {
      let frame = 0;

      stage.addEventListener("pointermove", (event) => {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rect = stage.getBoundingClientRect();
          const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
          const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));

          stage.style.setProperty("--mx", (x - 0.5).toFixed(3));
          stage.style.setProperty("--my", (y - 0.5).toFixed(3));
          stage.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
          stage.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
        });
      });

      stage.addEventListener("pointerleave", () => {
        window.cancelAnimationFrame(frame);
        stage.style.setProperty("--mx", "0");
        stage.style.setProperty("--my", "0");
        stage.style.setProperty("--spot-x", "74%");
        stage.style.setProperty("--spot-y", "18%");
      });
    });
  }

  const dialog = document.getElementById("screen-dialog");

  if (dialog) {
    const dialogImage = dialog.querySelector("#screen-dialog-image");
    const dialogCaption = dialog.querySelector("#screen-dialog-caption");
    let lastTrigger = null;

    const openScreen = (trigger) => {
      const source = trigger.dataset.full;
      if (!source || !dialogImage || !dialogCaption) {
        return;
      }

      const triggerImage = trigger.querySelector("img");
      lastTrigger = trigger;
      dialogImage.src = source;
      dialogImage.alt = triggerImage?.alt || trigger.dataset.caption || "Project screen";
      dialogCaption.textContent = trigger.dataset.caption || "";

      if (typeof dialog.showModal !== "function") {
        window.open(source, "_blank", "noopener");
        return;
      }

      dialog.showModal();
      document.body.classList.add("dialog-open");
      dialog.focus({ preventScroll: true });
    };

    document.querySelectorAll("[data-full]").forEach((trigger) => {
      trigger.addEventListener("click", () => openScreen(trigger));
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      if (dialogImage) {
        dialogImage.removeAttribute("src");
        dialogImage.alt = "";
      }
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* Motion switch                                                    */
  /* ---------------------------------------------------------------- */

  const motionButtons = Array.from(document.querySelectorAll("[data-motion-toggle]"));
  let motionOff = false;

  const readStore = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const writeStore = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* private mode: the setting just will not persist */
    }
  };

  const applyMotion = () => {
    const root = document.documentElement;
    if (motionOff) {
      root.dataset.motion = "off";
    } else {
      root.removeAttribute("data-motion");
    }
    motionButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(motionOff));
      button.textContent = motionOff ? "Turn motion back on" : "Turn motion off";
    });
  };

  motionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      motionOff = !motionOff;
      writeStore("motion", motionOff ? "off" : "on");
      applyMotion();
    });
  });

  if (readStore("motion") === "off") {
    motionOff = true;
  }
  applyMotion();

  const stillPlaying = () => reduceMotion || motionOff;

  /* ---------------------------------------------------------------- */
  /* Kicker decode                                                    */
  /* ---------------------------------------------------------------- */

  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#—";

  const decode = (el) => {
    const final = el.dataset.text || el.textContent.trim();
    const chars = Array.from(final);
    const startedAt = performance.now();

    el.dataset.text = final;

    const step = (now) => {
      const progress = Math.min(1, (now - startedAt) / 560);
      const settled = Math.floor(progress * chars.length * 1.35);

      el.textContent = chars
        .map((char, index) =>
          char === " " || index < settled ? char : GLYPHS[(Math.random() * GLYPHS.length) | 0]
        )
        .join("");

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = final;
      }
    };

    window.requestAnimationFrame(step);
  };

  const decodeTargets = Array.from(document.querySelectorAll(".kicker"));

  if (decodeTargets.length && !stillPlaying() && "IntersectionObserver" in window) {
    const decodeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          decode(entry.target);
          decodeObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.9 }
    );

    decodeTargets.forEach((el) => decodeObserver.observe(el));
  }

  /* ---------------------------------------------------------------- */
  /* X-ray                                                            */
  /* ---------------------------------------------------------------- */

  const xray = document.querySelector("[data-xray]");

  if (xray && finePointer) {
    let xrayFrame = 0;

    xray.addEventListener("pointermove", (event) => {
      /* The lens is an input, not an animation: the manual motion switch keeps it,
         and only the OS reduced-motion setting swaps it for the static split. */
      if (reduceMotion) {
        return;
      }
      window.cancelAnimationFrame(xrayFrame);
      xrayFrame = window.requestAnimationFrame(() => {
        const rect = xray.getBoundingClientRect();
        xray.style.setProperty("--bx", `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(2)}%`);
        xray.style.setProperty("--by", `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(2)}%`);
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* X-ray markers                                                    */
  /* ---------------------------------------------------------------- */
  /* Hover and focus already reveal a note in CSS; this adds pinning   */
  /* so the same markers work on touch, where there is no hover.       */

  const spots = Array.from(document.querySelectorAll(".xray__spot"));

  if (spots.length) {
    let pinned = null;

    const setOpen = (spot, open) => {
      spot.setAttribute("aria-expanded", String(open));
      document.getElementById(spot.getAttribute("aria-controls"))?.classList.toggle("is-open", open);
    };

    const showOnly = (spot) => spots.forEach((other) => setOpen(other, other === spot));

    const release = () => {
      pinned = null;
      spots.forEach((other) => setOpen(other, false));
    };

    spots.forEach((spot) => {
      const wrap = spot.parentElement;

      wrap.addEventListener("pointerenter", () => {
        if (finePointer) showOnly(spot);
      });

      wrap.addEventListener("pointerleave", () => {
        if (!finePointer) return;
        if (pinned) showOnly(pinned);
        else setOpen(spot, false);
      });

      spot.addEventListener("focus", () => showOnly(spot));

      spot.addEventListener("click", () => {
        pinned = pinned === spot ? null : spot;
        if (pinned) showOnly(spot);
        else setOpen(spot, false);
      });
    });

    if (xray) {
      xray.addEventListener("click", (event) => {
        if (!event.target.closest(".xray__spot-wrap, .xray__pop")) release();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") release();
    });
  }

  /* ---------------------------------------------------------------- */
  /* Order state machine                                              */
  /* ---------------------------------------------------------------- */

  const flow = document.querySelector("[data-flow]");

  if (flow) {
    const svg = flow.querySelector(".flow__wires");
    const nodes = new Map();
    const edges = [];

    flow.querySelectorAll(".flow__node").forEach((node) => nodes.set(node.dataset.id, node));

    nodes.forEach((node, id) => {
      const next = node.dataset.next ? node.dataset.next.split(/\s+/) : [];
      next.forEach((to) => {
        if (nodes.has(to)) {
          edges.push({ from: id, to, path: null });
        }
      });
    });

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML =
      '<marker id="flow-arrow" markerWidth="7" markerHeight="7" refX="5.6" refY="3.4" orient="auto">' +
      '<path d="M0.4 0.4 6 3.4 0.4 6.4z" fill="rgba(243,239,231,0.3)"/></marker>' +
      '<marker id="flow-arrow-live" markerWidth="7" markerHeight="7" refX="5.6" refY="3.4" orient="auto">' +
      '<path d="M0.4 0.4 6 3.4 0.4 6.4z" fill="#e0a678"/></marker>';
    svg.prepend(defs);

    const boxOf = (el, origin) => {
      const rect = el.getBoundingClientRect();
      return {
        cx: rect.left - origin.left + rect.width / 2,
        cy: rect.top - origin.top + rect.height / 2,
        top: rect.top - origin.top,
        bottom: rect.bottom - origin.top,
        left: rect.left - origin.left,
        right: rect.right - origin.left,
      };
    };

    const route = (a, b) => {
      const dy = b.cy - a.cy;
      const dx = b.cx - a.cx;

      if (Math.abs(dy) < 26) {
        const rightward = dx >= 0;
        const p1 = { x: rightward ? a.right : a.left, y: a.cy };
        const p2 = { x: rightward ? b.left - 3 : b.right + 3, y: b.cy };
        const k = Math.max(26, Math.abs(p2.x - p1.x) * 0.4) * (rightward ? 1 : -1);
        return `M${p1.x} ${p1.y}C${p1.x + k} ${p1.y} ${p2.x - k} ${p2.y} ${p2.x} ${p2.y}`;
      }

      const downward = dy > 0;
      const p1 = { x: a.cx, y: downward ? a.bottom : a.top };
      const p2 = { x: b.cx, y: downward ? b.top - 3 : b.bottom + 3 };
      const k = Math.max(22, Math.abs(p2.y - p1.y) * 0.45) * (downward ? 1 : -1);
      return `M${p1.x} ${p1.y}C${p1.x} ${p1.y + k} ${p2.x} ${p2.y - k} ${p2.x} ${p2.y}`;
    };

    const draw = () => {
      const origin = svg.getBoundingClientRect();
      if (origin.width < 2 || origin.height < 2) {
        return;
      }

      edges.forEach((edge) => {
        if (!edge.path) {
          edge.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          edge.path.setAttribute("data-from", edge.from);
          edge.path.setAttribute("data-to", edge.to);
          svg.appendChild(edge.path);
        }

        edge.path.setAttribute(
          "d",
          route(boxOf(nodes.get(edge.from), origin), boxOf(nodes.get(edge.to), origin))
        );
      });
    };

    const docs = Array.from(document.querySelectorAll(".flow__docs > li"));

    const select = (id) => {
      nodes.forEach((node, key) => node.setAttribute("aria-pressed", String(key === id)));
      docs.forEach((doc) => {
        doc.hidden = doc.dataset.doc !== id;
      });
      edges.forEach((edge) => {
        const live = edge.from === id || edge.to === id;
        edge.path?.setAttribute("data-live", String(live));
        edge.path?.setAttribute("marker-end", live ? "url(#flow-arrow-live)" : "url(#flow-arrow)");
      });
    };

    nodes.forEach((node, id) => {
      node.addEventListener("click", () => select(id));
    });

    draw();
    select("paid");

    if ("ResizeObserver" in window) {
      let queued = 0;
      new ResizeObserver(() => {
        window.cancelAnimationFrame(queued);
        queued = window.requestAnimationFrame(draw);
      }).observe(flow);
    } else {
      window.addEventListener("resize", draw);
    }

    document.fonts?.ready.then(draw);
    window.addEventListener("load", draw);
  }

  /* ---------------------------------------------------------------- */
  /* Live repositories                                                */
  /* ---------------------------------------------------------------- */

  const repoList = document.querySelector("[data-repos]");

  if (repoList) {
    const CACHE_KEY = "magraa.github-repos.v1";
    const HOUR = 3600000;

    const relative = (iso) => {
      const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
      if (days <= 0) return "today";
      if (days === 1) return "yesterday";
      if (days < 14) return `${days} days ago`;
      if (days < 70) return `${Math.round(days / 7)} weeks ago`;
      return `${Math.round(days / 30)} months ago`;
    };

    const paint = (byName) => {
      repoList.querySelectorAll(".repos__stat").forEach((stat) => {
        const repo = byName.get(stat.dataset.repo);
        if (!repo) {
          return;
        }
        const bits = [];
        if (repo.language) bits.push(repo.language);
        bits.push(`${repo.stargazers_count} ${repo.stargazers_count === 1 ? "star" : "stars"}`);
        bits.push(`pushed ${relative(repo.pushed_at)}`);
        stat.textContent = bits.join(" · ");
        stat.dataset.updated = "true";
      });
    };

    const cached = (() => {
      try {
        const raw = window.sessionStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return Date.now() - parsed.at < HOUR ? parsed.data : null;
      } catch {
        return null;
      }
    })();

    const use = (repos) => {
      const byName = new Map(repos.map((repo) => [repo.name, repo]));
      paint(byName);
      const source = document.getElementById("repos-source");
      if (source) {
        source.textContent = "Live from the GitHub API, sorted by the same public repository list anyone can call. Cached in this tab for an hour.";
      }
    };

    if (cached) {
      use(cached);
    } else if (navigator.onLine !== false) {
      fetch("https://api.github.com/users/Magraa/repos?per_page=100&sort=updated", {
        headers: { Accept: "application/vnd.github+json" },
      })
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error("unavailable"))))
        .then((repos) => {
          if (!Array.isArray(repos)) {
            return;
          }
          try {
            window.sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: repos }));
          } catch {
            /* cache is optional */
          }
          use(repos);
        })
        .catch(() => {
          /* the snapshot in the markup already says what it is */
        });
    }
  }

  /* ---------------------------------------------------------------- */
  /* Console                                                          */
  /* ---------------------------------------------------------------- */
  /* Answers are read back out of the rendered document, so a command */
  /* can never disagree with what the page shows.                     */

  const shellRoot = document.querySelector("[data-shell]");
  let focusShell = () => {};

  const text = (node) => (node?.textContent || "").replace(/\s+/g, " ").trim();
  const nodesOf = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  const projectList = () =>
    nodesOf("#work article.case").map((article, index) => ({
      slug: article.id.replace("project-", ""),
      id: article.id,
      name: text(article.querySelector(".case__title h3")),
      kind: text(article.querySelector(".case__title .kicker")).replace(/^\d+\s*\/\s*/, ""),
      blurb: text(article.querySelector(".case__intro p")),
      order: String(index + 1).padStart(2, "0"),
    }));

  const skillGroups = () =>
    nodesOf(".skills-grid .skill-card").map((card) => ({
      group: text(card.querySelector("h3")),
      items: nodesOf("li", card).map((li) => text(li)),
    }));

  const roles = () =>
    nodesOf(".timeline > li").map((row) => ({
      span: text(row.querySelector(".timeline__meta span")),
      place: text(row.querySelector(".timeline__meta span:nth-child(2)")),
      title: text(row.querySelector(".timeline__body h3")),
      company: text(row.querySelector(".timeline__company")),
      points: nodesOf(".timeline__body ul li", row).map((li) => text(li)),
    }));

  const contactRows = () =>
    nodesOf(".contact-list li").map((row) => ({
      label: text(row.querySelector("span")),
      value: text(row.querySelector("a") || row.lastElementChild),
      href: row.querySelector("a")?.getAttribute("href") || "",
    }));

  const sectionList = () => [
    ...nodesOf(".site-nav a").map((link) => ({
      id: (link.getAttribute("href") || "").slice(1),
      label: text(link),
    })),
    { id: "colophon", label: "Colophon" },
  ];

  if (shellRoot) {
    const out = shellRoot.querySelector("#shell-output");
    const form = shellRoot.querySelector("[data-shell-form]");
    const input = shellRoot.querySelector("#shell-input");
    const chipRow = shellRoot.querySelector("[data-shell-chips]");
    const indicator = shellRoot.querySelector("[data-shell-state]");
    const HISTORY_KEY = "shell.history.v1";

    const make = (tag, className, value) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (value !== undefined) node.textContent = value;
      return node;
    };

    const group = (className) => {
      const node = make("div", `sh-block${className ? ` ${className}` : ""}`);
      out.appendChild(node);
      return node;
    };

    const scrollOutput = () => {
      out.scrollTop = out.scrollHeight;
    };

    const echo = (command) => {
      const line = group("sh-line");
      line.appendChild(make("span", "sh-prompt", "mayank ~ %"));
      line.appendChild(make("span", "sh-cmd", command));
    };

    const say = (lines, className) => {
      const node = group("");
      const body = make("div", `sh-res${className ? ` ${className}` : ""}`);
      (Array.isArray(lines) ? lines : [lines]).forEach((line, index) => {
        if (index) body.appendChild(make("br"));
        body.append(line);
      });
      node.appendChild(body);
      return node;
    };

    const table = (pairs) => {
      const node = group("");
      const grid = make("dl", "sh-grid");
      pairs.forEach(([key, value]) => {
        grid.appendChild(make("dt", null, key));
        grid.appendChild(make("dd", null, value));
      });
      node.appendChild(grid);
      return node;
    };

    const jumpRow = (order, name, blurb, target, action) => {
      const list = make("li");
      const row = make("button", "sh-row");
      row.type = "button";
      row.appendChild(make("span", "sh-row__num", order));
      row.appendChild(make("span", "sh-row__name", name));
      if (blurb) row.appendChild(make("span", "sh-row__blurb", blurb));
      row.appendChild(make("span", "sh-row__go", "open ↗"));
      row.addEventListener("click", () => (action ? action() : goto(target)));
      list.appendChild(row);
      return list;
    };

    const goto = (hash) => {
      window.location.hash = hash;
    };

    const copyValue = async (value, button) => {
      try {
        await navigator.clipboard.writeText(value);
        if (button) {
          button.dataset.done = "true";
          button.textContent = `copied ${value}`;
        }
      } catch {
        if (button) button.textContent = value;
      }
    };

    const history = {
      items: (() => {
        try {
          const raw = window.localStorage.getItem(HISTORY_KEY);
          const parsed = raw ? JSON.parse(raw) : [];
          return Array.isArray(parsed) ? parsed.slice(-40) : [];
        } catch {
          return [];
        }
      })(),
      cursor: 0,
      push(entry) {
        if (!entry || this.items[this.items.length - 1] === entry) return;
        this.items.push(entry);
        this.cursor = this.items.length;
        try {
          window.localStorage.setItem(HISTORY_KEY, JSON.stringify(this.items.slice(-40)));
        } catch {
          /* history is a convenience, not a requirement */
        }
      },
    };

    const telemetry = () => {
      const nav = performance.getEntriesByType("navigation")[0];
      const resources = performance.getEntriesByType("resource");
      const bytes = resources.reduce((total, entry) => total + (entry.encodedBodySize || 0), 0);
      const connection = navigator.connection;
      const reposLive = document.querySelector('.repos__stat[data-updated="true"]');

      return [
        ["identity", "Mayank Agrawal · full-stack & AI systems"],
        ["based", "Bengaluru, India · IST / UTC+5:30"],
        ["status", "Open to full-time remote, hybrid in Bengaluru, and relocation with sponsorship"],
        ["viewport", `${innerWidth} × ${innerHeight} at ${devicePixelRatio}× device pixels`],
        ["pointer", matchMedia("(hover: hover) and (pointer: fine)").matches ? "fine (hover-capable)" : "coarse (touch)"],
        ["motion", stillPlaying() ? "reduced (OS setting or console switch)" : "full"],
        ["network", connection?.effectiveType ? `${connection.effectiveType} · ${connection.downlink || "?"} Mbit/s` : "not reported"],
        ["transferred", bytes > 0 ? `${(bytes / 1024).toFixed(0)} KB across ${resources.length} requests` : "cached responses report no body length"],
        ["interactive", nav ? `${Math.round(nav.domInteractive / 1000 * 10) / 10}s from navigation` : "not measured"],
        ["runtime", "no framework, no build step"],
        ["repositories", reposLive ? "live from the GitHub API this session" : "October 2026 snapshot (API not reached)"],
      ];
    };

    const COMMANDS = [
      {
        name: "help",
        usage: "help",
        summary: "list every command",
        chip: true,
        run: () => {
          const node = group("");
          node.appendChild(make("div", "sh-hi", "AVAILABLE COMMANDS"));
          const grid = make("dl", "sh-grid");
          COMMANDS.forEach((command) => {
            grid.appendChild(make("dt", "sh-hi", command.usage));
            grid.appendChild(make("dd", null, command.summary));
          });
          node.appendChild(grid);
          const foot = make("div", "sh-res sh-dim", "Tab completes, ↑ and ↓ replay history, and any row marked open jumps to that part of the page.");
          node.appendChild(foot);
        },
      },
      {
        name: "status",
        usage: "status",
        summary: "role, availability, and live page telemetry",
        chip: true,
        run: () => table(telemetry()),
      },
      {
        name: "whoami",
        usage: "whoami",
        summary: "two years of shipping systems that remove manual work",
        chip: true,
        run: () =>
          say([
            "I build production web platforms, backend APIs, and AI systems.",
            "Two years in production across Next.js, TypeScript, Python and PostgreSQL.",
            "Integrated B.Tech + MBA (IT), IIIT Gwalior, 2019–2024. Based in Bengaluru.",
            "The work I keep coming back to is the unglamorous middle: a parser that survives",
            "  messy input, a ledger that still writes offline, a model kept away from the money.",
          ]),
      },
      {
        name: "projects",
        usage: "projects",
        summary: "the five case studies on this page",
        chip: true,
        run: () => {
          const list = make("ul", "sh-rows");
          projectList().forEach((project) => {
            list.appendChild(jumpRow(project.order, project.name, project.kind, `#${project.id}`));
          });
          group("").appendChild(list);
        },
      },
      {
        name: "open",
        usage: "open <number | name>",
        summary: "jump to a case study",
        run: (argument) => {
          const projects = projectList();
          const wanted = argument.trim().toLowerCase();
          const match =
            (/^\d+$/.test(wanted) && projects.find((project) => Number(project.order) === Number(wanted))) ||
            projects.find((project) => project.slug === wanted) ||
            projects.find((project) => project.name.toLowerCase().startsWith(wanted)) ||
            projects.find((project) => project.name.toLowerCase().includes(wanted));

          if (!wanted || !match) {
            return say(
              wanted
                ? `open: no project matches “${argument}”. Run projects to list them.`
                : "usage: open <number | name> — run projects first to see the list.",
              "sh-err"
            );
          }
          goto(`#${match.id}`);
          return say(`${match.name} → #${match.id}`, "sh-ok");
        },
      },
      {
        name: "skills",
        usage: "skills [group]",
        summary: "the toolkit section, by group",
        chip: true,
        run: (argument) => {
          const groups = skillGroups();
          const chosen = argument
            ? groups.filter((entry) => entry.group.toLowerCase().includes(argument.toLowerCase()))
            : groups;

          if (!chosen.length) {
            return say(`skills: no group matches “${argument}”. Groups: ${groups.map((entry) => entry.group).join(", ")}`, "sh-err");
          }

          const node = group("");
          chosen.forEach((entry) => {
            node.appendChild(make("div", "sh-hi", entry.group));
            node.appendChild(make("div", "sh-res", entry.items.join(" · ")));
          });
          return node;
        },
      },
      {
        name: "experience",
        usage: "experience",
        summary: "the three roles, oldest last",
        run: () => {
          const node = group("");
          roles().forEach((role) => {
            node.appendChild(make("div", "sh-hi", `${role.title} · ${role.company}`));
            node.appendChild(make("div", "sh-res sh-dim", `${role.span} · ${role.place}`));
            role.points.slice(0, 2).forEach((point) => node.appendChild(make("div", "sh-res", `  ${point}`)));
            node.appendChild(make("div", "sh-res", " "));
          });
          return node;
        },
      },
      {
        name: "contact",
        usage: "contact",
        summary: "direct channels, with copy buttons",
        chip: true,
        run: () => {
          const node = group("");
          const rows = contactRows().filter((row) => row.label && row.value);
          rows.forEach((row) => node.appendChild(make("div", "sh-res", `${row.label.padEnd(12, " ")}${row.value}`)));
          const actions = make("div", "sh-actions");
          [
            ["agrawalmayank1111@gmail.com", "email"],
            ["+91 9340861338", "phone"],
          ].forEach(([value, label]) => {
            const button = make("button", "sh-action", `copy ${label}`);
            button.type = "button";
            button.addEventListener("click", () => copyValue(value, button));
            actions.appendChild(button);
          });
          node.appendChild(actions);
          return node;
        },
      },
      {
        name: "copy",
        usage: "copy <email | phone>",
        summary: "put a contact detail on the clipboard",
        run: (argument) => {
          const wanted = argument || "email";
          const source = { email: "agrawalmayank1111@gmail.com", phone: "+91 9340861338" };
          const value = source[wanted.toLowerCase()];
          if (!value) {
            return say(`copy: unknown target “${wanted}”. Try email or phone.`, "sh-err");
          }
          copyValue(value);
          return say(`${wanted} → ${value} on the clipboard`, "sh-ok");
        },
      },
      {
        name: "github",
        usage: "github",
        summary: "the repository rail, as it currently reads",
        chip: true,
        run: () => {
          const list = make("ul", "sh-rows");
          nodesOf(".repos li").forEach((row, index) => {
            const anchor = row.querySelector("a");
            list.appendChild(
              jumpRow(
                String(index + 1).padStart(2, "0"),
                text(row.querySelector(".repos__name")),
                text(row.querySelector(".repos__stat")),
                null,
                () => window.open(anchor.href, "_blank", "noopener")
              )
            );
          });
          const node = group("");
          node.appendChild(list);
          node.appendChild(
            make(
              "div",
              "sh-res sh-dim",
              text(document.getElementById("repos-source")) || "repository list"
            )
          );
          return node;
        },
      },
      {
        name: "sections",
        usage: "sections",
        summary: "every anchor on the page",
        run: () => {
          const list = make("ul", "sh-rows");
          sectionList().forEach((section, index) => {
            list.appendChild(jumpRow(String(index + 1).padStart(2, "0"), `#${section.id}`, section.label, `#${section.id}`));
          });
          const node = group("");
          node.appendChild(list);
          return node;
        },
      },
      {
        name: "motion",
        usage: "motion [on | off]",
        summary: "override the page animation, whatever the OS says",
        run: (argument) => {
          const value = argument.trim().toLowerCase();
          if (value && value !== "on" && value !== "off") {
            return say("motion: expected on or off.", "sh-err");
          }
          motionOff = value ? value === "off" : !motionOff;
          writeStore("motion", motionOff ? "off" : "on");
          applyMotion();
          return say(
            motionOff
              ? "motion off — reveals snap, the X-ray splits, the marquee stops."
              : "motion on — wipe fills, parallax, and the X-ray flashlight are live.",
            "sh-ok"
          );
        },
      },
      {
        name: "clear",
        usage: "clear",
        summary: "empty the transcript",
        chip: true,
        run: () => {
          out.textContent = "";
          return null;
        },
      },
      {
        name: "sudo",
        usage: "sudo <anything>",
        summary: "try it",
        run: () => say("mayank is not in the sudoers file. This incident has been logged to nowhere; the page has no backend.", "sh-dim"),
      },
    ];

    const byName = new Map(COMMANDS.map((command) => [command.name, command]));

    const closest = (word) => {
      let best = null;
      let bestScore = 99;
      COMMANDS.forEach((command) => {
        const name = command.name;
        if (name.startsWith(word.slice(0, 2)) || name.includes(word)) {
          const score = Math.abs(name.length - word.length);
          if (score < bestScore) {
            bestScore = score;
            best = name;
          }
        }
      });
      return best;
    };

    const runLine = (raw) => {
      const line = raw.trim();
      if (!line) return;

      history.push(line);
      echo(line);

      const [name, ...rest] = line.split(/\s+/);
      const command = byName.get(name.toLowerCase());

      if (!command) {
        const suggestion = closest(name.toLowerCase());
        say(
          suggestion
            ? `command not found: ${name}\n  did you mean “${suggestion}”?`
            : `command not found: ${name}. Type help for the list.`,
          "sh-err"
        );
        scrollOutput();
        return;
      }

      indicator.dataset.busy = "true";
      indicator.textContent = "running";

      command.run(rest.join(" "));

      indicator.dataset.busy = "false";
      indicator.textContent = "ready";
      scrollOutput();
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      runLine(input.value);
      input.value = "";
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        const word = input.value.trim().toLowerCase();
        if (word) {
          const match = COMMANDS.filter((command) => command.name.startsWith(word));
          if (match.length === 1) {
            event.preventDefault();
            input.value = `${match[0].name} `;
          } else if (match.length > 1) {
            event.preventDefault();
            say(match.map((command) => command.name).join("   "), "sh-dim");
            scrollOutput();
          }
        }
        return;
      }

      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        if (!history.items.length) return;
        event.preventDefault();
        history.cursor =
          event.key === "ArrowUp"
            ? Math.max(0, history.cursor - 1)
            : Math.min(history.items.length, history.cursor + 1);
        input.value = history.items[history.cursor] || "";
        input.setSelectionRange(input.value.length, input.value.length);
      }

      if (event.key === "l" && event.ctrlKey) {
        event.preventDefault();
        out.textContent = "";
      }
    });

    COMMANDS.filter((command) => command.chip).forEach((command) => {
      const item = make("li");
      const chip = make("button", "shell__chip", command.name);
      chip.type = "button";
      chip.addEventListener("click", () => {
        runLine(command.name);
        input.focus();
      });
      item.appendChild(chip);
      chipRow.appendChild(item);
    });

    focusShell = (command) => {
      goto("#console");
      if (command && !shellRoot.dataset.seeded) {
        shellRoot.dataset.seeded = "true";
        runLine(command);
      }
      window.setTimeout(() => input.focus({ preventScroll: true }), 240);
    };

    say(
      [
        "This console reads the page you are already looking at.",
        "Type help, or press a command below. Nothing here is a second copy of the content.",
      ].join("\n"),
      "sh-dim"
    );
  }

  /* ---------------------------------------------------------------- */
  /* Command palette                                                  */
  /* ---------------------------------------------------------------- */

  const palette = document.getElementById("palette");
  const paletteInput = document.getElementById("palette-input");
  const paletteList = document.getElementById("palette-list");

  const isApple = /mac|iphone|ipad|ipod/i.test(navigator.userAgent);
  document.querySelectorAll("[data-palette-kbd]").forEach((kbd) => {
    kbd.textContent = isApple ? "⌘ K" : "Ctrl K";
  });

  if (palette && paletteInput && paletteList) {
    const gotoSection = (hash) => {
      window.location.hash = hash;
    };

    const openExternal = (url) => {
      window.open(url, "_blank", "noopener");
    };

    const status = document.createElement("p");
    status.className = "palette__status";
    status.setAttribute("role", "status");
    palette.querySelector(".palette__box").appendChild(status);

    const copy = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        status.textContent = `Copied ${text}`;
      } catch {
        status.textContent = text;
      }
      window.setTimeout(() => {
        status.textContent = "";
      }, 2600);
    };

    const COMMANDS = [
      { group: "Sections", label: "Selected work", hint: "04 projects", run: () => gotoSection("#work") },
      { group: "Sections", label: "Under the surface", hint: "x-ray · states · repos", run: () => gotoSection("#systems") },
      { group: "Sections", label: "Console", hint: "type a command", run: () => focusShell("help") },
      { group: "Sections", label: "About", run: () => gotoSection("#about") },
      { group: "Sections", label: "Experience", run: () => gotoSection("#experience") },
      { group: "Sections", label: "Toolkit", run: () => gotoSection("#skills") },
      { group: "Sections", label: "Contact", run: () => gotoSection("#contact") },
      { group: "Sections", label: "How this page is built", hint: "colophon", run: () => gotoSection("#colophon") },
      { group: "Projects", label: "Shoboti", hint: "social commerce", run: () => gotoSection("#project-shoboti") },
      { group: "Projects", label: "Hisab AI", hint: "offline-first ledger", run: () => gotoSection("#project-hisab") },
      { group: "Projects", label: "SIMVox-AI", hint: "voice AI", run: () => gotoSection("#project-simvox") },
      { group: "Projects", label: "Mr. Proper", hint: "commerce + ERP", run: () => gotoSection("#project-mrproper") },
      { group: "Projects", label: "TenderIQ", hint: "procurement AI", run: () => gotoSection("#project-tenderiq") },
      { group: "Actions", label: "Copy email address", hint: "clipboard", run: () => copy("agrawalmayank1111@gmail.com") },
      { group: "Actions", label: "Copy phone number", hint: "clipboard", run: () => copy("+91 9340861338") },
      { group: "Actions", label: "Open GitHub profile", run: () => openExternal("https://github.com/Magraa") },
      { group: "Actions", label: "Open LinkedIn profile", run: () => openExternal("https://www.linkedin.com/in/mayank-agrawal-532967192/") },
      {
        group: "Actions",
        label: "Switch page motion",
        hint: "reduced motion",
        run: () => {
          motionOff = !motionOff;
          writeStore("motion", motionOff ? "off" : "on");
          applyMotion();
          status.textContent = motionOff ? "Motion switched off" : "Motion switched back on";
          window.setTimeout(() => {
            status.textContent = "";
          }, 2600);
        },
      },
    ];

    let visible = COMMANDS.slice();
    let active = 0;
    let lastTrigger = null;

    const render = () => {
      paletteList.textContent = "";
      let group = "";

      visible.forEach((command, index) => {
        if (command.group !== group) {
          group = command.group;
          const heading = document.createElement("li");
          heading.className = "palette__group";
          heading.setAttribute("role", "presentation");
          heading.setAttribute("aria-hidden", "true");
          heading.textContent = group;
          paletteList.appendChild(heading);
        }

        const item = document.createElement("li");
        item.className = "palette__item";
        item.id = `palette-option-${index}`;
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", String(index === active));
        item.dataset.active = String(index === active);

        const label = document.createElement("span");
        label.textContent = command.label;
        item.appendChild(label);

        if (command.hint) {
          const hint = document.createElement("span");
          hint.className = "palette__item-hint";
          hint.textContent = command.hint;
          item.appendChild(hint);
        }

        item.addEventListener("mousedown", (event) => event.preventDefault());
        item.addEventListener("click", () => {
          active = index;
          runActive();
        });

        paletteList.appendChild(item);
      });

      if (!visible.length) {
        const empty = document.createElement("li");
        empty.className = "palette__empty";
        empty.setAttribute("role", "presentation");
        empty.textContent = "Nothing matches that.";
        paletteList.appendChild(empty);
      }

      paletteInput.setAttribute(
        "aria-activedescendant",
        visible.length ? `palette-option-${active}` : ""
      );
    };

    const filter = (query) => {
      const words = query.toLowerCase().split(/\s+/).filter(Boolean);
      visible = words.length
        ? COMMANDS.filter((command) => {
            const haystack = `${command.label} ${command.group} ${command.hint || ""}`.toLowerCase();
            return words.every((word) => haystack.includes(word));
          })
        : COMMANDS.slice();
      active = 0;
      render();
    };

    const runActive = () => {
      const command = visible[active];
      if (!command) {
        return;
      }
      palette.close();
      command.run();
    };

    const openPalette = (trigger) => {
      lastTrigger = trigger || document.activeElement;
      paletteInput.value = "";
      filter("");
      status.textContent = "";

      if (typeof palette.showModal !== "function") {
        return;
      }

      palette.showModal();
      document.body.classList.add("dialog-open");
      paletteInput.focus();
    };

    document.querySelectorAll("[data-palette-open]").forEach((trigger) => {
      trigger.addEventListener("click", () => openPalette(trigger));
    });

    window.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (palette.open) {
          palette.close();
        } else {
          openPalette(document.activeElement);
        }
      }
    });

    paletteInput.addEventListener("input", () => filter(paletteInput.value));

    paletteInput.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || (event.key === "n" && event.ctrlKey)) {
        event.preventDefault();
        active = visible.length ? (active + 1) % visible.length : 0;
        render();
      } else if (event.key === "ArrowUp" || (event.key === "p" && event.ctrlKey)) {
        event.preventDefault();
        active = visible.length ? (active - 1 + visible.length) % visible.length : 0;
        render();
      } else if (event.key === "Enter") {
        event.preventDefault();
        runActive();
      }
    });

    palette.addEventListener("cancel", (event) => {
      if (paletteInput.value) {
        event.preventDefault();
        paletteInput.value = "";
        filter("");
      }
    });

    palette.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      if (lastTrigger instanceof HTMLElement) {
        lastTrigger.focus();
      }
      lastTrigger = null;
    });

    palette.addEventListener("click", (event) => {
      if (event.target === palette) {
        palette.close();
      }
    });
  }
})();
