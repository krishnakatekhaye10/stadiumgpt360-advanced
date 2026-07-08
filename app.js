// StadiumGPT 360 - Advanced AI Stadium OS Simulator

const navItems = [
  ["Overview", "overview", "Home"],
  ["Quick Access", "quickAccess", "Start"],
  ["Navigator", "navigator", "Route"],
  ["Live Ops", "liveOps", "Ops"],
  ["Modules", "modules", "Apps"],
  ["Assistant", "assistant", "Chat"],
  ["Dashboards", "dashboards", "Data"],
];

const kpis = [
  ["Crowd density", "72%", "+8% after halftime"],
  ["Emergency SLA", "02:18", "Nearest medic dispatched"],
  ["Transit load", "84%", "Metro northbound rising"],
  ["Carbon intensity", "31 g", "Per fan-hour, down 11%"],
];

let liveEvents = [
  ["High", "Gate 8 medical report", "Emergency Copilot has responder route ready."],
  ["Medium", "Concourse B crowd surge", "Crowd AI predicts 18-minute halftime pressure."],
  ["Low", "Food F12 queue drop", "Food Concierge recommends F12 for halal and vegan orders."],
  ["Medium", "Metro northbound load", "Transportation AI recommends staggered egress."],
];

let riskSignals = [
  ["Crowd", 72, "Open Gate 5 and redirect Section B."],
  ["Medical", 42, "Keep Medic M-14 near Gate 8."],
  ["Security", 28, "Sector D alert under review."],
  ["Transport", 84, "Publish Green Metro departure guidance."],
  ["Energy", 31, "Maintain HVAC saving mode."],
];

let automationQueue = [
  ["Ready", "Send route nudges to 4,200 fans"],
  ["Ready", "Assign 14 volunteers to Concourse B"],
  ["Waiting", "Export post-halftime risk brief"],
  ["Ready", "Update shuttle loop C departure time"],
];

const modules = [
  {
    title: "Crowd Intelligence AI",
    short: "Predict congestion and control gates.",
    summary: "Live heatmaps, stampede-risk prediction, gate automation, alternate route nudges, volunteer and security notifications.",
    tags: ["CCTV", "IoT", "WiFi", "Predictive AI"],
    kpi: "Risk score 0.31",
    action: "Gate 5 opened, Concourse B rerouted, and 14 volunteers notified.",
    steps: ["Read density from Gate 4, Gate 8, WiFi, and CCTV.", "Predict 18-minute halftime surge.", "Open auxiliary gate and send route nudges."],
    buttons: ["Open Gate 5", "Send route nudge", "Notify volunteers"],
  },
  {
    title: "AI Emergency Copilot",
    short: "Triage reports and dispatch responders.",
    summary: "Detects emergency reports, locates medics, creates fastest route, notifies ambulance, security, and organizers.",
    tags: ["Triage", "Routing", "Reports"],
    kpi: "Response ETA 2:18",
    action: "Incident MED-482 created, Medic M-14 assigned, and ambulance staging notified.",
    steps: ["Extract location from report.", "Find nearest medic and route.", "Notify responder chain and generate report."],
    buttons: ["Dispatch medic", "Notify security", "Create report"],
  },
  {
    title: "Accessibility AI",
    short: "Make the venue easier for everyone.",
    summary: "Wheelchair navigation, voice assistant, audio descriptions, live captions, sign-language avatar, high-contrast experience.",
    tags: ["WCAG", "Captions", "Voice"],
    kpi: "32 active assists",
    action: "Elevator route generated, live captions started, and high-contrast mode prepared.",
    steps: ["Check accessibility profile.", "Avoid stairs and crowded ramps.", "Offer voice, captions, and screen-reader guidance."],
    buttons: ["Wheelchair route", "Start captions", "Audio description"],
  },
  {
    title: "AI Transportation",
    short: "Forecast traffic, parking, metro, and buses.",
    summary: "Predicts traffic, parking, bus occupancy, metro crowding, rideshare pressure, and best departure windows.",
    tags: ["Traffic", "Metro", "Parking"],
    kpi: "Metro load 84%",
    action: "Best departure set to 21:42 via Green Metro and shuttle loop C.",
    steps: ["Read match clock and egress forecast.", "Compare cost, speed, and carbon.", "Publish departure recommendations."],
    buttons: ["Best time", "Green route", "Parking map"],
  },
  {
    title: "AI Food Concierge",
    short: "Find food with the shortest queue.",
    summary: "Recommends nearby food, shorter queues, healthy, halal, vegetarian, vegan, gluten-free options, and mobile ordering.",
    tags: ["Queues", "Diet", "Ordering"],
    kpi: "F12 queue 4 min",
    action: "Food F12 recommended with halal, vegetarian, vegan, and gluten-free options.",
    steps: ["Filter by distance and diet.", "Rank by queue time.", "Reserve mobile order pickup window."],
    buttons: ["Halal near me", "Vegan options", "Place mock order"],
  },
  {
    title: "Sustainability AI",
    short: "Optimize energy, water, waste, and carbon.",
    summary: "Monitors energy, water, waste bins, emissions, collection routes, optimization reports, and carbon dashboards.",
    tags: ["Energy", "Water", "Waste"],
    kpi: "Energy down 9%",
    action: "Waste collection route optimized and HVAC savings recommendation issued.",
    steps: ["Read bin, water, and energy sensors.", "Forecast pickup demand.", "Send route and energy-saving recommendation."],
    buttons: ["Optimize bins", "Energy report", "Carbon dashboard"],
  },
  {
    title: "Volunteer Copilot",
    short: "Assign tasks and guide volunteers.",
    summary: "AI-generated tasks, shift management, multilingual guidance, incident reporting, and voice support.",
    tags: ["Tasks", "Shifts", "Translate"],
    kpi: "42 tasks live",
    action: "12 volunteers reassigned to Gate 4 with translated instructions.",
    steps: ["Read staffing gaps.", "Create priority tasks.", "Send multilingual instructions and escalation paths."],
    buttons: ["Create task", "Translate task", "Shift view"],
  },
  {
    title: "Security Intelligence",
    short: "Detect risks and create reports.",
    summary: "Detects crowd panic, unauthorized entry, suspicious objects, fights, medical events, and generates incident reports.",
    tags: ["Vision", "Alerts", "Reports"],
    kpi: "2 alerts reviewing",
    action: "Suspicious-object alert correlated with cleaning cart and cleared by Sector D lead.",
    steps: ["Analyze camera and access events.", "Rank confidence and severity.", "Escalate or clear with audit trail."],
    buttons: ["Review alert", "Lock zone", "Incident report"],
  },
  {
    title: "AI Fan Companion",
    short: "Tickets, itinerary, food, memories, and highlights.",
    summary: "Personal itinerary, match reminders, digital ticket, recommendations, merchandise, food, memories, highlights, collectibles.",
    tags: ["Tickets", "Memories", "Offers"],
    kpi: "94% itinerary ready",
    action: "Fan itinerary updated with entry gate, seat reminder, food pickup, and exit route.",
    steps: ["Read ticket and preferences.", "Plan matchday itinerary.", "Suggest food, merch, photos, and highlights."],
    buttons: ["Show ticket", "Build itinerary", "Create highlight"],
  },
  {
    title: "Organizer Command Center",
    short: "Natural-language analytics for venue leaders.",
    summary: "Natural-language analytics, revenue, operations, match control, predictive analytics, and all venue dashboards.",
    tags: ["Analytics", "Revenue", "Ops"],
    kpi: "Forecast 91%",
    action: "Halftime density forecast produced with crowd, gate, and transit citations.",
    steps: ["Retrieve telemetry and SOP context.", "Run forecast and confidence check.", "Publish action plan to command center."],
    buttons: ["Ask analytics", "Export report", "Open ops view"],
  },
];

const quickActions = [
  ["Find my seat", "navigator", "Set route to Seat B-214"],
  ["Nearest washroom", "assistant", "Ask assistant for nearest washroom"],
  ["Emergency report", "assistant", "Someone collapsed near Gate 8"],
  ["Wheelchair route", "navigator", "Switch route mode to wheelchair"],
  ["Food queues", "modules", "Open AI Food Concierge"],
  ["Crowd heatmap", "navigator", "Toggle live heatmap"],
  ["Transport plan", "modules", "Open AI Transportation"],
  ["Security alert", "modules", "Open Security Intelligence"],
  ["Sustainability", "modules", "Open Sustainability AI"],
  ["Volunteer task", "modules", "Open Volunteer Copilot"],
  ["Fan itinerary", "modules", "Open AI Fan Companion"],
  ["Analytics query", "dashboards", "Run natural-language analytics"],
];

const quickModuleMap = {
  "Food queues": 4,
  "Transport plan": 3,
  "Security alert": 7,
  "Sustainability": 5,
  "Volunteer task": 6,
  "Fan itinerary": 8,
};

const scenarios = [
  ["Emergency", "Someone collapsed near Gate 8"],
  ["Food", "Find halal food with the shortest queue"],
  ["Access", "I need a wheelchair route to Seat B-214"],
  ["Transit", "What is the greenest way home after full time?"],
];

