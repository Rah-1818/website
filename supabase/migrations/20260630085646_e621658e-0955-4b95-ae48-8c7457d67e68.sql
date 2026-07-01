
DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON public.enquiries;
CREATE POLICY "Anyone can submit a valid enquiry" ON public.enquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 120
    AND char_length(email) BETWEEN 3 AND 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(phone) BETWEEN 3 AND 40
    AND (company_name IS NULL OR char_length(company_name) <= 160)
    AND (message IS NULL OR char_length(message) <= 2000)
    AND (plan_interest IS NULL OR plan_interest IN ('starter','growth','unsure'))
  );
