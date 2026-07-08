CREATE TABLE users (
  id UUID PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('fan','organizer','security','medical','transport','volunteer','sustainability','operations','admin')),
  name TEXT NOT NULL,
  language TEXT DEFAULT 'en',
  accessibility_profile JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE venues (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  timezone TEXT NOT NULL,
  capacity INTEGER NOT NULL
);

CREATE TABLE zones (
  id UUID PRIMARY KEY,
  venue_id UUID REFERENCES venues(id),
  level TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  geojson JSONB NOT NULL
);

CREATE TABLE sensors (
  id UUID PRIMARY KEY,
  zone_id UUID REFERENCES zones(id),
  source_type TEXT NOT NULL,
  health TEXT NOT NULL,
  last_seen_at TIMESTAMPTZ
);

CREATE TABLE crowd_snapshots (
  id UUID PRIMARY KEY,
  zone_id UUID REFERENCES zones(id),
  density NUMERIC NOT NULL,
  velocity NUMERIC NOT NULL,
  risk_score NUMERIC NOT NULL,
  captured_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE incidents (
  id UUID PRIMARY KEY,
  zone_id UUID REFERENCES zones(id),
  type TEXT NOT NULL,
  severity TEXT NOT NULL,
  status TEXT NOT NULL,
  summary TEXT NOT NULL,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE routes (
  id UUID PRIMARY KEY,
  from_zone UUID REFERENCES zones(id),
  to_zone UUID REFERENCES zones(id),
  mode TEXT NOT NULL,
  eta_seconds INTEGER NOT NULL,
  steps_json JSONB NOT NULL
);

CREATE TABLE volunteer_tasks (
  id UUID PRIMARY KEY,
  assignee_id UUID REFERENCES users(id),
  zone_id UUID REFERENCES zones(id),
  priority TEXT NOT NULL,
  instructions TEXT NOT NULL,
  status TEXT NOT NULL
);

CREATE TABLE sustainability_metrics (
  id UUID PRIMARY KEY,
  venue_id UUID REFERENCES venues(id),
  energy_kw NUMERIC NOT NULL,
  water_l NUMERIC NOT NULL,
  waste_kg NUMERIC NOT NULL,
  carbon_kg NUMERIC NOT NULL,
  captured_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE agent_runs (
  id UUID PRIMARY KEY,
  intent TEXT NOT NULL,
  model TEXT NOT NULL,
  input_ref TEXT,
  output_json JSONB NOT NULL,
  confidence NUMERIC NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
