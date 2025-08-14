# 💸 TRANSFER WAX Modal (transferWax) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ TRANSFER WAX Modal** - ส่ง Token ระหว่าง Account แบบปลอดภัย พร้อม 2 tabs สำหรับการโอนและการตั้งเวลาอัตโนมัติ
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์
- **[Allocate Wax Modal](allocate-wax-modal.md)** - การกระจาย WAX หลาย Account

## 📖 ภาพรวม TRANSFER WAX Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** คลิกปุ่ม **TRANSFER** ในแถว account ที่ต้องการ

### 🧭 **โครงสร้าง Modal**
TRANSFER WAX Modal ประกอบด้วย **2 Tabs** หลัก:

1. **MAIN** - การโอน Token แบบทันที
2. **TASK** - การตั้งค่าโอน Token อัตโนมัติ

---

## 📋 รายละเอียดแต่ละ Tab

### 1️⃣ **Tab 1: MAIN (transfer-main)**

#### **🎯 หน้าที่หลัก**
- **ส่ง WAX, TLM ไปยัง account อื่น**
- **รองรับการโอนแบบทันทีและปลอดภัย**

#### **📋 วิธีใช้งาน Step-by-Step**
1. **เลือกประเภท Token:** เลือก WAX หรือ TLM
2. **ใส่จำนวน:** ระบุจำนวนที่ต้องการส่ง
3. **ใส่ชื่อ Account:** ระบุ account ปลายทาง
4. **เขียน Memo:** เขียน memo (ถ้าต้องการ)
5. **ยืนยัน:** คลิก "Transfer" เพื่อส่ง

### **💎 รายละเอียดการใช้งาน**

#### **🪙 เลือกประเภท Token**
- **WAX**: สกุลเงินหลักของ WAX blockchain
- **TLM (Trilium)**: token รางวัลจาก Alien Worlds

#### **🔢 ระบุจำนวน Token**
- ใส่จำนวนที่ต้องการโอน (เช่น 10.0000)
- ระบบจะแสดงยอดคงเหลือปัจจุบัน  
- ตรวจสอบให้แน่ใจว่าพอสำหรับค่าธรรมเนียม

#### **🎯 ระบุผู้รับ**
- ใส่ WAX account name ของผู้รับ
- **⚠️ สำคัญ:** ตรวจสอบความถูกต้องอย่างละเอียด การโอนผิดไม่สามารถยกเลิกได้
- สามารถใส่ account ของตัวเองได้

#### **📝 Memo (ข้อความ)**
- ใส่ข้อความแนบ (ไม่บังคับ)
- เหมาะสำหรับการระบุวัตถุประสงค์  
- มีประโยชน์เมื่อโอนไปยัง exchange

**ตัวอย่างการโอน:**
```
Token: WAX
Amount: 5.0000  
To: yourfriend.wam
Memo: Payment for mining tools
```

---

### 2️⃣ **Tab 2: TASK (transfer-task)**

#### **🎯 หน้าที่หลัก**
- **ตั้งค่าการส่ง token อัตโนมัติ**
- **สร้างตารางเวลาการโอนประจำ**

#### **📋 วิธีใช้งาน**
1. **กำหนดเงื่อนไข:** ตั้งเงื่อนไขการส่ง (เช่น เมื่อ balance > 100 WAX)
2. **ตั้งเวลา:** ตั้งเวลาการส่งประจำ
3. **กำหนดจำนวน:** กำหนดจำนวนที่ส่งแต่ละครั้ง

#### **⚙️ ตัวเลือกการตั้งค่า**
```
Trigger Conditions:
✓ Balance threshold (เมื่อยอดเกินจำนวนที่กำหนด)
✓ Time-based (ตามเวลาที่กำหนด)
✓ Daily/Weekly schedules (รายวัน/รายสัปดาห์)

Transfer Settings:
✓ Fixed amount (จำนวนคงที่)
✓ Percentage-based (เปอร์เซ็นต์ของยอดรวม)
✓ Keep minimum balance (เก็บยอดขั้นต่ำไว้)
```

---

## ⚠️ ข้อควรระวังในการโอน

### **🔒 ความปลอดภัย**

#### **✅ สิ่งที่ต้องทำ:**
- **ตรวจสอบ account name 2-3 ครั้ง** - การโอนผิดไม่สามารถยกเลิกได้
- **เก็บ private key ให้ปลอดภัย** - ห้ามแชร์ให้ใครฟัง
- **ใช้ secure network** - หลีกเลี่ยง public WiFi
- **ทดสอบด้วยจำนวนเล็ก** - เมื่อโอนไปยัง account ใหม่

#### **❌ สิ่งที่ไม่ควรทำ:**
- **อย่าแชร์ private keys** ให้ใครในสถานการณ์ใดๆ
- **อย่าโอนจำนวนใหญ่** โดยไม่ได้ทดสอบก่อน
- **อย่าใช้ public computer** สำหรับการโอน
- **อย่าเก็บ account info** ในที่ไม่ปลอดภัย

### **💰 การจัดการเงิน**

#### **📊 Best Practices:**
- **เก็บ WAX สำหรับค่าธรรมเนียม** - อย่างน้อย 0.1 WAX
- **ตรวจสอบยอดคงเหลือ** - ก่อนทำการโอน
- **โอนทีละน้อยก่อน** - เมื่อโอนไปยัง account ใหม่
- **ติดตาม transaction history** - เพื่อตรวจสอบการโอน

#### **🔍 การตรวจสอบ Transaction:**
```
Transaction Details ที่ต้องตรวจสอบ:
✓ Transaction ID (TxID)
✓ Block number
✓ Timestamp
✓ Amount and token type
✓ From/To accounts
✓ Memo content
```

---

## 🚀 เคล็ดลับการใช้งานขั้นสูง

### **⚡ Automation Strategies**

#### **🔄 Auto-Distribution Setup:**
```
สำหรับ Mining Operations:
1. Master Account → Daily distribution
2. Set threshold: 50 WAX
3. Distribute to: Mining accounts
4. Keep minimum: 10 WAX
5. Schedule: Every 24 hours
```

#### **💼 Business Account Management:**
```
สำหรับ Business Users:
1. Revenue Account → Savings transfer
2. Set percentage: 30% of daily income
3. Transfer to: Cold storage account
4. Frequency: Weekly
5. Backup: Manual override available
```

### **📊 Transaction Optimization**

#### **⏰ Best Times for Transfers:**
- **เช้า (06:00-10:00)**: Network congestion ต่ำ
- **กลางวัน (12:00-14:00)**: Activity ปกติ
- **หลีกเลี่ยง**: เวลา peak hours (18:00-22:00)

#### **💡 Cost Optimization:**
- **Batch transfers**: รวมการโอนหลายรายการ
- **Timing**: เลือกเวลา network fees ต่ำ
- **Planning**: วางแผนการโอนล่วงหน้า

---

## 🔧 การแก้ไขปัญหาที่พบบ่อย

### **❌ ปัญหาการโอนที่พบบ่อย**

#### **🚫 Transaction Failed**
- **สาเหตุ:** CPU/NET หมด, WAX ไม่พอสำหรับค่าธรรมเนียม
- **วิธีแก้:** 
  - ตรวจสอบ resources (CPU/NET)
  - เติม WAX สำหรับค่าธรรมเนียม
  - ลองอีกครั้งหลังจากรอ resources regenerate

#### **⏳ Transaction Pending นาน**
- **สาเหตุ:** Network congestion
- **วิธีแก้:**
  - รอให้ network congestion ลดลง
  - ตรวจสอบ transaction status บน blockchain explorer
  - ถ้าไม่ผ่านใน 10 นาที ให้ลองส่งใหม่

#### **🔍 Account ไม่พบ**
- **สาเหตุ:** Account name ผิด หรือ account ไม่มีอยู่จริง
- **วิธีแก้:**
  - ตรวจสอบการสะกด account name
  - ตรวจสอบว่า account มีอยู่จริงบน blockchain
  - ลองค้นหาใน WAX explorer

#### **💸 จำนวนเงินผิดเพี้ยน**
- **สาเหตุ:** ใส่ decimal ผิด หรือ precision ไม่ถูกต้อง
- **วิธีแก้:**
  - WAX ใช้ 8 decimal places (เช่น 10.00000000)
  - TLM ใช้ 4 decimal places (เช่น 100.0000)
  - ตรวจสอบ format ให้ถูกต้อง

### **🛠️ Advanced Troubleshooting**

#### **🔧 Debug Steps:**
1. **ตรวจสอบ Network Connection**
2. **Verify Account Permissions**
3. **Check Resource Availability**
4. **Monitor Blockchain Status**
5. **Review Transaction History**

---

## 📈 การติดตาม Performance

### **📊 KPIs ที่สำคัญ**

#### **💰 Financial Metrics:**
- **Total Transfer Volume** - ปริมาณการโอนรวม
- **Average Transfer Size** - ขนาดการโอนเฉลี่ย
- **Success Rate** - อัตราสำเร็จของการโอน
- **Cost Efficiency** - ประสิทธิภาพค่าธรรมเนียม

#### **⚡ Performance Metrics:**
- **Transaction Speed** - ความเร็วในการประมวลผล
- **Network Utilization** - การใช้งาน network resources
- **Automation Effectiveness** - ประสิทธิภาพของ automation
- **Error Rate** - อัตราการเกิดข้อผิดพลาด

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Modal อื่นๆ**
- **[Allocate Wax Modal](allocate-wax-modal.md)** - การกระจาย WAX หลาย Account
- **[Stake Wax Modal](stake-wax-modal.md)** - การจัดการทรัพยากร
- **[Swap TLM Modal](swap-tlm-modal.md)** - การแลกเปลี่ยน Token

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป
- **[Dashboard Guide](dashboard-guide.md)** - คู่มือใช้งาน Dashboard

### **🌐 External Resources**
- **[WAX Explorer](https://waxblock.io/)** - ตรวจสอบ transaction status
- **[WAX Cloud Wallet](https://all-access.wax.io/)** - การจัดการ account

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** ใช้ tab TASK สำหรับการจัดการ token แบบอัตโนมัติ และเก็บ WAX สำรองไว้สำหรับค่าธรรมเนียมเสมอ ความปลอดภัยคือสิ่งสำคัญที่สุดในการโอน Token
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง