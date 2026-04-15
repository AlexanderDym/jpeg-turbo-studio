const HERO_TEMPLATES = [
  {
    title: "Worldwide",
    tags: ["advertisment", "campaign"],
    ratio: "tall",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_28.jpg?updatedAt=1775677425421",
  },
  {
    title: "Liquid Metal",
    tags: ["advertisement", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_2.mp4",
  },
  {
    title: "Gucci",
    tags: ["campaign", "brand"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_9.jpg?updatedAt=1775677425447",
  },
  {
    title: "GQ Magazine",
    tags: ["People", "Campaign"],
    ratio: "tall",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_4.jpg?updatedAt=1775677425496",
  },
  {
    title: "MURASHKA",
    tags: ["Clothes", "Campaign"],
    ratio: "mid",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_10.jpg?updatedAt=1775677425414",
  },
  {
    title: "Eme Studio",
    tags: ["advertisement", "clothes"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_18.mp4",
  },
  {
    title: "MAC Cosmetics",
    tags: ["cosmetics", "brand"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_5.mp4",
  },
  {
    title: "Bull Run",
    tags: ["creatives", "advertisement"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_22.jpg?updatedAt=1775677425391",
  },
  {
    title: "Gucci Desert",
    tags: ["Video", "Advertisement"],
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_4.mp4",
  },
  {
    title: "Dolce & Gabbana",
    tags: ["Clothes", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_11.mp4",
  },
  {
    title: "Planta Rosa Japan",
    tags: ["clothes", "campaign"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_12.jpg?updatedAt=1775677425350",
  },
  {
    title: "Motion",
    tags: ["video", "creative"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_9.mp4",
  },
  {
    title: "Planta Rosa Japan",
    tags: ["advertisement", "direction"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_7.mp4",
  },
  {
    title: "Prada Campaign",
    tags: ["clothes", "advertisement"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_26.jpg?updatedAt=1775677425422",
  },
  {
    title: "Planta Rosa Racing",
    tags: ["Clothes", "campaign"],
    ratio: "mid",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_20.jpg?updatedAt=1775677425478",
  },
  {
    title: "Desert Wind",
    tags: ["Video", "advertisement"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_17.mp4",
  },
  {
    title: "Duality",
    tags: ["brand", "campaign"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_03.webp?updatedAt=1775677425173",
  },
  {
    title: "Tom Ford",
    tags: ["advertisement", "campaign"],
    ratio: "mid",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_30.jpg?updatedAt=1775677425436",
  },

  {
    title: "Planta Rosa",
    tags: ["campaign", "advertisement"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_1.mp4",
  },
  {
    title: "Gucci Campaign",
    tags: ["advertisement", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_3.mp4",
  },
  {
    title: "Nike Basketball",
    tags: ["Advertisement", "Sport"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_14.jpg?updatedAt=1775677425431",
  },
  {
    title: "Eme Studio",
    tags: ["Clothes", "Campaign"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_16.mp4",
  },
  {
    title: "Sproty&Rich",
    tags: ["Clothes", "Campaign"],
    ratio: "mid",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_16.jpg?updatedAt=1775677425411",
  },
  {
    title: "Nude Project",
    tags: ["advertisement", "clothes"],
    ratio: "tall",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_05.webp?updatedAt=1775677425143",
  },
  {
    title: "Liquid Metal",
    tags: ["advertisement", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_22.mp4",
  },
  {
    title: "Salamon",
    tags: ["brand", "advertisement"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_7.jpg?updatedAt=1775677425339",
  },
  {
    title: "Hermes",
    tags: ["Advertisement", "Campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_12.mp4",
  },
  {
    title: "Eme Studio",
    tags: ["Clothes", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_10.mp4",
  },
  {
    title: "Planta Rosa Japan",
    tags: ["Brand", "Advertisement"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_18.jpg?updatedAt=1775677425443",
  },
  {
    title: "Eme Studio",
    tags: ["advertisement", "clothes"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_15.mp4",
  },
  {
    title: "Planta Rosa",
    tags: ["Clothes", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_19.mp4",
  },
  {
    title: "PREDUBEZHDAI",
    tags: ["brand", "advertisement"],
    ratio: "short",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_13.mp4",
  },
  {
    title: "Eme Studio",
    tags: ["Clothes", "campaign"],
    ratio: "mid",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_14.mp4",
  },
  {
    title: "Eme Studio kids",
    tags: ["Video", "advertisement"],
    ratio: "tall",
    type: "video",
    img: "https://osbtcyjgoyhqeohxoage.supabase.co/storage/v1/object/public/jpeg-studio-video/1_8.mp4",
  },
  {
    title: "Jeep",
    tags: ["Advertisement", "campaign"],
    ratio: "short",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_17.jpg?updatedAt=1775677425455",
  },
  {
    title: "Aurora",
    tags: ["Portrait", "branding"],
    ratio: "mid",
    img: "https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-img/1_29.jpg?updatedAt=1775677425427",
  },
];

const TWEETS = [
  {
    name: "Warhaus band",
    handle: "@warhausmusic",
    avatar: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/warhaus_logo.webp`,
    html: `Hell yeah! Love it!`,
    media: {
      type: "img",
      src: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/images/LUVU__2.webp`,
    },
    ratio: "58.44%",
  },
  {
    name: "Argemaclub",
    handle: "@argemaclub",
    avatar: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/argema.png?updatedAt=1775679164480`,
    html: "Great job jpeg.turbo studio!",
    media: {
      type: "img",
      src: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/duality.png?updatedAt=1775679164478`,
    },
    ratio: "73.66%",
  },
  {
    name: "Luvu",
    handle: "@luvucosmetics",
    avatar: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/luvu_logo.webp`,
    html: `great work by on the new campaign visuals!`,
    media: {
      type: "img",
      src: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/images/LUVU__2.webp`,
    },
    ratio: "56%",
  },
  {
    name: "PREDUBEZHDAI",
    handle: "@predubezhdai",
    avatar: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/predub_logo.png?updatedAt=1775679157888`,
    html: `Thank you, for making this real. ❤️`,
    media: {
      type: "img",
      src: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/images/PREDUBEZHDAI.png?updatedAt=1775679101009`,
    },
    ratio: "58.44%",
  },
  {
    name: "Duality",
    handle: "@duality",
    avatar: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/duality.png?updatedAt=1775679164478`,
    html: `great work by on the new campaign visuals!`,
    media: {
      type: "img",
      src: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/images/2.png?updatedAt=1775679101011`,
    },
    ratio: "56%",
  },
  {
    name: "Need a campaign?",
    handle: "@jpeg.turbo",
    avatar: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/logos/you_logo.webp`,
    html: "Feel free to reach out!",
    media: {
      type: "img",
      src: `https://ik.imagekit.io/zdaxgdi0x/jpeg.turbo-clients/images/Warhause.webp`,
    },
    ratio: "73.66%",
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

    const media =
      item.type === "video"
        ? `<video class="template-card__img" autoplay muted loop playsinline>
             <source src="${item.img}" type="video/mp4" />
           </video>`
        : `<img class="template-card__img" src="${item.img}" alt="${item.title} template preview" loading="lazy" width="600" height="800" />`;

    return `
      <article class="template-card ${ratioClass}">
        ${media}
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
    (f, i) => `
    <div class="feature-cell" style="--i:${i}">
      <div class="feature-thumb">
        <img src="${f.img}" alt="${f.title}" loading="lazy" width="400" height="400" />
      </div>
      <h3 class="feature-name">${f.title}</h3>
      <p class="feature-desc">${f.desc}</p>
    </div>`
  ).join("");
}

function mediaBlock(t) {
  const pb = t.ratio || "100%";
  if (t.media.type === "video") {
    return `
      <div class="tweet-media" style="padding-bottom:100%">
        <video class="tweet-video" src="${t.media.src}" autoplay muted loop playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></video>
      </div>`;
  }
  return `
    <div class="tweet-media" style="padding-bottom:100%">
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
        <img class="tweet-avatar" src="${t.avatar}" alt="${
      t.handle
    }" width="54" height="54" loading="lazy" />
        <div class="tweet-meta">
          <div class="tweet-name">${t.name}</div>
          <div class="tweet-handle">${t.handle}</div>
        </div>
      </div>
      <div class="tweet-body">${t.html}</div>
      ${mediaBlock(t)}
    </article>`
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

function animateHeroHeadline() {
  const nodes = document.querySelectorAll(".hero-inner [data-reveal]");
  if (!nodes.length) return;
  const prefersReduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  nodes.forEach((el, i) => {
    window.setTimeout(() => el.classList.add("is-visible"), 40 + i * 95);
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll("main section[data-reveal]");
  if (!sections.length) return;

  const prefersReduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { root: null, threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  sections.forEach((el) => io.observe(el));
}

renderHeroMasonry();
renderFeatures();
renderTweets();
setupBilling();
setupTweetScroller();
animateHeroHeadline();
setupScrollReveal();
