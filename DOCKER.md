# تشغيل المشروع باستخدام Docker

## المتطلبات
- Docker
- Docker Compose

## طريقة التشغيل

### 1. إنشاء ملف المتغيرات البيئية
قم بإنشاء ملف `.env.local` في المجلد الرئيسي للمشروع وأضف المتغيرات التالية:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. بناء وتشغيل الحاوية

#### باستخدام Docker Compose (الطريقة الموصى بها):
```bash
docker-compose up --build
```

#### أو باستخدام Docker مباشرة:
```bash
# بناء الصورة
docker build -t profile-app .

# تشغيل الحاوية
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_supabase_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key \
  profile-app
```

### 3. الوصول للتطبيق
بعد التشغيل، يمكنك الوصول للتطبيق على:
```
http://localhost:3000
```

## الأوامر الإضافية

### إيقاف التطبيق:
```bash
docker-compose down
```

### عرض السجلات:
```bash
docker-compose logs -f
```

### إعادة بناء الصورة:
```bash
docker-compose build --no-cache
```

### تشغيل في الخلفية:
```bash
docker-compose up -d
```

