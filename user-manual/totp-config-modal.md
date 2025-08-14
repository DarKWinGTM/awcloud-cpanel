# 🛡️ TOTP CONFIG Modal (totpConfig) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ TOTP CONFIG Modal** - การตั้งค่าความปลอดภัย 2FA พร้อม Google Authenticator และระบบ LOCK/UNLOCK
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Sessions Token Modal](sessions-token-modal.md)** - การจัดการ Session Security
- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์

## 📖 ภาพรวม TOTP CONFIG Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** เมนูความปลอดภัย → modal totpConfig

### 🧭 **โครงสร้าง Modal**
TOTP CONFIG Modal ประกอบด้วย **2 Tabs** หลัก:

1. **PAIR** - จับคู่กับ Google Authenticator
2. **LOCK/UNLOCK** - เปิด/ปิดระบบ 2FA

---

## 📋 รายละเอียดแต่ละ Tab

### 1️⃣ **Tab 1: PAIR (totpConfig-main)**

#### **🎯 หน้าที่หลัก**
- **จับคู่กับ Google Authenticator**
- **ตั้งค่าระบบ 2FA เริ่มแรก**

#### **📋 วิธีใช้งาน Step-by-Step**
1. **ติดตั้ง Google Authenticator:**
   ```
   Download Options:
   ├── Android: Google Play Store
   ├── iOS: App Store
   └── Desktop: Browser Extension
   ```

2. **สแกน QR Code:**
   - เปิด Google Authenticator App
   - คลิก "+" หรือ "Add Account"
   - สแกน QR Code ที่แสดงใน Modal

3. **ยืนยันการจับคู่:**
   - ใส่รหัส 6 หลักจาก Authenticator
   - คลิก "Verify" เพื่อยืนยัน

4. **บันทึก Backup Codes:**
   ```
   Important Backup Codes:
   ├── Code 1: ABC123DEF456
   ├── Code 2: GHI789JKL012  
   ├── Code 3: MNO345PQR678
   └── Store safely offline
   ```

---

### 2️⃣ **Tab 2: LOCK/UNLOCK (totpConfig-switch)**

#### **🎯 หน้าที่หลัก**
- **เปิด/ปิดระบบ 2FA**
- **จัดการสถานะความปลอดภัย**

#### **📋 วิธีใช้งาน**
1. **Enable 2FA:**
   ```
   Enable Process:
   ├── ใส่รหัส TOTP ปัจจุบัน
   ├── เลือก "Enable"
   ├── ยืนยันด้วยรหัสอีกครั้ง
   └── ระบบเปิดใช้งาน 2FA
   ```

2. **Disable 2FA:**
   ```
   Disable Process:
   ├── ใส่รหัส TOTP ปัจจุบัน
   ├── เลือก "Disable"
   ├── ยืนยันการปิดระบบ
   └── 2FA จะถูกปิดใช้งาน
   ```

---

## 🔒 ความปลอดภัยขั้นสูง

### **🛡️ Security Best Practices**

#### **✅ ข้อแนะนำ**
```
Security Recommendations:
├── เปิด 2FA สำหรับ account ที่มี asset มีค่า
├── เก็บ backup codes ในที่ปลอดภัย
├── ใช้ Google Authenticator หรือ app ที่เชื่อถือได้
├── ตรวจสอบ 2FA status เป็นประจำ
└── อย่าแชร์ codes ให้ใครเด็ดขาด
```

#### **⚠️ ข้อควรระวัง**
```
Security Warnings:
❌ อย่าใช้ SMS-based 2FA (ไม่ปลอดภัย)
❌ อย่าเก็บ backup codes ใน digital format
❌ อย่าใช้ 2FA app ที่ไม่รู้จัก
❌ อย่าแชร์ QR code ให้ใครเห็น
❌ อย่าปิด 2FA โดยไม่จำเป็น
```

### **📱 Authenticator App Recommendations**

#### **🥇 แนะนำสูงสุด**
```
Google Authenticator:
✅ Free และ reliable
✅ Cross-platform support
✅ Offline operation
✅ Simple interface
```

#### **🔄 ทางเลือก**
```
Alternative Options:
├── Authy: Cloud backup support
├── Microsoft Authenticator: Business integration
├── 1Password: Password manager integration
└── LastPass Authenticator: Multi-device sync
```

---

## 🔧 การแก้ไขปัญหาที่พบบ่อย

### **❌ ปัญหาการจับคู่**

#### **🚫 QR Code ไม่ทำงาน**
- **สาเหตุ:** Camera permission, network issue
- **วิธีแก้:** 
  1. ตรวจสอบ camera permission
  2. ใช้ manual entry code
  3. รีเฟรช QR code

#### **🔢 รหัสไม่ถูกต้อง**
- **สาเหตุ:** เวลาไม่ sync, app issue
- **วิธีแก้:**
  1. ตรวจสอบเวลาในอุปกรณ์
  2. Sync time automatically
  3. ลองรหัสใหม่ที่ generate

### **⏰ ปัญหา Time Sync**

#### **🔄 รหัสหมดอายุเร็ว**
```
Time Sync Issues:
├── Device time incorrect
├── Timezone mismatch  
├── Network time sync disabled
└── App cache issues

Solutions:
├── Enable automatic time sync
├── Check timezone settings
├── Restart authenticator app
└── Re-pair if necessary
```

### **📱 อุปกรณ์สูญหาย**

#### **🆘 Emergency Access**
```
Recovery Options:
├── Use Backup Codes (ที่เก็บไว้)
├── Contact Support (พร้อมหลักฐาน)
├── Account Recovery Process
└── Re-setup 2FA on new device
```

---

## 💡 เคล็ดลับการใช้งาน

### **🚀 Best Practices**

#### **📋 Setup Checklist**
```
Initial Setup:
□ Download Google Authenticator
□ Scan QR code successfully
□ Test with first code
□ Save backup codes safely
□ Test enable/disable function
□ Document setup date
```

#### **🔄 Maintenance Tasks**
```
Regular Maintenance:
├── Monthly: Test 2FA login
├── Quarterly: Check backup codes
├── Semi-annually: Review security
├── Annually: Consider re-setup
└── Always: Monitor for issues
```

### **🎯 Advanced Tips**

#### **📱 Multiple Devices**
```
Multi-device Strategy:
├── Primary Device: Main authenticator
├── Backup Device: Secondary authenticator  
├── Physical Backup: Written backup codes
└── Cloud Backup: Secure cloud storage
```

#### **🔒 Enhanced Security**
```
Security Layers:
├── 2FA: Time-based codes
├── Backup Codes: Emergency access
├── Device Security: Lock screen, biometrics
├── Network Security: Secure connections
└── Physical Security: Device protection
```

---

## 📊 การติดตาม Security

### **📈 Security Metrics**
```
Monitor These KPIs:
├── 2FA Success Rate
├── Failed Login Attempts
├── Backup Code Usage
├── Security Incident Count
└── Account Access Patterns
```

### **🔔 Security Alerts**
```
Alert Triggers:
├── Multiple failed 2FA attempts
├── Login from unusual location
├── Backup code usage
├── 2FA disable attempts
└── Suspicious account activity
```

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Security อื่นๆ**
- **[Sessions Token Modal](sessions-token-modal.md)** - การจัดการ Session
- **[Dashboard Guide](dashboard-guide.md)** - ความปลอดภัยใน Dashboard

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป

### **🌐 External Resources**
- **[Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)** - Download App
- **[2FA Security Guide](https://authy.com/what-is-2fa/)** - เรียนรู้เพิ่มเติมเกี่ยวกับ 2FA

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** เปิด 2FA สำหรับ account ที่มี asset มีค่า และเก็บ backup codes ไว้ในที่ปลอดภัยเสมอ อย่าลืมทดสอบ 2FA เป็นประจำเพื่อให้แน่ใจว่าทำงานได้ปกติ
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง