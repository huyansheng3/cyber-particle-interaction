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
    baseUrl: "https://huyansheng3.github.io/cyber-particle-interaction/",
    analyticsEndpoint: ""
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
    addMeta("og:image", absoluteUrl("assets/og-image.svg"), "property");
    addMeta("twitter:card", "summary_large_image");
    addMeta("twitter:title", title);
    addMeta("twitter:description", desc);
    addMeta("twitter:image", absoluteUrl("assets/og-image.svg"));
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
      track("share_copy", { target: "clipboard" });
    } catch (err) {
      window.prompt("复制这个链接", text);
      track("share_copy", { target: "prompt" });
    }
  }

  function escapeAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function openShareTarget(target) {
    const url = buildShareUrl();
    const text = `${document.title} ${url}`;
    if (target === "weibo") {
      const shareUrl = new URL("https://service.weibo.com/share/share.php");
      shareUrl.searchParams.set("url", url);
      shareUrl.searchParams.set("title", `${document.title} - ${currentPage.desc}`);
      window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
      track("share_social", { target });
      return;
    }
    if (target === "wechat") {
      copy(url);
      toast("链接已复制，可粘贴到微信发送");
      track("share_social", { target });
      return;
    }
    if (target === "xiaohongshu") {
      copy(text);
      toast("文案已复制，可粘贴到小红书发布");
      track("share_social", { target });
    }
  }

  function downloadShareCard() {
    const url = buildShareUrl();
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1440;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1440);
    gradient.addColorStop(0, "#050510");
    gradient.addColorStop(0.45, "#081530");
    gradient.addColorStop(1, "#24061f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 220; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 2.6 + 0.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0 ? "rgba(40,231,255,.62)" : (i % 3 === 1 ? "rgba(255,79,216,.52)" : "rgba(255,209,102,.48)");
      ctx.fill();
    }

    ctx.strokeStyle = "rgba(40,231,255,.34)";
    ctx.lineWidth = 3;
    ctx.strokeRect(64, 64, 952, 1312);

    ctx.fillStyle = "#28e7ff";
    ctx.font = "36px sans-serif";
    ctx.fillText(site.cnName, 96, 140);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 76px sans-serif";
    wrapText(ctx, currentPage.title, 96, 290, 888, 92);

    const to = document.querySelector("#cpi-share-to")?.value.trim() || params.get("to");
    const msg = document.querySelector("#cpi-share-msg")?.value.trim() || params.get("msg") || currentPage.desc;
    ctx.fillStyle = "rgba(238,246,255,.82)";
    ctx.font = "40px sans-serif";
    wrapText(ctx, [to ? `To ${to}` : "", msg].filter(Boolean).join("  "), 96, 540, 888, 58);

    ctx.fillStyle = "rgba(255,255,255,.72)";
    ctx.font = "30px sans-serif";
    wrapText(ctx, "打开链接，体验这个可互动的粒子特效页面。", 96, 1050, 888, 44);

    ctx.fillStyle = "#ffd166";
    ctx.font = "28px monospace";
    wrapText(ctx, url, 96, 1180, 888, 38);

    const a = document.createElement("a");
    a.download = `${currentPage.path.replace(/[\/.]/g, "-")}-share-card.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
    track("share_card_download", { page: currentPage.path });
    toast("分享图已生成");
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = String(text).split("");
    let line = "";
    let currentY = y;
    for (const char of chars) {
      const test = line + char;
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = char;
        currentY += lineHeight;
      } else {
        line = test;
      }
    }
    if (line) ctx.fillText(line, x, currentY);
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
        <input id="cpi-share-to" maxlength="24" value="${escapeAttr(params.get("to"))}" placeholder="例如 小鹿">
      </div>
      <div class="cpi-share-field">
        <label for="cpi-share-msg">祝福语</label>
        <input id="cpi-share-msg" maxlength="64" value="${escapeAttr(params.get("msg"))}" placeholder="愿你的今天像粒子烟花一样发光">
      </div>
      <div class="cpi-share-actions">
        <button type="button" data-cpi-copy>复制链接</button>
        <button type="button" data-cpi-native>系统分享</button>
        <button type="button" data-cpi-shot>保存分享图</button>
        <a href="${prefix}index.html">更多模板</a>
      </div>
      <div class="cpi-social-actions">
        <button type="button" data-cpi-social="wechat">微信</button>
        <button type="button" data-cpi-social="xiaohongshu">小红书</button>
        <button type="button" data-cpi-social="weibo">微博</button>
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
        track("share_native", { supported: true });
      } else {
        copy(url);
        track("share_native", { supported: false });
      }
    });
    panel.querySelector("[data-cpi-shot]").addEventListener("click", downloadShareCard);
    panel.querySelectorAll("[data-cpi-social]").forEach((button) => {
      button.addEventListener("click", () => openShareTarget(button.dataset.cpiSocial));
    });
  }

  function addAdSlot(label) {
    if (!currentPage) return;
    const slot = document.createElement("div");
    slot.className = "cpi-ad-slot";
    slot.textContent = label || "广告位预留：通过审核后放置 AdSense 响应式广告";
    document.body.appendChild(slot);
  }

  function addExperienceInfo() {
    if (!currentPage) return;
    const section = document.createElement("section");
    section.className = "cpi-experience-info";
    section.innerHTML = `
      <div class="cpi-experience-inner">
        <p class="cpi-info-kicker">${currentPage.category}</p>
        <h2>${currentPage.title}</h2>
        <p>${currentPage.desc} 你可以直接体验当前模板，也可以使用右上角分享面板填写名字和祝福语，生成适合发送给朋友的专属链接。</p>
        <div class="cpi-info-grid">
          <div>
            <strong>适合场景</strong>
            <span>${sceneText(currentPage.category)}</span>
          </div>
          <div>
            <strong>分享方式</strong>
            <span>支持复制链接、系统分享、微信、小红书、微博，以及生成可保存的分享图。</span>
          </div>
          <div>
            <strong>广告位置</strong>
            <span>广告预留在体验说明和相关推荐附近，避开游戏、手势和主要交互控件。</span>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(section);
  }

  function sceneText(category) {
    const scenes = {
      "节日祝福": "520、七夕、生日、圣诞、新年和纪念日祝福。",
      "告白": "表白、纪念日、惊喜链接和私密祝福。",
      "互动游戏": "朋友挑战、分数分享、轻量休闲和社交转发。",
      "像素艺术": "动态头像、可爱视觉背景和社交内容配图。",
      "手势特效": "互动展示、镜头演示、创意实验和直播视觉。",
      "剑阵特效": "玄幻视觉展示、短视频素材预览和沉浸式背景。",
      "魔法阵": "魔法视觉背景、手势互动展示和短视频开场。"
    };
    return scenes[category] || "互动展示、社交分享和创意视觉体验。";
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
        <div class="cpi-site-links">
          <a href="${prefix}about.html">关于</a>
          <a href="${prefix}privacy.html">隐私政策</a>
          <a href="${prefix}terms.html">使用条款</a>
          <a href="${prefix}contact.html">联系合作</a>
        </div>
      </div>
    `;
    document.body.appendChild(section);
  }

  function track(type, detail) {
    const key = "cpi-analytics";
    const event = {
      type: type || "page_view",
      path: window.location.pathname,
      title: document.title,
      ts: Date.now(),
      referrer: document.referrer || "",
      detail: detail || {}
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
    if (site.analyticsEndpoint && navigator.sendBeacon) {
      const body = JSON.stringify(event);
      navigator.sendBeacon(site.analyticsEndpoint, new Blob([body], { type: "application/json" }));
    }
  }

  function init() {
    enhanceHead();
    track();
    if (!currentPage) return;
    addTopbar();
    applyPersonalText();
    window.setTimeout(() => {
      addExperienceInfo();
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
