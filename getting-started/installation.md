# 📦 คู่มือการเริ่มต้นใช้งาน AWCLOUD CPanel

{% hint style="success" %}
**คู่มือฉบับครบถ้วน** - จากการเข้าสู่ระบบครั้งแรกจนพร้อมขุด Alien Worlds ภายใน 15 นาที
{% endhint %}

## 📋 ขั้นตอนการเริ่มต้นใช้งาน

### 🔰 **ก่อนเริ่มต้น - สิ่งที่คุณต้องมี**

{% hint style="info" %}
**ตรวจสอบความพร้อม:** [ข้อกำหนดระบบ](requirements.md) - ตรวจสอบเบราว์เซอร์, อุปกรณ์, และ WAX Accounts
{% endhint %}

## 🚀 เริ่มต้นใช้งาน (15 นาที)

### **ขั้นตอนที่ 1: เข้าสู่เว็บไซต์**

1. เปิดเบราว์เซอร์ที่รองรับ (Chrome, Firefox, Edge, Safari)
2. ไปที่ **AWCLOUD CPanel** website: `https://awcloud.cpanel.service`
3. ตรวจสอบว่า URL ถูกต้องและมี SSL certificate

### **ขั้นตอนที่ 2: ลงทะเบียนหรือเข้าสู่ระบบ**

**สำหรับผู้ใช้ใหม่:**
```
1. คลิก "Sign Up" หรือ "ลงทะเบียน"
2. กรอกข้อมูล: Email, Password, ชื่อผู้ใช้
3. ยืนยัน Email address
4. เข้าสู่ระบบด้วย credentials ที่สร้าง
```

**สำหรับผู้ใช้เดิม:**
```
1. คลิก "Login" หรือ "เข้าสู่ระบบ"
2. กรอก Email/Username และ Password
3. เข้าสู่ Dashboard หลัก
```

### **ขั้นตอนที่ 3: เพิ่ม WAX Accounts**

1. **ไปที่เมนู "Account Management"**
2. **เลือกวิธีการเพิ่ม account:**
   - **WAM File Upload**: อัปโหลดไฟล์ .wam
   - **Private Key**: กรอก private key โดยตรง
   - **Anchor Wallet**: เชื่อมต่อผ่าน Anchor

3. **ตั้งชื่อ account** (สำหรับการจัดการ)
4. **ทดสอบการเชื่อมต่อ** และตรวจสอบข้อมูล account

### **ขั้นตอนที่ 4: ตรวจสอบและเตรียม Accounts**

```
✅ ตรวจสอบ WAX account resources:
   - CPU: มีเพียงพอสำหรับ mining
   - NET: มีเพียงพอสำหรับ transactions  
   - RAM: อย่างน้อย 8 KB

✅ ตรวจสอบ Alien Worlds readiness:
   - มี mining tools ใน inventory
   - เลือก Planet สำหรับการขุด
   - Account ลงทะเบียน Alien Worlds แล้ว
```

### **ขั้นตอนที่ 5: เริ่มต้นการขุดครั้งแรก**

1. **เข้าสู่ AW (Alien Worlds) Tab** ใน Dashboard
2. **ตั้งค่า account แรก:**
   - เลือก Mining Tools ผ่าน TOOLS modal
   - เลือก Land ผ่าน LAND modal  
   - ตรวจสอบ Resources ผ่าน RESOURCES modal
3. **คลิก "START"** เพื่อเริ่มขุด
4. **ตรวจสอบสถานะ** ว่าเปลี่ยนเป็น 🟢

{% hint style="success" %}
**เสร็จสิ้น!** ตอนนี้คุณพร้อมใช้งาน AWCLOUD CPanel แล้ว  
**ขั้นต่อไป:** [เริ่มต้นใช้งานใน 10 นาที](quick-start-guide.md) - คู่มือเฉพาะการขุดแบบเร็ว
{% endhint %}

## 📚 คู่มือรายละเอียดเพิ่มเติม

### 🔗 **ขั้นตอนแบบละเอียด**

**การจัดการ Account ขั้นสูง:**
- **[WAX Account Basics](../user-manual/wax-account-basics.md)** - การเพิ่ม Account, ตรวจสอบ Resources
- **[Modal System Guide](../user-manual/modal-guide-complete.md)** - การใช้งาน Modal ทั้งหมด

**การขุดขั้นสูงและปรับแต่ง:**
- **[Dashboard Guide](../user-manual/dashboard-guide.md)** - การใช้งาน Dashboard แบบครบถ้วน
- **[Advanced Features](../user-manual/advanced-features.md)** - ฟีเจอร์ขั้นสูงทั้งหมด

**แก้ไขปัญหาและ Troubleshooting:**
- **[Common Issues](../troubleshooting/common-issues.md)** - การแก้ไขปัญหาทั่วไป

{% hint style="info" %}
**💡 เคล็ดลับสำหรับผู้เริ่มต้น**: เริ่มด้วย 1-2 accounts และเรียนรู้ระบบก่อน เมื่อคุ้นเคยแล้วค่อยเพิ่ม accounts
{% endhint %}