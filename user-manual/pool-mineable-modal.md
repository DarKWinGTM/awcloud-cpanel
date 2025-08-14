# 📊 POOL MINEABLE Modal (poolMineable) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ POOL MINEABLE Modal** - หัวใจของการตั้งค่า Mining ควบคุมอัตราการขุดทุก Planet พร้อมระบบ Smart Mining Rate และการตรวจสอบ Pool แบบเรียลไทม์
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์
- **[Set Land Modal](set-land-modal.md)** - การเลือกพื้นที่การขุด

## 📖 ภาพรวม POOL MINEABLE Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** Dashboard หลัก → ปุ่ม "OPEN POOL RATE" (เมื่อเลื่อนลงมา)

{% hint style="info" %}
**Modal สำคัญ:** เป็นหัวใจของการตั้งค่า Mining - ควบคุมอัตราการขุดทุก Planet
{% endhint %}

### 🎯 **คุณสมบัติหลัก**
- **ตั้งค่าอัตราการขุด** สำหรับ 4 Planet หลัก (WAX, EOS, YEO, LIV)
- **Check Pool Before Mine** - ตรวจสอบสภาพ Pool ก่อนขุด
- **Smart Mining Rate** - ปรับอัตราตามสภาพ Pool อัตโนมัติ
- **Real-time Pool Status** - ดูสถานะ Pool แบบเรียลไทม์

---

## 🌍 การตั้งค่าแต่ละ Planet

### **🟡 WAX Pool Configuration**

#### **⚙️ การตั้งค่าพื้นฐาน**
```
Current Rate: 0.00 (ค่าเริ่มต้น)
ช่วงปรับได้: 0.00 - 2.00
สูตรเวลารอ: 160 x Rate = วินาทีรอ
ฟังก์ชั่น: Enable Check WAX Pool Before Mine
```

#### **📊 ตัวอย่างการคำนวณ**
```
Rate Examples:
├── Rate 0.50 = รอ 80 วินาที (160 x 0.50)
├── Rate 1.00 = รอ 160 วินาที (160 x 1.00)
└── Rate 2.00 = รอ 320 วินาที (160 x 2.00)
```

#### **💡 แนะนำการใช้งาน**
- **Rate 0.00-0.50:** สำหรับ beginners, รอสั้น
- **Rate 1.00:** สมดุล, เหมาะสำหรับการใช้งานทั่วไป
- **Rate 1.50-2.00:** สำหรับ advanced, รอนานแต่ได้เยอะ

---

### **🔵 EOS Pool Configuration**

#### **⚙️ การตั้งค่าพื้นฐาน**
```
Current Rate: 1.00 (ค่าเริ่มต้น) 
ช่วงปรับได้: 0.00 - 2.00
สูตรเวลารอ: 160 x Rate = วินาที
ฟังก์ชั่น: Enable Check EOS Pool Before Mine
```

#### **🌟 คุณสมบัติพิเศษ**
- **เสถียรภาพสูง:** EOS Pool มีความเสถียรมากที่สุด
- **เหมาะสำหรับมือใหม่:** ผลตอบแทนคงที่และคาดเดาได้
- **Low Risk:** ความเสี่ยงต่ำ, เหมาะสำหรับ conservative mining

#### **📈 Strategy แนะนำ**
```
Beginner Strategy:
├── Start Rate: 1.00
├── Monitor: 24 hours
├── Adjust: Based on results
└── Target: Consistent returns
```

---

### **🟣 YEO Pool Configuration**

#### **⚙️ การตั้งค่าพื้นฐาน**
```
Current Rate: 1.00 (ค่าเริ่มต้น)
ช่วงปรับได้: 1.00 - 3.00+ 
สูตรเวลารอ: สูตรซับซ้อน (Complex Formula)
```

#### **🧮 สูตรการคำนวณ YEO**
```
Formula Breakdown:
Base Time = 600 x (Rate ≥ 1.0 ? 1.0 : Rate)
Bonus Time = 90 x (((Rate - 1.0) x 10) / 1.25)
Total Wait = Base Time + Bonus Time (วินาที)
```

#### **📊 ตัวอย่างการคำนวณ**
```
Rate Examples:
├── Rate 1.00 = 600 วินาที (10 นาที)
├── Rate 1.50 = 600 + 288 = 888 วินาที (14.8 นาที)
├── Rate 2.00 = 600 + 576 = 1176 วินาที (19.6 นาที)
└── Rate 3.00 = 600 + 1440 = 2040 วินาที (34 นาที)
```

#### **🎯 Advanced Strategies**
```
YEO Optimization:
├── Rate 1.0-1.5: Balanced approach
├── Rate 1.5-2.0: Higher returns, moderate wait
├── Rate 2.0-3.0: Maximum returns, long wait
└── Monitor: Pool saturation levels
```

---

### **🟢 LIV Pool Configuration**

#### **⚙️ การตั้งค่าพื้นฐาน**
```
Current Rate: 1.00 (ค่าเริ่ต้น)
ช่วงปรับได้: 1.00 - 3.00+
สูตรเวลารอ: เหมือน YEO Pool (สูตรเดียวกัน)
```

#### **🧮 สูตรการคำนวณ LIV**
```
Formula (Same as YEO):
Base Time = 600 x (Rate ≥ 1.0 ? 1.0 : Rate) 
Bonus Time = 90 x (((Rate - 1.0) x 10) / 1.25)
Total = Base + Bonus วินาที
```

#### **⚡ คุณสมบัติพิเศษ**
- **ผลตอบแทนสูง:** LIV Pool ให้ผลตอบแทนสูงกว่าเฉลี่ย
- **ความเสี่ยงมากกว่า:** Volatility สูงกว่า planets อื่น
- **สำหรับ Advanced:** เหมาะสำหรับผู้ที่มีประสบการณ์

#### **🎯 Risk Management**
```
LIV Pool Strategy:
├── Start Conservative: Rate 1.0-1.2
├── Monitor Performance: Track ROI
├── Scale Gradually: Increase rate slowly
├── Diversify: Don't put all in LIV
└── Emergency Plan: Quick exit strategy
```

---

## 📋 วิธีการใช้งาน Step-by-Step

### **1️⃣ เปิด Pool Mineable Modal**
```
Navigation Path:
Dashboard → เลื่อนลงมา → คลิก "OPEN POOL RATE"
```

### **2️⃣ เลือก Planet ที่ต้องการตั้งค่า**
```
Available Tabs:
├── WAX: เสถียร, เหมาะมือใหม่
├── EOS: ความเสถียรสูงสุด
├── YEO: สมดุล, ผลตอบแทนดี
└── LIV: ผลตอบแทนสูง, ความเสี่ยงสูง
```

### **3️⃣ ปรับค่า Mining Rate**
```
Rate Adjustment Process:
1. ลาก Slider ไปยังค่าที่ต้องการ
2. ระบบแสดงข้อมูล:
   ├── CHANGED RATE: ค่าใหม่ที่เลือก
   ├── เวลารอใหม่ (วินาที)
   └── สถานะ Pool Check
3. ระบบ Auto-Save เมื่อปล่อย Slider
4. "CURRENT RATE" จะอัปเดตเป็นค่าใหม่
```

### **4️⃣ ยืนยันการตั้งค่า**
```
Confirmation Process:
├── ระบบ Auto-Save การตั้งค่า
├── แสดง "CURRENT RATE" ใหม่
├── เริ่มใช้ rate ใหม่ในการขุดครั้งถัดไป
└── Monitor ผลการทำงาน
```

---

## 💡 เคล็ดลับการใช้งาน

### **🌱 สำหรับผู้เริ่มต้น**
```
Beginner Settings:
├── WAX Pool: เริ่มที่ Rate 0.50-1.00
├── EOS Pool: ใช้ Rate 1.00 (ค่าเริ่มต้น)
├── YEO/LIV: เริ่มที่ Rate 1.00 ก่อน
└── Strategy: Conservative approach
```

### **⚡ สำหรับผู้เชี่ยวชาญ**
```
Advanced Optimization:
├── Monitor Pool Status: ดู Pool efficiency ก่อนปรับ Rate
├── Peak Hours: ลด Rate ช่วงคนใช้เยอะ (เย็น-กลางคืน)
├── Off-Peak: เพิ่ม Rate ช่วงคนใช้น้อย (เช้า-บ่าย)
├── Dynamic Adjustment: ปรับตาม real-time conditions
└── Multi-Planet: กระจายการขุดหลาย planets
```

### **📊 Performance Monitoring**
```
Key Metrics to Track:
├── TLM per Hour: ผลผลิตต่อชั่วโมง
├── Success Rate: อัตราสำเร็จการขุด
├── Pool Efficiency: ประสิทธิภาพ pool
├── Network Congestion: ความแออัดของ network
└── Cost-Benefit Ratio: อัตราส่วนต้นทุนและผลตอบแทน
```

---

## ⚠️ ข้อควรระวัง

### **🚨 การตั้งค่าที่ควรหลีกเลี่ยง**
```
Avoid These Settings:
❌ Rate สูงเกินไป = รอนาน, ได้ผลน้อย
❌ Rate ต่ำเกินไป = Pool ล้น, competition สูง
❌ ไม่ดู Pool Stats = ตัดสินใจแบบตาบอด
❌ ปรับบ่อยเกินไป = ไม่ได้ข้อมูลที่แม่นยำ
❌ ใส่หมดใน Pool เดียว = ความเสี่ยงสูง
```

### **📈 Best Practices**
```
Optimization Guidelines:
✅ เริ่มต้นด้วย conservative rates
✅ Monitor ผล 24-48 ชั่วโมงก่อนปรับ
✅ ดู Pool Statistics เป็นประจำ
✅ ปรับตาม network conditions
✅ เก็บ backup data สำหรับ analysis
✅ มี emergency plan ไว้เสมอ
```

---

## 📊 การติดตาม Performance

### **📈 KPIs ที่สำคัญ**
```
Performance Metrics:
├── Pool Efficiency Rate
├── Average Mining Yield
├── Network Success Rate
├── Time-to-Return Ratio
└── Resource Utilization
```

### **🔧 Troubleshooting**
```
Common Issues:
├── Pool Overloaded: ลด Rate หรือเปลี่ยน Planet
├── Low Returns: เพิ่ม Rate หรือปรับ timing
├── Network Errors: ตรวจสอบ connection
├── Rate Not Saving: Refresh browser
└── Pool Check Failed: ตรวจสอบ Pool status
```

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Modal อื่นๆ**
- **[Set Land Modal](set-land-modal.md)** - การเลือกพื้นที่การขุด
- **[Box NFT Modal](box-nft-modal.md)** - การจัดการ Mining Tools
- **[Task Scheduler Modal](task-scheduler-modal.md)** - การตั้งเวลาการขุด

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป
- **[Dashboard Guide](dashboard-guide.md)** - คู่มือใช้งาน Dashboard

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** Pool Mineable Modal เป็น Modal ที่สำคัญที่สุดสำหรับ Mining optimization เริ่มต้นด้วย conservative settings แล้วค่อยปรับเพิ่มเมื่อเข้าใจระบบแล้ว อย่าลืม monitor Pool Stats ก่อนตัดสินใจเสมอ
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง