# ⏰ TASK SCHEDULER Modal (taskScheduler) - คู่มือการใช้งาน

{% hint style="success" %}
**คู่มือ TASK SCHEDULER Modal** - กำหนดตารางเวลาการขุดอัตโนมัติ วางแผนการใช้ทรัพยากรประจำวัน และสร้างระบบ Automation ขั้นสูง
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Pool Mineable Modal](pool-mineable-modal.md)** - การตั้งค่าการขุดขั้นสูง
- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modal จาก Dashboard
- **[Modal System Complete Guide](modal-guide-complete.md)** - คู่มือ Modal System ฉบับสมบูรณ์

## 📖 ภาพรวม TASK SCHEDULER Modal

### 🎯 **การเข้าถึง Modal**
**การเข้าถึง:** เมนูระบบ → modal taskScheduler

### 🎯 **คุณสมบัติหลัก**
- **กำหนดตารางเวลา** การขุดอัตโนมัติ
- **ตั้งค่าให้หยุด/เริ่ม** ทำงานตามเวลา
- **วางแผนการใช้ทรัพยากร** ประจำวัน
- **Automation Rules** สำหรับ mining operations

---

## 📋 วิธีใช้งาน TASK SCHEDULER

### **1️⃣ สร้างตารางเวลาใหม่**

#### **📅 Basic Schedule Setup**
```
Schedule Configuration:
├── Task Name: Daily Mining Schedule
├── Start Time: 06:00 AM
├── End Time: 22:00 PM
├── Days: Monday-Friday
├── Timezone: Bangkok (GMT+7)
└── Status: Active
```

#### **⚙️ Advanced Settings**
```
Advanced Options:
├── Repeat Pattern: Daily/Weekly/Custom
├── Exception Dates: Holidays, maintenance
├── Priority Level: High/Medium/Low
├── Resource Limits: CPU/NET constraints
├── Notification Settings: Email/SMS alerts
└── Failure Handling: Retry/Skip/Alert
```

---

### **2️⃣ เลือก Actions**

#### **🎯 Mining Operations**
```
Mining Actions:
├── 06:00 - Start Mining
│   ├── Enable all accounts
│   ├── Check resource availability
│   └── Initialize mining operations
├── 12:00 - Check Resources  
│   ├── Monitor CPU/NET levels
│   ├── Refill if necessary
│   └── Adjust mining rate
├── 18:00 - Collect TLM
│   ├── Gather mined tokens
│   ├── Transfer to main account
│   └── Update statistics
└── 22:00 - Stop Mining
    ├── Graceful shutdown
    ├── Save progress
    └── Generate daily report
```

#### **🔧 System Maintenance**
```
Maintenance Tasks:
├── Daily Cleanup: Clear cache, logs
├── Resource Check: Monitor usage
├── Security Scan: Check for issues
├── Backup: Save configurations
├── Update: Apply system updates
└── Report: Generate status report
```

---

### **3️⃣ บันทึกตารางเวลา**

#### **✅ Validation Process**
```
Schedule Validation:
├── Time Conflict Check: ตรวจสอบเวลาซ้อน
├── Resource Availability: ตรวจสอบทรัพยากร
├── Action Dependencies: ตรวจสอบการเชื่อมโยง
├── Permission Verification: ตรวจสอบสิทธิ์
└── Logic Validation: ตรวจสอบตรรกะ
```

#### **🚀 Activation**
```
Enable Scheduler:
├── Final Review: ตรวจสอบการตั้งค่า
├── Enable Scheduler: เปิดใช้งาน
├── First Run Test: ทดสอบครั้งแรก
├── Monitor Initial Execution: ติดตามการทำงาน
└── Adjust if Necessary: ปรับแต่งตามต้องการ
```

---

## 🚀 เคล็ดลับการใช้งานขั้นสูง

### **📊 Strategic Scheduling**

#### **⏰ Time Optimization**
```
Optimal Scheduling:
├── Peak Hours (18:00-22:00):
│   ├── Lower mining intensity
│   ├── Focus on maintenance tasks
│   └── Prepare for off-peak mining
├── Off-Peak Hours (22:00-06:00):
│   ├── Maximum mining intensity
│   ├── Heavy resource usage
│   └── Bulk operations
├── Business Hours (06:00-18:00):
│   ├── Moderate mining
│   ├── Resource monitoring
│   └── Administrative tasks
└── Weekend Strategy:
    ├── Extended mining hours
    ├── Maintenance windows
    └── Performance optimization
```

#### **🎯 Resource Management**
```
Dynamic Resource Allocation:
├── Monitor Network Congestion
├── Adjust Mining Rate Automatically
├── Scale Resources Up/Down
├── Optimize Cost vs Performance
└── Maintain Emergency Reserves
```

### **🤖 Automation Strategies**

#### **🔄 Smart Automation**
```
Intelligent Scheduling:
├── AI-based Optimization
├── Market Condition Responses
├── Network Status Adaptation
├── Performance-based Adjustments
└── Predictive Resource Planning
```

#### **📈 Performance-based Rules**
```
Adaptive Rules:
├── If Daily Yield > Target → Increase intensity
├── If Resource Cost > Limit → Reduce operations
├── If Network Congestion → Delay non-critical tasks
├── If Error Rate > Threshold → Enter safe mode
└── If Emergency → Override all schedules
```

---

## ⚠️ การแก้ไขปัญหาและความเสี่ยง

### **❌ Schedule Execution Issues**

#### **🚫 Tasks Not Running**
```
Common Causes:
├── Scheduler Disabled: Check enable status
├── Resource Conflicts: Monitor resource usage
├── Permission Issues: Verify account permissions
├── Network Problems: Check connectivity
└── System Overload: Monitor system resources

Solutions:
├── Restart Scheduler Service
├── Check System Logs
├── Verify Resource Availability
├── Update Permissions
└── Contact Support if Persistent
```

#### **⏳ Delayed Execution**
```
Performance Issues:
├── System Load: High CPU/memory usage
├── Network Latency: Slow connections
├── Queue Backlog: Too many concurrent tasks
├── Resource Shortage: Insufficient resources
└── Priority Conflicts: Task competition

Optimization:
├── Reduce Concurrent Tasks
├── Increase System Resources
├── Optimize Task Priority
├── Implement Load Balancing
└── Schedule Load Distribution
```

### **🛡️ Risk Management**

#### **⚠️ Automation Risks**
```
Risk Mitigation:
├── Backup Schedules: Multiple schedule copies
├── Manual Override: Emergency stop capability
├── Monitoring Alerts: Real-time notifications
├── Failure Recovery: Automatic retry mechanisms
├── Safety Limits: Maximum resource usage caps
└── Regular Reviews: Schedule performance analysis
```

---

## 💡 Best Practices

### **📋 Schedule Design**
```
Design Principles:
├── Start Simple: Begin with basic schedules
├── Test Thoroughly: Validate before deploying
├── Monitor Closely: Watch initial performance
├── Iterate Gradually: Make incremental improvements
├── Document Changes: Keep schedule history
└── Plan for Failures: Design recovery procedures
```

### **🔧 Maintenance**
```
Regular Maintenance:
├── Weekly: Review schedule performance
├── Monthly: Analyze execution statistics
├── Quarterly: Optimize based on patterns
├── Semi-annually: Major schedule reviews
└── Annually: Complete system audit
```

---

## 📊 การติดตาม Performance

### **📈 Scheduler Metrics**
```
Key Performance Indicators:
├── Execution Success Rate: อัตราสำเร็จงาน
├── Schedule Adherence: การปฏิบัติตามตาราง
├── Resource Utilization: การใช้ทรัพยากร
├── Task Completion Time: เวลาทำงานเสร็จ
├── Error Rate: อัตราการเกิดข้อผิดพลาด
└── Cost Efficiency: ประสิทธิภาพต้นทุน
```

### **📊 Reporting**
```
Scheduler Reports:
├── Daily Execution Summary
├── Weekly Performance Trends
├── Monthly Resource Usage
├── Task Success/Failure Analysis
└── Optimization Recommendations
```

---

## 🔗 ลิงก์ที่เกี่ยวข้อง

### **📚 คู่มือ Modal อื่นๆ**
- **[Pool Mineable Modal](pool-mineable-modal.md)** - การตั้งค่าการขุดขั้นสูง
- **[Cost Miner Config Modal](cost-miner-config-modal.md)** - การจัดการต้นทุน

### **🛠️ คู่มือการแก้ไขปัญหา**
- **[Troubleshooting Guide](../troubleshooting/common-issues.md)** - คู่มือแก้ไขปัญหาทั่วไป
- **[Dashboard Guide](dashboard-guide.md)** - คู่มือใช้งาน Dashboard

---

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** ตั้งให้หยุดขุดช่วงกลางคืนเพื่อประหยัดทรัพยากรและลดความเสี่ยง เริ่มต้นด้วย schedule ง่ายๆ แล้วค่อยเพิ่มความซับซ้อน อย่าลืม monitor ผลการทำงานเป็นประจำ
{% endhint %}

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง