# 🔧 การแก้ไขปัญหาและ FAQ

{% hint style="info" %}
**คู่มือแก้ไขปัญหาครบถ้วน** สำหรับ AWCLOUD CPanel - รวมปัญหาที่พบบ่อยและวิธีแก้ไขที่ได้ผลจริง
{% endhint %}

## 🚨 **ปัญหาเร่งด่วน - แก้ไขได้ใน 30 วินาที**

### ❌ **Account ไม่เริ่มขุด (พบบ่อยที่สุด)**

**อาการ:** กดปุ่ม START แล้ว STATUS ยังเป็น ❌ 

**สาเหตุและการแก้ไข:**

```
🔍 เช็ค 1: มี Tools หรือไม่?
├── อาการ: คอลัมน์ NFT แสดง "(none)"
└── แก้ไข: คลิก 🛠️ TOOLS → BOX NFT → เลือก tools → Set Tools

🔍 เช็ค 2: มี Land หรือไม่?
├── อาการ: คอลัมน์ LAND แสดง "(none)"
└── แก้ไข: คลิก 🌍 LAND → MAIN → เลือก planet/land → Set Land

🔍 เช็ค 3: ทรัพยากรพอหรือไม่?
├── อาการ: CPU/NET/RAM < 10%
└── แก้ไข: คลิก ⚡ RESOURCES → STAKE → stake เพิ่ม 5-10 WAX

🔍 เช็ค 4: Account active หรือไม่?
├── อาการ: Account เพิ่งสร้างใหม่
└── แก้ไข: รอ 5-10 นาที หรือทำ transaction เล็กๆ
```

**✅ วิธีเช็คอย่างรวดเร็ว:**
1. ดูแถว account → ต้องมี: Tools ✓, Land ✓, Resources > 10% ✓
2. ถ้าขาดอะไร → คลิกปุ่มนั้นแก้ไข
3. ลองกด START อีกครั้ง

---

### ⚠️ **หน้าเว็บแสดงข้อมูลผิด / ไม่อัปเดท**

**อาการ:** ข้อมูลไม่เปลี่ยนแปลง หรือ แสดงข้อมูลเก่า

**วิธีแก้ไขตามลำดับ:**

```
🔄 ขั้นตอน 1: รีเฟรชหน้า (90% ได้ผล)
├── กด F5 หรือ Ctrl+R
├── รอ 5-10 วินาทีให้โหลดเสร็จ
└── ตรวจสอบว่าข้อมูลอัปเดทแล้ว

🔄 ขั้นตอน 2: ล้าง Cache (ถ้าขั้นตอน 1 ไม่ได้ผล)
├── Chrome: Ctrl+Shift+R
├── Firefox: Ctrl+F5
└── Safari: Cmd+Shift+R

🔄 ขั้นตอน 3: ปิด Ad Blocker (ถ้าขั้นตอน 2 ไม่ได้ผล)
├── ปิด uBlock Origin, AdBlock Plus
├── รีเฟรชหน้าใหม่
└── เปิด Ad Blocker กลับ หลังใช้งานเสร็จ

🔄 ขั้นตอน 4: เปลี่ยน Browser (ถ้าขั้นตอน 3 ไม่ได้ผล)
├── ลอง Chrome, Firefox, Safari, Edge
├── เปิดโหมด Incognito/Private
└── ทดสอบการทำงาน
```

---

### 🔒 **Modal ไม่เปิด / ปุ่มไม่ทำงาน**

**อาการ:** คลิกปุ่ม TOOLS, LAND, TRANSFER แล้วไม่มีอะไรเกิดขึ้น

**วิธีแก้ไข:**

```
🔍 เช็ค 1: Popup Blocker
├── ดู address bar มีไอคอน popup blocked หรือไม่
├── คลิกอนุญาต popup สำหรับเว็บไซต์นี้
└── ลองคลิกปุ่มใหม่

🔍 เช็ค 2: JavaScript
├── ตรวจสอบ Console (F12 → Console tab)
├── หา error สีแดง
└── ปิด extension ที่อาจขัดขวาง

🔍 เช็ค 3: หน้าโหลดเสร็จแล้วหรือไม่
├── รอให้หน้าโหลดครบ 100%
├── ดู loading indicator หมดหรือยัง
└── ลองคลิกปุ่มอื่นทดสอบ

🔍 เช็ค 4: Browser Compatibility
├── ใช้ Chrome หรือ Firefox (แนะนำ)
├── อัปเดต browser เป็นเวอร์ชันล่าสุด
└── ปิดการใช้งาน extension อื่นๆ ชั่วคราว
```

