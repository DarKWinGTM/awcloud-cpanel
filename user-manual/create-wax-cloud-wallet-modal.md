# ☁️ CREATE WAX CLOUD WALLET Modal - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ CREATE WAX CLOUD WALLET Modal** - สร้าง WAX Cloud Wallet อัตโนมัติแบบ 3 ขั้นตอน พร้อมระบบ Task-based processing สำหรับการจัดการ accounts จำนวนมาก
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์
- **[Create Anchor Wallet Modal](create-anchor-wallet-modal.md)** - สร้าง Anchor Wallet

## 📖 ภาพรวม CREATE WAX CLOUD WALLET Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** คลิกปุ่ม "CREATE WAX CLOUD WALLET" (สีเขียว) ในส่วน Wallet Management

### 🏗️ **ภาพรวมระบบ**
ระบบสร้าง WAX Cloud Wallet อัตโนมัติผ่าน AWCLOUD CPanel ที่มี **3 ขั้นตอนหลัก** โดยใช้ระบบ Task-based processing เพื่อจัดการการสร้าง accounts จำนวนมาก (1-20 accounts ต่อ task)

### 🎛️ **ส่วนควบคุมหลัก (Main Controls)**
- **Dropdown TASK ID** - เลือก task ที่มีอยู่หรือสร้างใหม่
- **CREATE NEW TASK** - สร้าง task ใหม่สำหรับการสร้าง accounts
- **AMOUNT Slider** - เลือกจำนวน accounts ที่จะสร้าง (1-20)
- **WAX CLOUD WALLET TABLE** - แสดงสถานะ accounts ในรูปแบบตาราง

---

## 📋 3 ขั้นตอนการสร้าง WAX Cloud Wallet

### **1️⃣ STEP 1: CREATE AND REGISTERING**

#### **🎯 หน้าที่**
**สร้าง task และลงทะเบียน account name ใหม่**

#### **📋 กระบวนการ**
1. **เลือก TASK ID:** เลือกจาก dropdown หรือสร้างใหม่
2. **กำหนดจำนวน accounts:** ด้วย Amount slider (1-20)
3. **คลิก "CREATE NEW TASK":** เพื่อเริ่มกระบวนการ
4. **คลิก "TRYING":** เพื่อเริ่มสร้าง accounts

#### **📊 สถานะการทำงาน**
```
Status Progression:
├── Status 1: Initiating account creation
├── Status 2: Generating account names
├── Status 3: Submitting to WAX network
├── Status 4: Waiting for confirmation
└── Status 5: Registration complete ✅
```

#### **💰 ค่าใช้จ่าย**
- **Cost:** 0.5 WAX ต่อ account
- **Payment:** จ่ายจาก Master Key
- **Minimum:** ต้องมี WAX เพียงพอใน master account

#### **⚙️ ตัวเลือกเพิ่มเติม**
- **DELETE** - ลบ task ที่เลือก
- **FORMAT** - จัดรูปแบบข้อมูลในตาราง

---

### **2️⃣ STEP 2: ACTIVE AND PAY FEES WALLET**

#### **🎯 หน้าที่**
**เปิดใช้งาน wallet และชำระค่าธรรมเนียม**

#### **📋 ข้อกำหนด**
- Account ต้องมี **Status = 5** (ลงทะเบียนสมบูรณ์แล้ว)

#### **💳 โหมดการเปิดใช้งาน**
```
Available Activation Modes:

🟢 Binance Mode (แนะนำ - Active):
├── Fee: 0.7 WAX per account
├── Speed: Fast processing
├── Reliability: High success rate
└── Status: Currently available

🔴 Exchange (OKX) Mode (ปิดใช้งาน):
├── Fee: 1.1 WAX per account
├── Status: Temporarily disabled
└── Reason: Maintenance

🔴 Basic Transfer Mode (ปิดใช้งาน):
├── Fee: 0.5 WAX per account
├── Status: Temporarily disabled
└── Reason: Network optimization
```

#### **⚙️ การตั้งค่า**
1. **เลือก Active Mode:** ปัจจุบันใช้ Binance เท่านั้น
2. **กำหนดจำนวน WAX:** 
   ```
   Default Amount: 10 WAX
   Minimum: 10 WAX
   Maximum: 1,000 WAX
   Recommended: 10-50 WAX for mining
   ```
3. **คลิก "ACTIVE":** เพื่อเริ่มกระบวนการเปิดใช้งาน

#### **📊 สถานะหลังการทำงาน**
- **Status = 6:** สร้าง transaction สำหรับเปิดใช้งาน

---

### **3️⃣ STEP 3: INTEND SETUP AND CLAIM SOFT KEY**

#### **🎯 หน้าที่**
**ตั้งค่าขั้นสุดท้ายและรับ private keys**

#### **📋 ข้อกำหนด**
- Account ต้องมี **Status = 6** (เปิดใช้งานแล้ว)

#### **🔐 กระบวนการ**
1. **ตรวจสอบสถานะ:** ให้แน่ใจว่า account มี Status = 6
2. **คลิก "INTEND":** เพื่อเริ่มกระบวนการสุดท้าย
3. **รับ Private Keys:** ระบบจะสร้างและส่งมอบ private keys

#### **✅ สถานะสุดท้าย**
- **Status = 7:** สร้างและรับ private key สมบูรณ์

---

## 📊 ระบบติดตามสถานะ (Status Monitoring)

### **🔄 สถานะต่างๆ ในระบบ**
```
Status Codes Explained:

Status 1-4: 🔄 Processing Phase
├── Account creation in progress
├── Network registration pending
└── Waiting for blockchain confirmation

Status 5: ✅ Registration Complete
├── Ready for STEP 2 (Activation)
├── Account name reserved
└── Proceed to fee payment

Status 6: ✅ Activation Complete  
├── Ready for STEP 3 (Key Claim)
├── Account funded and active
└── Proceed to final setup

Status 7: 🎉 Fully Complete
├── Account ready for use
├── Private keys available
└── Ready for mining operations
```

### **📈 การติดตามแบบ Real-time**
- **WAX CLOUD WALLET TABLE:** แสดงสถานะทุก account
- **Automatic Updates:** อัปเดตสถานะอัตโนมัติ
- **Task Progress:** แสดงความคืบหน้าของแต่ละ task
- **Notification System:** แจ้งเตือนเมื่อเปลี่ยนสถานะ

---

## ⚠️ ข้อควรระวังและข้อกำหนด

### **🛡️ ความรับผิดชอบ**
{% hint style="warning" %}
- **ผู้ใช้ยอมรับความเสี่ยงทั้งหมด** ในการใช้งาน
- **AWCLOUD ไม่รับผิดชอบ** ต่อการใช้งานและความเสี่ยงที่เกิดขึ้น
- **การสร้าง account เป็นความเสี่ยงของผู้ใช้เอง**
{% endhint %}

### **📏 ข้อจำกัดการใช้งาน**
```
System Limitations:
├── Maximum: 20 accounts per task
├── Minimum WAX: Required in Master Key
├── Processing Time: Several minutes per task
├── Network Dependency: Requires stable connection
└── Sequential Processing: One step at a time
```

### **💰 ข้อกำหนดทางการเงิน**
```
Financial Requirements:
├── Step 1: 0.5 WAX per account
├── Step 2: 0.7 WAX per account (Binance mode)
├── Step 3: Additional WAX for account funding
├── Total Minimum: ~11.2 WAX per account
└── Recommended Reserve: Extra 20% for fees
```

---

## 💡 Tips การใช้งานอย่างมีประสิทธิภาพ

### **📋 การจัดการ Task**
```
Task Management Best Practices:
├── Start Small: Begin with 5-10 accounts
├── Descriptive Names: Use meaningful task names
├── Monitor Progress: Check status regularly
├── Sequential Processing: Complete one step before next
└── Backup Data: Save account information
```

### **💰 การประหยัดค่าใช้จ่าย**
```
Cost Optimization:
├── Use Binance Mode: Lowest available fee
├── Plan Account Numbers: Create exactly what you need
├── Batch Processing: Process multiple tasks together  
├── Reserve Management: Keep adequate WAX reserve
└── Timing: Create during low network congestion
```

### **🔒 การรักษาความปลอดภัย**
```
Security Best Practices:
├── Secure Storage: Store account names and keys safely
├── Private Access: Don't share task IDs
├── Regular Monitoring: Check account status frequently
├── Backup Strategy: Multiple secure backups
└── Access Control: Limit who can access the system
```

---

## 🔧 การแก้ไขปัญหาที่พบบ่อย

### **❌ Task Creation Failed**
```
Common Issues:
├── Insufficient WAX: Not enough in master account
├── Network Issues: Blockchain connectivity problems
├── Invalid Parameters: Incorrect settings
└── System Overload: Too many concurrent tasks

Solutions:
├── Check Master Account Balance
├── Verify Network Connection  
├── Review Task Settings
└── Retry During Off-Peak Hours
```

### **⏳ Slow Processing**
```
Performance Issues:
├── Network Congestion: High blockchain load
├── Large Batch Size: Too many accounts at once
├── Peak Hours: High system usage
└── Technical Issues: System maintenance

Optimization:
├── Smaller Batches: Reduce accounts per task
├── Off-Peak Timing: Process during quiet hours
├── Patience: Allow adequate processing time
└── Monitor Status: Check progress regularly
```

### **🔄 Stuck Status**
```
Status Not Updating:
├── Blockchain Delays: Network confirmation pending
├── System Sync Issues: Database update lag
├── Technical Glitches: Temporary system issues
└── User Error: Incorrect procedure

Troubleshooting:
├── Wait 5-10 minutes for updates
├── Refresh browser/reconnect
├── Verify you followed correct steps
└── Contact support if persistent
```

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Modal อื่นๆ**
- **[Create Anchor Wallet Modal](create-anchor-wallet-modal.md)** - สร้าง Anchor Wallet
- **[Register Wallet Sign Modal](register-wallet-sign-modal.md)** - ลงทะเบียน Wallet Signature
- **[Setup Soft Private Key Modal](setup-soft-private-key-modal.md)** - ตั้งค่า Private Key

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป
- **[Dashboard Guide](dashboard-guide.md)** - คู่มือใช้งาน Dashboard

### **🌐 External Resources**
- **[WAX Cloud Wallet](https://all-access.wax.io/)** - Official WAX Cloud Wallet
- **[WAX Explorer](https://waxblock.io/)** - ตรวจสอบ account status

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** เริ่มต้นด้วย task เล็กๆ (5-10 accounts) เพื่อทดสอบกระบวนการก่อน ตั้งชื่อ task ให้สื่อความหมาย และตรวจสอบสถานะเป็นระยะจนกว่าจะเสร็จสมบูรณ์ อย่าลืมเก็บข้อมูล account และ private keys ไว้อย่างปลอดภัย
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง