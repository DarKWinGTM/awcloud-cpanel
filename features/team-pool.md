# 👥 Team Pool System

## ภาพรวมระบบ Team Pool

**Team Pool System** เป็นหัวใจสำคัญของ AWCLOUD CPanel ที่ใช้จัดการการขุดแบบ multi-account อย่างมีประสิทธิภาพ ระบบนี้ใช้ **AWTEAM Core Engine** ในการประสานงานระหว่าง accounts หลายบัญชีเพื่อให้การขุดเป็นไปอย่างราบรื่น

{% hint style="info" %}
**AWTEAM System** คือเครื่องมือจัดการ team mining ที่ซับซ้อนที่สุดใน AWCLOUD ซึ่งสามารถประสานงาน miner accounts และ dummy accounts ได้อย่างมีประสิทธิภาพ
{% endhint %}

## โครงสร้างระบบ Team Pool

### 🏗️ **โครงสร้าง AWTEAM System**

ระบบ AWTEAM ประกอบด้วยส่วนประกอบหลัก 3 ส่วน:

#### **ส่วนจัดการหลัก (Core Components)**
- **Team Manager**: ควบคุมการทำงานของทั้งระบบ
- **Resource Pool**: จัดการทรัพยากร CPU/RAM/NET ของ accounts
- **Account Pool**: จัดการ accounts ทั้ง miner และ dummy

#### **ส่วนควบคุมการทำงาน (Operation Components)**  
- **Mining Queue**: จัดคิวการขุดและการทำงาน
- **Ban Detection**: ระบบตรวจจับและหลีกเลี่ยง ban wave
- **Status Monitor**: ติดตามสถานะแบบเรียลไทม์

## ประเภทของ Accounts ในระบบ

### 🎯 **Miner Accounts**
- **หน้าที่หลัก**: ทำการขุด Alien Worlds
- **การจัดการทรัพยากร**: ต้องมี CPU/RAM/NET เพียงพอ
- **ข้อกำหนด**: WAX balance ต้องมากกว่า 0.3 WAX
- **การตรวจสอบ**: ระบบตรวจสอบ resource availability แบบเรียลไทม์

### 🛡️ **Dummy Accounts**
- **หน้าที่หลัก**: สร้าง buy offers และรับ NFT transfers
- **การทำงาน**: ช่วยแบ่งปันภาระงานจาก miner accounts
- **ข้อกำหนด**: CPU ต้องมากกว่า 600, RAM available ต้องมากกว่า 600
- **การประสานงาน**: ทำงานร่วมกับ miner accounts แบบอัตโนมัติ

## กลไกการทำงานของ AWTEAM

### ⚡ **Resource Management Logic**

#### 1. **CPU Management**
- ตรวจสอบ CPU ของ miner account แบบเรียลไทม์
- สลับไปใช้ dummy account หรือหยุดชั่วคราวเมื่อ CPU ต่ำกว่า 600

#### 2. **RAM Management**
- ตรวจสอบ RAM availability อย่างต่อเนื่อง
- ทำ RAM cleanup หรือใช้ account อื่นเมื่อ RAM ไม่เพียงพอ

#### 3. **WAX Balance Management**
- ตรวจสอบ WAX balance ก่อนทำธุรกรรม
- หยุดการขุดและแจ้งเตือนเมื่อ WAX ต่ำกว่า 0.3

### 🔄 **Team Coordination Process**

#### **ขั้นตอนที่ 1: Pool Validation**
- ตรวจสอบว่า team members ทั้งหมดอยู่ใน pool
- ยืนยันสถานะของ miner และ dummy accounts
- ตรวจสอบความพร้อมของทรัพยากร

#### **ขั้นตอนที่ 2: Resource Allocation**
- กำหนด main account สำหรับ mining operation
- จัดสรร dummy accounts สำหรับ support operations
- ตั้งค่า backup accounts สำหรับ failover

#### **ขั้นตอนที่ 3: Mining Execution**
- เริ่มการขุดด้วย main miner account
- ใช้ dummy accounts สำหรับ NFT operations
- ตรวจสอบสถานะแบบเรียลไทม์

### 🚨 **Ban Wave Avoidance System**

#### **Detection Mechanisms**
- **All Miner Flag Detection**: ตรวจจับเมื่อ miners ทั้งหมดถูก flag
- **Pause Detection**: ระบุเมื่อ accounts ถูกสั่งหยุดชั่วคราว
- **Resource Monitoring**: ติดตาม CPU/RAM usage patterns

#### **Avoidance Strategies**
- **เมื่อตรวจพบ ban wave**: หยุดการทำงาน 20-60 วินาทีแบบสุ่ม
- **เมื่อ accounts ถูก pause**: รอสักครู่ก่อนเริ่มใหม่
- **Random Timing**: ใช้เวลาแบบสุ่มเพื่อหลีกเลี่ยงการตรวจจับ

## การตั้งค่า Team Pool

### 📋 **ข้อกำหนดพื้นฐาน**

1. **Minimum Team Size**: อย่างน้อย 2 accounts (1 miner + 1 dummy)
2. **Resource Requirements**:
   - Miner: CPU > 600, RAM > 600, WAX > 0.3
   - Dummy: CPU > 600, RAM > 600
3. **Network Requirements**: เชื่อมต่อ WAX RPC nodes ที่เสถียร

### ⚙️ **การกำหนดค่า Team**

#### **1. Team Registration**
การลงทะเบียน team ประกอบด้วยการกำหนด:
- **ชื่อ Team**: ตั้งชื่อให้กับ team ของคุณ
- **Miner Accounts**: กำหนด accounts ที่จะทำหน้าที่ขุด (เช่น account1.wam, account2.wam)
- **Dummy Accounts**: กำหนด accounts ที่จะช่วยงาน (เช่น dummy1.wam, dummy2.wam)  
- **การตั้งค่า**: กำหนดช่วงเวลาการขุด (300 วินาที), ขีดจำกัดทรัพยากร (600), และเปิดใช้งาน failover

#### **2. Account Pool Setup**
- กำหนด role ของแต่ละ account
- ตั้งค่า priority order สำหรับ failover
- กำหนด resource limits และ thresholds

## การติดตามและการจัดการ

### 📊 **Real-time Monitoring**

#### **การแสดงสถานะ Team**
ในหน้า dashboard จะแสดงข้อมูลสถานะ team ดังนี้:
- **ชื่อ Team**: แสดงชื่อของ team (เช่น alpha_team)
- **Miner Accounts**: จำนวน miner accounts ที่กำลังทำงาน (เช่น 3/3 Active)
- **Dummy Accounts**: จำนวน dummy accounts ที่พร้อมใช้งาน (เช่น 2/2 Ready)
- **Resource Pool**: เปอร์เซ็นต์ทรัพยากรที่ใช้ได้ (เช่น 85% Available)
- **Status**: สถานะการทำงานปัจจุบัน (Mining Active, Paused, Error)

#### **Individual Account Status**
- **CPU Available**: แสดงค่า CPU ที่เหลือ
- **RAM Usage**: แสดงการใช้งาน RAM
- **Last Activity**: เวลาการทำงานล่าสุด
- **Operation Status**: สถานะการทำงานปัจจุบัน

### 🔧 **Team Management Operations**

#### **การเพิ่ม/ลบ Account**
- **เพิ่ม miner account ใหม่**: ผ่านระบบจัดการ team
- **เพิ่ม dummy account**: เพิ่มเข้าไปใน team pool
- **ลบ account ออกจาก team**: ลบและอัปเดต team configuration

#### **การปรับแต่ง Team Settings**
- **Mining Frequency**: ความถี่ในการขุด
- **Resource Thresholds**: ขีดจำกัดทรัพยากร
- **Failover Rules**: กฎการสลับ account
- **Timing Patterns**: รูปแบบการทำงาน

## Best Practices

### ✅ **ข้อแนะนำการใช้งาน**

1. **ใช้ Dummy Accounts อย่างเพียงพอ**: อัตราส่วน 1:1 หรือ 2:1 ระหว่าง miner:dummy
2. **ตรวจสอบ Resources เป็นประจำ**: ตั้งค่า alert เมื่อทรัพยากรต่ำ
3. **กระจาย Mining Times**: หลีกเลี่ยงการขุดพร้อมกันทุก account
4. **สำรอง WAX**: เตรียม WAX สำหรับ transaction fees
5. **Monitor Ban Patterns**: ติดตาม patterns ของ ban waves

### ⚠️ **ข้อควรระวัง**

1. **ไม่ควรใช้ Account เกิน Capacity**: ตรวจสอบ CPU/RAM limits
2. **หลีกเลี่ยง Concurrent Operations**: ไม่ควรทำ operations หลายอย่างพร้อมกัน
3. **Backup Account Management**: เตรียม backup accounts สำหรับ emergency
4. **Regular Pool Cleanup**: ทำความสะอาด pool เป็นประจำ

## การแก้ไขปัญหา Team Pool

### 🔍 **ปัญหาที่พบบ่อย**

#### **"ALL MINER IS NOT ALREADY IN POOL"**
- **สาเหตุ**: Account บางตัวไม่อยู่ใน active pool
- **แก้ไข**: ตรวจสอบและเพิ่ม account กลับเข้า pool

#### **"MINER IS CPU OUT TO SWAP"**
- **สาเหตุ**: CPU หมดสำหรับการทำงาน
- **แก้ไข**: Stake CPU เพิ่มหรือใช้ backup account

#### **"MINER IS RAM OUT TO SWAP"**
- **สาเหตุ**: RAM เต็มใช้งานไม่ได้
- **แก้ไข**: Buy RAM เพิ่มหรือ cleanup RAM usage

#### **"WAX OUT TO SWAP"**
- **สาเหตุ**: WAX balance ต่ำเกินไป
- **แก้ไข**: เติม WAX หรือ transfer จาก account อื่น

---

## 🔧 **การใช้งาน TEAM POOL CONFIG Modal ครบถ้วน**

### 📍 **การเข้าถึง Modal**

**วิธีเปิด TEAM POOL CONFIG Modal:**
1. **เปิด AWCLOUD CPanel Dashboard**
2. **คลิก Tab "AW" (Alien Worlds)** - ตรวจสอบว่าอยู่ในหน้าที่ถูกต้อง
3. **ค้นหาปุ่ม "TEAM POOL CONFIG"** - ปุ่มสีเขียวในส่วน Management Panel
4. **คลิกเพื่อเปิด Modal** - Modal จะเปิดขึ้นพร้อม configuration options

{% hint style="warning" %}
**หมายเหตุ:** ถ้าไม่เห็นปุ่ม TEAM POOL CONFIG อาจเป็นเพราะ subscription ไม่รองรับ หรือ feature ยังไม่ได้เปิดใช้งาน
{% endhint %}

### 🎯 **ฟีเจอร์หลักใน Modal**

#### **⚙️ Pool Configuration Tab**
- **สร้างและจัดการ Team Pool** สำหรับขุดแบบกลุ่ม
- **ตั้งค่า Mining Modes** - รองรับ 2 โหมดหลัก: Standard และ MPool
- **จัดการสมาชิก** - เพิ่ม/ลบสมาชิกในทีม
- **กำหนดค่า Commission** - ตั้งค่าค่าคอมมิชชั่นของ Pool

#### **👥 Member Management Tab**
- **เพิ่ม/ลบ Team Members** - จัดการสมาชิกและบทบาท
- **Role Assignment** - กำหนดหน้าที่ Miner/Dummy accounts
- **Priority Settings** - ตั้งค่าลำดับความสำคัญ
- **Access Control** - จำกัดสิทธิ์การเข้าถึง

#### **📊 Statistics & Reports Tab**
- **Mining Performance** - สถิติการขุดของ team
- **Resource Utilization** - การใช้งานทรัพยากรฯ
- **Error Tracking** - บันทึกข้อผิดพลาด
- **Profit Analysis** - วิเคราะห์ผลกำไร

#### **🛡️ Security Settings Tab**
- **2FA Integration** - การยืนยันตัวตน 2 ขั้นตอน
- **Session Management** - จัดการ sessions และ tokens
- **Audit Logging** - บันทึกการเปลี่ยนแปลงทั้งหมด
- **Emergency Procedures** - ขั้นตอนฉุกเฉิน

---

## 🆕 **วิธีการสร้าง Team Pool ใหม่**

### **ขั้นตอนที่ 1: เลือกสร้าง Pool ใหม่**

```json
Initial Configuration:
{
  "TEAM_ID": "Create new Team Pool",
  "ENABLE": true,
  "MODE": "Standard | MPool"
}
```

**การตั้งค่าเบื้องต้น:**
1. **TEAM ID:** เลือก "Create new Team Pool"
2. **ENABLE:** ✓ เปิดใช้งาน Pool
3. **MODE:** เลือกโหมดการทำงาน

### **ขั้นตอนที่ 2: เลือก Mining Mode**

#### **🔧 Standard Mode Configuration**

**เมื่อเลือก Standard Mode จะมีตัวเลือก:**

```yaml
Mining Duration Options:
  short_term: [4h, 6h, 8h]
  medium_term: [12h, 24h, 48h]
  long_term: [1w, 2w, 3w, 4w]

Configuration:
  wallet_type: "anc" # Anchor Wallet
  claim_amount: "auto | custom"
  resource_management: "enabled"
```

**Mining Duration ที่แนะนำ:**
- **4-8 hours:** สำหรับ testing และ short-term mining
- **12-24 hours:** สำหรับ regular mining operations
- **1-4 weeks:** สำหรับ long-term stable mining

#### **⚡ MPool Mode Configuration (Advanced)**

**MPool Mode Features:**
- **Advanced Resource Pooling** - การรวม resources จากหลาย accounts
- **Intelligent Load Balancing** - การกระจายภาระงานอัตโนมัติ
- **Dynamic Account Switching** - การสลับ account ตาม conditions
- **Ban Wave Protection** - ป้องกัน ban wave แบบขั้นสูง

```json
MPool Configuration Example:
{
  "mode": "mpool",
  "pool_settings": {
    "main_miners": ["account1.wam", "account2.wam", "account3.wam"],
    "dummy_accounts": ["dummy1.wam", "dummy2.wam"],
    "resource_threshold": {
      "cpu_minimum": 600,
      "ram_minimum": 600,
      "wax_minimum": 0.3
    },
    "rotation_strategy": "cycle", // cycle | slice | throw
    "failover_enabled": true
  }
}
```

### **ขั้นตอนที่ 3: การกำหนดค่า Advanced Settings**

#### **🎯 Team Composition Setup**

**Miner Accounts Configuration:**
```json
{
  "miner_accounts": {
    "primary": ["account1.wam", "account2.wam"],
    "secondary": ["account3.wam", "account4.wam"],
    "backup": ["account5.wam"]
  },
  "requirements": {
    "min_cpu": 600,
    "min_ram": 600,
    "min_wax": 0.3,
    "tools_required": 3
  }
}
```

**Dummy Accounts Configuration:**
```json
{
  "dummy_accounts": {
    "primary": ["dummy1.wam", "dummy2.wam"],
    "backup": ["dummy3.wam"]
  },
  "responsibilities": [
    "NFT transfers",
    "Buy offers creation",
    "Resource sharing"
  ]
}
```

#### **⏰ Time Scheduling Configuration**

**24-Hour Operation Schedule:**
```json
{
  "schedule": {
    "0-1-2-3-4-5-6-7": "night_shift",
    "8-9-10-11-12-13-14-15": "day_shift",
    "16-17-18-19-20-21-22-23": "evening_shift"
  },
  "shift_settings": {
    "night_shift": {
      "intensity": "low",
      "accounts_active": "50%",
      "maintenance_window": true
    },
    "day_shift": {
      "intensity": "high", 
      "accounts_active": "100%",
      "peak_performance": true
    },
    "evening_shift": {
      "intensity": "medium",
      "accounts_active": "75%",
      "balanced_operation": true
    }
  }
}
```

---

## 📊 **การติดตามผลการทำงาน Team Pool**

### 🎯 **Real-time Dashboard Monitoring**

**Team Status Display ใน Dashboard:**
```
Team: alpha_team
├── 👨‍⛏️ Miners: 3/3 Active 
│   ├── account1.wam: Mining (CPU: 850, RAM: 700, WAX: 4.2)
│   ├── account2.wam: Ready (CPU: 620, RAM: 650, WAX: 2.1)
│   └── account3.wam: Cooldown (CPU: 920, RAM: 750, WAX: 3.8)
├── 🛡️ Dummies: 3/3 Ready
│   ├── dummy1.wam: Available (CPU: 680, RAM: 600)
│   ├── dummy2.wam: Processing (CPU: 720, RAM: 630)
│   └── dummy3.wam: Available (CPU: 810, RAM: 680)
├── 📊 Resource Pool: 85% Available
├── ⚡ Status: Mining Active
└── 📈 Performance: 95.2% Success Rate
```

### 🚨 **Alert System และการแจ้งเตือน**

#### **Critical Alerts (ต้องแก้ไขทันที):**
- ❌ **All Miners Down:** เมื่อ miner accounts ทั้งหมดไม่สามารถทำงานได้
- ⚡ **Resource Depletion:** เมื่อ CPU หรือ RAM ต่ำกว่า threshold
- 💰 **WAX Balance Critical:** เมื่อ WAX ต่ำกว่า 0.5 ใน miner accounts
- 🛡️ **Ban Wave Detected:** เมื่อระบบตรวจพบ ban wave

#### **Warning Alerts (ควรติดตาม):**
- ⚠️ **Single Miner Failure:** เมื่อ miner account เดียวมีปัญหา
- 🔄 **Dummy Account Unavailable:** เมื่อ dummy account ไม่พร้อมใช้งาน
- 📉 **Performance Degradation:** เมื่อ success rate ลดลงกว่า 90%
- 📊 **Resource Usage High:** เมื่อการใช้งานทรัพยากรสูงกว่า 85%

---

## 🔗 **การเชื่อมโยงกับ Modal อื่นๆ**

### 📦 **Integration กับ BOX NFT Modal**
- **การจัดการ Mining Tools** สำหรับ team members
- **NFT Distribution** ระหว่าง team accounts
- **Tool Optimization** สำหรับ team performance

### 💸 **Integration กับ TRANSFER WAX Modal** 
- **Resource Distribution** จาก main account ไป team members
- **Emergency Fund Transfer** เมื่อ accounts ขาด WAX
- **Profit Collection** รวบรวม TLM จาก team accounts

### ⚡ **Integration กับ STAKE WAX Modal**
- **Team Resource Management** จัดการ CPU/NET/RAM สำหรับทั้ง team
- **Bulk Staking Operations** stake resources ให้หลาย accounts พร้อมกัน
- **Resource Rebalancing** กระจาย resources ตามความต้องการ

---

## 🎓 **Advanced Team Pool Strategies**

### ⚡ **Performance Optimization Techniques**

#### **🎯 Resource Allocation Strategy**
```json
Optimal Resource Distribution:
{
  "high_priority_miners": {
    "cpu_allocation": "40%",
    "ram_allocation": "35%", 
    "accounts": ["main1.wam", "main2.wam"]
  },
  "medium_priority_miners": {
    "cpu_allocation": "35%",
    "ram_allocation": "35%",
    "accounts": ["backup1.wam", "backup2.wam"]
  },
  "dummy_accounts": {
    "cpu_allocation": "25%", 
    "ram_allocation": "30%",
    "accounts": ["dummy1.wam", "dummy2.wam"]
  }
}
```

#### **🔄 Dynamic Team Balancing**
- **Load Balancing:** กระจายภาระงานตาม performance
- **Failover Automation:** สลับ accounts อัตโนมัติเมื่อมีปัญหา
- **Resource Optimization:** ปรับแต่ง resource allocation แบบ real-time
- **Performance Tracking:** ติดตาม performance metrics แต่ละ account

### 🏢 **Enterprise Team Management**

#### **🌐 Multi-Team Coordination**
```yaml
Enterprise Architecture:
  production_teams:
    - team_alpha: [primary mining, 24/7 operation]
    - team_beta: [secondary mining, resource backup]
    - team_gamma: [emergency response, disaster recovery]
  
  development_teams:
    - team_delta: [strategy testing, R&D]
    - team_echo: [tool optimization, performance testing]
  
  maintenance_teams:
    - team_zulu: [system maintenance, updates]
    - team_yankee: [backup operations, monitoring]
```

#### **🔒 Security และ Access Control**
- **Role-Based Access Control (RBAC)** - จำกัดสิทธิ์ตามบทบาท
- **Multi-Factor Authentication (MFA)** - 2FA สำหรับ sensitive operations  
- **Audit Logging** - บันทึกการเปลี่ยนแปลงทั้งหมด
- **Emergency Procedures** - ขั้นตอนฉุกเฉินและ disaster recovery

---

## 💡 **Best Practices และ Tips**

### ✅ **ข้อแนะนำการใช้งาน Enterprise-Level**

#### **🎯 Team Composition Best Practices:**
1. **Small Team (2-5 miners):** เหมาะสำหรับ individual users
   - Ratio: 1:1 miner:dummy
   - Investment: Medium, Management: Easy
   - Risk: Lower redundancy but easier to manage

2. **Medium Team (6-12 miners):** เหมาะสำหรับ small businesses  
   - Ratio: 2:1 miner:dummy
   - Investment: Higher, Management: Moderate
   - Risk: Good redundancy and performance balance

3. **Large Team (13+ miners):** เหมาะสำหรับ enterprise operations
   - Ratio: 3:1 miner:dummy  
   - Investment: High, Management: Complex
   - Risk: High redundancy, professional-grade operation

#### **⏰ Timing Optimization Strategies:**
```json
Peak Performance Schedule:
{
  "high_traffic_hours": {
    "utc_time": "12:00-20:00",
    "strategy": "maximum_team_activity",
    "accounts_active": "100%"
  },
  "off_peak_hours": {
    "utc_time": "20:00-12:00", 
    "strategy": "maintenance_and_optimization",
    "accounts_active": "60%"
  },
  "maintenance_windows": {
    "daily": "02:00-04:00 UTC",
    "weekly": "Sunday 01:00-05:00 UTC",
    "monthly": "First Sunday 00:00-08:00 UTC"
  }
}
```

### ⚠️ **หลีกเลี่ยงข้อผิดพลาดที่พบบ่อย**

#### **❌ Common Mistakes:**
1. **Over-Allocation of Resources** - ใช้ resources เกินขีดจำกัด
2. **Inadequate Backup Planning** - ไม่มี backup accounts เพียงพอ
3. **Poor Security Practices** - ไม่ใช้ 2FA หรือ password แรง
4. **Insufficient Monitoring** - ไม่ติดตาม performance อย่างสม่ำเสมอ
5. **Improper Team Scaling** - ขยาย team เร็วเกินไปโดยไม่มีการวางแผน

#### **✅ Prevention Strategies:**
- **Resource Budgeting:** วางแผนการใช้ resources อย่างรอบคอบ
- **20% Backup Rule:** เตรียม backup accounts อย่างน้อย 20% ของ main accounts
- **Security First:** ใช้ enterprise security standards
- **Gradual Scaling:** ขยาย team แบบค่อยเป็นค่อยไป
- **Continuous Monitoring:** ติดตาม metrics อย่างต่อเนื่อง

---

## 🚨 **Emergency Response Procedures**

### 🆘 **Crisis Management**

#### **🔴 Complete Team Failure Response:**
```yaml
Emergency Response Timeline:
  T+0_minutes:
    - Detect team failure through automated monitoring
    - Send critical alerts to emergency contacts
    - Activate emergency response team
  
  T+5_minutes:
    - Assess scope and impact of failure
    - Identify root cause (ban wave, resource depletion, system failure)
    - Activate backup teams if available
  
  T+15_minutes:
    - Stop all affected mining operations
    - Switch to emergency backup accounts
    - Preserve critical data and transaction logs
  
  T+30_minutes:
    - Begin recovery procedures
    - Restore team configuration from backups
    - Gradual service restoration with monitoring
  
  T+60_minutes:
    - Full system restoration
    - Post-incident analysis
    - Update emergency procedures based on lessons learned
```

#### **🛡️ Ban Wave Protection Protocol:**
- **Detection:** Automated ban wave detection ทุก 30 วินาที
- **Response:** หยุดการทำงาน 20-60 วินาทีแบบสุ่ม
- **Recovery:** ใช้ backup accounts และ alternative strategies
- **Prevention:** ปรับ timing patterns และ behavioral mimicry

---

## 📚 **Additional Resources และ Integration**

### 🔗 **การเชื่อมโยงกับเอกสารอื่น**

{% content-ref url="../user-manual/modal-guide-complete.md#13-team-pool-config-modal" %}
[modal-guide-complete.md](../user-manual/modal-guide-complete.md#13-team-pool-config-modal) - **รายละเอียด Modal Interface**
{% endcontent-ref %}

{% content-ref url="../user-manual/mining-systems-guide.md" %}
[mining-systems-guide.md](../user-manual/mining-systems-guide.md) - **เปรียบเทียบระบบขุดต่างๆ**
{% endcontent-ref %}

{% content-ref url="../user-manual/dashboard-guide.md" %}
[dashboard-guide.md](../user-manual/dashboard-guide.md) - **การใช้งาน Dashboard หลัก**
{% endcontent-ref %}

### 🎯 **Next Steps หลังจากอ่านคู่มือนี้**

1. **📊 ศึกษา Dashboard Guide** - เรียนรู้การใช้งาน interface หลัก
2. **🔧 ทดลองสร้าง Small Team** - เริ่มจาก 2-3 accounts เพื่อทดสอบ
3. **📈 Monitor Performance** - ติดตามผลการทำงาน 1-2 สัปดาห์
4. **⚡ Scale Up Gradually** - ขยาย team เมื่อมั่นใจในการใช้งาน
5. **🛡️ Implement Security** - ตั้งค่า 2FA และ security measures ครบถ้วน

### 🤝 **Community Support**

**📞 Emergency Support:**
- **Critical Issues:** Discord #emergency-support
- **Technical Questions:** Telegram @AWCLOUD_Support  
- **Feature Requests:** GitHub Issues Repository

**📚 Learning Resources:**
- **Video Tutorials:** YouTube AWCLOUD Channel
- **Community Wiki:** GitHub Documentation
- **Best Practices:** Discord #team-pool-strategies

---

{% hint style="success" %}
**Team Pool System เป็นระบบขุดที่ซับซ้อนและทรงพลังที่สุดใน AWCLOUD CPanel** 

ที่สามารถเพิ่มประสิทธิภาพการขุด ลดความเสี่ยงจาก ban wave และจัดการ multi-account mining ได้อย่างมีประสิทธิภาพสูงสุด การใช้งานที่ถูกต้องจะช่วยให้คุณสามารถขุด Alien Worlds ได้อย่างมั่นคงและมีกำไรสูงสุด
{% endhint %}