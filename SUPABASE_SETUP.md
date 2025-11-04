# 🚀 إعداد Supabase - خطوة بخطوة

## ✅ ما تم إنجازه:

1. ✅ تثبيت مكتبة Supabase
2. ✅ إنشاء ملف `lib/supabase.ts` (الاتصال بقاعدة البيانات)
3. ✅ إنشاء صفحة Admin (`app/admin/page.tsx`)

---

## 📝 الخطوات المتبقية:

### 1️⃣ **إنشاء ملف .env.local**

أنشئ ملف `.env.local` في جذر المشروع وضع فيه:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://mjlsveljvauthnbcaxsq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbHN2ZWxqdmF1dGhuYmNheHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDQ3ODQsImV4cCI6MjA3NzUyMDc4NH0.zvZ8P3WynpHJsLdKF3pt2Zj_QpR9Bg5UpmHc7dC9vJw

# Admin Password (غيّره لكلمة سر قوية!)
ADMIN_PASSWORD=admin123
```

---

### 2️⃣ **إنشاء الجدول في Supabase**

اذهب إلى [Supabase Dashboard](https://app.supabase.com) → مشروعك → **SQL Editor**

الصق هذا الكود واضغط **Run**:

```sql
-- إنشاء جدول profile
CREATE TABLE profile (
  id TEXT PRIMARY KEY DEFAULT '1',
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  avatar_url TEXT NOT NULL,
  background_url TEXT NOT NULL,
  stats JSONB NOT NULL,
  links JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- إدراج بيانات افتراضية
INSERT INTO profile (id, name, title, avatar_url, background_url, stats, links)
VALUES (
  '1',
  'ELARA VANCE',
  'Makeup Artist | Entrepreneur',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&q=80',
  '{"followers": "127K", "likes": "2.4M", "posts": "850"}',
  '[
    {"title": "MAKEUP STORE", "url": "https://yourstore.com", "icon": "instagram"},
    {"title": "INSPIRATION", "url": "https://instagram.com/yourusername", "icon": "instagram"},
    {"title": "SNAPCHAT", "url": "https://snapchat.com/add/yourusername", "icon": "snapchat"},
    {"title": "WHATSAPP", "url": "https://wa.me/966500000000", "icon": "whatsapp"},
    {"title": "BEAUTY TIPS", "url": "https://tiktok.com/@yourusername", "icon": "tiktok"},
    {"title": "FACEBOOK", "url": "https://facebook.com/yourusername", "icon": "facebook"}
  ]'
);

-- تفعيل Row Level Security (RLS)
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;

-- السماح بالقراءة للجميع
CREATE POLICY "Enable read access for all users" ON profile
FOR SELECT USING (true);

-- السماح بالتحديث للجميع (في الإنتاج، غيّر هذا!)
CREATE POLICY "Enable update for all users" ON profile
FOR UPDATE USING (true);

-- السماح بالإدراج للجميع (في الإنتاج، غيّر هذا!)
CREATE POLICY "Enable insert for all users" ON profile
FOR INSERT WITH CHECK (true);
```

---

### 3️⃣ **إنشاء Storage Buckets**

في Supabase Dashboard → **Storage** → **Create a new bucket**

أنشئ **2 buckets**:

#### Bucket 1: `avatars`
- Name: `avatars`
- Public: ✅ Yes (اجعله public)
- اضغط Create

#### Bucket 2: `backgrounds`
- Name: `backgrounds`
- Public: ✅ Yes (اجعله public)
- اضغط Create

---

### 4️⃣ **اختبار الصفحة**

```bash
npm run dev
```

ثم افتح: **http://localhost:3000/admin**

**كلمة السر:** `admin123`

---

## 🎨 الآن عدّل الصفحة الرئيسية لتقرأ من Supabase!

سأعدّل `app/page.tsx` الآن...


