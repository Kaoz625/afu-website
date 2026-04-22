-- Create signups table
CREATE TABLE IF NOT EXISTS signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT unique_email UNIQUE(email)
);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_signups_email ON signups(email);

-- Create index for created_at queries
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON signups(created_at);
