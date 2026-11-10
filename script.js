(() => {
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduceMotion = reduceMotionQuery.matches;
  const motionChangeListeners = [];
  const notifyMotionChange = () => {
    motionChangeListeners.forEach((listener) => listener());
  };
  if (typeof reduceMotionQuery.addEventListener === "function") {
    reduceMotionQuery.addEventListener("change", (event) => {
      reduceMotion = event.matches;
      notifyMotionChange();
    });
  }

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
  let workDeck = null;
  let expTheater = null;
  let mascotSpeech = null;

  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-stage]").forEach((stage) => {
      let frame = 0;

      stage.addEventListener("pointermove", (event) => {
        const card = stage.closest(".case");
        if (card && workDeck && workDeck.isActive() && !card.classList.contains("is-front")) {
          return;
        }
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
    notifyMotionChange();
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
  /* Preloader (1 -> 100)                                             */
  /* ---------------------------------------------------------------- */

  const preloader = document.getElementById("preloader");
  let resolvePreloaderDone = null;
  const preloaderDone = new Promise((resolve) => {
    resolvePreloaderDone = resolve;
  });

  if (!preloader || stillPlaying()) {
    document.documentElement.classList.remove("is-preloading");
    if (preloader) preloader.remove();
    resolvePreloaderDone();
  } else {
    const counterEl = preloader.querySelector("[data-preloader-counter]");
    const fillEl = preloader.querySelector("[data-preloader-fill]");
    const landmarks = Array.from(
      document.querySelectorAll("header.site-header, main, footer.site-footer, aside.hud")
    ).filter((el) => !el.hasAttribute("inert"));

    document.documentElement.classList.add("is-preloading");
    landmarks.forEach((el) => el.setAttribute("inert", ""));

    const COUNT_MS = 1650;
    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    let rafId = 0;
    let finished = false;
    let startedAt = 0;
    let lastShown = 1;
    let brandShown = false;

    const releaseLandmarks = () => {
      document.documentElement.classList.remove("is-preloading");
      landmarks.forEach((el) => el.removeAttribute("inert"));
    };

    const cleanup = () => {
      if (!preloader.isConnected) return;
      releaseLandmarks();
      preloader.remove();
    };

    const startExit = () => {
      if (finished) return;
      finished = true;
      window.cancelAnimationFrame(rafId);

      if (counterEl && lastShown !== 100) {
        counterEl.textContent = "100";
        lastShown = 100;
      }
      if (fillEl) {
        fillEl.style.transform = "scaleX(1)";
      }
      preloader.classList.add("is-ready", "is-complete");

      window.setTimeout(() => {
        preloader.classList.add("is-exiting");

        window.setTimeout(() => {
          releaseLandmarks();
          resolvePreloaderDone();
          preloader.classList.add("is-leaving");

          preloader.addEventListener(
            "transitionend",
            (event) => {
              if (event.target === preloader && event.propertyName === "transform") {
                cleanup();
              }
            },
            { once: true }
          );
          window.setTimeout(cleanup, 750);
        }, 150);
      }, 110);
    };

    const step = (now) => {
      if (finished) return;
      if (!startedAt) startedAt = now;
      const elapsed = now - startedAt;
      const t = Math.min(1, elapsed / COUNT_MS);
      const eased = easeInOutQuad(t);
      const value = Math.min(100, Math.max(1, 1 + Math.round(eased * 99)));

      if (!brandShown && elapsed >= 180) {
        brandShown = true;
        preloader.classList.add("is-ready");
      }

      if (value !== lastShown && counterEl) {
        lastShown = value;
        counterEl.textContent = String(value);
      }

      if (fillEl) {
        fillEl.style.transform = `scaleX(${(0.01 + eased * 0.99).toFixed(4)})`;
      }

      if (t < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        startExit();
      }
    };

    const onKeySkip = (event) => {
      if (event.key === "Escape" && !finished) {
        window.removeEventListener("keydown", onKeySkip);
        startExit();
      }
    };
    window.addEventListener("keydown", onKeySkip);
    window.setTimeout(() => {
      window.removeEventListener("keydown", onKeySkip);
      startExit();
    }, COUNT_MS + 1200);

    rafId = window.requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------------- */
  /* Inertial smooth scroll                                           */
  /* ---------------------------------------------------------------- */

  const finePointerScrollQuery = window.matchMedia("(any-pointer: fine)");

  const smoothScroller = (() => {
    const DURATION = 1.2;
    const WHEEL_MULTIPLIER = 0.85;
    const LINE_HEIGHT = 100 / 6;
    const EXPO_NORM = 1 - Math.pow(2, -10);
    const easeOutExpo = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : (1 - Math.pow(2, -10 * t)) / EXPO_NORM);
    const clampScroll = (y) => {
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return Math.min(max, Math.max(0, y));
    };

    let enabled = false;
    let isRunning = false;
    let rafId = 0;
    let lastFrameTime = 0;
    let elapsed = 0;
    let fromY = window.scrollY;
    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let lastWrittenY = window.scrollY;

    const stopAnimation = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      isRunning = false;
      lastFrameTime = 0;
    };

    const syncPosition = () => {
      currentY = window.scrollY;
      targetY = currentY;
      fromY = currentY;
      lastWrittenY = currentY;
      stopAnimation();
    };

    const step = (now) => {
      if (!enabled || !isRunning) {
        rafId = 0;
        return;
      }
      const dt = lastFrameTime ? Math.min(0.1, (now - lastFrameTime) / 1000) : 1 / 60;
      lastFrameTime = now;
      elapsed += dt;

      const progress = Math.min(1, elapsed / DURATION);
      const eased = easeOutExpo(progress);
      const nextY = fromY + (targetY - fromY) * eased;

      currentY = nextY;
      lastWrittenY = nextY;
      window.scrollTo({ top: nextY, left: window.scrollX, behavior: "instant" });

      if (progress >= 1 || Math.abs(targetY - nextY) < 0.35) {
        currentY = targetY;
        lastWrittenY = targetY;
        window.scrollTo({ top: targetY, left: window.scrollX, behavior: "instant" });
        stopAnimation();
        return;
      }

      rafId = window.requestAnimationFrame(step);
    };

    const animateTo = (nextTarget) => {
      const clamped = clampScroll(nextTarget);
      if (!enabled) {
        window.scrollTo({ top: clamped, left: window.scrollX, behavior: stillPlaying() ? "auto" : "smooth" });
        return;
      }
      if (!isRunning) {
        currentY = window.scrollY;
        lastWrittenY = currentY;
      }
      fromY = currentY;
      targetY = clamped;
      elapsed = 0;

      if (Math.abs(targetY - currentY) < 0.5) {
        syncPosition();
        return;
      }

      if (!isRunning) {
        isRunning = true;
        lastFrameTime = 0;
        rafId = window.requestAnimationFrame(step);
      }
    };

    const canChildScroll = (target, deltaY) => {
      if (!(target instanceof Element)) return false;
      if (document.body.classList.contains("dialog-open") || target.closest("dialog[open]")) {
        return true;
      }
      let node = target;
      while (node && node !== document.body && node !== document.documentElement) {
        const style = window.getComputedStyle(node);
        const overflowY = style.overflowY;
        if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
          const maxScroll = node.scrollHeight - node.clientHeight;
          if (maxScroll > 1) {
            if (style.overscrollBehaviorY !== "auto") return true;
            if ((deltaY < 0 && node.scrollTop > 0) || (deltaY > 0 && node.scrollTop < maxScroll - 1)) {
              return true;
            }
          }
        }
        node = node.parentElement;
      }
      return false;
    };

    const onWheel = (event) => {
      if (!enabled || event.ctrlKey || event.metaKey) return;
      if (document.documentElement.classList.contains("is-preloading")) {
        event.preventDefault();
        return;
      }
      if (canChildScroll(event.target, event.deltaY)) return;

      let dy = event.deltaY;
      if (event.deltaMode === 1) dy *= LINE_HEIGHT;
      else if (event.deltaMode === 2) dy *= window.innerHeight;
      if (!dy) return;

      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (workDeck && workDeck.isActive() && workDeck.handleSideWheel(event, dy)) {
        /* Side-scroll bypassed the remaining deck animation; continue scrolling normally. */
      }
      const base = isRunning ? targetY : window.scrollY;
      if (!isRunning && ((base <= 0 && dy < 0) || (base >= max && dy > 0))) {
        return;
      }

      event.preventDefault();
      animateTo(base + dy * WHEEL_MULTIPLIER);
    };

    const onScroll = () => {
      if (!enabled) return;
      if (!isRunning || Math.abs(window.scrollY - lastWrittenY) > 2) {
        syncPosition();
      }
    };

    const onKeyScroll = (event) => {
      if (!enabled) return;
      const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
      if (scrollKeys.includes(event.key)) {
        stopAnimation();
      }
    };

    const onPointerDown = (event) => {
      if (!enabled) return;
      if (event.clientX >= document.documentElement.clientWidth) {
        stopAnimation();
      }
    };

    const refreshState = () => {
      const shouldEnable = !stillPlaying() && finePointerScrollQuery.matches;
      if (shouldEnable === enabled) return;
      enabled = shouldEnable;
      document.documentElement.classList.toggle("has-smooth-scroll", enabled);
      if (enabled) {
        syncPosition();
        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("keydown", onKeyScroll, { passive: true });
        window.addEventListener("pointerdown", onPointerDown, { passive: true });
      } else {
        stopAnimation();
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("keydown", onKeyScroll);
        window.removeEventListener("pointerdown", onPointerDown);
      }
    };

    refreshState();
    motionChangeListeners.push(refreshState);
    if (typeof finePointerScrollQuery.addEventListener === "function") {
      finePointerScrollQuery.addEventListener("change", refreshState);
    }

    const shiftBy = (delta) => {
      if (!delta) return;
      const nextY = clampScroll(window.scrollY);
      currentY = nextY;
      fromY = nextY;
      targetY = clampScroll(targetY + delta);
      lastWrittenY = nextY;
    };

    const scrollToY = (y) => {
      const clamped = clampScroll(y);
      if (enabled) {
        animateTo(clamped);
      } else {
        window.scrollTo({ top: clamped, left: window.scrollX, behavior: stillPlaying() ? "auto" : "smooth" });
      }
    };

    const scrollToElement = (el, { focus = false } = {}) => {
      if (!el) return;
      const deckTargetY = workDeck && workDeck.isActive() ? workDeck.getCardScrollY(el) : null;
      if (deckTargetY !== null) {
        scrollToY(deckTargetY);
        if (focus) {
          if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        }
        return;
      }
      if (el.id === "experience" && expTheater && expTheater.isActive()) {
        scrollToY(expTheater.getStartY());
        if (focus) {
          if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        }
        return;
      }
      const pad = parseFloat(window.getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const base = isRunning ? currentY : window.scrollY;
      const target = el.id === "top" ? 0 : el.getBoundingClientRect().top + base - pad;
      if (enabled) {
        animateTo(target);
      } else {
        el.scrollIntoView({ behavior: stillPlaying() ? "auto" : "smooth" });
      }
      if (focus) {
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
      }
    };

    return { isEnabled: () => enabled, scrollToElement, scrollToY, shiftBy };
  })();

  const navigateToHash = (hash, { focus = false } = {}) => {
    if (!hash || !hash.startsWith("#")) return false;
    const target = hash === "#" ? document.documentElement : document.getElementById(hash.slice(1));
    if (!target) return false;
    const deckIntercept = Boolean(workDeck && workDeck.isActive() && workDeck.getCardScrollY(target) !== null);
    const expIntercept = Boolean(expTheater && expTheater.isActive() && target.id === "experience");
    if (smoothScroller.isEnabled() || deckIntercept || expIntercept) {
      smoothScroller.scrollToElement(target, { focus });
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
      return true;
    }
    window.location.hash = hash;
    return true;
  };

  document.addEventListener("click", (event) => {
    const anchor = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.getElementById(href.slice(1));
    const deckIntercept = Boolean(workDeck && workDeck.isActive() && target && workDeck.getCardScrollY(target) !== null);
    const expIntercept = Boolean(expTheater && expTheater.isActive() && target && target.id === "experience");
    if (!smoothScroller.isEnabled() && !deckIntercept && !expIntercept) return;
    if (navigateToHash(href, { focus: anchor.classList.contains("skip-link") })) {
      event.preventDefault();
    }
  });

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
          if (entry.target.closest(".work-deck.is-deck-active .case:not(.is-front)")) {
            return;
          }
          entry.target.dataset.decoded = "true";
          decode(entry.target);
          decodeObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.9 }
    );

    decodeTargets.forEach((el) => decodeObserver.observe(el));
  }

  /* ---------------------------------------------------------------- */
  /* Sticky Layered Case-Study Deck                                   */
  /* ---------------------------------------------------------------- */

  workDeck = (() => {
    const deck = document.querySelector("[data-work-deck]");
    if (!deck) {
      return { isActive: () => false, getCardScrollY: () => null, handleSideWheel: () => false, refresh: () => {} };
    }

    const sticky = deck.querySelector("[data-work-sticky]");
    const stage = deck.querySelector("[data-work-stage]");
    const cards = Array.from(deck.querySelectorAll(".case"));
    const indexLinks = Array.from(deck.querySelectorAll('.work-index a[href^="#"]'));
    const counterEl = deck.querySelector("[data-work-counter]");
    const hintEl = deck.querySelector("[data-work-hint]");
    const progressEl = deck.querySelector("[data-work-progress]");

    if (!sticky || !stage || cards.length < 2) {
      return { isActive: () => false, getCardScrollY: () => null, handleSideWheel: () => false, refresh: () => {} };
    }

    const DECK_CONFIG = {
      minWidth: 961,
      minHeight: 730,
      stepPx: 620,
      dwellRatio: 0.14,
      leadInPx: 48,
      leadOutPx: 84,
      swingPeakX: -97,
      swingPeakY: -16,
      swingTiltDeg: -3.2,
      stackStepY: 13,
      stackCurveY: 1.1,
      stackScaleStep: 0.036,
      maxVisibleDepth: 3,
      sideGutterMargin: 8,
      firstCardDwellMs: 900,
      viewDwellMs: 280,
    };

    const clamp01 = (v) => (v <= 0 ? 0 : v >= 1 ? 1 : v);
    const lerp = (a, b, t) => a + (b - a) * t;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const remapSegment = (r, dwell) => {
      if (r <= dwell) return 0;
      if (r >= 1 - dwell) return 1;
      return (r - dwell) / (1 - 2 * dwell);
    };

    const cardIndexById = new Map(cards.map((card, index) => [card.id, index]));
    const indexLinkById = new Map(
      indexLinks.map((link) => [(link.getAttribute("href") || "").slice(1), link])
    );

    const totalCards = cards.length;
    const totalLabel = String(totalCards).padStart(2, "0");
    const activeSpan = (totalCards - 1) * DECK_CONFIG.stepPx;
    const viewedIndices = new Set();
    const prevStates = cards.map(() => ({
      transform: "",
      opacity: "",
      zIndex: "",
      scrim: "",
      front: null,
      animating: null,
    }));

    let active = false;
    let bypassed = false;
    let inSideLane = false;
    let stickyTop = 82;
    let stickyHeight = 0;
    let trackHeight = 0;
    let rafId = 0;
    let lastRawProgress = -1;
    let lastFrontIdx = -1;
    let resizeTimer = 0;
    let viewDwellTimer = 0;

    const isEligible = () =>
      !stillPlaying() &&
      window.innerWidth >= DECK_CONFIG.minWidth &&
      window.innerHeight >= DECK_CONFIG.minHeight;

    const isSideGutterPoint = (clientX) => {
      const stageRect = stage.getBoundingClientRect();
      if (!stageRect.width) return false;
      return (
        clientX < stageRect.left - DECK_CONFIG.sideGutterMargin ||
        clientX > stageRect.right + DECK_CONFIG.sideGutterMargin
      );
    };

    const setSideLane = (next) => {
      if (next === inSideLane) return;
      inSideLane = next;
      deck.classList.toggle("is-side-lane", inSideLane);
      if (hintEl && !bypassed) {
        if (inSideLane) {
          hintEl.textContent = "Side lane · skip deck";
        } else {
          hintEl.textContent =
            lastFrontIdx === totalCards - 1 ? "End · scroll down" : "Scroll to shuffle";
        }
      }
    };

    const scheduleViewMark = (frontIdx) => {
      window.clearTimeout(viewDwellTimer);
      if (bypassed || viewedIndices.has(frontIdx)) return;
      if (document.documentElement.classList.contains("is-preloading")) return;
      const stageRect = stage.getBoundingClientRect();
      const visibleOnScreen =
        stageRect.top <= window.innerHeight * 0.72 &&
        stageRect.bottom >= window.innerHeight * 0.2;
      if (!visibleOnScreen) return;
      const delay = frontIdx === 0 && viewedIndices.size === 0
        ? DECK_CONFIG.firstCardDwellMs
        : DECK_CONFIG.viewDwellMs;
      viewDwellTimer = window.setTimeout(() => {
        if (!active || bypassed || lastFrontIdx !== frontIdx) return;
        if (document.documentElement.classList.contains("is-preloading")) return;
        const r = stage.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.72 && r.bottom >= window.innerHeight * 0.2) {
          viewedIndices.add(frontIdx);
        }
      }, delay);
    };

    const closeCardWorkbench = (card) => {
      const wb = card.querySelector("[data-workbench].case-workbench--expanded");
      if (!wb) return;
      const trigger = wb.querySelector(".workbench-trigger");
      const drawer = wb.querySelector(".workbench-drawer");
      const label = wb.querySelector(".workbench-trigger__label");
      const isSimvox = wb.getAttribute("data-workbench") === "simvox";
      wb.classList.remove("case-workbench--expanded");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      if (drawer) {
        drawer.setAttribute("aria-hidden", "true");
        drawer.setAttribute("inert", "");
      }
      if (label) label.textContent = isSimvox ? "Open Bench" : "Open Sandbox";
    };

    const applyCardState = (index, transform, opacity, zIndex, scrim, isFront, isAnimating) => {
      const card = cards[index];
      const prev = prevStates[index];

      if (prev.transform !== transform) {
        card.style.transform = transform;
        prev.transform = transform;
      }
      const opacityStr = opacity.toFixed(3);
      if (prev.opacity !== opacityStr) {
        card.style.opacity = opacityStr;
        prev.opacity = opacityStr;
      }
      const zStr = String(zIndex);
      if (prev.zIndex !== zStr) {
        card.style.zIndex = zStr;
        prev.zIndex = zStr;
      }
      const scrimStr = scrim.toFixed(3);
      if (prev.scrim !== scrimStr) {
        card.style.setProperty("--deck-scrim", scrimStr);
        prev.scrim = scrimStr;
      }
      if (prev.front !== isFront) {
        card.classList.toggle("is-front", isFront);
        if (!isFront) closeCardWorkbench(card);
        prev.front = isFront;
      }
      if (prev.animating !== isAnimating) {
        card.classList.toggle("is-animating", isAnimating);
        prev.animating = isAnimating;
      }
    };

    const updateRailUI = (rawProgress, frontIdx, deckRect) => {
      if (progressEl) {
        progressEl.style.transform = `scaleX(${rawProgress.toFixed(4)})`;
      }
      if (frontIdx !== lastFrontIdx) {
        lastFrontIdx = frontIdx;

        const frontCard = cards[frontIdx];
        indexLinks.forEach((link) => {
          const isCurrent = link === indexLinkById.get(frontCard.id);
          link.classList.toggle("is-active", isCurrent);
          if (isCurrent) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });

        if (counterEl) {
          counterEl.textContent = `${String(frontIdx + 1).padStart(2, "0")} / ${totalLabel}`;
        }
        if (hintEl && !bypassed) {
          hintEl.textContent = inSideLane
            ? "Side lane · skip deck"
            : frontIdx === totalCards - 1
              ? "End · scroll down"
              : "Scroll to shuffle";
        }

        const kicker = frontCard.querySelector(".case__title .kicker");
        if (kicker && !kicker.dataset.decoded && !stillPlaying()) {
          kicker.dataset.decoded = "true";
          decode(kicker);
        }
      }

      scheduleViewMark(frontIdx, deckRect);
    };

    const bypassDeck = () => {
      if (!active || bypassed) return;
      const deckRect = deck.getBoundingClientRect();
      const scrolledPastPin = stickyTop - deckRect.top;
      const lockedIdx = lastFrontIdx >= 0 ? lastFrontIdx : 0;

      const skippedCards = cards.filter((_, idx) => !viewedIndices.has(idx));
      const skippedCount = skippedCards.length;

      window.clearTimeout(viewDwellTimer);
      bypassed = true;
      setSideLane(false);
      deck.classList.add("is-deck-bypassed");

      trackHeight = Math.round(stickyHeight || sticky.offsetHeight);
      deck.style.setProperty("--deck-track-h", `${trackHeight}px`);

      if (scrolledPastPin > 0) {
        const nextY = Math.max(0, window.scrollY - scrolledPastPin);
        window.scrollTo({ top: nextY, left: window.scrollX, behavior: "instant" });
        smoothScroller.shiftBy(-scrolledPastPin);
      }

      for (let i = 0; i < totalCards; i++) {
        if (i === lockedIdx) {
          applyCardState(i, "translate3d(0, 0, 0)", 1, 40, 0, true, false);
        } else {
          applyCardState(i, "translate3d(0, 0, 0) scale(0.96)", 0, 10 - i, 0, false, false);
        }
      }

      if (hintEl) {
        hintEl.textContent = "Skipped · click 01–05";
      }

      if (skippedCount > 0) {
        const stageRect = stage.getBoundingClientRect();
        if (stageRect.width) {
          mascotGlance(
            stageRect.left + stageRect.width * 0.5,
            stageRect.top + stageRect.height * 0.5
          );
        } else {
          mascotGlance();
        }

        let quip = "";
        if (skippedCount >= totalCards) {
          quip = `Uh no! You skipped all ${totalCards} projects?! 👀`;
        } else if (skippedCount === 1) {
          const skippedName =
            skippedCards[0].querySelector(".case__title h3")?.textContent?.trim() || "a project";
          quip = `Uh no! You skipped ${skippedName}! 👀`;
        } else {
          quip = `Uh no! You skipped ${skippedCount} projects! 🤖`;
        }

        if (mascotSpeech) {
          mascotSpeech.say(quip, 4400);
        }
      }
    };

    const restoreDeck = (compensateBelow = false) => {
      if (!active || !bypassed) return;
      const prevTrack = trackHeight;
      const deckRect = deck.getBoundingClientRect();
      const belowDeck = compensateBelow && deckRect.top < stickyTop - stickyHeight * 0.25;

      bypassed = false;
      deck.classList.remove("is-deck-bypassed");
      if (window.scrollY < 260) {
        viewedIndices.clear();
      }
      measure();

      if (belowDeck && trackHeight > prevTrack) {
        const diff = trackHeight - prevTrack;
        window.scrollTo({ top: window.scrollY + diff, left: window.scrollX, behavior: "instant" });
        smoothScroller.shiftBy(diff);
      }
    };

    const handleSideWheel = (event, dy) => {
      if (!active || bypassed || dy <= 0) return false;
      if (!isSideGutterPoint(event.clientX)) return false;

      const deckRect = deck.getBoundingClientRect();
      const scrolledPastPin = stickyTop - deckRect.top;
      const inBypassWindow =
        scrolledPastPin >= -220 &&
        scrolledPastPin < DECK_CONFIG.leadInPx + activeSpan - 24;

      if (!inBypassWindow) return false;

      bypassDeck();
      return true;
    };

    const render = (force = false) => {
      if (!active) return;

      const deckRect = deck.getBoundingClientRect();
      if (window.scrollY < 160 && viewedIndices.size) {
        viewedIndices.clear();
      }
      if (bypassed) {
        if (deckRect.top > stickyTop + 96) {
          restoreDeck(false);
        }
        return;
      }

      const scrolledPastPin = stickyTop - deckRect.top;
      const rawProgress = activeSpan > 0
        ? clamp01((scrolledPastPin - DECK_CONFIG.leadInPx) / activeSpan)
        : 0;

      if (!force && Math.abs(rawProgress - lastRawProgress) < 0.00025) {
        return;
      }
      lastRawProgress = rawProgress;

      const scaled = rawProgress * (totalCards - 1);
      const a = Math.min(totalCards - 2, Math.floor(scaled));
      const segRaw = clamp01(scaled - a);
      const u = remapSegment(segRaw, DECK_CONFIG.dwellRatio);
      const frontIdx = u >= 0.5 ? a + 1 : a;
      const midMotion = u > 0.001 && u < 0.999;

      for (let i = 0; i < totalCards; i++) {
        if (i < a) {
          const depth = (a - i) + easeInOutCubic(u);
          const ty = -DECK_CONFIG.stackStepY * depth + DECK_CONFIG.stackCurveY * depth * (depth - 1);
          const scale = Math.max(0.82, 1 - depth * DECK_CONFIG.stackScaleStep);
          const opacity =
            depth <= DECK_CONFIG.maxVisibleDepth - 0.35
              ? 1
              : clamp01(1 - (depth - (DECK_CONFIG.maxVisibleDepth - 0.35)) / 1.05);
          const scrim = Math.min(0.82, depth * 0.27);
          const zIndex = 24 - Math.round(depth * 2);
          const transform = `translate3d(0, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
          applyCardState(i, transform, opacity, zIndex, scrim, false, midMotion && depth <= 3.5);
        } else if (i === a) {
          if (u <= 0.001) {
            applyCardState(i, "translate3d(0, 0, 0)", 1, 40, 0, true, false);
          } else if (u >= 0.999) {
            const ty = -DECK_CONFIG.stackStepY;
            const scale = 1 - DECK_CONFIG.stackScaleStep;
            applyCardState(
              i,
              `translate3d(0, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`,
              1,
              24,
              0.27,
              false,
              false
            );
          } else if (u <= 0.5) {
            const p = easeInOutSine(u / 0.5);
            const tx = DECK_CONFIG.swingPeakX * p;
            const ty = DECK_CONFIG.swingPeakY * p;
            const scale = lerp(1, 0.955, p);
            const rot = DECK_CONFIG.swingTiltDeg * p;
            const scrim = lerp(0, 0.12, p);
            const transform = `translate3d(${tx.toFixed(2)}%, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rot.toFixed(2)}deg)`;
            applyCardState(i, transform, 1, 40, scrim, i === frontIdx, true);
          } else {
            const p = easeInOutCubic((u - 0.5) / 0.5);
            const tx = lerp(DECK_CONFIG.swingPeakX, 0, p);
            const ty = lerp(DECK_CONFIG.swingPeakY, -DECK_CONFIG.stackStepY, p);
            const scale = lerp(0.955, 1 - DECK_CONFIG.stackScaleStep, p);
            const rot = lerp(DECK_CONFIG.swingTiltDeg, 0, p);
            const scrim = lerp(0.12, 0.27, p);
            const transform = `translate3d(${tx.toFixed(2)}%, ${ty.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rot.toFixed(2)}deg)`;
            applyCardState(i, transform, 1, 24, scrim, i === frontIdx, true);
          }
        } else if (i === a + 1) {
          if (u >= 0.999) {
            applyCardState(i, "translate3d(0, 0, 0)", 1, 30, 0, true, false);
          } else {
            const e = easeOutCubic(u);
            const tyPct = (1 - e) * 104;
            const scale = lerp(0.95, 1, e);
            const opacity = clamp01(u / 0.24);
            const transform = `translate3d(0, ${tyPct.toFixed(2)}%, 0) scale(${scale.toFixed(4)})`;
            applyCardState(i, transform, opacity, 30, 0, i === frontIdx, midMotion);
          }
        } else {
          applyCardState(i, "translate3d(0, 104%, 0) scale(0.95)", 0, 10 - i, 0, false, false);
        }
      }

      updateRailUI(rawProgress, frontIdx, deckRect);
    };

    const scheduleRender = () => {
      if (!active) return;
      if (window.scrollY < 160 && viewedIndices.size) {
        viewedIndices.clear();
      }
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        render();
      });
    };

    const onFallbackWheel = (event) => {
      if (smoothScroller.isEnabled() || !active || bypassed) return;
      if (event.deltaY > 0) {
        handleSideWheel(event, event.deltaY);
      }
    };

    const onPointerMove = (event) => {
      if (!active || bypassed || event.pointerType === "touch") {
        setSideLane(false);
        return;
      }
      const deckRect = deck.getBoundingClientRect();
      const onScreen = deckRect.top < window.innerHeight * 0.85 && deckRect.bottom > 120;
      setSideLane(onScreen && isSideGutterPoint(event.clientX));
    };

    const measure = () => {
      if (!active) return;
      stickyTop = parseFloat(window.getComputedStyle(sticky).top) || 82;
      stickyHeight = sticky.offsetHeight;
      if (bypassed) {
        const nextTrackHeight = Math.round(stickyHeight);
        if (nextTrackHeight !== trackHeight) {
          trackHeight = nextTrackHeight;
          deck.style.setProperty("--deck-track-h", `${trackHeight}px`);
        }
        return;
      }
      const nextTrackHeight = Math.round(
        stickyHeight + DECK_CONFIG.leadInPx + activeSpan + DECK_CONFIG.leadOutPx
      );
      if (nextTrackHeight !== trackHeight) {
        trackHeight = nextTrackHeight;
        deck.style.setProperty("--deck-track-h", `${trackHeight}px`);
      }
      render(true);
    };

    const teardown = () => {
      if (!active) return;
      active = false;
      bypassed = false;
      setSideLane(false);
      window.clearTimeout(viewDwellTimer);
      window.cancelAnimationFrame(rafId);
      rafId = 0;
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("wheel", onFallbackWheel);
      window.removeEventListener("pointermove", onPointerMove);
      deck.classList.remove("is-deck-active", "is-deck-bypassed", "is-side-lane");
      deck.style.removeProperty("--deck-track-h");
      if (progressEl) progressEl.style.transform = "";

      cards.forEach((card, index) => {
        card.style.transform = "";
        card.style.opacity = "";
        card.style.zIndex = "";
        card.style.removeProperty("--deck-scrim");
        card.classList.remove("is-front", "is-animating");
        prevStates[index] = {
          transform: "",
          opacity: "",
          zIndex: "",
          scrim: "",
          front: null,
          animating: null,
        };
      });

      indexLinks.forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });

      lastRawProgress = -1;
      lastFrontIdx = -1;
      trackHeight = 0;
    };

    const activate = () => {
      if (active) {
        measure();
        return;
      }
      active = true;
      bypassed = false;
      deck.classList.add("is-deck-active");
      deck.classList.remove("is-deck-bypassed");
      lastRawProgress = -1;
      lastFrontIdx = -1;
      measure();
      window.addEventListener("scroll", scheduleRender, { passive: true });
      window.addEventListener("wheel", onFallbackWheel, { passive: true });
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    };

    const refresh = () => {
      if (isEligible()) {
        activate();
      } else {
        teardown();
      }
    };

    const getCardScrollY = (el) => {
      if (!active || !el || !el.id) return null;
      if (el.id === "work") {
        if (bypassed) restoreDeck(false);
        const deckDocTop = deck.getBoundingClientRect().top + window.scrollY;
        const pinStart = deckDocTop - stickyTop;
        return Math.max(0, Math.round(pinStart + DECK_CONFIG.leadInPx * 0.25));
      }
      const idx = cardIndexById.get(el.id);
      if (idx === undefined) return null;

      if (bypassed) {
        restoreDeck(true);
      }
      viewedIndices.add(idx);

      const deckDocTop = deck.getBoundingClientRect().top + window.scrollY;
      const pinStart = deckDocTop - stickyTop;
      if (idx === 0) {
        return Math.max(0, Math.round(pinStart + DECK_CONFIG.leadInPx * 0.5));
      }
      if (idx === totalCards - 1) {
        return Math.max(
          0,
          Math.round(pinStart + DECK_CONFIG.leadInPx + activeSpan + DECK_CONFIG.leadOutPx * 0.5)
        );
      }
      return Math.max(0, Math.round(pinStart + DECK_CONFIG.leadInPx + idx * DECK_CONFIG.stepPx));
    };

    const syncToHash = (instant = false) => {
      if (!active || !window.location.hash) return;
      const id = window.location.hash.slice(1);
      if (!cardIndexById.has(id)) return;
      const target = document.getElementById(id);
      const y = getCardScrollY(target);
      if (y === null) return;
      if (instant) {
        window.scrollTo({ top: y, left: window.scrollX, behavior: "instant" });
        render(true);
      } else {
        smoothScroller.scrollToElement(target);
      }
    };

    // Bring card to front if keyboard focus (Tab / Find-in-page) lands inside a covered card
    deck.addEventListener("focusin", (event) => {
      if (!active || !(event.target instanceof Element)) return;
      const card = event.target.closest(".case");
      if (!card || (card.classList.contains("is-front") && !bypassed)) return;
      const y = getCardScrollY(card);
      if (y !== null) {
        smoothScroller.scrollToElement(card);
      }
    });

    if ("ResizeObserver" in window) {
      const stickyObserver = new ResizeObserver(() => {
        if (active) measure();
      });
      stickyObserver.observe(sticky);
    }

    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refresh, 100);
    });

    window.addEventListener("hashchange", () => syncToHash(false));
    motionChangeListeners.push(refresh);

    refresh();

    if (window.location.hash && cardIndexById.has(window.location.hash.slice(1))) {
      let userInteracted = false;
      const markInteracted = () => {
        userInteracted = true;
      };
      ["wheel", "touchstart", "pointerdown", "keydown"].forEach((evt) => {
        window.addEventListener(evt, markInteracted, { once: true, passive: true });
      });

      const alignInitialHash = () => {
        if (!active || userInteracted) return;
        measure();
        syncToHash(true);
      };

      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      alignInitialHash();
      window.requestAnimationFrame(alignInitialHash);
      window.addEventListener("pageshow", () => window.requestAnimationFrame(alignInitialHash), { once: true });
      window.addEventListener(
        "load",
        () => {
          window.setTimeout(() => {
            alignInitialHash();
            if ("scrollRestoration" in window.history) {
              window.history.scrollRestoration = "auto";
            }
          }, 0);
        },
        { once: true }
      );
      preloaderDone.then(() => window.requestAnimationFrame(alignInitialHash));
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(alignInitialHash);
      }
    }

    return {
      isActive: () => active,
      getCardScrollY,
      handleSideWheel,
      refresh,
    };
  })();

  /* ---------------------------------------------------------------- */
  /* Experience Horizontal Spatial Theater (Origin & Foundations)     */
  /* ---------------------------------------------------------------- */

  expTheater = (() => {
    const section = document.querySelector("[data-exp-theater]");
    if (!section) {
      return { isActive: () => false, getStartY: () => 0, refresh: () => {} };
    }

    const viewport = section.querySelector("[data-exp-viewport]");
    const stage = section.querySelector("[data-exp-stage]");
    const panels = Array.from(section.querySelectorAll("[data-exp-panel]"));
    const inners = panels.map((panel) => panel.querySelector("[data-exp-inner]"));
    const dateBgs = panels.map((panel) => panel.querySelector("[data-exp-date]"));
    const tickerTop = section.querySelector("[data-exp-ticker-top]");
    const tickerBottom = section.querySelector("[data-exp-ticker-bottom]");
    const phaseEl = section.querySelector("[data-exp-phase]");
    const counterEl = section.querySelector("[data-exp-counter]");
    const progressEl = section.querySelector("[data-exp-progress]");
    const hintEl = section.querySelector("[data-exp-hint]");
    const jumpBtns = Array.from(section.querySelectorAll("[data-exp-jump]"));
    const prevBtn = section.querySelector("[data-exp-prev]");
    const nextBtn = section.querySelector("[data-exp-next]");

    if (!viewport || !stage || panels.length < 2) {
      return { isActive: () => false, getStartY: () => 0, refresh: () => {} };
    }

    const MIN_WIDTH = 901;
    const MIN_HEIGHT = 620;
    const totalLabel = String(panels.length - 1).padStart(2, "0");

    let active = false;
    let stickyTop = 81;
    let hudH = 34;
    let viewportW = window.innerWidth;
    let viewportH = window.innerHeight - stickyTop - hudH;
    let maxTranslate = 0;
    let totalDist = 1;
    let panelTargets = panels.map(() => 0);

    let currentX = 0;
    let targetX = 0;
    let currentProgress = 0;
    let targetProgress = 0;
    let activeChapter = -1;
    let rafId = 0;
    let lastTime = 0;
    let resizeTimer = 0;

    const clamp01 = (v) => (v <= 0 ? 0 : v >= 1 ? 1 : v);

    const isEligible = () =>
      !stillPlaying() &&
      window.innerWidth >= MIN_WIDTH &&
      window.innerHeight >= MIN_HEIGHT;

    const getStartY = () => {
      const rect = section.getBoundingClientRect();
      return Math.max(0, Math.round(rect.top + window.scrollY - stickyTop));
    };

    const getChapterScrollY = (idx) => {
      const clampedIdx = Math.max(0, Math.min(panels.length - 1, idx));
      const p = panelTargets[clampedIdx] ?? 0;
      return Math.round(getStartY() + p * totalDist);
    };

    const updateHUD = (progress) => {
      if (progressEl) {
        progressEl.style.transform = `scaleX(${progress.toFixed(4)})`;
      }

      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < panelTargets.length; i++) {
        const d = Math.abs(progress - panelTargets[i]);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }

      if (bestIdx === activeChapter) return;
      activeChapter = bestIdx;

      if (phaseEl) {
        phaseEl.textContent = panels[bestIdx].dataset.expLabel || "ORIGIN & FOUNDATIONS";
      }
      if (counterEl) {
        counterEl.textContent = `${String(bestIdx).padStart(2, "0")} / ${totalLabel}`;
      }
      if (hintEl) {
        hintEl.textContent = bestIdx === panels.length - 1 ? "End · continue down" : "Scroll to traverse";
      }

      jumpBtns.forEach((btn, idx) => {
        const isCurrent = idx === bestIdx;
        btn.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
          btn.setAttribute("aria-current", "step");
        } else {
          btn.removeAttribute("aria-current");
        }
      });

      if (prevBtn) prevBtn.disabled = bestIdx <= 0;
      if (nextBtn) nextBtn.disabled = bestIdx >= panels.length - 1;
    };

    const applyTransforms = () => {
      stage.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;

      if (tickerTop) {
        tickerTop.style.transform = `translate3d(${(currentX * 0.24).toFixed(2)}px, 0, 0)`;
      }
      if (tickerBottom) {
        tickerBottom.style.transform = `translate3d(${(-currentX * 0.18).toFixed(2)}px, 0, 0)`;
      }

      for (let i = 0; i < panels.length; i++) {
        const relX = panels[i].offsetLeft + currentX;
        const norm = viewportW > 0 ? relX / viewportW : 0;

        const dateBg = dateBgs[i];
        if (dateBg) {
          dateBg.style.transform = `translate3d(${(norm * 110).toFixed(2)}px, 0, 0)`;
        }

        const inner = inners[i];
        if (inner) {
          const dist = Math.min(1, Math.abs(norm));
          const opacity = Math.max(0.44, 1 - dist * 0.56);
          const scale = 1 - dist * 0.025;
          inner.style.opacity = opacity.toFixed(3);
          inner.style.transform = `scale(${scale.toFixed(4)})`;
        }
      }

      updateHUD(currentProgress);
    };

    const syncTargetFromScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = stickyTop - rect.top;
      const raw = totalDist > 0 ? scrolled / totalDist : 0;
      targetProgress = clamp01(raw);
      targetX = -targetProgress * maxTranslate;
    };

    const tick = (now) => {
      rafId = 0;
      if (!active) return;

      const dt = lastTime ? Math.min(0.05, (now - lastTime) / 1000) : 1 / 60;
      lastTime = now;
      const alpha = 1 - Math.exp(-11 * dt);

      currentProgress += (targetProgress - currentProgress) * alpha;
      currentX += (targetX - currentX) * alpha;

      const settled =
        Math.abs(targetX - currentX) < 0.25 &&
        Math.abs(targetProgress - currentProgress) < 0.0004;

      if (settled) {
        currentProgress = targetProgress;
        currentX = targetX;
      }

      applyTransforms();

      if (!settled) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        lastTime = 0;
      }
    };

    const scheduleTick = () => {
      if (!active) return;
      syncTargetFromScroll();
      if (!rafId) {
        lastTime = 0;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const measure = () => {
      if (!active) return;
      const hdr = document.querySelector(".site-header");
      const hudEl = document.querySelector(".hud");
      stickyTop = hdr ? Math.round(hdr.getBoundingClientRect().height) : 81;
      hudH = hudEl ? Math.round(hudEl.getBoundingClientRect().height) : 34;

      section.style.setProperty("--exp-sticky-top", `${stickyTop}px`);
      section.style.setProperty("--exp-hud-h", `${hudH}px`);

      viewportW = viewport.clientWidth || window.innerWidth;
      viewportH = Math.max(460, window.innerHeight - stickyTop - hudH);
      const lastPanel = panels[panels.length - 1];
      const stageWidth = lastPanel ? lastPanel.offsetLeft + lastPanel.offsetWidth : stage.scrollWidth;
      maxTranslate = Math.max(0, stageWidth - viewportW);

      const scrollSpan = Math.max(820, Math.round(maxTranslate * 0.9));
      section.style.setProperty("--exp-track-h", `${viewportH + scrollSpan}px`);
      totalDist = Math.max(1, section.offsetHeight - viewportH);

      panelTargets = panels.map((panel, idx) => {
        if (idx === 0 || maxTranslate <= 0) return 0;
        if (idx === panels.length - 1) return 1;
        return clamp01(panel.offsetLeft / maxTranslate);
      });

      syncTargetFromScroll();
      currentProgress = targetProgress;
      currentX = targetX;
      activeChapter = -1;
      applyTransforms();
    };

    const teardown = () => {
      if (!active) return;
      active = false;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      lastTime = 0;
      window.removeEventListener("scroll", scheduleTick);
      section.classList.remove("is-exp-active");
      section.style.removeProperty("--exp-track-h");
      section.style.removeProperty("--exp-sticky-top");
      section.style.removeProperty("--exp-hud-h");

      stage.style.transform = "";
      if (tickerTop) tickerTop.style.transform = "";
      if (tickerBottom) tickerBottom.style.transform = "";
      if (progressEl) progressEl.style.transform = "";

      dateBgs.forEach((el) => {
        if (el) el.style.transform = "";
      });
      inners.forEach((el) => {
        if (el) {
          el.style.opacity = "";
          el.style.transform = "";
        }
      });
      activeChapter = -1;
    };

    const activate = () => {
      if (active) {
        measure();
        return;
      }
      active = true;
      section.classList.add("is-exp-active");
      measure();
      window.addEventListener("scroll", scheduleTick, { passive: true });
    };

    const refresh = () => {
      if (isEligible()) {
        activate();
      } else {
        teardown();
      }
    };

    const jumpToChapter = (idx) => {
      if (!active) return;
      const targetY = getChapterScrollY(idx);
      smoothScroller.scrollToY(targetY);
      AudioFX.tap();
    };

    jumpBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number.parseInt(btn.dataset.expJump || "0", 10);
        if (!Number.isNaN(idx)) jumpToChapter(idx);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const curr = activeChapter >= 0 ? activeChapter : 0;
        if (curr > 0) jumpToChapter(curr - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const curr = activeChapter >= 0 ? activeChapter : 0;
        if (curr < panels.length - 1) jumpToChapter(curr + 1);
      });
    }

    section.addEventListener("keydown", (event) => {
      if (!active) return;
      if (event.key === "ArrowRight") {
        const curr = activeChapter >= 0 ? activeChapter : 0;
        if (curr < panels.length - 1) {
          event.preventDefault();
          jumpToChapter(curr + 1);
        }
      } else if (event.key === "ArrowLeft") {
        const curr = activeChapter >= 0 ? activeChapter : 0;
        if (curr > 0) {
          event.preventDefault();
          jumpToChapter(curr - 1);
        }
      }
    });

    section.addEventListener("focusin", (event) => {
      if (!active || !(event.target instanceof Element)) return;
      const panel = event.target.closest("[data-exp-panel]");
      if (!panel) return;
      const idx = panels.indexOf(panel);
      if (idx !== -1 && idx !== activeChapter) {
        smoothScroller.scrollToY(getChapterScrollY(idx));
      }
    });

    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refresh, 100);
    });

    motionChangeListeners.push(refresh);
    refresh();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (active) measure();
      });
    }

    return {
      isActive: () => active,
      getStartY,
      refresh,
    };
  })();

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

      import("./mascot3d.js?v=20261110_07")
        .then(() => {
          mascotGlance = (x, y) => {
            if (typeof window.__mascotGlance === "function") {
              window.__mascotGlance(x, y);
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
      preloaderDone.then(() => {
        if (document.readyState === "complete") {
          bootMascot();
        } else {
          window.addEventListener("load", scheduleMascot, { once: true });
        }
      });
    };

    startMascot();
  }

  /* ---------------------------------------------------------------- */
  /* Mascot speech cloud bubble (Desktop only, site-wide companion)   */
  /* ---------------------------------------------------------------- */
  const initMascotSpeech = () => {
    const speechEl = document.getElementById("mascot-speech");
    const textEl = document.getElementById("mascot-speech-text");
    if (!speechEl || !textEl) return;

    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const isDesktop = () => desktopQuery.matches;

    const SECTION_QUIPS = {
      top: "Welcome! Take a look around 👋",
      work: "Real apps, real traffic, zero fake demos.",
      systems: "Live GitHub telemetry — fresh from the API.",
      console: "Go on, type something. Even 'sudo'.",
      about: "Less busywork, more actual engineering.",
      experience: "Scroll through — chapters unlock as you go.",
      skills: "Battle-tested tools. No buzzword filler.",
      contact: "Say hi! Replies faster than most APIs.",
      colophon: "Yes, he even documented the byte budget.",
    };

    const SECTION_IDS = Object.keys(SECTION_QUIPS);
    let activeSection = "top";
    let currentText = SECTION_QUIPS.top;
    let dwellTimer = null;
    let swapTimer = null;
    let resetTimer = null;
    let sectionTimer = null;
    let activeEl = null;
    let priorityUntil = 0;
    let lockHoverUntil = 0;

    const setBubbleText = (nextText) => {
      if (!nextText || nextText === currentText) return;
      currentText = nextText;
      if (swapTimer) window.clearTimeout(swapTimer);
      speechEl.classList.add("is-switching");
      swapTimer = window.setTimeout(() => {
        textEl.textContent = nextText;
        speechEl.classList.remove("is-switching");
        swapTimer = null;
      }, 95);
    };

    const currentDefaultText = () =>
      window.scrollY < 160 ? SECTION_QUIPS.top : SECTION_QUIPS[activeSection] || SECTION_QUIPS.top;

    const scheduleReset = (delay = 3200) => {
      if (resetTimer) window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        if (!isDesktop() || activeEl || performance.now() < priorityUntil) return;
        setBubbleText(currentDefaultText());
      }, delay);
    };

    const say = (text, duration = 4200) => {
      if (!isDesktop() || !text) return;
      const now = performance.now();
      priorityUntil = now + duration;
      lockHoverUntil = now + Math.min(1600, duration);
      activeEl = null;
      if (dwellTimer) {
        window.clearTimeout(dwellTimer);
        dwellTimer = null;
      }
      if (sectionTimer) {
        window.clearTimeout(sectionTimer);
        sectionTimer = null;
      }
      setBubbleText(text);
      scheduleReset(duration);
    };

    /* Ordered from most specific to broadest; matched with closest(). */
    const HOVER_TRIGGERS = [
      { selector: ".brand", text: "Elevator back to the top floor ↑" },
      { selector: ".site-nav a[href='#work']", text: "Five real builds — screenshots included." },
      { selector: ".site-nav a[href='#systems']", text: "Peek at the live GitHub pulse." },
      { selector: ".site-nav a[href='#console']", text: "A working zsh-style page terminal!" },
      { selector: ".site-nav a[href='#about']", text: "Spoiler: he hates repetitive clicks." },
      { selector: ".site-nav a[href='#experience']", text: "2019 to now — scroll-powered timeline." },
      { selector: ".site-nav a[href='#skills']", text: "Tools he actually ships with." },
      { selector: ".site-nav a[href='#contact']", text: "Ready when you are — say hello!" },
      { selector: ".header-cta", text: "Straight to Mayank's inbox ✉️" },
      { selector: "[data-palette-open]", text: "Psst — hit Ctrl+K from anywhere ⚡" },
      { selector: "[data-sound-toggle]", text: "Mechanical clicks, zero MP3 files." },

      { selector: ".hero-actions a[href='#work']", text: "Let's see what actually shipped!" },
      { selector: ".hero-actions a[href^='mailto:']", text: "No forms needed — straight to email ✉️" },
      { selector: ".hero-actions a[href*='linkedin.com']", text: "The polite networking button 💼" },
      { selector: "#hero-title, .hero-line", text: "Mayank! Full-stack + AI systems." },
      { selector: ".hero-lede", text: "TL;DR: automates boring stuff cleanly." },
      { selector: ".hero-meta li", text: "Bengaluru IST · Awake & shipping 🌍" },
      { selector: ".profile-card", text: "Live JSON specs — zero buzzword fluff." },
      { selector: ".proof-strip", text: "Receipts only — no vanity metrics." },
      { selector: ".skill-marquee", text: "Even this marquee stops if motion is off." },

      { selector: ".work-index a[href='#project-shoboti']", text: "Shoboti · Insta DMs -> UPI checkout!" },
      { selector: ".work-index a[href='#project-hisab']", text: "Hisab AI · Offline Hinglish khatabook." },
      { selector: ".work-index a[href='#project-simvox']", text: "SIMVox-AI · Old phone + SIM = AI receptionist." },
      { selector: ".work-index a[href='#project-mrproper']", text: "Mr. Proper · Storefront + ERP in one repo." },
      { selector: ".work-index a[href='#project-tenderiq']", text: "TenderIQ · Wrangles 33 messy gov portals." },

      { selector: "#project-shoboti .screen-open", text: "Click to zoom — real Shoboti UI, no mockups." },
      { selector: "#project-shoboti .case__links a", text: "₹0 gateway fees on UPI — check it out ↗" },
      { selector: "#project-hisab [data-hisab-chip], #project-hisab .hisab-sandbox__btn, #project-hisab .hisab-sandbox__input", text: "Go ahead, test it with Hinglish udhaar!" },
      { selector: "#project-hisab .workbench-trigger", text: "Pop open the <1ms Bahi-Khata parser!" },
      { selector: "#project-hisab .screen-open", text: "Works even with zero signal bars." },
      { selector: "#project-hisab .case__links a", text: "See Hisab AI live in action ↗" },
      { selector: "#project-simvox [data-simvox-trigger]", text: "Hit play — watch the <800ms voice loop!" },
      { selector: "#project-simvox .simvox-bench__rate-btn", text: "Switch audio sample rate on the fly." },
      { selector: "#project-simvox .workbench-trigger", text: "Live oscilloscope + latency waterfall inside!" },
      { selector: "#project-simvox .browser-frame--proof", text: "10 GitHub stars and counting ⭐" },
      { selector: "#project-simvox .screen-open", text: "Runs over Bluetooth HFP on a normal SIM!" },
      { selector: "#project-simvox .case__links a", text: "MIT-licensed open source on GitHub ↗" },
      { selector: "#project-mrproper .screen-open", text: "Clean layout for a cleaning brand — literally." },
      { selector: "#project-mrproper .case__links a", text: "95+ Lighthouse on live traffic ↗" },
      { selector: "#project-tenderiq .screen-open", text: "Reads 80-page PDFs so humans don't have to." },
      { selector: "#project-tenderiq .case__links a", text: "Peek under the TenderFlow architecture ↗" },
      { selector: ".screen-open", text: "Click to inspect full screen 🔍" },
      { selector: "#project-shoboti", text: "Shoboti · Turns Insta comments into UPI orders!" },
      { selector: "#project-hisab", text: "Hisab AI · Zero-internet Hinglish khatabook." },
      { selector: "#project-simvox", text: "SIMVox-AI · Gives any Android SIM an AI voice." },
      { selector: "#project-mrproper", text: "Mr. Proper · Storefront + chemical ERP in one!" },
      { selector: "#project-tenderiq", text: "TenderIQ · Wrangles 33 portals + captchas." },

      { selector: "[data-more-work-card='tenderflow']", text: "TenderFlow · Eats 80-page PDFs for breakfast." },
      { selector: "[data-more-work-card='coupletrust']", text: "CoupleTrust · Mutual consent, zero spying." },
      { selector: "[data-more-work-card='finaudit']", text: "FinAudit · Catches sneaky ledger mismatches." },
      { selector: ".more-work__panel", text: "Deep dive mode — architecture notes unlocked." },

      { selector: ".repos li a[href*='Magraa.github.io']", text: "Hey, that's this very website! (meta 🤖)" },
      { selector: ".repos li a[href*='ProperCoupons']", text: "Crypto coupons — no guessing promo codes." },
      { selector: ".repos li", text: "Fresh commit pulse, straight from GitHub." },

      { selector: ".shell__chips button", text: "Click to auto-run that command!" },
      { selector: ".shell__input, .shell__run", text: "Try 'whoami', 'projects', or 'sudo' 👀" },
      { selector: ".shell", text: "A live DOM-reading shell — zero fake logs." },

      { selector: ".fact-card", text: "IIIT Gwalior B.Tech+MBA + 300+ DSA reps." },
      { selector: ".process-steps li:nth-child(1)", text: "Step 1: Hunt down the annoying manual task." },
      { selector: ".process-steps li:nth-child(2)", text: "Step 2: Lock down the data model first." },
      { selector: ".process-steps li:nth-child(3)", text: "Step 3: Never let an LLM do raw math." },
      { selector: ".process-steps li:nth-child(4)", text: "Step 4: Handle flaky Wi-Fi like a pro." },

      { selector: "[data-exp-jump]", text: "Jump straight to any career chapter!" },
      { selector: ".exp-arrow-btn", text: "Flip through the timeline chapters." },
      { selector: ".exp-dock", text: "Scroll or tap arrows to cruise through time." },

      { selector: ".skill-card:nth-child(1)", text: "TypeScript, Python, SQL — the daily drivers." },
      { selector: ".skill-card:nth-child(2)", text: "60fps UIs, zero layout thrashing." },
      { selector: ".skill-card:nth-child(3)", text: "Postgres + Redis + strict state guards." },
      { selector: ".skill-card:nth-child(4)", text: "LLMs, RAG & containers that behave." },

      { selector: "[data-copy]", text: "One click to copy — zero typos allowed 📋" },
      { selector: ".button--whatsapp", text: "Quick ping on WhatsApp 💬" },
      { selector: ".connect-channels a[href*='linkedin']", text: "Say hi on LinkedIn!" },
      { selector: ".connect-channels a[href*='github']", text: "Warning: repo rabbit hole ahead." },
      { selector: ".connect-channels a[href$='.pdf'], .hud__btn--resume", text: "Grab the PDF résumé 📄" },
      { selector: "[data-contact-submit]", text: "Launch message! 🚀" },
      { selector: ".connect-form", text: "Drop a note — hits Mayank's inbox directly." },

      { selector: "[data-motion-toggle]", text: "Need things calmer? Freeze all motion here." },
      { selector: ".colophon__facts", text: "Under the hood: zero framework, zero bloat." },
      { selector: ".hud__clock", text: "Live Bengaluru time — IST never sleeps." },
      { selector: ".hud", text: "Statusline: 5 systems live, 60fps steady." },
      { selector: ".site-footer", text: "Made in Bengaluru · Thanks for scrolling!" },
    ];

    const findTrigger = (target) => {
      if (!(target instanceof Element)) return null;
      for (const rule of HOVER_TRIGGERS) {
        const el = target.closest(rule.selector);
        if (el) return { el, text: rule.text };
      }
      return null;
    };

    const activateRule = (el, text, immediate = false) => {
      if (!immediate && performance.now() < lockHoverUntil) return;
      activeEl = el;
      if (resetTimer) {
        window.clearTimeout(resetTimer);
        resetTimer = null;
      }
      if (dwellTimer) {
        window.clearTimeout(dwellTimer);
        dwellTimer = null;
      }
      if (immediate) {
        setBubbleText(text);
        return;
      }
      dwellTimer = window.setTimeout(() => {
        if (isDesktop() && activeEl === el && performance.now() >= lockHoverUntil) {
          setBubbleText(text);
        }
      }, 110);
    };

    const clearHover = () => {
      activeEl = null;
      if (dwellTimer) {
        window.clearTimeout(dwellTimer);
        dwellTimer = null;
      }
      scheduleReset();
    };

    document.addEventListener(
      "pointerover",
      (event) => {
        if (!isDesktop() || event.pointerType === "touch") return;
        const match = findTrigger(event.target);
        if (!match) {
          if (activeEl) clearHover();
          return;
        }
        if (match.el === activeEl) return;
        activateRule(match.el, match.text);
      },
      { passive: true }
    );

    document.addEventListener(
      "pointerout",
      (event) => {
        if (!activeEl) return;
        const next = event.relatedTarget;
        if (!next || !(next instanceof Node) || !activeEl.contains(next)) {
          clearHover();
        }
      },
      { passive: true }
    );

    document.addEventListener("focusin", (event) => {
      if (!isDesktop()) return;
      const match = findTrigger(event.target);
      if (match) activateRule(match.el, match.text);
    });

    document.addEventListener("focusout", (event) => {
      if (!activeEl) return;
      const next = event.relatedTarget;
      if (!next || !(next instanceof Node) || !activeEl.contains(next)) {
        clearHover();
      }
    });

    document.addEventListener(
      "click",
      (event) => {
        if (!isDesktop() || !(event.target instanceof Element)) return;
        let react = null;
        if (event.target.closest("[data-copy]")) {
          react = "Yoink! Copied straight to clipboard 📋";
        } else if (event.target.closest("[data-simvox-trigger]")) {
          react = "48kHz audio loop — faster than a blink ⚡";
        } else if (event.target.closest("[data-hisab-chip], .hisab-sandbox__btn")) {
          react = "0ms Hinglish parse — zero LLM bill harmed 💸";
        } else if (event.target.closest("[data-full]")) {
          react = "Zooming in — inspect every pixel 🔍";
        } else if (event.target.closest("[data-palette-open]")) {
          react = "Command palette! My favorite shortcut ⌘K";
        } else if (event.target.closest(".shell__chips button")) {
          react = "Running straight on the live DOM 🚀";
        } else if (event.target.closest("[data-sound-toggle]")) {
          const btn = event.target.closest("[data-sound-toggle]");
          window.setTimeout(() => {
            const on = btn.getAttribute("aria-pressed") === "true";
            activeEl = null;
            setBubbleText(on ? "Clicky switches engaged 🔊" : "Stealth mode: muted 🤫");
            scheduleReset(2400);
          }, 20);
          return;
        }

        if (react) {
          activeEl = null;
          if (dwellTimer) {
            window.clearTimeout(dwellTimer);
            dwellTimer = null;
          }
          setBubbleText(react);
          scheduleReset(2600);
        }
      },
      { capture: true }
    );

    /* Track the active section as the visitor scrolls so ambient quips stay relevant. */
    const visibleSections = new Set();
    const syncSectionQuip = () => {
      if (!isDesktop() || activeEl || performance.now() < priorityUntil) return;
      if (sectionTimer) window.clearTimeout(sectionTimer);
      sectionTimer = window.setTimeout(() => {
        if (activeEl || !isDesktop() || performance.now() < priorityUntil) return;
        setBubbleText(currentDefaultText());
      }, 240);
    };

    if ("IntersectionObserver" in window) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) visibleSections.add(entry.target.id);
            else visibleSections.delete(entry.target.id);
          }
          let chosen = activeSection;
          for (const id of SECTION_IDS) {
            if (visibleSections.has(id)) chosen = id;
          }
          if (window.scrollY < 160) chosen = "top";
          if (chosen !== activeSection) {
            activeSection = chosen;
            syncSectionQuip();
          }
        },
        { rootMargin: "-35% 0px -48% 0px", threshold: 0 }
      );

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) sectionObserver.observe(el);
      }
    }

    window.addEventListener(
      "scroll",
      () => {
        if (activeEl && !activeEl.closest(".site-header, .hud")) {
          activeEl = null;
          if (dwellTimer) {
            window.clearTimeout(dwellTimer);
            dwellTimer = null;
          }
          syncSectionQuip();
        }
        if (window.scrollY < 160 && activeSection !== "top") {
          activeSection = "top";
          syncSectionQuip();
        }
      },
      { passive: true }
    );

    syncSectionQuip();
    return { say };
  };

  mascotSpeech = initMascotSpeech();

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
    nodesOf(".exp-panel--role")
      .reverse()
      .map((row) => ({
        span: text(row.querySelector(".exp-eyebrow__date")),
        place: text(row.querySelector(".exp-eyebrow__place")),
        title: text(row.querySelector(".exp-role__title")),
        company: text(row.querySelector(".exp-eyebrow__company")),
        points: nodesOf(".exp-spec__text", row).map((li) => text(li)),
      }));

  const contactRows = () =>
    nodesOf(".contact-list li").map((row) => ({
      label: text(row.querySelector(".connect-tile__label") || row.querySelector("span")),
      value: text(row.querySelector("a") || row.querySelector(".connect-tile__val") || row.lastElementChild),
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
      if (!navigateToHash(hash)) {
        window.location.hash = hash;
      }
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
          rows.forEach((row) => node.appendChild(make("div", "sh-res", `${row.label.padEnd(14, " ")}${row.value}`)));
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
              ? "motion off — reveals snap, transitions settle, the marquee stops."
              : "motion on — wipe fills, parallax, and smooth motion are live.",
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
      if (!navigateToHash(hash)) {
        window.location.hash = hash;
      }
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
      { group: "Sections", label: "Under the surface", hint: "live repos", run: () => gotoSection("#systems") },
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

      const openContactModal = document.getElementById("contact-dialog");
      if (openContactModal?.open) {
        openContactModal.close();
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
      if (document.documentElement.classList.contains("is-preloading")) {
        return;
      }
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
      const iconEl = document.createElement("div");
      iconEl.className = "toast__icon";
      iconEl.setAttribute("aria-hidden", "true");
      iconEl.textContent = type === "success" ? "✓" : type === "error" ? "!" : "ℹ";
      const msgEl = document.createElement("div");
      msgEl.className = "toast__msg";
      msgEl.textContent = message;
      toast.append(iconEl, msgEl);
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
    if (document.documentElement.classList.contains("is-preloading")) {
      return;
    }
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
        smoothScroller.scrollToElement(el);
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

  /* ------------------------------------------------------------------ */
  /* Split-text heading reveal (Let's Connect)                          */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll("[data-split-heading]").forEach((heading) => {
    const rawText = text(heading);
    if (!rawText) return;

    const segments = [];
    heading.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const em = node.tagName.toLowerCase() === "em";
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (part) segments.push({ text: part, em });
        });
      } else if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (part) segments.push({ text: part, em: false });
        });
      }
    });

    heading.textContent = "";
    const sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = rawText;
    heading.appendChild(sr);

    const visual = document.createElement("span");
    visual.setAttribute("aria-hidden", "true");

    let charIndex = 0;
    segments.forEach((seg) => {
      if (/^\s+$/.test(seg.text)) {
        visual.appendChild(document.createTextNode(" "));
        return;
      }

      const wordWrap = document.createElement("span");
      wordWrap.className = seg.em ? "connect-word connect-word--em" : "connect-word";

      Array.from(seg.text).forEach((ch) => {
        const charSpan = document.createElement("span");
        charSpan.className = "connect-char";
        charSpan.style.setProperty("--char-i", String(charIndex++));
        charSpan.textContent = ch;
        wordWrap.appendChild(charSpan);
      });

      visual.appendChild(wordWrap);
    });

    heading.appendChild(visual);
    heading.classList.add("is-armed");

    const revealHeading = () => heading.classList.add("is-revealed");

    if (stillPlaying() || !("IntersectionObserver" in window)) {
      revealHeading();
    } else {
      const splitObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            revealHeading();
            splitObserver.disconnect();
          }
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.25 }
      );
      splitObserver.observe(heading);
    }

    new MutationObserver(() => {
      if (stillPlaying()) revealHeading();
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });
  });

  /* ------------------------------------------------------------------ */
  /* Let's Connect Contact Forms & Modal Dialog                         */
  /* ------------------------------------------------------------------ */
  const bindContactForm = (contactForm) => {
    const submitBtn = contactForm.querySelector("[data-contact-submit]");
    const submitLabel = contactForm.querySelector("[data-submit-label]");
    const statusBox = contactForm.querySelector("[data-contact-status]");
    const honeyInput = contactForm.querySelector('input[name="_honey"]');
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    let resetBtnTimer = 0;

    const setButtonState = (state, labelText) => {
      if (!submitBtn || !submitLabel) return;
      submitBtn.dataset.state = state;
      submitBtn.disabled = state === "loading";
      submitBtn.setAttribute("aria-busy", String(state === "loading"));
      submitLabel.textContent = labelText;
    };

    const setFieldError = (inputEl, errorMsg) => {
      if (!inputEl) return;
      const errEl = contactForm.querySelector(`[data-contact-error="${inputEl.name}"]`);
      if (errorMsg) {
        inputEl.setAttribute("aria-invalid", "true");
        if (errEl) {
          errEl.textContent = errorMsg;
          errEl.hidden = false;
        }
      } else {
        inputEl.removeAttribute("aria-invalid");
        if (errEl) {
          errEl.textContent = "";
          errEl.hidden = true;
        }
      }
    };

    const showFormStatus = (kind, message, mailtoHref = "") => {
      if (!statusBox) return;
      statusBox.textContent = "";
      statusBox.className = `connect-form__status connect-form__status--${kind}`;

      const p = document.createElement("span");
      p.textContent = message;
      statusBox.appendChild(p);

      if (mailtoHref) {
        statusBox.appendChild(document.createElement("br"));
        const link = document.createElement("a");
        link.className = "connect-form__fallback";
        link.href = mailtoHref;
        link.textContent = "Open pre-filled message in your email app ↗";
        statusBox.appendChild(link);
      }

      statusBox.hidden = false;
    };

    const hideFormStatus = () => {
      if (!statusBox) return;
      statusBox.hidden = true;
      statusBox.textContent = "";
    };

    [nameInput, emailInput, messageInput].forEach((inputEl) => {
      if (!inputEl) return;
      inputEl.addEventListener("input", () => {
        if (inputEl.hasAttribute("aria-invalid")) {
          setFieldError(inputEl, "");
        }
        hideFormStatus();
      });
    });

    const buildMailtoHref = (name, email, phone, message) => {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        message,
      ].filter((line) => line !== null);
      return `mailto:agrawalmayank1111@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    };

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      window.clearTimeout(resetBtnTimer);
      hideFormStatus();

      if (honeyInput && honeyInput.value.trim()) {
        contactForm.reset();
        setButtonState("success", "Message sent");
        resetBtnTimer = window.setTimeout(() => setButtonState("idle", "Send message"), 4000);
        return;
      }

      const nameVal = (nameInput?.value || "").trim();
      const emailVal = (emailInput?.value || "").trim();
      const phoneVal = (phoneInput?.value || "").trim();
      const messageVal = (messageInput?.value || "").trim();

      let firstInvalid = null;

      if (!nameVal) {
        setFieldError(nameInput, "Please enter your name.");
        firstInvalid = firstInvalid || nameInput;
      } else {
        setFieldError(nameInput, "");
      }

      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      if (!emailVal || !validEmail) {
        setFieldError(emailInput, "Please enter a valid email address.");
        firstInvalid = firstInvalid || emailInput;
      } else {
        setFieldError(emailInput, "");
      }

      if (!messageVal) {
        setFieldError(messageInput, "Please add a short message.");
        firstInvalid = firstInvalid || messageInput;
      } else {
        setFieldError(messageInput, "");
      }

      if (firstInvalid) {
        firstInvalid.focus();
        AudioFX.tap();
        return;
      }

      setButtonState("loading", "Sending...");

      try {
        const response = await fetch("https://formsubmit.co/ajax/agrawalmayank1111@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            phone: phoneVal || "Not provided",
            message: messageVal,
            _subject: `New Portfolio Message from ${nameVal}`,
            _template: "table",
            _replyto: emailVal,
            _honey: "",
          }),
        });

        const payload = await response.json().catch(() => ({}));
        const ok = response.ok && (payload.success === true || payload.success === "true");

        if (!ok) {
          throw new Error(payload.message || "Unable to deliver message right now.");
        }

        contactForm.reset();
        setButtonState("success", "Message sent");
        showFormStatus("success", "Message sent! Thanks for reaching out — I'll get back to you within one business day.");
        AudioFX.chime();
        Toast.show("Message sent to Mayank!", "success");

        resetBtnTimer = window.setTimeout(() => {
          setButtonState("idle", "Send message");
        }, 5000);
      } catch (error) {
        const mailtoHref = buildMailtoHref(nameVal, emailVal, phoneVal, messageVal);
        const detail = error && typeof error.message === "string" && error.message
          ? error.message
          : "Could not reach the mail relay.";
        setButtonState("idle", "Send message");
        showFormStatus("error", `${detail} You can still send it directly in one click:`, mailtoHref);
        Toast.show("Could not send via relay — email app fallback ready.", "error");
      }
    });
  };

  document.querySelectorAll("[data-contact-form]").forEach(bindContactForm);

  const contactDialog = document.getElementById("contact-dialog");
  if (contactDialog) {
    let lastContactTrigger = null;
    const firstDialogInput = contactDialog.querySelector('input[name="name"]');

    const openContactDialog = (trigger) => {
      lastContactTrigger = trigger || document.activeElement;
      if (palette?.open) {
        palette.close();
      }
      if (typeof contactDialog.showModal !== "function") {
        window.location.hash = "#contact";
        return;
      }

      contactDialog.showModal();
      mascotGlance();
      document.body.classList.add("dialog-open");
      if (firstDialogInput) {
        firstDialogInput.focus();
      } else {
        contactDialog.focus({ preventScroll: true });
      }
    };

    document.querySelectorAll("[data-contact-open]").forEach((trigger) => {
      trigger.addEventListener("click", () => openContactDialog(trigger));
    });

    contactDialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      if (lastContactTrigger instanceof HTMLElement) {
        lastContactTrigger.focus();
      }
      lastContactTrigger = null;
    });

    contactDialog.addEventListener("click", (event) => {
      if (event.target === contactDialog) {
        contactDialog.close();
      }
    });
  }
})();
