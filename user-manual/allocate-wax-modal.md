# 🔄 ALLOCATE WAX Modal (allocateWax) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ ALLOCATE WAX Modal** - กระจาย WAX ไปหลาย Account แบบมีประสิทธิภาพ พร้อมระบบการแจกจ่ายอัตโนมัติ
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์
- **[Transfer Wax Modal](transfer-wax-modal.md)** - การโอน Token แบบเดี่ยว

## 📖 ภาพรวม ALLOCATE WAX Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** ปุ่มหลักในระบบ → modal allocateWax

### 🎯 **คุณสมบัติหลัก**
- **กระจาย WAX** ไปหลาย account พร้อมกัน
- **ตั้งค่าจำนวนและอัตรา** การแจกจ่าย
- **รองรับการแจกจ่าย** แบบเท่าๆ กันหรือตามสัดส่วน
- **Automation Support** สำหรับการแจกจ่ายประจำ

---

## 📋 วิธีใช้งาน Step-by-Step

### **1️⃣ เลือก Source Account**

#### **🎯 การตั้งค่า Source**
- **เลือก Master Account:** เลือก account หลักที่มี token (เช่น masteraccount)
- **ตรวจสอบยอดคงเหลือ:** ดูยอด WAX ที่มีอยู่ก่อนแจกจ่าย
- **คำนวณค่าธรรมเนียม:** สำรอง WAX สำหรับ transaction fees

#### **💡 เคล็ดลับการเลือก Source**
```
แนะนำใช้:
✓ Account ที่มี WAX เพียงพอ
✓ Master account ที่มี authority
✓ Account ที่มี CPU/NET เพียงพอ

หลีกเลี่ยง:
❌ Mining accounts (เก็บ WAX ไว้สำหรับค่าธรรมเนียม)
❌ Accounts ที่มี resources จำกัด
❌ Temporary accounts
```

---

### **2️⃣ กำหนด Target Accounts**

#### **📝 การใส่ Account Lists**
- **Manual Input:** ใส่รายชื่อ accounts ทีละบรรทัด
- **Bulk Import:** นำเข้าจากไฟล์ CSV หรือ text file
- **Account Groups:** ใช้กลุ่ม accounts ที่บันทึกไว้แล้ว

#### **📋 รูปแบบการใส่ข้อมูล**
```
Format Options:

Single Account per Line:
account1.wam
account2.wam  
account3.wam

With Amount Specification:
account1.wam:10.0000
account2.wam:15.0000
account3.wam:5.0000

CSV Format:
account1.wam,10.0000,Mining Account 1
account2.wam,15.0000,Mining Account 2
```

#### **✅ การตรวจสอบ Account Names**
- **Validation:** ระบบจะตรวจสอบ account names ทั้งหมด
- **Error Handling:** แสดงรายการ accounts ที่มีปัญหา
- **Confirmation:** ยืนยันรายการก่อนดำเนินการ

---

### **3️⃣ ตั้งค่าการแจกจ่าย**

#### **💰 Distribution Methods**

**🟢 Equal Distribution (แจกเท่าๆ กัน):**
```
Total Amount: 100 WAX
Target Accounts: 5 accounts
Result: 20 WAX per account

Calculation:
100 WAX ÷ 5 accounts = 20 WAX each
```

**🔵 Proportional Distribution (ตามสัดส่วน):**
```
Account Weights:
account1.wam: Weight 3
account2.wam: Weight 2  
account3.wam: Weight 1

Total Amount: 60 WAX
Distribution:
account1.wam: 30 WAX (50%)
account2.wam: 20 WAX (33.3%)
account3.wam: 10 WAX (16.7%)
```

**🟡 Custom Distribution (กำหนดเอง):**
```
Manual Specification:
account1.wam: 25 WAX
account2.wam: 35 WAX
account3.wam: 40 WAX
Total: 100 WAX
```

#### **⚙️ Advanced Settings**
- **Minimum Amount:** กำหนดจำนวนขั้นต่ำต่อ account
- **Maximum Amount:** กำหนดจำนวนสูงสุดต่อ account
- **Fee Handling:** เลือกว่าจะหักค่าธรรมเนียมจากใคร
- **Batch Size:** กำหนดจำนวน transactions ต่อ batch

---

### **4️⃣ ยืนยันการทำงาน**

#### **📊 Review Summary**
```
Distribution Summary:
├── Source Account: masteraccount.wam
├── Total Amount: 500.0000 WAX
├── Number of Recipients: 10
├── Distribution Method: Equal
├── Amount per Account: 50.0000 WAX
├── Estimated Fees: 0.5000 WAX
└── Total Required: 500.5000 WAX
```

#### **🔍 Final Validation**
- **Balance Check:** ยืนยันว่ามี WAX เพียงพอ
- **Account Verification:** ตรวจสอบ accounts ทั้งหมดอีกครั้ง
- **Fee Calculation:** คำนวณค่าธรรมเนียมรวม
- **Network Status:** ตรวจสอบสถานะ blockchain

#### **✅ Execute Allocation**
- **Confirmation Dialog:** ยืนยันขั้นสุดท้าย
- **Batch Processing:** ประมวลผลทีละ batch
- **Progress Tracking:** ติดตามความคืบหน้า
- **Error Handling:** จัดการกับ transactions ที่ล้มเหลว

---

