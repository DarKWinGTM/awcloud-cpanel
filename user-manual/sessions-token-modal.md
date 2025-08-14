# 🔐 SESSIONS TOKEN Modal (sessionsToken) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ SESSIONS TOKEN Modal** - จัดการ Session Tokens ทั้งหมด ดู Session ที่ Active และยกเลิก Session ที่น่าสงสัยเพื่อความปลอดภัย
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[TOTP Config Modal](totp-config-modal.md)** - การตั้งค่าความปลอดภัย 2FA
- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์

## 📖 ภาพรวม SESSIONS TOKEN Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** เมนูความปลอดภัย → modal sessionsToken

### 🎯 **คุณสมบัติหลัก**
- **จัดการ session tokens** ทั้งหมด
- **ดู session ที่ active** อยู่
- **ยกเลิก session** ที่น่าสงสัย
- **ตั้งค่าความปลอดภัย** session management

---

## 📋 วิธีใช้งาน SESSIONS TOKEN

### **1️⃣ ดู Active Sessions**

#### **📊 Session Information Display**
```
Session Details:
├── Session ID: abc123def456...
├── Device: Chrome on Windows 11
├── Browser: Chrome 118.0.0.0
├── Operating System: Windows 11
├── IP Address: 192.168.1.100
├── Location: Bangkok, Thailand
├── Login Time: 2024-01-15 09:30:00
├── Last Activity: 5 minutes ago
├── Status: Active
└── Risk Level: Low
```

#### **🌍 Geographic Information**
```
Location Data:
├── Country: Thailand 🇹🇭
├── City: Bangkok
├── ISP: AIS Fibre
├── Connection Type: Broadband
├── Timezone: GMT+7
└── VPN/Proxy: Not Detected
```

---

### **2️⃣ จัดการ Sessions**

#### **🛠️ Session Management Options**
```
Management Actions:
├── ✓ Terminate Session: ยกเลิก session เดี่ยว
├── ✓ Terminate All Others: ยกเลิกทุก session ยกเว้นปัจจุบัน
├── ✓ Terminate All: ยกเลิกทุก session (รวมปัจจุบัน)
├── ⏰ Set Session Timeout: ตั้งเวลาหมดอายุ
├── 🔒 Lock Session: ล็อค session ชั่วคราว
└── 📋 Session Details: ดูรายละเอียดเพิ่มเติม
```

#### **⚠️ Suspicious Session Detection**
```
Risk Assessment Criteria:
├── 🔴 High Risk:
│   ├── Unknown location
│   ├── Unusual device
│   ├── VPN/Proxy usage
│   └── Impossible travel time
├── 🟡 Medium Risk:
│   ├── New device
│   ├── Different timezone
│   └── Infrequent location
└── 🟢 Low Risk:
    ├── Known device
    ├── Regular location
    └── Normal usage pattern
```

---

### **3️⃣ ตั้งค่าความปลอดภัย**

#### **🔧 Security Configuration**
```
Security Settings:
├── Session Timeout: 2 hours (default)
│   ├── Options: 30min, 1h, 2h, 4h, 8h, 24h
│   └── Custom: Set specific duration
├── Max Concurrent Sessions: 3 (recommended)
│   ├── Range: 1-10 sessions
│   └── Unlimited: For power users
├── Idle Timeout: 30 minutes
│   ├── Auto-logout when inactive
│   └── Configurable: 5min - 2hours
├── Require 2FA for New Sessions: Yes
│   ├── Always require 2FA
│   └── Remember trusted devices
└── IP Whitelist: Optional
    ├── Restrict to specific IPs
    └── Dynamic IP support
```

#### **🚨 Alert Configuration**
```
Alert Settings:
├── New Session Login: Email + SMS
├── Unusual Location: Email notification
├── Multiple Failed Attempts: Immediate alert
├── Session Termination: Log only
├── Suspicious Activity: High priority alert
└── Weekly Summary: Email digest
```

---

## 🚀 เคล็ดลับการใช้งานขั้นสูง

### **🛡️ Advanced Security Features**

#### **🔍 Session Monitoring**
```
Monitoring Capabilities:
├── Real-time Activity: ติดตามกิจกรรมแบบเรียลไทม์
├── Login History: ประวัติการเข้าสู่ระบบ
├── Device Fingerprinting: รองรอยอุปกรณ์
├── Behavioral Analysis: การวิเคราะห์พฤติกรรม
├── Anomaly Detection: การตรวจจับความผิดปกติ
└── Threat Intelligence: ข้อมูลภัยคุกคาม
```

#### **⚡ Automated Security**
```
Automation Features:
├── Auto-logout: ออกจากระบบอัตโนมัติ
├── Session Rotation: หมุนเวียน session tokens
├── Risk-based Authentication: การยืนยันตัวตนตามความเสี่ยง
├── Adaptive Security: ปรับระดับความปลอดภัยอัตโนมัติ
├── Machine Learning: เรียนรู้พฤติกรรมผู้ใช้
└── Predictive Blocking: บล็อกภัยคุกคามล่วงหน้า
```

### **📊 Session Analytics**

#### **📈 Usage Patterns**
```
Analytics Insights:
├── Peak Usage Hours: ช่วงเวลาใช้งานสูงสุด
├── Device Preferences: อุปกรณ์ที่ใช้บ่อย
├── Location Patterns: รูปแบบสถานที่
├── Session Duration: ระยะเวลาการใช้งาน
├── Feature Usage: การใช้ฟีเจอร์ต่างๆ
└── Security Events: เหตุการณ์ด้านความปลอดภัย
```

---

## ⚠️ การแก้ไขปัญหาและความเสี่ยง

### **❌ Common Session Issues**

#### **🚫 Session Expired**
```
Session Expiration Issues:
├── Causes:
│   ├── Timeout reached
│   ├── Inactivity period exceeded
│   ├── System maintenance
│   ├── Security policy changes
│   └── Server restart
├── Solutions:
│   ├── Re-login with credentials
│   ├── Check session timeout settings
│   ├── Verify network connectivity
│   ├── Clear browser cache
│   └── Contact support if persistent
```

#### **🔒 Session Lock**
```
Lock Scenarios:
├── Multiple Failed Attempts: บล็อกชั่วคราว
├── Suspicious Activity: ล็อคเพื่อความปลอดภัย
├── Concurrent Session Limit: เกินจำนวนที่อนุญาต
├── Geographic Restrictions: จำกัดตามพื้นที่
└── Administrative Lock: ผู้ดูแลระบบล็อค

Recovery Steps:
├── Wait for automatic unlock
├── Use different device/network
├── Contact administrator
├── Verify identity
└── Reset session tokens
```

### **🛡️ Security Best Practices**

#### **✅ Recommended Practices**
```
Security Recommendations:
├── ตรวจสอบ active sessions เป็นประจำ
├── ยกเลิก sessions ที่ไม่รู้จักทันที
├── ใช้ 2FA สำหรับ sessions ใหม่
├── ตั้งค่า session timeout ให้เหมาะสม
├── ไม่ใช้ shared computers สำหรับ sensitive accounts
├── อัปเดต passwords เป็นประจำ
├── ติดตาม login notifications
└── ใช้ secure networks เท่านั้น
```

#### **⚠️ Security Warnings**
```
Risk Mitigation:
❌ อย่า ignore suspicious session alerts
❌ อย่า share session tokens
❌ อย่า login จาก public computers
❌ อย่า disable security notifications
❌ อย่าใช้ weak passwords
❌ อย่า ignore unusual activity warnings
```

---

## 📊 การติดตาม Security

### **📈 Security Metrics**
```
Security KPIs:
├── Active Sessions Count: จำนวน sessions ที่ active
├── Session Success Rate: อัตราสำเร็จการเข้าสู่ระบบ
├── Failed Login Attempts: ความพยายามเข้าสู่ระบบที่ล้มเหลว
├── Suspicious Activity Count: จำนวนกิจกรรมน่าสงสัย
├── Session Termination Rate: อัตราการยกเลิก sessions
├── Average Session Duration: ระยะเวลา session เฉลี่ย
└── Security Incident Response Time: เวลาตอบสนองเหตุการณ์
```

### **🔔 Security Alerts**
```
Alert Types:
├── 🚨 Critical: Unauthorized access attempts
├── ⚠️ Warning: Unusual login patterns
├── ℹ️ Info: New device registrations
├── 📊 Scheduled: Weekly security reports
└── 🔧 System: Maintenance notifications
```

---

## 💡 Best Practices

### **🔧 Session Management**
```
Management Guidelines:
├── Regular Audits: ตรวจสอบ sessions เป็นประจำ
├── Clean Up: ลบ sessions ที่ไม่ได้ใช้
├── Monitor Patterns: ติดตามรูปแบบการใช้งาน
├── Update Settings: ปรับการตั้งค่าตามความต้องการ
├── Document Changes: บันทึกการเปลี่ยนแปลง
└── Train Users: อบรมผู้ใช้เรื่องความปลอดภัย
```

### **📋 Maintenance Schedule**
```
Maintenance Tasks:
├── Daily: Monitor active sessions
├── Weekly: Review security logs
├── Monthly: Audit session settings
├── Quarterly: Security assessment
└── Annually: Complete security review
```

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Security อื่นๆ**
- **[TOTP Config Modal](totp-config-modal.md)** - การตั้งค่า 2FA
- **[Dashboard Guide](dashboard-guide.md)** - ความปลอดภัยใน Dashboard

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป

### **🌐 External Resources**
- **[Session Security Guide](https://owasp.org/www-community/controls/Session_Management_Cheat_Sheet)** - คู่มือความปลอดภัย Session
- **[Browser Security](https://wiki.mozilla.org/Security/Guidelines/Web_Security)** - ความปลอดภัยเบราว์เซอร์

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** ตรวจสอบ sessions เป็นประจำและยกเลิก session ที่ไม่รู้จัก ตั้งค่า session timeout ให้เหมาะสมกับการใช้งาน และเปิดใช้ 2FA สำหรับความปลอดภัยสูงสุด
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง