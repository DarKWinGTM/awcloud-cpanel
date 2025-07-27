# 💸 การโอน Token และจัดการ WAX Resources

## 📋 ภาพรวมการจัดการ Token และ Resources

AWCLOUD CPanel มีระบบจัดการการโอน Token (WAX, TLM) และการจัดการทรัพยากร WAX (CPU, NET, RAM) ที่ครบครันและใช้งานง่าย

## 💰 การโอน Token (WAX & TLM)

### 🎯 การเข้าถึงระบบโอน Token
1. ไปที่ Dashboard หลัก
2. เลือก account ที่ต้องการโอน token
3. คลิกปุ่ม **"TRANSFER"** ในคอลัมน์ CONTROL
4. หน้าต่าง Transfer จะเปิดขึ้น

### 📊 ส่วนประกอบของหน้า Transfer

#### 1. 💎 เลือกประเภท Token
- **WAX**: สกุลเงินหลักของ WAX blockchain
- **TLM (Trilium)**: token รางวัลจาก Alien Worlds

#### 2. 🔢 ระบุจำนวน Token
- ใส่จำนวนที่ต้องการโอน (เช่น 10.0000)
- ระบบจะแสดงยอดคงเหลือปัจจุบัน
- ตรวจสอบให้แน่ใจว่าพอสำหรับค่าธรรมเนียม

#### 3. 🎯 ระบุผู้รับ
- ใส่ WAX account name ของผู้รับ
- ตรวจสอบความถูกต้องอย่างละเอียด
- สามารถใส่ account ของตัวเองได้

#### 4. 📝 Memo (ข้อความ)
- ใส่ข้อความแนบ (ไม่บังคับ)
- เหมาะสำหรับการระบุวัตถุประสงค์
- มีประโยชน์เมื่อโอนไปยัง exchange

### ✅ ขั้นตอนการโอน Token

#### การโอนพื้นฐาน:
1. **เลือก Token**: WAX หรือ TLM
2. **ใส่จำนวน**: เช่น 5.0000
3. **ใส่ผู้รับ**: เช่น yourfriend.wam
4. **ใส่ Memo**: "Payment for services" (ถ้าต้องการ)
5. **คลิก TRANSFER**: ยืนยันการโอน
6. **รอ Confirmation**: รอระบบประมวลผล

### ⚠️ ข้อควรระวังในการโอน

#### 🔒 ความปลอดภัย
- **ตรวจสอบ account name 2-3 ครั้ง**: การโอนผิดไม่สามารถยกเลิกได้
- **เก็บ private key ให้ปลอดภัย**: ห้ามแชร์ให้ใครฟัง
- **ใช้ secure network**: หลีกเลี่ยง public WiFi

#### 💰 การจัดการเงิน
- **เก็บ WAX สำหรับค่าธรรมเนียม**: อย่างน้อย 0.1 WAX
- **ตรวจสอบยอดคงเหลือ**: ก่อนทำการโอน
- **โอนทีละน้อยก่อน**: เมื่อโอนไปยัง account ใหม่

## ⚡ การจัดการ WAX Resources

WAX blockchain ใช้ระบบทรัพยากร 3 ประเภทสำหรับการทำ transactions:

### 🔋 CPU (Processing Power)
**หน้าที่**: ใช้สำหรับประมวลผล transactions
**การใช้งาน**: mining, transfer, smart contract calls
**การเติม**: Stake WAX เพื่อได้ CPU

### 🌐 NET (Network Bandwidth)  
**หน้าที่**: ใช้สำหรับส่งข้อมูลใน network
**การใช้งาน**: ทุก transaction ใช้ NET
**การเติม**: Stake WAX เพื่อได้ NET

### 💾 RAM (Storage Space)
**หน้าที่**: ใช้สำหรับเก็บข้อมูลใน blockchain
**การใช้งาน**: สร้าง account, เก็บข้อมูล NFT
**การเติม**: ซื้อ RAM ด้วย WAX

## 🛠️ การจัดการ Resources ใน AWCLOUD CPanel

### 🎯 การเข้าถึงระบบจัดการ Resources
1. ไปที่ Dashboard หลัก
2. เลือก account ที่ต้องการจัดการ
3. คลิกปุ่ม **"RESOURCES"** หรือดูใน account details
4. ระบบจะแสดงสถานะทรัพยากรปัจจุบัน

### ⚡ การ Stake CPU และ NET

#### วิธี Stake CPU:
1. เลือกเมนู **"STAKE CPU"**
2. ระบุจำนวน WAX ที่ต้องการ stake
3. คลิก **"STAKE"** เพื่อยืนยัน
4. รอประมวลผลประมาณ 30 วินาที

#### วิธี Stake NET:
1. เลือกเมนู **"STAKE NET"**
2. ระบุจำนวน WAX ที่ต้องการ stake
3. คลิก **"STAKE"** เพื่อยืนยัน
4. ผลจะปรากฏใน 30 วินาที

### 💾 การซื้อ RAM

#### วิธีซื้อ RAM:
1. เลือกเมนู **"BUY RAM"**
2. ระบุจำนวน KB ที่ต้องการซื้อ
3. ระบบจะแสดงราคาเป็น WAX
4. คลิก **"BUY"** เพื่อยืนยัน

### 🔄 การ Unstake และขาย Resources

#### การ Unstake CPU/NET:
1. เลือกเมนู **"UNSTAKE CPU"** หรือ **"UNSTAKE NET"**
2. ระบุจำนวนที่ต้องการ unstake
3. **ข้อควรรู้**: ต้องรอ 3 วันจึงจะได้ WAX คืน

#### การขาย RAM:
1. เลือกเมนู **"SELL RAM"**
2. ระบุจำนวน KB ที่ต้องการขาย
3. ได้ WAX ทันทีไม่ต้องรอ

## 📊 การคำนวณทรัพยากรที่เหมาะสม

### 🎯 สำหรับ Basic Mining (1-5 accounts)

#### CPU Requirements:
- **Minimum**: 50-100 WAX stake
- **Recommended**: 200-300 WAX stake
- **เหตุผล**: รองรับ mining transactions ตลอดวัน

#### NET Requirements:
- **Minimum**: 20-50 WAX stake  
- **Recommended**: 100-150 WAX stake
- **เหตุผล**: ส่งข้อมูล transaction ได้ต่อเนื่อง

#### RAM Requirements:
- **Minimum**: 8-15 KB
- **Recommended**: 20-30 KB
- **เหตุผล**: เก็บข้อมูล NFT และ game data

### 🚀 สำหรับ Advanced Mining (5+ accounts)

#### CPU Requirements:
- **Minimum**: 500-1000 WAX stake per account
- **Recommended**: 1500-3000 WAX stake per account
- **เหตุผล**: mining frequency สูง, multiple transactions

#### NET Requirements:
- **Minimum**: 200-400 WAX stake per account
- **Recommended**: 500-800 WAX stake per account
- **เหตุผล**: ข้อมูลมาก, continuous operations

#### RAM Requirements:
- **Minimum**: 30-50 KB per account
- **Recommended**: 50-100 KB per account
- **เหตุผล**: multiple NFTs, complex game data

## 💡 เคล็ดลับการจัดการ Resources

### 🔄 Resources Sharing Strategy
**หลักการ**: แชร์ทรัพยากรระหว่าง accounts
**วิธีทำ**:
1. Stake ทรัพยากรส่วนเกินไปยัง account อื่น
2. ใช้ account หลักเป็น "resource bank"
3. กระจายทรัพยากรตามความต้องการ

### ⏰ Timing Optimization
**หลักการ**: ใช้ทรัพยากรให้เกิดประโยชน์สูงสุด
**เทคนิค**:
- Mining ในช่วงที่ทรัพยากรเยอะ
- หยุด mining ชั่วคราวเมื่อทรัพยากรน้อย
- วางแผนการ unstake ล่วงหน้า

### 📈 Cost Optimization
**หลักการ**: ลดต้นทุนทรัพยากร
**วิธีการ**:
- ซื้อ RAM เมื่อราคาต่ำ
- Unstake เมื่อไม่ต้องการใช้งาน
- Monitor ราคา RAM และ stake ตามตลาด

## 🚨 การแก้ไขปัญหาที่พบบ่อย

### ❌ CPU/NET หมด

**อาการ**: Mining หยุด, transactions ล้มเหลว
**สาเหตุ**: ใช้ทรัพยากรเกินที่มี
**วิธีแก้**:
1. Stake WAX เพิ่มเติมทันที
2. หยุด mining ชั่วคราว
3. รอทรัพยากร regenerate (24 ชั่วโมง)

### 💾 RAM ไม่พอ

**อาการ**: ไม่สามารถรับ NFT, account data เต็ม
**สาเหตุ**: RAM ไม่เพียงพอสำหรับข้อมูล
**วิธีแก้**:
1. ซื้อ RAM เพิ่มทันที
2. ขาย NFT ที่ไม่ใช้ เพื่อว่าง RAM
3. ทำความสะอาดข้อมูลเก่า

### 💰 ไม่มี WAX สำหรับค่าธรรมเนียม

**อาการ**: ทุก transaction ล้มเหลว
**สาเหตุ**: WAX หมดในการโอน
**วิธีแก้**:
1. โอน WAX จาก account อื่น
2. Unstake CPU/NET เพื่อได้ WAX
3. ขาย RAM เพื่อได้ WAX

## 📈 การวางแผนการเงินระยะยาว

### 💎 การลงทุนใน Resources
- **เริ่มต้น**: ลงทุน 20-30% ของเงินทุนใน resources
- **ขยายตัว**: เพิ่มเป็น 40-50% เมื่อมี account มาก
- **ระยะยาว**: รักษาสัดส่วน resources ให้เหมาะสม

### 🔄 การหมุนเวียนทุน
- Unstake resources ที่ไม่ใช้เป็นประจำ
- นำ WAX ที่ได้ไปซื้อ NFT หรือขยาย operation
- Monitor ROI ของการลงทุนใน resources vs mining returns

การจัดการ Token และ Resources อย่างมีประสิทธิภาพจะช่วยให้การทำ mining ของคุณราบรื่นและประสบความสำเร็จ!