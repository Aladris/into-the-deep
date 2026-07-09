// Full creature roster (50 species). `depth` places the card on the scroll
// (always within the species' real range); `size` is the sprite's rendered
// width in px, chosen so creatures feel roughly to scale relative to each
// other. `side` strictly alternates down the column so neighbouring cards sit
// on opposite sides and don't collide. Every gradient id is prefixed with the
// creature id so the inline SVGs don't clash when injected into one DOM.

export const CREATURES = [
  // ═══════════════════ SUNLIGHT · 0–200 m ═══════════════════
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
    id: 'leafy-seadragon',
    name: 'Leafy Seadragon',
    sci: 'Phycodurus eques',
    depth: 26,
    range: '0–50 m',
    size: 104,
    side: 'left',
    fact: 'A relative of the seahorse, disguised as drifting seaweed by leaf-shaped flaps of skin. It has no teeth and no stomach, sucking up tiny shrimp through its long snout; the male carries the eggs.',
    svg: `
      <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Leafy seadragon">
        <defs><linearGradient id="ls-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6c65a"/><stop offset="1" stop-color="#3f8a5c"/></linearGradient></defs>
        <path d="M30 18 Q40 10 52 16 Q58 30 54 44 Q64 70 60 96 Q58 120 48 138 Q42 128 46 108 Q40 84 44 60 Q34 40 30 18Z" fill="url(#ls-b)" stroke="#28532f" stroke-width="2"/>
        <path d="M30 20 Q14 12 8 22 Q20 26 30 30Z" fill="#5aa06a" stroke="#28532f" stroke-width="1.4"/>
        <g fill="#6cb47a" stroke="#28532f" stroke-width="1.2">
          <path d="M56 34 Q78 26 88 38 Q72 42 58 42Z"/>
          <path d="M46 62 Q22 58 14 72 Q34 72 50 70Z"/>
          <path d="M60 84 Q86 82 94 98 Q72 96 58 92Z"/>
          <path d="M48 110 Q26 112 20 128 Q40 122 52 118Z"/>
        </g>
        <path d="M30 22 Q20 24 14 20 Q20 16 28 18Z" fill="#e6c65a" stroke="#28532f" stroke-width="1.2"/>
        <circle cx="34" cy="22" r="2.6" fill="#1a2e1c"/>
      </svg>`,
  },
  {
    id: 'clownfish',
    name: 'Clownfish',
    sci: 'Amphiprion ocellaris',
    depth: 48,
    range: '1–15 m',
    size: 84,
    side: 'right',
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
    id: 'moon-jelly',
    name: 'Moon Jelly',
    sci: 'Aurelia aurita',
    depth: 70,
    range: '0–1,000 m',
    size: 118,
    side: 'left',
    fact: 'Drifts on the currents with almost no ability to swim against them. Its body is about 95% water, and the four pale horseshoes glowing through the bell are its reproductive organs.',
    svg: `
      <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moon jelly">
        <defs><radialGradient id="mj-b" cx="0.5" cy="0.42" r="0.6"><stop offset="0" stop-color="#cfeaf6" stop-opacity="0.9"/><stop offset="1" stop-color="#7fb6d8" stop-opacity="0.55"/></radialGradient></defs>
        <path d="M18 56 Q18 12 65 10 Q112 12 112 56 Q112 70 100 72 Q92 62 82 72 Q72 62 65 72 Q58 62 48 72 Q38 62 30 72 Q18 70 18 56Z" fill="url(#mj-b)" stroke="#8fc4dd" stroke-width="2"/>
        <g fill="none" stroke="#9fd6ec" stroke-width="2.2" opacity="0.85">
          <path d="M42 46 Q52 34 52 52 Q52 60 44 58 Q38 54 42 46Z"/>
          <path d="M88 46 Q78 34 78 52 Q78 60 86 58 Q92 54 88 46Z"/>
          <path d="M56 40 Q65 30 74 40 Q70 52 65 52 Q60 52 56 40Z"/>
          <path d="M52 60 Q65 54 78 60 Q70 68 65 66 Q60 68 52 60Z"/>
        </g>
        <g stroke="#bfe2f0" stroke-width="1.6" opacity="0.7">
          <path d="M30 72 Q28 92 24 110"/><path d="M48 72 Q47 94 44 114"/><path d="M65 72 Q65 96 65 116"/><path d="M82 72 Q83 94 86 114"/><path d="M100 72 Q102 92 106 110"/>
        </g>
      </svg>`,
  },
  {
    id: 'green-sea-turtle',
    name: 'Green Sea Turtle',
    sci: 'Chelonia mydas',
    depth: 96,
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
    depth: 120,
    range: 'Surface–120 m',
    size: 225,
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
    depth: 150,
    range: 'Surface–250 m',
    size: 235,
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
  {
    id: 'ocean-sunfish',
    name: 'Ocean Sunfish',
    sci: 'Mola mola',
    depth: 175,
    range: '0–600 m',
    size: 150,
    side: 'left',
    fact: 'The heaviest bony fish in the sea, shaped like a giant swimming head that has lost its tail. It basks on its side at the surface to warm up and let seabirds pick parasites off its skin.',
    svg: `
      <svg viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ocean sunfish">
        <defs><linearGradient id="os-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9fb0bc"/><stop offset="1" stop-color="#5e727e"/></linearGradient></defs>
        <path d="M40 80 Q42 20 66 18 Q78 18 82 40 Q100 46 112 66 Q124 80 112 96 Q100 116 82 122 Q78 142 66 142 Q42 140 40 82Z" fill="url(#os-b)" stroke="#37454e" stroke-width="2.2"/>
        <path d="M64 20 Q56 -6 78 14 Q86 30 82 42 Q72 30 64 20Z" fill="#7a8d98" stroke="#37454e" stroke-width="1.8"/>
        <path d="M64 140 Q56 166 78 146 Q86 130 82 118 Q72 130 64 140Z" fill="#7a8d98" stroke="#37454e" stroke-width="1.8"/>
        <path d="M108 70 Q126 74 128 82 Q126 90 108 92 Q116 82 108 70Z" fill="#8a9ca7" stroke="#37454e" stroke-width="1.6"/>
        <path d="M42 60 Q38 80 42 100" stroke="#4a5b66" stroke-width="1.6" fill="none" opacity="0.6"/>
        <circle cx="58" cy="58" r="5" fill="#101a20"/><circle cx="59.6" cy="56" r="1.6" fill="#dfeaf0"/>
      </svg>`,
  },
  {
    id: 'whale-shark',
    name: 'Whale Shark',
    sci: 'Rhincodon typus',
    depth: 196,
    range: '0–1,000 m',
    size: 255,
    side: 'right',
    fact: 'The biggest fish alive, growing longer than a school bus — yet it eats some of the smallest food, filtering plankton from the water. The spot pattern on its skin is unique to each shark, like a fingerprint.',
    svg: `
      <svg viewBox="0 0 250 116" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Whale shark">
        <defs><linearGradient id="ws-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0.5" stop-color="#43707e"/><stop offset="0.52" stop-color="#7a97a0"/><stop offset="1" stop-color="#b9cdd2"/></linearGradient></defs>
        <path d="M10 58 Q60 30 140 40 Q200 46 236 34 Q222 54 218 60 Q224 72 222 92 Q198 74 176 70 Q120 82 60 74 Q28 74 10 58Z" fill="url(#ws-b)" stroke="#2c4750" stroke-width="2"/>
        <path d="M120 40 Q130 10 148 38Z" fill="#54808c" stroke="#2c4750" stroke-width="1.8"/>
        <path d="M96 74 Q104 100 118 78Z" fill="#54808c" stroke="#2c4750" stroke-width="1.6"/>
        <path d="M12 50 Q30 52 40 50 L40 62 Q28 64 12 60Z" fill="#3a5b64"/>
        <g fill="#cfe0e4" opacity="0.9"><circle cx="70" cy="52" r="3"/><circle cx="92" cy="46" r="3"/><circle cx="92" cy="64" r="3"/><circle cx="114" cy="54" r="3"/><circle cx="136" cy="48" r="3"/><circle cx="138" cy="66" r="3"/><circle cx="160" cy="56" r="3"/><circle cx="182" cy="60" r="3"/><circle cx="70" cy="66" r="3"/></g>
        <circle cx="34" cy="50" r="3.4" fill="#0f1c22"/>
      </svg>`,
  },

  // ═══════════════════ TWILIGHT · 200–1,000 m ═══════════════════
  {
    id: 'firefly-squid',
    name: 'Firefly Squid',
    sci: 'Watasenia scintillans',
    depth: 240,
    range: '180–370 m',
    size: 82,
    side: 'left',
    fact: 'A hand-sized squid studded with light organs that flash electric blue. Each spring, millions gather to spawn in a Japanese bay, lighting up the waves — one of the ocean’s great glowing spectacles.',
    svg: `
      <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Firefly squid">
        <defs><linearGradient id="fs2-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b3a6e"/><stop offset="1" stop-color="#2c1740"/></linearGradient></defs>
        <path d="M50 8 Q76 12 78 46 Q78 70 66 78 Q50 84 34 78 Q22 70 22 46 Q24 12 50 8Z" fill="url(#fs2-b)" stroke="#180a26" stroke-width="1.8"/>
        <path d="M28 20 Q10 10 8 24 Q22 26 30 30Z" fill="#4a2f5c"/><path d="M72 20 Q90 10 92 24 Q78 26 70 30Z" fill="#4a2f5c"/>
        <g stroke="#5b3a6e" stroke-width="4" stroke-linecap="round" fill="none">
          <path d="M40 78 Q36 104 30 126"/><path d="M50 80 Q50 106 48 128"/><path d="M60 78 Q64 104 70 126"/><path d="M46 80 Q42 106 38 128"/><path d="M54 80 Q58 106 62 128"/>
        </g>
        <g fill="#7ff0ff"><circle cx="40" cy="40" r="2.6"/><circle cx="60" cy="40" r="2.6"/><circle cx="50" cy="56" r="2.6"/><circle cx="34" cy="60" r="2.2"/><circle cx="66" cy="60" r="2.2"/><circle cx="30" cy="120" r="2.4"/><circle cx="70" cy="120" r="2.4"/><circle cx="48" cy="124" r="2.4"/></g>
        <circle cx="40" cy="34" r="4.5" fill="#0c0616"/><circle cx="60" cy="34" r="4.5" fill="#0c0616"/>
      </svg>`,
  },
  {
    id: 'lanternfish',
    name: 'Lanternfish',
    sci: 'Myctophidae',
    depth: 300,
    range: '200–1,000 m',
    size: 92,
    side: 'right',
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
    id: 'snipe-eel',
    name: 'Snipe Eel',
    sci: 'Nemichthys scolopaceus',
    depth: 360,
    range: '300–600 m',
    size: 190,
    side: 'left',
    fact: 'A ribbon-thin eel with jaws like a bird’s beak that curve apart and can never fully close. The hooked tips snag the antennae of tiny shrimp, which is almost all it eats.',
    svg: `
      <svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Snipe eel">
        <defs><linearGradient id="se2-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6a5240"/><stop offset="1" stop-color="#332619"/></linearGradient></defs>
        <path d="M40 44 Q90 30 150 40 Q190 46 214 70 Q206 74 196 66 Q150 52 92 54 Q60 52 40 48Z" fill="url(#se2-b)" stroke="#1e150c" stroke-width="1.6"/>
        <path d="M40 46 Q26 36 8 30 Q22 44 34 48Z" fill="#5a4636" stroke="#1e150c" stroke-width="1.2"/>
        <path d="M40 42 Q26 50 6 60 Q22 50 34 46Z" fill="#5a4636" stroke="#1e150c" stroke-width="1.2"/>
        <path d="M60 46 Q120 40 180 50" stroke="#8a7256" stroke-width="1.2" fill="none" opacity="0.6"/>
        <circle cx="42" cy="42" r="3.2" fill="#0c0804"/>
      </svg>`,
  },
  {
    id: 'humboldt-squid',
    name: 'Humboldt Squid',
    sci: 'Dosidicus gigas',
    depth: 430,
    range: '200–700 m',
    size: 150,
    side: 'right',
    fact: 'A fast, powerful predator that hunts in coordinated packs and flickers red-and-white to signal to the others. Divers nickname it the “red devil” — it can change colour in a heartbeat.',
    svg: `
      <svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Humboldt squid">
        <defs><linearGradient id="hs2-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d0563f"/><stop offset="1" stop-color="#7c241a"/></linearGradient></defs>
        <path d="M64 6 Q96 8 96 44 Q96 68 82 76 Q64 82 46 76 Q32 68 32 44 Q32 8 64 6Z" fill="url(#hs2-b)" stroke="#4a130d" stroke-width="2"/>
        <path d="M34 20 Q12 8 8 24 Q26 30 40 34Z" fill="#a53b2b"/><path d="M94 20 Q116 8 120 24 Q102 30 88 34Z" fill="#a53b2b"/>
        <circle cx="50" cy="40" r="7" fill="#f2e2c8"/><circle cx="50" cy="40" r="3.4" fill="#180a06"/>
        <circle cx="78" cy="40" r="7" fill="#f2e2c8"/><circle cx="78" cy="40" r="3.4" fill="#180a06"/>
        <g stroke-linecap="round" fill="none" stroke="#c14a37">
          <path d="M50 78 Q42 110 30 142" stroke-width="7"/><path d="M60 80 Q56 112 50 146" stroke-width="7"/>
          <path d="M68 80 Q72 112 78 146" stroke-width="7"/><path d="M78 78 Q90 110 102 142" stroke-width="7"/>
          <path d="M44 80 Q34 108 20 132" stroke-width="5"/><path d="M84 80 Q98 106 112 130" stroke-width="5"/>
        </g>
      </svg>`,
  },
  {
    id: 'swordfish',
    name: 'Swordfish',
    sci: 'Xiphias gladius',
    depth: 500,
    range: 'Surface–550 m',
    size: 220,
    side: 'left',
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
    id: 'cookiecutter-shark',
    name: 'Cookiecutter Shark',
    sci: 'Isistius brasiliensis',
    depth: 560,
    range: '0–3,700 m',
    size: 150,
    side: 'right',
    fact: 'A small shark that bites round plugs of flesh from animals far larger than itself — even whales and submarines carry its cookie-shaped scars. Its glowing belly lures prey close in the dark.',
    svg: `
      <svg viewBox="0 0 170 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cookiecutter shark">
        <defs><linearGradient id="cc-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a5a48"/><stop offset="1" stop-color="#38291c"/></linearGradient></defs>
        <path d="M14 42 Q70 30 120 38 Q140 40 158 34 Q150 46 146 46 Q152 56 150 64 Q136 52 120 50 Q70 56 20 50 Q8 48 14 42Z" fill="url(#cc-b)" stroke="#1c130a" stroke-width="1.8"/>
        <path d="M96 38 Q104 22 116 36Z" fill="#4f4132" stroke="#1c130a" stroke-width="1.4"/>
        <path d="M118 40 Q126 30 138 40Z" fill="#4f4132" opacity="0.85"/>
        <path d="M20 50 Q60 62 110 54" stroke="#8ff0c0" stroke-width="4" fill="none" opacity="0.8" class="lure-glow"/>
        <path d="M14 44 Q26 42 34 44" stroke="#1c130a" stroke-width="2" fill="none"/>
        <circle cx="30" cy="42" r="3.2" fill="#0c0804"/><circle cx="31.2" cy="40.8" r="1" fill="#c9e8a8"/>
      </svg>`,
  },
  {
    id: 'hatchetfish',
    name: 'Hatchetfish',
    sci: 'Sternoptychidae',
    depth: 620,
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
    id: 'barreleye',
    name: 'Barreleye',
    sci: 'Macropinna microstoma',
    depth: 690,
    range: '600–800 m',
    size: 118,
    side: 'right',
    fact: 'Its whole forehead is a transparent dome, and the two glowing green orbs inside are its eyes — which rotate to peer straight up through its own skull for prey drifting overhead.',
    svg: `
      <svg viewBox="0 0 140 104" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Barreleye fish">
        <defs>
          <linearGradient id="be-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4a58"/><stop offset="1" stop-color="#16222c"/></linearGradient>
          <radialGradient id="be-dome" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#cfeaf2" stop-opacity="0.55"/><stop offset="1" stop-color="#7fb0c0" stop-opacity="0.2"/></radialGradient>
        </defs>
        <path d="M52 58 Q90 44 122 58 Q136 66 122 80 Q90 94 56 84 Q30 88 16 78 Q30 72 30 66 Q26 58 16 54 Q34 50 52 58Z" fill="url(#be-b)" stroke="#0e1820" stroke-width="1.8"/>
        <path d="M18 54 Q30 62 18 78 L14 76 Q26 70 27 64 Q24 57 16 54Z" fill="#0c141b"/>
        <path d="M50 60 Q60 22 96 22 Q118 26 116 54 Q92 46 50 60Z" fill="url(#be-dome)" stroke="#8fc0d0" stroke-width="1.6"/>
        <circle cx="66" cy="42" r="9" fill="#8ef0b0" class="lure-glow"/><circle cx="66" cy="42" r="4" fill="#0c2a18"/>
        <circle cx="92" cy="42" r="9" fill="#8ef0b0" class="lure-glow"/><circle cx="92" cy="42" r="4" fill="#0c2a18"/>
        <path d="M40 72 Q44 78 40 82" stroke="#0e1820" stroke-width="1.6" fill="none"/>
      </svg>`,
  },
  {
    id: 'bristlemouth',
    name: 'Bristlemouth',
    sci: 'Cyclothone',
    depth: 760,
    range: '300–2,000 m',
    size: 88,
    side: 'left',
    fact: 'Likely the most numerous vertebrate on Earth — there may be quadrillions of them. Barely finger-length, with a mouth full of bristle-like teeth and rows of tiny glowing dots along its body.',
    svg: `
      <svg viewBox="0 0 140 66" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bristlemouth">
        <defs><linearGradient id="bm-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4238"/><stop offset="1" stop-color="#211c15"/></linearGradient></defs>
        <path d="M14 34 Q40 22 92 30 Q110 32 126 26 Q120 36 116 38 Q122 46 120 54 Q106 44 92 42 Q40 48 14 40 Q8 38 14 34Z" fill="url(#bm-b)" stroke="#100c08" stroke-width="1.6"/>
        <path d="M14 34 Q28 34 40 30 L40 42 Q28 44 14 40Z" fill="#2c261d"/>
        <path d="M16 32 L38 30 M16 42 L38 42" stroke="#e6ddc9" stroke-width="1" opacity="0.8"/>
        <g fill="#9be9ff"><circle cx="52" cy="43" r="1.8"/><circle cx="66" cy="44" r="1.8"/><circle cx="80" cy="43" r="1.8"/><circle cx="94" cy="42" r="1.8"/></g>
        <circle cx="34" cy="34" r="3.2" fill="#0a0805"/><circle cx="35" cy="33" r="1" fill="#bfe4f2"/>
      </svg>`,
  },
  {
    id: 'vampire-squid',
    name: 'Vampire Squid',
    sci: 'Vampyroteuthis infernalis',
    depth: 820,
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
    id: 'pacific-viperfish',
    name: 'Pacific Viperfish',
    sci: 'Chauliodus macouni',
    depth: 890,
    range: '200–1,000 m',
    size: 128,
    side: 'left',
    fact: 'Hunts with fangs so long they won’t fit inside its mouth, curving up past its eyes. A glowing lure on its back fin dangles bait toward the trap of its jaws.',
    svg: `
      <svg viewBox="0 0 180 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pacific viperfish">
        <defs><linearGradient id="pv-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c3b3a"/><stop offset="1" stop-color="#0f1a1c"/></linearGradient></defs>
        <path d="M8 44 Q30 34 40 46 Q80 40 130 48 Q160 52 176 44 Q168 56 160 58 Q150 66 130 62 Q80 66 44 58 Q30 66 8 60 Q22 52 8 44Z" fill="url(#pv-b)" stroke="#060c0d" stroke-width="1.8"/>
        <path d="M60 30 Q70 16 78 30 Q74 20 60 30Z" fill="#8ff0b0" class="lure-glow"/>
        <path d="M60 34 Q60 46 58 50" stroke="#243230" stroke-width="2" fill="none"/>
        <path d="M40 46 L44 34 L48 46 L52 34 L56 46" fill="none" stroke="#e8f0ee" stroke-width="2" stroke-linecap="round"/>
        <path d="M40 50 L44 60 L48 50 L52 60 L56 50" fill="none" stroke="#e8f0ee" stroke-width="2" stroke-linecap="round"/>
        <circle cx="34" cy="46" r="4.5" fill="#0a1210"/><circle cx="35.4" cy="44.4" r="1.6" fill="#9fd8c8"/>
        <g fill="#8ff0ff"><circle cx="70" cy="60" r="1.8"/><circle cx="90" cy="61" r="1.8"/><circle cx="110" cy="60" r="1.8"/></g>
      </svg>`,
  },
  {
    id: 'giant-squid',
    name: 'Giant Squid',
    sci: 'Architeuthis dux',
    depth: 950,
    range: '300–1,000 m',
    size: 250,
    side: 'right',
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

  // ═══════════════════ MIDNIGHT · 1,000–4,000 m ═══════════════════
  {
    id: 'frilled-shark',
    name: 'Frilled Shark',
    sci: 'Chlamydoselachus anguineus',
    depth: 1080,
    range: '500–1,500 m',
    size: 190,
    side: 'left',
    fact: 'A living fossil almost unchanged for millions of years, with an eel-like body and six frilly gill slits. Its 300 backward-hooked teeth make escape nearly impossible once prey is caught.',
    svg: `
      <svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frilled shark">
        <defs><linearGradient id="frs-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a5348"/><stop offset="1" stop-color="#2b271f"/></linearGradient></defs>
        <path d="M8 44 Q26 34 40 44 Q120 34 180 46 Q200 50 214 44 Q206 56 198 58 Q206 68 202 78 Q188 64 174 60 Q120 66 44 58 Q26 66 8 58 Q22 52 8 44Z" fill="url(#frs-b)" stroke="#151209" stroke-width="1.8"/>
        <g stroke="#8a7a5a" stroke-width="1.6" fill="none" opacity="0.85"><path d="M40 46 Q42 52 40 58"/><path d="M48 47 Q50 53 48 58"/><path d="M56 47 Q58 53 56 59"/><path d="M64 47 Q66 53 64 59"/></g>
        <path d="M14 42 L34 42 Q26 47 34 52 L14 52 Q22 47 14 42Z" fill="#e8e0cc"/>
        <circle cx="26" cy="44" r="3" fill="#0c0a05"/>
      </svg>`,
  },
  {
    id: 'bloodybelly-comb-jelly',
    name: 'Bloodybelly Comb Jelly',
    sci: 'Lampocteis cruentiventer',
    depth: 1200,
    range: '800–1,500 m',
    size: 92,
    side: 'right',
    fact: 'Rows of tiny beating combs scatter light into shimmering rainbows as it swims. Its stomach is blood-red to hide the glow of the bioluminescent prey it swallows.',
    svg: `
      <svg viewBox="0 0 110 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bloodybelly comb jelly">
        <defs><radialGradient id="bb-b" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#8a1420"/><stop offset="1" stop-color="#3c0810"/></radialGradient></defs>
        <path d="M55 8 Q94 14 96 60 Q96 104 55 122 Q14 104 14 60 Q16 14 55 8Z" fill="url(#bb-b)" stroke="#2a060c" stroke-width="1.8"/>
        <g stroke-width="3" fill="none" stroke-linecap="round" opacity="0.9">
          <path d="M30 26 Q26 64 34 104" stroke="#ff8a5a"/><path d="M44 20 Q40 64 46 114" stroke="#ffd84a"/>
          <path d="M58 20 Q62 64 58 114" stroke="#7aff6a"/><path d="M72 24 Q78 64 70 106" stroke="#6ad0ff"/>
          <path d="M84 30 Q90 64 82 96" stroke="#b06aff"/>
        </g>
        <ellipse cx="55" cy="70" rx="16" ry="26" fill="#5c0a12" opacity="0.85"/>
      </svg>`,
  },
  {
    id: 'goblin-shark',
    name: 'Goblin Shark',
    sci: 'Mitsukurina owstoni',
    depth: 1300,
    range: '270–1,300 m',
    size: 205,
    side: 'left',
    fact: 'A pink, slow-moving shark that ambushes prey by shooting its jaws forward on stretchy skin like a slingshot. Its long blade of a snout is packed with sensors for detecting faint electric fields.',
    svg: `
      <svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Goblin shark">
        <defs><linearGradient id="gob-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8a8b0"/><stop offset="1" stop-color="#b06a78"/></linearGradient></defs>
        <path d="M56 50 Q120 36 176 48 Q206 52 224 46 Q214 60 208 62 Q216 72 212 82 Q196 68 180 64 Q120 76 60 62 Q46 60 56 50Z" fill="url(#gob-b)" stroke="#7a4450" stroke-width="1.8"/>
        <path d="M56 50 Q30 46 4 40 Q28 54 44 56 Q50 58 60 60Z" fill="#e8a8b0" stroke="#7a4450" stroke-width="1.6"/>
        <path d="M44 56 Q54 62 44 68 Q40 62 44 56Z" fill="#c98a94"/>
        <path d="M46 58 L52 64 L58 58" stroke="#fff" stroke-width="1.4" fill="none"/>
        <path d="M120 40 Q128 22 142 40Z" fill="#d18f9c" stroke="#7a4450" stroke-width="1.4"/>
        <circle cx="52" cy="50" r="3" fill="#2a1216"/>
      </svg>`,
  },
  {
    id: 'anglerfish',
    name: 'Anglerfish',
    sci: 'Melanocetus johnsonii',
    depth: 1420,
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
    id: 'giant-isopod',
    name: 'Giant Isopod',
    sci: 'Bathynomus giganteus',
    depth: 1550,
    range: '365–2,300 m',
    size: 122,
    side: 'left',
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
    id: 'black-dragonfish',
    name: 'Black Dragonfish',
    sci: 'Idiacanthus atlanticus',
    depth: 1680,
    range: '500–2,000 m',
    size: 150,
    side: 'right',
    fact: 'Produces red light from organs under its eyes — a colour almost no other deep-sea animal can see, giving it a private searchlight. Females bristle with fangs and a chin barbel; the tiny males can’t even eat.',
    svg: `
      <svg viewBox="0 0 200 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Black dragonfish">
        <defs><linearGradient id="bd-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a2436"/><stop offset="1" stop-color="#0c0a14"/></linearGradient></defs>
        <path d="M8 40 Q30 30 44 42 Q110 36 168 46 Q188 50 194 40 Q192 54 180 56 Q188 66 184 76 Q170 62 162 60 Q110 64 46 56 Q30 66 8 58 Q24 50 8 40Z" fill="url(#bd-b)" stroke="#060410" stroke-width="1.6"/>
        <path d="M38 42 L42 32 L46 42 L50 32 L54 42" fill="none" stroke="#e8e2f2" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M40 40 Q40 62 42 76" stroke="#3a3450" stroke-width="2" fill="none"/>
        <circle cx="30" cy="42" r="4" fill="#0a0812"/>
        <circle cx="24" cy="46" r="4.5" fill="#ff5a6a" class="lure-glow"/>
        <g fill="#ff7a8a"><circle cx="60" cy="56" r="1.6"/><circle cx="86" cy="57" r="1.6"/><circle cx="112" cy="56" r="1.6"/><circle cx="138" cy="55" r="1.6"/></g>
      </svg>`,
  },
  {
    id: 'colossal-squid',
    name: 'Colossal Squid',
    sci: 'Mesonychoteuthis hamiltoni',
    depth: 1750,
    range: '1,000–2,000 m',
    size: 245,
    side: 'left',
    fact: 'Heavier than the giant squid and armed with swivelling hooks on its arms. It has the largest eyes of any known animal — each the size of a dinner plate — to gather the faintest light in the dark.',
    svg: `
      <svg viewBox="0 0 250 124" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Colossal squid">
        <defs><linearGradient id="cs2-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a34a52"/><stop offset="1" stop-color="#5e2028"/></linearGradient></defs>
        <path d="M20 40 Q40 52 38 62 Q40 74 20 86 Q8 62 20 40Z" fill="#7c2c34"/>
        <path d="M26 42 Q120 30 150 62 Q120 94 26 82 Q6 74 6 62 Q6 50 26 42Z" fill="url(#cs2-b)" stroke="#3a1218" stroke-width="2"/>
        <circle cx="120" cy="60" r="15" fill="#e8eef0"/><circle cx="120" cy="60" r="8" fill="#0c1418"/><circle cx="123" cy="56" r="2.6" fill="#fff"/>
        <g stroke-linecap="round" fill="none">
          <path d="M148 54 Q200 42 244 34" stroke="#94383f" stroke-width="7"/>
          <path d="M150 60 Q204 58 246 58" stroke="#8a343b" stroke-width="6"/>
          <path d="M148 66 Q200 78 244 88" stroke="#94383f" stroke-width="6"/>
          <path d="M144 62 Q210 66 248 76 Q220 78 236 82" stroke="#a84a52" stroke-width="4"/>
        </g>
      </svg>`,
  },
  {
    id: 'black-swallower',
    name: 'Black Swallower',
    sci: 'Chiasmodon niger',
    depth: 1900,
    range: '700–2,700 m',
    size: 110,
    side: 'right',
    fact: 'Can swallow prey more than twice its length and ten times its weight, its stretchy stomach ballooning out below. Sometimes it bites off more than it can digest — and pays the price.',
    svg: `
      <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Black swallower">
        <defs><linearGradient id="bs2-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c2c34"/><stop offset="1" stop-color="#101016"/></linearGradient></defs>
        <path d="M22 34 Q60 22 90 34 Q78 44 86 52 Q100 60 108 76 Q112 96 88 100 Q56 104 40 86 Q26 74 30 56 Q18 46 22 34Z" fill="url(#bs2-b)" stroke="#08080c" stroke-width="1.8"/>
        <path d="M108 40 Q140 30 146 44 Q140 56 110 54Z" fill="#22222a" stroke="#08080c" stroke-width="1.4"/>
        <ellipse cx="70" cy="76" rx="30" ry="22" fill="#3a3a44" opacity="0.7"/>
        <path d="M50 84 Q70 78 90 84" stroke="#54545e" stroke-width="1.4" fill="none" opacity="0.7"/>
        <path d="M22 36 L30 40 M22 44 L30 44" stroke="#d8d8e0" stroke-width="1.2"/>
        <circle cx="40" cy="38" r="3.4" fill="#080810"/><circle cx="41" cy="37" r="1" fill="#9f9fb0"/>
      </svg>`,
  },
  {
    id: 'sperm-whale',
    name: 'Sperm Whale',
    sci: 'Physeter macrocephalus',
    depth: 2100,
    range: 'Surface–2,250 m',
    size: 258,
    side: 'left',
    fact: 'The deepest-diving of the great whales, plunging beyond 2,000 m and holding its breath for over an hour to hunt squid in the dark. It finds them using the loudest clicks made by any animal.',
    svg: `
      <svg viewBox="0 0 250 116" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sperm whale">
        <defs><linearGradient id="spw-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a6a70"/><stop offset="1" stop-color="#333338"/></linearGradient></defs>
        <path d="M6 40 Q30 22 80 30 Q160 38 210 44 Q236 46 246 30 Q240 54 226 58 Q240 66 244 88 Q220 72 208 70 Q160 74 80 66 Q34 68 12 62 Q4 52 6 40Z" fill="url(#spw-b)" stroke="#1e1e22" stroke-width="2"/>
        <path d="M10 58 Q40 64 80 62 Q60 58 40 56 Q20 54 10 58Z" fill="#8a8a90" opacity="0.6"/>
        <path d="M14 62 Q26 78 40 66" fill="#4a4a50"/>
        <path d="M170 56 Q178 68 190 58Z" fill="#4a4a50"/>
        <circle cx="40" cy="46" r="3.4" fill="#101014"/>
        <path d="M8 40 Q14 38 20 40" stroke="#1e1e22" stroke-width="1.6" fill="none"/>
      </svg>`,
  },
  {
    id: 'atolla-jelly',
    name: 'Atolla Jelly',
    sci: 'Atolla wyvillei',
    depth: 2350,
    range: '1,000–4,000 m',
    size: 96,
    side: 'right',
    fact: 'When attacked, it flashes a spinning circle of blue light — a burglar alarm that calls in bigger predators to attack whatever is biting it. It trails one extra-long tentacle out like a fishing line.',
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atolla jelly">
        <defs><radialGradient id="at-b" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#b81e2e"/><stop offset="1" stop-color="#5c0a14"/></radialGradient></defs>
        <ellipse cx="60" cy="60" rx="38" ry="26" fill="url(#at-b)" stroke="#3a060c" stroke-width="2"/>
        <ellipse cx="60" cy="58" rx="20" ry="13" fill="#7c1420" opacity="0.8"/>
        <g stroke="#e83a4a" stroke-width="3" stroke-linecap="round">
          <path d="M28 50 L10 42"/><path d="M26 60 L6 60"/><path d="M28 70 L10 78"/><path d="M40 44 L34 26"/><path d="M60 40 L60 20"/><path d="M80 44 L86 26"/><path d="M92 50 L110 42"/><path d="M94 60 L114 60"/><path d="M92 70 L110 78"/><path d="M80 76 L86 94"/><path d="M40 76 L34 94"/>
        </g>
        <path d="M60 84 Q64 108 58 118" stroke="#ff6a78" stroke-width="2" fill="none" class="lure-glow"/>
      </svg>`,
  },
  {
    id: 'ghost-shark',
    name: 'Ghost Shark',
    sci: 'Hydrolagus',
    depth: 2550,
    range: '1,000–2,600 m',
    size: 150,
    side: 'left',
    fact: 'A relative of sharks with a skeleton of cartilage and a single permanent set of grinding tooth-plates. Males have a retractable, spiny club on the forehead used during mating — one of the ocean’s oddest tools.',
    svg: `
      <svg viewBox="0 0 190 104" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ghost shark">
        <defs><linearGradient id="gh-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a0aeb8"/><stop offset="1" stop-color="#5c6a76"/></linearGradient></defs>
        <path d="M40 46 Q90 34 130 44 Q160 48 184 66 Q168 66 150 60 Q120 72 60 64 Q42 62 40 46Z" fill="url(#gh-b)" stroke="#39454f" stroke-width="1.8"/>
        <path d="M40 46 Q22 44 8 54 Q26 54 40 54Z" fill="#8a98a4" stroke="#39454f" stroke-width="1.4"/>
        <path d="M70 42 Q80 22 96 42Z" fill="#7f8d99" stroke="#39454f" stroke-width="1.4"/>
        <path d="M56 60 Q40 84 28 96 Q48 82 62 66Z" fill="#8a98a4" stroke="#39454f" stroke-width="1.4"/>
        <path d="M96 46 Q120 42 96 58Z" fill="#7f8d99" opacity="0.7"/>
        <circle cx="52" cy="46" r="5" fill="#0e1a22"/><circle cx="53.6" cy="44" r="1.6" fill="#cfe0ea"/>
      </svg>`,
  },
  {
    id: 'fangtooth',
    name: 'Fangtooth',
    sci: 'Anoplogaster cornuta',
    depth: 2750,
    range: '2,000–5,000 m',
    size: 92,
    side: 'right',
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
    depth: 3000,
    range: '500–3,000 m',
    size: 180,
    side: 'left',
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
    depth: 3300,
    range: '1,000–7,000 m',
    size: 130,
    side: 'right',
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

  // ═══════════════════ ABYSSAL · 4,000–6,000 m ═══════════════════
  {
    id: 'grenadier',
    name: 'Grenadier (Rattail)',
    sci: 'Coryphaenoides',
    depth: 4080,
    range: '2,000–6,000 m',
    size: 190,
    side: 'left',
    fact: 'One of the most common fish of the deep seafloor, with a bulky head tapering to a long rat-like tail. It sniffs out carcasses across vast distances of cold mud, following the scent to a feast.',
    svg: `
      <svg viewBox="0 0 210 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grenadier rattail">
        <defs><linearGradient id="gr-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5a6470"/><stop offset="1" stop-color="#2a333c"/></linearGradient></defs>
        <path d="M12 50 Q40 30 74 40 Q120 46 176 58 Q200 62 206 72 Q198 74 190 70 Q120 68 78 62 Q40 72 16 66 Q6 58 12 50Z" fill="url(#gr-b)" stroke="#151b21" stroke-width="1.8"/>
        <path d="M40 40 Q52 20 66 40Z" fill="#41505c" stroke="#151b21" stroke-width="1.4"/>
        <path d="M30 62 Q34 82 44 70Z" fill="#41505c" stroke="#151b21" stroke-width="1.2"/>
        <circle cx="34" cy="48" r="5.5" fill="#0c1218"/><circle cx="35.6" cy="46" r="1.8" fill="#bfd0da"/>
        <path d="M74 44 Q120 48 170 60" stroke="#6e7a86" stroke-width="1.2" fill="none" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'tripod-fish',
    name: 'Tripod Fish',
    sci: 'Bathypterois grallator',
    depth: 4360,
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
  {
    id: 'venus-flower-basket',
    name: 'Venus’ Flower Basket',
    sci: 'Euplectella aspergillum',
    depth: 4620,
    range: '500–5,000 m',
    size: 108,
    side: 'left',
    fact: 'A glass sponge that weaves a delicate lattice of silica — natural fibre-optic glass. A pair of shrimp often live sealed inside it for life, which is why in Japan it is given as a wedding gift.',
    svg: `
      <svg viewBox="0 0 110 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venus flower basket sponge">
        <defs><linearGradient id="vf-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf4f0" stop-opacity="0.95"/><stop offset="1" stop-color="#a8c8c0" stop-opacity="0.7"/></linearGradient></defs>
        <path d="M32 20 Q55 12 78 20 Q86 60 80 110 Q76 134 55 140 Q34 134 30 110 Q24 60 32 20Z" fill="url(#vf-b)" stroke="#7fa89e" stroke-width="1.8"/>
        <g stroke="#8fb8ae" stroke-width="1.3" fill="none" opacity="0.85">
          <path d="M40 24 Q40 80 44 136"/><path d="M55 18 Q55 80 55 138"/><path d="M70 24 Q70 80 66 136"/>
          <path d="M32 40 Q55 34 78 40"/><path d="M30 64 Q55 60 80 64"/><path d="M30 88 Q55 84 80 88"/><path d="M32 112 Q55 108 78 112"/>
        </g>
        <path d="M40 18 Q55 6 70 18" stroke="#7fa89e" stroke-width="1.6" fill="none"/>
        <g stroke="#9fc4ba" stroke-width="1.2"><path d="M30 138 Q22 148 26 150"/><path d="M55 140 L55 150"/><path d="M80 138 Q88 148 84 150"/></g>
      </svg>`,
  },
  {
    id: 'sea-pig',
    name: 'Sea Pig',
    sci: 'Scotoplanes globosa',
    depth: 4860,
    range: '1,000–6,000 m',
    size: 110,
    side: 'right',
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
    id: 'sea-spider',
    name: 'Sea Spider',
    sci: 'Colossendeis',
    depth: 5100,
    range: '1,000–7,000 m',
    size: 132,
    side: 'left',
    fact: 'Not a true spider, but a leggy relative that can span half a metre in cold deep water. It has almost no body — its organs spill out into those spindly legs — and it “breathes” straight through its skin.',
    svg: `
      <svg viewBox="0 0 150 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sea spider">
        <g stroke="#8a7a6a" stroke-width="2.6" stroke-linecap="round" fill="none">
          <path d="M72 70 Q40 50 12 20"/><path d="M72 70 Q34 60 4 58"/><path d="M72 70 Q36 84 8 104"/><path d="M72 70 Q44 96 24 132"/>
          <path d="M78 70 Q112 50 140 22"/><path d="M78 70 Q118 60 148 56"/><path d="M78 70 Q116 84 144 104"/><path d="M78 70 Q108 96 128 132"/>
        </g>
        <ellipse cx="75" cy="70" rx="12" ry="16" fill="#b8a48e" stroke="#6e5e4e" stroke-width="1.8"/>
        <path d="M75 54 Q72 42 75 34 Q78 42 75 54Z" fill="#a08a72" stroke="#6e5e4e" stroke-width="1.4"/>
        <circle cx="71" cy="64" r="2.2" fill="#2a2016"/><circle cx="79" cy="64" r="2.2" fill="#2a2016"/>
      </svg>`,
  },
  {
    id: 'sea-lily',
    name: 'Sea Lily',
    sci: 'Crinoidea',
    depth: 5340,
    range: '200–9,000 m',
    size: 116,
    side: 'right',
    fact: 'It looks like a flower but is actually an animal — a relative of the starfish, anchored on a stalk and combing food from the current with feathery arms. Its ancestors filled the seas 500 million years ago.',
    svg: `
      <svg viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sea lily crinoid">
        <defs><linearGradient id="sl-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8b06a"/><stop offset="1" stop-color="#b0703a"/></linearGradient></defs>
        <path d="M60 60 Q62 100 60 140" stroke="#9c6836" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g stroke="#a86e3a" stroke-width="1.6"><path d="M60 80 L48 84 M60 96 L72 100 M60 112 L48 116 M60 128 L72 132"/></g>
        <g stroke="#a86e3a" stroke-width="1.4"><path d="M52 140 Q40 148 34 150 M60 140 L60 150 M68 140 Q80 148 86 150"/></g>
        <g fill="url(#sl-b)" stroke="#7c4c22" stroke-width="1.4">
          <path d="M60 58 Q40 40 20 20 Q30 44 48 56Z"/>
          <path d="M60 56 Q52 30 44 8 Q58 32 60 52Z"/>
          <path d="M60 56 Q68 30 76 8 Q62 32 60 52Z"/>
          <path d="M60 58 Q80 40 100 20 Q90 44 72 56Z"/>
          <path d="M60 60 Q44 54 28 54 Q46 62 58 62Z"/>
          <path d="M60 60 Q76 54 92 54 Q74 62 62 62Z"/>
        </g>
        <circle cx="60" cy="58" r="6" fill="#c98a4e" stroke="#7c4c22" stroke-width="1.4"/>
      </svg>`,
  },
  {
    id: 'enypniastes',
    name: 'Headless Chicken Monster',
    sci: 'Enypniastes eximia',
    depth: 5580,
    range: '400–6,000 m',
    size: 122,
    side: 'left',
    fact: 'Nicknamed the “headless chicken monster,” this see-through swimming sea cucumber flaps a fleshy veil to lift off the seabed and drift away from danger. You can watch its gut working through its skin.',
    svg: `
      <svg viewBox="0 0 150 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Headless chicken monster sea cucumber">
        <defs><radialGradient id="en-b" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#f2b4c4" stop-opacity="0.95"/><stop offset="1" stop-color="#c26a82" stop-opacity="0.85"/></radialGradient></defs>
        <path d="M30 66 Q28 34 60 30 Q110 26 124 54 Q132 74 118 88 Q90 104 56 98 Q30 96 30 66Z" fill="url(#en-b)" stroke="#9c4a60" stroke-width="1.8"/>
        <path d="M60 30 Q66 8 92 18 Q112 26 118 46 Q92 36 60 46Z" fill="#f4c2ce" stroke="#9c4a60" stroke-width="1.6" opacity="0.85"/>
        <path d="M34 70 Q30 92 22 104 Q40 96 44 82Z" fill="#e89aae" stroke="#9c4a60" stroke-width="1.4" opacity="0.8"/>
        <path d="M50 62 Q70 56 96 66" stroke="#a8324c" stroke-width="3" fill="none" opacity="0.7"/>
        <circle cx="70" cy="66" r="4" fill="#8a2038" opacity="0.6"/><circle cx="90" cy="70" r="4" fill="#8a2038" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'brittle-star',
    name: 'Brittle Star',
    sci: 'Ophiuroidea',
    depth: 5820,
    range: '0–7,000 m',
    size: 128,
    side: 'right',
    fact: 'A relative of the starfish with five whip-like arms that ripple to crawl and can snap off to escape a predator, then regrow. On some deep plains they carpet the seafloor in the millions.',
    svg: `
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Brittle star">
        <defs><radialGradient id="brs-b" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#c88a5a"/><stop offset="1" stop-color="#7c4e2e"/></radialGradient></defs>
        <g stroke="#5e3a20" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M75 72 Q78 40 70 8 Q74 30 75 60"/>
          <path d="M78 74 Q112 60 140 30 Q116 52 84 68"/>
          <path d="M80 78 Q118 92 138 128 Q110 100 82 82"/>
          <path d="M72 80 Q54 116 24 138 Q52 106 70 82"/>
          <path d="M70 76 Q34 66 8 42 Q40 60 68 70"/>
        </g>
        <g stroke="#8a5a34" stroke-width="1.4"><path d="M70 30 l-8 4 M78 40 l8 -4 M100 55 l4 8 M60 110 l-8 -2 M40 55 l-8 4"/></g>
        <circle cx="75" cy="74" r="12" fill="url(#brs-b)" stroke="#5e3a20" stroke-width="1.8"/>
        <path d="M69 68 L75 74 L81 68 M69 80 L75 74 L81 80" stroke="#4a2c16" stroke-width="1.2" fill="none"/>
      </svg>`,
  },

  // ═══════════════════ HADAL · 6,000–10,935 m ═══════════════════
  {
    id: 'abyssobrotula',
    name: 'Deep-sea Cusk Eel',
    sci: 'Abyssobrotula galatheae',
    depth: 6500,
    range: '3,000–8,400 m',
    size: 175,
    side: 'left',
    fact: 'A pale, near-blind cusk-eel that holds one of the deepest fish records ever — one was hauled up from 8,370 m in the Puerto Rico Trench. It feels its way through the mud for tiny prey it cannot see.',
    svg: `
      <svg viewBox="0 0 200 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea cusk eel">
        <defs><linearGradient id="ab-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d8c8b8"/><stop offset="1" stop-color="#a89080"/></linearGradient></defs>
        <path d="M14 42 Q34 30 50 40 Q110 34 168 46 Q190 50 196 60 Q188 62 178 58 Q110 54 52 52 Q34 60 14 52 Q6 47 14 42Z" fill="url(#ab-b)" stroke="#7a6858" stroke-width="1.6"/>
        <path d="M50 40 Q60 60 50 52 Q110 66 168 58" fill="none" stroke="#b8a494" stroke-width="1.4" opacity="0.7"/>
        <path d="M14 44 Q26 42 34 44" stroke="#9c8878" stroke-width="1.6" fill="none"/>
        <circle cx="30" cy="42" r="2.8" fill="#5c4a3a"/>
      </svg>`,
  },
  {
    id: 'hadal-anemone',
    name: 'Trench Anemone',
    sci: 'Galatheanthemum',
    depth: 7100,
    range: '6,000–10,700 m',
    size: 96,
    side: 'right',
    fact: 'Anemones like this anchor to rocks miles down inside ocean trenches, spreading a crown of tentacles to snare whatever drifts by. Some trench species were only discovered by robot landers dropped into the deep.',
    svg: `
      <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trench anemone">
        <defs><linearGradient id="ha-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0a878"/><stop offset="1" stop-color="#a86a44"/></linearGradient></defs>
        <path d="M42 80 Q40 120 34 146 Q60 150 86 146 Q80 120 78 80Z" fill="url(#ha-b)" stroke="#7a4a2c" stroke-width="1.8"/>
        <g stroke="#eec090" stroke-width="4" stroke-linecap="round">
          <path d="M50 78 L38 40"/><path d="M58 76 L50 34"/><path d="M60 76 L60 30"/><path d="M62 76 L70 34"/><path d="M70 78 L82 40"/>
          <path d="M46 80 L26 52"/><path d="M74 80 L94 52"/><path d="M44 82 L20 70"/><path d="M76 82 L100 70"/>
        </g>
        <ellipse cx="60" cy="80" rx="20" ry="9" fill="#c98a5c" stroke="#7a4a2c" stroke-width="1.6"/>
      </svg>`,
  },
  {
    id: 'mariana-snailfish',
    name: 'Mariana Snailfish',
    sci: 'Pseudoliparis swirei',
    depth: 7700,
    range: '6,900–8,000 m',
    size: 122,
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
    id: 'elpidia',
    name: 'Trench Sea Cucumber',
    sci: 'Elpidia',
    depth: 8300,
    range: '6,000–9,500 m',
    size: 100,
    side: 'right',
    fact: 'A small, pale sea cucumber that dominates the very deepest trenches, plowing through the sediment to strip out the last scraps of food. Where almost nothing else survives, these thrive in slow-moving herds.',
    svg: `
      <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trench sea cucumber">
        <defs><linearGradient id="el-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6d0c2" stop-opacity="0.95"/><stop offset="1" stop-color="#c0a290" stop-opacity="0.85"/></linearGradient></defs>
        <path d="M18 52 Q24 34 60 34 Q112 32 124 50 Q128 62 116 66 Q70 72 40 66 Q20 66 18 52Z" fill="url(#el-b)" stroke="#9c8272" stroke-width="1.8"/>
        <g stroke="#b09080" stroke-width="3" stroke-linecap="round"><path d="M52 34 L48 16"/><path d="M66 33 L66 14"/><path d="M80 34 L86 16"/></g>
        <g stroke="#a88a78" stroke-width="4" stroke-linecap="round"><path d="M34 66 L30 82"/><path d="M56 68 L54 84"/><path d="M84 68 L88 84"/><path d="M108 62 L114 78"/></g>
        <circle cx="30" cy="48" r="2.6" fill="#6e5648"/>
      </svg>`,
  },
  {
    id: 'deepstaria',
    name: 'Deepstaria Jelly',
    sci: 'Deepstaria enigmatica',
    depth: 8900,
    range: '1,000–9,000 m',
    size: 130,
    side: 'left',
    fact: 'A ghostly jelly whose enormous, paper-thin bell unfurls like a living net or billowing blanket to trap prey. Filmed only rarely, it can draw itself closed into a bag around whatever it catches.',
    svg: `
      <svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deepstaria jelly">
        <defs><radialGradient id="ds-b" cx="0.5" cy="0.4" r="0.65"><stop offset="0" stop-color="#dce8ec" stop-opacity="0.5"/><stop offset="1" stop-color="#9fc0c8" stop-opacity="0.28"/></radialGradient></defs>
        <path d="M18 40 Q22 8 70 8 Q118 8 122 40 Q126 78 96 100 Q84 110 70 108 Q56 110 44 100 Q14 78 18 40Z" fill="url(#ds-b)" stroke="#a8c8d0" stroke-width="2"/>
        <g stroke="#b4d2d8" stroke-width="1.1" fill="none" opacity="0.75">
          <path d="M70 12 Q70 60 70 104"/><path d="M40 20 Q54 60 58 104"/><path d="M100 20 Q86 60 82 104"/>
          <path d="M22 44 Q70 54 118 44"/><path d="M24 70 Q70 82 116 70"/>
          <path d="M50 16 Q40 60 44 100"/><path d="M90 16 Q100 60 96 100"/>
        </g>
      </svg>`,
  },
  {
    id: 'giant-amphipod',
    name: 'Giant Amphipod',
    sci: 'Hirondellea gigas',
    depth: 9600,
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
