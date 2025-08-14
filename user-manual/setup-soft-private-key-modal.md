# 🔑 SETUP SOFT PRIVATE KEY Modal - คู่มือการใช้งาน

{% hint style="warning" %}
**คำเตือน:** ใช้สำหรับผู้ใช้ขั้นสูงเท่านั้น - การจัดการ Private Key ต้องใช้ความรู้ด้านความปลอดภัย
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Register Wallet Sign Modal](register-wallet-sign-modal.md)** - ลงทะเบียน Wallet
- **[TOTP Config Modal](totp-config-modal.md)** - ความปลอดภัย 2FA

## 📖 ภาพรวม Modal

### 🎯 **การเข้าถึง**
**เข้าถึง:** เมนูขั้นสูง → modal setupSoftPrivateKey

### 🎯 **คุณสมบัติหลัก**
- **ตั้งค่า soft private key**
- **รองรับ MCW, WCW wallet types**
- **เพิ่มความปลอดภัยขั้นสูง**

## 📋 วิธีใช้งาน

### **1️⃣ เลือกประเภท Wallet**
```
Supported Wallet Types:
├── MCW (My Cloud Wallet): High security
├── WCW (WAX Cloud Wallet): Standard security  
├── Custom Configuration: Advanced users
└── Hardware Integration: Maximum security
```

### **2️⃣ ใส่ Private Key**
```
Key Configuration:
├── Private Key: Enter your private key
├── Confirm Key: Verify same key
├── Encryption: AES-256 (Recommended)
└── Validation: System validates format
```

### **3️⃣ ตั้งค่าความปลอดภัย**
```
Security Settings:
├── Auto-Lock: 30 minutes default
├── Require Password: Every transaction
├── Backup Options: Encrypted file + Cloud
└── Access Control: Restricted permissions
```

⚠️ **ความเสี่ยง:** Private keys ต้องการการจัดการอย่างระมัดระวัง

💡 **เคล็ดลับ:** ใช้เฉพาะกรณีที่เข้าใจความเสี่ยงและมีความรู้ด้านความปลอดภัย

**📝 หมายเหตุ:** อัปเดต 27 กรกฎาคม 2568