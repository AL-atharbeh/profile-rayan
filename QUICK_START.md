# ⚡ البدء السريع - 3 خطوات فقط!

## 🎯 افعل هذا الآن:

### 1️⃣ أنشئ ملف `.env.local` في جذر المشروع:

```env
NEXT_PUBLIC_SUPABASE_URL=https://mjlsveljvauthnbcaxsq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbHN2ZWxqdmF1dGhuYmNheHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDQ3ODQsImV4cCI6MjA3NzUyMDc4NH0.zvZ8P3WynpHJsLdKF3pt2Zj_QpR9Bg5UpmHc7dC9vJw

ADMIN_PASSWORD=admin123
```

---

### 2️⃣ اذهب لـ Supabase → SQL Editor → الصق هذا الكود:

```sql
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

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON profile FOR SELECT USING (true);
CREATE POLICY "Enable update for all users" ON profile FOR UPDATE USING (true);
CREATE POLICY "Enable insert for all users" ON profile FOR INSERT WITH CHECK (true);
```

---

### 3️⃣ أنشئ Storage Buckets:

في Supabase → **Storage** → **Create bucket**:

1. اسم: `avatars` | Public: ✅ Yes
2. اسم: `backgrounds` | Public: ✅ Yes

---

## ✅ خلاص! شغّل المشروع:

```bash
npm run dev
```

---

## 🎨 لوحة التحكم:

```
http://localhost:3000/admin
كلمة السر: admin123
```

---

## 📚 للتفاصيل الكاملة:

اقرأ: `ADMIN_GUIDE_AR.md`

---

<div align="center">

## 🎉 جاهز!

**3 خطوات وانتهى!** 🚀

</div>

