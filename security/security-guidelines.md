# 🔐 Security Guidelines - คู่มือความปลอดภัย

{% hint style="warning" %}
**คำเตือนสำคัญ** - ความปลอดภัยของ WAX account และ assets ขึ้นอยู่กับการปฏิบัติตามแนวทางเหล่านี้อย่างเคร่งครัด
{% endhint %}

## 🔑 การจัดการ Private Keys และ Passwords

### **⚠️ Private Keys - ข้อปฏิบัติสำคัญ**

#### **✅ สิ่งที่ต้องทำ:**
- **🔒 เก็บ Private Keys ในที่ปลอดภัย** - ใช้ Password Manager หรือ Hardware Wallet
- **💾 สำรองข้อมูล** - เก็บ backup ในที่แยกจากคอมพิวเตร์หลัก
- **🔐 เข้ารหัสการจัดเก็บ** - ใช้การเข้ารหัสแบบ AES-256 หรือสูงกว่า
- **🗂️ จัดระเบียบ** - แยกเก็บ Private Keys แต่ละ account อย่างชัดเจน

#### **❌ สิ่งที่ห้ามทำเด็ดขาด:**
- **🚫 แชร์ Private Keys** - ไม่แชร์กับใครในทุกกรณี แม้แต่ทีมงาน
- **🚫 แชร์หน้าจอ** - ห้ามแชร์หน้าจอขณะที่มี Private Keys แสดงอยู่
- **🚫 บันทึกในที่ไม่ปลอดภัย** - ห้ามเก็บใน text file, email, หรือ cloud ที่ไม่เข้ารหัส
- **🚫 ใช้ WiFi สาธารณะ** - ห้ามใส่ Private Keys ขณะเชื่อมต่อ WiFi สาธารณะ
- **🚫 คอมพิวเตอร์สาธารณะ** - ห้ามใช้งานจากคอมพิวเตอร์ที่ไม่ใช่ของตัวเอง

### **🔑 Password Security**

#### **การสร้าง Password ที่แข็งแกร่ง:**
```
Password Requirements:
├── ความยาวอย่างน้อย 12 ตัวอักษร
├── ผสมอักษรพิมพ์ใหญ่และเล็ก (A-z)
├── ตัวเลข (0-9)
├── สัญลักษณ์พิเศษ (!@#$%^&*)
└── ไม่ใช้คำที่พบได้ในพจนานุกรม
```

#### **Best Practices:**
- **🔄 เปลี่ยนรหัสผ่านเป็นระยะ** - อย่างน้อยทุก 3-6 เดือน
- **🎯 รหัสผ่านเฉพาะ** - ใช้รหัสผ่านที่แตกต่างกันสำหรับแต่ละบริการ
- **📱 Password Manager** - ใช้เครื่องมือจัดการรหัสผ่านที่เชื่อถือได้
- **🔐 2FA เสมอ** - เปิดใช้ Two-Factor Authentication ทุกที่ที่รองรับ

## 🌐 Network Security

### **การเชื่อมต่อที่ปลอดภัย**

#### **✅ เครือข่ายที่แนะนำ:**
- **🏠 เครือข่ายบ้าน** - WiFi ส่วนตัวที่มีการเข้ารหัส WPA3
- **🏢 เครือข่ายองค์กร** - เครือข่าย corporate ที่มีการรักษาความปลอดภัย
- **🛡️ VPN** - ใช้ VPN service ที่เชื่อถือได้เมื่อจำเป็น

#### **❌ เครือข่ายที่ต้องหลีกเลี่ยง:**
- **📶 WiFi สาธารณะ** - ร้านกาแฟ, ห้างสรรพสินค้า, สนามบิน
- **🔓 เครือข่ายไม่มีรหัสผ่าน** - WiFi ที่เชื่อมต่อได้โดยไม่ต้องใส่รหัส
- **📱 Mobile Hotspot** - หลีกเลี่ยงการใช้ hotspot จากคนอื่น

### **การป้องกันตัวเอง**

#### **มาตรการป้องกัน:**
```
Security Layers:
├── 🔥 Firewall - เปิดใช้งาน system firewall
├── 🦠 Antivirus - ติดตั้งและอัปเดตเป็นประจำ
├── 🔄 Updates - อัปเดต OS และ software เสมอ
├── 🕵️ Monitoring - ติดตามการเข้าถึง account
└── 🚫 Ad Blocker - ป้องกัน malicious ads
```

## 🖥️ Device Security

### **การรักษาความปลอดภัยของอุปกรณ์**

