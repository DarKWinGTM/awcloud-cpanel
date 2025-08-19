# 🤖 Headless Automation System - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ Headless Automation System ฉบับสมบูรณ์** - ระบบอัตโนมัติขั้นสูงสำหรับการขุด Alien Worlds และจัดการ Multiple Accounts แบบ 24/7 
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

### 🎆 **Features อื่นๆ**
{% content-ref url="features-hub.md" %}
[features-hub.md](features-hub.md)
{% endcontent-ref %}

{% content-ref url="team-pool.md" %}
[team-pool.md](team-pool.md)
{% endcontent-ref %}

### 📚 **User Manual**
{% content-ref url="../user-manual/dashboard-guide.md" %}
[dashboard-guide.md](../user-manual/dashboard-guide.md)
{% endcontent-ref %}

{% content-ref url="../user-manual/mining-systems-guide.md" %}
[mining-systems-guide.md](../user-manual/mining-systems-guide.md)
{% endcontent-ref %}

{% content-ref url="../user-manual/box-nft-modal.md" %}
[box-nft-modal.md](../user-manual/box-nft-modal.md)
{% endcontent-ref %}

{% content-ref url="../user-manual/set-land-modal.md" %}
[set-land-modal.md](../user-manual/set-land-modal.md)
{% endcontent-ref %}

## 📖 ภาพรวม Headless Automation System

### 🎯 **คุณสมบัติหลัก**
- **🤖 Automated Mining Claims** - ขุด TLM แบบอัตโนมัติโดยไม่ต้องเฝ้าดู
- **🔄 Multi-Account Management** - จัดการหลาย WAX accounts พร้อมกัน
- **🌐 Advanced Browser Technology** - ทำงานผ่าน browser automation ขั้นสูงที่รองรับการทำงานเต็มรูปแบบ
- **⏰ 24/7 Operations** - ดำเนินการต่อเนื่องตลอด 24 ชั่วโมง
- **🛡️ Anti-Detection** - ระบบป้องกันการตรวจจับด้วย advanced stealth technology
- **📊 Real-time Monitoring** - ติดตามสถานะและผลการทำงานแบบเรียลไทม์
- **🔐 Smart Transaction Signing** - ระบบ auto-sign ที่ไม่ต้องเปิด popup รบกวนการทำงาน
- **🖥️ Invisible Operations** - ทำงานแบบ background โดยไม่แสดงหน้าต่าง browser

### 🔧 **การทำงานของระบบ**
```
AWCLOUD CPanel (ระบบหลัก)
           ↓
ส่งคำสั่ง → Headless System (ระบบแยก)
           ↓
Headless รอรับงาน → เริ่มทำงาน
           ↓
Browser Launch (Background Mode)
           ↓
Wallet Integration & Auto-Sign
           ↓
Automated Alien Worlds Navigation
           ↓
Mining Claims + NFT Management
           ↓
ส่งผลลัพธ์กลับ → AWCLOUD CPanel
```

### 🏗️ **สถาปัตยกรรมระบบ**

#### **ความแยกส่วนของระบบ:**
- **🎛️ AWCLOUD CPanel:** ระบบหลักสำหรับการจัดการและควบคุม
- **🤖 Headless System:** ระบบแยกสำหรับประมวลผลงาน automation
- **📡 Communication:** ระบบสื่อสารระหว่างกันผ่าน API

#### **การลดความซับซ้อน:**
- **แยกภาระงาน:** CPanel ไม่ต้องจัดการ browser automation โดยตรง
- **เสถียรภาพ:** ปัญหาใน Headless ไม่กระทบระบบหลัก
- **ขยายงานได้:** สามารถรัน Headless หลายตัวพร้อมกัน
- **บำรุงรักษาง่าย:** แก้ไข update แยกส่วนได้

### 🌟 **ข้อได้เปรียบของระบบ AWCLOUD Headless**

#### **🎯 การทำงานที่มีประสิทธิภาพสูง**
- **เสถียรภาพสูง**: Browser ทำงานเต็มรูปแบบ ไม่มีปัญหาของ headless mode แบบธรรมดา
- **รองรับ JavaScript เต็มรูปแบบ**: ทำงานกับ Alien Worlds ได้อย่างสมบูรณ์
- **ไม่มีข้อจำกัด DOM**: เข้าถึงและจัดการ UI elements ได้ทุกอย่าง
- **การแสดงผลที่แม่นยำ**: เหมือนการใช้งาน browser จริงทุกประการ

#### **🔐 ความปลอดภัยขั้นสูง**
- **Auto-Sign Technology**: ลดการใช้ popup ที่อาจเสี่ยงต่อการโจมตี
- **Session Management**: จัดการ login state อย่างปลอดภัย
- **Anti-Detection Systems**: หลีกเลี่ยงการตรวจจับด้วยเทคโนโลยีขั้นสูง
- **Secure Background Operations**: ทำงานแบบ background โดยไม่เปิดเผยข้อมูล




---

## 🚀 วิธีใช้งาน Headless Automation

### **1️⃣ การเปิดใช้งาน Headless Mode**

#### **การเข้าถึง:**
1. **เข้า Dashboard** ของ AWCLOUD CPanel
2. **เลือก Account** ที่ต้องการเปิด automation
3. **คลิก Settings** ในแถว account
4. **เปิดใช้ "Headless Mode"** 

#### **การตั้งค่าเบื้องต้น:**
```
Headless Configuration:
├── Enable Automation: ✅ เปิดใช้งาน
├── Mining Frequency: ตั้งช่วงเวลาการขุด (นาที)
├── Auto Tool Selection: เลือกเครื่องมืออัตโนมัติ
├── Land Preference: เลือกพื้นที่ขุดที่ต้องการ
└── Error Handling: ตั้งค่าการจัดการข้อผิดพลาด
```

### **2️⃣ การตั้งค่า Automated Mining**

#### **Mining Parameters:**
- **⏱️ Claim Interval:** ช่วงเวลาระหว่างการ claim (แนะนำ 15-30 นาที)
- **🛠️ Tool Selection:** เลือกเครื่องมือที่จะใช้ขุดอัตโนมัติ
- **🌍 Land Priority:** ลำดับความสำคัญของพื้นที่ขุด
- **⚡ Resource Management:** การจัดการ WAX/CPU/NET อัตโนมัติ

#### **Step-by-Step Setup:**
1. **เลือก Mining Tools:** จาก BOX NFT Modal เลือกเครื่องมือที่มี durability สูง
2. **Set Land Priority:** จาก SET LAND Modal เลือกพื้นที่ที่ต้องการขุด
3. **Configure Timing:** ตั้งช่วงเวลาการ claim ให้เหมาะสม
4. **Test Run:** ทดสอบการทำงานด้วย manual claim ก่อน
5. **Start Automation:** เปิดใช้งาน headless mode

### **3️⃣ การจัดการ Multi-Account Operations**

#### **Account Coordination:**
```
Multi-Account Setup:
├── Account Priority: กำหนดลำดับการทำงาน
├── Resource Sharing: แชร์ WAX/Tools ระหว่าง accounts
├── Proxy Assignment: กำหนด proxy ให้แต่ละ account
├── Session Management: จัดการ browser sessions
└── Performance Monitoring: ติดตามผลการทำงาน
```

#### **Advanced Multi-Account Features:**
- **🔄 Round-Robin Mining:** หมุนเวียนการขุดระหว่าง accounts
- **📊 Load Balancing:** กระจายภาระงานอย่างสมดุล
- **🛡️ Ban Protection:** ป้องกันการ ban ด้วยการหมุนเวียน accounts
- **⚡ Resource Optimization:** ปรับแต่งการใช้ทรัพยากรแต่ละ account




---

## 🌐 Browser Automation Features

### **🤖 Advanced Browser Operations**

#### **การทำงานอัตโนมัติปัจจุบัน:**
- **🎯 เข้าเว็บไซต์:** เข้า Alien Worlds website โดยอัตโนมัติ
- **🔐 เชื่อมต่อ Wallet:** เชื่อมต่อ WAX wallet พร้อมระบบ auto-sign ใหม่
- **⛏️ การขุดอัตโนมัติ:** คลิก mine และ claim ตามเวลาที่กำหนด
- **🛠️ การจัดการเครื่องมือ:** เลือกเครื่องมือจากที่ตั้งค่าไว้ (🔮 การเปลี่ยนอัตโนมัติ - กำลังพัฒนา)
- **🌍 เลือกพื้นที่ขุด:** ขุดในพื้นที่ที่ตั้งค่าไว้ (🔮 การเปลี่ยนตามประสิทธิภาพ - กำลังพัฒนา)

#### **การจัดการ Browser Session:**
```
คุณสมบัติระบบ Browser:
├── รักษา Login State: เก็บสถานะการเข้าสู่ระบบแบบถาวร
├── จัดการข้อมูล: จัดการ cookies และ localStorage อัตโนมัติ
├── หลาย Browser Instance: ทำงานกับ accounts หลายตัวพร้อมกัน
├── Proxy Management: หมุนเวียน proxy อัตโนมัติ
├── กู้คืนข้อผิดพลาด: ระบบ recovery เมื่อเกิดปัญหา
└── ทำงาน Background: ไม่แสดงหน้าต่าง browser รบกวน
```

### **🛡️ ระบบป้องกันการตรวจจับ**

#### **ระบบป้องกันการตรวจจับ:**
- **🌐 Proxy Management:** หมุนเวียน IP addresses อัตโนมัติ
- **🤖 Natural Behavior:** จำลองการใช้งานเหมือนมนุษย์จริง
- **⏱️ Smart Timing:** ปรับเวลาการทำงานให้เหมาะสม
- **🔄 Session Rotation:** เปลี่ยน browser sessions เป็นระยะ
- **📱 Browser Masking:** ปกปิดลักษณะของ browser automation
- **🎭 Random Patterns:** สุ่มรูปแบบการทำงานเพื่อความปลอดภัย

#### **มาตรการความปลอดภัย:**
1. **ควบคุมความถี่:** ปรับความถี่การทำงานให้เหมาะสมกับสถานการณ์
2. **ป้องกันข้อผิดพลาด:** ตรวจจับปัญหาก่อนเกิดขึ้น
3. **ระบบสำรอง:** มีแผนสำรองหลายชั้นเพื่อความต่อเนื่อง
4. **ตรวจสอบความปลอดภัย:** ประเมินภัยคุกคามอย่างต่อเนื่อง

### **🔐 ระบบ Auto-Sign Transaction**

#### **นวัตกรรม Auto-Sign ใหม่:**
- **🚀 ไม่มี Popup รบกวน:** sign transaction โดยไม่เปิด popup ขึ้นมา
- **⚡ ประมวลผลทันที:** ไม่ต้องรอ approve transaction manual
- **🔒 ความปลอดภัย:** จัดการ private keys อย่างปลอดภัย
- **🎯 เข้าใจบริบท:** ระบบรู้ว่าควร sign transaction ไหน

#### **ประโยชน์สำหรับผู้ใช้:**
- **📈 เพิ่มประสิทธิภาพ:** ขุด TLM ได้เร็วขึ้นโดยไม่ต้องรอ approve
- **🛡️ ลดข้อผิดพลาด:** หลีกเลี่ยงการ approve ผิดหรือช้า
- **⚡ ความเร็วสูง:** ประมวลผล mining claims ได้ไว
- **🎮 ใช้งานสะดวก:** ไม่มี popup รบกวนขณะทำงาน

### **🔮 ฟีเจอร์ที่กำลังพัฒนา**

#### **Smart Tool Management (เร็วๆ นี้):**
- **🔄 Auto Tool Switching:** เปลี่ยนเครื่องมือเมื่อ durability ต่ำ
- **📊 Tool Efficiency Analysis:** วิเคราะห์ประสิทธิภาพเครื่องมือ
- **🛠️ Smart Tool Selection:** เลือกเครื่องมือที่ดีที่สุดโดยอัตโนมัติ

#### **Dynamic Land Management (เร็วๆ นี้):**
- **🌍 Real-time Land Switching:** เปลี่ยนพื้นที่ขุดตามประสิทธิภาพ
- **📈 Land Performance Tracking:** ติดตามผลการขุดแต่ละพื้นที่
- **🎯 Optimal Land Selection:** เลือกพื้นที่ที่ให้ผลตอบแทนดีที่สุด




---

## 📊 การติดตามและรายงานผล

### **🖥️ Dashboard Monitoring**

#### **Real-time Status Display:**
```
Automation Dashboard:
├── 🟢 Active Sessions: จำนวน accounts ที่ทำงานอยู่
├── ⛏️ Mining Statistics: สถิติการขุดแต่ละ account
├── 💰 TLM Earned: จำนวน TLM ที่ได้รับ
├── ⚠️ Error Alerts: แจ้งเตือนข้อผิดพลาด
└── 📈 Performance Metrics: ข้อมูลประสิทธิภาพ
```

#### **Detailed Reports:**
- **📊 Mining Efficiency:** อัตราการขุดต่อชั่วโมง
- **🔧 Tool Usage:** สถิติการใช้เครื่องมือ
- **💸 Resource Consumption:** การใช้ WAX/CPU/NET
- **🌍 Land Performance:** ประสิทธิภาพของแต่ละพื้นที่ขุด

### **⚠️ Alert System**

#### **Notification Types:**
- **🚨 Critical Errors:** ข้อผิดพลาดร้ายแรงที่ต้องดำเนินการทันที
- **⚠️ Warnings:** เตือนปัญหาที่อาจเกิดขึ้น
- **ℹ️ Information:** ข้อมูลสถานะทั่วไป
- **✅ Success Reports:** รายงานการทำงานสำเร็จ

#### **Alert Delivery Methods:**
- **📱 Dashboard Notifications:** แสดงใน AWCLOUD interface
- **📧 Email Alerts:** ส่งอีเมลเตือน (ถ้าตั้งค่าไว้)
- **📊 Log Files:** บันทึกใน automation logs




---

## 🔧 การแก้ไขปัญหา Headless System

### **❌ ปัญหาที่พบบ่อย**

#### **🌐 Browser Connection Issues**
- **สาเหตุ:** Task Manager Server API ไม่พร้อมใช้งาน
- **อาการ:** Automation หยุดทำงาน, ไม่สามารถสร้าง browser session
- **วิธีแก้:** 
  1. ตรวจสอบ internet connection
  2. รีสตาร์ท automation service
  3. เปลี่ยนเป็น manual mode ชั่วคราว

#### **⛏️ Mining Claims Failure**
- **สาเหตุ:** Alien Worlds website เปลี่ยนแปลง UI หรือ network lag
- **อาการ:** Claims ไม่สำเร็จ, ค้างที่หน้า mining
- **วิธีแก้:**
  1. Manual claim เพื่อทดสอบ
  2. ปรับ timing settings
  3. ตรวจสอบ tool durability

#### **🔐 Wallet Connection Problems**
- **สาเหตุ:** Session หมดอายุหรือ private key ผิด
- **อาการ:** ไม่สามารถ sign transactions
- **วิธีแก้:**
  1. ตรวจสอบ private key ใน account settings
  2. รีเซ็ต browser session
  3. Manual login ใหม่

### **🛠️ Advanced Troubleshooting**

#### **Performance Optimization:**
```
Optimization Checklist:
├── ✅ Reduce claim frequency (increase intervals)
├── ✅ Use high-durability tools
├── ✅ Monitor resource usage (CPU/NET)
├── ✅ Distribute load across accounts
└── ✅ Regular maintenance restarts
```

#### **Error Recovery Procedures:**
1. **Automatic Recovery:** ระบบจะพยายาม recover อัตโนมัติ 3 ครั้ง
2. **Manual Intervention:** หากล้มเหลว จะแจ้งให้ user ดำเนินการ
3. **Fallback Mode:** เปลี่ยนเป็น manual mode ชั่วคราว
4. **System Restart:** รีสตาร์ท automation service




---

## 🚀 การใช้งานขั้นสูง

### **⚙️ Custom Automation Scripts**

#### **Script Configuration:**
- **🎯 Custom Mining Strategies:** กำหนดกลยุทธ์การขุดเฉพาะ
- **📊 Performance Monitoring:** สร้าง custom metrics
- **🔄 Advanced Scheduling:** ตั้งเวลาการทำงานที่ซับซ้อน
- **🛡️ Security Protocols:** กำหนดมาตรการความปลอดภัยเพิ่มเติม

#### **Power User Features:**
```
Advanced Settings:
├── Custom Headers: กำหนด HTTP headers
├── Cookie Management: จัดการ cookies ขั้นสูง
├── Viewport Settings: ปรับแต่งขนาดหน้าจอ
├── Network Throttling: จำกัดความเร็ว network
└── Screenshot Capture: บันทึกหน้าจอสำหรับ debug
```

### **📊 การรายงานผลของ Headless System**

#### **ข้อมูลที่ส่งกลับไปยังระบบหลัก:**
- **⛏️ ผลการขุด:** จำนวน TLM ที่ขุดได้และจำนวนครั้งการ claim
- **⏱️ เวลาการทำงาน:** ระยะเวลาที่ระบบ active และสถิติ uptime
- **⚠️ Log และ Error:** บันทึกปัญหา ข้อผิดพลาด และการแก้ไข
- **🔄 สถานะ Session:** สถานะการเชื่อมต่อ browser และ network
- **📊 Basic Statistics:** ข้อมูลพื้นฐานเกี่ยวกับการทำงานของ automation




---

## 💡 เคล็ดลับและ Best Practices

### **🏆 การใช้งานที่มีประสิทธิภาพ**

#### **Optimization Tips:**
1. **⏰ Smart Timing:** ขุดในช่วงเวลาที่ network ไม่หนาแน่น
2. **🛠️ Tool Rotation:** หมุนเวียนเครื่องมือเพื่อรักษา durability
3. **🌍 Land Strategy:** เลือกพื้นที่ขุดตาม mining rate
4. **💰 Resource Management:** จัดการ WAX staking อย่างมีประสิทธิภาพ
5. **📊 Data-Driven Decisions:** ใช้ข้อมูลสำหรับตัดสินใจ


### **🎯 การแยกหน้าที่ของระบบ**

#### **🤖 Headless System (ระบบแยก) - หน้าที่:**
- **👂 รอรับคำสั่ง:** ฟังคำสั่งจาก AWCLOUD CPanel แบบ passive
- **⛏️ ประมวลผลงาน:** ไปขุด TLM บน Alien Worlds ตามคำสั่งที่ได้รับ
- **🔄 ทำงานต่อเนื่อง:** รันแยกต่างหากจากระบบหลัก ลดความซับซ้อน
- **📤 ส่งผลลัพธ์:** รายงานผลการทำงานกลับไปยัง CPanel เมื่อเสร็จสิ้น

#### **🎛️ AWCLOUD CPanel (ระบบหลัก) - หน้าที่:**
- **📋 สั่งงาน:** ส่งคำสั่งไปยัง Headless System
- **📊 จัดการข้อมูล:** Dashboard, monitoring, และสถิติต่างๆ
- **⚙️ การตั้งค่า:** ควบคุม configuration และ parameters
- **👥 User Interface:** หน้าจอสำหรับ user จัดการทุกอย่าง

#### **💡 ประโยชน์ของการแยกระบบ:**
- **🔀 ลดความซับซ้อน:** CPanel ไม่ต้องจัดการ browser automation โดยตรง  
- **🛡️ เสถียรภาพ:** ปัญหาใน Headless ไม่ส่งผลกระทบต่อระบบหลัก
- **📈 ขยายได้:** รัน Headless หลาย instances พร้อมกัน
- **🔧 บำรุงรักษา:** update หรือแก้ไขแยกส่วนได้

### **⚠️ ข้อควรระวัง**

#### **Risk Management:**
- **🚫 Over-Automation:** หลีกเลี่ยงการ automate มากเกินไป
- **⚡ Resource Limits:** ตั้งขีดจำกัดการใช้ทรัพยากร
- **🔍 Regular Monitoring:** ตรวจสอบการทำงานเป็นประจำ
- **🛡️ Security Awareness:** ระวังภัยคุกคามด้านความปลอดภัย

💡 **เคล็ดลับสุดท้าย:** Headless Automation System เป็นเครื่องมือที่ทรงพลัง ควรเริ่มต้นด้วยการตั้งค่าพื้นฐานและค่อยๆ ปรับแต่งไปตามประสบการณ์ ความปลอดภัยและเสถียรภาพสำคัญกว่าการทำงานให้เร็วที่สุด

**📝 หมายเหตุ:** คู่มือนี้อัปเดตจากการวิเคราะห์ระบบจริง ณ วันที่ 15 สิงหาคม 2568