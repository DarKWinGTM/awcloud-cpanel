# 🤖 Headless Automation System - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ Headless Automation System ฉบับสมบูรณ์** - ระบบอัตโนมัติขั้นสูงสำหรับการขุด Alien Worlds และจัดการ Multiple Accounts แบบ 24/7 
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

{% content-ref url="dashboard-guide.md" %}
[dashboard-guide.md](dashboard-guide.md)
{% endcontent-ref %}

{% content-ref url="mining-systems-guide.md" %}
[mining-systems-guide.md](mining-systems-guide.md)
{% endcontent-ref %}

{% content-ref url="box-nft-modal.md" %}
[box-nft-modal.md](box-nft-modal.md)
{% endcontent-ref %}

{% content-ref url="set-land-modal.md" %}
[set-land-modal.md](set-land-modal.md)
{% endcontent-ref %}

## 📖 ภาพรวม Headless Automation System

### 🎯 **คุณสมบัติหลัก**
- **🤖 Automated Mining Claims** - ขุด TLM แบบอัตโนมัติโดยไม่ต้องเฝ้าดู
- **🔄 Multi-Account Management** - จัดการหลาย WAX accounts พร้อมกัน
- **🌐 Browser Automation** - ทำงานผ่าน headless browser ระบบ Task Manager Server API
- **⏰ 24/7 Operations** - ดำเนินการต่อเนื่องตลอด 24 ชั่วโมง
- **🛡️ Anti-Detection** - ระบบป้องกันการตรวจจับด้วย proxy rotation
- **📊 Real-time Monitoring** - ติดตามสถานะและผลการทำงานแบบเรียลไทม์

### 🔧 **การทำงานของระบบ**
```
User Configuration (AWCLOUD CPanel)
           ↓
Headless Browser Creation (Task Manager Server API)
           ↓
Automated Alien Worlds Navigation
           ↓
Mining Claims + NFT Management
           ↓
Results Report to Dashboard
```




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

### **🤖 Headless Browser Operations**

#### **Automated Web Interactions:**
- **🎯 Auto Navigation:** เข้า Alien Worlds website อัตโนมัติ
- **🔐 Wallet Connection:** เชื่อมต่อ WAX wallet อัตโนมัติ
- **⛏️ Mining Claims:** คลิก mine และ claim อัตโนมัติ
- **🛠️ Tool Management:** เปลี่ยนเครื่องมือเมื่อ durability ต่ำ
- **🌍 Land Switching:** เปลี่ยนพื้นที่ขุดตามการตั้งค่า

#### **Session Management:**
```
Browser Session Features:
├── Persistent Cookies: เก็บ login state
├── LocalStorage Management: จัดการข้อมูล browser
├── Multiple Tabs: ทำงานหลาย tabs พร้อมกัน
├── Proxy Rotation: หมุนเวียน IP addresses
└── Error Recovery: กู้คืนเมื่อเกิดข้อผิดพลาด
```

### **🛡️ Anti-Detection Measures**

#### **Security Features:**
- **🌐 Proxy Integration:** ใช้ proxy pools เพื่อหลีกเลี่ยงการตรวจจับ
- **🤖 Human-like Behavior:** จำลองการคลิกและการเคลื่อนไหวของมนุษย์
- **⏱️ Random Delays:** สุ่มเวลาหน่วงเพื่อดูเป็นธรรมชาติ
- **🔄 Session Rotation:** หมุนเวียน browser sessions
- **📱 User Agent Variation:** เปลี่ยน browser fingerprints

#### **Safe Operation Practices:**
1. **Rate Limiting:** จำกัดความถี่การทำงานเพื่อหลีกเลี่ยงการ ban
2. **Error Monitoring:** ตรวจสอบข้อผิดพลาดและหยุดทำงานเมื่อจำเป็น
3. **Backup Strategies:** มีแผนสำรองเมื่อระบบ automation ล้มเหลว




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

### **📈 Analytics และ Reporting**

#### **Performance Analytics:**
- **⛏️ Mining Rate Analysis:** วิเคราะห์อัตราการขุด
- **💰 Profitability Tracking:** ติดตามผลกำไร
- **🔧 Tool Efficiency:** ประสิทธิภาพเครื่องมือ
- **🌍 Land Comparison:** เปรียบเทียบพื้นที่ขุด

#### **Custom Reports:**
- **📊 Daily/Weekly/Monthly Reports:** รายงานตามช่วงเวลา
- **📈 Trend Analysis:** วิเคราะห์แนวโน้ม
- **💸 Cost-Benefit Analysis:** วิเคราะห์ต้นทุน-ผลตอบแทน
- **🎯 Goal Tracking:** ติดตามเป้าหมาย




---

## 💡 เคล็ดลับและ Best Practices

### **🏆 การใช้งานที่มีประสิทธิภาพ**

#### **Optimization Tips:**
1. **⏰ Smart Timing:** ขุดในช่วงเวลาที่ network ไม่หนาแน่น
2. **🛠️ Tool Rotation:** หมุนเวียนเครื่องมือเพื่อรักษา durability
3. **🌍 Land Strategy:** เลือกพื้นที่ขุดตาม mining rate
4. **💰 Resource Management:** จัดการ WAX staking อย่างมีประสิทธิภาพ
5. **📊 Data-Driven Decisions:** ใช้ข้อมูลสำหรับตัดสินใจ

#### **Safety Guidelines:**
```
Safety Checklist:
├── ✅ Never share private keys
├── ✅ Use strong, unique passwords
├── ✅ Regularly monitor automation logs
├── ✅ Set reasonable claim frequencies
├── ✅ Keep backup of configurations
└── ✅ Update system regularly
```

### **🎯 การตั้งเป้าหมาย**

#### **Realistic Expectations:**
- **📈 Daily TLM Goals:** ตั้งเป้าหมายรายวันที่สมเหตุสมผล
- **⏱️ Uptime Targets:** กำหนดเป้า uptime ของระบบ
- **💸 ROI Timeline:** คำนวณระยะเวลาคืนทุน
- **🔧 Maintenance Schedule:** วางแผนการ maintenance

### **⚠️ ข้อควรระวัง**

#### **Risk Management:**
- **🚫 Over-Automation:** หลีกเลี่ยงการ automate มากเกินไป
- **⚡ Resource Limits:** ตั้งขีดจำกัดการใช้ทรัพยากร
- **🔍 Regular Monitoring:** ตรวจสอบการทำงานเป็นประจำ
- **🛡️ Security Awareness:** ระวังภัยคุกคามด้านความปลอดภัย

💡 **เคล็ดลับสุดท้าย:** Headless Automation System เป็นเครื่องมือที่ทรงพลัง ควรเริ่มต้นด้วยการตั้งค่าพื้นฐานและค่อยๆ ปรับแต่งไปตามประสบการณ์ ความปลอดภัยและเสถียรภาพสำคัญกว่าการทำงานให้เร็วที่สุด

**📝 หมายเหตุ:** คู่มือนี้อัปเดตจากการวิเคราะห์ระบบจริง ณ วันที่ 15 สิงหาคม 2568