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

  /* ---------------------------------------------------------------- */
  /* X-ray Systems Data & Architectural Dissection                    */
  /* ---------------------------------------------------------------- */

  const XRAY_SYSTEMS = {
    shoboti: {
      name: "Shoboti",
      badge: "Creator Commerce",
      title: "Move the light across the creator panel",
      desc: "Move the cursor across the screen to look through it. The drawing underneath is the PostgreSQL schema, row-level locks, and transition guards that answer each click. Pick a marker to inspect the database guarantees. On a phone, or with reduced motion, the two layers sit side by side instead.",
      image: "assets/screens/shoboti-admin.webp",
      alt: "Shoboti creator panel showing net sales, orders, customers and products above a sales chart, an attention list and recent orders.",
      aspect: "1024 / 715",
      spots: [
        {
          id: 1,
          x: "28.2%",
          y: "29.7%",
          place: "right",
          title: "The four atomic counters",
          text: "Net sales, orders, customers and products resolve against <code>orders</code>, <code>payments</code> and <code>inventory</code> rows. Stock is bounded by database checks, <code>available &gt;= 0</code> and <code>reserved &lt;= available</code>, so an oversell fails in Postgres before it fails in the UI."
        },
        {
          id: 2,
          x: "38.1%",
          y: "52.4%",
          place: "right",
          title: "Revenue attributed, not estimated",
          text: "The seven-day chart is built from <code>analytics_events</code> joined through <code>content_products</code>, which is what lets a reel claim the money it earned instead of a number someone guessed at."
        },
        {
          id: 3,
          x: "84.6%",
          y: "50.1%",
          place: "left",
          title: "The attention queue",
          text: "Three lists a creator acts on: orders to fulfil, variants running low, and setup steps left. They read the same <code>orders.status</code> and <code>inventory</code> rows as the counters, so the panel cannot call a store healthy while it is out of stock."
        },
        {
          id: 4,
          x: "38.1%",
          y: "88.1%",
          place: "above",
          title: "Recent orders & audit log",
          text: "Each row is an <code>orders</code> record with its <code>order_items</code> and <code>payments</code> row. Status changes append to <code>order_activity_log</code>, so a disputed order can be replayed instead of argued about."
        },
        {
          id: 5,
          x: "59.3%",
          y: "3.6%",
          place: "below",
          title: "Unified multi-table search",
          text: "Products, orders and customers from a single field, because a creator looking for a customer should not have to know which table they live in."
        },
        {
          id: 6,
          x: "7%",
          y: "40%",
          place: "right",
          title: "Two separate worlds",
          text: "Creator identity lives in <code>platform_users</code> and <code>creator_settings</code>. Staff identity lives in <code>platform_staff_members</code> and <code>platform_staff_sessions</code>. A creator credential and a staff credential are never the same row."
        }
      ]
    },
    mrproper: {
      name: "Mr. Proper",
      badge: "Decision Intelligence & ERP",
      title: "Move the light across Mr. Proper Operations & Decision Intelligence ERP",
      desc: "Look beneath the commercial chemicals and B2B offline operations dashboard. The architecture aggregates offline distributor revenue, automated order volume batching, revolving credit risk monitoring, and automated ledger recovery webhooks.",
      image: "assets/screens/mrproper-admin.webp",
      alt: "Mr. Proper Decision Intelligence dashboard showing offline sales performance, positive growth trends, revenue attribution, and smart insights.",
      aspect: "1681 / 1057",
      spots: [
        {
          id: 1,
          x: "6.5%",
          y: "41.0%",
          place: "right",
          title: "Offline Sales & Field Rep Telemetry",
          text: "Manages distributor store visits, physical invoice logging, and field sales representative check-ins. Geo-tagged mobile check-ins and offline-first visit logs queue locally in IndexedDB, syncing with Supabase PostgreSQL via idempotent batch endpoints when connectivity restores."
        },
        {
          id: 2,
          x: "6.5%",
          y: "61.8%",
          place: "right",
          title: "Chemical BOM Batching & Floor ERP",
          text: "Manufacturing orchestration module: calculates raw surfactant concentrates, active alkali ratios, and fragrance dilutions per batch order. Transaction-level row locks auto-reserve raw chemical inventory in Postgres before dispatching mixing instructions to factory staff."
        },
        {
          id: 3,
          x: "27.1%",
          y: "26.9%",
          place: "right",
          title: "Executive KPI Engine & Realtime Ledger Sync",
          text: "Aggregates ₹24.85L in offline commercial revenue across 1,428 orders and 84 active regional distributors. Built with incremental materialized views in PostgreSQL that refresh on transactional change events rather than costly full-table scans."
        },
        {
          id: 4,
          x: "88.2%",
          y: "26.9%",
          place: "left",
          title: "Positive Growth & Margin Intelligence",
          text: "Calculates period-over-period expansion (+34.8% net growth) and credit exposure ratios (₹1.84L outstanding across revolving 30-day terms). Alerts prevent dispatch locking when distributor balances stay within safe credit thresholds."
        },
        {
          id: 5,
          x: "33.0%",
          y: "52.6%",
          place: "right",
          title: "12-Month Revenue Attribution Curve",
          text: "Tracks offline sales momentum across monthly and 30-day daily windows. Joined against <code>inventory_transactions</code> and raw chemical bill-of-materials batching, ensuring sales surges match factory floor mixing capacity."
        },
        {
          id: 6,
          x: "57.6%",
          y: "52.6%",
          place: "above",
          title: "Automated Order Volume Batching",
          text: "Displays unit order volumes scaling steadily to 140+ orders/mo. Behind each bar is an automated grouping pipeline that consolidates regional distributor orders into unified transport manifests, slashing freight overhead."
        },
        {
          id: 7,
          x: "82.2%",
          y: "52.6%",
          place: "left",
          title: "Omnichannel Revenue Attribution",
          text: "Donut breakdown partitions revenue across Bulk Commercial Chem (58%), B2B Hubs (28%), and Direct Offline Storefronts (14%). RLS policies restrict regional managers to their assigned territorial partitions."
        },
        {
          id: 8,
          x: "57.6%",
          y: "81.8%",
          place: "above",
          title: "Decision Intelligence & Automated Ledger Webhooks",
          text: "Background worker continuously evaluates aging balances, distributor reorder cycles, and SKU velocity gaps. Dispatches automated WhatsApp ledger summaries and payment reminder webhooks to maintain a 96.4% on-time settlement rate."
        }
      ]
    },
    hisab: {
      name: "Hisab AI",
      badge: "Fintech PWA",
      title: "Move the light across Hisab AI Financial Extraction Engine",
      desc: "Look beneath the vernacular financial PWA. Physical crumpled receipts, handwritten vendor bills, and multilingual voice memos get parsed through multimodal vision and committed into immutable double-entry accounting ledgers.",
      image: "assets/screens/hisab-desktop.webp",
      alt: "Hisab AI vernacular financial ledger, receipt extraction telemetry, and accounting dashboard.",
      aspect: "1536 / 1024",
      spots: [
        {
          id: 1,
          x: "20%",
          y: "28%",
          place: "right",
          title: "Multimodal Vision OCR Pipeline",
          text: "Gemini 2.0 Flash Vision extracts merchant identities, bill numbers, CGST/SGST tax breakdowns, and itemized line items from degraded mobile camera photos in under 1.8 seconds with structured schema validation."
        },
        {
          id: 2,
          x: "52%",
          y: "26%",
          place: "below",
          title: "Double-Entry Cryptographic Ledger",
          text: "Every entry automatically creates balanced debit and credit records. Rolling SHA-256 hash chains bind consecutive ledger rows, preventing retro-active record modification or balance tampering."
        },
        {
          id: 3,
          x: "82%",
          y: "28%",
          place: "left",
          title: "Supplier Udhaar & Aging Analysis",
          text: "Tracks supplier credit lines across 30, 60, and 90-day aging buckets. Automatically computes net outstanding liabilities and schedules WhatsApp/SMS payment reminder webhooks."
        },
        {
          id: 4,
          x: "26%",
          y: "68%",
          place: "right",
          title: "Offline-First IndexedDB Engine",
          text: "Local service worker stores entries in client-side IndexedDB when network drops. On reconnect, a conflict-free reconciliation worker synchronizes transactions with Supabase Postgres without data loss."
        },
        {
          id: 5,
          x: "62%",
          y: "68%",
          place: "above",
          title: "pgvector Semantic Financial Search",
          text: "Natural language queries like 'what did we spend on cement last month?' vectorize through embedding models to query PostgreSQL pgvector tables in under 20ms."
        },
        {
          id: 6,
          x: "86%",
          y: "62%",
          place: "left",
          title: "Voice Intent & Hinglish Audio Parser",
          text: "Speech recognition pipeline processes code-switched Hindi-English audio memos (e.g. 'Ramesh ko 500 diye kal subah'), parsing amounts, parties, and transaction types without manual typing."
        }
      ]
    },
    simvox: {
      name: "SIMVox-AI",
      badge: "Voice Telephony",
      title: "Move the light across SIMVox Cellular Voice Pipeline",
      desc: "Look beneath the open-source telephony agent. Physical Android cellular handsets connect over ADB to stream raw duplex call audio through a sub-second Gemini streaming pipeline with zero telecom trunk fees.",
      image: "assets/screens/simvox-ui.webp",
      alt: "SIMVox-AI desktop cellular operator console showing live audio waveforms and telephony state.",
      aspect: "1440 / 1000",
      spots: [
        {
          id: 1,
          x: "22%",
          y: "24%",
          place: "right",
          title: "Hardware ADB Audio Streamer",
          text: "Bridges raw PCM audio bidirectionally between Android handset cellular hardware and host PC via low-overhead ADB socket forwarding, completely bypassing VoIP/SIP providers and per-minute carrier trunk fees."
        },
        {
          id: 2,
          x: "50%",
          y: "22%",
          place: "below",
          title: "Sub-Second Streaming Voice Loop",
          text: "Silero VAD detects end-of-speech in ~80ms. Audio chunks stream directly to Gemini 2.0 streaming websockets, yielding first-byte audio synthesized responses within 400ms."
        },
        {
          id: 3,
          x: "80%",
          y: "22%",
          place: "left",
          title: "Neural TTS & Inflection Synthesis",
          text: "Edge Neural TTS engine synthesizes natural conversational voice with dynamic prosody and inflection modulation matched to caller sentiment and dialogue urgency."
        },
        {
          id: 4,
          x: "30%",
          y: "65%",
          place: "right",
          title: "Real-Time Audio Spectrum FFT",
          text: "High-performance Web Audio API analyzer renders 60fps reactive spectrum frequency bars in the desktop operator console, giving live visual confirmation of incoming caller audio packets."
        },
        {
          id: 5,
          x: "62%",
          y: "68%",
          place: "above",
          title: "Guardrails & Intent Routing Engine",
          text: "Strict system prompts and function-calling schema validators intercept prompt injections, verify caller authority, and restrict agent tools to authorized business operations."
        },
        {
          id: 6,
          x: "86%",
          y: "55%",
          place: "left",
          title: "Automated Call CRM Logging",
          text: "At call termination, the complete dialogue transcript, extracted follow-up tasks, sentiment scores, and audio recording hashes are committed atomically to SQLite/Postgres."
        }
      ]
    }
  };

  /* ---------------------------------------------------------------- */
  /* X-ray Controller                                                 */
  /* ---------------------------------------------------------------- */

  const xray = document.querySelector("[data-xray]");
  const xrayStack = xray?.querySelector(".xray__stack");
  const xrayBlueImg = xray?.querySelector(".xray__blue img");
  const xrayPhoto = xray?.querySelector(".xray__photo");
  const xraySpotsList = xray?.querySelector(".xray__spots");
  const xrayNotesList = xray?.querySelector(".xray__notes");
  const xrayTitle = document.getElementById("xray-title");
  const xrayDesc = document.getElementById("xray-desc");
  const xrayTabs = Array.from(document.querySelectorAll(".xray-switcher__tab"));

  let activeXrayKey = "shoboti";
  let pinnedSpot = null;

  function bindXraySpots() {
    pinnedSpot = null;
    const currentSpots = Array.from(document.querySelectorAll(".xray__spot"));
    if (!currentSpots.length) return;

    const setOpen = (spot, open) => {
      spot.setAttribute("aria-expanded", String(open));
      document.getElementById(spot.getAttribute("aria-controls"))?.classList.toggle("is-open", open);
    };

    const showOnly = (spot) => currentSpots.forEach((other) => setOpen(other, other === spot));

    const release = () => {
      pinnedSpot = null;
      currentSpots.forEach((other) => setOpen(other, false));
    };

    currentSpots.forEach((spot) => {
      const wrap = spot.parentElement;

      wrap.addEventListener("pointerenter", () => {
        if (finePointer) showOnly(spot);
      });

      wrap.addEventListener("pointerleave", () => {
        if (!finePointer) return;
        if (pinnedSpot) showOnly(pinnedSpot);
        else setOpen(spot, false);
      });

      spot.addEventListener("focus", () => showOnly(spot));

      spot.addEventListener("click", () => {
        pinnedSpot = pinnedSpot === spot ? null : spot;
        if (pinnedSpot) showOnly(spot);
        else setOpen(spot, false);
        window.AudioFX?.tap?.();
      });
    });

    if (xray && !xray._hasReleaseListener) {
      xray._hasReleaseListener = true;
      xray.addEventListener("click", (event) => {
        if (!event.target.closest(".xray__spot-wrap, .xray__pop")) release();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") release();
      });
    }
  }

  function renderXraySystem(key) {
    const data = XRAY_SYSTEMS[key];
    if (!data || !xray || !xrayStack) return;

    xrayStack.classList.add("is-swapping");

    setTimeout(() => {
      activeXrayKey = key;
      if (xrayTitle) xrayTitle.textContent = data.title;
      if (xrayDesc) xrayDesc.innerHTML = data.desc;

      xrayStack.style.aspectRatio = data.aspect;
      if (xrayBlueImg) xrayBlueImg.src = data.image;
      if (xrayPhoto) {
        xrayPhoto.src = data.image;
        xrayPhoto.alt = data.alt;
      }

      // Render spots
      if (xraySpotsList) {
        xraySpotsList.innerHTML = data.spots.map((s) => `
          <li class="xray__spot-wrap" style="--spot-x:${s.x};--spot-y:${s.y}">
            <button class="xray__spot" id="xray-spot-${s.id}" type="button" aria-expanded="false" aria-controls="xray-note-${s.id}">${s.id}</button>
          </li>
        `).join("");
      }

      // Render notes
      if (xrayNotesList) {
        xrayNotesList.innerHTML = data.spots.map((s) => `
          <div class="xray__pop" id="xray-note-${s.id}" style="--spot-x:${s.x};--spot-y:${s.y}" data-place="${s.place}" role="group" aria-labelledby="xray-spot-${s.id}">
            <h4>${s.title}</h4>
            <p>${s.text}</p>
          </div>
        `).join("");
      }

      // Re-bind spot hover and click listeners
      bindXraySpots();

      xrayStack.classList.remove("is-swapping");
    }, 110);
  }

  // Setup tab switcher click listeners
  if (xrayTabs.length) {
    xrayTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-xray-target");
        if (target === activeXrayKey) return;

        xrayTabs.forEach((t) => {
          const isActive = t === tab;
          t.classList.toggle("is-active", isActive);
          t.setAttribute("aria-selected", String(isActive));
        });

        window.AudioFX?.click?.();
        renderXraySystem(target);
      });
    });
  }

  // Initial binding of spots
  bindXraySpots();

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
  /* Hero mascot                                                      */
  /* ---------------------------------------------------------------- */
  /* The robot itself lives in mascot3d.js, which needs ES module       */
  /* imports, so it is pulled in after load and only when the main      */
  /* thread is idle. Phones too narrow to show it never download it.    */

  let mascotGlance = () => {};
  const mascotHost = document.querySelector("[data-mascot]");

  if (mascotHost) {
    let mascotBooted = false;

    const bootMascot = () => {
      if (mascotBooted) {
        return;
      }
      mascotBooted = true;

      import("./mascot3d.js?v=20261022_19")
        .then(() => {
          mascotGlance = () => {
            if (typeof window.__mascotGlance === "function") {
              window.__mascotGlance();
            }
          };
        })
        .catch((error) => {
          console.warn("mascot: unavailable", error);
        });
    };

    const scheduleMascot = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(bootMascot, { timeout: 2000 });
      } else {
        window.setTimeout(bootMascot, 800);
      }
    };

    const startMascot = () => {
      if (document.readyState === "complete") {
        scheduleMascot();
      } else {
        window.addEventListener("load", scheduleMascot, { once: true });
      }
    };

    startMascot();
  }

  /* ---------------------------------------------------------------- */
  /* Mascot speech cloud bubble (Desktop only)                        */
  /* ---------------------------------------------------------------- */
  /* Contextual speech bubble directly above the 3D robot. Reacts to  */
  /* hovered hero elements with an optimized dwell delay (180ms) and  */
  /* automatically resets after 3.5s. Viewport culled via             */
  /* IntersectionObserver so it takes 0% load when scrolled away.     */
  const initMascotSpeech = () => {
    const speechEl = document.getElementById("mascot-speech");
    const textEl = document.getElementById("mascot-speech-text");
    const heroEl = document.querySelector(".hero");
    if (!speechEl || !textEl || !heroEl) return;

    const isDesktop = () => window.matchMedia("(min-width: 900px)").matches;
    if (!isDesktop()) return;

    const DEFAULT_TEXT = "Welcome! Take a look around 👋";
    let currentText = DEFAULT_TEXT;
    let dwellTimer = null;
    let resetTimer = null;
    let isHeroVisible = true;

    const setBubbleText = (nextText) => {
      if (nextText === currentText) return;
      currentText = nextText;
      speechEl.classList.add("is-switching");
      window.setTimeout(() => {
        textEl.textContent = nextText;
        speechEl.classList.remove("is-switching");
      }, 120);
    };

    const scheduleReset = () => {
      if (resetTimer) window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        if (isHeroVisible && isDesktop()) {
          setBubbleText(DEFAULT_TEXT);
        }
      }, 3500);
    };

    const triggers = [
      {
        selector: '.hero-actions a[href="#work"]',
        text: "Yeah, go ahead! Check out the systems and code.",
      },
      {
        selector: '.hero-actions a[href^="mailto:"]',
        text: "Drop a note directly to Mayank's inbox ✉️",
      },
      {
        selector: '.hero-actions a[href*="linkedin.com"]',
        text: "Let's connect professionally on LinkedIn!",
      },
      {
        selector: '.brand',
        text: "Back to top! Always here to guide your tour.",
      },
      {
        selector: '.site-nav a[href="#work"]',
        text: "Explore production web platforms & flagship projects.",
      },
      {
        selector: '.site-nav a[href="#systems"]',
        text: "Deep architectural breakdowns & system designs.",
      },
      {
        selector: '.site-nav a[href="#console"]',
        text: "Interactive terminal console with live system logs.",
      },
      {
        selector: '.site-nav a[href="#about"]',
        text: "Engineering philosophy, pedigree & technical background.",
      },
      {
        selector: '.site-nav a[href="#experience"]',
        text: "Verified production history across startups & client teams.",
      },
      {
        selector: '.site-nav a[href="#skills"]',
        text: "Full-stack toolkit: Next.js, Python, PostgreSQL & AI.",
      },
      {
        selector: '.site-nav a[href="#contact"]',
        text: "Start a conversation or discuss engineering roles!",
      },
      {
        selector: '.header-cta',
        text: "Drop an email directly to Mayank's inbox ✉️",
      },
      {
        selector: "#hero-title, .hero-line",
        text: "That's Mayank — full-stack architect & AI builder.",
      },
      {
        selector: ".eyebrow",
        text: "Sub-second AI pipelines & low-latency backends.",
      },
      {
        selector: ".hero-lede",
        text: "Zero fluff. Real production code solving real problems.",
      },
      {
        selector: ".hero-meta li",
        text: "Bangalore IST · Ready for immediate remote work.",
      },
      {
        selector: ".profile-card",
        text: "That's Mayank's live stack: Next.js, Python, PostgreSQL!",
      },
      {
        selector: ".mascot",
        text: "Beep boop! I'm Mayank's autonomous co-pilot 🤖",
      },
      {
        selector: "[data-palette-open]",
        text: "Hit Ctrl+K anytime for instant search & navigation!",
      },
      {
        selector: "[data-sound-toggle]",
        text: "Tactile mechanical sounds crafted with Web Audio!",
      },
    ];

    const onElementEnter = (text) => {
      if (!isHeroVisible || !isDesktop()) return;
      if (resetTimer) {
        window.clearTimeout(resetTimer);
        resetTimer = null;
      }
      if (dwellTimer) window.clearTimeout(dwellTimer);
      dwellTimer = window.setTimeout(() => {
        if (isHeroVisible && isDesktop()) {
          setBubbleText(text);
        }
      }, 180);
    };

    const onElementLeave = () => {
      if (dwellTimer) {
        window.clearTimeout(dwellTimer);
        dwellTimer = null;
      }
      scheduleReset();
    };

    triggers.forEach(({ selector, text }) => {
      const items = document.querySelectorAll(selector);
      items.forEach((item) => {
        item.addEventListener("mouseenter", () => onElementEnter(text));
        item.addEventListener("mouseleave", onElementLeave);
        item.addEventListener("focus", () => onElementEnter(text));
        item.addEventListener("blur", onElementLeave);
      });
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        (entries) => {
          isHeroVisible = entries[0].isIntersecting;
          if (!isHeroVisible) {
            if (dwellTimer) window.clearTimeout(dwellTimer);
            if (resetTimer) window.clearTimeout(resetTimer);
            setBubbleText(DEFAULT_TEXT);
          }
        },
        { threshold: 0 }
      ).observe(heroEl);
    }
  };

  initMascotSpeech();

  /* ---------------------------------------------------------------- */
  /* Hero spacetime mesh                                              */
  /* ---------------------------------------------------------------- */
  /* A wire floor in perspective that dents into a gravity well under  */
  /* the pointer, glows where it dents, and ripples slowly once the    */
  /* pointer rests. Canvas 2D with no dependencies: the grid is        */
  /* projected by hand, displaced by a gaussian, and batched into a    */
  /* handful of alpha buckets so a frame costs a few stroke calls.     */
  /* Same motion contract as the mascot — one flat frame when motion   */
  /* is off, nothing at all when the hero is out of view.              */

  const meshCanvas = document.querySelector(".hero-mesh");
  const meshStage = document.querySelector(".hero-stage");
  const meshHero = document.querySelector(".hero");

  if (meshCanvas && meshStage && meshHero) {
    const meshCtx = meshCanvas.getContext("2d");
    const meshReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const meshCoarse = window.matchMedia("(hover: none), (pointer: coarse)");
    const meshStill = () =>
      meshReduce.matches ||
      document.documentElement.dataset.motion === "off" ||
      meshCoarse.matches ||
      window.innerWidth <= 768;

    const ROWS = 28;
    const COLS = 38;
    const BUCKETS = 5;
    const BUCKET_ALPHA = [0.08, 0.16, 0.28, 0.45, 0.68];
    const BUCKET_RGB = [
      "224,166,120",
      "224,166,120",
      "229,178,134",
      "236,194,154",
      "243,216,186",
    ];

    let mw = 0;
    let mh = 0;
    let mRatio = 0;
    let mElapsed = 0;
    let mLast = 0;
    let mRunning = false;
    let mRaf = 0;
    let mVisible = true;
    let lastPointerT = -10;
    const well = { x: -9999, y: -9999, strength: 0 };

    /* (ROWS+1) x (COLS+1) vertices, reused every frame */
    const vx = new Float32Array((ROWS + 1) * (COLS + 1));
    const vy = new Float32Array((ROWS + 1) * (COLS + 1));
    const vg = new Float32Array((ROWS + 1) * (COLS + 1));
    const vu = new Float32Array((ROWS + 1) * (COLS + 1));
    const paths = [];
    for (let i = 0; i < BUCKETS; i++) paths.push(new Path2D());

    const sizeMesh = () => {
      const h = meshHero.offsetHeight;
      if (!h) return false;
      meshStage.style.height = h + "px";
      const w = meshStage.clientWidth;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      if (w && w === mw && h === mh && ratio === mRatio) return true;
      mw = w;
      mh = h;
      mRatio = ratio;
      meshCanvas.width = Math.round(w * ratio);
      meshCanvas.height = Math.round(h * ratio);
      return true;
    };

    function drawMesh(t, idle, noWell) {
      if (!mw || !mh) return;
      meshCtx.setTransform(mRatio, 0, 0, mRatio, 0, 0);
      meshCtx.clearRect(0, 0, mw, mh);

      const horizon = -mh * 0.12;
      const near = mh * 1.15;
      const sigma = Math.max(Math.min(mw, mh) * 0.28, 270);
      const amp = noWell ? 0 : Math.min(mw, mh) * 0.16 * well.strength;
      const twoSigmaSq = 2 * sigma * sigma;

      for (let r = 0; r <= ROWS; r++) {
        const tr = r / ROWS;
        const u = tr * tr * 0.58 + tr * 0.42;
        const yBase = horizon + (near - horizon) * u;
        const half = mw * (0.68 + 0.48 * u);
        for (let c = 0; c <= COLS; c++) {
          const sx = (c / COLS) * 2 - 1;
          let x = mw / 2 + sx * half;
          let y = yBase;

          if (idle > 0) {
            y += Math.sin(sx * 2.4 + t * 0.8) * 3.2 * u * idle;
            y += Math.cos(u * 5 - t * 0.6) * 2.4 * u * idle;
          }

          let g = 0;
          if (amp > 0.01) {
            const dx = x - well.x;
            const dy = (y - well.y) * 1.55;
            g = Math.exp(-(dx * dx + dy * dy) / twoSigmaSq);
            y += g * amp;
            x += (well.x - x) * 0.1 * g;
          }

          const i = r * (COLS + 1) + c;
          vx[i] = x;
          vy[i] = y;
          vg[i] = g;
          vu[i] = u;
        }
      }

      for (let i = 0; i < BUCKETS; i++) paths[i] = new Path2D();

      const place = (a, b) => {
        const u = Math.max(vu[a], vu[b]);
        let alpha = 0.07 + 0.14 * u;
        alpha += Math.max(vg[a], vg[b]) * 0.65 * well.strength;
        let bucket = Math.floor(alpha / 0.1);
        if (bucket < 0) bucket = 0;
        if (bucket >= BUCKETS) bucket = BUCKETS - 1;
        const p = paths[bucket];
        p.moveTo(vx[a], vy[a]);
        p.lineTo(vx[b], vy[b]);
      };

      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          place(r * (COLS + 1) + c, r * (COLS + 1) + c + 1);
        }
      }
      for (let c = 0; c <= COLS; c++) {
        for (let r = 0; r < ROWS; r++) {
          place(r * (COLS + 1) + c, (r + 1) * (COLS + 1) + c);
        }
      }

      meshCtx.lineWidth = 1;
      for (let i = 0; i < BUCKETS; i++) {
        meshCtx.strokeStyle = "rgba(" + BUCKET_RGB[i] + "," + BUCKET_ALPHA[i] + ")";
        meshCtx.stroke(paths[i]);
      }
    }

    const clamp01 = (v) => Math.min(1, Math.max(0, v));

    function meshTick() {
      mRaf = requestAnimationFrame(meshTick);
      const now = performance.now() / 1000;
      const dt = Math.min(now - mLast, 0.05);
      mLast = now;
      mElapsed += dt;

      const want = mElapsed - lastPointerT < 2.2 ? 1 : 0;
      well.strength += (want - well.strength) * Math.min(1, dt * 4);
      const idle = clamp01((mElapsed - lastPointerT - 2.2) / 1.5);
      drawMesh(mElapsed, idle, false);
    }

    const startMesh = () => {
      if (mRunning) return;
      mRunning = true;
      mLast = performance.now() / 1000;
      mRaf = requestAnimationFrame(meshTick);
    };

    const stopMesh = () => {
      if (!mRunning) return;
      mRunning = false;
      cancelAnimationFrame(mRaf);
    };

    const meshStatic = () => {
      if (sizeMesh()) drawMesh(0, 0, true);
    };

    const meshSync = () => {
      if (meshStill() || document.hidden || !mVisible || !sizeMesh()) {
        stopMesh();
        if (meshStill() && mw && mh) meshStatic();
        return;
      }
      startMesh();
    };

    const onMeshPointer = (event) => {
      if (event.clientX === undefined) return;
      if (event.pointerType === "touch" || meshCoarse.matches || window.innerWidth <= 768) return;
      const rect = meshCanvas.getBoundingClientRect();
      well.x = event.clientX - rect.left;
      well.y = event.clientY - rect.top;
      lastPointerT = mElapsed;
    };

    window.addEventListener("pointermove", onMeshPointer, { passive: true });
    window.addEventListener("pointerdown", onMeshPointer, { passive: true });

    new IntersectionObserver(
      (entries) => {
        mVisible = entries[0].isIntersecting;
        meshSync();
      },
      { threshold: 0 }
    ).observe(meshHero);

    new ResizeObserver(() => {
      if (meshStill()) {
        stopMesh();
        meshStatic();
        return;
      }
      sizeMesh();
      meshSync();
    }).observe(meshHero);

    document.addEventListener("visibilitychange", meshSync);
    meshReduce.addEventListener("change", meshSync);
    new MutationObserver(meshSync).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });

    meshSync();
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
      mascotGlance();
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

  /* ================================================================ */
  /* ULTRA-WOW MODULES: AudioFX, Toast, HUD, KeyboardOS, Sandboxes    */
  /* ================================================================ */

  /* 1. Tactile Audio Synthesizer (Web Audio API, 0KB assets) ------- */
  const AudioFX = (() => {
    let ctx = null;
    let enabled = false;

    const init = () => {
      if (!ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) ctx = new AudioContextClass();
      }
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
    };

    const isEnabled = () => enabled;

    const setEnabled = (val) => {
      enabled = Boolean(val);
      try {
        localStorage.setItem("ma_sound_enabled", enabled ? "1" : "0");
      } catch (e) {}
      document.querySelectorAll("[data-sound-toggle]").forEach((btn) => {
        btn.setAttribute("aria-pressed", enabled ? "true" : "false");
        btn.classList.toggle("sound-toggle--active", enabled);
      });
      const hudSound = document.querySelector("[data-hud-sound]");
      if (hudSound) {
        hudSound.textContent = enabled ? "ON" : "OFF";
      }
      if (enabled) {
        init();
        chime();
      }
    };

    const click = () => {
      if (!enabled || !ctx) return;
      try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(1400, t);
        osc.frequency.exponentialRampToValueAtTime(320, t + 0.012);
        gain.gain.setValueAtTime(0.04, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.012);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.012);
      } catch (e) {}
    };

    const tap = () => {
      if (!enabled || !ctx) return;
      try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(280, t);
        osc.frequency.exponentialRampToValueAtTime(80, t + 0.022);
        gain.gain.setValueAtTime(0.05, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.022);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.022);
      } catch (e) {}
    };

    const chime = () => {
      if (!enabled || !ctx) return;
      try {
        const t = ctx.currentTime;
        [587.33, 880].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, t + i * 0.06);
          gain.gain.setValueAtTime(0.045, t + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.06 + 0.14);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t + i * 0.06);
          osc.stop(t + i * 0.06 + 0.15);
        });
      } catch (e) {}
    };

    try {
      enabled = localStorage.getItem("ma_sound_enabled") === "1";
    } catch (e) {}

    document.querySelectorAll("[data-sound-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        init();
        setEnabled(!enabled);
      });
      if (enabled) {
        btn.setAttribute("aria-pressed", "true");
        btn.classList.add("sound-toggle--active");
      }
    });

    const hudSound = document.querySelector("[data-hud-sound]");
    if (hudSound && enabled) {
      hudSound.textContent = "ON";
    }

    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest("button, a, .chip, [role='button'], [data-flow] .flow__node")) {
        tap();
      }
    });

    return { init, isEnabled, setEnabled, click, tap, chime };
  })();

  /* 2. Sonner-Style Spring Toast Feedback --------------------------- */
  const Toast = {
    show(message, type = "info") {
      let container = document.getElementById("toast-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        container.setAttribute("aria-live", "polite");
        document.body.appendChild(container);
      }
      const toast = document.createElement("div");
      toast.className = `toast toast--${type}`;
      toast.innerHTML = `
        <div class="toast__icon" aria-hidden="true">${type === "success" ? "✓" : "ℹ"}</div>
        <div class="toast__msg">${message}</div>
      `;
      container.appendChild(toast);
      AudioFX.chime();

      requestAnimationFrame(() => {
        toast.classList.add("toast--visible");
      });

      setTimeout(() => {
        toast.classList.remove("toast--visible");
        toast.classList.add("toast--exit");
        setTimeout(() => toast.remove(), 260);
      }, 3400);
    }
  };

  /* 3. Engineering HUD Clock ---------------------------------------- */
  const hudClock = document.querySelector("[data-hud-clock]");
  if (hudClock) {
    const updateClock = () => {
      const now = new Date();
      hudClock.textContent = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) + " IST";
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  /* 4. Global Keyboard OS Layer ------------------------------------ */
  window.addEventListener("keydown", (e) => {
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || (document.activeElement && document.activeElement.isContentEditable)) {
      return;
    }

    const key = e.key.toLowerCase();

    const projectMap = {
      "1": "#project-shoboti",
      "2": "#project-hisab",
      "3": "#project-simvox",
      "4": "#project-mrproper",
      "5": "#project-tenderiq"
    };

    if (projectMap[key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      const el = document.querySelector(projectMap[key]);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        AudioFX.click();
      }
      return;
    }

    if (key === "c" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      const email = "agrawalmayank1111@gmail.com";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          Toast.show(`Copied ${email} to clipboard!`, "success");
        }).catch(() => {
          Toast.show(`Email: ${email}`, "info");
        });
      } else {
        Toast.show(`Email: ${email}`, "info");
      }
      return;
    }

    if (key === "r" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      AudioFX.chime();
      Toast.show("Opening Mayank Agrawal's Resume (PDF)...", "info");
      window.open("Mayank_Agrawal_Resume.pdf", "_blank", "noopener");
      return;
    }

    if (key === "s" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      AudioFX.init();
      AudioFX.setEnabled(!AudioFX.isEnabled());
      Toast.show(`Tactile Sound: ${AudioFX.isEnabled() ? "ENABLED (Web Audio API)" : "MUTED"}`, "info");
      return;
    }
  });

  /* 4. Interactive Case Workbench Collapsible Drawers ---------------- */
  const workbenches = document.querySelectorAll("[data-workbench]");
  workbenches.forEach((wb) => {
    const trigger = wb.querySelector(".workbench-trigger");
    const drawer = wb.querySelector(".workbench-drawer");
    const label = wb.querySelector(".workbench-trigger__label");
    const isSimvox = wb.getAttribute("data-workbench") === "simvox";

    if (!trigger || !drawer) return;

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      trigger.setAttribute("aria-expanded", String(nextState));
      drawer.setAttribute("aria-hidden", String(!nextState));
      if (nextState) {
        drawer.removeAttribute("inert");
      } else {
        drawer.setAttribute("inert", "");
      }
      wb.classList.toggle("case-workbench--expanded", nextState);

      if (label) {
        label.textContent = nextState
          ? (isSimvox ? "Close Bench" : "Close Sandbox")
          : (isSimvox ? "Open Bench" : "Open Sandbox");
      }

      AudioFX.click();

      if (nextState) {
        Toast.show(
          isSimvox
            ? "Voice Telemetry Bench activated (<800ms SLA)"
            : "Bahi-Khata Sandbox activated (<1ms local parse)",
          "info"
        );
      }
    });
  });

  /* 5. Hisab AI Natural Language Bahi-Khata Ledger Sandbox ------------ */
  const hisabSandbox = document.querySelector("[data-hisab-sandbox]");
  if (hisabSandbox) {
    const form = hisabSandbox.querySelector("[data-hisab-form]");
    const input = hisabSandbox.querySelector("#hisab-input");
    const list = hisabSandbox.querySelector("[data-hisab-list]");
    const recvEl = hisabSandbox.querySelector("[data-hisab-receivable]");
    const payEl = hisabSandbox.querySelector("[data-hisab-payable]");
    const lastPartyEl = document.getElementById("hisab-last-party");
    const lastRoleEl = document.getElementById("hisab-last-role");
    const chips = hisabSandbox.querySelectorAll("[data-hisab-chip]");

    // Pre-loaded realistic Bahi-Khata ledger state
    const state = {
      entries: [
        {
          party: "Mr. Proper",
          role: "Supplier",
          type: "Udhaar Taken",
          desc: "Raw materials credit",
          amt: 3000,
          direction: "payable", // You owe
          time: "Just now"
        },
        {
          party: "Gaurav",
          role: "Customer",
          type: "Udhaar Given",
          desc: "Credit sale",
          amt: 300,
          direction: "receivable", // Owes you
          time: "10 mins ago"
        },
        {
          party: "Sharma Hardware",
          role: "Supplier",
          type: "Udhaar Taken",
          desc: "Cement materials",
          amt: 1200,
          direction: "payable", // You owe
          time: "Yesterday"
        },
        {
          party: "Ramesh",
          role: "Customer",
          type: "Payment Received",
          desc: "Jama / settled balance",
          amt: 500,
          direction: "settled",
          time: "2 days ago"
        }
      ]
    };

    const KNOWN_PARTIES = {
      "mr proper": { name: "Mr. Proper", role: "Supplier", desc: "Chemical & raw materials vendor" },
      "mr. proper": { name: "Mr. Proper", role: "Supplier", desc: "Chemical & raw materials vendor" },
      "mrproper": { name: "Mr. Proper", role: "Supplier", desc: "Chemical & raw materials vendor" },
      "sharma hardware": { name: "Sharma Hardware", role: "Supplier", desc: "Building materials vendor" },
      "sharma ji": { name: "Sharma Hardware", role: "Supplier", desc: "Building materials vendor" },
      "gaurav": { name: "Gaurav", role: "Customer", desc: "Wholesale retail client" },
      "ramesh": { name: "Ramesh", role: "Customer", desc: "Local customer" },
      "mukesh": { name: "Mukesh", role: "Customer", desc: "Walk-in customer" },
      "satyam": { name: "Satyam", role: "Customer", desc: "Customer account" }
    };

    const render = () => {
      if (!list) return;

      list.innerHTML = state.entries.map((e) => {
        let badgeClass = "hisab-item-badge--cust";
        let dirLabel = "";
        let amtClass = "";

        if (e.direction === "payable") {
          badgeClass = "hisab-item-badge--supp";
          dirLabel = "You owe";
          amtClass = "hisab-amt--payable";
        } else if (e.direction === "receivable") {
          badgeClass = "hisab-item-badge--cust";
          dirLabel = "Owed to you";
          amtClass = "hisab-amt--receivable";
        } else if (e.direction === "settled") {
          badgeClass = "hisab-item-badge--settled";
          dirLabel = "Jama / Received";
          amtClass = "hisab-amt--settled";
        } else {
          badgeClass = "hisab-item-badge--exp";
          dirLabel = "Expense Paid";
          amtClass = "hisab-amt--expense";
        }

        return `
          <li class="hisab-ledger__item">
            <div class="hisab-ledger__item-left">
              <div class="hisab-ledger__party-row">
                <strong class="hisab-ledger__party-name">${e.party}</strong>
                <span class="hisab-item-badge ${badgeClass}">${e.role}</span>
              </div>
              <span class="hisab-ledger__note">${e.desc} · <span class="hisab-ledger__time">${e.time}</span></span>
            </div>
            <div class="hisab-ledger__item-right">
              <span class="hisab-ledger__dir-tag">${dirLabel}</span>
              <span class="hisab-ledger__amt ${amtClass}">₹${e.amt.toLocaleString("en-IN")}</span>
            </div>
          </li>
        `;
      }).join("");

      // Calculate Bahi-Khata balances
      let totalRecv = 0;
      let totalPay = 0;
      state.entries.forEach((e) => {
        if (e.direction === "receivable") totalRecv += e.amt;
        else if (e.direction === "payable") totalPay += e.amt;
      });

      if (recvEl) recvEl.textContent = `Owed to you: ₹${totalRecv.toLocaleString("en-IN")}`;
      if (payEl) payEl.textContent = `You owe: ₹${totalPay.toLocaleString("en-IN")}`;
    };

    const parseKhataEntry = (raw) => {
      if (!raw || !raw.trim()) return;
      const text = raw.trim();
      const lower = text.toLowerCase();

      // Extract amount (supports ₹300, 300, 3k, 3000)
      let amt = 300;
      const numMatch = text.match(/(?:₹|rs\.?|inr)?\s*(\d+(?:,\d+)*(?:\.\d+)?)\s*([kK])?/i);
      if (numMatch) {
        amt = parseFloat(numMatch[1].replace(/,/g, ""));
        if (numMatch[2]) amt *= 1000;
      }

      // Check intent keywords
      const isUdhaar = /\b(udhaar|udhar|udhari|baki|credit|baaki)\b/i.test(lower);
      const isJama = /\b(jama|mila|aaya|aya|received|settle|settled|vasool|paid back)\b/i.test(lower);
      const isExpense = /\b(diesel|petrol|swiggy|zomato|chai|tea|auto|cab|uber|bill|electricity|rent|food)\b/i.test(lower);

      // Identify party
      let party = "";
      let role = "Customer";
      let direction = "receivable"; // Default: customer owes you
      let desc = isUdhaar ? "Udhaar given" : "Khata credit";

      // Match known parties first
      let matchedPartyKey = null;
      for (const key of Object.keys(KNOWN_PARTIES)) {
        if (lower.includes(key)) {
          matchedPartyKey = key;
          break;
        }
      }

      if (matchedPartyKey) {
        const found = KNOWN_PARTIES[matchedPartyKey];
        party = found.name;
        role = found.role;
        desc = found.desc;
        if (role === "Supplier") {
          // In Hisab AI: Supplier udhaar means "You owe supplier"
          direction = isJama ? "settled" : "payable";
          desc = isJama ? "Payment to supplier" : "Goods on Udhaar (Credit)";
        } else {
          // Customer udhaar means "Customer owes you"
          direction = isJama ? "settled" : "receivable";
          desc = isJama ? "Jama / Account settled" : "Udhaar sale (Owed to you)";
        }
      } else if (isExpense) {
        const words = text.replace(/[\d,kK₹]/g, "").trim();
        party = words.charAt(0).toUpperCase() + words.slice(1) || "Expense";
        role = "Shop Expense";
        direction = "expense";
        desc = "Operational expense";
      } else {
        // Inferred entity from text tokens
        const cleaned = text
          .replace(/[\d,kK₹]/g, "")
          .replace(/\b(udhaar|udhar|udhari|baki|jama|diya|liya|ko|se|for|via|cash|upi|cement)\b/gi, "")
          .trim();
        party = cleaned ? cleaned.split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Party";

        // Supplier heuristics (stores, hardware, traders, enterprise)
        if (/\b(hardware|traders|agency|enterprise|cement|supplies|wholesaler|distributor)\b/i.test(lower)) {
          role = "Supplier";
          direction = "payable";
          desc = "Goods purchased on credit";
        } else if (isJama) {
          role = "Customer";
          direction = "settled";
          desc = "Jama / Account settled";
        } else {
          role = "Customer";
          direction = "receivable";
          desc = "Udhaar sale (Owed to you)";
        }
      }

      // Add to front of ledger
      state.entries.unshift({
        party,
        role,
        type: isJama ? "Payment Received" : isUdhaar ? "Udhaar" : "Ledger Entry",
        desc,
        amt,
        direction,
        time: "Just now"
      });

      // Keep max 8 items
      if (state.entries.length > 8) state.entries.pop();

      // Update telemetry display
      if (lastPartyEl) lastPartyEl.textContent = party;
      if (lastRoleEl) {
        lastRoleEl.textContent = `${role} · ${
          direction === "payable" ? `You Owe ₹${amt.toLocaleString("en-IN")}` :
          direction === "receivable" ? `Owed to you ₹${amt.toLocaleString("en-IN")}` :
          direction === "settled" ? `Settled ₹${amt.toLocaleString("en-IN")}` :
          `Paid ₹${amt.toLocaleString("en-IN")}`
        }`;
      }

      render();
      AudioFX.chime();
      Toast.show(
        `Parsed "${party}": ${
          direction === "payable" ? `You owe ₹${amt}` :
          direction === "receivable" ? `Owes you ₹${amt}` :
          `Received ₹${amt}`
        } (<1ms)`,
        "success"
      );
    };

    if (form && input) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        parseKhataEntry(input.value);
        input.value = "";
      });
    }

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const val = chip.getAttribute("data-hisab-chip");
        if (input) input.value = val;
        parseKhataEntry(val);
      });
    });

    render();
  }

  /* 6. SIMVox-AI Latency Waterfall & Audio Canvas Simulator ---------- */
  const simvoxBench = document.querySelector("[data-simvox-bench]");
  if (simvoxBench) {
    const canvas = document.getElementById("simvox-canvas");
    const triggerBtn = simvoxBench.querySelector("[data-simvox-trigger]");
    const totalMsEl = simvoxBench.querySelector("[data-simvox-total]");
    const hzEl = simvoxBench.querySelector("[data-simvox-hz]");
    const dbEl = simvoxBench.querySelector("[data-simvox-db]");
    const rateBtns = simvoxBench.querySelectorAll("[data-rate]");
    const steps = simvoxBench.querySelectorAll(".simvox-waterfall__step");

    let isSimulating = false;
    let sampleRate = 48;
    let phase = 0;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      const drawWave = () => {
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        ctx.strokeStyle = isSimulating ? "#e0a678" : "rgba(224, 166, 120, 0.45)";
        ctx.lineWidth = isSimulating ? 2 : 1.5;
        ctx.beginPath();

        const amplitude = isSimulating ? 36 : 14;
        const freq = isSimulating ? 0.038 : 0.022;

        for (let x = 0; x < w; x++) {
          const y = h / 2 + Math.sin(x * freq + phase) * amplitude * Math.sin((x / w) * Math.PI);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        phase += isSimulating ? 0.16 : 0.05;
        requestAnimationFrame(drawWave);
      };
      drawWave();
    }

    const runSimulation = () => {
      if (isSimulating) return;
      isSimulating = true;
      if (triggerBtn) {
        triggerBtn.disabled = true;
        triggerBtn.innerHTML = `<span class="hud__pulse" aria-hidden="true"></span> Streaming Turn...`;
      }
      if (dbEl) dbEl.textContent = "-14.2 dB (ACTIVE)";
      AudioFX.tap();

      const times = sampleRate === 48
        ? [38, 16, 478, 162]
        : [28, 14, 460, 150];

      let currentStep = 0;

      const advance = () => {
        if (currentStep < steps.length) {
          steps.forEach((s, idx) => {
            s.classList.toggle("simvox-waterfall__step--active", idx === currentStep);
          });
          AudioFX.click();
          currentStep++;
          setTimeout(advance, 220);
        } else {
          steps.forEach((s) => s.classList.remove("simvox-waterfall__step--active"));
          const total = times.reduce((a, b) => a + b, 0);
          if (totalMsEl) totalMsEl.textContent = `${total}ms`;
          if (dbEl) dbEl.textContent = "-28.4 dB (IDLE)";
          if (triggerBtn) {
            triggerBtn.disabled = false;
            triggerBtn.innerHTML = `<svg class="icon" viewBox="0 0 16 16" aria-hidden="true"><polygon points="4,2 14,8 4,14"/></svg> Simulate Voice Turn`;
          }
          isSimulating = false;
          AudioFX.chime();
          Toast.show(`Voice Turn Completed: ${total}ms (SLA target <800ms met)`, "success");
        }
      };

      advance();
    };

    if (triggerBtn) {
      triggerBtn.addEventListener("click", runSimulation);
    }

    rateBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        rateBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        sampleRate = parseInt(btn.getAttribute("data-rate"), 10) || 48;
        if (hzEl) hzEl.textContent = `${sampleRate} kHz / 16-bit`;
        AudioFX.tap();
        Toast.show(`WASAPI Stream rate configured: ${sampleRate} kHz`, "info");
      });
    });
  }

  /* 7. Inline Project Overview & Architecture Drawer ------------------ */
  const moreWorkDrawer = document.getElementById("more-work-drawer");
  const moreWorkPanel = document.getElementById("more-work-panel");
  if (moreWorkDrawer && moreWorkPanel) {
    const badgeEl = document.getElementById("more-work-badge");
    const yearEl = document.getElementById("more-work-year");
    const titleEl = document.getElementById("more-work-title");
    const subtitleEl = document.getElementById("more-work-subtitle");
    const roleEl = document.getElementById("more-work-role");
    const metricsEl = document.getElementById("more-work-metrics");
    const overviewEl = document.getElementById("more-work-overview");
    const tagsEl = document.getElementById("more-work-tags");
    const linkEl = document.getElementById("more-work-link");
    const linkLabelEl = document.getElementById("more-work-link-label");
    const closeBtn = document.getElementById("more-work-close");
    const cards = document.querySelectorAll("[data-more-work-card]");

    const PROJECT_DETAILS = {
      tenderflow: {
        badge: "Live Platform · Production",
        badgeType: "live",
        year: "2026",
        title: "TenderFlow AI",
        subtitle: "Autonomous Government Tender Discovery & Multimodal AI Procurement Platform",
        role: "Lead Full-Stack Architect & Systems Engineer",
        metrics: [
          { val: "24/7", label: "Autonomous GeM / CPPP tender scraping pipeline" },
          { val: "< 3s", label: "80-page PDF clause & ATC condition extraction" },
          { val: "Bilingual", label: "Hindi (हिंदी सारांश) & English executive briefs" }
        ],
        paragraphs: [
          "Public procurement notices in India are fragmented across GeM, CPPP, and state portals, with buyers uploading complex 50–100 page PDFs and secondary specification sheets. Missing an EMD exemption deadline, turnover threshold, or OEM authorization clause disqualifies bids before evaluation.",
          "TenderFlow AI automates this entire lifecycle: Playwright background workers monitor designated ministries and product categories 24/7, bypassing portal bot defenses. Gemini 2.0 Flash Vision reads scanned documents to extract eligibility criteria, compliance risks, and dual-language summaries, pushing instant alerts to enterprise contractors."
        ],
        techStack: ["Next.js 15", "TypeScript", "Firebase Firestore", "Gemini 2.0 Flash Vision", "Playwright", "Tailwind CSS"],
        primaryAction: {
          label: "View Architecture & Showcase Repo",
          url: "https://github.com/Magraa/TenderFlow-AI-Showcase"
        }
      },
      coupletrust: {
        badge: "Native Android · Verified MVP",
        badgeType: "android",
        year: "2026",
        title: "CoupleTrust",
        subtitle: "Privacy-First Digital Transparency & Mutual Consent Platform for Couples",
        role: "Creator & Android Systems Developer",
        metrics: [
          { val: "100%", label: "Mutual, voluntary consent (transparency, not surveillance)" },
          { val: "17 / 17", label: "Firestore security rule emulator tests verified" },
          { val: "Zero Chat", label: "No private messages accessed; strictly aggregate metadata" }
        ],
        paragraphs: [
          "Built around the core tenet 'Transparency, not surveillance', CoupleTrust was engineered for couples who want to voluntarily share agreed digital-usage metrics (screen time, app categories, notification volume) without spyware, keyloggers, or hidden trackers.",
          "All data sharing requires strict two-way mutual reciprocity: either partner can revoke consent instantly, triggering immediate cryptographic data expiry. Architected with modern Kotlin and Jetpack Compose under Clean Architecture + MVVM, supported by 17 unit-tested Firestore security rules and Cloud Functions."
        ],
        techStack: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "Android SDK 37", "Firebase Firestore Rules", "Cloud Functions (TypeScript)"],
        primaryAction: {
          label: "View Architecture & GitHub",
          url: "https://github.com/Magraa"
        }
      },
      finaudit: {
        badge: "Fintech · Fraud Audit Engine",
        badgeType: "audit",
        year: "2026",
        title: "FinAudit AI",
        subtitle: "Bank Statement Reconciliation & Automated Ledger Fraud Audit Pipeline",
        role: "Lead Backend & Systems Architect",
        metrics: [
          { val: "99.8%", label: "Automated statement transaction reconciliation" },
          { val: "< 850ms", label: "10,000-line bank statement parsing via Polars" },
          { val: "100% Trail", label: "Cryptographically auditable anomaly evidence logs" }
        ],
        paragraphs: [
          "Reconciling multi-account bank statements against ERP ledgers and GST tax filings is notoriously error-prone and vulnerable to delayed fraud detection. FinAudit AI replaces manual Excel reconciliation with an autonomous vectorized auditing pipeline.",
          "Using Polars for sub-second dataframe processing, it analyzes thousands of ledger rows in milliseconds. The pipeline performs fuzzy counterparty matching, flags circular transfers and duplicate payments, detects tax credit discrepancies, and generates forensic audit summaries with verifiable proof logs."
        ],
        techStack: ["Python", "FastAPI", "Polars", "PostgreSQL", "OpenAI / Gemini", "Docker", "PyTest"],
        primaryAction: {
          label: "GitHub Repository (FinAudit AI)",
          url: "https://github.com/Magraa/FinAudit-AI-Showcase"
        }
      }
    };

    let currentProjectKey = null;

    const renderProjectData = (data) => {
      if (badgeEl) {
        badgeEl.textContent = data.badge;
        badgeEl.className = `more-work__panel-badge more-work__panel-badge--${data.badgeType}`;
      }
      if (yearEl) yearEl.textContent = data.year;
      if (titleEl) titleEl.textContent = data.title;
      if (subtitleEl) subtitleEl.textContent = data.subtitle;
      if (roleEl) roleEl.textContent = data.role;

      if (metricsEl) {
        metricsEl.innerHTML = data.metrics.map((m) => `
          <div class="more-work__panel-metric-card">
            <span class="more-work__panel-metric-val">${m.val}</span>
            <span class="more-work__panel-metric-label">${m.label}</span>
          </div>
        `).join("");
      }

      if (overviewEl) {
        overviewEl.innerHTML = data.paragraphs.map((p) => `<p>${p}</p>`).join("");
      }

      if (tagsEl) {
        tagsEl.innerHTML = data.techStack.map((t) => `<li>${t}</li>`).join("");
      }

      if (linkEl && linkLabelEl) {
        linkEl.href = data.primaryAction.url;
        linkLabelEl.textContent = data.primaryAction.label;
      }
    };

    const openDrawer = (key, cardEl) => {
      const data = PROJECT_DETAILS[key];
      if (!data) return;

      const isAlreadyOpen = moreWorkDrawer.getAttribute("aria-hidden") === "false";

      // If clicking the active card, toggle close
      if (isAlreadyOpen && currentProjectKey === key) {
        closeDrawer();
        return;
      }

      cards.forEach((c) => {
        const isTarget = c === cardEl;
        c.classList.toggle("more-work__card--active", isTarget);
        c.setAttribute("aria-expanded", String(isTarget));
      });

      currentProjectKey = key;

      if (isAlreadyOpen) {
        moreWorkPanel.style.opacity = "0.3";
        setTimeout(() => {
          renderProjectData(data);
          moreWorkPanel.style.opacity = "1";
        }, 110);
        AudioFX.tap();
        Toast.show(`Viewing ${data.title} Architecture Overview`, "info");
      } else {
        renderProjectData(data);
        moreWorkDrawer.removeAttribute("inert");
        moreWorkDrawer.setAttribute("aria-hidden", "false");
        AudioFX.click();
        Toast.show(`Expanded ${data.title} Architecture Overview`, "info");
      }
    };

    const closeDrawer = () => {
      moreWorkDrawer.setAttribute("aria-hidden", "true");
      moreWorkDrawer.setAttribute("inert", "");
      cards.forEach((c) => {
        c.classList.remove("more-work__card--active");
        c.setAttribute("aria-expanded", "false");
      });
      currentProjectKey = null;
      AudioFX.tap();
    };

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const key = card.getAttribute("data-more-work-card");
        openDrawer(key, card);
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  }

  /* ------------------------------------------------------------------ */
  /* Contact item copy buttons                                         */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const val = btn.getAttribute("data-copy");
      if (!val) return;

      const finish = () => {
        btn.classList.add("is-copied");
        if (typeof AudioFX !== "undefined" && AudioFX.click) AudioFX.click();
        if (typeof Toast !== "undefined" && Toast.show) Toast.show(`Copied ${val} to clipboard!`, "success");
        setTimeout(() => {
          btn.classList.remove("is-copied");
        }, 2000);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(val);
          finish();
          return;
        } catch {
          /* Fallback below */
        }
      }

      try {
        const ta = document.createElement("textarea");
        ta.value = val;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        finish();
      } catch (err) {
        if (typeof Toast !== "undefined" && Toast.show) Toast.show(val, "info");
      }
    });
  });
})();
