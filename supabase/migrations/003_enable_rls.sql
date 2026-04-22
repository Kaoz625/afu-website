-- Requires PostgreSQL 17+ / Supabase's patched build for CREATE POLICY IF NOT EXISTS
-- Enable Row Level Security on events table
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Allow public SELECT on events
CREATE POLICY IF NOT EXISTS "Allow public select on events"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Enable Row Level Security on signups table
ALTER TABLE signups ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert signups
CREATE POLICY IF NOT EXISTS "Allow authenticated insert on signups"
  ON signups
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow service role to insert signups (for backend operations)
CREATE POLICY IF NOT EXISTS "Allow service role insert on signups"
  ON signups
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Allow service role to select signups
CREATE POLICY IF NOT EXISTS "Allow service role select on signups"
  ON signups
  FOR SELECT
  TO service_role
  USING (true);
