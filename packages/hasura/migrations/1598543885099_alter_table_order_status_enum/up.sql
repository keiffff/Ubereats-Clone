DELETE FROM order_status WHERE status = 'completed';
INSERT INTO order_status
  (status)
VALUES
  ('approved'),
  ('delivered');
