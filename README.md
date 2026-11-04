# snsoft_website

SN Soft homepage (Next.js App Router + TypeScript + Tailwind CSS + Prisma/Supabase).

## Getting Started

1. `.env.local` / `.env`에 Supabase **Transaction pooler**(`DATABASE_URL`, 포트 6543)와 **Session pooler**(`DIRECT_URL`, 포트 5432)를 넣습니다.
2. 의존성 설치 후 마이그레이션·시드:

```bash
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).  
Admin: [http://localhost:3000/admin](http://localhost:3000/admin) (`admin` / `admin123`)

## Database

Tables: `inquiries`, `faqs`, `screen_slides`, `admin_users`.
