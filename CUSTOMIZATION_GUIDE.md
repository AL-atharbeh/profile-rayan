# 🎨 دليل التخصيص - Link in Bio Professional

## 📸 كيفية تغيير صورة الخلفية

### الطريقة 1: استخدام صورة من الإنترنت (Unsplash)

في ملف `app/page.tsx`، السطر 37:

```tsx
backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80')`,
```

**صور مقترحة:**
- صورة امرأة محترفة: `https://images.unsplash.com/photo-1534528741775-53994a69daeb`
- صورة رجل محترف: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d`
- خلفية حمراء: `https://images.unsplash.com/photo-1557672172-298e090bd0f1`
- خلفية ذهبية: `https://images.unsplash.com/photo-1554068865-24cecd4e34b8`

### الطريقة 2: استخدام صورتك الخاصة

1. ضع صورتك في مجلد `public/` (مثلاً: `public/my-photo.jpg`)
2. غير الكود إلى:

```tsx
backgroundImage: `url('/my-photo.jpg')`,
```

## ✍️ تغيير الاسم والوصف

في ملف `app/page.tsx`، السطر 56-61:

```tsx
<h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-2xl">
  اسمك هنا بالكامل
</h1>
<p className="text-white/90 text-base tracking-widest drop-shadow-lg">
  وصفك | مهنتك | تخصصك
</p>
```

**أمثلة:**
```tsx
YOUR NAME → Ahmed Al-Athar
Makeup Artist | Entrepreneur → Content Creator | Influencer
```

## 🔗 تغيير الروابط

### روابط التطبيقات الرئيسية

في `app/page.tsx`، السطر 22-27:

```tsx
const appLinks = [
  { title: 'INSTAGRAM', url: 'https://instagram.com/yourusername', icon: <InstagramIcon /> },
  { title: 'TIKTOK', url: 'https://tiktok.com/@yourusername', icon: <TikTokIcon /> },
  { title: 'SNAPCHAT', url: 'https://snapchat.com/add/yourusername', icon: <SnapchatIcon /> },
  { title: 'YOUTUBE', url: 'https://youtube.com/@yourusername', icon: <YouTubeIcon /> },
];
```

**غير إلى:**
```tsx
{ title: 'INSTAGRAM', url: 'https://instagram.com/YOUR_REAL_USERNAME', icon: <InstagramIcon /> },
{ title: 'TIKTOK', url: 'https://tiktok.com/@YOUR_REAL_USERNAME', icon: <TikTokIcon /> },
```

### إضافة أو حذف روابط

**لإضافة رابط جديد:**
```tsx
{ title: 'TWITTER', url: 'https://twitter.com/yourusername', icon: <TwitterIcon /> },
```

**لحذف رابط:** احذف السطر الكامل

## 🎨 تغيير لون الهايلايت (Overlay)

في `app/page.tsx`، السطر 43:

```tsx
{/* Red/Burgundy Overlay مثل الصورة */}
<div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>
```

**ألوان مقترحة:**
- أحمر داكن: `bg-red-900/30`
- أزرق داكن: `bg-blue-900/30`
- بنفسجي: `bg-purple-900/30`
- أخضر داكن: `bg-green-900/30`
- بني: `bg-amber-900/30`
- وردي: `bg-pink-900/30`

**لتغيير شدة اللون:** غير الرقم `/30` إلى:
- `/20` - خفيف
- `/40` - متوسط
- `/50` - قوي

## 🌈 تغيير ألوان الأزرار

حالياً الأزرار بيضاء شفافة. لتغييرها في السطر 74:

```tsx
rounded-full bg-white/90 backdrop-blur-md
```

**ألوان بديلة:**
- أزرار شفافة سوداء: `bg-black/80 text-white`
- أزرار وردية: `bg-pink-500/90 text-white`
- أزرار بنفسجية: `bg-purple-500/90 text-white`

## 📱 تخصيص الأيقونات السفلية

في السطر 13-20، يمكنك إضافة أو حذف أيقونات:

```tsx
const socialLinks = [
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/yourusername', bg: 'bg-white/80' },
  // ... أضف المزيد
];
```

**لتغيير لون الخلفية:**
- `bg-white/80` - أبيض شفاف (الافتراضي)
- `bg-black/80` - أسود شفاف
- `bg-purple-500/80` - بنفسجي شفاف

## 🖼️ إزالة إطار الهاتف (Phone Frame)

إذا كنت لا تريد إطار الهاتف:

**احذف السطور 50-51 و 114-116:**
```tsx
{/* احذف هذه */}
<div className="relative rounded-[3rem] border-[6px] border-gray-300...">
  <div className="rounded-[2.5rem] border-4 border-gray-700...">
```

**واستبدلها بـ:**
```tsx
<div className="relative">
```

## 📝 تغيير النص السفلي

في السطر 90-92:

```tsx
<p className="text-white/80 text-xs tracking-wide drop-shadow-lg">
  For beauty advice and makeup mastery.
</p>
```

غيره إلى ما تريد، مثلاً:
```tsx
For inquiries and collaborations, reach out!
تابعني على جميع المنصات
```

## 🎯 تخصيص سريع - ملخص

### الأمور الأساسية التي يجب تغييرها:

1. **الاسم** (السطر 56-57)
2. **الوصف** (السطر 59-61)
3. **صورة الخلفية** (السطر 37)
4. **روابط Instagram** (السطر 14، 23)
5. **روابط TikTok** (السطر 15، 24)
6. **روابط Snapchat** (السطر 16، 25)
7. **رابط WhatsApp** (السطر 18)

## 🚀 مثال كامل للتخصيص

```tsx
// 1. غير الاسم
<h1>SARA AHMED</h1>
<p>Fashion Designer | Content Creator</p>

// 2. غير الصورة
backgroundImage: `url('/my-photo.jpg')`,

// 3. غير الروابط
const appLinks = [
  { title: 'INSTAGRAM', url: 'https://instagram.com/sara_ahmed', icon: <InstagramIcon /> },
  { title: 'TIKTOK', url: 'https://tiktok.com/@sara.ahmed', icon: <TikTokIcon /> },
  { title: 'SNAPCHAT', url: 'https://snapchat.com/add/saraa_ahmed', icon: <SnapchatIcon /> },
  { title: 'SHOP', url: 'https://myshop.com', icon: <ShopIcon /> },
];

// 4. غير لون الهايلايت
<div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply"></div>
```

## 💡 نصائح

1. **الصور عالية الجودة:** استخدم صور بدقة 1080x1920 للحصول على أفضل نتيجة
2. **الألوان المتناسقة:** اختر لون الهايلايت ليتناسب مع ألوان صورتك
3. **الخطوط واضحة:** تأكد من وضوح اسمك على الخلفية
4. **اختبار الروابط:** تأكد من عمل جميع الروابط قبل النشر
5. **النسخة المحمول:** جرب التصميم على الهاتف أيضاً

## 🎨 أفكار إضافية

### إضافة لوجو شخصي

```tsx
<div className="mb-4">
  <img src="/my-logo.png" alt="Logo" className="w-16 h-16 mx-auto" />
</div>
<h1>YOUR NAME</h1>
```

### إضافة قسم "Featured"

```tsx
<div className="w-full mb-6">
  <a href="https://youtu.be/video">
    <img src="/thumbnail.jpg" alt="Latest Video" className="rounded-2xl" />
  </a>
</div>
```

---

**محتاج مساعدة؟** راجع الكود أو اطلب المساعدة! 🚀

