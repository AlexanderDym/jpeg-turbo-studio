const ORIGIN = "https://endlesstools.io";

const heroFeatureImg = (i) =>
  `${ORIGIN}/features/new/${String((i % 8) + 1).padStart(2, "0")}.png`;

/** 18 template cards — hero masonry (see reference layout: 6 columns, mixed heights) */
const HERO_TEMPLATES = [
  { title: "Worldwide", tags: ["interactive", "loop", "embed"], ratio: "tall", img: heroFeatureImg(0) },
  { title: "Liquid Metal", tags: ["liquid", "metal", "3d"], ratio: "mid", img: heroFeatureImg(1) },
  { title: "Pixel Field", tags: ["pixel", "retro", "loop"], ratio: "short", img: heroFeatureImg(2) },
  { title: "System Error", tags: ["halftone", "monitor", "classic"], ratio: "tall", img: heroFeatureImg(3) },
  { title: "Thanks", tags: ["typography", "3d", "gold"], ratio: "mid", img: heroFeatureImg(4) },
  { title: "Smileys", tags: ["loop", "3d", "animation"], ratio: "tall", img: heroFeatureImg(5) },
  { title: "Retro Futuristic", tags: ["emblem", "metal", "render"], ratio: "mid", img: heroFeatureImg(6) },
  { title: "Dream", tags: ["glow", "blur", "cinematic"], ratio: "short", img: heroFeatureImg(7) },
  { title: "Digital Knight", tags: ["glitch", "3d", "character"], ratio: "tall", img: heroFeatureImg(8) },
  { title: "Eyeball", tags: ["interactive", "embed", "3d"], ratio: "mid", img: heroFeatureImg(9) },
  { title: "Acid Skull", tags: ["icon", "3d", "neon"], ratio: "short", img: heroFeatureImg(10) },
  { title: "Lego Landscape", tags: ["bricks", "3d", "playful"], ratio: "tall", img: heroFeatureImg(11) },
  { title: "Say 👋", tags: ["typography", "emoji", "3d"], ratio: "mid", img: heroFeatureImg(12) },
  { title: "Magic 8-Ball", tags: ["icon", "luck", "3d"], ratio: "short", img: heroFeatureImg(13) },
  { title: "Neon Bloom", tags: ["glow", "loop", "color"], ratio: "mid", img: heroFeatureImg(14) },
  { title: "Cosmic Drift", tags: ["space", "particles", "8k"], ratio: "tall", img: heroFeatureImg(15) },
  { title: "Chrome Wave", tags: ["metal", "reflection", "loop"], ratio: "short", img: heroFeatureImg(16) },
  { title: "Aurora", tags: ["gradient", "atmosphere", "render"], ratio: "mid", img: heroFeatureImg(17) },
];

const FEATURES = [
  {
    title: "3D Extrude",
    desc: "Make your vectors 3D or browse shapes from the Noun Project",
    img: `${ORIGIN}/features/new/01.png`,
  },
  {
    title: "AI 3D Generation",
    desc: "Generate 3D models with AI or browse our model collections",
    img: `${ORIGIN}/features/new/02.png`,
  },
  {
    title: "Visual Effects",
    desc: "Add animated real-time effects to images, videos, or 3D scenes",
    img: `${ORIGIN}/features/new/03.png`,
  },
  {
    title: "3D Text",
    desc: "Create and animate 3D typography using a curated font collection",
    img: `${ORIGIN}/features/new/04.png`,
  },
  {
    title: "AI Textures",
    desc: "Generate realistic textures with AI and apply them to any 3D model",
    img: `${ORIGIN}/features/new/05.png`,
  },
  {
    title: "Embeds",
    desc: "Embed interactive scenes and effects directly into your website",
    img: `${ORIGIN}/features/new/06.png`,
  },
  {
    title: "8K Render",
    desc: "Export high-quality 8K images ready for commercial use",
    img: `${ORIGIN}/features/new/07.png`,
  },
  {
    title: "Post-processing",
    desc: "Add post-processing effects to images, videos, and animations",
    img: `${ORIGIN}/features/new/08.png`,
  },
];

const TWEETS = [
  {
    name: "Sang",
    handle: "@createwithsang",
    avatar: `${ORIGIN}/tweets/KeRz57wj_x96.jpg`,
    html: `Thank you page, build with <a href="https://x.com/framer" target="_blank" rel="noopener">@framer</a> and <a href="https://x.com/endlesstools" target="_blank" rel="noopener">@endlesstools</a>`,
    media: { type: "video", src: `${ORIGIN}/videos/main.mp4` },
    ratio: "58.44%",
  },
  {
    name: "kirill",
    handle: "@roooooodin",
    avatar: `${ORIGIN}/tweets/z3e-DVr8_x96.jpg`,
    html: "vibecoding my very first app GGG with bro. what do you think of the logo?",
    media: { type: "video", src: `${ORIGIN}/videos/main.mp4` },
    ratio: "73.66%",
  },
  {
    name: "Alex Burdin",
    handle: "@buburdin",
    avatar: `${ORIGIN}/tweets/v2e4e_hb_x96.jpg`,
    html: `been playing with <a href="https://x.com/endlesstools" target="_blank" rel="noopener">@endlesstools</a> and honestly impressed by how it nails the balance between fun, simplicity, and quality.`,
    media: { type: "video", src: `${ORIGIN}/videos/main.mp4` },
    ratio: "56%",
  },
  {
    name: "Readymag",
    handle: "@readymag",
    avatar: `${ORIGIN}/tweets/03-avatar.jpg`,
    html: `Meet Ancient Artifacts—a ready-to-use exhibition landing page template crafted in collaboration with <a href="https://x.com/endlesstools" target="_blank" rel="noopener">@endlesstools</a>.`,
    media: { type: "image", src: `${ORIGIN}/tweets/08.jpg` },
    ratio: "56.25%",
  },
  {
    name: "Matt Jumper",
    handle: "@mattjumper",
    avatar: `${ORIGIN}/tweets/04-avatar.jpg`,
    html: `Having too much fun with that <a href="https://x.com/visualelectric" target="_blank" rel="noopener">@visualelectric</a> x <a href="https://x.com/endlesstools" target="_blank" rel="noopener">@endlesstools</a> combo`,
    media: { type: "image", src: `${ORIGIN}/tweets/04.jpg` },
    ratio: "50%",
  },
  {
    name: "KevinWalton",
    handle: "@iamkevinwalton",
    avatar: `${ORIGIN}/tweets/02-avatar.jpg`,
    html: `Thank you <a href="https://x.com/endlesstools" target="_blank" rel="noopener">@endlesstools</a> for making these real. ❤️`,
    media: { type: "image", src: `${ORIGIN}/tweets/07.jpg` },
    ratio: "75%",
  },
];

function renderHeroMasonry() {
  const root = document.getElementById("hero-masonry");
  if (!root) return;

  root.innerHTML = HERO_TEMPLATES.map((item) => {
    const ratioClass =
      item.ratio === "tall"
        ? "template-card--tall"
        : item.ratio === "short"
          ? "template-card--short"
          : "template-card--mid";
    const tags = item.tags
      .map((t) => `<span class="template-tag">${t}</span>`)
      .join("");
    return `
      <article class="template-card ${ratioClass}">
        <img class="template-card__img" src="${item.img}" alt="${item.title} template preview" loading="lazy" width="600" height="800" />
        <div class="template-card__shade" aria-hidden="true"></div>
        <div class="template-card__meta">
          <h3 class="template-card__title">${item.title}</h3>
          <div class="template-tags">${tags}</div>
        </div>
      </article>`;
  }).join("");
}

function renderFeatures() {
  const grid = document.getElementById("feature-grid");
  if (!grid) return;

  grid.innerHTML = FEATURES.map(
    (f) => `
    <div class="feature-cell">
      <div class="feature-thumb">
        <img src="${f.img}" alt="${f.title}" loading="lazy" width="400" height="400" />
      </div>
      <h3 class="feature-name">${f.title}</h3>
      <p class="feature-desc">${f.desc}</p>
    </div>`,
  ).join("");
}

function mediaBlock(t) {
  const pb = t.ratio || "56.25%";
  if (t.media.type === "video") {
    return `
      <div class="tweet-media" style="padding-bottom:${pb}">
        <video class="tweet-video" src="${t.media.src}" autoplay muted loop playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></video>
      </div>`;
  }
  return `
    <div class="tweet-media" style="padding-bottom:${pb}">
      <img src="${t.media.src}" alt="" loading="lazy" width="500" height="280" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" />
    </div>`;
}

function renderTweets() {
  const scroller = document.getElementById("tweet-scroller");
  if (!scroller) return;

  scroller.innerHTML = TWEETS.map(
    (t) => `
    <article class="tweet-card">
      <div class="tweet-head">
        <img class="tweet-avatar" src="${t.avatar}" alt="${t.handle}" width="54" height="54" loading="lazy" />
        <div class="tweet-meta">
          <div class="tweet-name">${t.name}</div>
          <div class="tweet-handle">${t.handle}</div>
        </div>
      </div>
      <div class="tweet-body">${t.html}</div>
      ${mediaBlock(t)}
    </article>`,
  ).join("");
}

function setupBilling() {
  const yearly = document.querySelector('[data-period="yearly"]');
  const monthly = document.querySelector('[data-period="monthly"]');

  if (!yearly || !monthly) return;

  function setPeriod(period) {
    const isYearly = period === "yearly";
    yearly.disabled = isYearly;
    monthly.disabled = !isYearly;
    yearly.classList.toggle("is-active", isYearly);
    monthly.classList.toggle("is-active", !isYearly);
  }

  yearly.addEventListener("click", () => setPeriod("yearly"));
  monthly.addEventListener("click", () => setPeriod("monthly"));
}

function setupTweetScroller() {
  const scroller = document.getElementById("tweet-scroller");
  const prev = document.getElementById("tweet-prev");
  const next = document.getElementById("tweet-next");
  const fill = document.getElementById("tweet-track-fill");
  if (!scroller || !prev || !next || !fill) return;

  function updateTrack() {
    const max = scroller.scrollWidth - scroller.clientWidth;
    const p = max <= 0 ? 0 : scroller.scrollLeft / max;
    fill.style.width = `${Math.max(12, p * 100)}%`;
  }

  function scrollByCard(dir) {
    const card = scroller.querySelector(".tweet-card");
    const delta = card ? card.getBoundingClientRect().width + 10 : 320;
    scroller.scrollBy({ left: dir * delta, behavior: "smooth" });
  }

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
  scroller.addEventListener("scroll", updateTrack, { passive: true });
  window.addEventListener("resize", updateTrack);
  updateTrack();
}

renderHeroMasonry();
renderFeatures();
renderTweets();
setupBilling();
setupTweetScroller();
