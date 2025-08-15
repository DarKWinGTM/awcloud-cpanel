# ❓ HOW TO Modal - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ HOW TO Modal ครบถ้วน** - เนื้อหาการใช้งานแบบ Interactive พร้อมคู่มือขั้นตอนที่ครบถ้วนจากผู้เขียนระบบ
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

{% content-ref url="modal-guide-complete.md" %}
[modal-guide-complete.md](modal-guide-complete.md)
{% endcontent-ref %}

{% content-ref url="dashboard-guide.md" %}
[dashboard-guide.md](dashboard-guide.md)
{% endcontent-ref %}

## 📖 ภาพรวม HOW TO Modal

### 🎯 **การเข้าถึง**
**วิธีเปิด:** คลิกปุ่ม **❓ HOW TO** ที่มุมขวาบนของ Dashboard

### 🎯 **คุณสมบัติหลัก**
- **🎯 คู่มือการใช้งานแบบ Interactive** - เลือกหัวข้อที่ต้องการดูได้ทันที
- **📋 คู่มือขั้นตอนละเอียด** - เขียนโดยผู้พัฒนาระบบเอง
- **🌏 รองรับภาษาไทย + อังกฤษ** - เนื้อหาครบถ้วนทั้ง 2 ภาษา
- **🖼️ มีภาพประกอบ** - Screenshot และ diagram อธิบายขั้นตอน

### 🎛️ **การใช้งาน Modal**
1. **เลือกหัวข้อ** จาก dropdown menu
2. **อ่านคู่มือ** ที่แสดงในพื้นที่ด้านล่าง
3. **ทำตาม** ขั้นตอนที่ระบุไว้
4. **Cross-reference** ไปหัวข้ออื่นได้ผ่านลิงก์ใน modal


---

## 📚 เนื้อหาที่มีอยู่ใน HOW TO Modal

### 🔄 **Advanced Features** (ฟีเจอร์ขั้นสูง)

#### **📖 TEAM POOL MANUAL**
**เนื้อหา:** คู่มือการใช้งาน Team Pool System แบบละเอียดครบถ้วน
- การตั้งค่า LPOOL และ MPOOL
- การจัดการ Multi-Account Mining
- กลยุทธ์การกระจาย Assets
- การป้องกันและแก้ไขปัญหา

#### **⚡ BURST RATE, FORCE RATE, PUMPS RATE**
**เนื้อหา:** การใช้งานฟีเจอร์เร่งการขุดขั้นสูง
- **BURST RATE:** การขุดแบบระเบิด - เพิ่มความเร็วในช่วงเวลาสั้น
- **FORCE RATE:** บังคับความถี่การขุด - กำหนดช่วงเวลาขุดแน่นอน  
- **PUMPS RATE:** การปั๊มอัตราการขุด - เพิ่มประสิทธิภาพต่อเนื่อง
- ⚠️ **คำเตือน:** หากใช้ร่วมกับ MASTER KEY อาจทำให้เกิด CPU Limit

#### **💰 How to setup COST MINER for Master Key**
**เนื้อหา:** การตั้งค่า WAX Chain Power UP สำหรับ Master Key
- การ Power Up WAX สำหรับ CPU/NET
- การกำหนดกฎการ Power UP อัตโนมัติ
- การป้องกัน CPU Limit
- การตั้งค่าสำหรับ Master Key Account

### 💼 **Account Management** (การจัดการบัญชี)

#### **🦫 How to create WOMBAT, And register Private Key (No Fees)**
**เนื้อหา:** วิธีสร้าง WOMBAT Wallet และการผูก Private Key
```
ขั้นตอนการสร้าง WOMBAT:
1. https://generator.email/ (หา Domain สำหรับสมัคร Twitter)
2. สมัคร Twitter Account ด้วย Email ชั่วคราว
3. เข้า WOMBAT Website และสมัครด้วย Twitter
4. สร้าง WAX Account ผ่าน WOMBAT
5. Export Private Key และเก็บไว้อย่างปลอดภัย
6. นำ Private Key มา Register ใน AWCLOUD CPanel

⚠️ หมายเหตุ: ต้องเก็บ PUBLIC KEY + PRIVATE KEY ทั้งหมดไว้เสมอ
```

### 💰 **Transactions & Tools** (การทำธุรกรรมและเครื่องมือ)

#### **🔒 How to use Safe Transfer WAX method Back Tokens**
**เนื้อหา:** วิธีการโอน WAX แบบปลอดภัยพร้อมกลไก Back Tokens
- การใช้งาน Safe Transfer Mode
- การตั้งค่า Back Token Protection
- ขั้นตอนการยืนยันธุรกรรม
- การแก้ไขเมื่อธุรกรรมขัดข้อง

#### **🛠️ Tools Shards Rank require information**
**เนื้อหา:** ข้อมูล Mining Tools และ Rank Requirements
- ตาราง Tools และ Mining Rate
- ข้อมูล Rarity และผลกระทบต่อการขุด
- การเลือก Tools ที่เหมาะสม
- การจัดการ Durability และ Repair


---

## 📋 **เนื้อหาขั้นสูงที่ถูก Comment ออก** (จะเปิดใช้งานในอนาคต)

### 🔄 **Advanced Mining Strategies**

#### **⛏️ How to setup TEAM MINE** (Coming Soon)
**วัตถุประสงค์:** ระบบที่ทำงานครอบการขุดปกติและโยกย้าย Asset อัตโนมัติ
- การขุด 24 ชั่วโมงไม่หยุด
- การสลับบัญชีอัตโนมัติเมื่อ CPU เต็ม
- การจัดการ Asset ตามเงื่อนไขที่กำหนด

#### **🏊 What is TEAM POOL, How it work** (Coming Soon)
**วัตถุประสงค์:** ระบบโยกย้าย Asset ไปตามเงื่อนไขที่กำหนด
- ย้าย Mining Tools สี ไปยังบัญชีที่มีเลเวลครบกำหนด
- จัดการ Asset Pool แบบอัตโนมัติ
- การป้องกันการสูญหาย Asset

### 💼 **Advanced Account Management** (Coming Soon)

#### **🌟 Create and manage new account [Part 1/2]** 
**วัตถุประสงค์:** สร้างบัญชีจาก Common สู่ของสี
- ขั้นตอนการเริ่มต้นขุดและเก็บเลเวล
- การนำ Common NFT เข้าบัญชีเพื่อเริ่มขุด
- การใช้งาน MAKE TRUST Mode

#### **🌟 Create and manage new account [Part 2/2]**
**วัตถุประสงค์:** นำของสีเข้ามาเริ่มขุดหลังเก็บเลเวล
- วิธีการส่งของผ่านกลไกตลาด
- การขายตามราคาจริงเพื่อความปลอดภัย
- การตั้งค่าบัญชีสำหรับ High-tier NFT

#### **⚙️ SETUP NEW MINER GUIDE** (Coming Soon)
**วัตถุประสงค์:** คู่มือตั้งค่า Miner ใหม่แบบละเอียด

#### **✨ Start mine with Shine Old flag Tool** (Coming Soon)  
**วัตถุประสงค์:** การเริ่มขุดด้วย Shine Tools ระดับสูง


---

## 🎯 **การใช้งาน HOW TO Modal อย่างมีประสิทธิภาพ**

### 📚 **สำหรับผู้เริ่มต้น**
1. **เริ่มจาก:** How to create WOMBAT Account
2. **ต่อด้วย:** Safe Transfer WAX method
3. **ศึกษา:** Tools Shards Rank information
4. **ขั้นสูง:** COST MINER setup

### 🚀 **สำหรับผู้ใช้ขั้นสูง**
1. **เรียนรู้:** TEAM POOL MANUAL
2. **ทดลอง:** BURST/FORCE/PUMPS RATE
3. **ปรับแต่ง:** Advanced Mining Strategies
4. **เพิ่มประสิทธิภาพ:** Multi-Account Management

### 💡 **เคล็ดลับการใช้งาน**
- **📖 อ่านทั้งหมด** ก่อนลงมือทำตามขั้นตอน
- **🔗 ใช้ Cross-reference** ระหว่างหัวข้อที่เกี่ยวข้อง
- **💾 บันทึกขั้นตอน** สำคัญเอาไว้อ้างอิง
- **⚠️ ระวังคำเตือน** ที่ระบุในแต่ละหัวข้อ


---

## 🚨 **ข้อควรระวังและคำแนะนำ**

### ⚠️ **Security Guidelines**
- **🔑 เก็บ Private Key อย่างปลอดภัย** - ไม่แบ่งปันใครเด็ดขาด
- **💾 Backup ข้อมูล** สำคัญก่อนทำการเปลี่ยนแปลง
- **🔍 ตรวจสอบ** ทุกขั้นตอนก่อนยืนยันธุรกรรม

### 💡 **Best Practices**
- **📋 ทำตามขั้นตอน** อย่างละเอียดและไม่ข้าม
- **⏱️ ใช้เวลา** ทำความเข้าใจก่อนลงมือ
- **🧪 ทดสอบ** ด้วยจำนวนเล็กก่อนใช้งานจริง
- **📞 ติดต่อ Support** หากมีข้อสงสัย

{% hint style="warning" %}
**⚠️ คำเตือนสำคัญ:** เนื้อหาใน HOW TO Modal เป็นคู่มือที่เขียนโดยผู้พัฒนาระบบ ควรอ่านและทำความเข้าใจอย่างละเอียดก่อนนำไปปฏิบัติ
{% endhint %}

{% hint style="info" %}
**💡 หมายเหตุ:** บางฟีเจอร์อาจยังไม่เปิดใช้งาน (แสดงเป็น Comment) และจะเปิดใช้งานในอนาคตตามการพัฒนาระบบ
{% endhint %}

**📝 อัปเดต:** 15 สิงหาคม 2568 - นำเนื้อหาจากระบบจริงมาใส่ GitBook ครบถ้วน