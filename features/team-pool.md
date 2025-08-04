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

## 🔧 **การใช้งาน Team Pool Config Modal**

{% hint style="info" %}
**การตั้งค่า Team Pool:** [TEAM POOL CONFIG Modal](../user-manual/modal-guide-complete.md#13-team-pool-config-modal) - คู่มือการใช้งาน Modal สำหรับจัดการ Team Pool
{% endhint %}

**การเข้าถึง Modal:**
1. ไปที่ Dashboard หลัก
2. เมนู Team → คลิก "TEAM POOL CONFIG"
3. Modal จะเปิดขึ้นพร้อมตัวเลือกการจัดการ

**ฟีเจอร์หลักใน Modal:**
- ⚙️ **Pool Configuration** - ตั้งค่า pool พื้นฐาน
- 👥 **Member Management** - จัดการสมาชิกและสิทธิ์
- 📊 **Statistics & Reports** - สถิติและรายงานผลงาน
- 🛡️ **Security Settings** - การตั้งค่าความปลอดภัย

---

{% hint style="success" %}
**Team Pool System เป็นกลไกหลักที่ทำให้ AWCLOUD สามารถจัดการ multi-account mining ได้อย่างมีประสิทธิภาพและปลอดภัย**
{% endhint %}