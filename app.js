/* aditya sinha · portfolio interactions */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- pixel art ---------------- */
  const PAL = {
    k: '#1B1714', o: '#FF6A1F', d: '#C9460F', y: '#FFD25A', w: '#FFFDF8',
    c: '#E3D6C6', p: '#FFC9A8', t: '#3DBE8B', g: '#23946A', n: '#2A2420'
  };
  const PX = {
    gem: ['..kkkk..', '.kyyook.', 'kyoooodk', 'kooooddk', '.kooddk.', '..kodk..', '...kk...'],
    cloud: ['......wwww......', '....wwwwwwww....', '..wwwwwwwwwwww..', '.wwwwwwwwwwwwwww', 'wwwwwwwwwwwwwwww', 'cccccccccccccccc'],
    rocket: ['.....kk.....', '....kwwk....', '...kwoowk...', '...kwoowk...', '...kwwwwk...', '...kwwwwk...', '..kkwwwwkk..', '.kdkwwwwkdk.', '.kdkkkkkkdk.', '..k.kyyk.k..', '....kyyk....', '.....yy.....'],
    star: ['.....k.....', '....kyk....', 'kkkkyyykkkk', '.kyyyyyyyk.', '..kyyyyyk..', '..kyykyyk..', '.kyyk.kyyk.', '.kkk...kkk.'],
    clock: ['..kkkkkk..', '.kwwwwwwk.', 'kwwwowwwwk', 'kwwwowwwwk', 'kwwwooowwk', 'kwwwwwwwwk', 'kwwwwwwwwk', '.kwwwwwwk.', '..kkkkkk..'],
    logo: ['oo.oo', 'oo.oo', '.....', 'oo.oo', 'oo.oo'],
    leaf: ['........kkkk', '......kkttgk', '....kkttttgk', '...kttttttgk', '..ktttttgtk.', '..kttttgttk.', '.ktttgtttk..', '.kttgttkk...', '.ktgkkk.....', 'kkk.........', 'k...........'],
    chip: ['.k.k.k.k.k.', 'kkkkkkkkkkk', 'knnnnnnnnnk', 'knooooooonk', 'knoyyyyyonk', 'knoyyyyyonk', 'knooooooonk', 'knnnnnnnnnk', 'kkkkkkkkkkk', '.k.k.k.k.k.'],
    code: ['kkkkkkkkkkkk', 'kooooooooook', 'kkkkkkkkkkkk', 'knnnnnnnnnnk', 'knynnnnnnnnk', 'knnynnnnnnnk', 'knynnyyyynnk', 'knnnnnnnnnnk', 'kkkkkkkkkkkk'],
    flask: ['....kkkk....', '....kwwk....', '....kwwk....', '....kwwk....', '...kwwwwk...', '..kwwwwwwk..', '.kooooooook.', '.koyooooook.', 'kooooooyoook', 'kooooooooook', '.kkkkkkkkkk.'],
    heart: ['.kk.kk.', 'kwokook', 'koooodk', 'koooodk', '.koodk.', '..kdk..', '...k...'],
    shield: ['kkkkkkkkkkk', 'kwwwwwwwwwk', 'kwwwwwwwdwk', 'kwwwwwwdwwk', 'kwdwwwdwwwk', 'kwwdwdwwwwk', '.kwwdwwwwk.', '..kwwwwwk..', '...kwwwk...', '....kkk....'],
    cloudy: ['....kkkk......', '...kwwwwk.kk..', '..kwwwwwwkwwk.', '.kkwwwwwwwwwwk', 'kwwwwwwwwwwwwk', 'kwwwwwwwwwwwwk', '.kkkkkkkkkkkk.'],
    bolt: ['....kkkk', '...kyyk.', '..kyyk..', '.kyyk...', 'kyyykkkk', 'kyyyyyyk', 'kkkkyyk.', '...kyk..', '..kyk...', '.kyk....', '.kk.....'],
    globe: ['...kkkkk...', '.kkwwttwkk.', '.kwttttwwk.', 'kwwtttwwwwk', 'kwwwttwwttk', 'kwwwwwwtttk', 'kwwwwwwwttk', '.kwwttwwwk.', '.kkwttwwkk.', '...kkkkk...'],
    trophy: ['..kkkkkkkk..', 'kkkyyyyyykkk', 'kykwyyyyykyk', 'kykyyyyyykyk', '.kkyyyyyykk.', '...kyyyyk...', '....kyyk....', '.....kk.....', '....kyyk....', '...kkkkkk...', '...kddddk...', '...kkkkkk...'],
    ball: ['...kkkk...', '.kkoodokk.', '.koodooook', 'kooodooook', 'kddddddddk', 'koooodoook', '.kooodook.', '.kkoodokk.', '...kkkk...'],
    play: ['kkkkkkkkkkkk', 'kwwwwwwwwwwk', 'kwwkwwwwwwwk', 'kwwkkwwwwwwk', 'kwwkokwwwwwk', 'kwwkookwwwwk', 'kwwkokwwwwwk', 'kwwkkwwwwwwk', 'kwwkwwwwwwwk', 'kwwwwwwwwwwk', 'kkkkkkkkkkkk']
  };
  function pxSVG(name) {
    const map = PX[name];
    if (!map) return '';
    const h = map.length, w = Math.max(...map.map(r => r.length));
    let rects = '';
    map.forEach((row, y) => {
      let x = 0;
      while (x < row.length) {
        const ch = row[x];
        if (ch === '.' || ch === ' ' || !PAL[ch]) { x++; continue; }
        let run = 1;
        while (row[x + run] === ch) run++;
        rects += `<rect x="${x}" y="${y}" width="${run}" height="1" fill="${PAL[ch]}"/>`;
        x += run;
      }
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" preserveAspectRatio="xMidYMid meet">${rects}</svg>`;
  }
  $$('[data-px]').forEach(el => { el.innerHTML = pxSVG(el.dataset.px); });
  document.documentElement.style.setProperty('--gem', `url("data:image/svg+xml,${encodeURIComponent(pxSVG('gem'))}")`);

  /* ---------------- mascots ---------------- */
  const FILL = { white: '#FFFDF8', orange: '#FF6A1F', ink: '#4A413A', butter: '#FFD25A', peach: '#FFC9A8' };
  const INK = '#1B1714';
  function mascotSVG({ color = 'white', mood = 'happy', acc = '' } = {}) {
    const f = FILL[color] || color;
    const eye = color === 'ink' ? '#FFF6EC' : INK;
    const sw = 3.2;
    let eyes;
    if (mood === 'sleep') {
      eyes = `<g class="eyes" fill="none" stroke="${eye}" stroke-width="2.6" stroke-linecap="round"><path d="M21 36q4.5 4 9 0"/><path d="M34 36q4.5 4 9 0"/></g>`;
    } else if (mood === 'wink') {
      eyes = `<g class="eyes"><ellipse cx="26" cy="36" rx="3.4" ry="4.4" fill="${eye}"/><circle cx="27.2" cy="34.3" r="1.2" fill="#fff"/><path d="M35 37q3.5-4 7 0" fill="none" stroke="${eye}" stroke-width="2.6" stroke-linecap="round"/></g>`;
    } else {
      eyes = `<g class="eyes"><ellipse cx="26" cy="36" rx="3.4" ry="4.4" fill="${eye}"/><ellipse cx="38" cy="36" rx="3.4" ry="4.4" fill="${eye}"/><circle cx="27.2" cy="34.3" r="1.2" fill="#fff"/><circle cx="39.2" cy="34.3" r="1.2" fill="#fff"/></g>`;
    }
    let accSvg = '';
    if (acc === 'cap') {
      accSvg = `<g><path d="M8 15 32 5l24 10-24 10z" fill="${INK}"/><path d="M20 19v6c6 3 18 3 24 0v-6" fill="${INK}"/><path d="M52 16v11" stroke="#FFD25A" stroke-width="2.4"/><circle cx="52" cy="28" r="2.6" fill="#FFD25A"/></g>`;
    } else if (acc === 'nightcap') {
      accSvg = `<g><path d="M11 22c2-12 22-18 36-9l9 10c-12-5-30-6-45-1z" fill="#FFB27E" stroke="${INK}" stroke-width="2.6" stroke-linejoin="round"/><circle cx="57" cy="24" r="3.6" fill="#fff" stroke="${INK}" stroke-width="2.4"/></g>`;
    }
    const shine = color === 'orange' || color === 'butter' ? `<rect x="14" y="20" width="9" height="3.6" rx="1.8" fill="#fff" opacity=".55"/>` : '';
    const blush = mood === 'sleep' && color === 'ink' ? '#FF8A6B' : '#FF7F5C';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect x="15" y="7" width="11" height="15" rx="5" fill="${f}" stroke="${INK}" stroke-width="${sw}"/>
      <rect x="38" y="7" width="11" height="15" rx="5" fill="${f}" stroke="${INK}" stroke-width="${sw}"/>
      <rect x="18" y="52" width="9" height="8" rx="4" fill="${f}" stroke="${INK}" stroke-width="3"/>
      <rect x="37" y="52" width="9" height="8" rx="4" fill="${f}" stroke="${INK}" stroke-width="3"/>
      <rect x="7" y="16" width="50" height="39" rx="14" fill="${f}" stroke="${INK}" stroke-width="${sw}"/>
      ${shine}
      <ellipse cx="17.5" cy="43" rx="4" ry="2.4" fill="${blush}" opacity=".45"/>
      <ellipse cx="46.5" cy="43" rx="4" ry="2.4" fill="${blush}" opacity=".45"/>
      ${eyes}${accSvg}
    </svg>`;
  }
  function renderMascots(root = document) {
    $$('[data-mascot]', root).forEach(el => {
      el.innerHTML = mascotSVG({ color: el.dataset.color, mood: el.dataset.mood, acc: el.dataset.acc });
    });
  }
  renderMascots();
  // favicon-ish check not needed; favicon is a static file

  /* ---------------- skylines ---------------- */
  function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
  $$('[data-skyline]').forEach((el, idx) => {
    const fill = el.dataset.fill || '#F7F1E8';
    const flip = el.hasAttribute('data-flip');
    const pixel = el.hasAttribute('data-pixel');
    const r = rng(1234 + idx * 77);
    const W = 1600, H = 46;
    let shapes = flip ? `<rect x="0" y="${H - 8}" width="${W}" height="8"/>` : `<rect x="0" y="0" width="${W}" height="8"/>`;
    let x = 0;
    while (x < W) {
      const w = pixel ? 10 + Math.floor(r() * 5) * 10 : 30 + Math.floor(r() * 30);
      const h = pixel ? 8 + Math.floor(r() * 4) * 8 : 14 + Math.floor(r() * 26);
      const gap = pixel ? 0 : 6 + Math.floor(r() * 14);
      const rx = pixel ? 0 : 8;
      if (pixel && r() < .08) { // little antenna
        shapes += flip ? `<rect x="${x + w / 2}" y="${H - h - 12}" width="4" height="${h + 12}"/>` : `<rect x="${x + w / 2}" y="0" width="4" height="${h + 12}"/>`;
      }
      shapes += flip
        ? `<rect x="${x}" y="${H - h}" width="${w}" height="${h + 2}" rx="${rx}"/>`
        : `<rect x="${x}" y="-2" width="${w}" height="${h + 2}" rx="${rx}"/>`;
      x += w + gap;
    }
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" fill="${fill}" shape-rendering="${pixel ? 'crispEdges' : 'auto'}">${shapes}</svg>`;
  });

  if ($('#drawers')) {
  /* ---------------- drawers ---------------- */
  const DRAWERS = [
    { l: 'aozumi', q: 'select users from beta where weeks <= 3', r: '1,200+ rows', c: 'Aozumi: a cloud for AI-built apps and agents. They sleep when idle and wake in 2 seconds.' },
    { l: 'astrail', q: 'select * from apis into mcp_tools', r: 'open source', c: 'Astrail turns OpenAPI, GraphQL and MCP servers into typed tools for agents. We interviewed at YC S26.' },
    { l: 'berkeley', q: "select status from admits where class = 2030", r: 'admitted ✓', c: "Admitted to UC Berkeley '30 for IEOR. Couldn't join: my student visa slot didn't come through in time." },
    { l: 'stanford', q: "select award from iyrc where paper = 'self-healing'", r: 'best review', c: 'Researched self-healing materials for long space missions through Stanford IYRC. Published, with an award.' },
    { l: 'nas', q: 'select * from applicants order by vibe limit 11', r: '1 of 11', c: "One of 11 AI residents at Nas Daily in Dubai, picked from 20,000+ applicants." },
    { l: 'whyverse', q: 'select sum(views) from reels', r: '177M+', c: 'Lead content creator and strategist for Whyverse Official. Together with Marco Learns: 177M+ views.' },
    { l: 'marco', q: 'select role from marco_learns', r: 'strategist', c: 'Content strategist for Marco Learns since July 2025. Science, ideas, and sustainability.' },
    { l: 'cosmox', q: 'select count(*) from reads', r: '500K+', c: 'Founded Cosmox Blogs in 2022: 100+ articles on space and STEM, a 40+ member team, 500K+ reads.' },
    { l: 'evalio', q: 'select funding from creatorled', r: '$1,000', c: 'Evalio: an AI testing platform I built in under 48 hours. Funded by CreatorLed VC.' },
    { l: 'fynd', q: 'update reviews set time = time * 0.3', r: '-70%', c: 'At Fynd I built a GPT-4o release-note summarizer with 94% precision and cut feature-review time by ~70%.' },
    { l: 'afw', q: "delete from atmosphere where co2 = '40t'", r: '40 t', c: 'Action For World: UN SDG Challenge winner, 5,000+ students taught, and an Indian Govt award for 40 t of CO₂ saved.' },
    { l: 'maza', q: 'insert into cleanups (kg) values (1200)', r: '1 row', c: 'Head of Technology at Maza Maharashtra Mission: trees planted, ₹200K+ raised, 1,200 kg+ of waste cleared.' },
    { l: 'hackathon', q: 'select wins from hackathons', r: '5 rows', c: '5 international hackathon wins, including events by Georgetown, UMass Amherst, MLH and Xd Hacks Vancouver.' },
    { l: 'olympiad', q: "select medal from iymc, iaac", r: '2 gold', c: 'Gold Honour at IYMC 2024 (All India Rank 3) and IAAC 2024.' },
    { l: 'rivet', q: 'select role from team where name = me', r: 'cto', c: 'CTO at Rivet since August 2026.' },
    { l: 'agrosense', q: 'select rank from western_zone', r: '2nd', c: 'AgroSense: Arduino and ML plant care. 2nd place at the Western Zone Science Competition.' },
    { l: 'un sdg', q: "select winner from sdg_challenge", r: 'SDG 14', c: 'Won the UN Association Global Innovation SDG Challenge (SDG 14, life below water).' },
    { l: 'columbia', q: 'select program from summer_2025', r: 'med+research', c: 'Full scholarship to the Columbia & UCLA medical and research program, plus the Johns Hopkins Global Health Leaders Conference.' },
    { l: 'yale', q: 'select fellows from yes_fellowship', r: '1 row', c: 'Selected for the Yale YES Fellowship with full aid, and the UN & French Govt Young Leaders Conference.' },
    { l: 'hoops', q: 'select count(*) from medals', r: '27 rows', c: '27 sports medals in skating (state level), cricket and basketball. U19 zonals champion.' }
  ];
  const drawersEl = $('#drawers');
  const receipt = $('#receipt');
  const cap = $('#cabCap');
  const awake = $('#awakeName');
  const sleepy = new Set([3, 7, 9, 13, 16, 18]);
  DRAWERS.forEach((d, i) => {
    const b = document.createElement('button');
    b.className = 'drawer';
    b.type = 'button';
    b.setAttribute('aria-label', `Open ${d.l}`);
    b.innerHTML = `<span class="peek" data-mascot data-color="${i % 3 === 0 ? 'orange' : 'white'}"></span><span class="lbl">${d.l}</span><span class="hdl"></span>${sleepy.has(i) ? '<span class="zz">z</span>' : ''}`;
    b.addEventListener('click', () => openDrawer(i, true));
    drawersEl.appendChild(b);
  });
  renderMascots(drawersEl);
  const drawerBtns = $$('.drawer', drawersEl);
  function addReceipt(d) {
    const row = document.createElement('div');
    row.className = 'rc-row';
    row.innerHTML = `<b>${d.l}</b><span>${d.q}</span><em>${d.r}</em>`;
    receipt.prepend(row);
    while (receipt.children.length > 2) receipt.lastElementChild.remove();
  }
  function openDrawer(i, user) {
    drawerBtns.forEach(b => b.classList.remove('on'));
    drawerBtns[i].classList.add('on');
    const d = DRAWERS[i];
    addReceipt(d);
    cap.textContent = d.c;
    awake.textContent = d.l;
    if (user) stopAuto();
  }
  [5, 0].forEach(i => addReceipt(DRAWERS[i]));
  openDrawer(2);
  // gentle autoplay until the user clicks
  let autoT = null, autoI = 2;
  const order = [0, 5, 3, 4, 1, 10, 2];
  function startAuto() {
    if (reduce) return;
    autoT = setInterval(() => { autoI = (autoI + 1) % order.length; openDrawer(order[autoI]); }, 4200);
  }
  function stopAuto() { clearInterval(autoT); autoT = null; }
  startAuto();

  }

  if ($('#bubble')) {
  /* ---------------- bubble ---------------- */
  const msgs = ['beep! tap me', 'go bears! (almost)', '177M views, no big deal', 'i nap when idle', 'ask me about aozumi', 'ship it!', 'open a drawer ↓', 'beep boop ✦'];
  let mi = 0;
  const bubble = $('#bubble');
  const heroM = $('#heroMascot');
  const nextMsg = () => { mi = (mi + 1) % msgs.length; bubble.textContent = msgs[mi]; heroM.classList.remove('blink'); void heroM.offsetWidth; heroM.classList.add('blink'); };
  bubble.addEventListener('click', nextMsg);
  heroM.addEventListener('click', nextMsg);

  }

  /* ---------------- eye tracking + blinking ---------------- */
  const trackers = $$('[data-track]');
  let mx = innerWidth / 2, my = innerHeight / 3, raf = 0;
  addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    if (!raf) raf = requestAnimationFrame(updateEyes);
  }, { passive: true });
  function updateEyes() {
    raf = 0;
    trackers.forEach(el => {
      const g = el.querySelector('.eyes');
      if (!g) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 260);
      g.setAttribute('transform', `translate(${(dx / d * 3.2 * k).toFixed(2)} ${(dy / d * 2.6 * k).toFixed(2)})`);
    });
  }
  if (!reduce) {
    setInterval(() => {
      const happy = $$('[data-mascot]:not([data-mood])').filter(el => {
        const r = el.getBoundingClientRect();
        return r.top < innerHeight && r.bottom > 0;
      });
      const el = happy[Math.floor(Math.random() * happy.length)];
      if (!el) return;
      el.classList.remove('blink'); void el.offsetWidth; el.classList.add('blink');
    }, 1400);
  }

  if ($('#chart')) {
  /* ---------------- chart ---------------- */
  const BARS = [
    { v: 177e6, d: '177M+', l: 'Whyverse + Marco Learns', u: 'views', links: [
      { t: '@whyverseofficial', h: 'https://www.instagram.com/whyverseofficial/' },
      { t: '@marco.learns', h: 'https://www.instagram.com/marco.learns/' }
    ] },
    { v: 4.5e6, d: '4.5M+', l: 'Cosmox socials', u: 'impressions', href: 'https://www.instagram.com/cosmox.blogs/' },
    { v: 4e6, d: '4M+', l: 'Evalio media', u: 'views' },
    { v: 5e5, d: '500K+', l: 'Cosmox articles', u: 'reads' },
    { v: 3e5, d: '300K+', l: 'Action For World site', u: 'views' },
    { v: 15e3, d: '15K+', l: 'AI Readiness Test', u: 'users in 24h' }
  ];
  const chart = $('#chart');
  BARS.forEach((b, i) => {
    const n = Math.log10(b.v / 1000);
    const full = Math.floor(n), frac = n - full;
    let blocks = '';
    for (let j = 0; j < full; j++) blocks += `<i style="transition-delay:${(i * 80 + j * 90)}ms"></i>`;
    if (frac > .12) blocks += `<i class="part" style="--f:${frac.toFixed(2)};transition-delay:${(i * 80 + full * 90)}ms"></i>`;
    const el = document.createElement(b.href ? 'a' : b.links ? 'button' : 'div');
    el.className = 'bar' + (b.href || b.links ? ' bar-link' : '');
    if (b.href) { el.href = b.href; el.target = '_blank'; el.rel = 'noopener'; }
    if (b.links) { el.type = 'button'; el.setAttribute('aria-haspopup', 'true'); el.setAttribute('aria-expanded', 'false'); }
    el.innerHTML = `${i === 0 ? '<span class="mascot bm2" data-mascot data-color="orange" data-track></span>' : ''}<span class="val">${b.d}</span><div class="blocks">${blocks}</div><div class="bar-l"><b>${b.l}${b.href || b.links ? ' <span class="bar-go">↗</span>' : ''}</b><small>${b.u}</small></div>`;
    if (b.links) {
      const pop = document.createElement('div');
      pop.className = 'bar-pop';
      pop.hidden = true;
      pop.innerHTML = `<p>where to?</p>${b.links.map(k => `<a href="${k.h}" target="_blank" rel="noopener">${k.t} ↗</a>`).join('')}`;
      const wrap = document.createElement('div');
      wrap.className = 'bar-wrap';
      wrap.append(el, pop);
      el.addEventListener('click', e => {
        e.stopPropagation();
        pop.hidden = !pop.hidden;
        el.setAttribute('aria-expanded', String(!pop.hidden));
      });
      document.addEventListener('click', e => {
        if (!wrap.contains(e.target)) { pop.hidden = true; el.setAttribute('aria-expanded', 'false'); }
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { pop.hidden = true; el.setAttribute('aria-expanded', 'false'); }
      });
      chart.appendChild(wrap);
    } else chart.appendChild(el);
  });
  renderMascots(chart);
  trackers.push(...$$('[data-track]', chart));

  }

  /* ---------------- xp bar ---------------- */
  const xp = $('#xpbar');
  if (xp) for (let i = 0; i < 24; i++) xp.appendChild(document.createElement('i'));

  /* ---------------- reveal + counters ---------------- */
  function countUp(el) {
    const end = +el.dataset.count, suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = end.toLocaleString() + suf; return; }
    const t0 = performance.now(), dur = 1200;
    const step = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e).toLocaleString() + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add('in');
      $$('[data-count]', el).forEach(countUp);
      if (el.matches('[data-count]')) countUp(el);
      if (el.id === 'chart') {}
      if (xp && el.contains(xp)) {
        const lim = Math.round(24 * (+xp.dataset.fill || 1));
        $$('i', xp).forEach((c, i) => { if (i < lim) setTimeout(() => c.classList.add('on'), reduce ? 0 : i * 55); });
      }
      io.unobserve(el);
    });
  }, { threshold: .14, rootMargin: '0px 0px -40px 0px' });
  $$('.rv').forEach(el => io.observe(el));
  if ($('#chart')) io.observe($('#chart'));
  // stagger cards in grids
  $$('.v-grid, .levels, .programs, .orgs, .wins-grid, .shelf, .edu-grid').forEach(g => {
    $$(':scope > .rv', g).forEach((c, i) => { c.style.transitionDelay = `${(i % 3) * 90}ms`; });
  });

  if ($('#ccCopy')) {
  /* ---------------- research tabs ---------------- */
  const tabs = $$('.cc-tabs [data-tab]');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.toggle('on', x === t));
    $$('.cc-body').forEach(p => { p.hidden = p.dataset.pane !== t.dataset.tab; });
  }));
  $('#ccCopy').addEventListener('click', async e => {
    const pane = $$('.cc-body').find(p => !p.hidden);
    try { await navigator.clipboard.writeText(pane.innerText); e.target.textContent = 'Copied ✓'; }
    catch { e.target.textContent = 'Select & copy'; }
    setTimeout(() => (e.target.textContent = 'Copy'), 1600);
  });

  }

  /* ---------------- now serving ---------------- */
  const SERVE = [
    ['5,000+', 'students taught climate literacy'],
    ['40 t', 'of CO₂ emissions avoided'],
    ['1,200 kg', 'of waste cleared from the city'],
    ['₹200K+', 'raised for education'],
    ['350+', 'hackers hosted, $42K sponsored']
  ];
  const qItems = $$('#qlist li');
  let si = 0;
  if (!reduce && $('#serveNum')) setInterval(() => {
    si = (si + 1) % SERVE.length;
    $('#serveNum').textContent = SERVE[si][0];
    $('#serveLbl').textContent = SERVE[si][1];
    qItems.forEach((li, i) => li.classList.toggle('cur', i === si));
  }, 2600);

  if ($('#press')) {
  /* ---------------- press: mascot rain ---------------- */
  const rain = $('#rain');
  $('#press').addEventListener('click', () => {
    if (reduce) return;
    const colors = ['white', 'orange', 'butter', 'white', 'peach'];
    for (let i = 0; i < 26; i++) {
      const s = document.createElement('span');
      s.innerHTML = mascotSVG({ color: colors[i % colors.length], mood: i % 7 === 0 ? 'wink' : 'happy' });
      s.style.left = Math.random() * 100 + 'vw';
      s.style.width = s.style.height = 32 + Math.random() * 34 + 'px';
      s.style.animationDuration = 1.8 + Math.random() * 1.8 + 's';
      s.style.animationDelay = Math.random() * .7 + 's';
      s.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      rain.appendChild(s);
      setTimeout(() => s.remove(), 4600);
    }
  });

  }

  if ($('#runIt')) {
  /* ---------------- run it ---------------- */
  $('#runIt').addEventListener('click', e => {
    const btn = e.currentTarget, msg = $('#runMsg');
    btn.textContent = '… running';
    setTimeout(() => {
      btn.textContent = '✓ 1 row';
      msg.textContent = 'Inserted. Opening your mail app…';
      location.href = 'mailto:aadityasinha0308@gmail.com?subject=' + encodeURIComponent('Hey Aditya, something big') + '&body=' + encodeURIComponent('Hi Aditya,\n\n');
      setTimeout(() => { btn.textContent = '▶ Run it'; }, 2400);
    }, 600);
  });

  }

  /* ---------------- nav ---------------- */
  const nav = $('.nav'), bar = $('#scrollbar'), burger = $('#burger');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('#navlinks a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); }));
  const onScroll = () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    nav.classList.toggle('scrolled', h.scrollTop > 10);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const links = $$('#navlinks a');
  const secIO = new IntersectionObserver(es => {
    es.forEach(en => {
      if (en.isIntersecting) links.forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const href = a.getAttribute('href'); if (href.startsWith('#')) { const s = $(href); if (s) secIO.observe(s); } });

  $('#yr').textContent = new Date().getFullYear();
})();
