# 🔑 Authentication Guide - คู่มือการยืนยันตัวตน

{% hint style="info" %}
**การยืนยันตัวตนที่แข็งแกร่ง** เป็นเกราะป้องกันชั้นแรกของ AWCLOUD system การตั้งค่าที่ถูกต้องจะปกป้อง WAX accounts และ assets ของคุณ
{% endhint %}

## 🔐 Two-Factor Authentication (2FA) / TOTP

### **🔒 ความสำคัญของ 2FA**

#### **ทำไมต้องใช้ 2FA:**
- **🛡️ ป้องกันเพิ่มเติม** - แม้รหัสผ่านรั่วไหลก็ยังปลอดภัย
- **🚫 ป้องกัน Brute Force** - ลดความเสี่ยงจากการเดารหัสผ่าน
- **📱 Control Access** - ควบคุมการเข้าถึงผ่านอุปกรณ์ที่เชื่อถือ
- **🔍 Audit Trail** - ติดตามการเข้าถึงได้ชัดเจน

### **⚙️ การตั้งค่า TOTP (Time-based OTP)**

#### **ขั้นตอนการเปิดใช้งาน:**

1. **📱 ติดตั้ง Authenticator App**
   ```
   แนะนำ Apps:
   ├── 🟢 Google Authenticator (ฟรี)
   ├── 🔵 Microsoft Authenticator (ฟรี)
   ├── 🟡 Authy (ฟรี, มี backup)
   ├── 🔴 1Password (เสียเงิน, premium features)
   └── ⚫ Bitwarden (ฟรี/เสียเงิน)
   ```

2. **🔗 เชื่อมต่อกับ AWCLOUD**
   - เข้า AWCLOUD CPanel
   - หา Security settings (อาจอยู่ใน Settings หรือ Account section)
   - มองหา TOTP/2FA configuration options
   - ทำตามขั้นตอนที่ระบบแสดง (อาจมี QR Code หรือ manual setup)
   - ใส่ Verification Code เพื่อยืนยัน

3. **💾 บันทึก Backup Codes**
   ```
   ⚠️ สำคัญมาก:
   ├── 📝 บันทึก Backup Codes ทั้งหมด
   ├── 🗂️ เก็บในที่ปลอดภัยแยกจากมือถือ
   ├── 🔐 เข้ารหัสไฟล์ backup
   └── 📍 เก็บสำเนาในสถานที่หลายแห่ง
   ```

#### **การจัดการ Backup Codes:**

สำหรับรายละเอียดการสำรองและกู้คืน TOTP codes โปรดดูที่: **[📄 Backup & Recovery → TOTP Backup Codes](backup-recovery.md#totp-backup-codes)**

```
Backup Code Management:
├── 📋 พิมพ์และเก็บในตู้เซฟ
├── 💾 เก็บในไฟล์เข้ารหัส
├── ☁️ อัปโหลดไป encrypted cloud storage
├── 👥 แบ่งกับคนที่เชื่อถือ (แยกครึ่ง)
└── 🔄 ทดสอบการใช้งานเป็นประจำ
```

### **Best Practices สำหรับ TOTP**

#### **✅ สิ่งที่ควรทำ:**
- **⏰ Sync เวลา** - ตรวจสอบเวลาในมือถือให้ถูกต้อง
- **🔋 Backup Power** - เตรียม charger หรือ power bank
- **📱 หลายอุปกรณ์** - ติดตั้ง authenticator app ในหลายเครื่อง
- **🔄 Regular Testing** - ทดสอบการ login ด้วย TOTP เป็นประจำ

#### **❌ สิ่งที่ไม่ควรทำ:**
- **📸 Screenshot OTP** - ห้ามถ่ายภาพหน้าจอ OTP code
- **💬 แชร์ Code** - ห้ามส่ง OTP code ให้ใครผ่านข้อความ
- **⏰ ใช้ Code เก่า** - OTP code มีอายุเพียง 30 วินาที
- **📱 เครื่องเดียว** - อย่าพึ่งพา authenticator app ในเครื่องเดียว

## 🔑 Password Management

### **การสร้างรหัสผ่านที่แข็งแกร่ง**

#### **Password Criteria:**
```
Strong Password Requirements:
├── 📏 ความยาว: อย่างน้อย 12-16 ตัวอักษร
├── 🔤 ตัวอักษร: A-Z, a-z (ผสมพิมพ์ใหญ่เล็ก)
├── 🔢 ตัวเลข: 0-9
├── 🎭 สัญลักษณ์: !@#$%^&*()_+-=[]{}|;:,.<>?
├── 🚫 ไม่ใช่คำในพจนานุกรม
└── 🎯 เฉพาะเจาะจง: แตกต่างกันในแต่ละบริการ
```

#### **Password Generation Techniques:**

**1. Passphrase Method:**
```
Example: "Coffee#Mountain9$Purple!Train"
├── 🎯 ง่ายจำ: ใช้คำที่เกี่ยวข้องกับตัวเอง
├── 🔢 เพิ่มตัวเลข: ใส่ตัวเลขสำคัญ
├── 🎭 สัญลักษณ์: แทรกสัญลักษณ์พิเศษ
└── 🔤 Case Mixing: ผสมพิมพ์ใหญ่เล็ก
```

**2. Pattern Method:**
```
Example: "Aw!C10ud$2024#Sec"
├── 📝 Base Pattern: ชื่อบริการ + สัญลักษณ์
├── 🔢 Variable Part: เปลี่ยนตัวเลขหรือปี
├── 🎯 Service Specific: ปรับตามบริการ
└── 🔄 Evolution: พัฒนา pattern ตามเวลา
```

### **Password Manager Integration**

#### **แนะนำ Password Managers:**
```
🥇 Top Recommendations:
├── 1Password - Premium features, family sharing
├── Bitwarden - Open source, ฟรี/premium
├── Dashlane - User-friendly, VPN included
├── LastPass - Popular, basic free tier
└── KeePass - Offline, maximum security
```

#### **การตั้งค่า Password Manager:**

1. **📦 Installation & Setup**
   - ติดตั้ง app ในทุกอุปกรณ์ที่ใช้
   - สร้าง master password ที่แข็งแกร่ง
   - เปิดใช้ 2FA สำหรับ password manager

2. **📥 Migration Process**
   - Import รหัสผ่านเก่าจาก browser
   - สร้างรหัสผ่านใหม่สำหรับ accounts สำคัญ
   - จัดระเบียบ entries ตาม categories

3. **🔄 Ongoing Management**
   - ใช้ password generator สำหรับรหัสผ่านใหม่
   - อัปเดตรหัสผ่านเก่าเป็นประจำ
   - ตรวจสอบ security reports

## 🎫 Session Management

### **การจัดการ Sessions อย่างปลอดภัย**

#### **Session Security Principles:**

```
Session Best Practices:
├── ⏰ Timeout Management
│   ├── ตั้งค่า auto-logout เหมาะสม
│   ├── Session timeout: 15-30 นาที
│   └── Extended session: เฉพาะงานยาว
├── 🖥️ Device Management
│   ├── ลงชื่อออกจากอุปกรณ์ที่ไม่ใช้
│   ├── Monitor active sessions
│   └── Revoke suspicious sessions
├── 🌐 Network Awareness
│   ├── หลีกเลี่ยง public WiFi
│   ├── ใช้ VPN เมื่อจำเป็น
│   └── ตรวจสอบ SSL certificates
└── 🔄 Regular Cleanup
    ├── Clear browser cookies
    ├── Logout จากทุกเครื่อง
    └── Review session history
```

#### **AWCLOUD Session Configuration:**

**การตั้งค่าใน AWCLOUD (หากมีในระบบ):**
1. **⚙️ Session Settings**
   - หา session management ใน AWCLOUD interface
   - ตั้งค่า timeout ที่เหมาะสมหากระบบรองรับ
   - ใช้ "Remember Device" อย่างระมัดระวัง

2. **👁️ Active Session Monitoring**
   - ตรวจสอบ login history หากระบบมีให้
   - สังเกต IP address และ timing ของการเข้าใช้
   - ลงชื่อออกจากอุปกรณ์ที่ไม่ใช้

3. **🚨 Security Awareness**
   - ตั้งการแจ้งเตือนผ่าน email หากระบบรองรับ
   - ใช้อุปกรณ์ที่เชื่อถือได้เท่านั้น
   - ตรวจสอบกิจกรรมบัญชีเป็นประจำ

## 🔐 Advanced Authentication

### **Hardware Security Keys**

#### **การใช้ Security Keys:**
```
Hardware Key Benefits:
├── 🛡️ Phishing Resistant
├── 🔒 Offline Storage
├── 🎯 Domain Binding
├── ⚡ Fast Authentication
└── 🔄 Backup Capability
```

**แนะนำ Security Keys:**
- **YubiKey 5 Series** - รองรับ multiple protocols
- **Google Titan Security Keys** - ราคาดี, Google integration
- **FIDO2 Keys** - มาตรฐานใหม่, passwordless

### **Biometric Authentication**

#### **การใช้ Biometrics:**
```
Biometric Options:
├── 👆 Fingerprint Scanner
├── 👁️ Face Recognition
├── 🗣️ Voice Recognition
└── 👁️ Iris Scanner
```

**ข้อควรระวัง:**
- **📱 Device Dependency** - ผูกกับอุปกรณ์เฉพาะ
- **🔄 Backup Method** - ต้องมีวิธี backup เสมอ
- **🎯 Privacy Concerns** - พิจารณาความเป็นส่วนตัว

## 📱 Mobile Authentication

### **การรักษาความปลอดภัยบนมือถือ**

#### **Mobile Security Setup:**
```
Mobile Authentication:
├── 📲 App Security
│   ├── ใช้ official AWCLOUD app
│   ├── อัปเดต app เป็นประจำ
│   └── ตรวจสอบ app permissions
├── 🔒 Device Security
│   ├── Screen lock ด้วย PIN/Pattern/Biometric
│   ├── Auto-lock หลัง 1-2 นาที
│   └── Remote wipe capability
├── 📶 Network Security
│   ├── หลีกเลี่ยง public WiFi
│   ├── ใช้ mobile data เมื่อสงสัย
│   └── VPN สำหรับ sensitive operations
└── 💾 Backup Strategy
    ├── Backup authenticator apps
    ├── Secure cloud backup
    └── Physical backup codes
```

## 🔍 Authentication Troubleshooting

### **🔧 ปัญหาที่พบบ่อยและการแก้ไข**

#### **TOTP ไม่ทำงาน:**
```
Troubleshooting Steps:
├── ⏰ ตรวจสอบเวลาในอุปกรณ์
├── 🔄 Re-sync time ใน authenticator app
├── 📱 ลอง authenticator app อื่น
├── 💾 ใช้ backup codes
└── 📞 ติดต่อ support team
```

#### **ลืมรหัสผ่าน:**
```
Password Recovery:
├── 🔄 ใช้ "Forgot Password" feature
├── 📧 ตรวจสอบ email recovery
├── 📱 ใช้ SMS recovery (ถ้ามี)
├── 💾 ใช้ password manager recovery
└── 📞 Account recovery process
```

#### **Lost Device:**
```
Device Loss Response:
├── 🚨 Immediately report to support
├── 🔄 Change all passwords
├── 💾 Use backup codes
├── 📱 Remote wipe lost device
└── 🔧 Setup authentication on new device
```

---

💡 **เคล็ดลับ:** การยืนยันตัวตนที่แข็งแกร่งเป็นการลงทุนในความปลอดภัยระยะยาว ใช้เวลาในการตั้งค่าให้ถูกต้องครั้งเดียว เพื่อความสบายใจตลอดไป

**📅 อัปเดตล่าสุด:** 18 สิงหาคม 2568 | **🔄 ทบทวนทุก:** 6 เดือน