(function () {
  const pages = [
    {
      path: "love-520.html",
      title: "520告白粒子烟花",
      desc: "输入名字和祝福语，生成浪漫爱意粒子页面。",
      category: "节日祝福"
    },
    {
      path: "confession-heart.html",
      title: "爱心告白神器",
      desc: "手势控制丝绸爱心，适合告白和纪念日分享。",
      category: "告白"
    },
    {
      path: "holiday-tree.html",
      title: "新年圣诞祝福树",
      desc: "自定义祝福文字，生成节日互动特效。",
      category: "节日祝福"
    },
    {
      path: "cyber-snake.html",
      title: "赛博龙贪吃蛇",
      desc: "霓虹全息风格小游戏，适合挑战和分享分数。",
      category: "互动游戏"
    },
    {
      path: "pixel-cat-neon.html",
      title: "霓虹像素小猫",
      desc: "可爱的像素小猫舞池动态场景。",
      category: "像素艺术"
    },
    {
      path: "particle-dream.html",
      title: "3D粒子手势交互",
      desc: "基于手势识别的沉浸式粒子互动系统。",
      category: "手势特效"
    },
    {
      path: "daigeng/sword-array-star.html",
      title: "青竹蜂云剑星空阵",
      desc: "玄幻剑阵特效，适合作为视觉背景和互动展示。",
      category: "剑阵特效"
    },
    {
      path: "daigeng/sword-split-sky.html",
      title: "大庚裂空斩",
      desc: "大场面剑气分裂特效，点击即可体验。",
      category: "剑阵特效"
    },
    {
      path: "daigeng/sword-all-return.html",
      title: "万剑归宗",
      desc: "手势触发万剑归宗的玄幻粒子特效。",
      category: "剑阵特效"
    },
    {
      path: "magic/magic-circle-gesture.html",
      title: "绯红魔法阵",
      desc: "随手势运动的红色魔法阵视觉特效。",
      category: "魔法阵"
    },
    {
      path: "magic/gold-array-explode.html",
      title: "圣金粒子法阵",
      desc: "浑天仪核心与粒子爆炸组成的金色魔法阵。",
      category: "魔法阵"
    },
    {
      path: "magic/grand-spirit-array.html",
      title: "大通灵阵",
      desc: "复合金色法阵，适合做沉浸式视觉背景。",
      category: "魔法阵"
    }
  ];

  const site = {
    name: "Cyber Particle Interactive",
    cnName: "赛博粒子交互",
    description: "在线互动特效工具站，提供告白祝福、赛博小游戏、手势粒子、魔法阵和剑阵视觉模板。",
    baseUrl: "https://huyansheng3.github.io/cyber-particle-interaction/"
  };

  function depthPrefix() {
    const parts = window.location.pathname.split("/").filter(Boolean);
    const repoIndex = parts.indexOf("cyber-particle-interaction");
    const afterRepo = repoIndex >= 0 ? parts.slice(repoIndex + 1) : parts;
    return afterRepo.length > 1 ? "../" : "";
  }

  const prefix = depthPrefix();
  const currentPath = window.location.pathname.split("/").slice(-2).join("/");
  const normalizedCurrent = pages.find((page) => currentPath.endsWith(page.path)) || null;
  const currentPage = normalizedCurrent || pages.find((page) => window.location.pathname.endsWith(page.path));
  const params = new URLSearchParams(window.location.search);

  function addMeta(name, content, attr) {
    const key = attr || "name";
    if (!content || document.querySelector(`meta[${key}="${name}"]`)) return;
    const meta = document.createElement("meta");
    meta.setAttribute(key, name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }

  function addLink(rel, href) {
    if (!href || document.querySelector(`link[rel="${rel}"]`)) return;
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  }

  function absoluteUrl(path) {
    return new URL(path || "", site.baseUrl).toString();
  }

  function enhanceHead() {
    const title = currentPage ? `${currentPage.title} - ${site.cnName}` : site.cnName;
    const desc = currentPage ? currentPage.desc : site.description;
    if (currentPage && (!document.title || document.title.length < 12)) {
      document.title = title;
    }
    addMeta("description", desc);
    addMeta("keywords", "互动特效,粒子特效,告白网页,祝福生成器,赛博朋克小游戏,手势识别,魔法阵,剑阵特效,Cyber Particle");
    addMeta("robots", "index,follow");
    addMeta("theme-color", "#050914");
    addMeta("og:title", title, "property");
    addMeta("og:description", desc, "property");
    addMeta("og:type", "website", "property");
    addMeta("og:site_name", site.cnName, "property");
    addMeta("og:url", window.location.href.split("#")[0], "property");
    addMeta("twitter:card", "summary_large_image");
    addMeta("twitter:title", title);
    addMeta("twitter:description", desc);
    addLink("canonical", window.location.href.split("?")[0].split("#")[0]);

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: title,
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      description: desc,
      url: window.location.href.split("#")[0],
      inLanguage: ["zh-CN", "en"]
    });
    document.head.appendChild(jsonLd);
  }

  function applyPersonalText() {
    const to = params.get("to");
    const message = params.get("msg");
    if (!to && !message) return;
    const text = [to ? `To ${to}` : "", message || ""].filter(Boolean).join(" · ");
    const badge = document.createElement("div");
    badge.style.cssText = "position:fixed;left:50%;top:72px;z-index:99989;transform:translateX(-50%);max-width:min(680px,calc(100vw - 32px));padding:10px 14px;border:1px solid rgba(255,255,255,.22);border-radius:8px;background:rgba(5,8,20,.68);color:#fff;font:14px/1.5 'Segoe UI','PingFang SC',sans-serif;text-align:center;backdrop-filter:blur(14px);";
    badge.textContent = text;
    document.body.appendChild(badge);
  }

  function buildShareUrl() {
    const inputTo = document.querySelector("#cpi-share-to");
    const inputMsg = document.querySelector("#cpi-share-msg");
    const url = new URL(window.location.href.split("#")[0]);
    if (inputTo && inputTo.value.trim()) url.searchParams.set("to", inputTo.value.trim());
    else url.searchParams.delete("to");
    if (inputMsg && inputMsg.value.trim()) url.searchParams.set("msg", inputMsg.value.trim());
    else url.searchParams.delete("msg");
    return url.toString();
  }

  function toast(message) {
    const old = document.querySelector(".cpi-toast");
    if (old) old.remove();
    const el = document.createElement("div");
    el.className = "cpi-toast";
    el.textContent = message;
    document.body.appendChild(el);
    window.setTimeout(() => el.remove(), 2200);
  }

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("链接已复制");
    } catch (err) {
      window.prompt("复制这个链接", text);
    }
  }

  function addTopbar() {
    if (!currentPage || document.querySelector(".cpi-topbar")) return;
    const bar = document.createElement("div");
    bar.className = "cpi-topbar";
    bar.innerHTML = `
      <a class="cpi-home-link" href="${prefix}index.html">Cyber Particle</a>
      <button class="cpi-share-toggle" type="button" aria-label="打开分享面板">分享</button>
    `;
    document.body.appendChild(bar);

    const panel = document.createElement("aside");
    panel.className = "cpi-share-panel";
    panel.hidden = true;
    panel.innerHTML = `
      <h2 class="cpi-share-title">生成专属分享链接</h2>
      <p class="cpi-share-desc">填写名字和祝福语，复制链接发给朋友。对方打开后会看到你的定制文字。</p>
      <div class="cpi-share-field">
        <label for="cpi-share-to">名字</label>
        <input id="cpi-share-to" maxlength="24" value="${params.get("to") || ""}" placeholder="例如 小鹿">
      </div>
      <div class="cpi-share-field">
        <label for="cpi-share-msg">祝福语</label>
        <input id="cpi-share-msg" maxlength="64" value="${params.get("msg") || ""}" placeholder="愿你的今天像粒子烟花一样发光">
      </div>
      <div class="cpi-share-actions">
        <button type="button" data-cpi-copy>复制链接</button>
        <button type="button" data-cpi-native>系统分享</button>
        <button type="button" data-cpi-shot>保存截图</button>
        <a href="${prefix}index.html">更多模板</a>
      </div>
    `;
    document.body.appendChild(panel);

    bar.querySelector(".cpi-share-toggle").addEventListener("click", () => {
      panel.hidden = !panel.hidden;
    });
    panel.querySelector("[data-cpi-copy]").addEventListener("click", () => copy(buildShareUrl()));
    panel.querySelector("[data-cpi-native]").addEventListener("click", async () => {
      const url = buildShareUrl();
      if (navigator.share) {
        await navigator.share({ title: document.title, text: currentPage.desc, url });
      } else {
        copy(url);
      }
    });
    panel.querySelector("[data-cpi-shot]").addEventListener("click", () => {
      toast("截图请使用系统截屏；后续可接入自动生成海报");
    });
  }

  function addAdSlot(label) {
    if (!currentPage) return;
    const slot = document.createElement("div");
    slot.className = "cpi-ad-slot";
    slot.textContent = label || "广告位预留：通过审核后放置 AdSense 响应式广告";
    document.body.appendChild(slot);
  }

  function addRelated() {
    if (!currentPage) return;
    const related = pages
      .filter((page) => page.path !== currentPage.path)
      .sort((a, b) => Number(b.category === currentPage.category) - Number(a.category === currentPage.category))
      .slice(0, 3);
    const section = document.createElement("section");
    section.className = "cpi-related";
    section.innerHTML = `
      <div class="cpi-related-inner">
        <h2>更多互动模板</h2>
        <div class="cpi-related-grid">
          ${related.map((page) => `
            <a class="cpi-related-card" href="${prefix}${page.path}">
              <strong>${page.title}</strong>
              <span>${page.desc}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `;
    document.body.appendChild(section);
  }

  function track() {
    const key = "cpi-analytics";
    const event = {
      path: window.location.pathname,
      title: document.title,
      ts: Date.now(),
      referrer: document.referrer || ""
    };
    try {
      const old = JSON.parse(localStorage.getItem(key) || "[]").slice(-49);
      old.push(event);
      localStorage.setItem(key, JSON.stringify(old));
    } catch (err) {
      // Local storage can be disabled in private browsing.
    }
    window.cpiAnalytics = window.cpiAnalytics || [];
    window.cpiAnalytics.push(event);
  }

  function init() {
    enhanceHead();
    track();
    if (!currentPage) return;
    addTopbar();
    applyPersonalText();
    window.setTimeout(() => {
      addAdSlot();
      addRelated();
    }, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
