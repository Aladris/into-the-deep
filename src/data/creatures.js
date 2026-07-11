// Full creature roster (100 species). `depth` places the card on the scroll
// (always within the species' real range); `size` is the sprite's rendered
// width in px, chosen so creatures feel roughly to scale relative to each
// other. Species may be listed in any order — main.js sorts by depth and
// assigns alternating sides. Every gradient id is prefixed with the creature
// id so the inline SVGs don't clash when injected into one DOM.

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
    depth: 64,
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
    depth: 745,
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

  // ═══════════════════ + 50 MORE ═══════════════════
  // Sunlight
  {
    id: 'cuttlefish',
    name: 'Common Cuttlefish',
    sci: 'Sepia officinalis',
    depth: 80,
    range: '0–200 m',
    size: 120,
    fact: 'A master of disguise that changes the colour and texture of its skin in a blink using millions of tiny pigment sacs — even though, strangely, it is probably colour-blind. It has three hearts and blue-green blood.',
    svg: `
      <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cuttlefish">
        <defs><linearGradient id="ct-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8a878"/><stop offset="1" stop-color="#8a6a44"/></linearGradient></defs>
        <ellipse cx="82" cy="50" rx="52" ry="30" fill="url(#ct-b)" stroke="#4e3a20" stroke-width="2"/>
        <path d="M34 26 Q82 16 132 26 Q140 30 132 34 Q82 26 34 34 Q28 30 34 26Z" fill="#e0c48c" opacity="0.7"/>
        <path d="M30 50 Q10 46 8 50 Q10 54 30 50Z" fill="#a6845a" stroke="#4e3a20" stroke-width="1.4"/>
        <g stroke="#a6845a" stroke-width="4" stroke-linecap="round"><path d="M34 56 L16 64"/><path d="M36 60 L20 72"/><path d="M40 64 L28 80"/></g>
        <path d="M34 72 Q60 76 60 84 M60 84 Q58 92 52 96" stroke="#8a6a44" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M40 32 Q82 44 128 32 M40 68 Q82 58 128 68" stroke="#5e4628" stroke-width="1.3" fill="none" opacity="0.5"/>
        <ellipse cx="44" cy="44" rx="7" ry="6" fill="#f2ead2"/><path d="M40 44 Q44 40 48 44 Q44 48 40 44Z" fill="#1a140a"/>
      </svg>`,
  },

  // Twilight
  {
    id: 'hammerhead',
    name: 'Great Hammerhead',
    sci: 'Sphyrna mokarran',
    depth: 230,
    range: '0–300 m',
    size: 220,
    fact: 'Its wide, flattened head is studded with sensors that detect the faint electric fields of animals buried in the sand — sweeping it like a metal detector to pin stingrays it then eats.',
    svg: `
      <svg viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Great hammerhead shark">
        <defs><linearGradient id="hm-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0.5" stop-color="#8a9aa4"/><stop offset="0.52" stop-color="#d6dde1"/><stop offset="1" stop-color="#eef2f4"/></linearGradient></defs>
        <path d="M40 56 Q120 42 190 52 Q214 56 232 48 Q222 62 218 64 Q224 74 220 84 Q200 70 184 66 Q120 76 46 66 Q34 62 40 56Z" fill="url(#hm-b)" stroke="#4c5860" stroke-width="2"/>
        <path d="M40 50 Q30 40 30 34 Q40 34 46 46 Q60 44 60 56 Q46 66 32 66 Q22 66 24 58 Q34 58 40 50Z" fill="url(#hm-b)" stroke="#4c5860" stroke-width="2"/>
        <path d="M120 42 Q128 14 142 40Z" fill="#8a9aa4" stroke="#4c5860" stroke-width="1.6"/>
        <path d="M96 68 Q104 90 116 72Z" fill="#8a9aa4" stroke="#4c5860" stroke-width="1.4"/>
        <circle cx="30" cy="38" r="3.2" fill="#12202a"/><circle cx="30" cy="62" r="3.2" fill="#12202a"/>
      </svg>`,
  },
  {
    id: 'opah',
    name: 'Opah',
    sci: 'Lampris guttatus',
    depth: 280,
    range: '50–500 m',
    size: 180,
    fact: 'The first fish ever found to be fully warm-blooded — it heats its whole body by circulating warm blood, so it stays fast and sharp while hunting in cold, deep water where other fish turn sluggish.',
    svg: `
      <svg viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Opah moonfish">
        <defs><radialGradient id="op-b" cx="0.4" cy="0.4" r="0.7"><stop offset="0" stop-color="#7fa0b8"/><stop offset="1" stop-color="#3f5a72"/></radialGradient></defs>
        <ellipse cx="80" cy="76" rx="60" ry="52" fill="url(#op-b)" stroke="#2a3c4c" stroke-width="2.5"/>
        <path d="M80 24 Q88 8 96 26 Q90 34 82 32Z" fill="#d9484f" stroke="#8a2a2e" stroke-width="1.4"/>
        <path d="M124 44 Q150 40 148 60 Q140 78 120 66Z" fill="#e0555c" stroke="#8a2a2e" stroke-width="1.6"/>
        <path d="M120 92 Q146 96 142 114 Q132 124 116 106Z" fill="#e0555c" stroke="#8a2a2e" stroke-width="1.6"/>
        <path d="M30 66 Q10 60 8 74 Q14 90 34 82Z" fill="#e0555c" stroke="#8a2a2e" stroke-width="1.6"/>
        <g fill="#cfe0ea" opacity="0.7"><circle cx="60" cy="56" r="2.6"/><circle cx="84" cy="48" r="2.6"/><circle cx="100" cy="66" r="2.6"/><circle cx="70" cy="82" r="2.6"/><circle cx="96" cy="92" r="2.6"/><circle cx="52" cy="90" r="2.6"/></g>
        <circle cx="46" cy="60" r="9" fill="#f4d24a"/><circle cx="44" cy="60" r="4.5" fill="#141008"/>
      </svg>`,
  },
  {
    id: 'oarfish',
    name: 'Giant Oarfish',
    sci: 'Regalecus glesne',
    depth: 340,
    range: '200–1,000 m',
    size: 240,
    fact: 'The longest bony fish in the sea, a silvery ribbon that can stretch 8 metres with a flowing red crest. Rarely seen alive, its serpentine body is almost certainly behind many old tales of sea monsters.',
    svg: `
      <svg viewBox="0 0 250 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Giant oarfish">
        <defs><linearGradient id="oa-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8eef2"/><stop offset="1" stop-color="#a8bac6"/></linearGradient></defs>
        <path d="M14 46 Q60 36 130 42 Q200 48 242 44 Q244 52 242 56 Q200 60 130 56 Q60 60 14 54 Q8 50 14 46Z" fill="url(#oa-b)" stroke="#5e6e7a" stroke-width="1.6"/>
        <path d="M20 42 Q60 30 130 34 Q200 38 240 36" stroke="#d9484f" stroke-width="3" fill="none" opacity="0.9"/>
        <path d="M18 40 Q16 22 22 24 Q24 34 26 40Z" fill="#d9484f"/>
        <path d="M30 40 Q30 26 36 28 M46 41 Q46 28 52 30" stroke="#d9484f" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <g fill="#c8d4dc" opacity="0.6"><circle cx="70" cy="48" r="2"/><circle cx="110" cy="49" r="2"/><circle cx="150" cy="49" r="2"/><circle cx="190" cy="49" r="2"/></g>
        <circle cx="26" cy="47" r="3.4" fill="#12202a"/><circle cx="27" cy="46" r="1.1" fill="#fff"/>
      </svg>`,
  },
  {
    id: 'strawberry-squid',
    name: 'Strawberry Squid',
    sci: 'Histioteuthis heteropsis',
    depth: 420,
    range: '200–1,000 m',
    size: 120,
    fact: 'Has two wildly mismatched eyes: one is huge and looks up to spot shadows against the faint light above, while the other is small and points down, watching for the sparkle of glowing prey below.',
    svg: `
      <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Strawberry squid">
        <defs><linearGradient id="st-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c85868"/><stop offset="1" stop-color="#8a2c3c"/></linearGradient></defs>
        <path d="M60 8 Q90 12 90 44 Q90 66 76 74 Q60 80 44 74 Q30 66 30 44 Q30 12 60 8Z" fill="url(#st-b)" stroke="#4e141e" stroke-width="2"/>
        <g fill="#ffd24a"><circle cx="44" cy="30" r="2"/><circle cx="60" cy="24" r="2"/><circle cx="76" cy="34" r="2"/><circle cx="50" cy="50" r="2"/><circle cx="70" cy="52" r="2"/><circle cx="60" cy="40" r="2"/></g>
        <g stroke="#a63a4a" stroke-width="4" stroke-linecap="round" fill="none">
          <path d="M46 74 Q40 104 34 128"/><path d="M56 76 Q54 106 50 132"/><path d="M64 76 Q66 106 70 132"/><path d="M74 74 Q84 104 92 126"/><path d="M40 74 Q30 100 20 120"/>
        </g>
        <circle cx="46" cy="40" r="12" fill="#f2e08a"/><circle cx="46" cy="40" r="5" fill="#12100a"/>
        <circle cx="74" cy="42" r="5" fill="#3a1218"/>
      </svg>`,
  },
  {
    id: 'sixgill-shark',
    name: 'Bluntnose Sixgill Shark',
    sci: 'Hexanchus griseus',
    depth: 500,
    range: '200–1,100 m',
    size: 230,
    fact: 'An ancient giant with six gill slits instead of the usual five, and a single fin set far back — a body plan little changed since before the dinosaurs. It rises from the depths at night to hunt.',
    svg: `
      <svg viewBox="0 0 240 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sixgill shark">
        <defs><linearGradient id="sg-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a6b60"/><stop offset="1" stop-color="#333f38"/></linearGradient></defs>
        <path d="M10 58 Q80 40 160 50 Q210 56 234 48 Q222 62 218 64 Q224 74 220 86 Q198 70 182 66 Q100 76 40 70 Q22 68 10 58Z" fill="url(#sg-b)" stroke="#232c27" stroke-width="2"/>
        <path d="M150 46 Q160 30 174 44Z" fill="#48564d" stroke="#232c27" stroke-width="1.6"/>
        <path d="M60 70 Q68 92 82 74Z" fill="#48564d" stroke="#232c27" stroke-width="1.4"/>
        <g stroke="#2a332e" stroke-width="1.6" opacity="0.8"><path d="M44 54 Q46 60 44 66"/><path d="M50 54 Q52 60 50 66"/><path d="M56 55 Q58 61 56 67"/><path d="M62 55 Q64 61 62 67"/><path d="M68 55 Q70 61 68 67"/><path d="M74 56 Q76 62 74 68"/></g>
        <circle cx="26" cy="56" r="4" fill="#a8f06a"/><circle cx="26" cy="56" r="2" fill="#12180c"/>
      </svg>`,
  },
  {
    id: 'pyrosome',
    name: 'Pyrosome',
    sci: 'Pyrosoma atlanticum',
    depth: 560,
    range: '0–1,000 m',
    size: 150,
    fact: 'Not one animal but thousands of tiny clones fused into a single glowing tube, open at one end. Each clone filters food and, when touched, the whole colony lights up in rippling waves of blue-green light.',
    svg: `
      <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyrosome">
        <defs><linearGradient id="py-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfeadd" stop-opacity="0.9"/><stop offset="1" stop-color="#7fbfae" stop-opacity="0.7"/></linearGradient></defs>
        <path d="M40 12 Q80 8 84 40 Q88 90 78 138 Q72 152 56 150 Q42 148 40 132 Q34 84 34 44 Q34 16 40 12Z" fill="url(#py-b)" stroke="#5fa08c" stroke-width="1.8"/>
        <ellipse cx="60" cy="18" rx="22" ry="9" fill="#04101c" opacity="0.5"/>
        <ellipse cx="60" cy="18" rx="22" ry="9" fill="none" stroke="#5fa08c" stroke-width="1.6"/>
        <g fill="#8ff0d8"><circle cx="48" cy="40" r="2"/><circle cx="70" cy="46" r="2"/><circle cx="52" cy="64" r="2"/><circle cx="72" cy="72" r="2"/><circle cx="50" cy="90" r="2"/><circle cx="68" cy="100" r="2"/><circle cx="54" cy="120" r="2"/></g>
        <path d="M44 40 Q60 44 76 40 M42 70 Q60 74 78 70 M44 104 Q60 108 74 104" stroke="#6fb8a4" stroke-width="1.2" fill="none" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'lancetfish',
    name: 'Longnose Lancetfish',
    sci: 'Alepisaurus ferox',
    depth: 620,
    range: '0–1,800 m',
    size: 200,
    fact: 'A fanged predator with a tall sail on its back and a soft, watery body that can’t chase fast. Instead it swallows prey whole and digests slowly — and its stomach is so often intact that scientists study it to learn what lives in the deep.',
    svg: `
      <svg viewBox="0 0 230 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lancetfish">
        <defs><linearGradient id="la-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5c6b78"/><stop offset="1" stop-color="#2a3540"/></linearGradient></defs>
        <path d="M8 58 Q20 50 30 58 Q120 50 190 60 Q210 64 224 56 Q214 68 206 70 Q212 80 208 90 Q194 76 186 74 Q120 78 40 72 Q22 78 8 70 Q20 64 8 58Z" fill="url(#la-b)" stroke="#151d24" stroke-width="1.8"/>
        <path d="M40 54 Q70 20 100 52 Q130 22 160 54 Q140 40 120 48 Q90 34 70 50 Q56 42 40 54Z" fill="#48586a" stroke="#151d24" stroke-width="1.4"/>
        <path d="M28 58 L32 50 L36 58 L40 50 L44 58" fill="none" stroke="#e8eef2" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="24" cy="58" r="4.5" fill="#0e161d"/><circle cx="25.4" cy="56.4" r="1.6" fill="#bfe4f2"/>
      </svg>`,
  },
  {
    id: 'hagfish',
    name: 'Pacific Hagfish',
    sci: 'Eptatretus stoutii',
    depth: 680,
    range: '100–900 m',
    size: 150,
    fact: 'When a predator bites, it instantly unleashes a cloud of slime that swells into litres of choking goo, clogging the attacker’s gills. Jawless and nearly blind, it ties itself in a knot to scrape the slime back off.',
    svg: `
      <svg viewBox="0 0 210 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hagfish">
        <defs><linearGradient id="hg-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c88f8a"/><stop offset="1" stop-color="#8a5f5a"/></linearGradient></defs>
        <path d="M12 36 Q30 26 60 32 Q130 28 196 38 Q200 46 194 48 Q130 44 60 44 Q30 48 12 40 Q6 38 12 36Z" fill="url(#hg-b)" stroke="#5e3e3a" stroke-width="1.6"/>
        <g stroke="#7a544e" stroke-width="1.4" stroke-linecap="round"><path d="M12 34 Q4 30 2 32 M14 38 Q6 42 4 44 M18 32 Q12 26 10 26 M18 42 Q12 48 10 48</path></g>
        <g fill="#e8dede" opacity="0.6"><circle cx="90" cy="46" r="2"/><circle cx="120" cy="47" r="2"/><circle cx="150" cy="47" r="2"/></g>
        <circle cx="24" cy="36" r="2.4" fill="#3a2624" opacity="0.7"/>
      </svg>`,
  },
  {
    id: 'telescope-octopus',
    name: 'Telescope Octopus',
    sci: 'Amphitretus pelagicus',
    depth: 740,
    range: '150–2,000 m',
    size: 120,
    fact: 'Almost perfectly transparent and the only octopus with tubular, telescope-like eyes on stalks. They swivel to point upward, scanning the faint glow above for the silhouettes of passing prey.',
    svg: `
      <svg viewBox="0 0 130 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Telescope octopus">
        <defs><radialGradient id="to-b" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#cfe6ea" stop-opacity="0.6"/><stop offset="1" stop-color="#8fb6bc" stop-opacity="0.4"/></radialGradient></defs>
        <path d="M65 20 Q98 24 98 56 Q98 74 84 82 Q86 104 76 128 Q70 116 70 98 Q66 110 60 98 Q52 116 46 128 Q38 104 40 82 Q26 74 26 56 Q26 24 65 20Z" fill="url(#to-b)" stroke="#7fa8ae" stroke-width="1.8"/>
        <g stroke="#7fa8ae" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"><path d="M52 82 Q46 104 44 124"/><path d="M62 84 Q62 106 62 126"/><path d="M74 82 Q80 104 84 124"/></g>
        <rect x="42" y="40" width="10" height="16" rx="5" fill="#3a5a60"/><circle cx="47" cy="42" r="5" fill="#0c1c1e"/>
        <rect x="78" y="40" width="10" height="16" rx="5" fill="#3a5a60"/><circle cx="83" cy="42" r="5" fill="#0c1c1e"/>
      </svg>`,
  },
  {
    id: 'siphonophore',
    name: 'Siphonophore',
    sci: 'Marrus orthocanna',
    depth: 1010,
    range: '200–2,000 m',
    size: 130,
    fact: 'Looks like a single jelly but is really a colony of specialized clones strung together, each doing one job — floating, swimming, feeding, or stinging. Some relatives grow longer than a blue whale.',
    svg: `
      <svg viewBox="0 0 90 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Siphonophore">
        <defs><linearGradient id="si-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0783a"/><stop offset="1" stop-color="#a84a20"/></linearGradient></defs>
        <path d="M45 6 Q64 8 64 28 Q64 44 45 46 Q26 44 26 28 Q26 8 45 6Z" fill="url(#si-b)" stroke="#7a3414" stroke-width="1.6"/>
        <g fill="#bfe8dd" stroke="#7fb0a2" stroke-width="1.2" opacity="0.85">
          <path d="M32 50 Q20 56 30 66 Q44 60 45 52Z"/><path d="M58 50 Q70 56 60 66 Q46 60 45 52Z"/>
          <path d="M32 68 Q20 74 30 84 Q44 78 45 70Z"/><path d="M58 68 Q70 74 60 84 Q46 78 45 70Z"/>
          <path d="M34 86 Q22 92 32 102 Q44 96 45 88Z"/><path d="M56 86 Q68 92 58 102 Q46 96 45 88Z"/>
        </g>
        <g stroke="#c86a3a" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.8"><path d="M45 104 Q40 130 44 160"/><path d="M45 104 Q52 132 48 164"/><path d="M45 104 Q38 138 36 166"/></g>
      </svg>`,
  },
  {
    id: 'glass-squid',
    name: 'Glass Squid',
    sci: 'Cranchiidae',
    depth: 860,
    range: '200–1,000 m',
    size: 120,
    fact: 'Nearly invisible — its whole body is see-through except for its eyes and gut. To hide even those telltale shadows, it shines light organs beneath its eyes to erase its silhouette from below.',
    svg: `
      <svg viewBox="0 0 110 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glass squid">
        <defs><linearGradient id="gsq-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6ea" stop-opacity="0.55"/><stop offset="1" stop-color="#8fb6bc" stop-opacity="0.35"/></linearGradient></defs>
        <path d="M55 12 Q84 18 84 62 Q84 92 70 100 Q55 104 40 100 Q26 92 26 62 Q26 18 55 12Z" fill="url(#gsq-b)" stroke="#7fa8ae" stroke-width="1.8"/>
        <g stroke="#7fa8ae" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.8"><path d="M42 100 Q38 122 36 142"/><path d="M50 102 Q50 124 50 144"/><path d="M60 102 Q62 124 64 142"/><path d="M68 100 Q74 122 76 140"/></g>
        <ellipse cx="55" cy="46" rx="8" ry="16" fill="#9c6a4a" opacity="0.55"/>
        <circle cx="42" cy="40" r="6" fill="#2a4046"/><circle cx="43" cy="38" r="2" fill="#bfe4f2"/>
        <circle cx="68" cy="40" r="6" fill="#2a4046"/><circle cx="69" cy="38" r="2" fill="#bfe4f2"/>
        <circle cx="42" cy="50" r="2.2" fill="#8ff0ff"/><circle cx="68" cy="50" r="2.2" fill="#8ff0ff"/>
      </svg>`,
  },
  {
    id: 'salp',
    name: 'Salp',
    sci: 'Salpa maxima',
    depth: 900,
    range: '0–800 m',
    size: 110,
    fact: 'A see-through, barrel-shaped animal that jets water through its body to move and feed at once, often linking into long glowing chains. As it eats, it packages carbon and sinks it to the deep — a tiny cog in cooling the planet.',
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Salp">
        <defs><linearGradient id="sa-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dce9ef" stop-opacity="0.55"/><stop offset="1" stop-color="#a6c6cf" stop-opacity="0.4"/></linearGradient></defs>
        <path d="M32 20 Q88 16 92 60 Q92 96 60 102 Q28 96 28 60 Q28 24 32 20Z" fill="url(#sa-b)" stroke="#8fb4be" stroke-width="1.8"/>
        <ellipse cx="60" cy="24" rx="26" ry="8" fill="none" stroke="#8fb4be" stroke-width="1.6"/>
        <ellipse cx="60" cy="96" rx="18" ry="7" fill="none" stroke="#8fb4be" stroke-width="1.6"/>
        <path d="M44 54 Q60 60 76 54 Q70 68 60 68 Q50 68 44 54Z" fill="#d98a4a" opacity="0.7" stroke="#a86a30" stroke-width="1.2"/>
        <path d="M36 40 Q60 44 84 40 M34 74 Q60 78 86 74" stroke="#9fc0c8" stroke-width="1.2" fill="none" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'cutthroat-eel',
    name: 'Cutthroat Eel',
    sci: 'Synaphobranchidae',
    depth: 940,
    range: '300–3,700 m',
    size: 160,
    fact: 'Named for gill slits set low on the throat like a slash. These eels are among the first to arrive at anything dead that sinks to the deep seafloor, swarming bait traps by the dozen.',
    svg: `
      <svg viewBox="0 0 210 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cutthroat eel">
        <defs><linearGradient id="cte-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4a4c52"/><stop offset="1" stop-color="#23252a"/></linearGradient></defs>
        <path d="M14 40 Q34 30 56 36 Q130 32 196 44 Q202 50 194 54 Q130 50 56 50 Q34 54 14 46 Q8 43 14 40Z" fill="url(#cte-b)" stroke="#131418" stroke-width="1.6"/>
        <path d="M56 34 Q130 30 194 44" stroke="#5c5e64" stroke-width="1.4" fill="none" opacity="0.6"/>
        <path d="M28 46 Q26 52 30 56" stroke="#8a2a2a" stroke-width="2" fill="none"/>
        <circle cx="26" cy="39" r="3" fill="#0a0b0d"/>
      </svg>`,
  },
  {
    id: 'phronima',
    name: 'Pram Bug',
    sci: 'Phronima sedentaria',
    depth: 780,
    range: '200–1,000 m',
    size: 92,
    fact: 'A see-through amphipod that hollows out a jelly-like salp and rides inside the barrel, pushing it through the water like a pram while it raises its young. Its eerie look helped inspire the creature in the film Alien.',
    svg: `
      <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pram bug amphipod">
        <defs><radialGradient id="ph-b" cx="0.5" cy="0.5" r="0.55"><stop offset="0" stop-color="#dcecec" stop-opacity="0.5"/><stop offset="1" stop-color="#9fc0c0" stop-opacity="0.35"/></radialGradient></defs>
        <ellipse cx="60" cy="56" rx="46" ry="40" fill="url(#ph-b)" stroke="#8fb4b4" stroke-width="1.6"/>
        <path d="M52 30 Q64 24 74 32 Q78 46 72 58 Q62 70 52 62 Q46 46 52 30Z" fill="#bfd8d8" opacity="0.7" stroke="#7fa0a0" stroke-width="1.4"/>
        <g stroke="#8fb0b0" stroke-width="2" stroke-linecap="round"><path d="M56 60 L48 82"/><path d="M64 62 L60 86"/><path d="M70 58 L78 80"/></g>
        <circle cx="58" cy="38" r="4" fill="#2a4444"/><circle cx="70" cy="40" r="3" fill="#2a4444"/>
      </svg>`,
  },

  // Midnight
  {
    id: 'lizardfish',
    name: 'Deep-sea Lizardfish',
    sci: 'Bathysaurus ferox',
    depth: 1080,
    range: '1,000–3,500 m',
    size: 170,
    fact: 'A ferocious ambush hunter of the deep seafloor whose mouth, tongue and even the roof of its mouth are lined with hinged, backward-pointing teeth — so once it grabs a meal, nothing gets back out.',
    svg: `
      <svg viewBox="0 0 210 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea lizardfish">
        <defs><linearGradient id="lz-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6a6a56"/><stop offset="1" stop-color="#37372a"/></linearGradient></defs>
        <path d="M8 42 Q30 34 44 44 Q120 40 180 50 Q198 54 204 46 Q196 58 188 60 Q120 64 46 58 Q30 66 8 58 Q22 50 8 42Z" fill="url(#lz-b)" stroke="#1e1e15" stroke-width="1.8"/>
        <path d="M8 42 Q26 44 44 44 L44 52 Q26 54 8 54 Q4 48 8 42Z" fill="#3a3a2c"/>
        <path d="M12 44 L18 40 L24 44 L30 40 L36 44" fill="none" stroke="#e8e8d8" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12 52 L18 56 L24 52 L30 56 L36 52" fill="none" stroke="#e8e8d8" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="40" cy="42" r="4" fill="#0e0e08"/><circle cx="41" cy="41" r="1.2" fill="#c8d86a"/>
      </svg>`,
  },
  {
    id: 'pigbutt-worm',
    name: 'Pigbutt Worm',
    sci: 'Chaetopterus pugaporcinus',
    depth: 1180,
    range: '~1,000 m',
    size: 92,
    fact: 'A marble-sized deep-sea worm that puffs its middle segments into a glowing balloon shaped, unmistakably, like a tiny pair of buttocks. It drifts in a cloud of mucus that traps falling food.',
    svg: `
      <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pigbutt worm">
        <defs><radialGradient id="pb-b" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#f2c9a8"/><stop offset="1" stop-color="#c88a64"/></radialGradient></defs>
        <path d="M55 16 Q92 20 92 58 Q92 92 55 98 Q18 92 18 58 Q18 20 55 16Z" fill="url(#pb-b)" stroke="#9c6244" stroke-width="1.8"/>
        <path d="M55 20 Q55 60 55 96" stroke="#b07a58" stroke-width="3" fill="none" opacity="0.6"/>
        <ellipse cx="36" cy="54" rx="16" ry="24" fill="#f6d6ba" opacity="0.5"/>
        <ellipse cx="74" cy="54" rx="16" ry="24" fill="#f6d6ba" opacity="0.5"/>
        <g stroke="#e8b894" stroke-width="1.4" opacity="0.7"><path d="M20 44 Q10 42 6 44 M20 66 Q10 68 6 66"/></g>
      </svg>`,
  },
  {
    id: 'bigfin-squid',
    name: 'Bigfin Squid',
    sci: 'Magnapinna',
    depth: 1300,
    range: '1,000–4,700 m',
    size: 200,
    fact: 'One of the ocean’s strangest sights, filmed only a handful of times. It holds its impossibly long arms bent at the "elbow" and out at right angles, trailing them like sticky threads many metres below its small body.',
    svg: `
      <svg viewBox="0 0 140 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bigfin squid">
        <defs><linearGradient id="bf-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9a2b0"/><stop offset="1" stop-color="#a86a7a"/></linearGradient></defs>
        <path d="M70 16 Q84 18 84 34 Q84 46 70 48 Q56 46 56 34 Q56 18 70 16Z" fill="url(#bf-b)" stroke="#7a4452" stroke-width="1.6"/>
        <path d="M56 22 Q30 16 22 26 Q42 32 56 34Z" fill="#c68a98" opacity="0.85"/>
        <path d="M84 22 Q110 16 118 26 Q98 32 84 34Z" fill="#c68a98" opacity="0.85"/>
        <g stroke="#c07f8e" stroke-width="3" stroke-linecap="round" fill="none">
          <path d="M60 48 Q60 66 40 66 Q40 120 34 172"/>
          <path d="M66 48 Q66 72 52 72 Q52 122 50 174"/>
          <path d="M74 48 Q74 72 88 72 Q88 122 90 174"/>
          <path d="M80 48 Q80 66 100 66 Q100 120 106 172"/>
        </g>
      </svg>`,
  },
  {
    id: 'footballfish',
    name: 'Football Fish',
    sci: 'Himantolophus groenlandicus',
    depth: 1420,
    range: '1,000–2,000 m',
    size: 130,
    fact: 'A round, spiky anglerfish that dangles a glowing bulb over its mouth to draw prey in. Only the football-sized female fishes; the tiny male is a fraction of her size and latches on to live off her body.',
    svg: `
      <svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Football fish">
        <defs>
          <radialGradient id="fb-l" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fdffd8"/><stop offset="0.5" stop-color="#b8f3a8"/><stop offset="1" stop-color="#b8f3a8" stop-opacity="0"/></radialGradient>
          <radialGradient id="fb-b" cx="0.45" cy="0.4" r="0.7"><stop offset="0" stop-color="#33323c"/><stop offset="1" stop-color="#111017"/></radialGradient>
        </defs>
        <circle cx="72" cy="70" r="42" fill="url(#fb-b)" stroke="#08080c" stroke-width="2"/>
        <g stroke="#2a2933" stroke-width="2" stroke-linecap="round"><path d="M40 44 L34 38 M104 44 L110 38 M40 96 L34 102 M104 96 L110 102 M30 70 L22 70 M114 70 L122 70"/></g>
        <circle cx="60" cy="30" r="14" fill="url(#fb-l)" class="lure-glow"/><circle cx="60" cy="30" r="4" fill="#f4ffc4"/>
        <path d="M61 34 Q64 44 66 52" stroke="#2a2933" stroke-width="2.4" fill="none"/>
        <path d="M46 78 Q60 86 78 80" fill="none" stroke="#e8e8ee" stroke-width="2" stroke-linecap="round"/>
        <path d="M48 78 L50 84 M56 80 L57 86 M64 81 L64 87 M72 80 L73 86" stroke="#e8e8ee" stroke-width="1.5"/>
        <circle cx="58" cy="60" r="4" fill="#08080c"/><circle cx="59" cy="59" r="1.2" fill="#9fb0c0"/>
      </svg>`,
  },
  {
    id: 'loosejaw',
    name: 'Stoplight Loosejaw',
    sci: 'Malacosteus niger',
    depth: 1520,
    range: '500–3,000 m',
    size: 130,
    fact: 'Shines a secret red searchlight from organs under its eyes — a colour nearly every other deep animal is blind to — so it can spot prey unseen. Its lower jaw has no floor of skin, snapping shut like a bare cage of teeth.',
    svg: `
      <svg viewBox="0 0 170 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stoplight loosejaw">
        <defs><linearGradient id="lj-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#26242c"/><stop offset="1" stop-color="#0c0b10"/></linearGradient></defs>
        <path d="M56 40 Q110 32 160 44 Q166 50 158 54 Q110 50 60 54 Q40 60 20 58 Q34 50 56 40Z" fill="url(#lj-b)" stroke="#070610" stroke-width="1.6"/>
        <path d="M20 58 Q40 56 56 40 L60 44 Q46 58 40 66 Q30 64 20 58Z" fill="#18161e"/>
        <path d="M26 52 L32 44 L38 52 L44 44 L50 52" fill="none" stroke="#eae8ee" stroke-width="1.6" stroke-linecap="round"/>
        <path d="M28 60 L34 54 L40 62 L46 54 L52 62" fill="none" stroke="#eae8ee" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="60" cy="42" r="5" fill="#0a0810"/>
        <circle cx="54" cy="48" r="4" fill="#ff5a5a" class="lure-glow"/>
        <circle cx="66" cy="40" r="2.4" fill="#8ff0ff"/>
      </svg>`,
  },
  {
    id: 'crossota',
    name: 'Crossota Jelly',
    sci: 'Crossota millsae',
    depth: 1640,
    range: '1,000–3,000 m',
    size: 92,
    fact: 'A small, deep-red jelly that spends its whole life in open water, never touching the seafloor. Dozens of fine tentacles fan out around its bell as it pulses slowly through the eternal night.',
    svg: `
      <svg viewBox="0 0 110 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crossota jelly">
        <defs><radialGradient id="cr-b" cx="0.5" cy="0.42" r="0.55"><stop offset="0" stop-color="#d13a4a"/><stop offset="1" stop-color="#7c1420"/></radialGradient></defs>
        <path d="M20 46 Q20 18 55 16 Q90 18 90 46 Q90 58 78 60 Q55 64 32 60 Q20 58 20 46Z" fill="url(#cr-b)" stroke="#4e0c14" stroke-width="1.8"/>
        <ellipse cx="55" cy="44" rx="18" ry="12" fill="#e8546a" opacity="0.6"/>
        <g stroke="#e8546a" stroke-width="1.4" stroke-linecap="round" opacity="0.85">
          <path d="M24 58 L14 96"/><path d="M34 62 L28 104"/><path d="M44 63 L42 108"/><path d="M55 64 L55 110"/><path d="M66 63 L68 108"/><path d="M76 62 L82 104"/><path d="M86 58 L96 96"/>
        </g>
      </svg>`,
  },
  {
    id: 'whipnose',
    name: 'Whipnose Anglerfish',
    sci: 'Gigantactis',
    depth: 1740,
    range: '1,000–2,700 m',
    size: 130,
    fact: 'Its fishing rod is longer than its whole body, dangling a glowing lure far out front to tempt prey back toward the waiting mouth. Oddly, it is often seen swimming upside-down, dragging the lure along the seabed.',
    svg: `
      <svg viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Whipnose anglerfish">
        <defs><linearGradient id="wn-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2a32"/><stop offset="1" stop-color="#101017"/></linearGradient></defs>
        <path d="M96 52 Q130 40 160 52 Q176 60 160 74 Q130 86 100 80 Q78 84 70 66 Q78 50 96 52Z" fill="url(#wn-b)" stroke="#08080c" stroke-width="1.8"/>
        <path d="M100 54 Q80 62 78 70 Q98 72 108 66Z" fill="#1a1a22"/>
        <path d="M82 60 L88 66 L94 60" stroke="#e8e8ee" stroke-width="1.6" fill="none"/>
        <path d="M104 44 Q70 20 14 20" fill="none" stroke="#33333d" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="14" cy="20" r="7" fill="#c9f0a8" class="lure-glow"/><circle cx="14" cy="20" r="3" fill="#f4ffc4"/>
        <circle cx="104" cy="58" r="4.5" fill="#08080c"/><circle cx="105" cy="56.6" r="1.4" fill="#9fb0c0"/>
      </svg>`,
  },
  {
    id: 'coffinfish',
    name: 'Coffinfish',
    sci: 'Chaunax',
    depth: 1850,
    range: '200–2,500 m',
    size: 120,
    fact: 'A pudgy "sea toad" covered in prickly skin that lumbers over the seabed on arm-like fins. It can gulp in huge mouthfuls of seawater and hold its breath for minutes, saving energy where food is scarce.',
    svg: `
      <svg viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coffinfish">
        <defs><radialGradient id="co-b" cx="0.45" cy="0.4" r="0.7"><stop offset="0" stop-color="#e0645c"/><stop offset="1" stop-color="#9c342e"/></radialGradient></defs>
        <path d="M40 40 Q90 26 116 48 Q128 62 116 80 Q92 98 54 92 Q28 86 26 62 Q30 46 40 40Z" fill="url(#co-b)" stroke="#6a1f1c" stroke-width="2"/>
        <path d="M52 90 Q48 104 40 106 Q42 96 46 88Z" fill="#c04c46" stroke="#6a1f1c" stroke-width="1.4"/>
        <path d="M96 88 Q100 102 108 104 Q104 94 98 86Z" fill="#c04c46" stroke="#6a1f1c" stroke-width="1.4"/>
        <g fill="#f2a09a" opacity="0.6"><circle cx="60" cy="50" r="2"/><circle cx="78" cy="46" r="2"/><circle cx="92" cy="58" r="2"/><circle cx="70" cy="66" r="2"/><circle cx="90" cy="72" r="2"/></g>
        <path d="M44 66 Q58 74 76 70" fill="none" stroke="#6a1f1c" stroke-width="2"/>
        <circle cx="52" cy="52" r="5" fill="#2a0c0a"/><circle cx="53.4" cy="50.4" r="1.6" fill="#f2a09a"/>
      </svg>`,
  },
  {
    id: 'glass-octopus',
    name: 'Glass Octopus',
    sci: 'Vitreledonella richardi',
    depth: 1960,
    range: '1,000–3,000 m',
    size: 130,
    fact: 'Almost completely transparent — only its cylindrical eyes, its gut and its optic nerves are visible, everything else clear as water. This near-invisibility is its best defence in a place with nowhere to hide.',
    svg: `
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glass octopus">
        <defs><radialGradient id="go2-b" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#d6ecec" stop-opacity="0.5"/><stop offset="1" stop-color="#9fc4c4" stop-opacity="0.35"/></radialGradient></defs>
        <path d="M70 18 Q104 24 104 60 Q104 80 90 88 Q92 112 82 132 Q76 118 74 100 Q68 112 62 100 Q60 118 54 132 Q44 112 46 88 Q32 80 32 60 Q32 24 70 18Z" fill="url(#go2-b)" stroke="#7fa8a8" stroke-width="1.8"/>
        <g stroke="#7fa8a8" stroke-width="2.6" stroke-linecap="round" fill="none" opacity="0.75"><path d="M50 88 Q44 110 42 128"/><path d="M66 90 Q66 112 66 130"/><path d="M84 88 Q92 110 96 126"/></g>
        <rect x="52" y="44" width="9" height="18" rx="4" fill="#2c4646"/>
        <rect x="79" y="44" width="9" height="18" rx="4" fill="#2c4646"/>
        <ellipse cx="70" cy="74" rx="7" ry="14" fill="#a6867a" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'paper-lantern-jelly',
    name: 'Red Paper Lantern Jelly',
    sci: 'Pandea rubra',
    depth: 2080,
    range: '1,000–2,000 m',
    size: 100,
    fact: 'A deep-red jelly that can crumple and pleat its bell like a folding paper lantern, then smooth itself back out to drift on. Small shrimp sometimes hitch a ride inside its stomach.',
    svg: `
      <svg viewBox="0 0 110 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Red paper lantern jelly">
        <defs><radialGradient id="pl-b" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#c83848"/><stop offset="1" stop-color="#7a1220"/></radialGradient></defs>
        <path d="M24 40 Q24 14 55 12 Q86 14 86 40 Q86 72 68 88 Q55 96 42 88 Q24 72 24 40Z" fill="url(#pl-b)" stroke="#4e0c14" stroke-width="1.8"/>
        <g stroke="#8a1e2a" stroke-width="1.6" opacity="0.7"><path d="M40 16 Q38 54 48 88"/><path d="M55 12 Q55 54 55 92"/><path d="M70 16 Q72 54 62 88"/></g>
        <g stroke="#d9546a" stroke-width="1.4" stroke-linecap="round" opacity="0.85"><path d="M40 88 L36 118"/><path d="M50 92 L48 122"/><path d="M60 92 L62 122"/><path d="M68 88 L74 118"/></g>
      </svg>`,
  },
  {
    id: 'zombie-worm',
    name: 'Zombie Worm',
    sci: 'Osedax',
    depth: 2200,
    range: '1,000–3,000 m',
    size: 92,
    fact: 'Has no mouth, no gut, and no stomach. It bores into the bones of dead whales with acid and lets bacteria inside it digest the fat — earning the nickname "bone-eating snot flower." Only the females feed; the males live tiny inside them.',
    svg: `
      <svg viewBox="0 0 110 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zombie worm">
        <defs><linearGradient id="zw-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0645c"/><stop offset="1" stop-color="#a83a34"/></linearGradient></defs>
        <path d="M40 118 Q36 96 44 78 Q52 66 66 66 Q78 68 78 82 Q76 100 72 118Z" fill="#d8c8b8" opacity="0.55"/>
        <path d="M55 70 Q55 92 55 116" stroke="#a83a34" stroke-width="4" fill="none" stroke-linecap="round"/>
        <g stroke="#e0645c" stroke-width="3.5" stroke-linecap="round" fill="none">
          <path d="M55 68 Q40 44 26 24"/><path d="M55 66 Q50 40 44 14"/><path d="M55 66 Q60 40 66 14"/><path d="M55 68 Q70 44 84 24"/><path d="M55 70 Q46 48 32 40"/><path d="M55 70 Q64 48 78 40"/>
        </g>
        <g stroke="#f2948c" stroke-width="1.4" opacity="0.7"><path d="M32 30 Q30 26 32 22 M44 20 Q44 16 46 14 M66 20 Q66 16 64 14 M84 30 Q86 26 84 22"/></g>
      </svg>`,
  },
  {
    id: 'eelpout',
    name: 'Deep-sea Eelpout',
    sci: 'Zoarcidae',
    depth: 2320,
    range: '1,000–2,700 m',
    size: 150,
    fact: 'One of the few fish families that thrives around scalding hydrothermal vents, grazing on the shrimp and crabs that swarm the mineral chimneys — living between water hot enough to melt lead and the near-freezing deep.',
    svg: `
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea eelpout">
        <defs><linearGradient id="ep-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a6f8a"/><stop offset="1" stop-color="#3c3548"/></linearGradient></defs>
        <path d="M12 42 Q28 30 50 36 Q120 32 184 44 Q192 48 184 54 Q120 52 50 52 Q28 56 12 48 Q6 45 12 42Z" fill="url(#ep-b)" stroke="#241f2c" stroke-width="1.6"/>
        <path d="M50 32 Q120 28 184 44 M50 56 Q120 56 182 46" stroke="#4a4256" stroke-width="1.2" fill="none" opacity="0.6"/>
        <path d="M20 44 Q30 48 40 44" stroke="#241f2c" stroke-width="1.6" fill="none"/>
        <circle cx="30" cy="40" r="3.4" fill="#0c0a10"/><circle cx="31" cy="39" r="1.1" fill="#c8b0e0"/>
      </svg>`,
  },
  {
    id: 'cusk-eel',
    name: 'Deep-sea Cusk-eel',
    sci: 'Bassozetus',
    depth: 2450,
    range: '1,500–4,000 m',
    size: 160,
    fact: 'A soft, tapering fish whose fins merge into one long ribbon running around its body. Members of this family have been caught deeper than almost any other fish, right down into the ocean trenches.',
    svg: `
      <svg viewBox="0 0 210 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea cusk-eel">
        <defs><linearGradient id="ck-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a94a0"/><stop offset="1" stop-color="#4a525c"/></linearGradient></defs>
        <path d="M14 44 Q34 32 52 40 Q120 36 184 48 Q194 52 186 58 Q120 56 52 54 Q34 60 14 52 Q8 48 14 44Z" fill="url(#ck-b)" stroke="#2c333a" stroke-width="1.6"/>
        <path d="M52 34 Q120 30 186 48 Q120 60 52 58" fill="none" stroke="#6a7580" stroke-width="1.4" opacity="0.6"/>
        <path d="M18 46 Q28 50 38 46" stroke="#2c333a" stroke-width="1.6" fill="none"/>
        <circle cx="28" cy="42" r="3.6" fill="#0e131a"/><circle cx="29.2" cy="40.8" r="1.2" fill="#bfd0da"/>
      </svg>`,
  },
  {
    id: 'bathocyroe',
    name: 'Comb Jelly',
    sci: 'Bathocyroe fosteri',
    depth: 2560,
    range: '600–2,500 m',
    size: 92,
    fact: 'One of the most common jellies of the deep, it swims by beating eight rows of tiny hair-like combs. As they beat, they scatter light into shimmering, moving rainbows — even though the animal itself makes no colour.',
    svg: `
      <svg viewBox="0 0 110 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comb jelly">
        <defs><radialGradient id="bc-b" cx="0.5" cy="0.45" r="0.55"><stop offset="0" stop-color="#cfe4ec" stop-opacity="0.55"/><stop offset="1" stop-color="#9ac0d0" stop-opacity="0.35"/></radialGradient></defs>
        <path d="M55 12 Q86 20 84 62 Q82 92 55 104 Q28 92 26 62 Q24 20 55 12Z" fill="url(#bc-b)" stroke="#8fb8c8" stroke-width="1.6"/>
        <path d="M55 12 Q40 40 40 104 M55 12 Q70 40 70 104" fill="none" stroke="#8fb8c8" stroke-width="1.4" opacity="0.6"/>
        <g stroke-width="2.6" stroke-linecap="round" opacity="0.9">
          <path d="M34 30 Q30 60 36 96" stroke="#ff8a5a"/><path d="M46 22 Q42 60 48 104" stroke="#ffd84a"/>
          <path d="M64 22 Q68 60 62 104" stroke="#7aff8a"/><path d="M76 30 Q80 60 74 96" stroke="#6ad0ff"/>
        </g>
        <path d="M42 100 Q40 116 34 120 M68 100 Q70 116 76 120" stroke="#9ac0d0" stroke-width="1.4" fill="none" opacity="0.7"/>
      </svg>`,
  },
  {
    id: 'helmet-jelly',
    name: 'Helmet Jellyfish',
    sci: 'Periphylla periphylla',
    depth: 2680,
    range: '1,000–2,700 m',
    size: 110,
    fact: 'A deep-red, helmet-shaped jelly so sensitive to light that sunlight can be deadly to it — so it hides in the dark deep by day. When disturbed it flashes with blue-green bioluminescence.',
    svg: `
      <svg viewBox="0 0 110 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Helmet jellyfish">
        <defs><linearGradient id="hj2-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8283a"/><stop offset="1" stop-color="#5c0c16"/></linearGradient></defs>
        <path d="M55 8 Q80 12 82 48 Q84 74 70 82 Q55 86 40 82 Q26 74 28 48 Q30 12 55 8Z" fill="url(#hj2-b)" stroke="#3a060c" stroke-width="1.8"/>
        <path d="M55 8 Q55 50 55 82 M40 14 Q42 50 46 80 M70 14 Q68 50 64 80" stroke="#8a1826" stroke-width="1.4" fill="none" opacity="0.7"/>
        <g stroke="#d9455a" stroke-width="1.6" stroke-linecap="round" opacity="0.85"><path d="M34 80 L28 122"/><path d="M46 84 L44 126"/><path d="M55 85 L55 128"/><path d="M64 84 L66 126"/><path d="M76 80 L82 122"/></g>
      </svg>`,
  },
  {
    id: 'solmissus',
    name: 'Dinnerplate Jelly',
    sci: 'Solmissus',
    depth: 2900,
    range: '1,000–3,000 m',
    size: 120,
    fact: 'Nicknamed the "dinnerplate jelly," it cruises through the dark holding its tentacles stiffly out ahead like the spokes of a wheel — an unusual hunter that ambushes and eats other jellies.',
    svg: `
      <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dinnerplate jelly">
        <defs><radialGradient id="so-b" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#e0d4ec" stop-opacity="0.55"/><stop offset="1" stop-color="#a898c8" stop-opacity="0.35"/></radialGradient></defs>
        <ellipse cx="75" cy="58" rx="46" ry="30" fill="url(#so-b)" stroke="#8f7fb0" stroke-width="1.8"/>
        <ellipse cx="75" cy="56" rx="26" ry="16" fill="none" stroke="#8f7fb0" stroke-width="1.3" opacity="0.7"/>
        <g stroke="#a898c8" stroke-width="2.4" stroke-linecap="round">
          <path d="M30 52 L4 46"/><path d="M32 62 L6 66"/><path d="M48 40 L42 16"/><path d="M62 36 L58 12"/><path d="M75 34 L75 10"/><path d="M88 36 L92 12"/><path d="M102 40 L108 16"/><path d="M118 52 L146 46"/><path d="M118 62 L144 66"/>
        </g>
      </svg>`,
  },
  {
    id: 'bamboo-coral',
    name: 'Bamboo Coral',
    sci: 'Isididae',
    depth: 3050,
    range: '1,000–4,000 m',
    size: 130,
    fact: 'A deep-sea coral that grows in jointed segments like a stalk of bamboo and can live for thousands of years, laying down rings that record the ocean’s past — a slow-growing forest in the cold and dark.',
    svg: `
      <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bamboo coral">
        <defs><linearGradient id="bmc-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0e6d2"/><stop offset="1" stop-color="#c8a878"/></linearGradient></defs>
        <g stroke="url(#bmc-b)" stroke-width="7" fill="none" stroke-linecap="round">
          <path d="M60 146 L60 40"/><path d="M60 96 Q40 80 30 50"/><path d="M60 76 Q82 62 92 34"/><path d="M60 60 Q46 48 40 26"/>
        </g>
        <g fill="#8a6e48"><circle cx="60" cy="120" r="3.4"/><circle cx="60" cy="92" r="3.4"/><circle cx="60" cy="64" r="3.4"/><circle cx="42" cy="70" r="3"/><circle cx="80" cy="52" r="3"/></g>
        <g fill="#fdfdfa" stroke="#c8a878" stroke-width="1"><circle cx="60" cy="40" r="5"/><circle cx="30" cy="50" r="4.5"/><circle cx="92" cy="34" r="4.5"/><circle cx="40" cy="26" r="4.5"/></g>
      </svg>`,
  },
  {
    id: 'harp-sponge',
    name: 'Harp Sponge',
    sci: 'Chondrocladia lyra',
    depth: 3350,
    range: '3,300–3,500 m',
    size: 130,
    fact: 'A carnivorous sponge shaped like a harp or candelabra. Instead of filtering water, its rows of upright branches are covered in tiny hooks that snag drifting shrimp, which it slowly wraps in membrane and digests.',
    svg: `
      <svg viewBox="0 0 150 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Harp sponge">
        <defs><linearGradient id="hs3-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8ecf0"/><stop offset="1" stop-color="#a8bcc4"/></linearGradient></defs>
        <path d="M20 108 Q75 96 130 108" stroke="#9fb4bc" stroke-width="4" fill="none" stroke-linecap="round"/>
        <g stroke="url(#hs3-b)" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M28 106 L26 30"/><path d="M52 105 L52 22"/><path d="M76 105 L78 18"/><path d="M100 105 L102 22"/><path d="M124 106 L126 30"/>
        </g>
        <g fill="#eef4f6" stroke="#a8bcc4" stroke-width="0.8"><circle cx="26" cy="30" r="4"/><circle cx="52" cy="22" r="4"/><circle cx="78" cy="18" r="4"/><circle cx="102" cy="22" r="4"/><circle cx="126" cy="30" r="4"/></g>
        <g fill="#c8d6dc"><circle cx="27" cy="60" r="2"/><circle cx="52" cy="54" r="2"/><circle cx="77" cy="50" r="2"/><circle cx="101" cy="54" r="2"/><circle cx="125" cy="60" r="2"/></g>
      </svg>`,
  },
  {
    id: 'flabby-whalefish',
    name: 'Flabby Whalefish',
    sci: 'Cetomimidae',
    depth: 3550,
    range: '1,000–4,000 m',
    size: 150,
    fact: 'The loose-skinned, tiny-eyed female looks so unlike the big-eyed male and the larva that scientists once sorted the three into completely different families — until DNA revealed they are one fish at three life stages.',
    svg: `
      <svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flabby whalefish">
        <defs><linearGradient id="fw-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0703a"/><stop offset="1" stop-color="#a03c18"/></linearGradient></defs>
        <path d="M12 46 Q24 32 44 40 Q120 34 172 46 Q188 50 180 58 Q120 66 44 58 Q22 62 12 52 Q8 49 12 46Z" fill="url(#fw-b)" stroke="#5e2010" stroke-width="1.8"/>
        <path d="M12 46 Q26 44 40 44 Q40 40 26 42 Q16 42 12 46Z" fill="#c85828"/>
        <path d="M120 38 Q132 26 146 40Z" fill="#c85828" stroke="#5e2010" stroke-width="1.2"/>
        <path d="M40 48 Q34 54 40 58" stroke="#5e2010" stroke-width="1.8" fill="none"/>
        <circle cx="30" cy="46" r="2.4" fill="#2a0e06"/>
      </svg>`,
  },
  {
    id: 'vent-shrimp',
    name: 'Vent Shrimp',
    sci: 'Rimicaris exoculata',
    depth: 2250,
    range: '2,000–2,600 m',
    size: 100,
    fact: 'Swarms in the thousands over scalding hydrothermal vents. It has no normal eyes — instead a light-sensing patch on its back "sees" the faint glow of the superheated water, keeping it close to the warmth without being cooked.',
    svg: `
      <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vent shrimp">
        <defs><linearGradient id="vsh-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eadfce"/><stop offset="1" stop-color="#c0ac8a"/></linearGradient></defs>
        <path d="M120 30 Q136 22 138 28 M120 36 Q138 34 140 42" stroke="#8a7654" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path d="M26 46 Q34 30 66 34 Q104 36 120 46 Q124 56 112 66 Q100 74 96 60 Q64 66 40 60 Q22 62 20 52 Q20 48 26 46Z" fill="url(#vsh-b)" stroke="#7e6a48" stroke-width="1.6"/>
        <path d="M44 40 Q70 38 100 46 M40 52 Q70 54 96 56" stroke="#8a7654" stroke-width="1.1" fill="none" opacity="0.6"/>
        <g stroke="#9a865e" stroke-width="2" stroke-linecap="round"><path d="M48 58 L44 78"/><path d="M62 60 L60 80"/><path d="M76 60 L78 80"/></g>
        <ellipse cx="90" cy="42" rx="7" ry="4" fill="#ff8a5a" opacity="0.75"/>
      </svg>`,
  },
  {
    id: 'yeti-crab',
    name: 'Yeti Crab',
    sci: 'Kiwa hirsuta',
    depth: 2200,
    range: '2,200–2,600 m',
    size: 120,
    fact: 'A blind, pale crab discovered near hydrothermal vents, its arms covered in silky "fur." It farms bacteria on those hairs and waves its claws through the mineral-rich water to feed its living crop, then eats it.',
    svg: `
      <svg viewBox="0 0 150 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yeti crab">
        <defs><radialGradient id="yc-b" cx="0.5" cy="0.4" r="0.7"><stop offset="0" stop-color="#f4efe6"/><stop offset="1" stop-color="#d0c6b4"/></radialGradient></defs>
        <g stroke="#b8ac96" stroke-width="3" stroke-linecap="round" fill="none"><path d="M56 68 L28 88 M58 76 L30 100 M92 68 L120 88 M90 76 L118 100"/></g>
        <path d="M40 44 Q20 40 12 54 Q26 58 40 56 Q30 66 34 78 Q46 70 48 58Z" fill="url(#yc-b)" stroke="#a89a80" stroke-width="1.6"/>
        <path d="M110 44 Q130 40 138 54 Q124 58 110 56 Q120 66 116 78 Q104 70 102 58Z" fill="url(#yc-b)" stroke="#a89a80" stroke-width="1.6"/>
        <g stroke="#e0d8c8" stroke-width="1.2" opacity="0.8"><path d="M20 48 L14 44 M26 52 L22 46 M124 48 L130 44 M118 52 L122 46"/></g>
        <ellipse cx="75" cy="66" rx="30" ry="26" fill="url(#yc-b)" stroke="#a89a80" stroke-width="2"/>
        <path d="M62 56 Q60 50 64 46 M88 56 Q90 50 86 46" stroke="#b8ac96" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`,
  },

  // Abyssal
  {
    id: 'faceless-cusk',
    name: 'Faceless Cusk',
    sci: 'Typhlonus nasus',
    depth: 4100,
    range: '3,900–5,000 m',
    size: 150,
    fact: 'Rediscovered off Australia in 2017 after more than a century, it has no visible eyes and a mouth tucked underneath, so head-on it appears to have no face at all — just smooth, pale skin.',
    svg: `
      <svg viewBox="0 0 190 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Faceless cusk">
        <defs><linearGradient id="fc-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c8bcae"/><stop offset="1" stop-color="#8f8072"/></linearGradient></defs>
        <path d="M16 44 Q30 26 58 34 Q120 30 174 46 Q184 52 174 58 Q120 62 58 56 Q30 62 16 48 Q10 46 16 44Z" fill="url(#fc-b)" stroke="#6a5e50" stroke-width="1.8"/>
        <path d="M20 46 Q30 56 46 54 Q34 50 26 44Z" fill="#a89a88" opacity="0.7"/>
        <path d="M58 34 Q120 32 172 46 Q120 60 58 56" fill="none" stroke="#a89a88" stroke-width="1.2" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'gummy-squirrel',
    name: 'Gummy Squirrel',
    sci: 'Psychropotes longicauda',
    depth: 4250,
    range: '4,000–6,000 m',
    size: 130,
    fact: 'A big yellow sea cucumber with a "sail" on its back and a long upright tail, it plods across the abyssal plain slurping up the freshest, most nutritious mud off the very top of the seabed.',
    svg: `
      <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gummy squirrel sea cucumber">
        <defs><linearGradient id="gsq2-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2d452"/><stop offset="1" stop-color="#c69a28"/></linearGradient></defs>
        <path d="M22 72 Q28 52 60 50 Q108 48 128 62 Q136 72 124 80 Q80 90 46 84 Q24 84 22 72Z" fill="url(#gsq2-b)" stroke="#8a6a14" stroke-width="2"/>
        <path d="M124 62 Q150 40 148 22 Q134 34 126 56Z" fill="#e8c840" stroke="#8a6a14" stroke-width="1.6"/>
        <path d="M46 50 Q52 32 62 30 Q60 44 58 52 M72 48 Q78 30 88 30 Q84 44 82 52" fill="none" stroke="#d8b830" stroke-width="3" stroke-linecap="round"/>
        <g stroke="#a67e1c" stroke-width="3" stroke-linecap="round"><path d="M40 84 L36 98"/><path d="M62 86 L60 100"/><path d="M86 84 L88 98"/><path d="M108 80 L112 94"/></g>
        <circle cx="34" cy="66" r="2.6" fill="#5c4410"/>
      </svg>`,
  },
  {
    id: 'basket-star',
    name: 'Basket Star',
    sci: 'Gorgonocephalus',
    depth: 4400,
    range: '100–4,500 m',
    size: 130,
    fact: 'A relative of the brittle star whose five arms fork again and again into a living net of thousands of curling tips. At night it raises the whole basket into the current to snare drifting plankton.',
    svg: `
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basket star">
        <defs><radialGradient id="bs3-b" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#e0b088"/><stop offset="1" stop-color="#a8764c"/></radialGradient></defs>
        <g stroke="#8a5e38" stroke-width="2.4" fill="none" stroke-linecap="round">
          <path d="M75 66 Q70 40 60 20 Q64 34 68 50 M60 20 Q52 30 46 24 M60 20 Q66 26 72 22"/>
          <path d="M78 66 Q100 48 124 34 Q108 44 92 56 M124 34 Q126 24 132 26 M124 34 Q120 42 128 44"/>
          <path d="M80 72 Q104 84 126 112 Q110 92 92 78 M126 112 Q134 112 132 120 M126 112 Q118 116 122 122"/>
          <path d="M70 74 Q52 96 30 118 Q48 96 64 80 M30 118 Q22 116 24 124 M30 118 Q38 118 34 124"/>
          <path d="M68 68 Q42 58 18 46 Q38 58 58 66 M18 46 Q14 38 8 42 M18 46 Q24 50 20 54"/>
        </g>
        <circle cx="74" cy="70" r="12" fill="url(#bs3-b)" stroke="#8a5e38" stroke-width="1.8"/>
        <path d="M68 64 L74 70 L80 64 M68 76 L74 70 L80 76" stroke="#6e4826" stroke-width="1.2" fill="none"/>
      </svg>`,
  },
  {
    id: 'relicanthus',
    name: 'Giant Anemone',
    sci: 'Relicanthus daphneae',
    depth: 4600,
    range: '~4,000 m',
    size: 120,
    fact: 'An anemone-like giant with tentacles up to 2 metres long. It anchors to the little dark manganese nodules scattered across the abyssal plain — potato-sized lumps that take millions of years to grow one layer.',
    svg: `
      <svg viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Giant anemone">
        <defs><linearGradient id="re-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8a0b8"/><stop offset="1" stop-color="#8a5e78"/></linearGradient></defs>
        <ellipse cx="65" cy="132" rx="34" ry="12" fill="#3a3038" stroke="#241c22" stroke-width="1.6"/>
        <path d="M50 128 Q48 96 52 76 Q60 66 78 68 Q84 90 82 128Z" fill="url(#re-b)" stroke="#5e3a50" stroke-width="1.6"/>
        <g stroke="#d8a8c8" stroke-width="3" stroke-linecap="round" fill="none">
          <path d="M56 74 Q40 48 22 28"/><path d="M60 70 Q50 42 42 14"/><path d="M65 68 Q65 40 65 10"/><path d="M70 70 Q80 42 88 14"/><path d="M74 74 Q92 48 108 28"/>
          <path d="M52 78 Q30 62 12 52"/><path d="M78 78 Q100 62 118 52"/>
        </g>
      </svg>`,
  },
  {
    id: 'benthocodon',
    name: 'Red Bottom Jelly',
    sci: 'Benthocodon',
    depth: 4750,
    range: '4,000–5,000 m',
    size: 100,
    fact: 'Unusual for a jelly, its bell is a solid, opaque blood-red instead of clear — thought to mask the glow of the bioluminescent food it swallows, so predators can’t spot the light through its stomach.',
    svg: `
      <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Red bottom jelly">
        <defs><radialGradient id="be2-b" cx="0.5" cy="0.4" r="0.6"><stop offset="0" stop-color="#c83040"/><stop offset="1" stop-color="#761018"/></radialGradient></defs>
        <path d="M22 50 Q22 22 60 20 Q98 22 98 50 Q98 62 84 64 Q60 68 36 64 Q22 62 22 50Z" fill="url(#be2-b)" stroke="#4c0a10" stroke-width="1.8"/>
        <ellipse cx="60" cy="48" rx="24" ry="14" fill="#a82030" opacity="0.6"/>
        <g stroke="#8a1420" stroke-width="1.6" stroke-linecap="round" opacity="0.85">
          <path d="M28 62 L24 92"/><path d="M38 66 L36 96"/><path d="M48 67 L48 98"/><path d="M60 68 L60 100"/><path d="M72 67 L72 98"/><path d="M82 66 L84 96"/><path d="M92 62 L96 92"/>
        </g>
      </svg>`,
  },
  {
    id: 'munnopsid',
    name: 'Long-legged Isopod',
    sci: 'Munnopsidae',
    depth: 4900,
    range: '1,000–5,000 m',
    size: 110,
    fact: 'A spidery deep-sea cousin of the pill-bug that leads a double life: it swims upside-down through the water with paddle-shaped legs, then flips over to stalk across the mud on long, stilt-like limbs.',
    svg: `
      <svg viewBox="0 0 150 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Long-legged isopod">
        <defs><linearGradient id="mu-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8c8a8"/><stop offset="1" stop-color="#a08858"/></linearGradient></defs>
        <g stroke="#7e6a44" stroke-width="2.4" stroke-linecap="round" fill="none">
          <path d="M58 54 Q34 40 12 22"/><path d="M60 60 Q36 58 10 54"/><path d="M60 66 Q36 76 12 92"/>
          <path d="M92 54 Q116 40 138 22"/><path d="M90 60 Q114 58 140 54"/><path d="M90 66 Q114 76 138 92"/>
        </g>
        <ellipse cx="75" cy="60" rx="22" ry="16" fill="url(#mu-b)" stroke="#6e5a38" stroke-width="1.8"/>
        <ellipse cx="75" cy="44" rx="12" ry="9" fill="#c0a878" stroke="#6e5a38" stroke-width="1.4"/>
        <circle cx="69" cy="42" r="2.4" fill="#3a2c14"/><circle cx="81" cy="42" r="2.4" fill="#3a2c14"/>
      </svg>`,
  },
  {
    id: 'cirrate-octopus',
    name: 'Blind Octopus',
    sci: 'Cirrothauma murrayi',
    depth: 5050,
    range: '1,500–5,000 m',
    size: 120,
    fact: 'One of the only truly blind octopuses. Living in absolute darkness, it has given up working eyes altogether and drifts on two large fins like a gelatinous parachute, feeling for food with webbed arms.',
    svg: `
      <svg viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blind octopus">
        <defs><radialGradient id="ci-b" cx="0.5" cy="0.35" r="0.7"><stop offset="0" stop-color="#c887a0"/><stop offset="1" stop-color="#8a4e68"/></radialGradient></defs>
        <path d="M30 44 Q6 32 10 56 Q16 72 40 62Z" fill="#b06a86" stroke="#6e3450" stroke-width="1.6"/>
        <path d="M110 44 Q134 32 130 56 Q124 72 100 62Z" fill="#b06a86" stroke="#6e3450" stroke-width="1.6"/>
        <path d="M70 22 Q106 26 106 58 Q106 78 88 84 Q92 100 84 112 Q76 100 74 88 Q70 96 66 88 Q64 100 56 112 Q48 100 52 84 Q34 78 34 58 Q34 26 70 22Z" fill="url(#ci-b)" stroke="#6e3450" stroke-width="1.8"/>
        <path d="M74 88 Q80 100 92 92 M66 88 Q60 100 48 92" fill="#9c5878" opacity="0.6"/>
      </svg>`,
  },
  {
    id: 'brisingid',
    name: 'Deep-sea Sea Star',
    sci: 'Brisingida',
    depth: 5250,
    range: '2,000–6,000 m',
    size: 130,
    fact: 'Unlike the starfish of shallow reefs, it doesn’t crawl after food. It perches on rocks with many long, spiny arms held up into the current, catching drifting particles on thousands of tiny pincers.',
    svg: `
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea sea star">
        <defs><radialGradient id="br-b" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#e0705a"/><stop offset="1" stop-color="#a83a2e"/></radialGradient></defs>
        <g stroke="#8a2c22" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M75 66 L64 8"/><path d="M75 66 L110 14"/><path d="M78 70 L138 46"/><path d="M80 74 L134 104"/><path d="M78 78 L104 138"/><path d="M72 78 L58 140"/><path d="M70 74 L16 106"/><path d="M70 70 L10 50"/><path d="M72 66 L36 12"/>
        </g>
        <g stroke="#c85040" stroke-width="1.4" opacity="0.7"><path d="M64 8 l-6 4 M110 14 l4 6 M138 46 l4 -5 M134 104 l6 3 M104 138 l-5 5 M58 140 l5 4 M16 106 l-6 3 M10 50 l-5 -4 M36 12 l4 -6"/></g>
        <circle cx="75" cy="72" r="13" fill="url(#br-b)" stroke="#8a2c22" stroke-width="1.8"/>
      </svg>`,
  },
  {
    id: 'graneledone',
    name: 'Deep-sea Octopus',
    sci: 'Graneledone',
    depth: 5450,
    range: '1,000–5,000 m',
    size: 120,
    fact: 'A warty, pale-purple octopus of the cold deep. A female of a close relative was watched guarding her eggs on a rocky ledge for four and a half years — the longest brooding of any known animal.',
    svg: `
      <svg viewBox="0 0 140 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea octopus">
        <defs><radialGradient id="gra-b" cx="0.5" cy="0.35" r="0.7"><stop offset="0" stop-color="#a888c0"/><stop offset="1" stop-color="#6e4e88"/></radialGradient></defs>
        <path d="M70 14 Q108 20 108 54 Q108 72 92 78 Q98 96 90 110 Q82 98 80 84 Q74 94 70 84 Q66 94 60 84 Q58 98 50 110 Q42 96 48 78 Q32 72 32 54 Q32 20 70 14Z" fill="url(#gra-b)" stroke="#4a3060" stroke-width="1.8"/>
        <g fill="#8a6aa8" opacity="0.7"><circle cx="56" cy="40" r="3"/><circle cx="72" cy="34" r="3"/><circle cx="86" cy="46" r="3"/><circle cx="64" cy="54" r="3"/><circle cx="84" cy="60" r="3"/></g>
        <circle cx="56" cy="52" r="5.5" fill="#2a1a3a"/><circle cx="57.4" cy="50.4" r="1.6" fill="#d8c0e8"/>
        <circle cx="84" cy="52" r="5.5" fill="#2a1a3a"/><circle cx="85.4" cy="50.4" r="1.6" fill="#d8c0e8"/>
      </svg>`,
  },
  {
    id: 'alicella',
    name: 'Supergiant Amphipod',
    sci: 'Alicella gigantea',
    depth: 5600,
    range: '3,000–7,000 m',
    size: 110,
    fact: 'The largest amphipod ever found, reaching 34 cm — a true "supergiant" among cousins usually smaller than a grain of rice. It roams the deep scavenging carcasses, growing huge where food is rare but competition is rarer.',
    svg: `
      <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Supergiant amphipod">
        <defs><linearGradient id="al-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eadfc8"/><stop offset="1" stop-color="#b8a074"/></linearGradient></defs>
        <path d="M124 30 Q142 20 148 26 M124 36 Q144 32 150 40" stroke="#7e6a44" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M24 46 Q34 26 68 30 Q112 32 126 44 Q130 58 116 70 Q104 80 98 64 Q64 70 38 62 Q18 62 20 50 Q20 47 24 46Z" fill="url(#al-b)" stroke="#7c6844" stroke-width="1.8"/>
        <path d="M40 40 Q70 38 104 46 M36 52 Q70 54 100 58 M34 60 Q64 64 96 66" stroke="#7c6844" stroke-width="1.1" fill="none" opacity="0.6"/>
        <g stroke="#8e7a52" stroke-width="2.4" stroke-linecap="round"><path d="M46 62 L40 84"/><path d="M62 64 L58 88"/><path d="M78 64 L78 90"/><path d="M94 62 L98 86"/></g>
        <circle cx="112" cy="46" r="3.6" fill="#3c2e18"/>
      </svg>`,
  },

  // Hadal
  {
    id: 'peniagone',
    name: 'Swimming Sea Cucumber',
    sci: 'Peniagone',
    depth: 6300,
    range: '5,000–9,500 m',
    size: 110,
    side: 'left',
    fact: 'Many of the deepest sea cucumbers can swim — this one pushes off the mud and undulates a fleshy veil to rise and drift, letting it flee disturbances and ride weak currents to the next patch of food.',
    svg: `
      <svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Swimming sea cucumber">
        <defs><radialGradient id="pe-b" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#e8b8c4" stop-opacity="0.9"/><stop offset="1" stop-color="#b87688" stop-opacity="0.8"/></radialGradient></defs>
        <path d="M28 60 Q28 38 62 36 Q108 34 122 52 Q128 66 114 74 Q78 84 50 78 Q28 76 28 60Z" fill="url(#pe-b)" stroke="#8a4e5e" stroke-width="1.8"/>
        <path d="M62 36 Q70 16 92 22 Q112 30 118 48 Q90 40 62 46Z" fill="#f0c6d0" stroke="#8a4e5e" stroke-width="1.4" opacity="0.85"/>
        <path d="M40 62 Q64 58 100 66" stroke="#a03a52" stroke-width="2.6" fill="none" opacity="0.6"/>
        <g stroke="#c07a8c" stroke-width="2.4" stroke-linecap="round"><path d="M44 76 L40 92"/><path d="M66 78 L64 94"/><path d="M92 74 L94 90"/></g>
      </svg>`,
  },
  {
    id: 'kermadec-snailfish',
    name: 'Kermadec Snailfish',
    sci: 'Notoliparis kermadecensis',
    depth: 7000,
    range: '6,000–7,500 m',
    size: 120,
    side: 'right',
    fact: 'The snailfish of the Kermadec Trench near New Zealand — a whole different trench from the Mariana, yet home to its own pale, jelly-bodied snailfish. Across the world’s deepest trenches, it is snailfish that rule.',
    svg: `
      <svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kermadec snailfish">
        <defs><linearGradient id="ks-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8dbe0" stop-opacity="0.95"/><stop offset="1" stop-color="#c0aab4" stop-opacity="0.82"/></linearGradient></defs>
        <path d="M22 46 Q38 32 62 36 Q122 32 150 54 Q152 60 144 64 Q120 76 62 64 Q32 68 20 60 Q12 52 22 46Z" fill="url(#ks-b)" stroke="#9a8490" stroke-width="1.8"/>
        <path d="M98 36 Q122 26 140 38 Q122 44 102 44Z" fill="#ddccd4" stroke="#9a8490" stroke-width="1.2" opacity="0.85"/>
        <path d="M98 62 Q120 74 138 64 Q120 58 102 58Z" fill="#ddccd4" stroke="#9a8490" stroke-width="1.2" opacity="0.8"/>
        <path d="M20 54 Q36 52 46 54" stroke="#ac96a2" stroke-width="1.4" fill="none"/>
        <circle cx="40" cy="48" r="3.4" fill="#5a4650"/><circle cx="41" cy="46.8" r="1.1" fill="#fff" opacity="0.85"/>
      </svg>`,
  },
  {
    id: 'benthesicymus',
    name: 'Deep-sea Shrimp',
    sci: 'Benthesicymus',
    depth: 7600,
    range: '4,000–8,000 m',
    size: 120,
    side: 'left',
    fact: 'A red-shelled shrimp that scavenges among the deepest trenches. Red is the first colour to vanish in the deep, so in the lightless water its bright shell actually reads as invisible black — perfect camouflage.',
    svg: `
      <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deep-sea shrimp">
        <defs><linearGradient id="bth-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8564e"/><stop offset="1" stop-color="#9c2c26"/></linearGradient></defs>
        <path d="M124 22 Q150 10 156 16 M124 28 Q152 22 158 32 M124 34 Q150 34 156 44" stroke="#7a2420" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M28 52 Q38 30 72 34 Q114 36 128 50 Q132 66 116 78 Q100 88 96 70 Q60 76 40 66 Q20 66 22 54 Q22 50 28 52Z" fill="url(#bth-b)" stroke="#6a1a16" stroke-width="1.8"/>
        <path d="M42 46 Q72 44 106 52 M38 58 Q70 60 100 62" stroke="#7a2420" stroke-width="1.1" fill="none" opacity="0.6"/>
        <g stroke="#b83c34" stroke-width="2.2" stroke-linecap="round"><path d="M46 66 L40 88"/><path d="M60 68 L56 90"/><path d="M74 68 L74 92"/><path d="M88 66 L92 88"/></g>
        <path d="M100 70 Q108 84 118 88" stroke="#c04038" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <circle cx="112" cy="44" r="3.6" fill="#3c100c"/>
      </svg>`,
  },
  {
    id: 'scale-worm',
    name: 'Hadal Scale Worm',
    sci: 'Polynoidae',
    depth: 8200,
    range: '6,000–8,500 m',
    size: 100,
    side: 'right',
    fact: 'Armoured along its back with overlapping plates like roof tiles and fringed with stiff bristles, this bristle worm hunts and scavenges on the trench floor — among the deepest predators known on Earth.',
    svg: `
      <svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hadal scale worm">
        <defs><linearGradient id="scw-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8a878"/><stop offset="1" stop-color="#8a6a44"/></linearGradient></defs>
        <path d="M18 46 Q30 36 48 40 Q100 36 140 46 Q148 50 140 54 Q100 58 48 54 Q30 58 18 50 Q12 48 18 46Z" fill="#7a6042" stroke="#4e3c24" stroke-width="1.4"/>
        <g fill="url(#scw-b)" stroke="#5e4a2c" stroke-width="1.2">
          <ellipse cx="42" cy="42" rx="12" ry="9"/><ellipse cx="62" cy="41" rx="12" ry="9"/><ellipse cx="82" cy="41" rx="12" ry="9"/><ellipse cx="102" cy="42" rx="12" ry="9"/><ellipse cx="122" cy="44" rx="11" ry="8"/>
        </g>
        <g stroke="#9a825a" stroke-width="1.4" stroke-linecap="round" opacity="0.8"><path d="M42 50 L40 62 M62 50 L62 64 M82 50 L82 64 M102 50 L104 62 M122 50 L126 60 M42 34 L40 24 M62 33 L62 22 M82 33 L82 22 M102 34 L104 24"/></g>
        <path d="M18 44 Q10 40 4 42 M18 50 Q10 54 4 52" stroke="#7a6042" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <circle cx="26" cy="44" r="2.4" fill="#2e2214"/>
      </svg>`,
  },
];