---

## 💸 **ปัญหาการเงินและ Transaction**

### 💰 **Transaction ล้มเหลว / ไม่สำเร็จ**

**อาการ:** กดส่ง WAX/TLM แล้วได้ error หรือไม่เห็นการเปลี่ยนแปลง

**สาเหตุและการแก้ไข:**

```
💳 เช็คยอดเงิน:
├── Balance เพียงพอสำหรับจำนวนที่ต้องการส่ง + ค่าธรรมเนียม
├── WAX ต้องมีอย่างน้อย 0.1 WAX เหลือสำหรับ transaction fee
└── ถ้าไม่พอ → เติมเงินก่อนลองใหม่

⚡ เช็ครัพยากร:
├── CPU > 5% (สำหรับ transaction)
├── NET > 5% (สำหรับ transaction)
├── RAM > 10% (สำหรับ contract call)
└── ถ้าไม่พอ → stake WAX เพิ่มหรือ rent resources

🌐 เช็ค Network:
├── WAX Blockchain อาจช้าหรือมีปัญหา
├── รอ 1-2 นาทีแล้วลองใหม่
└── เช็คสถานะที่ wax.bloks.io

🔐 เช็ค Permission:
├── Wallet ให้สิทธิ์การทำ transaction หรือไม่
├── ลอง sign message ง่ายๆ ทดสอบ
└── Re-authenticate wallet ถ้าจำเป็น
```

### 🔄 **WAX หาย / TLM หาย**

**อาการ:** เงินหายหลังจากทำ transaction

**⚠️ ก่อนตื่นตระหนก - เช็คสิ่งเหล่านี้:**

```
🕐 เช็ครอรอ Confirmation:
├── Transaction อาจยังไม่ confirmed
├── รอ 2-5 นาที แล้วรีเฟรช
└── เช็ค transaction hash ที่ blockchain explorer

📍 เช็คตำแหน่งเงิน:
├── เงินอาจไปถึง account ปลายทางแล้ว
├── เช็คใน target account ที่ส่งไป
└── เช็ค transaction history

🔍 เช็ค Transaction Detail:
├── เข้า wax.bloks.io
├── ใส่ account name เพื่อดูประวัติ
└── ดู transaction ล่าสุดว่าสำเร็จหรือไม่

💻 เช็ค Account Balance:
├── บางครั้งหน้าเว็บไม่อัปเดท
├── เช็คจาก wallet โดยตรง
└── เช็คจาก blockchain explorer
```

**📞 ถ้ายังไม่พบเงิน:**
1. เก็บ transaction hash ไว้
2. ติดต่อ support พร้อมหลักฐาน
3. ส่ง screenshot error message

---

## 🛠️ **ปัญหาการตั้งค่าและการใช้งาน**

### ⚙️ **การตั้งค่า Modal ไม่บันทึก**

**อาการ:** ตั้งค่าใน modal แล้วกลับมาดู การตั้งค่าหาย

**วิธีแก้ไข:**

```
✅ เช็คขั้นตอนการบันทึก:
├── หลังตั้งค่าเสร็จ ต้องคลิก "Save" หรือ "Apply"
├── รอข้อความ "Settings Saved Successfully"
└── ค่อยปิด modal

🔄 เช็ค Browser Storage:
├── Browser อาจล้าง localStorage
├── ลอง browser อื่นเพื่อทดสอบ
└── ตั้งค่าอีกครั้งและทดสอบ

🌐 เช็ค Network Connection:
├── การตั้งค่าบางอย่างต้องส่งไปเซิร์ฟเวอร์
├── ต้องมี internet ขณะบันทึก
└── ถ้า network ขาด ตั้งค่าจะไม่ถูกบันทึก
```

### 🎯 **Mining ไม่ทำงานต่อเนื่อง**

**อาการ:** Account เริ่มขุดได้ แต่หยุดเองหลังจากนั้น

**วิธีวิเคราะห์สาเหตุ:**

```
📊 เช็ค Mining Log:
├── คลิก 📊 EXPAND ใน account row
├── ดู error message หรือ warning
└── เช็คเวลาที่หยุดทำงานล่าสุด

⚡ เช็ครัพยากรหมด:
├── CPU/NET/RAM อาจหมดระหว่างขุด
├── เช็คกราฟการใช้งานทรัพยากร
└── stake เพิ่มถ้าจำเป็น

🛠️ เช็ค Tool Durability:
├── Mining tools อาจหมด durability
├── เข้า boxNFT modal เพื่อเช็ค
└── เปลี่ยน tools ใหม่ถ้าจำเป็น

🚫 เช็ค Ban Status:
├── Account อาจโดน temporary ban
├── เช็คผ่าน gotBAN modal
└── ปรับ mining pattern ถ้าโดน ban บ่อย

🌍 เช็ค Land Status:
├── Land อาจมีปัญหาหรือเปลี่ยนสถานะ
├── ลองเปลี่ยน land ใหม่
└── เช็ค land pool ที่ active
```

---

## 🔐 **ปัญหา Security และ Authentication**

### 🔑 **Wallet ไม่เชื่อมต่อ / ไม่ sign transaction**

**อาการ:** ไม่สามารถใช้งาน wallet functions ได้

**วิธีแก้ไข:**

```
🔗 Re-connect Wallet:
├── ปิด modal ทั้งหมด
├── ใส่ account name ใหม่
├── ลอง sign message ง่ายๆ
└── เช็คการเชื่อมต่อ

🔐 เช็ค Wallet App:
├── WAX Cloud Wallet: เช็คว่า login อยู่หรือไม่
├── Anchor: เช็คว่าเปิด app อยู่หรือไม่
├── อัปเดต wallet app เป็นเวอร์ชันล่าสุด
└── ลอง logout แล้ว login ใหม่

🌐 เช็ค Browser Permission:
├── อนุญาตให้เว็บเข้าถึง clipboard
├── อนุญาต popup จาก wallet site
└── ล้าง browser cache เฉพาะ wallet site

📱 เช็ค Mobile/Desktop:
├── บางฟีเจอร์ทำงานดีกว่าบน desktop
├── ลองเปลี่ยนจาก mobile เป็น desktop
└── ใช้ browser หลักแทน in-app browser
```

### 🔒 **2FA / TOTP ไม่ทำงาน**

**อาการ:** รหัส 2FA ไม่ถูกต้องหรือไม่ยอมรับ

**วิธีแก้ไข:**

```
🕐 เช็คเวลา:
├── เวลาใน device ต้องตรงกับเวลาจริง
├── sync เวลาด้วย internet time
└── เช็คว่ารหัสยังไม่หมดอายุ (30 วินาที)

📱 เช็ค Authenticator App:
├── Google Authenticator อัปเดตหรือไม่
├── ลอง Authy หรือ Microsoft Authenticator
└── เช็คว่า account ชื่อถูกต้อง

🔄 Re-setup TOTP:
├── เข้า totpConfig modal
├── ลบการตั้งค่าเก่า
├── setup ใหม่ด้วย QR code ใหม่
└── ทดสอบรหัสก่อนเปิดใช้งาน

💾 เช็ค Backup Codes:
├── ใช้ backup codes ถ้ามี
├── เก็บ backup codes ไว้ในที่ปลอดภัย
└── สร้าง backup codes ใหม่หลัง setup
```

---

## 📱 **ปัญหาเฉพาะ Platform**

### 💻 **Desktop Browser Issues**

**Chrome:**
```
❌ ปัญหา: Extension ขัดขวาง
✅ แก้ไข: ปิด extension ทีละตัวเพื่อหาตัวที่ทำปัญหา

❌ ปัญหา: Memory leak หลังใช้นาน
✅ แก้ไข: ปิด tab อื่นๆ หรือ restart Chrome

❌ ปัญหา: Hardware acceleration
✅ แก้ไข: ปิด hardware acceleration ใน Chrome settings
```

