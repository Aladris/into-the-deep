// Full creature roster. `depth` places the card on the scroll; `size` is the
// sprite's rendered width in px, chosen so creatures feel roughly to scale
// relative to each other (a manta dwarfs a lanternfish). `sides` alternate to
// keep cards from colliding. Every gradient id is prefixed with the creature
// id so the inline SVGs don't clash when injected into one DOM.

export const CREATURES = [
  // ——————————————————— SUNLIGHT · 0–200 m ———————————————————
  {
    id: 'flying-fish',
    name: 'Flying Fish',
    sci: 'Exocoetidae',
    depth: 6,
    range: 'Surface',
    size: 120,
    side: 'right',
    fact: 'To escape tuna and marlin, it rockets out of the water and glides on outstretched fins — some stay airborne for over 200 metres before splashing back down.',
    svg: `
      <svg viewBox="0 0 150 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flying fish">
        <defs><linearGradient id="ff-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd3ec"/><stop offset="1" stop-color="#2f7fb0"/></linearGradient></defs>
        <path d="M20 52 Q60 40 118 50 Q134 52 146 46 Q140 58 132 58 Q140 66 138 76 Q126 68 116 60 Q60 70 20 60 Q10 56 20 52Z" fill="url(#ff-b)" stroke="#123449" stroke-width="2"/>
        <path d="M52 50 Q72 12 118 18 Q92 40 60 52Z" fill="#bfe6f5" stroke="#123449" stroke-width="1.6" opacity="0.92"/>
        <path d="M56 56 Q74 84 112 82 Q86 62 60 56Z" fill="#a9dcf0" stroke="#123449" stroke-width="1.6" opacity="0.9"/>
        <circle cx="126" cy="52" r="4" fill="#0c2634"/><circle cx="127.4" cy="50.6" r="1.4" fill="#fff"/>
      </svg>`,
  },
  {
    id: 'clownfish',
    name: 'Clownfish',
    sci: 'Amphiprion ocellaris',
    depth: 22,
    range: '1–15 m',
    size: 84,
    side: 'left',
    fact: 'Lives inside the stinging arms of sea anemones — a coat of mucus keeps it from getting stung. Every clownfish is born male; the dominant one becomes female.',
    svg: `
      <svg viewBox="0 0 130 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clownfish">
        <defs><linearGradient id="cf-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a3d"/><stop offset="1" stop-color="#f4611b"/></linearGradient></defs>
        <path d="M14 42 Q2 30 4 22 Q18 26 24 34 Q18 50 4 62 Q2 52 14 42Z" fill="url(#cf-body)" stroke="#26120a" stroke-width="2"/>
        <ellipse cx="68" cy="42" rx="46" ry="26" fill="url(#cf-body)" stroke="#26120a" stroke-width="2.5"/>
        <path d="M56 18 Q70 4 88 16 Q80 24 66 24Z" fill="url(#cf-body)" stroke="#26120a" stroke-width="2"/>
        <path d="M60 62 Q72 76 86 68 Q78 58 66 58Z" fill="url(#cf-body)" stroke="#26120a" stroke-width="2"/>
        <path d="M42 20 Q34 42 42 64 Q52 62 55 42 Q52 22 42 20Z" fill="#fdf6ec" stroke="#26120a" stroke-width="2"/>
        <path d="M74 18 Q68 42 74 66 Q84 62 86 42 Q84 22 74 18Z" fill="#fdf6ec" stroke="#26120a" stroke-width="2"/>
        <path d="M104 32 Q112 42 104 52 Q100 42 104 32Z" fill="#fdf6ec" stroke="#26120a" stroke-width="2"/>
        <circle cx="98" cy="38" r="5" fill="#26120a"/><circle cx="99.6" cy="36.4" r="1.6" fill="#fff"/>
      </svg>`,
  },
  {
    id: 'green-sea-turtle',
    name: 'Green Sea Turtle',
    sci: 'Chelonia mydas',
    depth: 45,
    range: 'Surface–20 m',
    size: 150,
    side: 'right',
    fact: 'One of the few reptiles that grazes like a cow — adults eat seagrass and algae, which tints their body fat green and gives them their name. They can hold their breath for hours while resting.',
    svg: `
      <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Green sea turtle">
        <defs><radialGradient id="gt-sh" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#5aa06a"/><stop offset="1" stop-color="#2c5f3c"/></radialGradient></defs>
        <path d="M40 40 Q30 20 46 22 Q54 34 52 46Z" fill="#3f7a52"/>
        <path d="M120 40 Q132 18 138 34 Q132 50 116 50Z" fill="#3f7a52"/>
        <path d="M36 78 Q22 92 30 104 Q44 96 50 82Z" fill="#3f7a52"/>
        <path d="M118 80 Q132 96 124 108 Q110 98 106 84Z" fill="#3f7a52"/>
        <ellipse cx="80" cy="64" rx="52" ry="40" fill="url(#gt-sh)" stroke="#1f4630" stroke-width="2.5"/>
        <path d="M80 24 L80 104 M40 50 L120 50 M34 78 L126 78 M62 26 L54 102 M98 26 L106 102" stroke="#1f4630" stroke-width="1.6" fill="none" opacity="0.55"/>
        <path d="M132 58 Q152 54 152 66 Q150 76 132 72Z" fill="#4a8a5c" stroke="#1f4630" stroke-width="2"/>
        <circle cx="145" cy="62" r="2.6" fill="#0c1f14"/>
      </svg>`,
  },
  {
    id: 'giant-manta',
    name: 'Giant Manta Ray',
    sci: 'Mobula birostris',
    depth: 115,
    range: 'Surface–120 m',
    size: 230,
    side: 'left',
    fact: 'The largest ray on Earth, spanning up to 7 metres wingtip to wingtip. It filters plankton from the water and has the biggest brain of any fish — curious enough to seem to interact with divers.',
    svg: `
      <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Giant manta ray">
        <defs><linearGradient id="gm-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4a5e"/><stop offset="1" stop-color="#0e1826"/></linearGradient></defs>
        <path d="M110 30 Q120 24 128 34 Q126 46 116 48 Q120 40 110 40 Q100 40 104 48 Q94 46 92 34 Q100 24 110 30Z" fill="#26323f"/>
        <path d="M110 34 Q150 34 200 92 Q170 96 150 88 Q140 118 118 128 Q112 132 110 118 Q108 132 102 128 Q80 118 70 88 Q50 96 20 92 Q70 34 110 34Z" fill="url(#gm-b)" stroke="#070d15" stroke-width="2"/>
        <path d="M110 118 Q112 138 110 150 Q108 138 110 118Z" fill="#26323f"/>
        <ellipse cx="90" cy="46" rx="4" ry="5" fill="#0a1017"/><ellipse cx="130" cy="46" rx="4" ry="5" fill="#0a1017"/>
        <path d="M78 78 Q110 70 142 78" stroke="#4d6076" stroke-width="2" fill="none" opacity="0.5"/>
      </svg>`,
  },
  {
    id: 'great-white',
    name: 'Great White Shark',
    sci: 'Carcharodon carcharias',
    depth: 178,
    range: 'Surface–250 m',
    size: 240,
    side: 'right',
    fact: 'A warm-bodied hunter that keeps its muscles above the surrounding water temperature, letting it burst after seals in a cold sea. It can smell a single drop of blood in a hundred litres of water.',
    svg: `
      <svg viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Great white shark">
        <defs><linearGradient id="gw-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0.5" stop-color="#8ba0ad"/><stop offset="0.52" stop-color="#e9eef1"/><stop offset="1" stop-color="#f4f7f8"/></linearGradient></defs>
        <path d="M8 56 Q60 46 96 48 L96 66 Q60 66 8 56Z" fill="#e9eef1"/>
        <path d="M14 54 Q80 30 150 44 Q200 52 232 44 Q216 60 214 62 Q222 74 220 84 Q196 70 176 66 Q120 78 60 70 Q30 70 14 54Z" fill="url(#gw-b)" stroke="#4a5b66" stroke-width="2"/>
        <path d="M110 44 Q118 12 132 40Z" fill="#8ba0ad" stroke="#4a5b66" stroke-width="1.8"/>
        <path d="M96 68 Q104 92 116 74Z" fill="#8ba0ad" stroke="#4a5b66" stroke-width="1.6"/>
        <path d="M150 44 Q158 30 170 42Z" fill="#8ba0ad" opacity="0.85"/>
        <path d="M18 60 Q34 62 44 58" stroke="#3f4f5a" stroke-width="2" fill="none"/>
        <circle cx="40" cy="52" r="3.4" fill="#12202a"/>
        <path d="M22 62 l6 -1 M28 64 l6 -1 M34 66 l6 -1" stroke="#7f939f" stroke-width="1.4"/>
      </svg>`,
  },

  // ——————————————————— TWILIGHT · 200–1000 m ———————————————————
  {
    id: 'lanternfish',
    name: 'Lanternfish',
    sci: 'Myctophidae',
    depth: 360,
    range: '200–1,000 m',
    size: 92,
    side: 'left',
    fact: 'Possibly the most abundant vertebrate on the planet — their combined weight may top a billion tonnes. Rows of light organs dot their bellies, and each night they rise to the surface to feed, then sink back before dawn.',
    svg: `
      <svg viewBox="0 0 140 74" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lanternfish">
        <defs><linearGradient id="lf-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#41586b"/><stop offset="1" stop-color="#1a2a38"/></linearGradient></defs>
        <path d="M12 40 Q40 24 96 34 Q112 36 128 30 Q122 40 118 42 Q124 50 122 60 Q108 50 96 48 Q40 56 12 44 Q6 42 12 40Z" fill="url(#lf-b)" stroke="#0c161f" stroke-width="1.8"/>
        <path d="M50 34 Q60 22 74 32Z" fill="#33475a"/>
        <circle cx="102" cy="40" r="6" fill="#0a1119"/><circle cx="104" cy="38.4" r="2" fill="#bfe4f2"/>
        <g fill="#9be9ff"><circle cx="30" cy="49" r="2.4"/><circle cx="44" cy="51" r="2.4"/><circle cx="58" cy="52" r="2.4"/><circle cx="72" cy="51" r="2.4"/><circle cx="86" cy="49" r="2.4"/></g>
      </svg>`,
  },
  {
    id: 'swordfish',
    name: 'Swordfish',
    sci: 'Xiphias gladius',
    depth: 500,
    range: 'Surface–550 m',
    size: 220,
    side: 'right',
    fact: 'Dives into the cold twilight zone to hunt, then returns to sun-warmed surface water to recover. Special tissue near its eyes heats its brain and vision, keeping it sharp in the chill of the deep.',
    svg: `
      <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Swordfish">
        <defs><linearGradient id="sw-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a6f82"/><stop offset="0.55" stop-color="#33465a"/><stop offset="1" stop-color="#9fb0bd"/></linearGradient></defs>
        <path d="M2 46 L86 42 L86 50 L2 46Z" fill="#2a3947" stroke="#182430" stroke-width="1.2"/>
        <path d="M80 46 Q140 26 196 42 Q214 46 236 40 Q226 54 220 56 Q228 66 224 76 Q206 62 190 58 Q140 70 80 48 Q74 47 80 46Z" fill="url(#sw-b)" stroke="#18242f" stroke-width="1.8"/>
        <path d="M120 40 Q132 8 150 38Z" fill="#41566a" stroke="#18242f" stroke-width="1.6"/>
        <path d="M118 52 Q126 74 140 56Z" fill="#41566a" stroke="#18242f" stroke-width="1.4"/>
        <circle cx="104" cy="45" r="4" fill="#0b1620"/><circle cx="105.4" cy="43.6" r="1.4" fill="#cfe8f2"/>
      </svg>`,
  },
  {
    id: 'hatchetfish',
    name: 'Hatchetfish',
    sci: 'Sternoptychidae',
    depth: 660,
    range: '200–1,000 m',
    size: 80,
    side: 'left',
    fact: 'Its thin, mirror-bright body reflects the dim blue light so predators below can’t see its silhouette. Glowing organs along its belly fine-tune the trick, matching the faint glow from above — a disappearing act called counter-illumination.',
    svg: `
      <svg viewBox="0 0 110 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hatchetfish">
        <defs><linearGradient id="hf-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e4eef2"/><stop offset="0.6" stop-color="#a9c1cd"/><stop offset="1" stop-color="#6d8593"/></linearGradient></defs>
        <path d="M30 30 Q54 22 78 32 Q92 40 78 52 Q84 66 72 88 Q60 108 50 88 Q46 66 40 54 Q22 44 30 30Z" fill="url(#hf-b)" stroke="#3d4f5b" stroke-width="1.8"/>
        <path d="M78 40 Q98 38 102 48 Q92 56 78 52Z" fill="#8fa8b5" stroke="#3d4f5b" stroke-width="1.4"/>
        <circle cx="46" cy="40" r="7" fill="#0d1820"/><circle cx="46" cy="40" r="3" fill="#111"/><circle cx="47.6" cy="38" r="1.6" fill="#dff0f6"/>
        <g fill="#8ff0ff"><circle cx="50" cy="92" r="2.2"/><circle cx="58" cy="90" r="2.2"/><circle cx="64" cy="86" r="2.2"/></g>
      </svg>`,
  },
  {
    id: 'vampire-squid',
    name: 'Vampire Squid',
    sci: 'Vampyroteuthis infernalis',
    depth: 780,
    range: '300–900 m',
    size: 100,
    side: 'right',
    fact: 'Not a vampire at all — it drifts through the low-oxygen twilight zone catching falling "marine snow" (bits of dead plankton) on sticky filaments. When threatened it turns its cloak of arms inside out, baring harmless spines.',
    svg: `
      <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vampire squid">
        <defs><linearGradient id="vs-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a2334"/><stop offset="1" stop-color="#43101f"/></linearGradient></defs>
        <path d="M24 22 Q10 8 20 4 Q34 8 36 24Z" fill="#5c1828"/>
        <path d="M96 22 Q110 8 100 4 Q86 8 84 24Z" fill="#5c1828"/>
        <path d="M60 6 Q98 14 100 62 Q100 92 60 96 Q20 92 20 62 Q22 14 60 6Z" fill="url(#vs-body)"/>
        <path d="M22 66 Q14 118 30 132 Q34 104 40 84 Q44 116 54 134 Q58 108 60 88 Q62 108 66 134 Q76 116 80 84 Q86 104 90 132 Q106 118 98 66 Q80 84 60 86 Q40 84 22 66Z" fill="#5c1828" opacity="0.92"/>
        <circle cx="44" cy="52" r="11" fill="#a8d8f0"/><circle cx="44" cy="52" r="5.5" fill="#0a1626"/><circle cx="46" cy="49.5" r="2" fill="#e8f6ff"/>
        <circle cx="82" cy="30" r="2.5" fill="#9fe8ff" opacity="0.9"/><circle cx="90" cy="44" r="1.8" fill="#9fe8ff" opacity="0.7"/>
      </svg>`,
  },
  {
    id: 'giant-squid',
    name: 'Giant Squid',
    sci: 'Architeuthis dux',
    depth: 920,
    range: '300–1,000 m',
    size: 250,
    side: 'left',
    fact: 'One of the largest animals without a backbone, reaching 12–13 metres including its feeding tentacles. Its eyes are the size of dinner plates — the biggest in the animal kingdom — built to catch the faintest glow in the dark.',
    svg: `
      <svg viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Giant squid">
        <defs><linearGradient id="gs-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c65a52"/><stop offset="1" stop-color="#8a2f2c"/></linearGradient></defs>
        <path d="M228 30 Q248 40 246 60 Q248 80 228 90 Q214 60 228 30Z" fill="#9c3833"/>
        <path d="M120 40 Q210 30 224 60 Q210 90 120 80 Q96 70 96 60 Q96 50 120 40Z" fill="url(#gs-b)" stroke="#5e1d1c" stroke-width="2"/>
        <circle cx="128" cy="58" r="12" fill="#f2e9c8"/><circle cx="128" cy="58" r="5.5" fill="#12100a"/>
        <g stroke-linecap="round" fill="none">
          <path d="M104 54 Q60 40 8 30" stroke="#b04a44" stroke-width="7"/>
          <path d="M104 58 Q56 54 4 52" stroke="#a84440" stroke-width="6"/>
          <path d="M104 62 Q58 70 6 76" stroke="#b04a44" stroke-width="6"/>
          <path d="M108 66 Q64 84 14 98" stroke="#a84440" stroke-width="5"/>
          <path d="M100 56 Q40 48 2 62 Q30 66 20 70" stroke="#c76a5f" stroke-width="4"/>
        </g>
      </svg>`,
  },

  // ——————————————————— MIDNIGHT · 1000–4000 m ———————————————————
  {
    id: 'anglerfish',
    name: 'Anglerfish',
    sci: 'Melanocetus johnsonii',
    depth: 1250,
    range: '1,000–2,000 m',
    size: 110,
    side: 'right',
    fact: 'Fishes in total darkness with a glowing lure grown from its own head — the light is made by colonies of bacteria living inside it. The tiny male fuses onto the giant female for life, becoming little more than a source of sperm.',
    svg: `
      <svg viewBox="0 0 150 116" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anglerfish">
        <defs>
          <radialGradient id="af-lure" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fdffd8"/><stop offset="0.45" stop-color="#b8f3a8"/><stop offset="1" stop-color="#b8f3a8" stop-opacity="0"/></radialGradient>
          <linearGradient id="af-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3947"/><stop offset="1" stop-color="#101b26"/></linearGradient>
        </defs>
        <circle cx="44" cy="22" r="18" fill="url(#af-lure)" class="lure-glow"/>
        <circle cx="44" cy="22" r="4" fill="#f4ffc4"/>
        <path d="M46 26 Q56 36 62 48" fill="none" stroke="#22303d" stroke-width="3" stroke-linecap="round"/>
        <path d="M132 56 Q148 42 146 60 Q148 78 132 66Z" fill="#22303d"/>
        <path d="M62 46 Q96 30 122 50 Q138 62 122 78 Q96 96 60 84 Q30 92 18 76 Q34 70 34 62 Q30 52 20 48 Q38 36 62 46Z" fill="url(#af-body)"/>
        <path d="M20 48 Q34 58 22 78 L18 76 Q32 70 33 62 Q30 53 20 48Z" fill="#0c141d"/>
        <path d="M24 60 L30 70 L34 60 L40 71 L45 60 L51 72 L56 61" fill="none" stroke="#e8eef4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 74 L31 65 L36 75 L42 64 L48 74" fill="none" stroke="#e8eef4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="66" cy="52" r="6" fill="#0a1220"/><circle cx="68" cy="50" r="2" fill="#9fd8e8"/>
        <path d="M92 34 Q104 22 112 30 Q104 40 94 40Z" fill="#22303d"/>
      </svg>`,
  },
  {
    id: 'fangtooth',
    name: 'Fangtooth',
    sci: 'Anoplogaster cornuta',
    depth: 2400,
    range: '2,000–5,000 m',
    size: 92,
    side: 'left',
    fact: 'Has the largest teeth relative to body size of any fish in the ocean — its fangs are so long that they slide into sockets in its own skull so it can close its mouth. Despite the nightmare grin, it’s only about 16 cm long.',
    svg: `
      <svg viewBox="0 0 130 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fangtooth">
        <defs><linearGradient id="ftz-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b3540"/><stop offset="1" stop-color="#140f18"/></linearGradient></defs>
        <path d="M120 44 Q130 38 126 52 Q130 64 120 60Z" fill="#221c28"/>
        <path d="M40 30 Q92 26 118 46 Q124 54 116 72 Q92 88 46 82 Q20 78 12 62 Q28 60 30 52 Q22 44 40 30Z" fill="url(#ftz-b)" stroke="#0c0810" stroke-width="1.8"/>
        <path d="M18 60 Q40 68 58 72 Q40 60 30 52 Q22 44 42 34 Q28 42 24 52 Q18 56 12 62Z" fill="#1c1622" opacity="0.9"/>
        <path d="M32 56 Q48 56 66 60 L60 46 L54 58 L48 44 L42 58 L36 46Z" fill="#e9e4ee"/>
        <path d="M40 66 L44 78 L50 68 L56 80 L62 68" fill="none" stroke="#e9e4ee" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="52" cy="46" r="5.5" fill="#0a0710"/><circle cx="53.6" cy="44.4" r="1.6" fill="#b9a9d8"/>
      </svg>`,
  },
  {
    id: 'gulper-eel',
    name: 'Gulper Eel',
    sci: 'Eurypharynx pelecanoides',
    depth: 3050,
    range: '500–3,000 m',
    size: 180,
    side: 'right',
    fact: 'Almost all mouth — its enormous, loosely hinged jaw can open like a pelican’s pouch to swallow prey larger than itself. The rest of its body tapers into a whip-thin tail tipped with a glowing pink light.',
    svg: `
      <svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gulper eel">
        <defs><linearGradient id="ge-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a3340"/><stop offset="1" stop-color="#0d141c"/></linearGradient></defs>
        <path d="M8 44 Q30 20 70 30 Q64 56 60 66 Q40 72 8 84 Q2 64 8 44Z" fill="url(#ge-b)" stroke="#060b12" stroke-width="1.8"/>
        <path d="M8 84 Q40 72 62 66 Q50 70 40 78 Q26 84 8 84Z" fill="#1a222c"/>
        <path d="M60 48 Q130 40 200 60 Q214 64 216 82 Q214 90 208 86 Q206 74 198 74 Q130 66 62 62Z" fill="url(#ge-b)" stroke="#060b12" stroke-width="1.6"/>
        <circle cx="196" cy="80" r="5" fill="#ff9ec4" class="lure-glow"/>
        <circle cx="52" cy="36" r="4" fill="#0a0f16"/><circle cx="53.4" cy="34.6" r="1.4" fill="#9fd8e8"/>
        <path d="M12 48 Q36 44 58 46" stroke="#3a4552" stroke-width="1.6" fill="none" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'dumbo-octopus',
    name: 'Dumbo Octopus',
    sci: 'Grimpoteuthis',
    depth: 3600,
    range: '1,000–7,000 m',
    size: 130,
    side: 'left',
    fact: 'The deepest-living octopus known, named for the ear-like fins it flaps to swim. Instead of squirting ink — useless in the dark — it simply flushes red or pale to signal, and swallows its prey whole.',
    svg: `
      <svg viewBox="0 0 150 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dumbo octopus">
        <defs><radialGradient id="do-b" cx="0.5" cy="0.35" r="0.7"><stop offset="0" stop-color="#f08aa0"/><stop offset="1" stop-color="#b34a68"/></radialGradient></defs>
        <path d="M28 46 Q4 30 8 56 Q14 74 40 66Z" fill="#c85a76" stroke="#7a2c44" stroke-width="1.8"/>
        <path d="M122 46 Q146 30 142 56 Q136 74 110 66Z" fill="#c85a76" stroke="#7a2c44" stroke-width="1.8"/>
        <path d="M75 20 Q116 24 116 62 Q116 84 96 92 Q98 118 88 130 Q82 116 82 100 Q75 108 68 100 Q68 116 62 130 Q52 118 54 92 Q34 84 34 62 Q34 24 75 20Z" fill="url(#do-b)" stroke="#7a2c44" stroke-width="2"/>
        <circle cx="60" cy="52" r="5.5" fill="#3a1420"/><circle cx="90" cy="52" r="5.5" fill="#3a1420"/>
        <circle cx="61.6" cy="50" r="1.8" fill="#ffe3ec"/><circle cx="91.6" cy="50" r="1.8" fill="#ffe3ec"/>
      </svg>`,
  },

  // ——————————————————— ABYSSAL · 4000–6000 m ———————————————————
  {
    id: 'giant-isopod',
    name: 'Giant Isopod',
    sci: 'Bathynomus giganteus',
    depth: 4500,
    range: '170–2,140 m+',
    size: 120,
    side: 'right',
    fact: 'A deep-sea relative of the woodlouse in your garden, but grown to the size of a house cat. It scavenges whatever sinks from above and can survive years between meals — one in captivity refused food for over five years.',
    svg: `
      <svg viewBox="0 0 150 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Giant isopod">
        <defs><linearGradient id="gi-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9b48a"/><stop offset="1" stop-color="#8a744c"/></linearGradient></defs>
        <g stroke="#5c4a2c" stroke-width="1.6" stroke-linecap="round">
          <path d="M40 88 L28 108 M56 92 L48 114 M74 94 L74 116 M92 92 L100 114 M108 88 L120 108"/>
          <path d="M40 40 L26 24 M108 40 L122 24"/>
        </g>
        <ellipse cx="74" cy="60" rx="48" ry="38" fill="url(#gi-b)" stroke="#5c4a2c" stroke-width="2"/>
        <path d="M40 34 Q74 26 108 34 M34 46 Q74 40 114 46 M32 58 Q74 54 116 58 M34 70 Q74 68 114 70 M40 82 Q74 82 108 82" stroke="#5c4a2c" stroke-width="1.4" fill="none" opacity="0.7"/>
        <ellipse cx="74" cy="32" rx="20" ry="14" fill="#a78e5e" stroke="#5c4a2c" stroke-width="1.6"/>
        <circle cx="64" cy="30" r="3.4" fill="#241a0c"/><circle cx="84" cy="30" r="3.4" fill="#241a0c"/>
      </svg>`,
  },
  {
    id: 'sea-pig',
    name: 'Sea Pig',
    sci: 'Scotoplanes globosa',
    depth: 5100,
    range: '1,000–6,000 m',
    size: 110,
    side: 'left',
    fact: 'A plump, pinkish sea cucumber that walks the abyssal mud on stubby water-filled legs, hoovering up the richest sediment like a vacuum. Herds of them gather wherever food falls, sometimes hundreds all facing the same way.',
    svg: `
      <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sea pig">
        <defs><radialGradient id="sp-b" cx="0.4" cy="0.35" r="0.8"><stop offset="0" stop-color="#f4c9b0"/><stop offset="1" stop-color="#d18f74"/></radialGradient></defs>
        <g stroke="#a06a52" stroke-width="7" stroke-linecap="round">
          <path d="M42 74 L36 100"/><path d="M60 80 L58 104"/><path d="M90 80 L92 104"/><path d="M108 74 L114 100"/>
        </g>
        <ellipse cx="75" cy="56" rx="52" ry="32" fill="url(#sp-b)" stroke="#a86a50" stroke-width="2"/>
        <g stroke="#c98a6e" stroke-width="4" stroke-linecap="round"><path d="M34 40 L22 22"/><path d="M46 34 L40 14"/></g>
        <ellipse cx="120" cy="52" rx="14" ry="16" fill="#eab79e" stroke="#a86a50" stroke-width="1.8"/>
        <circle cx="123" cy="48" r="3" fill="#5c3324"/>
      </svg>`,
  },
  {
    id: 'tripod-fish',
    name: 'Tripod Fish',
    sci: 'Bathypterois grallator',
    depth: 5700,
    range: '900–4,700 m',
    size: 130,
    side: 'right',
    fact: 'Perches motionless on three long, stiffened fin rays like a camera on a tripod, facing into the current. Nearly blind, it waits with its front fins spread wide to feel for tiny prey drifting past in the dark.',
    svg: `
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tripod fish">
        <defs><linearGradient id="tf-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a7f74"/><stop offset="1" stop-color="#38473f"/></linearGradient></defs>
        <g stroke="#26332c" stroke-width="2.4" stroke-linecap="round">
          <path d="M64 66 L40 142"/><path d="M92 66 L112 142"/><path d="M100 60 Q140 96 146 140"/>
        </g>
        <path d="M28 54 Q76 40 118 54 Q132 58 118 70 Q76 82 28 66 Q18 60 28 54Z" fill="url(#tf-b)" stroke="#26332c" stroke-width="2"/>
        <path d="M40 46 Q52 30 66 44Z" fill="#4f6157" stroke="#26332c" stroke-width="1.4"/>
        <path d="M28 58 Q10 52 6 60 Q10 68 28 64Z" fill="#4f6157" stroke="#26332c" stroke-width="1.4"/>
        <circle cx="108" cy="58" r="4" fill="#101812"/><circle cx="109.4" cy="56.6" r="1.4" fill="#bfe0d4"/>
      </svg>`,
  },

  // ——————————————————— HADAL · 6000–10935 m ———————————————————
  {
    id: 'mariana-snailfish',
    name: 'Mariana Snailfish',
    sci: 'Pseudoliparis swirei',
    depth: 8000,
    range: '6,900–8,000 m',
    size: 120,
    side: 'left',
    fact: 'The deepest fish ever filmed, thriving where the pressure would crush a submarine. Its body has almost no scales and a soft, translucent, tadpole-like shape — a special molecule in its cells keeps its proteins from being squeezed apart.',
    svg: `
      <svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mariana snailfish">
        <defs><linearGradient id="ms-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3dfd0" stop-opacity="0.95"/><stop offset="1" stop-color="#d3b4a0" stop-opacity="0.8"/></linearGradient></defs>
        <path d="M20 44 Q36 30 60 34 Q120 30 148 52 Q150 58 142 62 Q118 74 60 62 Q30 66 18 58 Q10 50 20 44Z" fill="url(#ms-b)" stroke="#a98770" stroke-width="1.8"/>
        <path d="M96 34 Q120 24 138 36 Q120 42 100 42Z" fill="#e7cdbc" stroke="#a98770" stroke-width="1.2" opacity="0.85"/>
        <path d="M96 60 Q118 72 136 62 Q118 56 100 56Z" fill="#e7cdbc" stroke="#a98770" stroke-width="1.2" opacity="0.8"/>
        <path d="M18 52 Q34 50 44 52" stroke="#b99a86" stroke-width="1.4" fill="none"/>
        <circle cx="38" cy="46" r="3.4" fill="#5c4436"/><circle cx="39" cy="44.8" r="1.1" fill="#fff" opacity="0.85"/>
      </svg>`,
  },
  {
    id: 'giant-amphipod',
    name: 'Giant Amphipod',
    sci: 'Hirondellea gigas',
    depth: 9500,
    range: '6,000–11,000 m',
    size: 100,
    side: 'right',
    fact: 'A shrimp-like scavenger that swarms the very bottom of the Mariana Trench, feasting on anything that falls. It even eats sunken wood, using gut enzymes to digest it — and armours its shell with aluminium pulled from the seawater.',
    svg: `
      <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Giant amphipod">
        <defs><linearGradient id="ga-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8dcc0"/><stop offset="1" stop-color="#b39d72"/></linearGradient></defs>
        <path d="M118 34 Q140 24 150 30 M118 40 Q142 36 152 44" stroke="#7c6a44" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M30 44 Q70 30 116 40 Q130 44 124 58 Q126 74 112 82 Q96 72 92 60 Q60 66 34 60 Q18 54 30 44Z" fill="url(#ga-b)" stroke="#7c6a44" stroke-width="1.8"/>
        <path d="M44 52 Q70 50 96 54 M40 58 Q70 58 100 60" stroke="#7c6a44" stroke-width="1.2" fill="none" opacity="0.7"/>
        <g stroke="#8a7550" stroke-width="2.4" stroke-linecap="round"><path d="M50 60 L44 82"/><path d="M64 62 L60 86"/><path d="M78 62 L78 88"/></g>
        <circle cx="108" cy="46" r="3.6" fill="#3c2f18"/>
      </svg>`,
  },
  {
    id: 'xenophyophore',
    name: 'Xenophyophore',
    sci: 'Syringammina fragilissima',
    depth: 10500,
    range: '500–10,600 m',
    size: 110,
    side: 'left',
    fact: 'Here’s the "whoa": this fist-sized lump is a single cell — one of the largest single-celled organisms alive. It builds its own delicate shell by gluing together grains of sediment, and whole gardens of them carpet the trench floor.',
    svg: `
      <svg viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Xenophyophore">
        <defs><radialGradient id="xe-b" cx="0.45" cy="0.4" r="0.7"><stop offset="0" stop-color="#d8c79a"/><stop offset="1" stop-color="#8f7a4e"/></radialGradient></defs>
        <path d="M70 12 Q104 14 118 44 Q132 70 116 98 Q98 124 66 122 Q34 122 18 96 Q6 70 20 44 Q36 12 70 12Z" fill="url(#xe-b)" stroke="#5f4e2c" stroke-width="2"/>
        <path d="M70 16 Q70 60 66 122 M28 40 Q70 66 116 52 M22 88 Q68 70 114 92 M42 22 Q60 66 40 116 M100 22 Q78 66 102 114" stroke="#6f5c34" stroke-width="1.4" fill="none" opacity="0.65"/>
        <circle cx="54" cy="52" r="3" fill="#5f4e2c" opacity="0.5"/><circle cx="86" cy="70" r="3" fill="#5f4e2c" opacity="0.5"/><circle cx="66" cy="94" r="3" fill="#5f4e2c" opacity="0.5"/>
      </svg>`,
  },
];
