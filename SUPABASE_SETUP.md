# إعداد Supabase

## الخطوات المطلوبة:

### 1. إنشاء ملف `.env.local`

قم بإنشاء ملف جديد باسم `.env.local` في المجلد الرئيسي للمشروع وأضف التالي:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. الحصول على بيانات Supabase

1. اذهب إلى [Supabase Dashboard](https://app.supabase.com)
2. قم بإنشاء مشروع جديد (أو استخدم مشروع موجود)
3. بعد إنشاء المشروع، اذهب إلى **Settings** > **API**
4. انسخ:
   - **Project URL** → ضعه في `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → ضعه في `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. مثال على الملف:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. إعداد قاعدة البيانات

بعد الحصول على بيانات Supabase، يجب إنشاء جدول `profile` في قاعدة البيانات:

1. اذهب إلى **SQL Editor** في Supabase Dashboard
2. قم بتشغيل هذا الاستعلام:

```sql
-- إنشاء جدول profile
CREATE TABLE IF NOT EXISTS profile (
  id TEXT PRIMARY KEY DEFAULT '1',
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  avatar_url TEXT,
  background_url TEXT,
  stats JSONB DEFAULT '{"followers": "0", "likes": "0", "posts": "0"}',
  links JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- إضافة بيانات افتراضية
INSERT INTO profile (id, name, title, avatar_url, background_url, stats, links)
VALUES (
  '1',
  'ريان دشتي',
  'ممثل قانوني || ناصر ظافر العجمي',
  '/profile.jpeg',
  '/back.jpeg',
  '{"followers": "132K", "likes": "2.4M", "posts": "370"}',
  '[
    {"title": "MAKEUP STORE", "url": "https://yourstore.com", "icon": "instagram"},
    {"title": "SNAPCHAT", "url": "https://snapchat.com/add/yourusername", "icon": "snapchat"},
    {"title": "WHATSAPP", "url": "https://wa.me/966500000000", "icon": "whatsapp"},
    {"title": "BEAUTY TIPS", "url": "https://tiktok.com/@yourusername", "icon": "tiktok"},
    {"title": "FACEBOOK", "url": "https://facebook.com/yourusername", "icon": "facebook"}
  ]'
)
ON CONFLICT (id) DO NOTHING;

-- تفعيل Row Level Security (اختياري)
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;

-- السماح بالقراءة للجميع
CREATE POLICY "Allow public read access" ON profile
  FOR SELECT USING (true);

-- السماح بالتحديث للجميع (يمكنك تقييد هذا لاحقاً)
CREATE POLICY "Allow public update" ON profile
  FOR UPDATE USING (true);
```

### 5. إعداد Storage (اختياري - لرفع الصور)

إذا كنت تريد رفع الصور:

1. اذهب إلى **Storage** في Supabase Dashboard
2. أنشئ bucket جديد باسم `avatars`
3. فعّل **Public bucket** للسماح بالوصول العام

### 6. إعادة تشغيل Docker

بعد إنشاء ملف `.env.local`:

```bash
docker-compose down
docker-compose up --build -d
```

أو إذا كنت تريد تحديث المتغيرات البيئية فقط:

```bash
docker-compose restart
```

## ملاحظات مهمة:

- ملف `.env.local` موجود في `.gitignore` ولن يتم رفعه على GitHub
- تأكد من عدم مشاركة بيانات Supabase الخاصة بك علناً
- يمكنك استخدام `.env.example` كقالب (لكن لا تضيف بيانات حقيقية فيه)
