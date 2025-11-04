# 🎨 كيف تخصص صفحتك - دليل سريع

## التصميم الجديد ✨

تم تحديث التصميم ليكون **بدون إطار هاتف** مع:
- ✅ صورة دائرية للبروفايل
- ✅ تصميم مباشر على الصفحة (Full Screen)
- ✅ تم حذف الأيقونات السفلية
- ✅ أزرار مثل: MAKEUP STORE, INSPIRATION, BEAUTY TIPS, FREE E-BOOK

---

## 🖼️ 1. تغيير صورة البروفايل الدائرية

في ملف `app/page.tsx` السطر **48**:

```tsx
<Image
  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
  alt="Profile"
  width={128}
  height={128}
  className="w-full h-full object-cover"
  priority
/>
```

**لاستخدام صورتك:**

### الطريقة 1: صورة من جهازك
1. ضع صورتك في مجلد `public/` (مثلاً: `public/my-avatar.jpg`)
2. غير `src` إلى:
```tsx
src="/my-avatar.jpg"
```

### الطريقة 2: صورة من الإنترنت
استخدم رابط الصورة مباشرة:
```tsx
src="https://your-image-url.com/photo.jpg"
```

---

## 🎨 2. تغيير صورة الخلفية

في السطر **29**:

```tsx
backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1080&q=80')`,
```

**غيرها إلى:**
- صورتك الخاصة: `url('/my-background.jpg')`
- أو رابط من الإنترنت

---

## ✍️ 3. تغيير الاسم والوصف

في السطر **62-66**:

```tsx
<h1 className="...">
  ELARA VANCE  ← ضع اسمك هنا
</h1>
<p className="...">
  Makeup Artist | Entrepreneur  ← ضع وصفك هنا
</p>
```

**مثال:**
```tsx
<h1>أحمد العتيبي</h1>
<p>مصمم جرافيك | منشئ محتوى</p>
```

---

## 🔗 4. تغيير الأزرار والروابط

في السطر **14-19**:

```tsx
const appLinks = [
  { title: 'MAKEUP STORE', url: 'https://yourstore.com', icon: <InstagramIcon /> },
  { title: 'INSPIRATION', url: 'https://instagram.com/yourusername', icon: <InstagramIcon /> },
  { title: 'BEAUTY TIPS', url: 'https://tiktok.com/@yourusername', icon: <TikTokIcon /> },
  { title: 'FREE E-BOOK', url: 'https://yourebook.com', icon: <FacebookIcon /> },
];
```

### كيف تغير الأزرار:

**مثال 1: تغيير العنوان والرابط**
```tsx
{ title: 'MY INSTAGRAM', url: 'https://instagram.com/YOUR_USERNAME', icon: <InstagramIcon /> },
```

**مثال 2: إضافة زر جديد**
```tsx
const appLinks = [
  { title: 'INSTAGRAM', url: 'https://instagram.com/ahmed', icon: <InstagramIcon /> },
  { title: 'TIKTOK', url: 'https://tiktok.com/@ahmed', icon: <TikTokIcon /> },
  { title: 'YOUTUBE', url: 'https://youtube.com/@ahmed', icon: <YouTubeIcon /> },
  { title: 'MY SHOP', url: 'https://myshop.com', icon: <FacebookIcon /> },
  { title: 'CONTACT ME', url: 'mailto:ahmed@email.com', icon: <WhatsAppIcon /> },
];
```

**مثال 3: حذف زر**
احذف السطر الكامل من الـ array

---

## 🎨 5. تغيير لون الهايلايت (Overlay)

في السطر **35**:

```tsx
<div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>
```

**ألوان جاهزة:**
```tsx
bg-red-900/30      ← أحمر (افتراضي)
bg-purple-900/30   ← بنفسجي
bg-blue-900/30     ← أزرق
bg-pink-900/30     ← وردي
bg-amber-900/30    ← عنبري/ذهبي
bg-green-900/30    ← أخضر
bg-indigo-900/30   ← نيلي
```

**تغيير الشدة:**
- `/20` - خفيف جداً
- `/30` - خفيف (افتراضي)
- `/40` - متوسط
- `/50` - قوي

---

## 📝 6. تغيير النص السفلي

في السطر **95-97**:

```tsx
<p className="text-white/80 text-xs tracking-wide drop-shadow-lg">
  For beauty advice and makeup mastery.  ← غير النص هنا
</p>
```

**أمثلة:**
```tsx
تابعني على جميع المنصات
For inquiries and collaborations
Follow me for daily updates
```

---

## 🎯 أمثلة كاملة للتخصيص

### مثال 1: مصور فوتوغرافي

```tsx
// الاسم
<h1>محمد الشمري</h1>
<p>مصور فوتوغرافي | صانع محتوى</p>

// الأزرار
const appLinks = [
  { title: 'PORTFOLIO', url: 'https://myportfolio.com', icon: <InstagramIcon /> },
  { title: 'INSTAGRAM', url: 'https://instagram.com/mohammed', icon: <InstagramIcon /> },
  { title: 'BOOK A SESSION', url: 'https://calendly.com/mohammed', icon: <FacebookIcon /> },
  { title: 'CONTACT', url: 'mailto:mohammed@gmail.com', icon: <WhatsAppIcon /> },
];

// اللون
bg-blue-900/30
```

### مثال 2: متجر أونلاين

```tsx
// الاسم
<h1>متجر نورة</h1>
<p>أزياء نسائية | توصيل سريع</p>

// الأزرار
const appLinks = [
  { title: 'SHOP NOW', url: 'https://mystore.com', icon: <InstagramIcon /> },
  { title: 'INSTAGRAM', url: 'https://instagram.com/noura_store', icon: <InstagramIcon /> },
  { title: 'WHATSAPP', url: 'https://wa.me/966500000000', icon: <WhatsAppIcon /> },
  { title: 'NEW ARRIVALS', url: 'https://mystore.com/new', icon: <TikTokIcon /> },
];

// اللون
bg-pink-900/30
```

### مثال 3: يوتيوبر

```tsx
// الاسم
<h1>علي القحطاني</h1>
<p>صانع محتوى تقني | مراجع منتجات</p>

// الأزرار
const appLinks = [
  { title: 'YOUTUBE CHANNEL', url: 'https://youtube.com/@ali', icon: <YouTubeIcon /> },
  { title: 'INSTAGRAM', url: 'https://instagram.com/ali', icon: <InstagramIcon /> },
  { title: 'TIKTOK', url: 'https://tiktok.com/@ali', icon: <TikTokIcon /> },
  { title: 'SPONSORSHIPS', url: 'mailto:ali@gmail.com', icon: <FacebookIcon /> },
];

// اللون
bg-red-900/30
```

---

## 🎨 حجم الصورة الدائرية

لتغيير حجم صورة البروفايل في السطر **46**:

```tsx
// صغير (96px)
className="w-24 h-24 rounded-full..."

// متوسط (128px) - افتراضي
className="w-32 h-32 rounded-full..."

// كبير (160px)
className="w-40 h-40 rounded-full..."
```

---

## 🔧 حل المشاكل

### الصورة الدائرية لا تظهر
- تأكد من وجود الصورة في مجلد `public/`
- تأكد من كتابة اسم الصورة بشكل صحيح مع الامتداد (.jpg, .png)
- إذا كانت من الإنترنت، تأكد من صحة الرابط

### الخلفية لا تظهر
- تأكد من رابط الصورة صحيح
- لصورة محلية، استخدم `/` في البداية: `url('/bg.jpg')`

### الروابط لا تعمل
- تأكد من `https://` في بداية كل رابط
- لـ WhatsApp: `https://wa.me/966XXXXXXXXX`
- لـ Email: `mailto:your@email.com`

---

## 🚀 أين الملفات؟

```
app/
└── page.tsx          ← الملف الذي تعدله (هذا هو الملف الوحيد الذي تحتاجه!)

public/               ← ضع الصور هنا
├── my-avatar.jpg     ← صورة البروفايل
└── my-bg.jpg         ← صورة الخلفية
```

---

## 💡 نصائح مهمة

1. **الصور عالية الجودة**: استخدم صور واضحة (1080px+)
2. **الصورة الدائرية**: الأفضل أن تكون مربعة (مثل 400x400)
3. **الألوان المتناسقة**: اختر لون overlay يناسب صورتك
4. **اختبار الروابط**: تأكد من عمل كل الروابط
5. **احفظ نسخة**: قبل التعديل، انسخ الكود الأصلي

---

## ✅ قائمة التحقق السريعة

- [ ] غيرت صورة البروفايل الدائرية
- [ ] غيرت صورة الخلفية
- [ ] غيرت الاسم والوصف
- [ ] حدثت جميع الروابط
- [ ] اختبرت جميع الأزرار
- [ ] غيرت لون الـ overlay (اختياري)
- [ ] غيرت النص السفلي
- [ ] جربت التصميم على المتصفح
- [ ] جاهز! 🎉

---

<div align="center">

**محتاج مساعدة أكثر؟**

راجع `README.md` أو `CUSTOMIZATION_GUIDE.md`

**صُنع بـ ❤️**

</div>

