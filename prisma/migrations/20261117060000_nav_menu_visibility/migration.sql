-- CreateTable
CREATE TABLE "nav_menu_visibility" (
    "href" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nav_menu_visibility_pkey" PRIMARY KEY ("href")
);

-- CreateIndex
CREATE INDEX "nav_menu_visibility_section_idx" ON "nav_menu_visibility"("section");

-- Enable RLS (PostgREST default deny; Prisma privileged role continues to work)
ALTER TABLE public.nav_menu_visibility ENABLE ROW LEVEL SECURITY;
