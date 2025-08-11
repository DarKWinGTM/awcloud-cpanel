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
- ยืนยันสถานะของ miner accounts
- ตรวจสอบความพร้อมของทรัพยากร

#### **ขั้นตอนที่ 2: Resource Allocation**
- กำหนด main accounts สำหรับ mining operations
- จัดสรรทรัพยากรตามลำดับความสำคัญ
- ตั้งค่า backup accounts สำหรับ failover

#### **ขั้นตอนที่ 3: Mining Execution**
- เริ่มการขุดด้วย miner accounts ที่เตรียมไว้
- จัดการ NFT operations และ resource sharing
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

1. **Minimum Team Size**: อย่างน้อย 2 miner accounts
2. **Resource Requirements**:
   - Miner: CPU > 600, RAM > 600, WAX > 0.3
3. **Network Requirements**: เชื่อมต่อ WAX RPC nodes ที่เสถียร

### ⚙️ **การกำหนดค่า Team**

#### **1. Team Registration**
การลงทะเบียน team ประกอบด้วยการกำหนด:
- **ชื่อ Team**: ตั้งชื่อให้กับ team ของคุณ
- **Miner Accounts**: กำหนด accounts ที่จะทำหน้าที่ขุด (เช่น account1.wam, account2.wam, account3.wam)
- **Pool Type**: เลือกระหว่าง LPOOL หรือ MPOOL ตามวัตถุประสงค์
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
- **Pool Type**: ประเภท pool (LPOOL/MPOOL)
- **Miner Accounts**: จำนวน miner accounts ที่กำลังทำงาน (เช่น 3/3 Active)
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
- **จัดการ account pool**: เพิ่ม/ลบ accounts ใน team
- **ลบ account ออกจาก team**: ลบและอัปเดต team configuration

#### **การปรับแต่ง Team Settings**
- **Mining Frequency**: ความถี่ในการขุด
- **Resource Thresholds**: ขีดจำกัดทรัพยากร
- **Failover Rules**: กฎการสลับ account
- **Timing Patterns**: รูปแบบการทำงาน

## Best Practices

### ✅ **ข้อแนะนำการใช้งาน**

1. **ใช้ Miner Accounts หลากหลาย**: กระจาย accounts เพื่อลดความเสี่ยง
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
- **Performance Analysis** - วิเคราะห์ประสิทธิภาพ

#### **🛡️ Security Settings Tab**
- **2FA Integration** - การยืนยันตัวตน 2 ขั้นตอน
- **Session Management** - จัดการ sessions และ tokens
- **Audit Logging** - บันทึกการเปลี่ยนแปลงทั้งหมด
- **Emergency Procedures** - ขั้นตอนฉุกเฉิน

---

## 🆕 **วิธีการสร้าง Team Pool ใหม่**

### **ขั้นตอนที่ 1: เลือกสร้าง Pool ใหม่**


**การตั้งค่าเบื้องต้น:**
1. **TEAM ID:** เลือก "Create new Team Pool"
2. **ENABLE:** ✓ เปิดใช้งาน Pool
3. **MODE:** เลือกระหว่าง LPOOL หรือ MPOOL ตามหน้าที่

### **ขั้นตอนที่ 2: เลือก Mining Mode**

#### **📊 LPOOL Mode Configuration (Level Pool)**

**LPOOL (Level Pool) เมื่อเลือก Level Pool จะมีตัวเลือก:**


**Level Pool Workflow:**
- **เก็บเลเวล:** Accounts ทำงานเพื่อเพิ่มระดับ
- **ตรวจสอบ Level:** เมื่อถึงระดับเป้าหมาย
- **ส่งต่อ Miner Pool:** Transfer accounts ที่พร้อมแล้วไปขุดจริง

#### **⚡ MPOOL Mode Configuration (Miner Pool)**

**MPOOL (Miner Pool) Features:**
- **Advanced Mining Operations** - การขุดแบบมืออาชีพ
- **Level-Ready Accounts** - ใช้ accounts ที่ได้ระดับจาก Level Pool แล้ว
- **High-End Tools Support** - รองรับ mining tools ระดับสูง
- **Ban Wave Protection** - ป้องกัน ban wave แบบขั้นสูง


**Miner Pool Workflow:**
- **รับ Accounts:** จาก Level Pool ที่มีระดับเพียงพอแล้ว  
- **เครื่องมือขุด:** ใช้ tools ที่ unlock ได้จากระดับสูง
- **ประสิทธิภาพสูง:** Mining ด้วย accounts ที่มี experience

### **ขั้นตอนที่ 3: การกำหนดค่า Advanced Settings**

#### **🎯 Team Composition Setup**



#### **⏰ Time Scheduling Configuration**


---

## 📊 **การติดตามผลการทำงาน Team Pool**

### 🎯 **Real-time Dashboard Monitoring**

**Team Status Display ใน Dashboard:**
- **Team Name**: แสดงชื่อ team ที่สร้างไว้
- **Pool Type**: แสดง LPOOL หรือ MPOOL
- **Miners Status**: จำนวนและสถานะ miner accounts
- **Resource Pool**: เปอร์เซ็นต์ทรัพยากรที่ใช้ได้
- **Mining Status**: สถานะการทำงานปัจจุบัน

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
- **High Priority Accounts**: จัดสรรทรัพยากรมากที่สุด
- **Secondary Accounts**: ใช้เป็น backup สำหรับ failover
- **Resource Balancing**: กระจายภาระงานอย่างสมดุล

#### **🔄 Dynamic Team Balancing**
- **Load Balancing:** กระจายภาระงานตาม performance
- **Failover Automation:** สลับ accounts อัตโนมัติเมื่อมีปัญหา
- **Resource Optimization:** ปรับแต่ง resource allocation แบบ real-time
- **Performance Tracking:** ติดตาม performance metrics แต่ละ account

### 🏢 **Enterprise Team Management**

#### **🌐 Multi-Team Coordination**
- **Production Teams**: ทีมหลักสำหรับการขุดประจำ 24/7
- **Development Teams**: ทีมทดสอบกลยุทธ์และ R&D
- **Maintenance Teams**: ทีมดูแลระบบและ monitoring

#### **🔒 Security และ Access Control**
- **Role-Based Access Control (RBAC)** - จำกัดสิทธิ์ตามบทบาท
- **Multi-Factor Authentication (MFA)** - 2FA สำหรับ sensitive operations  
- **Audit Logging** - บันทึกการเปลี่ยนแปลงทั้งหมด
- **Emergency Procedures** - ขั้นตอนฉุกเฉินและ disaster recovery

---

## 💡 **Best Practices และ Tips**

### ✅ **ข้อแนะนำการใช้งาน Enterprise-Level**

#### **🎯 Team Size Recommendations:**
- **Small Team (2-3 miners):** เหมาะสำหรับเริ่มต้นและทดสอบ
- **Medium Team (4-8 miners):** เหมาะสำหรับการใช้งานปกติ
- **Large Team (9+ miners):** สำหรับการขุดขนาดใหญ่

#### **⏰ Timing Optimization Strategies:**
- **High Traffic Hours**: 12:00-20:00 UTC - เปิด accounts ทั้งหมด
- **Off Peak Hours**: 20:00-12:00 UTC - ลด accounts เพื่อ maintenance
- **Maintenance Windows**: ช่วงเวลา maintenance ประจำ

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