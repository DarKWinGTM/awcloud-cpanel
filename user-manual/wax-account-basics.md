# 💼 ระบบจัดการ WAX Account

## การจัดการ Account ผ่าน AWCLOUD CPanel

AWCLOUD CPanel เป็นระบบจัดการ WAX Account สำหรับเกม Alien Worlds ที่ช่วยให้คุณติดตามและจัดการ account หลายๆ ตัวได้ในที่เดียว

## 🎯 ฟีเจอร์หลักของระบบ

### **📊 การติดตามและจัดการ**
- **👁️ Monitor หลาย Account**: ดูสถิติ account หลายๆ ตัวในหน้าเดียว
- **📈 สถิติ Real-time**: ติดตามข้อมูล CPU/NET/RAM แบบเรียลไทม์
- **🔍 การติดตามประวัติ**: ดูประวัติการทำงานของแต่ละ account
- **📱 Web Interface**: ใช้งานผ่านเว็บเบราว์เซอร์ ไม่ต้องติดตั้งอะไร

### **🛠️ การจัดการ NFT และ Tools**
- **⚒️ Set Tools**: ตั้งค่า Mining Tools สำหรับการขุด
- **📦 Send/Allocate NFT**: โอนและจัดสรร NFT ระหว่าง account
- **🏆 Redeem System**: แลกรางวัล NFT จากการขุด
- **💰 Market Integration**: ขาย NFT ใน AtomicMarket

### **🌍 การจัดการ Land**
- **🏞️ Set Land**: ตั้งค่า Land สำหรับการขุด
- **🎲 Random Land**: ใช้ Land แบบสุ่มสำหรับหลาย account
- **📍 Choose Land**: เลือก Land เฉพาะตาม Planet ต่างๆ
- **📋 Land Registration**: ลงทะเบียน Land ใหม่

### **🤖 ระบบ Auto Registration**
- **⚡ Auto Register Alien Worlds**: ลงทะเบียน account เข้าเกมอัตโนมัติ
- **📜 Agree Terms**: ยอมรับเงื่อนไขการใช้งานแบบอัตโนมัติ
- **🎮 Game Registration**: ลงทะเบียนใหม่หรือ account ที่ยังไม่ได้เข้าเกม
- **🔄 Bulk Registration**: ลงทะเบียนหลาย account พร้อมกัน

## 🖥️ การใช้งาน Web Interface

### **📱 หน้าจอหลัก (Monitor)**
- **Account Overview**: ดูภาพรวม WAX Account ทั้งหมด
- **CPU/NET/RAM Status**: ติดตามทรัพยากรแต่ละ account
- **History Tracking**: ดูประวัติการทำงานผ่าน iframe
- **Expand All**: แสดงข้อมูลของทุก account พร้อมกัน

### **🛠️ การจัดการ NFT**
**ขั้นตอนการตั้งค่า Tools:**
1. คลิกที่ปุ่ม "Set Tools" 
2. เลือก Mining Tools จาก inventory
3. คลิก "SET TOOLS" สำหรับ account เดียว
4. หรือคลิก "SET TOOLS ALL" สำหรับทุก account

**การส่ง NFT:**
1. เลือก NFT ที่ต้องการโอน
2. ใส่ Account ปลายทาง (xxxxx.wam)
3. เพิ่ม Memo หากต้องการ
4. คลิก "SEND NFT"

### **🌍 การตั้งค่า Land**
**การใช้ Land ID:**
1. ใส่ Land ID ในช่อง (เช่น 1099512959648)
2. คลิก "GET LAND" เพื่อดูข้อมูล Land
3. คลิก "SET LAND" เพื่อใช้ Land นั้น
4. หรือ "SET TO ALL" เพื่อใช้กับทุก account

## 📊 การดู Account Statistics

### **📈 ข้อมูลที่ติดตามได้**

**ข้อมูลแต่ละ Account:**
- **Account ID**: ชื่อ WAX account
- **CPU/NET/RAM**: ทรัพยากรปัจจุบันและการใช้งาน
- **Stake Information**: ข้อมูล staking และ resources
- **Mining History**: ประวัติการขุดผ่าน iframe

**การแสดงข้อมูล:**
- **Table View**: ดูข้อมูล account ในรูปแบบตาราง
- **Iframe Integration**: แต่ละ account มี iframe แสดงสถิติเฉพาะ
- **Real-time Updates**: ข้อมูล CPU/NET/RAM อัปเดตแบบเรียลไทม์

### **🔄 ฟีเจอร์ Expand All History**

**การใช้งาน:**
1. คลิกปุ่ม "Expand All History"
2. ระบบจะโหลดข้อมูลของทุก account
3. iframe จะแสดงสถิติการขุดของแต่ละ account
4. ดูประวัติและข้อมูลปัจจุบันพร้อมกัน

## 💸 การจัดการ Transfer

### **💰 การโอน WAX และ Token**

**Transfer หลัก:**
- **WAX Transfer**: โอน WAX ระหว่าง account
- **Token Transfer**: โอน token อื่นๆ ที่รองรับ
- **Memo Support**: เพิ่ม memo ในการโอน

**การใช้งาน:**
1. เลือก token ที่ต้องการโอน
2. ใส่จำนวนที่ต้องการ
3. ระบุ account ปลายทาง
4. เพิ่ม memo หากจำเป็น

## ⚠️ ข้อควรระวัง

### **🔐 ความปลอดภัย**
- ตรวจสอบ account ปลายทางให้ถูกต้องก่อนโอน
- เก็บ Private Key ให้ปลอดภัย
- ใช้เครือข่ายอินเทอร์เน็ตที่ปลอดภัย

### **💡 คำแนะนำ**
- ตรวจสอบ CPU/NET/RAM ก่อนทำ transaction
- เก็บ WAX สำรองสำหรับค่าธรรมเนียม
- ใช้ Expand All เพื่อดูภาพรวม account ทั้งหมด