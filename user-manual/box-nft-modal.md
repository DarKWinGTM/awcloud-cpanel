# 🛠️ BOX NFT Modal (boxNFT) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ BOX NFT Modal** - จัดการ NFT และ Mining Tools แบบครบถ้วน พร้อม 7 tabs สำหรับการใช้งานที่หลากหลาย
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์
- **[Set Land Modal](set-land-modal.md)** - การเลือกพื้นที่การขุด

## 📖 ภาพรวม BOX NFT Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** คลิกปุ่ม **TOOLS** ในแถว account ที่ต้องการ

### 🧭 **โครงสร้าง Modal**
BOX NFT Modal ประกอบด้วย **7 Tabs** ที่แต่ละ tab มีหน้าที่เฉพาะตัว:

1. **BOX NFT** - จัดการ Mining Tools และ NFT Inventory
2. **SEND NFT** - ส่ง NFT ระหว่าง Account
3. **CLAIM NFT** - เคลม NFT ที่ได้รับ
4. **BACK TOKEN** - แปลง NFT กลับเป็น Token
5. **CREATE LINK** - สร้างลิงก์แชร์ NFT
6. **CLAIM LINK** - รับ NFT จากลิงก์
7. **BURN NFT** - ทำลาย NFT เพื่อรับ Token

---

## 📋 รายละเอียดแต่ละ Tab

### 1️⃣ **Tab 1: BOX NFT (set-tool)**

#### **🎯 หน้าที่หลัก**
- **จัดการ NFT inventory และ mining tools**
- **เลือกและตั้งค่าเครื่องมือสำหรับการขุด**
- **ตรวจสอบสถานะและคุณภาพของ NFT**

#### **⚙️ ฟังก์ชั่นหลัก**
- **SET TOOL** - เลือกเครื่องมือสำหรับขุด
- **SET TOOLS** - ตั้งค่าเครื่องมือสำหรับ account เดียว
- **SET TOOLS ALL** - ตั้งค่าเครื่องมือให้ทุก account
- **ดู Durability** - ตรวจสอบความทนทานของเครื่องมือ
- **ดู Rarity** - ตรวจสอบระดับความหายากของ NFT

#### **📋 วิธีใช้งาน Step-by-Step**
1. **เลือก Tools:** เลือก tools ที่ต้องการใช้ขุด
2. **ตั้งค่า:** คลิก "Set Tools" เพื่อนำไปใช้งาน
3. **ตรวจสอบ:** ตรวจสอบ durability ของ tools
4. **ใช้ทั่วไป:** ใช้ "SET TOOLS ALL" เพื่อใช้เครื่องมือเดียวกันกับทุก account

💡 **เคล็ดลับ:** เริ่มจาก tab นี้เพื่อดู inventory ก่อน แล้วค่อยใช้ tabs อื่น

---

### 2️⃣ **Tab 2: SEND NFT (send-nft) - ระบบส่ง NFT ขั้นสูง**

#### **🎯 หน้าที่หลัก**
- **ส่ง NFT ระหว่าง account พร้อมหลาย send modes**
- **Safe Transfer methods สำหรับความปลอดภัย**
- **จัดสรร NFT ให้หลาย account พร้อมกัน**
- **รองรับ Back Token operations**

#### **🔄 Send Modes ที่รองรับ**

##### **🚀 Basic Transfer Modes**
```
None - ไม่เลือก mode (ส่งแบบปกติ)
All In Bags - ส่งทุกอย่างใน bags
All Account Bags - ส่ง bags ทั้ง account
All In Bag Unused Tools - ส่งเครื่องมือที่ไม่ได้ใช้ใน bag
All Account Bags Unused Tools - ส่งเครื่องมือที่ไม่ได้ใช้ทั้ง account
```

##### **🛡️ Safe Transfer Methods**
```
Safe Transfer, Buy Offer vIRL method - การส่งแบบปลอดภัยผ่าน vIRL
Safe Transfer, Create Dummy method - สร้าง dummy transaction เพื่อความปลอดภัย
```

##### **💰 Back Token Options**
```
Back Token 10 WAX - แปลง NFT กลับเป็น 10 WAX
Back Token 25 WAX - แปลง NFT กลับเป็น 25 WAX  
Back Token 50 WAX - แปลง NFT กลับเป็น 50 WAX
Back Token 80 WAX - แปลง NFT กลับเป็น 80 WAX
Back Token 100 WAX - แปลง NFT กลับเป็น 100 WAX
Back Token 150 WAX - แปลง NFT กลับเป็น 150 WAX
Back Token 200 WAX - แปลง NFT กลับเป็น 200 WAX
```

#### **📋 วิธีใช้งาน Step-by-Step**

##### **🔧 การใช้งาน Basic Transfer:**
1. **เลือก Send Mode:** เลือกจาก dropdown menu
2. **เลือก NFT:** เลือก NFT ที่ต้องการส่ง (หรือจะส่งตาม mode ที่เลือก)
3. **ระบุปลายทาง:** ใส่ชื่อ account ปลายทาง (เช่น targetaccount.wam)
4. **เขียน Memo:** เขียน memo หากจำเป็น
5. **ยืนยัน:** คลิก "SEND NFT" เพื่อยืนยันการส่ง

##### **🛡️ การใช้งาน Safe Transfer:**
1. **เลือก Safe Mode:** เลือก vIRL method หรือ Dummy method
2. **ตั้งค่าความปลอดภัย:** ระบบจะสร้าง secure transaction
3. **ตรวจสอบ:** ยืนยันรายละเอียดก่อน execute
4. **Execute:** ดำเนินการผ่านระบบ safe transfer

##### **💰 การใช้งาน Back Token:**
1. **เลือก Back Token Amount:** เลือกจำนวน WAX ที่ต้องการ
2. **เลือก NFT:** เลือก NFT ที่จะแปลงกลับเป็น WAX
3. **ยืนยันมูลค่า:** ตรวจสอบว่าคุ้มค่าหรือไม่
4. **Execute:** ดำเนินการแปลง NFT เป็น WAX

#### **⚠️ ข้อควรระวังสำคัญ**
- **ตรวจสอบ Send Mode:** แต่ละ mode มีผลกระทบต่างกัน - อ่านให้เข้าใจก่อนใช้
- **Safe Transfer:** ใช้เมื่อส่ง NFT มีค่าหรือไม่แน่ใจเรื่องความปลอดภัย
- **Back Token Operations:** การแปลง NFT เป็น WAX ไม่สามารถยกเลิกได้
- **Account Name:** ให้ถูกต้องแน่นอน การส่งผิดไม่สามารถยกเลิกได้
- **ค่าธรรมเนียม:** ตรวจสอบให้แน่ใจว่ามี WAX เพียงพอสำหรับค่าธรรมเนียม
- **Memo สำคัญ:** ใส่ memo เมื่อส่งไป exchange หรือ service อื่น

---

### 3️⃣ **Tab 3: CLAIM NFT (claim-nft)**

#### **🎯 หน้าที่หลัก**
- **เคลม NFT ที่ได้รับ**
- **ตรวจสอบ NFT ที่รอการเคลม**

#### **📋 วิธีใช้งาน**
1. **ตรวจสอบ:** ดู NFT ที่รอเคลม
2. **เคลม:** คลิก "Claim" NFT ที่ต้องการ

#### **💡 เคล็ดลับ**
- เคลม NFT ทันทีเพื่อป้องกันการสูญหาย
- ตรวจสอบ RAM เพียงพอก่อนเคลม NFT

---

### 4️⃣ **Tab 4: BACK TOKEN (back-token)**

#### **🎯 หน้าที่หลัก**
- **คืน token จาก NFT**
- **แปลง NFT ที่ไม่ต้องการกลับเป็น token**

#### **📋 วิธีใช้งาน**
1. **เลือก NFT:** เลือก NFT ที่ต้องการแปลงเป็น token
2. **แปลง:** คลิก "Convert" เพื่อได้รับ token

#### **⚠️ ข้อควรระวัง**
- การแปลง NFT กลับเป็น token **ไม่สามารถยกเลิกได้**
- ตรวจสอบมูลค่า NFT ก่อนตัดสินใจแปลง

---

### 5️⃣ **Tab 5: CREATE LINK (create-link)**

#### **🎯 หน้าที่หลัก**
- **สร้างลิงก์แชร์ NFT**
- **แชร์ NFT ให้คนอื่นเคลม**

#### **📋 วิธีใช้งาน**
1. **เลือก NFT:** เลือก NFT ที่ต้องการแชร์
2. **สร้างลิงก์:** สร้างลิงก์ที่คนอื่นสามารถเคลมได้

#### **💡 เคล็ดลับ**
- เก็บลิงก์ไว้อย่างปลอดภัย
- ส่งลิงก์ให้เฉพาะคนที่เชื่อถือได้

---

### 6️⃣ **Tab 6: CLAIM LINK (claim-link)**

#### **🎯 หน้าที่หลัก**
- **รับ NFT จากลิงก์**
- **เคลม NFT ที่คนอื่นแชร์ให้**

#### **📋 วิธีใช้งาน**
1. **วางลิงก์:** วางลิงก์ที่ได้รับ
2. **เคลม:** คลิก "Claim" เพื่อรับ NFT

#### **⚠️ ข้อควรระวัง**
- ตรวจสอบลิงก์ให้แน่ใจว่าเป็นของจริง
- มี RAM เพียงพอสำหรับรับ NFT

---

### 7️⃣ **Tab 7: BURN NFT (burn-nft)**

#### **🎯 หน้าที่หลัก**
- **ทำลาย NFT เพื่อรับ token**
- **แปลง NFT ที่ไม่ใช้เป็นประโยชน์**

#### **📋 วิธีใช้งาน**
1. **เลือก NFT:** เลือก NFT ที่ต้องการทำลาย
2. **ยืนยัน:** ยืนยันการ burn เพื่อได้ token

#### **⚠️ ข้อควรระวัง**
- การ burn NFT **ไม่สามารถยกเลิกได้**
- ตรวจสอบมูลค่าและประโยชน์ก่อนตัดสินใจ

---

## 🎯 เคล็ดลับการใช้งาน BOX NFT Modal

### 🚀 **Best Practices**

#### **การจัดการ NFT อย่างมีประสิทธิภาพ:**
1. **ตรวจสอบ Inventory เป็นประจำ** - ใช้ tab BOX NFT เพื่อดูสถานะ NFT
2. **เลือก Tools ที่เหมาะสม** - พิจารณา durability และ efficiency
3. **แจกจ่าย NFT อย่างสมดุล** - ใช้ ALLOCATE NFT สำหรับหลาย account
4. **จัดการ NFT ที่ไม่ใช้** - ใช้ BACK TOKEN หรือ BURN สำหรับ NFT ที่ไม่ต้องการ

#### **การรักษาความปลอดภัย:**
1. **ตรวจสอบ Account Name 2-3 ครั้ง** ก่อนส่ง NFT
2. **เก็บ Link ไว้ปลอดภัย** เมื่อสร้าง CREATE LINK
3. **ตรวจสอบ RAM เพียงพอ** ก่อนรับ NFT
4. **Backup Account Information** เป็นประจำ

### ⚙️ **การแก้ไขปัญหาที่พบบ่อย**

#### **❌ NFT ไม่แสดง**
- **สาเหตุ:** Connection ขัดข้อง หรือ sync ล่าช้า
- **วิธีแก้:** รีเฟรชหน้า, ตรวจสอบ internet connection

#### **🚫 ส่ง NFT ไม่ได้**
- **สาเหตุ:** RAM ไม่พอ, ค่าธรรมเนียมไม่เพียงพอ
- **วิธีแก้:** เพิ่ม RAM, เติม WAX สำหรับค่าธรรมเนียม

#### **⏳ Transaction ล่าช้า**
- **สาเหตุ:** Network congestion
- **วิธีแก้:** รอสักครู่ หรือลองใหม่ในเวลาที่ network ไม่ค่อยหนาแน่น

#### **🔄 Tools ไม่ Update**
- **สาเหตุ:** Cache หรือ sync issue
- **วิธีแก้:** ใช้ "SET TOOLS ALL" อีกครั้ง หรือรีเฟรช

### 📊 **การติดตาม Performance**

#### **KPIs สำคัญที่ควรติดตาม:**
- **Tool Durability** - ความทนทานเครื่องมือ
- **NFT Distribution** - การกระจาย NFT ระหว่าง accounts
- **Transaction Success Rate** - อัตราสำเร็จของการส่ง NFT
- **Inventory Utilization** - การใช้ประโยชน์จาก NFT inventory

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Modal อื่นๆ**
- **[Set Land Modal](set-land-modal.md)** - การเลือกพื้นที่การขุด
- **[Transfer Wax Modal](transfer-wax-modal.md)** - การโอน Token
- **[Stake Wax Modal](stake-wax-modal.md)** - การจัดการทรัพยากร

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป
- **[Dashboard Guide](dashboard-guide.md)** - คู่มือใช้งาน Dashboard

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** BOX NFT Modal เป็น Modal ที่สำคัญที่สุดสำหรับการจัดการ Mining Tools ควรเรียนรู้การใช้งานให้เชี่ยวชาญเพื่อประสิทธิภาพการขุดที่ดีที่สุด
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง