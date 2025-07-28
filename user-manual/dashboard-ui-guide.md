# 🖥️ คู่มือการใช้งาน Dashboard หลัก

## 🎯 ภาพรวมของ Dashboard

AWCLOUD CPanel Dashboard เป็นหน้าจอหลักที่ใช้ในการจัดการ WAX accounts ทั้งหมด ประกอบด้วย 3 ส่วนหลัก:

### 📊 **1. ตาราง Account Management (ส่วนซ้าย)**
แสดงรายการ accounts ทั้งหมดในรูปแบบตาราง พร้อมข้อมูลสถานะแบบเรียลไทม์

### 🎛️ **2. Control Panel (ส่วนกลาง)**  
ปุ่มควบคุมหลักสำหรับการจัดการระบบ เช่น START, PAUSE, RENEW, RESET

### 🛠️ **3. Tools & NFT Panel (ส่วนขวา)**
แสดง NFT tools และการจัดการ inventory

---

## 📋 ตาราง Account Management

### 🏷️ คอลัมน์ในตาราง:

| คอลัมน์ | คำอธิบาย | สถานะที่แสดง |
|---------|----------|---------------|
| **ACCOUNT** | ชื่อ WAX account | ชื่อเต็มของ account |
| **SERVER STATUS** | สถานะเซิร์ฟเวอร์ | Online/Offline/Error |
| **MINEN** | สถานะการขุด | Active/Inactive/Paused |
| **POOL RATE** | อัตรา Pool | เปอร์เซ็นต์ประสิทธิภาพ |
| **TLM/NFT** | ยอด TLM และ NFT | จำนวนปัจจุบัน |
| **LAND ID** | รหัส Land ปัจจุบัน | เลขรหัส Land |
| **SETUP LAND** | ปุ่มตั้งค่า Land | ปุ่มสีน้ำเงิน "SETUP" |
| **TLM CPU** | ข้อมูล CPU และ TLM | Usage และยอดคงเหลือ |
| **TOOLS** | จัดการ NFT Tools | ปุ่มเปิด modal จัดการ |

### 🎨 สีและสถานะของแถว:
- **แถวปกติ**: พื้นหลังเข้ม
- **แถว Active**: มีการเน้นสีเพิ่มเติม
- **ข้อมูลสำคัญ**: ใช้สีเน้นตามประเภทข้อมูล

---

## 🎛️ Master Control Panel

### 🔑 **MASTER KEY Section**
**ตำแหน่ง**: ด้านบนของ control panel
- แสดง Master Key ที่ใช้งานปัจจุบัน
- มีปุ่ม **ADD** และ **DEL** สำหรับจัดการ key

### 💳 **WAX WALLET Section**  
**ตำแหน่ง**: ใต้ Master Key
- ช่อง **PRIVATE KEY** สำหรับใส่ private key
- ปุ่ม **ADD** สีน้ำเงิน เพื่อเพิ่ม wallet
- ตัวเลือก **WAXID** สำหรับระบุ account

### ⚡ **Main Control Buttons**
**ตำแหน่ง**: กลาง control panel

#### ปุ่มควบคุมหลัก (แถวบน):
- **🟦 START** - เริ่มการทำงานของระบบ
- **🟨 PAUSE** - หยุดชั่วคราว
- **🟦 RENEW** - ต่ออายุ/รีเฟรช
- **🟥 RESET** - รีเซ็ตระบบ
- **🟦 FULL MONITOR** - เปิดการติดตามเต็มรูปแบบ

#### ปุ่มจัดการ Account (แถวกลาง):
- **🟨 MOV SW ALL** - ย้ายทั้งหมด
- **🟨 JUM SW ALL** - กระโดดทั้งหมด
- **🟥 NO PAUSE ALL** - หยุดการหยุดทั้งหมด
- **🟦 NO START ALL** - หยุดการเริ่มทั้หมด
- **🟦 MOV ON ALL** - เปิดการเคลื่อนไหวทั้งหมด
- **🟨 MOV NO ALL** - ปิดการเคลื่อนไหวทั้งหมด
- **🟥 JUM ON ALL** - เปิดการกระโดดทั้งหมด
- **🟥 JUM NO ALL** - ปิดการกระโดดทั้งหมด

#### ปุ่มการตั้งค่า (แถวล่าง):
- **🟩 COST MINER ON ALL** - เปิดการคำนวณต้นทุนทั้งหมด
- **🟨 MAKE TRUST ON ALL** - ตั้งค่าความไว้วางใจทั้งหมด
- **🟥 DISABLE MAKE TRUST TO ALL** - ปิดความไว้วางใจทั้งหมด
- **🟩 RATE SMART TO ALL** - เปิด rate smart ทั้งหมด
- **🟨 BURST RATE TO ALL** - ตั้งค่า burst rate ทั้งหมด
- **🟧 FORCE RATE TO ALL** - บังคับ rate ทั้งหมด

---

## 🔧 การใช้งานปุ่มควบคุม

### 🚀 **การเริ่มใช้งานครั้งแรก:**

1. **เพิ่ม Master Key**
   - ใส่ Master Key ในช่อง MASTER KEY
   - คลิก **ADD**

2. **เพิ่ม WAX Wallet**
   - ใส่ Private Key ในช่อง PRIVATE KEY  
   - ระบุ WAXID
   - คลิก **ADD**

3. **เริ่มระบบ**
   - คลิก **🟦 START** เพื่อเริ่มการทำงาน
   - ระบบจะเริ่มการขุดอัตโนมัติ

### ⚡ **การควบคุมระบบ:**

#### หยุดและเริ่มการทำงาน:
- **🟨 PAUSE** - หยุดการทำงานชั่วคราว
- **🟦 START** - เริ่มการทำงานอีกครั้ง
- **🟥 RESET** - รีเซ็ตระบบทั้งหมด

#### การจัดการทั้งหมด:
- **MOV/JUM SW ALL** - สลับการตั้งค่าทั้งหมด
- **ON/NO ALL** - เปิด/ปิดฟีเจอร์ทั้งหมด

### 🎯 **การใช้งานตาม Scenario:**

#### 🔰 **Beginner Setup:**
1. เพิ่ม Master Key และ Wallet
2. คลิก **START**
3. ใช้ **FULL MONITOR** เพื่อดูสถานะ
4. ปรับแต่งผ่านปุ่ม individual ในตาราง

#### 🚀 **Advanced Management:**
1. ใช้ปุ่ม **ALL** เพื่อจัดการหลาย account
2. ตั้งค่า **RATE SMART TO ALL** สำหรับ optimization
3. ใช้ **COST MINER ON ALL** เพื่อติดตามต้นทุน
4. ใช้ **FORCE RATE TO ALL** เมื่อต้องการควบคุมเต็มรูปแบบ

---

## 🛠️ MANAGE PANEL

### 📊 **Mining Management:**
- **🟨 COPY ALL LAST MINE** - คัดลอกการขุดล่าสุดทั้งหมด
- **🟨 CLAIM PENDING TLM ALL ACCOUNT** - เคลม TLM ที่ค้างทั้งหมด
- **🟨 CLAIM AND VOTE ALL ACCOUNT** - เคลมและโหวตทั้งหมด

### 📈 **Reporting:**
- **🟦 ACTION REPORT** - รายงานการดำเนินการ
- **🟦 ACTION BATCHS** - การดำเนินการแบบกลุ่ม

### 👥 **Team Management:**
- **🟦 TEAM POOL CONFIG** - ตั้งค่า team pool

### 💳 **Wallet Creation:**
- **🟦 CREATE ANCHOR WALLET** - สร้าง Anchor Wallet
- **🟦 CREATE WAX CLOUD WALLET** - สร้าง WAX Cloud Wallet  
- **🟨 CREATE WOMBAT WALLET** - สร้าง Wombat Wallet

### ⚙️ **Advanced Setup:**
- **🟦 SETUP SOFT PRIVATE KEY** - ตั้งค่า software private key
- **🟦 SETUP WOMBAT PRIVATE KEY** - ตั้งค่า Wombat private key

### 🔍 **Account Management:**
- **🟩 CHECK ACCOUNT FSLAG** - ตรวจสอบสถานะ account
- **🟩 Add Friend** - เพิ่มเพื่อน
- **🟧 HOW TO** - คำแนะนำการใช้งาน
- **🟦 Change Logs** - ดู change logs

---

## 💡 **เคล็ดลับการใช้งาน Dashboard**

### 🎯 **การติดตาม:**
- ดูสถานะใน **SERVER STATUS** เป็นประจำ
- ติดตาม **POOL RATE** เพื่อประสิทธิภาพ
- เช็ค **TLM/NFT** เพื่อดูผลตอบแทน

### ⚡ **การควบคุม:**
- ใช้ปุ่ม **ALL** สำหรับการจัดการหลาย account
- **PAUSE** ก่อน **RESET** เพื่อความปลอดภัย
- ใช้ **FULL MONITOR** เมื่อต้องการดูรายละเอียด

### 🔧 **การแก้ไขปัญหา:**
- หาก account ไม่ทำงาน ให้เช็ค **SERVER STATUS**
- ใช้ **RESET** เมื่อมีปัญหาการเชื่อมต่อ  
- ตรวจสอบ **TLM CPU** หากการขุดช้า

---

{% hint style="success" %}
**Dashboard นี้ออกแบบมาให้จัดการ accounts หลายตัวได้อย่างมีประสิทธิภาพ ใช้ปุ่ม ALL สำหรับการจัดการจำนวนมาก และปุ่ม individual สำหรับการปรับแต่งเฉพาะ**
{% endhint %}