**Firefox:**
```
❌ ปัญหา: Tracking protection ขัดขวาง
✅ แก้ไข: ปิด Enhanced Tracking Protection สำหรับ site นี้

❌ ปัญหา: LocalStorage quota
✅ แก้ไข: ล้าง storage หรือเพิ่ม quota ใน about:config
```

**Safari:**
```
❌ ปัญหา: Cross-origin restrictions
✅ แก้ไข: ปิด "Prevent cross-site tracking" ชั่วคราว

❌ ปัญหา: WebRTC ไม่ทำงาน
✅ แก้ไข: เปิดใช้งาน WebRTC ใน Develop menu
```

### 📱 **Mobile Browser Issues**

**iOS Safari:**
```
❌ ปัญหา: Modal เปิดไม่เต็มหน้าจอ
✅ แก้ไข: เปิด desktop mode หรือ rotate เป็น landscape

❌ ปัญหา: Touch target เล็กเกินไป
✅ แก้ไข: zoom in หรือใช้ accessibility zoom
```

**Android Chrome:**
```
❌ ปัญหา: Keyboard ซ่อน input field
✅ แก้ไข: scroll หรือ rotate เพื่อเห็น field

❌ ปัญหา: Performance ช้าเมื่อเปิดหลาย tab
✅ แก้ไข: ปิด tab อื่นๆ ระหว่างใช้งาน
```

---

## 🎮 **ปัญหาเฉพาะ Alien Worlds**

### 👽 **Alien Worlds Game Issues**

**Ban / Cooldown Issues:**
```
🚫 อาการ: โดน temporary mining ban
📋 สาเหตุ: 
  ├── Mining ถี่เกินไป
  ├── Pattern เป็นระเบียบเกินไป  
  ├── ใช้ IP address เดียวกันหลาย account
  └── มี Bot detection

✅ วิธีแก้ไข:
  ├── เพิ่ม delay ระหว่างการขุด (30+ นาที)
  ├── เพิ่มความสุ่มในการขุด (random delay)
  ├── ใช้ IP address ต่างกันสำหรับ account ต่างๆ
  ├── หยุดขุดชั่วคราว 2-4 ชั่วโมง
  └── ปรับ mining pattern ให้ดูเป็นธรรมชาติ
```

**Land Pool Issues:**
```
🌍 อาการ: Land ไม่มี mining slot
📋 สาเหตุ:
  ├── Land pool เต็ม
  ├── Land ถูก disable ชั่วคราว
  └── Land owner เปลี่ยนการตั้งค่า

✅ วิธีแก้ไข:
  ├── เปลี่ยนไป land อื่นใน planet เดียวกัน
  ├── ลอง planet อื่นๆ
  ├── ใช้ RANDOM tab ใน setLand modal
  └── รอ 10-30 นาทีแล้วลองใหม่
```

**NFT/Tools Issues:**
```
🛠️ อาการ: Tools หาย หรือ durability 0%
📋 สาเหตุ:
  ├── Tools ถูกใช้งานจนหมด durability
  ├── Tools ถูกส่งไป account อื่น
  └── Smart contract มีปัญหา

✅ วิธีแก้ไข:
  ├── เช็ค inventory ใน boxNFT modal
  ├── ซื้อ tools ใหม่จาก marketplace
  ├── ยืม tools จาก account อื่นๆ
  └── ใช้ shared tools ถ้ามี
```

---

## 📊 **การดูแลระบบประจำวัน**

### 🔍 **การตรวจสอบสุขภาพระบบ**

**รายวัน (5 นาทีต่อวัน):**
```
📊 เช็คสถิติ:
├── คลิก "EXPAND ALL HISTORY" ดูภาพรวม
├── เช็ค Success Rate > 90%
├── เช็ค TLM earnings ต่อวัน
└── เช็ค account ที่หยุดทำงาน

⚡ เช็ครัพยากร:
├── CPU/NET/RAM ทุก account > 20%
├── WAX balance สำหรับ transaction fee
└── Tools durability > 10%

🔄 เช็ค Configuration:
├── Mining delay setting เหมาะสม
├── Land selection ยังมีประสิทธิภาพ
└── การตั้งค่า auto-tasks ทำงานปกติ
```

**รายสัปดาห์:**
```
📈 วิเคราะห์ประสิทธิภาพ:
├── เปรียบเทียบ TLM/day กับสัปดาห์ก่อน
├── หา account ที่ performance ลดลง
├── วิเคราะห์ cost vs earning (ROI)
└── ปรับแต่ง strategy ถ้าจำเป็น

🛠️ บำรุงรักษา:
├── ล้าง browser cache
├── อัปเดต tools ใหม่
├── เปลี่ยน land ถ้าประสิทธิภาพลด
└── backup การตั้งค่าที่สำคัญ
```

### 📝 **การสร้าง Log สำหรับ Debug**

เมื่อพบปัญหาที่แก้ไขไม่ได้ ให้เก็บข้อมูลเหล่านี้:

```
🖥️ ข้อมูล System:
├── Browser name และ version
├── Operating System
├── Screen resolution
├── Internet connection speed
└── วันเวลาที่เกิดปัญหา

⚙️ ข้อมูล Configuration:
├── Account name ที่มีปัญหา
├── การตั้งค่า modal ที่เกี่ยวข้อง
├── ขั้นตอนที่ทำก่อนเกิดปัญหา
└── Error message ที่ได้รับ (ถ้ามี)

📸 ข้อมูล Visual:
├── Screenshot หน้าจอขณะเกิดปัญหา
├── Console error (F12 → Console)
├── Network tab (F12 → Network)
└── Video recording ถ้าเป็นปัญหาที่เกิดขึ้นซ้ำ
```

---

## 📞 **การขอความช่วยเหลือ**

### 🔧 **Self-Service (แนะนำ)**

```
1. 📖 อ่าน HOW TO Modal ใน AWCLOUD CPanel
2. 🔍 ค้นหาปัญหาในคู่มือนี้
3. 🔄 ลองขั้นตอนแก้ไขพื้นฐาน (รีเฟรช, ล้าง cache)
4. 🎮 ทดสอบใน browser อื่น
5. ⏱️ รอ 10-30 นาทีแล้วลองใหม่
```

### 🤝 **Community Support**

```
💬 Discord/Telegram Groups:
├── แชร์ screenshot และ error message
├── ระบุ browser และ OS ที่ใช้
├── อธิบายขั้นตอนที่ทำก่อนเกิดปัญหา
└── อดทนรอผู้ช่วย อาสาสมัครตอบ

🌐 WAX Community:
├── wax.io community forums
├── Reddit r/WAX_io
└── Alien Worlds Discord
```

### 📧 **Premium Support**

สำหรับ Premium subscribers:
```
📬 เมื่อติดต่อ Support:
├── ใส่ account name ใน subject
├── แนบ screenshot ของปัญหา
├── ระบุขั้นตอนการทำงานที่นำไปสู่ปัญหา
├── ระบุวิธีแก้ไขที่ลองแล้ว
└── ระบุระดับความเร่งด่วน (normal/urgent)

⏱️ Response Time:
├── Normal Issues: 24-48 hours
├── Urgent Issues: 4-8 hours
├── Critical Issues: 1-2 hours
└── Emergency: <1 hour (สำหรับปัญหาที่ส่งผลต่อรายได้มาก)
```

---

## ✅ **Checklist การตรวจสอบก่อนขอความช่วยเหลือ**

ก่อนติดต่อ support โปรดตรวจสอบสิ่งเหล่านี้:

```
□ รีเฟรชหน้าเว็บแล้ว
□ ล้าง browser cache แล้ว  
□ ปิด ad blocker ชั่วคราวแล้ว
□ ลอง browser อื่นแล้ว
□ เช็ค internet connection แล้ว
□ เช็ค WAX blockchain status แล้ว
□ อ่านคู่มือนี้แล้วไม่พบคำตอบ
□ เตรียม screenshot และ error message แล้ว
□ เตรียมข้อมูล system และ configuration แล้ว
```

หากครบทุกข้อแล้วยังแก้ไขไม่ได้ แสดงว่าเป็นปัญหาที่ต้องการความช่วยเหลือจาก expert 

{% hint style="success" %}
**💡 เคล็ดลับ:** ปัญหา 80% สามารถแก้ไขได้ด้วยการรีเฟรชหน้าและล้าง cache อย่าลืมลองวิธีง่ายๆ ก่อนเสมอ!
{% endhint %}