const simulationScenarios = {
  command: {
    title: "Full command center",
    summary: "Runs the complete StadiumGPT agent mesh across crowd, emergency, transport, security, and organizer operations.",
    actions: ["Send executive alert", "Open live dashboard", "Export incident brief"],
    steps: [
      "Crowd agent ingests gate, WiFi, CCTV, ticket, and Bluetooth signals.",
      "Navigator reroutes Section B traffic away from Gate 8.",
      "Emergency Copilot assigns Medic M-14 and notifies security lead S-02.",
      "Transportation agent delays shuttle loop C by 4 minutes to reduce platform crowding.",
      "Organizer dashboard publishes an auditable forecast with confidence score.",
    ],
  },
  crowd: {
    title: "Crowd surge",
    summary: "Predicts a halftime surge and applies route, gate, and volunteer mitigations.",
    actions: ["Open Gate 5", "Push route alert", "Dispatch volunteers"],
    steps: [
      "Density forecast detects Concourse B reaching 82% in 11 minutes.",
      "AI recommends opening Gate 5 and Stairwell W2.",
      "Fan Companion sends least-crowded route nudges.",
      "Volunteer Copilot assigns 14 staff to high-friction corridors.",
    ],
  },
  emergency: {
    title: "Medical emergency",
    summary: "Turns a natural-language incident report into dispatch, routing, notifications, and a report.",
    actions: ["Dispatch medic", "Notify ambulance", "Create report"],
    steps: [
      "Emergency Copilot extracts location: Gate 8, lower concourse.",
      "Nearest medic found: M-14, ETA 2 minutes 18 seconds.",
      "Security is routed through Concourse C to clear access.",
      "Incident MED-482 is created with responder timeline.",
    ],
  },
  transport: {
    title: "Transport egress",
    summary: "Balances fastest, cheapest, and greenest post-match departure options.",
    actions: ["Publish departure time", "Update shuttle", "Open parking map"],
    steps: [
      "Metro northbound is forecast to exceed 90% occupancy.",
      "Greenest route selected: shuttle loop C plus Metro Blue.",
      "Best departure window set to 21:42.",
      "Fans receive staggered exit guidance by seating section.",
    ],
  },
  security: {
    title: "Security alert",
    summary: "Reviews a suspicious-object event with camera, access, and staff context.",
    actions: ["Review camera", "Notify sector lead", "Clear alert"],
    steps: [
      "Vision model flags object near Sector D service corridor.",
      "Access logs correlate object with approved cleaning team.",
      "Sector lead receives verification task.",
      "Alert is cleared with confidence and audit trail.",
    ],
  },
  sustainability: {
    title: "Sustainability response",
    summary: "Optimizes waste pickup, energy draw, water use, and carbon impact in real time.",
    actions: ["Optimize bins", "Energy report", "Carbon export"],
    steps: [
      "Waste bins near F concourse are forecast to fill in 11 minutes.",
      "Collection route is optimized to save 17 minutes.",
      "HVAC setpoint tuning reduces energy draw by 9%.",
      "Carbon dashboard updates per fan-hour impact.",
    ],
  },
};

const dashboards = {
  Fans: {
    insight: "Personal itinerary recommends entering through Gate 2, picking up mobile order at F12, and using the west exit after full time.",
    metrics: [35, 42, 51, 60, 58, 64, 72, 69, 63],
    actions: ["Send reminder", "Show ticket", "Suggest food"],
  },
  Organizers: {
    insight: "Halftime surge predicted in 18 minutes. Opening auxiliary Gate 5 reduces Concourse B density by an estimated 21%.",
    metrics: [48, 51, 58, 70, 76, 80, 74, 68, 62],
    actions: ["Toggle Gate 5", "Toggle HVAC Eco Mode", "Export briefing"],
  },
  Security: {
    insight: "Interactive CCTV vision feeds live. Sector D remains under enhanced monitoring for suspicious items.",
    metrics: [12, 14, 18, 16, 24, 21, 17, 15, 13],
    actions: ["Force Lock Sector D", "Clear Camera Alerts", "File Report"],
  },
  Medical: {
    insight: "Active incident MED-482 assigned. Medic M-14 routed successfully to Gate 8 with fastest path guidance.",
    metrics: [3, 4, 5, 4, 7, 6, 5, 5, 4],
    actions: ["Simulate Casualty Report", "Reset Medics Status", "Open Med Logs"],
  },
  Transportation: {
    insight: "Metro northbound occupancy high. Alternating transit flow routes fans to Shuttle Loop C and Metro Blue.",
    metrics: [40, 44, 52, 61, 68, 76, 84, 89, 82],
    actions: ["Deploy Shuttle Loop C", "Push Metro Delays Alert", "Stagger Gates"],
  },
  Volunteers: {
    insight: "Volunteer Copilot generated 42 tasks, translated 19 requests, and covered all accessibility escort assignments.",
    metrics: [21, 24, 31, 38, 42, 39, 36, 33, 29],
    actions: ["Add Shift Task", "Translate All Alerts", "Redeploy Gate 4 Team"],
  },
  Sustainability: {
    insight: "HVAC cooling throttle reduced grid load by 9%. Concourse waste levels are monitored for optimized collection routes.",
    metrics: [72, 68, 61, 57, 54, 49, 45, 43, 41],
    actions: ["Run Garbage Routing", "Throttle Water Flow", "Export Carbon Log"],
  },
  Operations: {
    insight: "Overall stadium systems nominal. Halftime surge mitigations queued in AI Live Ops board.",
    metrics: [55, 58, 62, 66, 71, 73, 69, 65, 61],
    actions: ["Trigger Halftime Surge Plan", "Lockdown Mode", "Export OS Log"],
  },
  Analytics: {
    insight: "Run custom SQL queries in the Analytics terminal sandbox to inspect raw tables from schema.sql.",
    metrics: [22, 34, 45, 49, 57, 66, 74, 81, 86],
    actions: ["Select Presets", "Run SQL Query", "Download DB State CSV"],
  },
};

const blueprints = [
  {
    title: "Complete Project Architecture",
    body: `Frontend: Next.js, React, TypeScript, Tailwind, PWA/offline shell, role-based routes.
Backend: Node.js API gateway, Python FastAPI AI services, WebSocket event stream, Redis pub/sub.
AI: OpenAI/Gemini/Vertex model router, LangChain tools, LlamaIndex RAG, CrewAI-style agent orchestration.
Data: PostgreSQL operational store, Firebase push/auth, Redis cache, Pinecone/Chroma vector indexes.
Computer Vision: edge camera workers using OpenCV, YOLO, MediaPipe, OCR, and event summarization.
Cloud: Google Cloud Run, GKE for streaming workloads, Pub/Sub, Cloud SQL, Artifact Registry, GitHub Actions.`,
  },
  {
    title: "Database Schema",
    body: `users(id, role, name, language, accessibility_profile, created_at)
venues(id, name, city, timezone, capacity)
zones(id, venue_id, level, name, type, capacity, geojson)
sensors(id, zone_id, source_type, health, last_seen_at)
crowd_snapshots(id, zone_id, density, velocity, risk_score, captured_at)
incidents(id, zone_id, type, severity, status, summary, created_by, created_at)
routes(id, from_zone, to_zone, mode, eta_seconds, steps_json)
orders(id, user_id, stand_id, status, dietary_tags, eta_minutes)
volunteer_tasks(id, assignee_id, zone_id, priority, instructions, status)
sustainability_metrics(id, venue_id, energy_kw, water_l, waste_kg, carbon_kg, captured_at)
agent_runs(id, intent, model, input_ref, output_json, confidence, created_at)`,
  },
  {
    title: "API Design",
    body: `POST /api/ai/chat
POST /api/navigation/route
GET /api/crowd/heatmap?venueId=
POST /api/incidents/report
PATCH /api/gates/:id/open
GET /api/transport/forecast
GET /api/food/recommendations
POST /api/volunteers/tasks
GET /api/sustainability/dashboard
POST /api/vision/events
GET /api/analytics/query?q=
WS /stream/venue/:venueId`,
  },
  {
    title: "AI Workflow",
    body: `1. Classify intent from voice, text, sensor, camera, ticket, or staff input.
2. Retrieve context from RAG indexes: venue maps, SOPs, match schedule, crowd history, accessibility rules.
3. Select agent team: navigator, safety, medical, transport, food, sustainability, volunteer, security.
4. Validate actions against policy, permissions, and live telemetry.
5. Execute through APIs, send notifications, and log an auditable incident or recommendation.
6. Monitor outcome and adapt recommendations in real time.`,
  },
  {
    title: "Prompt Templates",
    body: `Navigator: Given location, destination, density, accessibility needs, and blocked zones, return safe route steps with ETA.
Emergency: Classify severity, extract location, assign responder, create notification copy, and draft an incident report.
Analytics: Answer from retrieved telemetry, cite source IDs, include confidence, and recommend action.
Translation: Translate stadium guidance with short, calm, culturally neutral phrasing.`,
  },
  {
    title: "Testing Strategy",
    body: `Unit tests for route ranking, alert classification, schema validation, and RBAC.
Integration tests for incident creation, push notifications, WebSocket updates, and AI tool execution.
Computer-vision validation with labeled frame fixtures and confidence thresholds.
Load tests for matchday event spikes, egress surges, and 1M+ fan notification bursts.
Accessibility checks: keyboard navigation, contrast, screen reader labels, captions, and reduced-motion support.`,
  },
];

// ADVANCED COMPONENT 1: Dijkstra Pathfinding Graph & Logic
const mapNodes = {
  "Gate 4": { x: 12, y: 15, type: "gate" },
  "Gate 1": { x: 32, y: 8, type: "gate" },
  "Gate 5": { x: 10, y: 50, type: "gate" },
  "Gate 8": { x: 74, y: 65, type: "gate" },
  "Seat B-214": { x: 58, y: 18, type: "seat" },
  "Section A": { x: 42, y: 18, type: "seat" },
  "Section C": { x: 28, y: 38, type: "seat" },
  "Section D": { x: 50, y: 48, type: "seat" },
  "Food F12": { x: 18, y: 70, type: "food" },
  "Food F15": { x: 80, y: 40, type: "food" },
  "Medic M-14": { x: 44, y: 40, type: "medical" },
  "Medic Tent": { x: 50, y: 78, type: "medical" },
  "Elevator E2": { x: 35, y: 55, type: "elevator" },
  "Elevator E3": { x: 65, y: 48, type: "elevator" },
  "Metro Platform": { x: 88, y: 82, type: "transport" },
  "Bus Loop": { x: 5, y: 85, type: "transport" },
  "Washroom W1": { x: 68, y: 10, type: "washroom" },
  "Washroom W2": { x: 15, y: 32, type: "washroom" }
};

const mapEdges = [
  { from: "Gate 4", to: "Washroom W2", distance: 15, stairs: false },
  { from: "Washroom W2", to: "Section C", distance: 12, stairs: false },
  { from: "Section C", to: "Gate 5", distance: 14, stairs: true }, 
  { from: "Section C", to: "Elevator E2", distance: 10, stairs: false },
  { from: "Gate 5", to: "Bus Loop", distance: 20, stairs: false },
  { from: "Gate 4", to: "Gate 1", distance: 18, stairs: false },
  { from: "Gate 1", to: "Section A", distance: 12, stairs: false },
  { from: "Section A", to: "Washroom W1", distance: 15, stairs: false },
  { from: "Section A", to: "Medic M-14", distance: 16, stairs: false },
  { from: "Washroom W1", to: "Seat B-214", distance: 10, stairs: false },
  { from: "Seat B-214", to: "Food F15", distance: 15, stairs: true }, 
  { from: "Food F15", to: "Elevator E3", distance: 8, stairs: false },
  { from: "Elevator E3", to: "Gate 8", distance: 14, stairs: false },
  { from: "Gate 8", to: "Metro Platform", distance: 18, stairs: false },
  { from: "Medic M-14", to: "Section D", distance: 10, stairs: false },
  { from: "Section D", to: "Elevator E2", distance: 12, stairs: false },
  { from: "Section D", to: "Elevator E3", distance: 12, stairs: false },
  { from: "Elevator E2", to: "Food F12", distance: 15, stairs: false },
  { from: "Food F12", to: "Medic Tent", distance: 12, stairs: false },
  { from: "Medic Tent", to: "Bus Loop", distance: 25, stairs: false },
  { from: "Medic Tent", to: "Gate 8", distance: 22, stairs: false }
];

// ADVANCED COMPONENT 2: Client-side In-memory Database Engine
const MiniDB = {
  users: [
    { id: "usr-01", role: "fan", name: "Alex Morgan", language: "en", accessibility_profile: '{"wheelchair":true}' },
    { id: "usr-02", role: "organizer", name: "Sarah Connor", language: "en", accessibility_profile: '{}' },
    { id: "usr-03", role: "security", name: "Marcus Wright", language: "en", accessibility_profile: '{}' },
    { id: "usr-04", role: "medical", name: "Dr. John Doe", language: "es", accessibility_profile: '{}' },
    { id: "usr-05", role: "volunteer", name: "Claire Redfield", language: "en", accessibility_profile: '{}' }
  ],
  venues: [
    { id: "venue-01", name: "FIFA MetLife 2026", city: "New York", timezone: "EST", capacity: 82500 }
  ],
  zones: [
    { id: "zone-g4", name: "Gate 4", level: "L1", type: "gate", capacity: 15000 },
    { id: "zone-g1", name: "Gate 1", level: "L1", type: "gate", capacity: 12000 },
    { id: "zone-g5", name: "Gate 5", level: "L1", type: "gate", capacity: 10000 },
    { id: "zone-g8", name: "Gate 8", level: "L1", type: "gate", capacity: 18000 },
    { id: "zone-seat", name: "Seat B-214", level: "L2", type: "seat", capacity: 1 },
    { id: "zone-f12", name: "Food F12", level: "L1", type: "food", capacity: 300 },
    { id: "zone-f15", name: "Food F15", level: "L2", type: "food", capacity: 400 },
    { id: "zone-med", name: "Medic M-14", level: "L1", type: "medical", capacity: 50 }
  ],
  sensors: [
    { id: "sens-01", zone_id: "zone-g4", source_type: "cctv", health: "98%", last_seen_at: "Just now" },
    { id: "sens-02", zone_id: "zone-g8", source_type: "wifi", health: "94%", last_seen_at: "Just now" },
    { id: "sens-03", zone_id: "zone-f12", source_type: "cctv", health: "100%", last_seen_at: "Just now" },
    { id: "sens-04", zone_id: "zone-med", source_type: "sensor", health: "92%", last_seen_at: "5s ago" }
  ],
  crowd_snapshots: [
    { id: "snap-01", zone_id: "zone-g4", density: 72, velocity: 1.2, risk_score: 45, captured_at: "18:14" },
    { id: "snap-02", zone_id: "zone-g8", density: 84, velocity: 0.8, risk_score: 72, captured_at: "18:14" },
    { id: "snap-03", zone_id: "zone-f12", density: 35, velocity: 1.5, risk_score: 12, captured_at: "18:14" },
    { id: "snap-04", zone_id: "zone-f15", density: 50, velocity: 1.1, risk_score: 22, captured_at: "18:14" }
  ],
  incidents: [
    { id: "inc-101", zone_id: "zone-g8", type: "medical", severity: "high", status: "assigned", summary: "Medic M-14 dispatched to Gate 8 for a collapsed fan", created_at: "18:09" },
    { id: "inc-102", zone_id: "zone-g4", type: "crowd", severity: "medium", status: "monitoring", summary: "Halftime queue pressure at Section B entry portal", created_at: "18:12" }
  ],
  volunteer_tasks: [
    { id: "task-01", assignee_id: "usr-05", zone_id: "zone-g4", priority: "high", instructions: "Reroute Section B crowd surge to auxiliary lanes", status: "ready" },
    { id: "task-02", assignee_id: "usr-01", zone_id: "zone-f12", priority: "low", instructions: "Ensure wheelchair elevator queue clearances", status: "completed" }
  ],
  sustainability_metrics: [
    { id: "sust-01", venue_id: "venue-01", energy_kw: 1450.2, water_l: 3410.0, waste_kg: 480.5, carbon_kg: 320.2, captured_at: "18:14" }
  ],
  agent_runs: [
    { id: "run-01", intent: "route", model: "gemini-2.5-flash", input_ref: "Gate 4 to Seat B-214", output_json: '{"success":true,"route":["Gate 4","Washroom W2","Section C","Elevator E2","Food F12","Medic Tent","Gate 8"]}', confidence: 0.94, created_at: "18:14" }
  ]
};

// SQL engine parser
function executeSQL(sqlStr) {
  sqlStr = sqlStr.trim().replace(/\s+/g, ' ');
  const selectMatch = sqlStr.match(/^select\s+(.+?)\s+from\s+(\w+)(?:\s+where\s+(.+?))?(?:\s+order\s+by\s+(.+?))?(?:\s+limit\s+(\d+))?$/i);
  if (!selectMatch) {
    throw new Error("Syntax Error: Only SELECT queries are supported in this sandbox.");
  }
  
  const [, colsStr, tableName, whereStr, orderStr, limitStr] = selectMatch;
  const table = MiniDB[tableName.toLowerCase()];
  if (!table) {
    throw new Error(`Table not found: "${tableName}"`);
  }
  
  let data = JSON.parse(JSON.stringify(table));
  
  // Filter (WHERE)
  if (whereStr) {
    const conditions = whereStr.split(/\s+and\s+/i);
    conditions.forEach(cond => {
      const opMatch = cond.match(/(\w+)\s*(=|>|<|like)\s*(.+)/i);
      if (opMatch) {
        const [, field, op, valStr] = opMatch;
        let val = valStr.trim().replace(/^['"]|['"]$/g, '');
        const numVal = Number(val);
        const isNum = !isNaN(numVal) && val !== "";
        data = data.filter(row => {
          const rowVal = row[field.toLowerCase()];
          if (rowVal === undefined) return false;
          if (op === "=") {
            return isNum ? Number(rowVal) === numVal : String(rowVal).toLowerCase() === val.toLowerCase();
          } else if (op === ">") {
            return Number(rowVal) > numVal;
          } else if (op === "<") {
            return Number(rowVal) < numVal;
          } else if (op.toLowerCase() === "like") {
            const reg = new RegExp(val.replace(/%/g, '.*'), 'i');
            return reg.test(String(rowVal));
          }
          return true;
        });
      }
    });
  }
  
  // Sort (ORDER BY)
  if (orderStr) {
    const [field, dir] = orderStr.trim().split(/\s+/);
    const orderDir = (dir && dir.toLowerCase() === "desc") ? -1 : 1;
    data.sort((a, b) => {
      const valA = a[field.toLowerCase()];
      const valB = b[field.toLowerCase()];
      if (valA < valB) return -1 * orderDir;
      if (valA > valB) return 1 * orderDir;
      return 0;
    });
  }
  
  // Limit
  if (limitStr) {
    data = data.slice(0, parseInt(limitStr, 10));
  }
  
  // Select Columns
  const cols = colsStr.split(',').map(c => c.trim().toLowerCase());
  if (cols.length === 1 && cols[0] === "*") {
    return data;
  } else {
    return data.map(row => {
      const newRow = {};
      cols.forEach(col => {
        if (row.hasOwnProperty(col)) {
          newRow[col] = row[col];
        }
      });
      return newRow;
    });
  }
}

// ADVANCED COMPONENT 3: Client-Side RAG SOP Index
const RAG_DOCUMENTS = [
  { id: "SOP-101", title: "Medical Emergency Triage", text: "In case of a medical report (e.g., collapses, injuries, fainting), triage immediately. Assign the nearest responder Medic (e.g., Medic M-14 or Medic M-02). Route responders avoiding high-congestion zones. Dispatch security to clear Concourse path." },
  { id: "SOP-102", title: "Gate Congestion Protocol", text: "If Gate density reaches 80% or higher, open auxiliary gates (e.g. Gate 5 or Gate 9). Route fans using alternative walkways. Notify volunteers to redirect crowds." },
  { id: "SOP-103", title: "Wheelchair Accessibility Routing", text: "For wheelchair and limited-mobility requests, route users via Elevator E2 or E3. Avoid Section B stairs and steep ramps near Portal 10. Prioritize low-slope corridors." },
  { id: "SOP-104", title: "Sustainability & HVAC Control", text: "Stadium energy is managed dynamically. Set HVAC energy savings mode to reduce consumption by up to 9%. Waste collection bins are monitored; optimize pickup routes when fill rate exceeds 75%." },
  { id: "SOP-105", title: "Transportation Egress Management", text: "At full time, Metro platform crowding can exceed 90%. Advise passengers to take Shuttle Loop C to Metro Blue. Recommend staggered exit windows based on ticket sectors." }
];

function performRAGSearch(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  let bestDoc = RAG_DOCUMENTS[0];
  let maxMatches = 0;
  
  RAG_DOCUMENTS.forEach(doc => {
    let matches = 0;
    const body = (doc.title + " " + doc.text).toLowerCase();
    terms.forEach(term => {
      if (body.includes(term)) matches++;
    });
    if (matches > maxMatches) {
      maxMatches = matches;
      bestDoc = doc;
    }
  });
  return bestDoc;
}

// Global UI State variables
const $ = (selector) => document.querySelector(selector);
let heatmapOn = true;
let authMode = "login";
let currentSimulationKey = "command";
let currentSimulationStep = 0;
let activeRoutePath = null;
let currentCCTVCamera = "Gate 4";
let cctvAnimationId = null;

// Core Initialization functions
function initNav() {
  const list = $("#navList");
  list.innerHTML = navItems.map(([label, id, icon]) => `<a href="#${id}"><span>${icon}</span>${label}</a>`).join("");
  const links = [...list.querySelectorAll("a")];
  document.addEventListener("scroll", () => {
    const current = navItems.slice().reverse().find(([, id]) => document.getElementById(id).getBoundingClientRect().top < 130);
    links.forEach((link) => link.classList.toggle("active", current && link.getAttribute("href") === `#${current[1]}`));
  }, { passive: true });
}

function initQuickAccess() {
  $("#quickGrid").innerHTML = quickActions.map(([label, target, detail], index) => `
    <button class="quick-card" data-quick="${index}">
      <strong>${label}</strong>
      <small>${detail}</small>
    </button>
  `).join("");
}

function initKpis() {
  $("#kpis").innerHTML = kpis.map(([label, value, detail]) => `
    <article class="kpi-card">
      <span class="eyebrow">${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
      <div class="spark"></div>
    </article>
  `).join("");
}

function renderLiveOps() {
  $("#eventStream").innerHTML = liveEvents.map(([severity, title, detail], index) => `
    <article class="event-item ${severity.toLowerCase()}">
      <div>
        <strong>${title}</strong>
        <small>${detail}</small>
      </div>
      <button class="chip" data-event-action="${index}">Act</button>
    </article>
  `).join("");
  
  $("#riskBoard").innerHTML = riskSignals.map(([label, score, action]) => `
    <article class="risk-item">
      <div class="risk-top">
        <strong>${label}</strong>
        <span>${score}%</span>
      </div>
      <div class="risk-track"><span style="width:${score}%"></span></div>
      <small>${action}</small>
    </article>
  `).join("");
  
  $("#automationQueue").innerHTML = automationQueue.map(([status, task], index) => `
    <article class="queue-item">
      <span>${status}</span>
      <strong>${task}</strong>
      <button class="chip" data-queue-action="${index}">${status === "Done" ? "View" : "Run"}</button>
    </article>
  `).join("");
}

function injectLiveEvent() {
  const samples = [
    ["High", "Unauthorized entry signal", "Security Intelligence requests badge verification."],
    ["Medium", "Accessible elevator demand", "Accessibility AI recommends opening Elevator E3."],
    ["Low", "Waste bin cluster filling", "Sustainability AI added pickup to optimized route."],
    ["High", "Gate 4 density spike", "Crowd AI recommends opening overflow lane."],
  ];
  liveEvents.unshift(samples[Math.floor(Math.random() * samples.length)]);
  liveEvents = liveEvents.slice(0, 6);
  renderLiveOps();
  runSimulation("New live event injected into AI Live Ops");
}

function refreshRisk() {
  riskSignals = riskSignals.map(([label, score, action]) => {
    const drift = Math.floor(Math.random() * 17) - 8;
    return [label, Math.max(12, Math.min(96, score + drift)), action];
  });
  renderLiveOps();
  runSimulation("Risk board refreshed from live telemetry");
}

function runAutomationQueue(index = null) {
  if (index === null) {
    automationQueue = automationQueue.map(([, task]) => ["Done", task]);
    runSimulation("All automation queue items completed");
  } else {
    automationQueue[index][0] = "Done";
    runSimulation(`Automation completed: ${automationQueue[index][1]}`);
  }
  renderLiveOps();
}

function initModules() {
  $("#moduleGrid").innerHTML = modules.map((module, index) => `
    <article class="module-card" data-card="${index}" tabindex="0">
      <small>Module ${String(index + 1).padStart(2, "0")} - ${module.kpi}</small>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <div class="module-meta">${module.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-actions">
        <button class="secondary-btn" data-open-module="${index}">Open</button>
        <button class="primary-btn" data-run-module="${index}">Run</button>
      </div>
    </article>
  `).join("");
  renderModuleWorkspace(0);
}

function renderModuleWorkspace(index) {
  const module = modules[index];
  document.querySelectorAll(".module-card").forEach((card) => card.classList.toggle("active", Number(card.dataset.card) === index));
  $("#featureWorkspace").innerHTML = `
    <div class="feature-main">
      <span class="eyebrow">Active Feature</span>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <div class="workflow-list">
        ${module.steps.map((step, stepIndex) => `<div><strong>${stepIndex + 1}</strong><span>${step}</span></div>`).join("")}
      </div>
    </div>
    <div class="feature-side">
      <strong>${module.kpi}</strong>
      <small>${module.short}</small>
      <div class="feature-buttons">
        ${module.buttons.map((label) => `<button class="chip" data-feature-action="${label}">${label}</button>`).join("")}
      </div>
    </div>
  `;
}

// ADVANCED COMPONENT 4: SVG Route Path rendering
function drawMap(showHeat = true) {
  const mapContainer = $("#stadiumMap");
  
  // Render node buttons
  let html = Object.entries(mapNodes).map(([name, node]) => {
    let heatClass = "cool";
    if (showHeat) {
      const snap = MiniDB.crowd_snapshots.find(s => s.zone_id.includes(name.toLowerCase().replace(" ", "")));
      const density = snap ? snap.density : (name.includes("Gate 8") ? 84 : name.includes("Gate 4") ? 72 : 30);
      heatClass = density > 80 ? "hot" : density > 60 ? "warm" : "cool";
    }
    return `<button class="zone ${heatClass} map-node" data-zone="${name}" style="left:${node.x}%; top:${node.y}%; width:44px; height:44px; margin-left:-22px; margin-top:-22px; border-radius:50%; z-index:10; font-size:0.6rem; font-weight:bold; box-shadow:0 0 10px rgba(0,0,0,0.5);">${name}</button>`;
  }).join("");
  
  // Draw SVG lines for connections
  let svgPaths = mapEdges.map(edge => {
    const fromNode = mapNodes[edge.from];
    const toNode = mapNodes[edge.to];
    return `<line x1="${fromNode.x}%" y1="${fromNode.y}%" x2="${toNode.x}%" y2="${toNode.y}%" stroke="rgba(255,255,255,0.08)" stroke-width="2" />`;
  }).join("");

  // Draw active path if generated
  let activePathSvg = "";
  if (activeRoutePath && activeRoutePath.length > 1) {
    const points = activeRoutePath.map(nodeName => {
      const node = mapNodes[nodeName];
      return `${node.x}%,${node.y}%`;
    }).join(" ");
    
    // Choose colors based on active route mode
    const mode = $("#routeMode").value;
    let strokeColor = "var(--accent)"; // blue
    if (mode === "Wheelchair route") strokeColor = "var(--accent-2)"; // green
    if (mode === "Least crowded") strokeColor = "var(--warning)"; // orange
    if (mode === "AR guidance") strokeColor = "#ff00ee"; // pink
    
    activePathSvg = `
      <polyline points="${points}" fill="none" stroke="${strokeColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" class="animated-route-path" style="stroke-dasharray: 8, 8;" />
      <circle cx="${mapNodes[activeRoutePath[0]].x}%" cy="${mapNodes[activeRoutePath[0]].y}%" r="10" fill="${strokeColor}" />
      <circle cx="${mapNodes[activeRoutePath[activeRoutePath.length-1]].x}%" cy="${mapNodes[activeRoutePath[activeRoutePath.length-1]].y}%" r="10" fill="#fff" stroke="${strokeColor}" stroke-width="3" />
    `;
  }
  
  mapContainer.innerHTML = `
    <svg id="mapOverlay" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:5;">
      ${svgPaths}
      ${activePathSvg}
    </svg>
    ${html}
  `;
}

// Compute dynamic shortest route using Dijkstra
function routeText() {
  const from = $("#routeFrom").value || "Gate 4";
  const to = $("#routeTo").value || "Seat B-214";
  const mode = $("#routeMode").value;
  
  if (!mapNodes[from] || !mapNodes[to]) {
    $("#routeOutput").innerHTML = `<p style="color:var(--danger)">Error: Invalid start or destination point selected.</p>`;
    return;
  }
  
  const path = solveDijkstra(from, to, mode);
  activeRoutePath = path;
  drawMap(heatmapOn);
  
  if (!path) {
    $("#routeOutput").innerHTML = `
      <strong>${mode}: ${from} to ${to}</strong>
      <p style="color:var(--warning)">No clear accessible path found that avoids stairs. Please contact volunteer services or select standard route modes.</p>
    `;
    return;
  }
  
  const steps = [];
  for (let i = 0; i < path.length - 1; i++) {
    const nodeA = path[i];
    const nodeB = path[i + 1];
    const edge = mapEdges.find(e => (e.from === nodeA && e.to === nodeB) || (e.from === nodeB && e.to === nodeA));
    const stairsText = (edge && edge.stairs) ? " [Stairs ahead - proceed with caution]" : "";
    steps.push(`Move from ${nodeA} to ${nodeB}.${stairsText}`);
  }
  
  const eta = Math.ceil(path.length * 1.5 + (mode === "Least crowded" ? 2.5 : 0));
  const crowdAlertText = mode === "Least crowded" 
    ? "Rerouted away from Gate 8 incident and high crowd sections. Route is 24% longer but avoids crowd friction." 
    : "Standard shortest path selected. Gate 8 contains dynamic medical operations; use caution if near sector C.";

  $("#routeOutput").innerHTML = `
    <strong>${mode}: ${from} to ${to}</strong>
    <p>ETA: ${eta} min. ${steps.slice(0, 2).join(", then ") + (steps.length > 2 ? ", and continue to destination." : ".")}</p>
    <small>${crowdAlertText}</small>
    <div class="mini-actions" style="margin-top: 10px;">
      <button class="chip" data-route-action="voice">Voice guide</button>
      <button class="chip" data-route-action="ar">AR mode</button>
      <button class="chip" data-route-action="share">Share route</button>
    </div>
    <div class="route-tool-panel" id="routeToolPanel" style="margin-top: 10px;"></div>
  `;
}

function solveDijkstra(start, end, mode) {
  const dist = {};
  const prev = {};
  const queue = new Set();
  
  Object.keys(mapNodes).forEach(node => {
    dist[node] = Infinity;
    prev[node] = null;
    queue.add(node);
  });
  dist[start] = 0;
  
  while (queue.size > 0) {
    let u = null;
    queue.forEach(node => {
      if (u === null || dist[node] < dist[u]) {
        u = node;
      }
    });
    
    if (dist[u] === Infinity || u === end) {
      break;
    }
    
    queue.delete(u);
    
    const neighbors = [];
    mapEdges.forEach(edge => {
      if (edge.from === u && queue.has(edge.to)) neighbors.push({ node: edge.to, edge });
      if (edge.to === u && queue.has(edge.from)) neighbors.push({ node: edge.from, edge });
    });
    
    neighbors.forEach(({ node, edge }) => {
      let weight = edge.distance;
      
      // Accessibility constraints
      if (mode === "Wheelchair route" && edge.stairs) {
        weight = Infinity; 
      }
      
      // Congestion constraints
      if (mode === "Least crowded") {
        const snap = MiniDB.crowd_snapshots.find(s => s.zone_id.includes(node.toLowerCase().replace(" ", "")));
        const density = snap ? snap.density : (node.includes("Gate 8") ? 84 : node.includes("Gate 4") ? 72 : 30);
        weight = weight * (1 + density / 25);
      }
      
      const alt = dist[u] + weight;
      if (alt < dist[node]) {
        dist[node] = alt;
        prev[node] = u;
      }
    });
  }
  
  const path = [];
  let curr = end;
  if (prev[curr] !== null || curr === start) {
    while (curr !== null) {
      path.unshift(curr);
      curr = prev[curr];
    }
  }
  return path.length > 0 ? path : null;
}

function handleRouteAction(action) {
  const from = $("#routeFrom").value || "Gate 4";
  const to = $("#routeTo").value || "Seat B-214";
  const panel = $("#routeToolPanel");
  
  if (action === "voice") {
    panel.innerHTML = `
      <strong>Voice Guidance Active</strong>
      <ol style="margin: 6px 0 0 16px; padding:0; font-size:0.8rem; line-height:1.4;">
        <li>Follow Section B hallway indicators.</li>
        <li>Elevator access coordinates sent to accessibility console.</li>
        <li>Final seat destination is Section B portal 14.</li>
      </ol>
    `;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(`Starting voice route from ${from} to ${to}. Proceed forward.`));
    }
    runSimulation(`Voice guide started: ${from} to ${to}`);
  }
  if (action === "ar") {
    $("#stadiumMap").classList.toggle("ar-active");
    panel.innerHTML = `
      <strong>AR Guidance Overlay Loaded</strong>
      <p style="font-size:0.8rem; margin: 4px 0 0;">Virtual route arrows are projected onto the digital twin stadium map floor. Follow the pink beacon line.</p>
    `;
    runSimulation(`AR navigation activated: ${from} to ${to}`);
  }
  if (action === "share") {
    const code = `STAD-${Math.floor(100000 + Math.random() * 900000)}`;
    const text = `StadiumGPT Route Code: ${code} (${from} to ${to})`;
    panel.innerHTML = `
      <strong>Route Shared</strong>
      <div style="border: 1px dashed var(--accent); border-radius: 4px; padding: 8px; margin-top:6px; font-size:0.78rem; text-align:center;">
        <span style="font-weight:900; color:var(--accent);">${code}</span><br>
        <small>Copy and share this code with field volunteers or responders.</small>
      </div>
    `;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    runSimulation(`Share code generated: ${code}`);
  }
}

// Assistant & Gemini Integration
function initAssistant() {
  $("#scenarioRow").innerHTML = scenarios.map(([label, text]) => `<button class="chip" data-scenario="${text}">${label}</button>`).join("");
  const initial = [
    ["ai", "Hello. I can translate, route, detect incidents, run SQL reports, and coordinate responders in 100+ languages. Securely enter a Gemini API Key in the sidebar settings card to enable real-time model synthesis."],
    ["user", "What is the greenest way home after full time?"],
    ["ai", "(SOP-105) Greenest route uses shuttle loop C plus Metro Blue, leaving at 21:42 to avoid peak crowd density of 90%."],
  ];
  $("#chatWindow").innerHTML = initial.map(([role, text]) => `<div class="message ${role}">${text}</div>`).join("");
  updateAgentTimeline("Ready", ["Intent Router", "RAG Retriever", "Safety Agent", "Action Agent"]);
}

function updateAgentTimeline(status, agents) {
  $("#agentTimeline").innerHTML = agents.map((name, index) => `
    <div class="agent-step">
      <strong>${name}</strong>
      <small>${index === agents.length - 1 ? status : "Completed"}</small>
    </div>
  `).join("");
}

async function handleChat(event) {
  event.preventDefault();
  const input = $("#chatInput");
  const language = $("#languageSelect").value;
  const text = input.value.trim();
  if (!text) return;
  
  const chat = $("#chatWindow");
  chat.insertAdjacentHTML("beforeend", `<div class="message user">${text}</div>`);
  chat.scrollTop = chat.scrollHeight;
  input.value = "";
  
  updateAgentTimeline("Retrieving...", ["Intent Router", "RAG Retriever"]);
  
  // Find local RAG Document matching the question
  const matchingSOP = performRAGSearch(text);
  
  // Check for Gemini API key
  const apiKey = $("#geminiKey").value.trim();
  
  if (apiKey) {
    try {
      updateAgentTimeline("Invoking Gemini...", ["Intent Router", "RAG Retriever", "Gemini Generator"]);
      
      const systemInstruction = `
        You are StadiumGPT 360, a real-time AI operating system for FIFA World Cup 2026.
        Answer user inquiries concisely based on the context, active incidents, and stadium SOP guidelines.
        Active incidents: ${JSON.stringify(MiniDB.incidents)}
        Selected User Language: ${language}
        Matching Standard Operating Procedure: (${matchingSOP.id}) ${matchingSOP.title}: ${matchingSOP.text}
        
        If the user mentions an emergency incident (collapse, fight, injury), insert this EXACT tag at the end of your response:
        ||INCIDENT_TRIGGER:{"type":"emergency","zone":"Gate 8","summary":"user report"}||
      `;
      
      const prompt = `User prompt: ${text}`;
      const responseText = await callGeminiAPI(prompt, systemInstruction, apiKey);
      
      // Parse incident triggers if returned
      let cleanResponse = responseText;
      if (responseText.includes("||INCIDENT_TRIGGER:")) {
        const match = responseText.match(/\|\|INCIDENT_TRIGGER:(.+?)\|\|/);
        if (match) {
          try {
            const trigger = JSON.parse(match[1]);
            registerNewIncident(trigger.type, trigger.summary);
          } catch(e) {}
          cleanResponse = responseText.replace(/\|\|INCIDENT_TRIGGER:(.+?)\|\|/, "");
        }
      }
      
      chat.insertAdjacentHTML("beforeend", `<div class="message ai">${cleanResponse}</div>`);
      updateAgentTimeline("Response completed", ["Intent Router", "RAG Retriever", "Gemini Generator", "Done"]);
    } catch (err) {
      chat.insertAdjacentHTML("beforeend", `<div class="message ai" style="color:var(--danger);">Error calling Gemini API: ${err.message}. Falling back to offline simulator rules.</div>`);
      processOfflineResponse(text, matchingSOP, language, chat);
    }
  } else {
    // Standard offline rules
    setTimeout(() => {
      processOfflineResponse(text, matchingSOP, language, chat);
    }, 800);
  }
  
  chat.scrollTop = chat.scrollHeight;
}

async function callGeminiAPI(prompt, systemInstruction, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] }
    })
  });
  if (!response.ok) {
    throw new Error("HTTP status " + response.status);
  }
  const json = await response.json();
  return json.candidates[0].content.parts[0].text;
}

function processOfflineResponse(text, matchingSOP, language, chat) {
  let response = `(${language}) [RAG Context: ${matchingSOP.id} - ${matchingSOP.title}] `;
  const lower = text.toLowerCase();
  
  if (lower.includes("collapsed") || lower.includes("emergency") || lower.includes("gate 8")) {
    response += "Emergency Copilot has triggered medical response SOP-101. Incident inc-101 registered. Medic M-14 dispatched to Gate 8 (ETA 2:18 via Section D paths).";
    updateAgentTimeline("Incident created", ["Intent Router", "Emergency Copilot", "Audit Logger"]);
    registerNewIncident("medical", "Collapsed fan near Gate 8");
  } else if (lower.includes("food") || lower.includes("halal") || lower.includes("vegan")) {
    response += "Food Stand F12 is recommended. Queue time is currently 4 minutes. Standard menu includes halal, vegetarian, and vegan options.";
    updateAgentTimeline("Food lookup complete", ["Intent Router", "Food Concierge", "Done"]);
  } else if (lower.includes("wheelchair") || lower.includes("access")) {
    response += "Accessible routing SOP-103 active. Navigating via Elevator E2. Stairs at Section B/C bypassed successfully.";
    updateAgentTimeline("Accessibility path found", ["Intent Router", "Accessibility AI", "Done"]);
  } else {
    response += `Stadium OS suggests routing through Gate 4 towards Section C. SOP Guidelines matched: ${matchingSOP.text}`;
    updateAgentTimeline("Lookup successful", ["Intent Router", "RAG Index", "Done"]);
  }
  chat.insertAdjacentHTML("beforeend", `<div class="message ai">${response}</div>`);
  chat.scrollTop = chat.scrollHeight;
}

function registerNewIncident(type, summary) {
  const newInc = {
    id: `inc-${100 + MiniDB.incidents.length + 1}`,
    zone_id: "zone-g8",
    type: type,
    severity: "high",
    status: "assigned",
    summary: summary,
    created_at: "Just now"
  };
  MiniDB.incidents.unshift(newInc);
  liveEvents.unshift(["High", `${type.toUpperCase()} alert registered`, summary]);
  liveEvents = liveEvents.slice(0, 6);
  
  // Refresh UI
  renderLiveOps();
  runSimulation(`New active incident: ${summary}`, "emergency");
}

function askAssistant(text) {
  const input = $("#chatInput");
  input.value = text;
  $("#chatForm").dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  document.getElementById("assistant").scrollIntoView();
}

// ADVANCED COMPONENT 5: Role-based Dashboard Widgets & Custom Views
function initDashboards() {
  const tabs = $("#dashboardTabs");
  tabs.innerHTML = Object.keys(dashboards).map((name, index) => `<button class="chip ${index === 0 ? "active" : ""}" data-dashboard="${name}">${name}</button>`).join("");
  renderDashboard("Fans");
}

function setDashboard(name) {
  const button = [...$("#dashboardTabs").querySelectorAll("button")].find((item) => item.dataset.dashboard === name);
  if (!button) return;
  $("#dashboardTabs").querySelectorAll("button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  $("#roleSelect").value = name;
  renderDashboard(name);
}

function renderDashboard(name) {
  const data = dashboards[name];
  $("#dashboardInsight").innerHTML = `
    <h3>${name} Command Board</h3>
    <p>${data.insight}</p>
    <ul style="margin: 8px 0; padding-left: 20px; color:var(--muted); font-size:0.8rem;">
      <li>Role Access: Authorized Live Command Grid</li>
      <li>Audit Log: Actions logged via security agent mesh</li>
    </ul>
  `;
  $("#dashboardActions").innerHTML = data.actions.map(action => `<button class="secondary-btn" data-dashboard-action="${action}">${action}</button>`).join("");
  
  // Manage Custom Dashboard Views (SQL console, CCTV Feed, Fan Pass)
  const customView = $("#dashboardCustomView");
  const canvas = $("#trendCanvas");
  
  // Cancel previous CCTV frames
  if (cctvAnimationId) {
    cancelAnimationFrame(cctvAnimationId);
    cctvAnimationId = null;
  }
  
  if (name === "Analytics") {
    // Show SQL Sandbox
    canvas.classList.add("hidden");
    customView.classList.remove("hidden");
    renderSQLConsole(customView);
  } else if (name === "Security") {
    // Show CCTV Camera feed simulation
    canvas.classList.add("hidden");
    customView.classList.remove("hidden");
    renderCCTVFeed(customView);
  } else if (name === "Fans") {
    // Show Fan ticket widget and itinerary
    canvas.classList.add("hidden");
    customView.classList.remove("hidden");
    renderFanWidgets(customView);
  } else if (name === "Organizers") {
    // Show organizer controls
    canvas.classList.add("hidden");
    customView.classList.remove("hidden");
    renderOrganizerWidgets(customView);
  } else if (name === "Sustainability") {
    canvas.classList.add("hidden");
    customView.classList.remove("hidden");
    renderSustainabilityWidgets(customView);
  } else {
    // Fall back to Trend chart
    canvas.classList.remove("hidden");
    customView.classList.add("hidden");
    drawChart(data.metrics, name);
  }
}

// Widgets for Fans Dashboard
function renderFanWidgets(container) {
  container.innerHTML = `
    <div class="widget-grid">
      <div class="ticket-pass">
        <div class="ticket-header">
          <strong>FIFA WORLD CUP 2026</strong>
          <span class="eyebrow" style="color:var(--accent-2);">Verified Pass</span>
        </div>
        <div class="ticket-body">
          <div>
            <span class="ticket-label">Gate</span><br><strong>Gate 4</strong>
          </div>
          <div>
            <span class="ticket-label">Seat</span><br><strong>B-214</strong>
          </div>
          <div>
            <span class="ticket-label">Kickoff</span><br><strong>19:00 EST</strong>
          </div>
        </div>
        <div style="font-size:0.7rem; color:var(--muted); text-align:center; margin-top:8px;">MetLife Stadium - Match 18</div>
      </div>
      <div class="widget-card">
        <h4><span>🍔</span> Fast Food Queue Order</h4>
        <p>Pre-order from Food F12 to skip standard lines. Queue: 4 minutes.</p>
        <select id="fanFoodSelect" aria-label="Select Food Stand Item" style="height:28px; font-size:0.75rem;">
          <option>Halal Wrap - $12.00</option>
          <option>Vegan Burger - $14.50</option>
          <option>Gluten-Free Nachos - $10.00</option>
        </select>
        <button class="primary-btn" id="fanPlaceOrder" style="height:28px; min-height:auto; font-size:0.75rem; margin-top:4px;">Place Mobile Order</button>
      </div>
    </div>
  `;
  
  // Wire fan widget events
  $("#fanPlaceOrder").addEventListener("click", () => {
    const item = $("#fanFoodSelect").value;
    alert(`Order success! ${item} ordered at Food F12. ETA: 4 minutes.`);
    runSimulation(`Mobile order placed for ${item} at Food F12`);
  });
}

// Widgets for Organizers Dashboard
function renderOrganizerWidgets(container) {
  const isGate5Open = MiniDB.zones.find(z => z.id === "zone-g5") ? "Open" : "Closed";
  
  container.innerHTML = `
    <div class="widget-grid">
      <div class="widget-card">
        <h4><span>🚪</span> Auxiliary Gate 5 Status</h4>
        <p>Manage secondary portals to reduce crowd density surges during halftime egress.</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
          <span>Current: <strong>${isGate5Open}</strong></span>
          <button class="chip" id="toggleGate5Btn" style="height:28px; min-height:auto; font-size:0.75rem;">Toggle Gate</button>
        </div>
      </div>
      <div class="widget-card">
        <h4><span>❄️</span> HVAC Savings Level</h4>
        <p>Set HVAC savings rate. Higher saving ratios decrease energy usage across sections.</p>
        <input type="range" class="control-slider" id="hvacSlider" min="0" max="30" value="9" />
        <span style="font-size:0.75rem;">Savings Target: <strong id="hvacSliderVal">9%</strong></span>
      </div>
    </div>
  `;
  
  // Event wiring
  $("#toggleGate5Btn").addEventListener("click", () => {
    const gateZone = MiniDB.zones.find(z => z.id === "zone-g5");
    if (gateZone) {
      // Remove Gate 5
      MiniDB.zones = MiniDB.zones.filter(z => z.id !== "zone-g5");
      alert("Gate 5 closed. Crowd redirect plans updating.");
      runSimulation("Organizer closed auxiliary Gate 5");
    } else {
      // Add Gate 5
      MiniDB.zones.push({ id: "zone-g5", name: "Gate 5", level: "L1", type: "gate", capacity: 10000 });
      alert("Gate 5 opened. Crowd density redistribution calculated.");
      runSimulation("Organizer opened Gate 5 to alleviate gate pressure");
    }
    renderOrganizerWidgets(container);
  });
  
  $("#hvacSlider").addEventListener("input", (e) => {
    $("#hvacSliderVal").textContent = `${e.target.value}%`;
  });
  
  $("#hvacSlider").addEventListener("change", (e) => {
    runSimulation(`HVAC saving target updated to ${e.target.value}%`);
  });
}

// Widgets for Sustainability Dashboard
function renderSustainabilityWidgets(container) {
  container.innerHTML = `
    <div class="widget-grid">
      <div class="widget-card">
        <h4><span>⚡</span> Power Usage Efficiency</h4>
        <p>Live: 1,450 kW. Set load shedding rules for main stadium displays.</p>
        <select id="powerModeSelect" aria-label="Power Mode" style="height:28px; font-size:0.75rem;">
          <option>Eco Mode (Save 15%)</option>
          <option selected>Balanced</option>
          <option>Max Performance</option>
        </select>
      </div>
      <div class="widget-card">
        <h4><span>🗑️</span> Waste Bin Capacity Alerts</h4>
        <p>Section F concourse bins are reaching 84% capacity limits.</p>
        <button class="primary-btn" id="optimizeBinsBtn" style="height:28px; min-height:auto; font-size:0.75rem; width:100%; margin-top:4px;">Reroute Collection Volunteers</button>
      </div>
    </div>
  `;
  
  $("#optimizeBinsBtn").addEventListener("click", () => {
    alert("Volunteers rerouted to Section F. Collection schedule optimized.");
    runSimulation("Sustainability team triggered waste optimization pickup paths");
  });
}

// Widgets for SQL Analytics Sandbox
function renderSQLConsole(container) {
  container.innerHTML = `
    <div class="sql-console">
      <div class="sql-header">
        <h4><span>💻</span> Interactive SQL sandbox</h4>
        <span style="font-size:0.7rem; color:var(--accent-2);">Engine active</span>
      </div>
      <div class="sql-presets">
        <button data-sql="SELECT * FROM zones">SELECT zones</button>
        <button data-sql="SELECT id, density, risk_score FROM crowd_snapshots WHERE density > 50 ORDER BY density DESC">halftime density</button>
        <button data-sql="SELECT id, severity, status, summary FROM incidents WHERE status = 'assigned'">assigned incidents</button>
        <button data-sql="SELECT * FROM volunteer_tasks">volunteer tasks</button>
      </div>
      <div class="sql-input-area">
        <textarea id="sqlTerminalInput" placeholder="SELECT * FROM crowd_snapshots WHERE density > 50"></textarea>
        <button class="primary-btn" id="runSqlQueryBtn" style="height:auto;">Run Query</button>
      </div>
      <div class="sql-results-container" id="sqlResultsOutput">
        <p style="color:var(--muted); font-size:0.8rem; padding:10px; margin:0;">Output terminal ready. Click a preset query above or write custom SQL.</p>
      </div>
    </div>
  `;
  
  // Wire SQL Console events
  container.querySelectorAll(".sql-presets button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      $("#sqlTerminalInput").value = e.target.dataset.sql;
      runSandboxSQL();
    });
  });
  
  $("#runSqlQueryBtn").addEventListener("click", runSandboxSQL);
}

function runSandboxSQL() {
  const query = $("#sqlTerminalInput").value.trim();
  const output = $("#sqlResultsOutput");
  if (!query) return;
  
  try {
    const results = executeSQL(query);
    if (results.length === 0) {
      output.innerHTML = `<p style="color:var(--warning); font-size:0.8rem; padding:10px; margin:0;">Success: Query returned 0 rows.</p>`;
      return;
    }
    
    // Draw table
    const headers = Object.keys(results[0]);
    const headerHtml = headers.map(h => `<th>${h}</th>`).join("");
    const rowsHtml = results.map(row => {
      const cellHtml = headers.map(h => `<td>${row[h] !== undefined ? row[h] : ""}</td>`).join("");
      return `<tr>${cellHtml}</tr>`;
    }).join("");
    
    output.innerHTML = `
      <table class="sql-table">
        <thead><tr>${headerHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    `;
    runSimulation(`Executed custom SQL query: ${query.slice(0, 40)}...`);
  } catch (err) {
    output.innerHTML = `<p style="color:var(--danger); font-size:0.8rem; padding:10px; margin:0;">SQL Error: ${err.message}</p>`;
  }
}

// Widgets for CCTV Live Feed
function renderCCTVFeed(container) {
  container.innerHTML = `
    <div class="cctv-container">
      <div class="cctv-header">
        <span class="cctv-dot"></span>
        <span id="cctvCameraLabel">CAM-04 - GATE 4 NORTH</span>
      </div>
      <div class="cctv-controls">
        <select id="cctvCameraSelect" aria-label="Select CCTV Camera">
          <option value="Gate 4" ${currentCCTVCamera === "Gate 4" ? "selected" : ""}>CAM-04 - Gate 4</option>
          <option value="Gate 8" ${currentCCTVCamera === "Gate 8" ? "selected" : ""}>CAM-08 - Gate 8</option>
          <option value="Section C" ${currentCCTVCamera === "Section C" ? "selected" : ""}>CAM-12 - Concourse B</option>
          <option value="Section D" ${currentCCTVCamera === "Section D" ? "selected" : ""}>CAM-15 - Sector D Corridor</option>
        </select>
      </div>
      <canvas id="cctvCanvas" width="360" height="202"></canvas>
      <div class="cctv-overlay-text" id="cctvOverlayText">
        FPS: 30.0<br>
        RESOLUTION: 1080p<br>
        LIVE COUNT: 42<br>
        OBJECTS: Person (94%), Bag (88%)
      </div>
    </div>
  `;
  
  // Switch Camera event
  $("#cctvCameraSelect").addEventListener("change", (e) => {
    currentCCTVCamera = e.target.value;
    $("#cctvCameraLabel").textContent = `CAM-${currentCCTVCamera === "Gate 4" ? "04" : currentCCTVCamera === "Gate 8" ? "08" : currentCCTVCamera === "Section C" ? "12" : "15"} - ${currentCCTVCamera.toUpperCase()}`;
    runSimulation(`CCTV channel switched to ${currentCCTVCamera}`);
  });
  
  // Start canvas loop
  const cctvCanvas = $("#cctvCanvas");
  const ctx = cctvCanvas.getContext("2d");
  
  // Mock bounding boxes & targets
  let targets = Array.from({ length: 15 }, () => ({
    x: Math.random() * cctvCanvas.width,
    y: Math.random() * cctvCanvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    size: 4 + Math.random() * 4
  }));
  
  function drawFrame() {
    if (!ctx) return;
    
    // Clear
    ctx.fillStyle = "#0c1420";
    ctx.fillRect(0, 0, cctvCanvas.width, cctvCanvas.height);
    
    // Draw security scan grids
    ctx.strokeStyle = "rgba(43, 214, 163, 0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x < cctvCanvas.width; x += 30) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, cctvCanvas.height); ctx.stroke();
    }
    for (let y = 0; y < cctvCanvas.height; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cctvCanvas.width, y); ctx.stroke();
    }
    
    // Draw scanning laser
    const laserY = (Date.now() / 15) % cctvCanvas.height;
    ctx.strokeStyle = "rgba(78, 165, 255, 0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, laserY);
    ctx.lineTo(cctvCanvas.width, laserY);
    ctx.stroke();
    
    // CCTV time overlays
    ctx.fillStyle = "#ffffff";
    ctx.font = "8px monospace";
    ctx.fillText(new Date().toLocaleTimeString(), 12, 34);
    
    // Draw targets (people)
    targets.forEach((t, i) => {
      t.x += t.vx;
      t.y += t.vy;
      
      // Bounce
      if (t.x < 10 || t.x > cctvCanvas.width - 10) t.vx *= -1;
      if (t.y < 10 || t.y > cctvCanvas.height - 10) t.vy *= -1;
      
      // Draw tracked circle
      ctx.fillStyle = "rgba(43, 214, 163, 0.4)";
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw YOLO bounding boxes for first 5 nodes
      if (i < 5) {
        ctx.strokeStyle = i === 2 ? "var(--danger)" : "var(--accent-2)";
        ctx.lineWidth = 1;
        ctx.strokeRect(t.x - t.size - 4, t.y - t.size - 4, t.size * 2 + 8, t.size * 2 + 8);
        ctx.fillStyle = i === 2 ? "var(--danger)" : "var(--accent-2)";
        ctx.fillText(i === 2 ? "alert: suspicious" : "person: 92%", t.x - t.size - 4, t.y - t.size - 8);
      }
    });
    
    // Dynamic overlay count
    const overlayText = $("#cctvOverlayText");
    if (overlayText) {
      const baseCount = currentCCTVCamera === "Gate 8" ? 84 : currentCCTVCamera === "Gate 4" ? 64 : 32;
      const flux = Math.floor(Math.sin(Date.now() / 1000) * 3);
      overlayText.innerHTML = `
        FPS: 30.0<br>
        RESOLUTION: 1080p<br>
        LIVE COUNT: ${baseCount + flux}<br>
        OBJECTS: Person (94%), Scan status: ${currentCCTVCamera === "Gate 8" ? "SURGE RISK" : "NOMINAL"}
      `;
    }
    
    cctvAnimationId = requestAnimationFrame(drawFrame);
  }
  
  drawFrame();
}

// Traditional chart drawer for other roles
function drawChart(values, label) {
  const canvas = $("#trendCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--panel-solid");
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("--line");
  ctx.lineWidth = 1;
  for (let i = 1; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(40, i * 70);
    ctx.lineTo(width - 30, i * 70);
    ctx.stroke();
  }
  const max = Math.max(...values) + 10;
  const points = values.map((value, index) => [
    55 + index * ((width - 105) / (values.length - 1)),
    height - 45 - (value / max) * (height - 95),
  ]);
  const grad = ctx.createLinearGradient(0, 0, width, 0);
  grad.addColorStop(0, "#006edb");
  grad.addColorStop(1, "#00a676");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 6;
  ctx.beginPath();
  points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.stroke();
  ctx.fillStyle = "rgba(0, 166, 118, 0.16)";
  ctx.lineTo(points[points.length - 1][0], height - 45);
  ctx.lineTo(points[0][0], height - 45);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--text");
  ctx.font = "700 24px Inter, sans-serif";
  ctx.fillText(`${label} predictive trend`, 44, 36);
}

function initBlueprints() {
  if (!$("#blueprintAccordion")) return;
  $("#blueprintAccordion").innerHTML = blueprints.map((item, index) => `
    <details ${index === 0 ? "open" : ""}>
      <summary>${item.title}</summary>
      <pre>${item.body}</pre>
    </details>
  `).join("");
}

function renderSimulation() {
  const scenario = simulationScenarios[currentSimulationKey] || simulationScenarios.command;
  $("#commandSummary").innerHTML = `
    <strong>${scenario.title}</strong>
    <p>${scenario.summary}</p>
    <small>Progress: ${currentSimulationStep}/${scenario.steps.length} steps complete</small>
  `;
  $("#simulationLog").innerHTML = scenario.steps.map((step, index) => {
    const state = index < currentSimulationStep ? "done" : index === currentSimulationStep ? "active" : "pending";
    const label = state === "done" ? "Complete" : state === "active" ? "Ready" : "Waiting";
    return `<div class="log-item ${state}"><strong>${index + 1}. ${step}</strong><br><small>${label}</small></div>`;
  }).join("");
  $("#commandActions").innerHTML = scenario.actions.map((action) => `<button class="secondary-btn" data-command-action="${action}">${action}</button>`).join("");
}

function runSimulation(reason = "Command center simulation", scenarioKey = "command") {
  const drawer = $("#commandDrawer");
  drawer.classList.add("open");
  currentSimulationKey = simulationScenarios[scenarioKey] ? scenarioKey : inferScenario(reason);
  currentSimulationStep = 0;
  $("#simulationScenario").value = currentSimulationKey;
  renderSimulation();
  
  const existingReason = drawer.querySelector(".simulation-reason");
  if (existingReason) existingReason.remove();
  
  $("#commandSummary").insertAdjacentHTML("beforeend", `<p class="simulation-reason">${reason}</p>`);
}

function inferScenario(reason) {
  const lower = String(reason).toLowerCase();
  if (lower.includes("medic") || lower.includes("emergency") || lower.includes("collapsed")) return "emergency";
  if (lower.includes("transport") || lower.includes("metro") || lower.includes("shuttle")) return "transport";
  if (lower.includes("security") || lower.includes("camera") || lower.includes("alert")) return "security";
  if (lower.includes("sustainability") || lower.includes("energy") || lower.includes("carbon") || lower.includes("waste")) return "sustainability";
  if (lower.includes("crowd") || lower.includes("gate") || lower.includes("route")) return "crowd";
  return "command";
}

function startSimulation() {
  currentSimulationStep = 1;
  renderSimulation();
}

function nextSimulationStep() {
  const scenario = simulationScenarios[currentSimulationKey] || simulationScenarios.command;
  currentSimulationStep = Math.min(currentSimulationStep + 1, scenario.steps.length);
  renderSimulation();
}

function resetSimulation() {
  currentSimulationStep = 0;
  renderSimulation();
}

function commandAction(action) {
  const scenario = simulationScenarios[currentSimulationKey] || simulationScenarios.command;
  currentSimulationStep = scenario.steps.length;
  renderSimulation();
  $("#commandSummary").insertAdjacentHTML("beforeend", `<p class="simulation-reason">Action completed: ${action}</p>`);
}

function handleQuickAction(index) {
  const [label, target] = quickActions[index];
  document.getElementById(target).scrollIntoView();
  if (label === "Find my seat") {
    $("#routeFrom").value = "Gate 4";
    $("#routeTo").value = "Seat B-214";
    $("#routeMode").value = "Fastest route";
    routeText();
  } else if (label === "Nearest washroom") {
    askAssistant("Nearest washroom?");
  } else if (label === "Emergency report") {
    askAssistant("Someone collapsed near Gate 8");
  } else if (label === "Wheelchair route") {
    $("#routeFrom").value = "Gate 4";
    $("#routeTo").value = "Seat B-214";
    $("#routeMode").value = "Wheelchair route";
    routeText();
  } else if (label === "Crowd heatmap") {
    heatmapOn = true;
    $("#heatmapToggle").textContent = "Heatmap on";
    drawMap(true);
  } else if (label === "Analytics query") {
    setDashboard("Analytics");
    runSimulation("Natural-language analytics: SELECT * FROM crowd_snapshots");
  } else {
    renderModuleWorkspace(quickModuleMap[label] ?? 0);
  }
}

// User Profile Auth Actions
function getUsers() {
  return JSON.parse(localStorage.getItem("stadiumgptUsers") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("stadiumgptUsers", JSON.stringify(users));
}

function setSession(user) {
  localStorage.setItem("stadiumgptSession", JSON.stringify(user));
  renderAuthState();
  setDashboard(user.role || "Fans");
}

function getSession() {
  return JSON.parse(localStorage.getItem("stadiumgptSession") || "null");
}

function setAuthMode(mode) {
  authMode = mode;
  $("#authTitle").textContent = mode === "login" ? "Login" : "Register";
  $("#authSubmit").textContent = mode === "login" ? "Login" : "Create account";
  $("#nameField").classList.toggle("hidden", mode === "login");
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
  $("#authStatus").textContent = "";
}

function openAuth(mode = "login") {
  setAuthMode(mode);
  $("#authModal").classList.remove("hidden");
  $("#authModal").setAttribute("aria-hidden", "false");
  $("#authEmail").focus();
}

function closeAuth() {
  $("#authModal").classList.add("hidden");
  $("#authModal").setAttribute("aria-hidden", "true");
}

function renderAuthState() {
  const session = getSession();
  $("#loginOpen").classList.toggle("hidden", Boolean(session));
  $("#registerOpen").classList.toggle("hidden", Boolean(session));
  $("#userMenu").classList.toggle("hidden", !session);
  if (session) {
    $("#userName").textContent = `${session.name} - ${session.role}`;
    $("#roleSelect").value = session.role;
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const name = $("#authName").value.trim() || "Stadium Operator";
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;
  const role = $("#authRole").value;
  const status = $("#authStatus");
  if (!email || password.length < 6) {
    status.textContent = "Use a valid email and at least 6 password characters.";
    return;
  }
  const users = getUsers();
  if (authMode === "register") {
    if (users.some((user) => user.email === email)) {
      status.textContent = "That email is already registered. Try login.";
      return;
    }
    const user = { name, email, password, role };
    users.push(user);
    saveUsers(users);
    setSession({ name, email, role });
    closeAuth();
    runSimulation(`Registered and signed in: ${name} (${role})`);
    return;
  }
  const user = users.find((item) => item.email === email && item.password === password);
  if (!user) {
    status.textContent = "No matching account found. Register or use demo user.";
    return;
  }
  setSession({ name: user.name, email: user.email, role: user.role });
  closeAuth();
  runSimulation(`Logged in: ${user.name} (${user.role})`);
}

function demoLogin() {
  setSession({ name: "Demo Operator", email: "demo@stadiumgpt.ai", role: $("#authRole").value || "Operations" });
  closeAuth();
  runSimulation("Demo user signed in with full feature access");
}

function logout() {
  const session = getSession();
  localStorage.removeItem("stadiumgptSession");
  renderAuthState();
  runSimulation(`${session?.name || "User"} logged out`);
}

// Event Bindings
function wireEvents() {
  $("#loginOpen").addEventListener("click", () => openAuth("login"));
  $("#registerOpen").addEventListener("click", () => openAuth("register"));
  $("#authClose").addEventListener("click", closeAuth);
  $("#authModal").addEventListener("click", (event) => {
    if (event.target.id === "authModal") closeAuth();
  });
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
  });
  $("#authForm").addEventListener("submit", handleAuthSubmit);
  $("#demoLogin").addEventListener("click", demoLogin);
  $("#logoutButton").addEventListener("click", logout);
  $("#menuButton").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
  
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const active = $("#dashboardTabs button.active").dataset.dashboard;
    renderDashboard(active);
  });
  
  $("#contrastToggle").addEventListener("click", () => document.body.classList.toggle("high-contrast"));
  
  $("#roleSelect").addEventListener("change", (event) => {
    document.getElementById("dashboards").scrollIntoView();
    setDashboard(event.target.value);
  });
  
  $("#routeForm").addEventListener("submit", (event) => { 
    event.preventDefault(); 
    routeText(); 
  });
  
  $("#routeOutput").addEventListener("click", (event) => {
    const button = event.target.closest("[data-route-action]");
    if (button) handleRouteAction(button.dataset.routeAction);
  });
  
  $("#addEventButton").addEventListener("click", injectLiveEvent);
  $("#refreshRiskButton").addEventListener("click", refreshRisk);
  $("#runQueueButton").addEventListener("click", () => runAutomationQueue());
  
  $("#eventStream").addEventListener("click", (event) => {
    const button = event.target.closest("[data-event-action]");
    if (!button) return;
    const eventData = liveEvents[Number(button.dataset.eventAction)];
    runSimulation(`Event action started: ${eventData[1]}`, inferScenario(eventData[1]));
  });
  
  $("#automationQueue").addEventListener("click", (event) => {
    const button = event.target.closest("[data-queue-action]");
    if (button) runAutomationQueue(Number(button.dataset.queueAction));
  });
  
  $("#chatForm").addEventListener("submit", handleChat);
  
  $("#heatmapToggle").addEventListener("click", (event) => {
    heatmapOn = !heatmapOn;
    event.target.textContent = heatmapOn ? "Heatmap on" : "Heatmap off";
    drawMap(heatmapOn);
  });
  
  $("#stadiumMap").addEventListener("click", (event) => {
    const zone = event.target.closest("[data-zone]");
    if (!zone) return;
    
    // Set path finding fields and run
    const currentFrom = $("#routeFrom").value;
    if (!currentFrom || currentFrom === zone.dataset.zone) {
      $("#routeFrom").value = zone.dataset.zone;
    } else {
      $("#routeTo").value = zone.dataset.zone;
      routeText();
    }
    runSimulation(`Zone selected: ${zone.dataset.zone}`);
  });
  
  $("#quickGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick]");
    if (button) handleQuickAction(Number(button.dataset.quick));
  });
  
  $("#scenarioRow").addEventListener("click", (event) => {
    const button = event.target.closest("[data-scenario]");
    if (button) askAssistant(button.dataset.scenario);
  });
  
  $("#moduleGrid").addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-module]");
    const runButton = event.target.closest("[data-run-module]");
    const card = event.target.closest("[data-card]");
    if (openButton) renderModuleWorkspace(Number(openButton.dataset.openModule));
    if (runButton) {
      const index = Number(runButton.dataset.runModule);
      renderModuleWorkspace(index);
      runSimulation(modules[index].action);
    }
    if (card && !openButton && !runButton) renderModuleWorkspace(Number(card.dataset.card));
  });
  
  $("#featureWorkspace").addEventListener("click", (event) => {
    const action = event.target.closest("[data-feature-action]");
    if (action) runSimulation(`Feature action: ${action.dataset.featureAction}`);
  });
  
  $("#dashboardTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) setDashboard(button.dataset.dashboard);
  });
  
  $("#dashboardActions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-dashboard-action]");
    if (button) {
      const actionName = button.dataset.dashboardAction;
      runSimulation(`Dashboard action triggered: ${actionName}`);
      
      // Additional actions trigger updates
      if (actionName === "Toggle HVAC Eco Mode") {
        const slider = document.getElementById("hvacSlider");
        if (slider) {
          slider.value = 18;
          slider.dispatchEvent(new Event("change"));
        }
      }
      if (actionName === "Run Garbage Routing") {
        alert("Waste collection optimized loop scheduled. Volunteers assigned.");
      }
      if (actionName === "Force Lock Sector D") {
        alert("Lockdown protocol engaged for Sector D corridors.");
      }
      if (actionName === "Clear Camera Alerts") {
        alert("Clean camera status reset. AI alarms cleared.");
      }
      if (actionName === "Simulate Casualty Report") {
        registerNewIncident("medical", "Heat exhaust casualty reported near concessions");
      }
    }
  });
  
  document.querySelectorAll("[data-demo]").forEach((button) => button.addEventListener("click", () => runSimulation()));
  document.querySelectorAll("[data-scroll]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.scroll).scrollIntoView()));
  $("#closeDrawer").addEventListener("click", () => $("#commandDrawer").classList.remove("open"));
  
  $("#simulationScenario").addEventListener("change", (event) => {
    currentSimulationKey = event.target.value;
    currentSimulationStep = 0;
    renderSimulation();
  });
  
  $("#startSimulation").addEventListener("click", startSimulation);
  $("#nextSimulation").addEventListener("click", nextSimulationStep);
  $("#resetSimulation").addEventListener("click", resetSimulation);
  
  $("#commandActions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-command-action]");
    if (button) commandAction(button.dataset.commandAction);
  });
  
  $("#smartSearch").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runSimulation(`Natural-language analytics: ${event.target.value || "Predict crowd density after halftime"}`);
      setDashboard("Analytics");
    }
  });
}

function boot() {
  document.body.classList.add("dark");
  initNav();
  initQuickAccess();
  initKpis();
  renderLiveOps();
  initModules();
  drawMap(true);
  routeText();
  initAssistant();
  initDashboards();
  initBlueprints();
  renderAuthState();
  setAuthMode("login");
  renderSimulation();
  wireEvents();
}

boot();
