const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'public', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function generateSvg({ title, accent, bg, _highlight, frameIndex = 0 }) {
  let innerContent = '';

  if (title === 'Artemis Observability') {
    const spanWidths = [
      [320, 240, 180, 90],
      [360, 280, 220, 140],
      [380, 310, 260, 180],
    ][frameIndex % 3];

    const inspectX = [420, 480, 520][frameIndex % 3];
    const latencyVal = ['18.4ms', '24.1ms', '12.8ms'][frameIndex % 3];
    const statusText = ['P99: 18.4ms | 40M req/day', 'P99: 24.1ms | Latency spike detected', 'P99: 12.8ms | Spans reconciled'][frameIndex % 3];

    innerContent = `
      <rect x="24" y="60" width="220" height="416" fill="#141416" stroke="#252528" stroke-width="1" rx="2" />
      <text x="36" y="88" fill="#88888E" font-family="'Plus Jakarta Sans', monospace" font-size="10" letter-spacing="1">SERVICE SPANS</text>
      <text x="36" y="118" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600">checkout.api</text>
      <text x="210" y="118" fill="${accent}" font-family="monospace" font-size="11" text-anchor="end">${latencyVal}</text>
      <line x1="36" y1="134" x2="232" y2="134" stroke="#252528" stroke-width="1" />
      <text x="48" y="156" fill="#D0D0D5" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">├── auth.verify</text>
      <text x="210" y="156" fill="#88888E" font-family="monospace" font-size="10" text-anchor="end">2.1ms</text>
      <text x="48" y="184" fill="#D0D0D5" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">├── inventory.reserve</text>
      <text x="210" y="184" fill="#88888E" font-family="monospace" font-size="10" text-anchor="end">8.7ms</text>
      <text x="48" y="212" fill="#D0D0D5" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">└── payment.charge</text>
      <text x="210" y="212" fill="${accent}" font-family="monospace" font-size="10" text-anchor="end">7.6ms</text>
      <rect x="36" y="240" width="196" height="60" fill="#1C1C20" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="46" y="260" fill="#88888E" font-family="monospace" font-size="9">TRACE_ID: #8f3b-9a1c</text>
      <text x="46" y="278" fill="#FFFFFF" font-family="monospace" font-size="10">status: 200 OK (gRPC)</text>
      <text x="46" y="292" fill="${accent}" font-family="monospace" font-size="9">sampled: 100%</text>

      <rect x="260" y="60" width="516" height="416" fill="#141416" stroke="#252528" stroke-width="1" rx="2" />
      <text x="280" y="90" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">Flamegraph Execution</text>
      <text x="756" y="90" fill="${accent}" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" text-anchor="end" font-weight="500">${statusText}</text>
      <line x1="260" y1="106" x2="776" y2="106" stroke="#252528" stroke-width="1" />
      <line x1="280" y1="120" x2="280" y2="440" stroke="#1F1F24" stroke-dasharray="2 4" stroke-width="1" />
      <line x1="420" y1="120" x2="420" y2="440" stroke="#1F1F24" stroke-dasharray="2 4" stroke-width="1" />
      <line x1="560" y1="120" x2="560" y2="440" stroke="#1F1F24" stroke-dasharray="2 4" stroke-width="1" />
      <line x1="700" y1="120" x2="700" y2="440" stroke="#1F1F24" stroke-dasharray="2 4" stroke-width="1" />
      <text x="280" y="132" fill="#66666E" font-family="monospace" font-size="9">0ms</text>
      <text x="420" y="132" fill="#66666E" font-family="monospace" font-size="9">5ms</text>
      <text x="560" y="132" fill="#66666E" font-family="monospace" font-size="9">10ms</text>
      <text x="700" y="132" fill="#66666E" font-family="monospace" font-size="9">15ms</text>
      <rect x="280" y="150" width="${spanWidths[0]}" height="26" fill="${accent}" rx="2" />
      <text x="290" y="167" fill="#FFFFFF" font-family="'Plus Jakarta Sans', monospace" font-size="11" font-weight="600">checkout.handler (root)</text>
      <rect x="300" y="186" width="${spanWidths[1]}" height="26" fill="#2E2428" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="310" y="203" fill="#E8D2D5" font-family="'Plus Jakarta Sans', monospace" font-size="11">rpc: auth.validate_token</text>
      <rect x="380" y="222" width="${spanWidths[2]}" height="26" fill="#2E2428" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="390" y="239" fill="#E8D2D5" font-family="'Plus Jakarta Sans', monospace" font-size="11">db: inventory_lock</text>
      <rect x="490" y="258" width="${spanWidths[3]}" height="26" fill="${accent}" rx="2" />
      <text x="500" y="275" fill="#FFFFFF" font-family="'Plus Jakarta Sans', monospace" font-size="11">stripe.v1.charge</text>
      <line x1="${inspectX}" y1="130" x2="${inspectX}" y2="430" stroke="#FF5757" stroke-width="1.5" />
      <circle cx="${inspectX}" cy="130" r="4" fill="#FF5757" />
      <rect x="${inspectX - 45}" y="310" width="90" height="42" fill="#251216" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="${inspectX}" y="328" fill="#FFFFFF" font-family="monospace" font-size="9" text-anchor="middle">CURSOR: ${inspectX - 280}μs</text>
      <text x="${inspectX}" y="342" fill="#FF8888" font-family="monospace" font-size="9" text-anchor="middle">CPU: 4.2%</text>
      <path d="M 280 430 L 310 400 L 350 420 L 400 380 L 440 410 L 490 370 L 530 415 L 580 360 L 630 400 L 680 410 L 730 430 Z" fill="${accent}" fill-opacity="0.25" stroke="${accent}" stroke-width="1.5" />
    `;
  } else if (title === 'Verdant Runtime') {
    const packets = ['1,420,800', '1,890,240', '2,100,500'][frameIndex % 3];
    const memUsage = ['48.2 MB', '52.6 MB', '46.1 MB'][frameIndex % 3];
    const nodeState = ['SYNCING', 'CONSENSUS_REACHED', 'STREAMING'][frameIndex % 3];

    innerContent = `
      <rect x="24" y="60" width="752" height="64" fill="#121A16" stroke="#1D3B32" stroke-width="1" rx="2" />
      <text x="44" y="96" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600">Reactive WebAssembly Pipeline</text>
      <text x="44" y="112" fill="#78A089" font-family="monospace" font-size="10">Zero-copy Ring Buffer · WASM SIMD Enabled</text>
      <text x="560" y="88" fill="#889E92" font-family="monospace" font-size="10">THROUGHPUT</text>
      <text x="560" y="108" fill="#A7F3D0" font-family="monospace" font-size="13" font-weight="600">${packets} msg/s</text>
      <text x="700" y="88" fill="#889E92" font-family="monospace" font-size="10">RING BUFFER</text>
      <text x="700" y="108" fill="#FFFFFF" font-family="monospace" font-size="13" font-weight="600">${memUsage}</text>
      <rect x="24" y="140" width="480" height="336" fill="#0E1612" stroke="#1D3B32" stroke-width="1" rx="2" />
      <text x="44" y="168" fill="#A7F3D0" font-family="monospace" font-size="11" letter-spacing="1">EVENT BUS DISPATCH GRAPH</text>
      <circle cx="90" cy="250" r="30" fill="#172A22" stroke="${accent}" stroke-width="2" />
      <text x="90" y="254" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" text-anchor="middle">Ingest</text>
      <circle cx="250" cy="200" r="34" fill="#1D3B32" stroke="#34D399" stroke-width="2" />
      <text x="250" y="202" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" text-anchor="middle">WASM.Core</text>
      <text x="250" y="216" fill="#A7F3D0" font-family="monospace" font-size="8" text-anchor="middle">${nodeState}</text>
      <circle cx="250" cy="320" r="28" fill="#172A22" stroke="${accent}" stroke-width="1.5" />
      <text x="250" y="324" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" text-anchor="middle">Filter</text>
      <circle cx="410" cy="250" r="30" fill="#172A22" stroke="${accent}" stroke-width="2" />
      <text x="410" y="254" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" text-anchor="middle">Egress</text>
      <line x1="120" y1="240" x2="216" y2="205" stroke="#34D399" stroke-width="2" stroke-dasharray="4 4" />
      <line x1="120" y1="260" x2="222" y2="310" stroke="${accent}" stroke-width="1.5" />
      <line x1="284" y1="205" x2="380" y2="240" stroke="#34D399" stroke-width="2" stroke-dasharray="4 4" />
      <line x1="278" y1="315" x2="380" y2="260" stroke="${accent}" stroke-width="1.5" />
      <circle cx="${[160, 250, 340][frameIndex % 3]}" cy="${[220, 200, 220][frameIndex % 3]}" r="5" fill="#34D399" />
      <rect x="520" y="140" width="256" height="336" fill="#0B110E" stroke="#1D3B32" stroke-width="1" rx="2" />
      <text x="536" y="168" fill="#6E8E7E" font-family="monospace" font-size="10">RUNTIME LOGS</text>
      <text x="536" y="200" fill="#88D4A8" font-family="monospace" font-size="10">> wasm_vm_init(0x7ff0)</text>
      <text x="536" y="222" fill="#88D4A8" font-family="monospace" font-size="10">> ring_alloc: 64MB ok</text>
      <text x="536" y="244" fill="#FFFFFF" font-family="monospace" font-size="10">> sub: telemetry.events</text>
      <text x="536" y="266" fill="#88D4A8" font-family="monospace" font-size="10">> zero_copy: active</text>
      <text x="536" y="288" fill="#FCD34D" font-family="monospace" font-size="10">> jitter: 0.14ms</text>
      <text x="536" y="310" fill="#34D399" font-family="monospace" font-size="10">> frame: #${frameIndex + 1} synced</text>
      <text x="536" y="332" fill="#88D4A8" font-family="monospace" font-size="10">> gc_pause_time: 0.00ms</text>
    `;
  } else if (title === 'Cobalt Protocol') {
    const roundNumber = 1042 + frameIndex;
    const votes = ['5/5 ACKs', '5/5 ACKs', 'QUORUM OK'][frameIndex % 3];
    const logHead = ['0x8a91..cf3', '0x9b42..e10', '0xcc19..a88'][frameIndex % 3];

    innerContent = `
      <rect x="24" y="60" width="752" height="52" fill="#0F1722" stroke="#1B2A41" stroke-width="1" rx="2" />
      <text x="44" y="92" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">Raft Consensus Matrix · Multi-Region</text>
      <text x="450" y="92" fill="#93C5FD" font-family="monospace" font-size="11">EPOCH: #${roundNumber}</text>
      <text x="610" y="92" fill="#38BDF8" font-family="monospace" font-size="11">COMMIT: ${votes}</text>
      <rect x="24" y="128" width="752" height="180" fill="#0C131D" stroke="#1B2A41" stroke-width="1" rx="2" />
      <text x="44" y="156" fill="#64748B" font-family="monospace" font-size="10" letter-spacing="1">DISTRIBUTED REPLICATION ROUNDS</text>
      <text x="44" y="190" fill="#38BDF8" font-family="monospace" font-size="10">us-east (L)</text>
      <rect x="130" y="176" width="100" height="22" fill="#1B2A41" stroke="#38BDF8" stroke-width="1" rx="2" />
      <text x="180" y="191" fill="#FFFFFF" font-family="monospace" font-size="9" text-anchor="middle">Entry #1040</text>
      <rect x="240" y="176" width="100" height="22" fill="#1B2A41" stroke="#38BDF8" stroke-width="1" rx="2" />
      <text x="290" y="191" fill="#FFFFFF" font-family="monospace" font-size="9" text-anchor="middle">Entry #1041</text>
      <rect x="350" y="176" width="110" height="22" fill="#253E63" stroke="#60A5FA" stroke-width="1.5" rx="2" />
      <text x="405" y="191" fill="#FFFFFF" font-family="monospace" font-size="9" text-anchor="middle" font-weight="bold">Entry #${roundNumber}</text>
      <rect x="470" y="176" width="90" height="22" fill="#131C28" stroke="#1B2A41" stroke-dasharray="2 2" rx="2" />
      <text x="515" y="191" fill="#64748B" font-family="monospace" font-size="9" text-anchor="middle">Pending...</text>
      <text x="44" y="228" fill="#94A3B8" font-family="monospace" font-size="10">eu-west (F)</text>
      <rect x="130" y="214" width="100" height="22" fill="#141E2B" rx="2" />
      <rect x="240" y="214" width="100" height="22" fill="#141E2B" rx="2" />
      <rect x="350" y="214" width="110" height="22" fill="#1B2A41" stroke="#38BDF8" stroke-width="1" rx="2" />
      <text x="405" y="229" fill="#93C5FD" font-family="monospace" font-size="9" text-anchor="middle">Replicated</text>
      <text x="44" y="266" fill="#94A3B8" font-family="monospace" font-size="10">ap-south (F)</text>
      <rect x="130" y="252" width="100" height="22" fill="#141E2B" rx="2" />
      <rect x="240" y="252" width="100" height="22" fill="#141E2B" rx="2" />
      <rect x="350" y="252" width="110" height="22" fill="#1B2A41" stroke="#38BDF8" stroke-width="1" rx="2" />
      <text x="405" y="267" fill="#93C5FD" font-family="monospace" font-size="9" text-anchor="middle">Replicated</text>
      <rect x="24" y="324" width="370" height="152" fill="#0C131D" stroke="#1B2A41" stroke-width="1" rx="2" />
      <text x="44" y="350" fill="#94A3B8" font-family="monospace" font-size="10">MERKLE TREE ROOT HASH</text>
      <text x="44" y="376" fill="#38BDF8" font-family="monospace" font-size="12">${logHead}</text>
      <text x="44" y="404" fill="#64748B" font-family="monospace" font-size="9">Divergence check: 0 diffs found</text>
      <text x="44" y="424" fill="#34D399" font-family="monospace" font-size="9">Cross-region sync latency: 14.2ms</text>
      <text x="44" y="444" fill="#94A3B8" font-family="monospace" font-size="9">Quorum timeout setting: 150ms</text>
      <rect x="406" y="324" width="370" height="152" fill="#0C131D" stroke="#1B2A41" stroke-width="1" rx="2" />
      <text x="426" y="350" fill="#94A3B8" font-family="monospace" font-size="10">WEBSOCKET CLIENT BROADCAST</text>
      <text x="426" y="376" fill="#F1F5F9" font-family="monospace" font-size="10">ws://ledger-cluster.internal/sub</text>
      <text x="426" y="400" fill="#38BDF8" font-family="monospace" font-size="9">> BROADCAST block_commit: hash=${logHead.slice(0, 8)}</text>
      <text x="426" y="420" fill="#64748B" font-family="monospace" font-size="9">> client_count: 1,840 connected</text>
      <text x="426" y="440" fill="#34D399" font-family="monospace" font-size="9">> heartbeat: healthy (ack in 1.1ms)</text>
    `;
  } else if (title === 'Aurelia Synthesis') {
    const weightVal = [350, 600, 850][frameIndex % 3];
    const slantVal = [0, -8, -14][frameIndex % 3];
    const optVal = [16, 36, 72][frameIndex % 3];
    const handleY = [240, 210, 180][frameIndex % 3];

    innerContent = `
      <rect x="24" y="60" width="752" height="48" fill="#17130A" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="44" y="90" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">Aurelia Variable Glyph Interpolation Studio</text>
      <text x="440" y="90" fill="#FCD34D" font-family="monospace" font-size="10">GLYPH: U+0041 ('A')</text>
      <text x="620" y="90" fill="#FDE68A" font-family="monospace" font-size="10">NODES: 16 BEZIER PTS</text>
      <rect x="24" y="120" width="510" height="356" fill="#120E06" stroke="${accent}" stroke-width="1" rx="2" />
      <line x1="24" y1="360" x2="534" y2="360" stroke="#2B210B" stroke-width="1" />
      <line x1="24" y1="200" x2="534" y2="200" stroke="#2B210B" stroke-dasharray="2 4" stroke-width="1" />
      <line x1="24" y1="440" x2="534" y2="440" stroke="${accent}" stroke-width="1" />
      <text x="40" y="434" fill="#D97706" font-family="monospace" font-size="9">BASELINE 0</text>
      <text x="40" y="354" fill="#D97706" font-family="monospace" font-size="9">X-HEIGHT 500</text>
      <text x="40" y="194" fill="#D97706" font-family="monospace" font-size="9">CAP-HEIGHT 720</text>
      <path d="M 180 430 L 260 ${handleY} L 340 430 L 300 430 L 285 380 L 235 380 L 220 430 Z M 245 345 L 275 345 L 260 280 Z" 
            fill="#FEF3C7" fill-opacity="0.15" stroke="#FBBF24" stroke-width="${(weightVal / 200).toFixed(1)}" />
      <circle cx="260" cy="${handleY}" r="5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
      <line x1="220" y1="${handleY + 30}" x2="260" y2="${handleY}" stroke="#F59E0B" stroke-dasharray="2 2" stroke-width="1" />
      <line x1="300" y1="${handleY + 30}" x2="260" y2="${handleY}" stroke="#F59E0B" stroke-dasharray="2 2" stroke-width="1" />
      <rect x="215" y="${handleY + 25}" width="10" height="10" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1" />
      <rect x="295" y="${handleY + 25}" width="10" height="10" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1" />
      <rect x="548" y="120" width="228" height="356" fill="#141007" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="568" y="152" fill="#F59E0B" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" letter-spacing="1">AXIS TUNING</text>
      <text x="568" y="184" fill="#FDE68A" font-family="monospace" font-size="10">wght (Weight): ${weightVal}</text>
      <rect x="568" y="196" width="188" height="6" fill="#2B1F08" rx="2" />
      <rect x="568" y="196" width="${(weightVal / 900) * 188}" height="6" fill="#F59E0B" rx="2" />
      <text x="568" y="234" fill="#FDE68A" font-family="monospace" font-size="10">slnt (Slant): ${slantVal}°</text>
      <rect x="568" y="246" width="188" height="6" fill="#2B1F08" rx="2" />
      <rect x="568" y="246" width="${(Math.abs(slantVal) / 20) * 188}" height="6" fill="#F59E0B" rx="2" />
      <text x="568" y="284" fill="#FDE68A" font-family="monospace" font-size="10">opsz (Optical): ${optVal}pt</text>
      <rect x="568" y="296" width="188" height="6" fill="#2B1F08" rx="2" />
      <rect x="568" y="296" width="${(optVal / 72) * 188}" height="6" fill="#F59E0B" rx="2" />
      <text x="568" y="340" fill="#B45309" font-family="monospace" font-size="9">EXPORT FORMAT</text>
      <rect x="568" y="352" width="188" height="32" fill="#241906" stroke="${accent}" stroke-width="1" rx="2" />
      <text x="580" y="372" fill="#FFFFFF" font-family="monospace" font-size="10">WOFF2 + OTF CFF2</text>
      <text x="568" y="416" fill="#B45309" font-family="monospace" font-size="9">CANVAS RENDER</text>
      <text x="568" y="432" fill="#34D399" font-family="monospace" font-size="10">FPS: 60.0 (WebGPU)</text>
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="500" fill="${bg}" rx="4" />
  <rect x="0.5" y="0.5" width="799" height="499" rx="3.5" stroke="${accent}" stroke-width="1" stroke-opacity="0.9" />
  <rect x="0" y="0" width="800" height="42" fill="#0D0D10" rx="4 4 0 0" />
  <line x1="0" y1="42" x2="800" y2="42" stroke="#252528" stroke-width="1" />
  <circle cx="24" cy="21" r="4.5" fill="#3A3A40" />
  <circle cx="40" cy="21" r="4.5" fill="#3A3A40" />
  <circle cx="56" cy="21" r="4.5" fill="#3A3A40" />
  <rect x="180" y="10" width="440" height="22" fill="#18181D" rx="2" stroke="#2B2B32" stroke-width="1" />
  <text x="400" y="25" fill="#8E8E98" font-family="'Plus Jakarta Sans', monospace, sans-serif" font-size="10" text-anchor="middle" letter-spacing="0.5">${title.toLowerCase().replace(/\\s+/g, '-')}.local</text>
  <rect x="710" y="12" width="66" height="18" fill="${accent}" fill-opacity="0.25" stroke="${accent}" stroke-width="1" rx="2" />
  <text x="743" y="24" fill="#FFFFFF" font-family="monospace" font-size="9" font-weight="600" text-anchor="middle">ACTIVE</text>
  ${innerContent}
</svg>`;
}

const projects = [
  {
    key: 'artemis',
    title: 'Artemis Observability',
    accent: '#7A1E2B', // Deep Burgundy
    bg: '#0F0E10',
    colorHex: '0x7A1E2B',
    filterSpec: "[0:v]drawgrid=width=100:height=100:thickness=1:color=0x222226@0.5[g];[g]drawbox=x=30:y=70:w=220:h=400:color=0x1C1C20:t=fill[b1];[b1]drawbox=x=270:y=70:w=500:h=400:color=0x18181C:t=fill[b2];[b2]drawbox=x='290+mod(t*60,180)':y=140:w=140:h=26:color=0x7A1E2B:t=fill[b3];[b3]drawbox=x=320:y=180:w=260:h=26:color=0x7A1E2B@0.4:t=fill[b4];[b4]drawbox=x='360+sin(t*3)*30':y=220:w=160:h=26:color=0x7A1E2B:t=fill[b5];[b5]drawbox=x='280+mod(t*120,480)':y=70:w=2:h=400:color=0xFF5555:t=fill"
  },
  {
    key: 'verdant',
    title: 'Verdant Runtime',
    accent: '#1D3B32', // Dark Forest Green
    bg: '#0A0F0D',
    colorHex: '0x1D3B32',
    filterSpec: "[0:v]drawgrid=width=80:height=80:thickness=1:color=0x172820@0.5[g];[g]drawbox=x=30:y=70:w=480:h=400:color=0x0E1612:t=fill[b1];[b1]drawbox=x=530:y=70:w=240:h=400:color=0x0B110E:t=fill[b2];[b2]drawbox=x='100+mod(t*80,300)':y='180+sin(t*4)*40':w=12:h=12:color=0x34D399:t=fill[b3];[b3]drawbox=x='140+mod(t*100,280)':y='260+cos(t*3)*30':w=10:h=10:color=0x10B981:t=fill[b4];[b4]drawbox=x=50:y='120+mod(t*40,300)':w=220:h=2:color=0x34D399@0.4:t=fill"
  },
  {
    key: 'cobalt',
    title: 'Cobalt Protocol',
    accent: '#1B2A41', // Ink Navy
    bg: '#080E16',
    colorHex: '0x1B2A41',
    filterSpec: "[0:v]drawgrid=width=100:height=100:thickness=1:color=0x141E2B@0.5[g];[g]drawbox=x=30:y=70:w=740:h=200:color=0x0C131D:t=fill[b1];[b1]drawbox=x=30:y=290:w=360:h=180:color=0x0C131D:t=fill[b2];[b2]drawbox=x=410:y=290:w=360:h=180:color=0x0C131D:t=fill[b3];[b3]drawbox=x='140+mod(t*110,480)':y=130:w=90:h=24:color=0x38BDF8:t=fill[b4];[b4]drawbox=x='140+mod(t*90,440)':y=170:w=90:h=24:color=0x1B2A41:t=fill[b5];[b5]drawbox=x='50+mod(t*60,300)':y=350:w=200:h=2:color=0x38BDF8@0.5:t=fill"
  },
  {
    key: 'aurelia',
    title: 'Aurelia Synthesis',
    accent: '#9E6E16', // Mustard / Amber Gold
    bg: '#141007',
    colorHex: '0x9E6E16',
    filterSpec: "[0:v]drawgrid=width=80:height=80:thickness=1:color=0x261C08@0.5[g];[g]drawbox=x=30:y=70:w=500:h=400:color=0x120E06:t=fill[b1];[b1]drawbox=x=550:y=70:w=220:h=400:color=0x141007:t=fill[b2];[b2]drawbox=x='200+sin(t*2)*50':y='160+cos(t*3)*30':w=14:h=14:color=0xF59E0B:t=fill[b3];[b3]drawbox=x='280-sin(t*2)*50':y='160+sin(t*3)*30':w=14:h=14:color=0xFBBF24:t=fill[b4];[b4]drawbox=x=570:y='200+mod(t*50,220)':w=180:h=8:color=0x9E6E16:t=fill"
  }
];

// Generate SVGs
for (const p of projects) {
  const staticSvg = generateSvg({
    title: p.title,
    accent: p.accent,
    bg: p.bg,
    frameIndex: 0
  });
  fs.writeFileSync(path.join(outDir, `${p.key}-static.svg`), staticSvg);

  for (let f = 1; f <= 3; f++) {
    const frameSvg = generateSvg({
      title: p.title,
      accent: p.accent,
      bg: p.bg,
      frameIndex: f
    });
    fs.writeFileSync(path.join(outDir, `${p.key}-frame${f}.svg`), frameSvg);
  }
}

// Generate MP4 videos with ffmpeg
for (const p of projects) {
  const videoPath = path.join(outDir, `${p.key}-hover.mp4`);
  const cmd = `ffmpeg -y -f lavfi -i "color=c=${p.colorHex}:s=800x500:d=4:r=30" -filter_complex "${p.filterSpec}" -c:v libx264 -pix_fmt yuv420p -t 4 "${videoPath}"`;
  try {
    execSync(cmd, { stdio: 'ignore' });
    console.log(`Generated video: ${p.key}-hover.mp4`);
  } catch (err) {
    console.error(`Error generating video for ${p.key}:`, err.message);
  }
}

console.log('All project assets generated successfully!');
