-- Enable RLS so PostgREST anon/authenticated cannot read/write these tables.
-- Prisma connects as a privileged role and continues to bypass RLS.
-- No policies are added on purpose (default deny for non-bypass roles).

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.screen_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public._prisma_migrations ENABLE ROW LEVEL SECURITY;
