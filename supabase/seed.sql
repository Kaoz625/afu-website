INSERT INTO events (title, date, location, description, image_url) VALUES
  ('Community Mixer & Meet Up', '2025-02-15', 'Brooklyn, NY', 'Come connect with your neighbors, share food, and build bonds that last.', '/images/fb/fb-01.jpg'),
  ('Free Food Distribution', '2025-03-08', 'East Flatbush, Brooklyn', 'We show up where it matters. No questions asked — just community taking care of community.', '/images/fb/fb-09.jpg'),
  ('Women''s Empowerment Gathering', '2025-04-20', 'Crown Heights, Brooklyn', 'A space built by and for Black women to connect, heal, and rise together.', '/images/ig/ig-01.jpg'),
  ('AFU Family Day', '2025-05-25', 'Prospect Park, Brooklyn', 'The whole family is invited. Food, music, kids activities, and real community love.', '/images/fb/fb-19.jpg')
ON CONFLICT DO NOTHING;
