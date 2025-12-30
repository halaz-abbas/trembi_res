# Termbi Proxy Server

خادم وكيل متكامل لتطبيق Termbi لحل مشاكل CORS و SSL

## التشغيل

```bash
npm install
npm start
```

الخادم سيعمل على: `http://localhost:3001`

## الميزات

- ✅ حل مشاكل CORS
- ✅ تجاوز مشاكل شهادة SSL المنتهية
- ✅ دعم جميع طلبات API (GET, POST, PUT, DELETE)
- ✅ تسجيل تفصيلي للطلبات والاستجابات
- ✅ دعم كامل لجميع endpoints في API

## Endpoints المدعومة

### المصادقة
- POST `/api/auth/login`
- POST `/api/auth/register`
- POST `/api/auth/logout`

### المطاعم
- GET `/api/restaurants/settings?restaurant_admin_id={id}`
- GET `/api/sliders?slug={slug}`

### المنتجات
- GET `/api/products`
- GET `/api/products/{id}`

### الفئات
- GET `/api/categories`
- GET `/api/categories?restaurant_admin_id={id}`

### السلة
- GET `/api/cart`
- POST `/api/cart/add`
- PUT `/api/cart/update`
- DELETE `/api/cart/remove`

### الطلبات
- GET `/api/orders`
- POST `/api/orders/create`
- GET `/api/orders/{id}`

### الحجوزات
- GET `/api/reservations`
- POST `/api/reservations/create`
- GET `/api/working-hours`

### الكوبونات
- GET `/api/coupons`
- POST `/api/coupons/validate`

### أخرى
- POST `/api/contact`
- GET `/api/search`
