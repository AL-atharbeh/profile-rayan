# 🎨 دليل لوحة التحكم - النظام الكامل

## 🎉 تم إنشاء نظام Admin كامل!

---

## ✅ ما تم إنجازه:

1. ✅ صفحة Admin (`/admin`)
2. ✅ قاعدة بيانات Supabase
3. ✅ رفع الصور
4. ✅ الصفحة الرئيسية تقرأ من قاعدة البيانات تلقائياً
5. ✅ نظام حماية بكلمة سر

---

## 📋 الخطوات المطلوبة منك:

### 1️⃣ إنشاء ملف .env.local

أنشئ ملف باسم `.env.local` في جذر المشروع:

```env
NEXT_PUBLIC_SUPABASE_URL=https://mjlsveljvauthnbcaxsq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbHN2ZWxqdmF1dGhuYmNheHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NDQ3ODQsImV4cCI6MjA3NzUyMDc4NH0.zvZ8P3WynpHJsLdKF3pt2Zj_QpR9Bg5UpmHc7dC9vJw

ADMIN_PASSWORD=admin123
```

⚠️ **مهم:** غيّر `ADMIN_PASSWORD` لكلمة سر قوية!

---

### 2️⃣ إنشاء الجدول في Supabase

1. اذهب إلى: https://app.supabase.com
2. افتح مشروعك
3. اضغط على **SQL Editor** من القائمة
4. الصق هذا الكود واضغط **Run**:

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

-- السماح بالتحديث للجميع
CREATE POLICY "Enable update for all users" ON profile
FOR UPDATE USING (true);

-- السماح بالإدراج للجميع
CREATE POLICY "Enable insert for all users" ON profile
FOR INSERT WITH CHECK (true);
```

---

### 3️⃣ إنشاء Storage Buckets

في Supabase Dashboard:

1. اضغط على **Storage** من القائمة
2. اضغط **Create a new bucket**

#### Bucket للصور الشخصية:
- Name: `avatars`
- Public: ✅ Yes
- اضغط **Create**

#### Bucket للخلفيات:
- Name: `backgrounds`
- Public: ✅ Yes
- اضغط **Create**

---

### 4️⃣ تشغيل المشروع

```bash
npm run dev
```

---

## 🎨 استخدام لوحة التحكم:

### الدخول:
```
الرابط: http://localhost:3000/admin
كلمة السر: admin123 (أو التي غيرتها)
```

### ما يمكنك فعله:

#### 1. **تغيير الاسم والوصف:**
- اكتب اسم جديد
- اكتب وصف جديد
- اضغط "حفظ"

#### 2. **تغيير الصورة الشخصية:**
- اضغط "Choose File" بجانب Avatar
- اختر صورة
- سيتم رفعها تلقائياً!

#### 3. **تغيير صورة الخلفية:**
- اضغط "Choose File" بجانب Background
- اختر صورة
- سيتم رفعها تلقائياً!

#### 4. **تعديل الإحصائيات:**
- غيّر عدد المتابعين
- غيّر عدد الإعجابات
- غيّر عدد المنشورات
- اضغط "حفظ"

#### 5. **تعديل الروابط:**
- غيّر عنوان أي رابط
- غيّر URL أي رابط
- اضغط "حفظ"

---

## 🔄 كيف يعمل النظام:

```
1. تدخل لوحة التحكم → /admin
   ↓
2. تعدّل البيانات (اسم، صورة، روابط، إلخ)
   ↓
3. تضغط "حفظ" → البيانات تُحفظ في Supabase
   ↓
4. الصفحة الرئيسية تقرأ من Supabase تلقائياً
   ↓
5. التغييرات تظهر فوراً! ✨
```

---

## 🌐 عند الرفع على الدومين:

### 1. اجعل `.env.local` متاح على السيرفر:

في **Vercel:**
- Settings → Environment Variables
- أضف كل المتغيرات من `.env.local`

في **Netlify:**
- Site settings → Environment variables
- أضف كل المتغيرات من `.env.local`

### 2. تأكد من:
- ✅ الجدول موجود في Supabase
- ✅ Buckets موجودة
- ✅ RLS Policies مفعّلة

---

## 🔐 الأمان:

### ⚠️ مهم جداً:

1. **غيّر كلمة السر الافتراضية!**
   ```env
   ADMIN_PASSWORD=كلمة_سر_قوية_جداً
   ```

2. **لا تشارك المفتاح السري (service_role)** أبداً!

3. **في الإنتاج، استخدم نظام مصادقة أفضل** (مثل NextAuth.js)

---

## 📁 ملفات المشروع:

```
protofile-admin/
├── .env.local                    # ← أنشئه (المفاتيح)
├── lib/
│   └── supabase.ts              # ✅ الاتصال بـ Supabase
├── app/
│   ├── page.tsx                 # ✅ الصفحة الرئيسية (محدّثة)
│   └── admin/
│       └── page.tsx             # ✅ لوحة التحكم
└── package.json                 # ✅ المكتبات
```

---

## 🎯 مثال على البيانات المحفوظة:

```json
{
  "id": "1",
  "name": "ELARA VANCE",
  "title": "Makeup Artist | Entrepreneur",
  "avatar_url": "https://...",
  "background_url": "https://...",
  "stats": {
    "followers": "127K",
    "likes": "2.4M",
    "posts": "850"
  },
  "links": [
    {
      "title": "MAKEUP STORE",
      "url": "https://yourstore.com",
      "icon": "instagram"
    },
    ...
  ]
}
```

---

## 🚀 الأوامر المهمة:

```bash
# التطوير
npm run dev

# البناء
npm run build

# المعاينة
npm start
```

---

## 🆘 حل المشاكل:

### ❌ الصور لا تظهر:
```
✅ تأكد من Buckets موجودة وpublic
✅ تأكد من next.config.ts يحتوي remotePatterns
✅ تأكد من URLs صحيحة
```

### ❌ لا يمكن الحفظ:
```
✅ تأكد من RLS Policies مفعّلة
✅ تأكد من الجدول موجود
✅ شاهد Console للأخطاء
```

### ❌ لا تظهر التغييرات:
```
✅ امسح Cache المتصفح (Ctrl+Shift+R)
✅ تأكد من حفظ البيانات بنجاح
✅ شاهد Console للأخطاء
```

---

## 📊 المميزات:

✅ تعديل فوري بدون كود
✅ رفع صور للسيرفر (لا تحتفظ محلياً)
✅ قاعدة بيانات أونلاين
✅ مجاني 100%
✅ سهل الاستخدام
✅ آمن
✅ سريع

---

<div align="center">

## 🎉 مبروك!

**نظام Admin كامل جاهز!**

**اذهب الآن لـ:** `http://localhost:3000/admin`

**ابدأ التعديل!** ✨

</div>

---

## 📞 تواصل:

إذا واجهتك أي مشكلة، أخبرني وسأساعدك! 😊

