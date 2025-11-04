# نشر المشروع على Vercel

## الخطوات المطلوبة:

### 1. إنشاء حساب على Vercel
- اذهب إلى [vercel.com](https://vercel.com)
- سجل دخولك باستخدام GitHub

### 2. ربط المشروع مع Vercel

#### الطريقة الأولى: من خلال الموقع
1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط على **Add New Project**
3. اختر المستودع: `AL-atharbeh/profile-rayan`
4. اضغط **Import**

#### الطريقة الثانية: من خلال CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# نشر المشروع
vercel

# أو للنشر مباشرة
vercel --prod
```

### 3. إعداد Environment Variables

في Vercel Dashboard:
1. اذهب إلى **Settings** → **Environment Variables**
2. أضف المتغيرات التالية:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 4. إعدادات Build

Vercel سيكتشف تلقائياً:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (أو `next build`)
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### 5. النشر التلقائي

بعد ربط المشروع:
- كل push على فرع `main` سيتم نشره تلقائياً على Vercel
- يمكنك رؤية التحديثات في **Deployments** tab

### 6. الحصول على رابط المشروع

بعد النشر:
- ستحصل على رابط مثل: `profile-rayan.vercel.app`
- يمكنك إضافة domain مخصص من **Settings** → **Domains**

## ملاحظات مهمة:

1. **Docker vs Vercel:**
   - Vercel لا يحتاج Docker
   - Vercel يعمل مباشرة مع Next.js
   - ملفات Docker (Dockerfile, docker-compose.yml) لن تُستخدم على Vercel

2. **Environment Variables:**
   - تأكد من إضافة جميع المتغيرات البيئية في Vercel
   - ملف `.env.local` لا يعمل على Vercel (يجب استخدام Environment Variables في Dashboard)

3. **Build Settings:**
   - Vercel يستخدم Node.js 20.x افتراضياً
   - لا حاجة لتعديل إعدادات البناء في معظم الحالات

4. **تحديثات تلقائية:**
   - كل commit على GitHub سيتم نشره تلقائياً
   - يمكنك تعطيل هذا من Settings

## استكشاف الأخطاء:

إذا واجهت مشاكل:
1. تحقق من **Deployments** → **Functions Logs**
2. تأكد من أن جميع Environment Variables موجودة
3. تحقق من أن Build Command يعمل محلياً

## رابط المشروع على GitHub:
https://github.com/AL-atharbeh/profile-rayan

