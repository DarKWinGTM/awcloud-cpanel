# 📦 คู่มือการเริ่มต้นใช้งาน

## การเริ่มต้นใช้งาน AWCLOUD CPanel

**AWCLOUD CPanel** เป็น Web-based Service ที่ไม่ต้องติดตั้งซอฟต์แวร์ใดๆ คู่มือนี้จะแนะนำวิธีการเริ่มต้นใช้งานตั้งแต่การลงทะเบียนจนพร้อมขุด Alien Worlds

## 🚀 การเริ่มต้นแบบเร็ว (Quick Start)

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

### **ขั้นตอนที่ 5: เริ่มต้นการขุด**

1. **ไปที่เมนู "Mining Dashboard"**
2. **เลือก accounts** ที่ต้องการใช้ขุด
3. **เลือก Mining Strategy:**
   - **Conservative**: ขุดแบบปลอดภัย
   - **Balanced**: ขุดแบบสมดุล
   - **Aggressive**: ขุดแบบเข้มข้น
4. **คลิก "Start Mining"**
5. **ตรวจสอบสถานะ** ใน Real-time Dashboard

### **1. การตั้งค่าบัญชีผู้ใช้ (User Account Setup)**

#### **📧 การลงทะเบียนบัญชี**

**ข้อมูลที่จำเป็น:**
- **Email Address**: สำหรับการเข้าสู่ระบบและการแจ้งเตือน
- **Username**: ชื่อผู้ใช้ที่ไม่ซ้ำกับผู้อื่น
- **Password**: รหัสผ่านที่แข็งแกร่ง (8+ ตัวอักษร, มีตัวเลขและสัญลักษณ์)
- **Referral Code**: (ถ้ามี) สำหรับส่วนลดหรือโบนัส

**การยืนยันตัวตน:**
```
1. ตรวจสอบ Email verification link
2. คลิกลิงก์ยืนยันใน Email
3. เข้าสู่ระบบด้วย credentials ที่สร้าง
4. ตั้งค่า Security settings (2FA แนะนำ)
```

#### **🔐 การตั้งค่าความปลอดภัย**

**Two-Factor Authentication (2FA):**
- เปิดใช้งาน 2FA ด้วย Google Authenticator หรือ Authy
- สำรอง Recovery codes ไว้ในที่ปลอดภัย
- ตั้งค่า Security questions

**Session Management:**
- ตั้งค่า Auto-logout time
- การจำกัด concurrent sessions
- การแจ้งเตือนเมื่อมีการ login จาก IP ใหม่

### **2. การจัดการ WAX Accounts**

#### **💳 การเพิ่ม WAX Accounts**

**วิธีการที่ 1: WAM File Upload**
```
1. ไปที่ "Account Management" > "Add Account"
2. เลือก "Upload WAM File"
3. อัปโหลดไฟล์ .wam ของ account
4. กรอกรหัสผ่าน WAM file
5. ตั้งชื่อ account สำหรับการจัดการ
6. ทดสอบการเชื่อมต่อ
```

**วิธีการที่ 2: Private Key Entry**
```
1. เลือก "Manual Key Entry"
2. กรอก Private Key ของ WAX account
3. ระบบจะดึงข้อมูล Public Key และ Account Name อัตโนมัติ
4. ตั้งชื่อ account และบันทึก
5. ทดสอบการ sign transaction
```

**วิธีการที่ 3: Anchor Wallet Integration**
```
1. เลือก "Connect Anchor Wallet"  
2. เปิด Anchor Wallet บนเครื่อง
3. สแกน QR Code หรือคลิกลิงก์
4. อนุมัติการเชื่อมต่อใน Anchor
5. เลือก accounts ที่ต้องการเพิ่ม
```

#### **🔍 การตรวจสอบ Account Status**

**Resource Checking:**
```
✅ CPU Resources:
   - Available: มากกว่า 100ms
   - Staked: มากกว่า 50 WAX แนะนำ
   - Usage: ต่ำกว่า 80%

✅ NET Resources:  
   - Available: มากกว่า 50 KB
   - Staked: มากกว่า 10 WAX แนะนำ
   - Usage: ต่ำกว่า 80%

✅ RAM:
   - Available: มากกว่า 8 KB
   - Used: ตรวจสอบการใช้งาน
   - Sufficient: สำหรับ transactions
```

**Alien Worlds Readiness:**
```
✅ Game Registration:
   - Account ลงทะเบียน Alien Worlds แล้ว
   - มี Avatar และ stats
   - เลือก Starting planet

✅ Mining Tools:
   - มี tools อย่างน้อย 1 ชิ้น
   - Tools ไม่เสีย (durability > 0)
   - Tools เหมาะสมกับการขุด

✅ Planet Selection:
   - เลือก Planet ที่ต้องการขุด
   - ตรวจสอบ Mining difficulty
   - ดู Rewards และ TLM rates
```

### **3. การตั้งค่า Mining Strategies**

#### **⚙️ Strategy Templates**

**Conservative Strategy:**
- ขุดทุก 6-8 นาที พร้อมหน่วงเวลา 30-60 วินาที
- ใช้ทรัพยากรขั้นต่ำ CPU 150, NET 75
- ขุดบนดาว Eyeke และ Kavian
- หลีกเลี่ยงช่วงเวลาคนใช้เยอะ

**Balanced Strategy:**
- ขุดทุก 4-6 นาที พร้อมหน่วงเวลา 15-45 วินาที
- ใช้ทรัพยากรขั้นต่ำ CPU 100, NET 50
- ขุดบนดาว Eyeke, Kavian และ Naron
- ขุดได้ตลอดเวลา

**Aggressive Strategy:**
- ขุดทุก 3-4 นาที พร้อมหน่วงเวลา 5-15 วินาที
- ใช้ทรัพยากรขั้นต่ำ CPU 50, NET 25
- เลือกดาวอัตโนมัติ
- ขุดได้ตลอดเวลา

### **4. การตั้งค่า Proxy (ขั้นสูง)**

#### **🌐 เมื่อไหร่ควรใช้ Proxy**

**สถานการณ์ที่แนะนำ:**
- มี WAX accounts มากกว่า 10 accounts
- ต้องการป้องกันการตรวจจับ IP address
- อยู่ในพื้นที่ที่มีข้อจำกัดทางภูมิศาสตร์
- ต้องการกระจาย traffic เพื่อความปลอดภัย

**การตั้งค่า Proxy Provider:**
```
1. ไปที่ "Advanced Settings" > "Proxy Configuration"
2. เลือก Proxy Provider:
   - WebShare.io (แนะนำสำหรับ residential)
   - PacketStream (ราคาดี)
   - PlainProxies (datacenter proxies)
   - Custom Proxy (ถ้ามี proxy เอง)

3. กรอกข้อมูล authentication:
   - Username/Password
   - Proxy endpoints
   - Rotation settings

4. ทดสอบการเชื่อมต่อ proxy
5. กำหนด accounts ที่จะใช้ proxy
```

### **5. การตั้งค่า Notifications**

#### **📱 การแจ้งเตือน**

**In-Browser Notifications:**
- แจ้งเตือนเมื่อ mining สำเร็จ
- เตือนเมื่อ resources ต่ำ
- แจ้งเตือนเมื่อเกิด errors

**Email Notifications:**
- Daily mining reports
- Account errors และ warnings
- System maintenance notices


## ✅ การตรวจสอบการตั้งค่า (Setup Verification)

### **🔍 Pre-Mining Checklist**

**Account Verification:**
- [ ] ✅ ทุก WAX accounts เชื่อมต่อสำเร็จ
- [ ] ✅ Resources เพียงพอสำหรับการขุด  
- [ ] ✅ Mining tools พร้อมใช้งาน
- [ ] ✅ Planets ถูกเลือกแล้ว

**System Settings:**
- [ ] ✅ Mining strategy ถูกตั้งค่า
- [ ] ✅ Notifications เปิดใช้งาน
- [ ] ✅ Security settings ตั้งค่าแล้ว
- [ ] ✅ Proxy settings (ถ้าใช้)

**Final Testing:**
- [ ] ✅ ทดสอบ mining 1-2 accounts ก่อน
- [ ] ✅ ตรวจสอบ real-time dashboard
- [ ] ✅ ทดสอบ stop/start functions
- [ ] ✅ ยืนยันการรับ notifications

{% hint style="success" %}
**🎉 พร้อมใช้งานแล้ว!** ตอนนี้คุณสามารถเริ่มต้นการขุด Alien Worlds ด้วย AWCLOUD CPanel ได้แล้ว
{% endhint %}

{% hint style="info" %}
**💡 เคล็ดลับสำหรับผู้เริ่มต้น**: เริ่มด้วย 1-2 accounts และ Conservative strategy ก่อน เมื่อคุ้นเคยแล้วค่อยเพิ่ม accounts และปรับ strategy
{% endhint %}

---

**ขั้นต่อไป**: [การใช้งานระบบ](../fundamentals/getting-set-up/README.md) - เรียนรู้การใช้งาน Dashboard และ features ต่างๆ