## 🚀 เคล็ดลับการใช้งานขั้นสูง

### **📈 Automation Strategies**

#### **🔄 Scheduled Distribution**
```
Daily Mining Fund Distribution:
├── Time: Every day at 06:00 AM
├── Source: revenue.wam
├── Condition: Balance > 100 WAX
├── Keep Reserve: 20 WAX
├── Distribute: 80% of excess
└── Recipients: All mining accounts
```

#### **📊 Performance-Based Distribution**
```
Merit-Based Allocation:
├── High Performers: 40% of total
├── Medium Performers: 35% of total
├── New Accounts: 25% of total
└── Based on: Previous day's mining results
```

### **💡 Best Practices**

#### **🎯 Strategic Planning**
1. **Account Grouping:** จัดกลุ่ม accounts ตามหน้าที่
2. **Reserve Management:** เก็บ reserve funds เสมอ
3. **Distribution Timing:** เลือกเวลาที่ network congestion ต่ำ
4. **Monitoring:** ติดตามผลการแจกจ่ายเป็นประจำ

#### **⚠️ Risk Management**
```
Risk Mitigation:
✓ Test with small amounts first
✓ Backup account lists
✓ Monitor failed transactions  
✓ Keep emergency funds
✓ Regular account audits
```

---

## 🔧 การแก้ไขปัญหาที่พบบ่อย

### **❌ Transaction Failed**

#### **🔍 สาเหตุที่พบบ่อย:**
- **Insufficient Balance:** WAX ไม่เพียงพอ
- **Invalid Account:** Account name ผิดหรือไม่มีอยู่
- **Network Congestion:** Blockchain overloaded
- **Resource Shortage:** CPU/NET หมด

#### **🛠️ วิธีแก้:**
```
Systematic Troubleshooting:
1. Check Source Account Balance
2. Validate All Target Accounts  
3. Verify Network Status
4. Review Resource Availability
5. Retry Failed Transactions
```

### **⏳ Slow Processing**

#### **🔍 สาเหตุ:**
- **Large Batch Size:** ส่งครั้งละมากเกินไป
- **Network Congestion:** Peak usage hours
- **Resource Limitations:** CPU/NET constraints

#### **🛠️ วิธีแก้:**
- **Reduce Batch Size:** ลดจำนวน transactions ต่อ batch
- **Time Scheduling:** เลือกเวลาที่เหมาะสม
- **Resource Management:** เพิ่ม stake หรือใช้ rental

### **🚫 Account Validation Errors**

#### **🔍 ปัญหาที่พบ:**
- **Non-existent Accounts:** Account ไม่มีอยู่จริง
- **Inactive Accounts:** Account ไม่ active
- **Permission Issues:** ไม่มีสิทธิ์ส่งไป account นั้น

#### **🛠️ การแก้ไข:**
```
Account Troubleshooting:
1. Verify Account Names
2. Check Account Status
3. Test with Small Amount
4. Remove Problem Accounts
5. Update Account Lists
```

---

## 📊 การติดตาม Performance

### **📈 KPIs ที่สำคัญ**

#### **💰 Financial Metrics**
- **Total Distribution Volume:** ปริมาณ WAX ที่แจกจ่าย
- **Average Distribution Size:** ขนาดการแจกจ่ายเฉลี่ย
- **Cost per Transaction:** ต้นทุนต่อ transaction
- **Success Rate:** อัตราสำเร็จของการแจกจ่าย

#### **⚡ Operational Metrics**
- **Processing Time:** เวลาที่ใช้ในการประมวลผล
- **Batch Efficiency:** ประสิทธิภาพ batch processing
- **Error Rate:** อัตราการเกิดข้อผิดพลาด
- **Network Utilization:** การใช้งาน network resources

### **📊 Reporting & Analytics**

#### **📋 Distribution Reports**
```
Daily Report:
├── Total Allocated: 1,250 WAX
├── Successful Transfers: 47/50
├── Failed Transfers: 3/50
├── Total Fees: 2.35 WAX
├── Processing Time: 3.2 minutes
└── Success Rate: 94%
```

#### **📈 Trend Analysis**
- **Distribution Volume Trends:** แนวโน้มปริมาณการแจกจ่าย
- **Cost Analysis:** วิเคราะห์ต้นทุน
- **Performance Optimization:** การปรับปรุงประสิทธิภาพ
- **Account Performance:** ประสิทธิภาพของ recipient accounts

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Modal อื่นๆ**
- **[Transfer Wax Modal](transfer-wax-modal.md)** - การโอน Token แบบเดี่ยว
- **[Stake Wax Modal](stake-wax-modal.md)** - การจัดการทรัพยากร
- **[Swap TLM Modal](swap-tlm-modal.md)** - การแลกเปลี่ยน Token

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป
- **[Dashboard Guide](dashboard-guide.md)** - คู่มือใช้งาน Dashboard

### **🌐 External Resources**
- **[WAX Explorer](https://waxblock.io/)** - ตรวจสอบ transaction status
- **[Account Validator](https://tools.waxdao.io/)** - ตรวจสอบ account names

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** ใช้สำหรับแจกจ่าย WAX ให้ mining accounts หลายตัวพร้อมกัน เริ่มด้วยจำนวนเล็กเพื่อทดสอบก่อน และเก็บ WAX สำรองไว้เสมอสำหรับเหตุฉุกเฉิน
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง