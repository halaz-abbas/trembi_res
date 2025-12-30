# تشغيل المشروع مع Proxy Server

## الخطوات:

### 1. تثبيت dependencies للproxy server:
```bash
cd proxy-server
npm install
```

### 2. تشغيل proxy server (في terminal منفصل):
```bash
cd proxy-server
npm start
```

### 3. تشغيل React app (في terminal آخر):
```bash
npm run dev
```

## ملاحظات:
- Proxy server يعمل على: http://localhost:3001
- React app يعمل على: http://localhost:5173
- Proxy server يحل مشاكل CORS و SSL
