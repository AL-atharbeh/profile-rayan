# 🎨 Professional Link in Bio - Next.js

صفحة Link in Bio احترافية **مثل Elara Vance** بتصميم عصري! 
صورة خلفية كاملة + هايلايت جميل + تأثير إطار الهاتف + أيقونات حقيقية لجميع التطبيقات! 📱✨

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

</div>

## ✨ المميزات

- 🖼️ **صورة خلفية كاملة** (Full Screen Background)
- 🌟 **هايلايت احترافي** مع تدرجات لونية جميلة
- 📱 **تأثير إطار الهاتف** (Phone Frame Effect)
- 🎨 **تصميم مثل Elara Vance** تماماً
- 🔘 **أزرار بيضاء شفافة** مع تأثيرات hover رائعة
- 💫 Glass morphism effect و backdrop blur
- 🎭 تأثيرات حركية سلسة
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- 🔗 أيقونات حقيقية لجميع منصات التواصل الاجتماعي:
  - ✅ Instagram
  - ✅ TikTok
  - ✅ Snapchat (لوجو حقيقي!)
  - ✅ Facebook
  - ✅ WhatsApp
  - ✅ YouTube
  - ✅ Twitter/X
  - ✅ LinkedIn
  - ✅ Telegram
  - ✅ Discord
  - ✅ Spotify
  - ✅ Email
  - ✅ Phone
  - ✅ Website
  - ✅ Shop
- ⚡ أداء عالي مع Next.js 16
- 🎨 مكونات قابلة لإعادة الاستخدام
- 🎪 تأثيرات hover مذهلة

## 🚀 البدء

### التثبيت

```bash
npm install
```

### تشغيل مشروع التطوير

```bash
npm run dev
```

افتح المتصفح على [http://localhost:3000](http://localhost:3000)

### بناء المشروع للإنتاج

```bash
npm run build
npm start
```

## 🎨 التخصيص

⚠️ **للحصول على دليل تخصيص شامل ومفصل، راجع ملف:** `CUSTOMIZATION_GUIDE.md`

### 1️⃣ تخصيص صورة الخلفية

في ملف `app/page.tsx` السطر 37:

```tsx
// استخدم رابط صورة من الإنترنت
backgroundImage: `url('https://images.unsplash.com/photo-YOUR-IMAGE')`,

// أو استخدم صورتك الخاصة (ضعها في مجلد public/)
backgroundImage: `url('/my-photo.jpg')`,
```

### 2️⃣ تخصيص الاسم والوصف

في ملف `app/page.tsx` السطر 56-61:

```tsx
<h1 className="...">
  YOUR NAME  {/* غير اسمك هنا */}
</h1>
<p className="...">
  Makeup Artist | Entrepreneur  {/* غير وصفك هنا */}
</p>
```

### 3️⃣ تخصيص أزرار التطبيقات الرئيسية

في ملف `app/page.tsx` السطر 22-27:

```tsx
const appLinks = [
  { title: 'INSTAGRAM', url: 'https://instagram.com/YOUR_USERNAME', icon: <InstagramIcon /> },
  { title: 'TIKTOK', url: 'https://tiktok.com/@YOUR_USERNAME', icon: <TikTokIcon /> },
  { title: 'SNAPCHAT', url: 'https://snapchat.com/add/YOUR_USERNAME', icon: <SnapchatIcon /> },
  { title: 'YOUTUBE', url: 'https://youtube.com/@YOUR_CHANNEL', icon: <YouTubeIcon /> },
];
```

يمكنك إضافة المزيد من الأيقونات:
- `<ShopIcon />` - للمتجر
- `<EmailIcon />` - للبريد الإلكتروني
- `<PhoneIcon />` - لرقم الهاتف
- `<TelegramIcon />` - تليجرام
- `<DiscordIcon />` - ديسكورد
- `<SpotifyIcon />` - سبوتيفاي

### 4️⃣ تخصيص الأيقونات السفلية

في ملف `app/page.tsx` السطر 13-20:

```tsx
const socialLinks = [
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/YOU', bg: 'bg-white/80' },
  // ... أضف أو احذف حسب الحاجة
];
```

### 4️⃣ تغيير الألوان

يمكنك تعديل الألوان في ملف `app/globals.css` أو مباشرة في المكونات.

لتغيير ألوان الخلفية المتحركة:
```css
/* في app/globals.css */
.bg-purple-300 { /* غير اللون */ }
.bg-yellow-300 { /* غير اللون */ }
.bg-pink-300 { /* غير اللون */ }
```

### 5️⃣ إضافة منصات تواصل اجتماعي جديدة

جميع أيقونات وسائل التواصل موجودة في: `app/components/SocialIcons.tsx`

يمكنك إضافة أيقونة جديدة:

```tsx
export function NewPlatformIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      {/* SVG path هنا */}
    </svg>
  );
}
```

ثم استخدمها في `page.tsx`:

```tsx
import { NewPlatformIcon } from './components/SocialIcons';

const socialLinks = [
  { 
    name: 'Platform Name', 
    icon: <NewPlatformIcon />, 
    url: 'https://platform.com/you',
    color: 'from-color-600 to-color-400' 
  },
];
```

## 📁 هيكل المشروع

```
protofile-admin/
├── app/
│   ├── components/
│   │   ├── ProfileSection.tsx    # قسم الملف الشخصي
│   │   ├── SocialButton.tsx      # زر وسائل التواصل
│   │   ├── LinkCard.tsx          # بطاقة الرابط
│   │   └── SocialIcons.tsx       # جميع أيقونات وسائل التواصل
│   ├── globals.css               # الأنماط والتأثيرات الحركية
│   ├── layout.tsx                # تخطيط الصفحة الرئيسي
│   └── page.tsx                  # الصفحة الرئيسية
├── public/                       # الملفات العامة
├── package.json
└── README.md
```

## 🎯 المكونات

### ProfileSection

عرض معلومات الملف الشخصي مع صورة الأفاتار وحالة الاتصال.

```tsx
<ProfileSection 
  name="اسمك"
  bio="وصفك"
  avatarEmoji="👤"
  isOnline={true}
/>
```

### SocialButton

زر لكل منصة تواصل اجتماعي مع تأثيرات hover جميلة.

```tsx
<SocialButton
  name="Instagram"
  icon={<InstagramIcon />}
  url="https://instagram.com/you"
  colorClass="from-purple-600 to-pink-600"
/>
```

### LinkCard

بطاقة لكل رابط رئيسي مع عنوان ووصف.

```tsx
<LinkCard
  title="عنوان الرابط"
  subtitle="وصف قصير"
  url="https://yourlink.com"
  icon="🎨"
/>
```

## 🎨 التأثيرات الحركية

الصفحة تحتوي على العديد من التأثيرات الحركية المخصصة:

- **animate-blob**: حركة عضوية للخلفية
- **animate-slide-up**: دخول البطاقة من الأسفل
- **animate-pulse-slow**: نبض بطيء
- **animate-float**: حركة طفو
- **hover effects**: تأثيرات عند التمرير
- **glass-effect**: تأثير الزجاج الضبابي

## 🌈 الألوان المستخدمة

- **Instagram**: Purple to Pink gradient
- **TikTok**: Dark gray gradient
- **Snapchat**: Yellow gradient
- **Facebook**: Blue gradient
- **WhatsApp**: Green gradient
- **Background**: Rose, Purple, Indigo gradient

## 📱 التوافق

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🛠️ التقنيات المستخدمة

- **Next.js 16** - React Framework
- **React 19.2** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Styling
- **CSS Animations** - Custom animations

## 📄 الرخصة

هذا المشروع مفتوح المصدر ويمكنك استخدامه بحرية.

## 🤝 المساهمة

المساهمات مرحب بها! لا تتردد في فتح issue أو pull request.

## 💡 نصائح

1. **صور مخصصة**: يمكنك استبدال الإيموجي بصورة حقيقية باستخدام `<Image>` من Next.js
2. **Analytics**: أضف Google Analytics أو أي أداة تتبع لمعرفة عدد الزيارات
3. **SEO**: عدل ملف `layout.tsx` لإضافة meta tags مخصصة
4. **Domain**: يمكنك ربط دومين خاص بك عند النشر على Vercel
5. **Dark Mode**: يمكن إضافة وضع داكن بسهولة باستخدام Tailwind

## 🚀 النشر

### Vercel (موصى به)

```bash
npm install -g vercel
vercel
```

أو اربط مستودع GitHub الخاص بك مع Vercel للنشر التلقائي.

### خيارات أخرى

- Netlify
- Railway
- Cloudflare Pages
- AWS Amplify

## 📧 التواصل

إذا كان لديك أي أسئلة أو اقتراحات، لا تتردد في التواصل!

---

<div align="center">

**صُنع بـ ❤️ باستخدام Next.js**

⭐ إذا أعجبك المشروع، لا تنسى إعطائه نجمة!

</div>
