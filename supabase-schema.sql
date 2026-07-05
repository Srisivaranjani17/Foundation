-- MIASei Foundation – Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor

-- ─── Volunteers Table ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  occupation TEXT,
  area_of_interest TEXT NOT NULL,
  availability TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (public form submission)
CREATE POLICY "Allow public volunteer submissions"
  ON volunteers FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated admin can read
CREATE POLICY "Allow authenticated reads"
  ON volunteers FOR SELECT
  TO authenticated
  USING (true);

-- ─── Donations Table ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  amount NUMERIC NOT NULL CHECK (amount > 0),
  message TEXT,
  razorpay_payment_id TEXT,
  razorpay_order_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (payment recording)
CREATE POLICY "Allow public donation inserts"
  ON donations FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated admin can read
CREATE POLICY "Allow authenticated reads on donations"
  ON donations FOR SELECT
  TO authenticated
  USING (true);

-- ─── Contact Messages Table ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert
CREATE POLICY "Allow public contact submissions"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated admin can read
CREATE POLICY "Allow authenticated reads on messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- ─── Indexes for performance ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_volunteers_email ON volunteers(email);
CREATE INDEX IF NOT EXISTS idx_volunteers_status ON volunteers(status);
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations(status);
CREATE INDEX IF NOT EXISTS idx_donations_email ON donations(email);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_messages(created_at DESC);