#### **คอมพิวเตอร์:**
- **🔒 Screen Lock** - ตั้งรหัสผ่านหน้าจอและ auto-lock
- **🗂️ File Encryption** - เข้ารหัสไฟล์สำคัญ
- **🧹 Clean Browser** - ลบ browser history และ cookies เป็นระจำ
- **👥 User Accounts** - ใช้ user account แยกสำหรับงานที่ sensitive

#### **มือถือ:**
- **📱 Screen Lock** - ใช้ PIN, Pattern, หรือ Biometric
- **🔐 App Permissions** - ตรวจสอบสิทธิ์การเข้าถึงของ apps
- **📶 WiFi Settings** - ตั้งค่าไม่ให้เชื่อมต่อ WiFi อัตโนมัติ
- **🔄 Remote Wipe** - เปิดใช้ฟีเจอร์ลบข้อมูลระยะไกล

## 🎯 AWCLOUD Specific Security

### **การใช้งาน AWCLOUD อย่างปลอดภัย**

#### **Session Management:**
- **⏰ Logout เสมอ** - ลงชื่อออกหลังใช้งานเสร็จ
- **🕐 Session Timeout** - ตั้งค่า timeout ที่เหมาะสม
- **👁️ Monitor Sessions** - ตรวจสอบ active sessions เป็นประจำ (ดูรายละเอียดใน [📊 Monitoring & Safety](monitoring-safety.md))
- **🚨 Suspicious Activity** - รายงานการเข้าถึงที่ผิดปกติทันที

#### **WAX Account Security:**
- **🔍 Monitor Transactions** - ตรวจสอบ transaction history เป็นประจำ
- **⚖️ Resource Management** - จัดการ CPU/NET ให้เหมาะสม
- **🎯 Authorized Actions** - ตรวจสอบ permissions และ authorizations
- **📊 Account Activity** - ติดตามกิจกรรมของ account ผ่าน block explorer (ดูรายละเอียดใน [📊 Monitoring & Safety → Asset Monitoring](monitoring-safety.md#💰-asset-monitoring))

## 🚨 Incident Response

### **เมื่อสงสัยว่าถูก Compromise**

#### **ขั้นตอนฉุกเฉิน:**
1. **🛑 หยุดการใช้งานทันที** - ปิดการเชื่อมต่อทั้งหมด
2. **🔄 เปลี่ยนรหัสผ่าน** - เปลี่ยนรหัสผ่านทุก account ที่เกี่ยวข้อง
3. **🔍 ตรวจสอบ Account** - ดู transaction history และ active sessions
4. **📞 แจ้งทีมงาน** - รายงานเหตุการณ์ให้ทีม support
5. **💾 Restore from Backup** - ใช้ backup เพื่อ recovery ถ้าจำเป็น

#### **การป้องกันในอนาคต:**
- **📝 Document Incident** - บันทึกรายละเอียดเพื่อการเรียนรู้
- **🔧 Update Security** - ปรับปรุงมาตรการความปลอดภัย
- **📚 Security Training** - เพิ่มความรู้ด้านความปลอดภัย
- **🔄 Regular Audits** - ตรวจสอบความปลอดภัยเป็นประจำ

## 📋 Security Checklist

### **Daily Security Practices**
```
Daily Checklist:
├── ✅ ใช้เครือข่ายที่ปลอดภัย
├── ✅ ตรวจสอบ AWCLOUD sessions
├── ✅ Monitor WAX account activity
├── ✅ Logout หลังใช้งานเสร็จ
└── ✅ อัปเดต antivirus definitions
```

### **Weekly Security Review**
```
Weekly Tasks:
├── ✅ ตรวจสอบ password strength
├── ✅ Review account permissions
├── ✅ Check for system updates
├── ✅ Backup important data
└── ✅ Review security logs
```

### **Monthly Security Maintenance**
```
Monthly Tasks:
├── ✅ เปลี่ยนรหัสผ่านสำคัญ
├── ✅ Update backup procedures
├── ✅ Review 2FA settings
├── ✅ Security awareness training
└── ✅ Incident response drill
```

---

💡 **หมายเหตุ:** ความปลอดภัยเป็นความรับผิดชอบร่วมกัน การปฏิบัติตามแนวทางเหล่านี้อย่างสม่ำเสมอจะช่วยปกป้อง assets และข้อมูลส่วนตัวของคุณได้อย่างมีประสิทธิภาพ

**📅 อัปเดตล่าสุด:** 18 สิงหาคม 2568 | **🔄 ทบทวนทุก:** 3 เดือน