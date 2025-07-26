# 📝 การตั้งค่าสิทธิ์และความปลอดภัย

## ระดับสิทธิ์ในระบบ AWCLOUD CPanel

มีระดับสิทธิ์ 4 ประเภทหลักในระบบ:

<table><thead><tr><th width="180">Role</th><th>Capabilities</th><th>Mining Access</th><th>Config Access</th></tr></thead><tbody><tr><td>👑 Administrator</td><td>สิทธิ์เต็มทุกระบบ</td><td>✅ เต็มรูปแบบ</td><td>✅ แก้ไขได้ทั้งหมด</td></tr><tr><td>✏️ Editor</td><td>จัดการ mining และ accounts</td><td>✅ จัดการได้</td><td>⚠️ บางส่วน</td></tr><tr><td>👀 Viewer</td><td>ดูข้อมูลและรายงานเท่านั้น</td><td>👁️ ดูได้อย่างเดียว</td><td>👁️ ดูได้อย่างเดียว</td></tr><tr><td>🎫 Guest</td><td>ดูข้อมูลที่ได้รับอนุญาตเท่านั้น</td><td>👁️ จำกัด</td><td>❌ ไม่สามารถเข้าถึง</td></tr></tbody></table>

## การตั้งค่าสิทธิ์แบบละเอียด

### 🔐 **Security Configurations**

#### **File Permissions**
```bash
# สิทธิ์ไฟล์สำคัญ
chmod 600 *.json *.key        # Configuration files
chmod 700 auth/               # Authentication directory  
chmod 755 static/             # Static files
chmod 644 templates/*.html    # HTML templates
```

#### **Access Control Lists**
- **Mining Operations**: Administrator, Editor
- **Account Management**: Administrator เท่านั้น
- **System Logs**: Administrator, Editor (read-only)
- **Configuration Files**: Administrator เท่านั้น

### ⚙️ **การกำหนดสิทธิ์ผู้ใช้**

#### **สำหรับ Administrator**
- เข้าถึงได้ทุกระบบและไฟล์
- แก้ไข configuration files ทั้งหมด
- จัดการ users และ permissions
- เข้าถึง sensitive data ทั้งหมด

#### **สำหรับ Editor**
- จัดการ mining strategies และ schedules
- แก้ไข account settings (ไม่รวม private keys)
- ดู performance reports และ analytics
- ไม่สามารถแก้ไข security settings

#### **สำหรับ Viewer**
- ดู dashboard และ mining statistics
- เข้าถึง historical data และ reports
- ไม่สามารถแก้ไขข้อมูลใดๆ
- เหมาะสำหรับ monitoring เท่านั้น

#### **สำหรับ Guest**
- เข้าถึงข้อมูลเฉพาะที่ได้รับอนุญาต
- ดูสถิติพื้นฐานเท่านั้น
- ไม่สามารถเข้าถึงข้อมูลที่เป็นความลับ

## Best Practices สำหรับการรักษาความปลอดภัย

### 🔒 **การป้องกันข้อมูล**
- ใช้ encryption สำหรับข้อมูลสำคัญ
- ตั้งรหัสผ่านที่ซับซ้อน
- เปลี่ยนรหัสผ่านเป็นประจำ
- ใช้ 2FA เมื่อเป็นไปได้

### 📊 **การตรวจสอบการเข้าถึง**
- ระบบ audit logs สำหรับทุกการเข้าถึง
- การแจ้งเตือนเมื่อมีการเข้าถึงผิดปกติ
- การตรวจสอบ session timeouts
- การ backup ข้อมูลเป็นประจำ
