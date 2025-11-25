/*
  # Create leads table for Beacon House TOF landing page

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Parent/Guardian name
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `student_grade` (text) - Current grade of the student (8-12)
      - `school_name` (text) - Name of the student's school
      - `request_type` (text) - Type of request: 'call' or 'evaluation'
      - `created_at` (timestamptz) - Timestamp when lead was captured

  2. Security
    - Enable RLS on `leads` table
    - Add policy for public (anonymous) users to insert leads only
    - No public read access for privacy and data protection
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  student_grade text NOT NULL,
  school_name text NOT NULL,
  request_type text NOT NULL CHECK (request_type IN ('call', 'evaluation')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to insert leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
