# 🎮 การใช้งาน Game Monitor และติดตามสถิติ

## 📋 ภาพรวม Game Monitoring

Game Monitor ใน AWCLOUD CPanel เป็นระบบติดตามและแสดงสถิติการเล่นเกมแบบ real-time ช่วยให้คุณสามารถมองเห็นประสิทธิภาพการ mining และการทำงานของ accounts ได้อย่างละเอียด

## 🎯 การเข้าถึง Game Monitor

### 🖥️ ที่ตั้งของ Game Monitor
- **Dashboard หลัก**: ส่วนล่างของหน้า Dashboard
- **Tab Navigation**: มี tabs สำหรับเกมต่างๆ
- **Account-specific**: แต่ละ account มี monitor แยก

### 🎮 Game Tabs ที่รองรับ

#### 1. 👽 AW (Alien Worlds)
- **เกมหลัก** ที่ AWCLOUD CPanel รองรับ
- **การแสดงผล**: mining stats, TLM earned, NFT usage
- **อัพเดท**: real-time ทุก 5 วินาทีที

#### 2. 🔥 FW (Farmers World)
- **สถานะ**: รองรับ (ถ้าเปิดใช้งาน)
- **การแสดงผล**: farming stats, resource management
- **ข้อมูล**: crop yields, tool durability

#### 3. ⚔️ SS (Stone Slammers)
- **สถานะ**: รองรับ (ถ้าเปิดใช้งาน)  
- **การแสดงผล**: battle stats, tournament results
- **ข้อมูล**: win rates, rewards earned

#### 4. 🎨 CC (Crypto Cards)
- **สถานะ**: รองรับ (ถ้าเปิดใช้งาน)
- **การแสดงผล**: card game stats, deck performance
- **ข้อมูล**: matches won, cards collected

## 📊 ส่วนประกอบของ Game Monitor

### 🏠 Main Monitor Panel

#### 📈 Mining Statistics (สำหรับ Alien Worlds)
- **TLM per Hour**: รายได้ TLM ต่อชั่วโมง
- **Success Rate**: อัตราสำเร็จของการขุด
- **NFT Efficiency**: ประสิทธิภาพของ tools ที่ใช้
- **Land Performance**: ประสิทธิภาพของ land ที่ขุด

#### ⚡ Real-time Status
- **Current Action**: กิจกรรมที่กำลังทำอยู่
- **Next Mining Time**: เวลาที่จะขุดครั้งต่อไป
- **Resource Status**: สถานะ CPU/NET/RAM
- **Account Health**: สุขภาพโดยรวมของ account

### 🔍 Detailed Statistics View

#### 📊 Performance Metrics
- **Daily TLM**: TLM ที่ได้รับในแต่ละวัน
- **Weekly Trends**: แนวโน้มรายสัปดาห์
- **Monthly Summary**: สรุปรายเดือน
- **Historical Data**: ข้อมูลย้อนหลัง

#### 🎯 Mining Breakdown
- **Successful Mines**: จำนวนการขุดสำเร็จ
- **Failed Attempts**: การขุดที่ล้มเหลว
- **Average TLM per Mine**: TLM เฉลี่ยต่อการขุด
- **Best Mining Sessions**: ช่วงเวลาที่ขุดได้ดีที่สุด

## ⚡ การใช้งานปุ่ม "EXPAND ALL HISTORY"

### 🔍 วัตถุประสงค์
ปุ่มนี้จะแสดงข้อมูลสถิติของทุก account พร้อมกันในหน้าเดียว

### 🎯 วิธีการใช้งาน
1. **ค้นหาปุ่ม**: มองหาปุ่ม "EXPAND ALL HISTORY" ที่มุมขวาบน
2. **คลิกปุ่ม**: กดเพื่อขยายข้อมูลทั้งหมด
3. **รอโหลด**: ระบบจะโหลดข้อมูลของทุก account
4. **ดูข้อมูล**: สถิติจะแสดงในรูปแบบ iframe แยกตาม account

### 📊 ข้อมูลที่จะเห็นหลังกด EXPAND ALL
- **Mining Stats**: สถิติการขุดของแต่ละ account
- **Performance Charts**: กราฟแสดงประสิทธิภาพ
- **Resource Usage**: การใช้งานทรัพยากร
- **Timeline**: เส้นเวลาการทำงานของ accounts

## 📱 การใช้งาน Monitor บนอุปกรณ์ต่างๆ

### 🖥️ Desktop/Laptop
- **แสดงผลเต็มจอ**: ดูข้อมูลได้ครบถ้วน
- **Multi-tab**: เปิดหลาย account พร้อมกัน
- **Keyboard shortcuts**: ใช้ keyboard navigating

### 📱 Mobile/Tablet
- **Responsive Design**: ปรับขนาดตามหน้าจอ
- **Touch-friendly**: ปุ่มและควบคุมใหญ่พอสำหรับการสัมผัส
- **Swipe Navigation**: ปัดเปลี่ยนระหว่าง accounts

### 🌐 Browser Compatibility
- **Chrome/Edge**: รองรับเต็มที่
- **Firefox**: รองรับดี
- **Safari**: รองรับพื้นฐาน
- **Mobile Browsers**: รองรับ responsive features

## 📈 การอ่านและใช้ประโยชน์จากข้อมูลสถิติ

### 🎯 การวิเคราะห์ประสิทธิภาพ

#### 📊 Daily Performance Analysis
**วิธีดู**:
1. เปิด monitor ของ account ที่ต้องการ
2. ดูกราห TLM per hour
3. เปรียบเทียบกับวันก่อนหน้า

**สิ่งที่ควรหา**:
- **ช่วงเวลาที่ดีที่สุด**: เวลาไหนที่ได้ TLM มากที่สุด
- **ช่วงเวลาที่แย่**: เวลาไหนที่ประสิทธิภาพลด
- **แนวโน้ม**: การเปลี่ยนแปลงในระยะยาว

#### 🔍 Account Comparison
**วิธีเปรียบเทียบ**:
1. ใช้ EXPAND ALL HISTORY
2. ดูสถิติของทุก account ใน view เดียว
3. เปรียบเทียบประสิทธิภาพ

**เมตริกที่ควรเปรียบเทียบ**:
- **TLM per hour ระหว่าง accounts**
- **Success rate แต่ละ account**
- **Resource efficiency**
- **ROI (Return on Investment)**

### 💡 การใช้ข้อมูลเพื่อปรับปรุง

#### 🔧 Optimization Strategies
**จากข้อมูล Mining Stats**:
- Account ไหนประสิทธิภาพต่ำ → เปลี่ยน tools หรือ land
- ช่วงเวลาไหนได้ผลดี → เพิ่ม mining ในช่วงนั้น
- Land ไหนให้ผลดี → ย้าย accounts อื่นไปด้วย

**จากข้อมูล Resource Usage**:
- Account ไหนใช้ CPU มาก → เพิ่ม CPU stake
- Account ไหนใช้ NET มาก → เพิ่ม NET stake  
- Account ไหน RAM เต็ม → ซื้อ RAM เพิ่ม

## 🔄 การรีเฟรชและอัพเดทข้อมูล

### ⏰ การอัพเดทอัตโนมัติ
- **ข้อมูลสถิติ**: อัพเดททุก 5 วินาทีที
- **Mining status**: อัพเดททุก 10 วินาทีที
- **Resource data**: อัพเดททุก 30 วินาทีที

### 🔄 การรีเฟรชด้วยตนเอง
**เมื่อไหร่ควรรีเฟรช**:
- ข้อมูลดูไม่อัพเดท
- หลังจากเปลี่ยนการตั้งค่า
- เมื่อสงสัยว่าข้อมูลไม่ถูกต้อง

**วิธีรีเฟรช**:
1. รีเฟรชหน้าเว็บทั้งหมด (F5)
2. คลิก EXPAND ALL HISTORY ใหม่
3. ปิดเปิด monitor tab

## 🚨 การแก้ไขปัญหาที่พบบ่อย

### ❌ Monitor ไม่แสดงข้อมูล

**สาเหตุที่เป็นไปได้**:
- Account ไม่ได้ active mining
- การเชื่อมต่ออินเทอร์เน็ตขัดข้อง
- ระบบ monitoring service ล่ม

**วิธีแก้**:
1. ตรวจสอบว่า account กำลัง mining อยู่
2. รีเฟรชหน้าเว็บ
3. ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
4. รอสักครู่และลองใหม่

### 📊 ข้อมูลสถิติไม่ถูกต้อง

**สาเหตุ**:
- ข้อมูลยังไม่ sync กับ blockchain
- Cache ของ browser เก่า
- ระบบ statistics กำลังประมวลผล

**วิธีแก้**:
1. รอให้ข้อมูล sync (5-10 นาที)
2. Clear browser cache
3. เปิด browser ใหม่
4. ตรวจสอบข้อมูลใน blockchain explorer

### 🔄 EXPAND ALL HISTORY ไม่ทำงาน

**สาเหตุ**:
- JavaScript ถูก block โดย browser
- Memory ไม่เพียงพอในการโหลดข้อมูลทั้งหมด
- Ad blocker ขัดขวางการทำงาน

**วิธีแก้**:
1. Enable JavaScript ใน browser
2. ปิด ad blocker ชั่วคราว
3. ปิด tabs อื่นๆ เพื่อว่าง memory
4. ใช้ browser ที่รองรับดีกว่า

## 💡 เคล็ดลับการใช้งาน Monitor อย่างมีประสิทธิภาพ

### 📊 การสร้าง Dashboard ส่วนตัว
- บุ๊คมาร์ค account ที่สำคัญ
- จัดเรียง monitors ตามลำดับความสำคัญ
- ใช้ multiple browser tabs สำหรับ accounts ต่างๆ

### ⏰ การกำหนดเวลาติดตาม
- **Morning Check**: ตรวจสอบผลงานคืนที่ผ่านมา
- **Midday Review**: ติดตามประสิทธิภาพปัจจุบัน
- **Evening Analysis**: วิเคราะห์และวางแผนวันถัดไป

### 📈 การใช้ข้อมูลเพื่อการตัดสินใจ
- เก็บ screenshot ของ stats ที่ดี
- บันทึกการเปลี่ยนแปลงและผลลัพธ์
- สร้าง spreadsheet สำหรับ tracking ระยะยาว

Game Monitor เป็นเครื่องมือสำคัญที่ช่วยให้คุณเข้าใจและปรับปรุงการ mining ใน Alien Worlds ได้อย่างมีประสิทธิภาพ!