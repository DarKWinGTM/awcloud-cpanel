# 🎯 คู่มือ Modal System ครบถ้วน - AWCLOUD CPanel

{% hint style="success" %}
**คู่มือฉบับสมบูรณ์** สำหรับการใช้งาน Modal Systems ทั้ง **22+ modals** ที่มีอยู่จริงในระบบ AWCLOUD CPanel (จากการวิเคราะห์ระบบจริง)
{% endhint %}

## 📋 สารบัญ Modal Systems

### 🎯 **Core Modals** (ใช้งานประจำวัน)
1. [boxNFT](#1-box-nft-modal) - จัดการ NFT และ Mining Tools
2. [setLand](#2-set-land-modal) - เลือกพื้นที่การขุด  
3. [transferWax](#3-transfer-wax-modal) - ส่ง Token
4. [stakeWax](#4-stake-wax-modal) - จัดการทรัพยากร
5. [allocateWax](#5-allocate-wax-modal) - กระจาย WAX หลาย account
6. [swapTLM](#6-swap-tlm-modal) - แลกเปลี่ยน Token

### 🔧 **Advanced Modals** (ขั้นสูง)
7. [poolMineable](#7-pool-mineable-modal) - ตั้งค่า Mining
8. [totpConfig](#8-totp-config-modal) - ความปลอดภัย 2FA
9. [taskScheduler](#9-task-scheduler-modal) - ตั้งเวลาทำงาน
10. [waxDetective](#10-wax-detective-modal) - วิเคราะห์ Transaction
11. [actionReport](#11-action-report-modal) - รายงานการทำงาน
12. [sessionsToken](#12-sessions-token-modal) - จัดการ Session

### 👥 **Team Modals** (ฟีเจอร์ขั้นสูง)
13. [teamPoolConfig](#13-team-pool-config-modal) - จัดการ Pool ขั้นสูง

### 💳 **Wallet Modals** (สร้าง Account)
14. [createWaxCloudWallet](#14-create-wax-cloud-wallet-modal) - สร้าง WAX Cloud
15. [createAnchorWallet](#15-create-anchor-wallet-modal) - สร้าง Anchor
16. [registerWalletSign](#16-register-wallet-sign-modal) - ลงทะเบียน Signature
17. [setupSoftPrivateKey](#17-setup-soft-private-key-modal) - ตั้งค่า Private Key

### 🛠️ **Utility Modals** (เครื่องมือเสริม)
18. [alcorTool](#18-alcor-tool-modal) - Trading บน Alcor
19. [costMinerConfig](#19-cost-miner-config-modal) - คำนวณต้นทุน
20. [subscriptionInfo](#20-subscription-info-modal) - ข้อมูลสมาชิก
21. [gotBAN](#21-got-ban-modal) - จัดการ Ban
22. [howto](#22-how-to-modal) - คู่มือช่วยเหลือ

---

## 🎯 **Core Modals - ใช้งานประจำวัน**

### 1. 🛠️ **BOX NFT Modal** (boxNFT) {#1-box-nft-modal}

**การเข้าถึง:** คลิกปุ่ม **TOOLS** ในแถว account ที่ต้องการ

#### **7 Tabs ภายใน Modal:**

#### **Tab 1: BOX NFT (set-tool)**
- **หน้าที่:** จัดการ NFT inventory และ mining tools
- **วิธีใช้:**
  1. เลือก tools ที่ต้องการใช้ขุด
  2. คลิก "Set Tools" เพื่อนำไปใช้งาน
  3. ตรวจสอบ durability ของ tools

#### **Tab 2: SEND NFT (send-nft)**
- **หน้าที่:** ส่ง NFT ระหว่าง account
- **วิธีใช้:**
  1. เลือก NFT ที่ต้องการส่ง
  2. ใส่ชื่อ account ปลายทาง
  3. ยืนยันการส่ง

#### **Tab 3: CLAIM NFT (claim-nft)**
- **หน้าที่:** เคลม NFT ที่ได้รับ
- **วิธีใช้:**
  1. ดู NFT ที่รอเคลม
  2. คลิก "Claim" NFT ที่ต้องการ

#### **Tab 4: BACK TOKEN (back-token)**
- **หน้าที่:** คืน token จาก NFT
- **วิธีใช้:**
  1. เลือก NFT ที่ต้องการแปลงเป็น token
  2. คลิก "Convert" เพื่อได้รับ token

#### **Tab 5: CREATE LINK (create-link)**
- **หน้าที่:** สร้างลิงก์แชร์ NFT
- **วิธีใช้:**
  1. เลือก NFT ที่ต้องการแชร์
  2. สร้างลิงก์ที่คนอื่นสามารถเคลมได้

#### **Tab 6: CLAIM LINK (claim-link)**
- **หน้าที่:** รับ NFT จากลิงก์
- **วิธีใช้:**
  1. วางลิงก์ที่ได้รับ
  2. คลิก "Claim" เพื่อรับ NFT

#### **Tab 7: BURN NFT (burn-nft)**
- **หน้าที่:** ทำลาย NFT เพื่อรับ token
- **วิธีใช้:**
  1. เลือก NFT ที่ต้องการทำลาย
  2. ยืนยันการ burn เพื่อได้ token

💡 **เคล็ดลับ:** เริ่มจาก tab BOX NFT เพื่อดู inventory ก่อน แล้วค่อยใช้ tabs อื่น

---

### 2. 🌍 **SET LAND Modal** (setLand) {#2-set-land-modal}

**การเข้าถึง:** คลิกปุ่ม **LAND** ในแถว account ที่ต้องการ

#### **4 Tabs ภายใน Modal:**

#### **Tab 1: MAIN (setland-main)**
- **หน้าที่:** เลือก planet และ land สำหรับขุด
- **วิธีใช้:**
  1. เลือก planet (Kavian, Magor, Naron, etc.)
  2. เลือก land ในแต่ละ planet
  3. ดูข้อมูล mining rate และ delay
  4. คลิก "Set Land" เพื่อยืนยัน

#### **Tab 2: REGISTER (setland-register)**
- **หน้าที่:** ลงทะเบียน land ใหม่
- **วิธีใช้:**
  1. ซื้อ land จาก marketplace
  2. ลงทะเบียน land เข้าระบบ
  3. รอ confirmation จาก blockchain

#### **Tab 3: RANDOM (setland-random)**
- **หน้าที่:** สุ่มเลือก land อัตโนมัติ
- **วิธีใช้:**
  1. กำหนดเกณฑ์การสุ่ม (mining rate ขั้นต่ำ)
  2. คลิก "Random Select"
  3. ระบบจะเลือก land ที่ดีที่สุดให้

#### **Tab 4: CHOOSE (setland-choose)**
- **หน้าที่:** เลือก land เฉพาะเจาะจง
- **วิธีใช้:**
  1. ดู list land ทั้งหมดที่เป็นเจ้าของ
  2. เลือก land ตามความต้องการ
  3. เปรียบเทียบประสิทธิภาพ

💡 **เคล็ดลับ:** ใช้ tab RANDOM สำหรับการเลือก land ที่มีประสิทธิภาพดีที่สุดอัตโนมัติ

---

### 3. 💸 **TRANSFER WAX Modal** (transferWax) {#3-transfer-wax-modal}

**การเข้าถึง:** คลิกปุ่ม **TRANSFER** ในแถว account ที่ต้องการ

#### **2 Tabs ภายใน Modal:**

#### **Tab 1: MAIN (transfer-main)**
- **หน้าที่:** ส่ง WAX, TLM ไปยัง account อื่น
- **วิธีใช้:**
  1. เลือกประเภท token (WAX/TLM)
  2. ใส่จำนวนที่ต้องการส่ง
  3. ใส่ชื่อ account ปลายทาง
  4. เขียน memo (ถ้าต้องการ)
  5. คลิก "Transfer" เพื่อส่ง

**ตัวอย่างการใช้งาน:**
- **Token**: เลือก WAX หรือ TLM ที่ต้องการส่ง
- **จำนวน**: ระบุจำนวนที่ต้องการส่ง (เช่น 10.0000)
- **ปลายทาง**: ใส่ชื่อ account ที่จะส่งไป (เช่น targetaccount)
- **หมายเหตุ**: เขียนข้อความแนบ (เช่น payment for service)

#### **Tab 2: TASK (transfer-task)**
- **หน้าที่:** ตั้งค่าการส่ง token อัตโนมัติ
- **วิธีใช้:**
  1. กำหนดเงื่อนไขการส่ง (เช่น เมื่อ balance > 100 WAX)
  2. ตั้งเวลาการส่งประจำ
  3. กำหนดจำนวนที่ส่งแต่ละครั้ง

💡 **เคล็ดลับ:** ใช้ tab TASK สำหรับการจัดการ token แบบอัตโนมัติ

---

### 4. ⚡ **STAKE WAX Modal** (stakeWax) {#4-stake-wax-modal}

**การเข้าถึง:** คลิกปุ่ม **RESOURCES** ในแถว account ที่ต้องการ

#### **6 Tabs ภายใน Modal:**

#### **Tab 1: STAKE (stake)**
- **หน้าที่:** Stake WAX เพื่อเพิ่มทรัพยากร
- **วิธีใช้:**
  1. เลือกประเภทที่ต้องการ stake (CPU/NET)
  2. ใส่จำนวน WAX ที่ต้องการ stake
  3. คลิก "Stake" เพื่อยืนยัน

#### **Tab 2: RENT STAKE (rent-safe-stake)**
- **หน้าที่:** เช่า stake จากคนอื่น
- **วิธีใช้:**
  1. ดูตัวเลือก rental ที่มี
  2. เลือกแพ็คเกจที่เหมาะสม
  3. จ่ายค่าเช่าเพื่อใช้ทรัพยากร

#### **Tab 3: UNSTAKE (unstake)**
- **หน้าที่:** Unstake WAX เพื่อเอา WAX กลับ
- **วิธีใช้:**
  1. ดูจำนวน WAX ที่ stake อยู่
  2. เลือกจำนวนที่ต้องการ unstake
  3. รอ 3 วันก่อนได้รับ WAX กลับ

#### **Tab 4: RENT UNSTAKE (rent-unstake)**
- **หน้าที่:** ยกเลิกการเช่า stake
- **วิธีใช้:**
  1. ดูรายการ rental ที่ active
  2. เลือกรายการที่ต้องการยกเลิก

#### **Tab 5: FREE STAKE (free-stake)**
- **หน้าที่:** ใช้ free stake ถ้ามี
- **วิธีใช้:**
  1. ตรวจสอบ free stake ที่มีให้
  2. คลิก "Claim" เพื่อรับ

#### **Tab 6: GOVERNANCE (governance)**
- **หน้าที่:** โหวตใน WAX governance
- **วิธีใช้:**
  1. ดูประเด็นการโหวต
  2. เลือกตัวเลือกที่ต้องการ
  3. ใช้ staked WAX เป็น voting power

💡 **เคล็ดลับ:** สำรอง WAX สำหรับ unstake ไว้เสมอ เพราะต้องรอ 3 วัน

---

### 5. 🔄 **ALLOCATE WAX Modal** (allocateWax) {#5-allocate-wax-modal}

**การเข้าถึง:** ปุ่มหลักในระบบ → modal allocateWax

**คุณสมบัติหลัก:**
- **กระจาย WAX** ไปหลาย account พร้อมกัน
- **ตั้งค่าจำนวนและอัตรา** การแจกจ่าย
- **รองรับการแจกจ่าย** แบบเท่าๆ กันหรือตามสัดส่วน

**วิธีใช้งาน Step-by-Step:**

1. **เลือก Source Account**
   - เลือก account หลักที่มี token (เช่น masteraccount)
   - ตรวจสอบยอดคงเหลือก่อนแจกจ่าย

2. **กำหนด Target Accounts**
   - ใส่รายชื่อ accounts ที่จะได้รับ token
   - สามารถใส่ได้หลาย accounts พร้อมกัน

3. **ตั้งค่าการแจกจ่าย**
   - กำหนดจำนวนรวมที่จะแจกจ่าย
   - เลือกประเภทการแจก: เท่าๆ กัน หรือตามสัดส่วน

4. **ยืนยันการทำงาน**
   - ตรวจสอบรายละเอียด
   - คลิก "Execute Allocation"

💡 **เคล็ดลับ:** ใช้สำหรับแจกจ่าย WAX ให้ mining accounts หลายตัวพร้อมกัน

---

### 6. 🔄 **SWAP TLM Modal** (swapTLM) {#6-swap-tlm-modal}

**การเข้าถึง:** ปุ่มหลักในระบบ → modal swapTLM

**คุณสมบัติหลัก:**
- **แลกเปลี่ยน TLM ↔ WAX** แบบเรียลไทม์
- **ตรวจสอบอัตราแลกเปลี่ยน** ล่าสุด
- **รองรับการ swap อัตโนมัติ** ตามเงื่อนไข

**วิธีใช้งาน:**

1. **เลือกการแลกเปลี่ยน**
   - เลือก token ต้นทาง (From): TLM, WAX, หรือ token อื่น
   - เลือก token ปลายทาง (To): token ที่ต้องการได้รับ
   - ดูอัตราแลกเปลี่ยนปัจจุบัน

2. **ใส่จำนวน**
   - ระบุจำนวน token ที่ต้องการแลกเปลี่ยน
   - ระบบจะคำนวณจำนวนที่จะได้รับโดยอัตโนมัติ

3. **ยืนยันการ Swap**
   - ตรวจสอบ slippage
   - คลิก "Swap Now"

💡 **เคล็ดลับ:** ติดตามอัตราแลกเปลี่ยนเพื่อ swap ในจังหวะที่ดีที่สุด

---

## 🔧 **Advanced Modals - ขั้นสูง**

### 7. 📊 **POOL MINEABLE Modal** (poolMineable) {#7-pool-mineable-modal}

**การเข้าถึง:** เมนูระบบ → modal poolMineable

#### **2 Tabs ภายใน Modal:**

#### **Tab 1: WAX BLOKS (poolMineable-waxblock-io)**
- **หน้าที่:** การตั้งค่าผ่าน Wax Bloks
- **วิธีใช้:**
  1. กำหนด mining parameters
  2. ตั้งค่า delay time (มิลลิวินาที)
  3. เลือก retry attempts
  4. บันทึกการตั้งค่า

#### **Tab 2: EOS USA IO (poolMineable-eosusa-io)**
- **หน้าที่:** การตั้งค่าผ่าน EOS USA
- **วิธีใช้:**
  1. เลือก endpoint ที่ต้องการใช้
  2. ทดสอบความเร็วการเชื่อมต่อ
  3. ปรับแต่งพารามิเตอร์

**ตัวอย่างการตั้งค่า:**
- **Mining Delay**: ช่วงเวลาระหว่างการขุด (เช่น 30 นาที)
- **Retry Attempts**: จำนวนครั้งที่จะลองใหม่เมื่อขุดไม่สำเร็จ (เช่น 3 ครั้ง)
- **Fail Threshold**: จำนวนครั้งที่ล้มเหลวแล้วจะหยุดชั่วคราว (เช่น 5 ครั้ง)

💡 **เคล็ดลับ:** ใช้ WAX BLOKS สำหรับความเสถียร, EOS USA สำหรับความเร็ว

---

### 8. 🛡️ **TOTP CONFIG Modal** (totpConfig) {#8-totp-config-modal}

**การเข้าถึง:** เมนูความปลอดภัย → modal totpConfig

#### **2 Tabs ภายใน Modal:**

#### **Tab 1: PAIR (totpConfig-main)**
- **หน้าที่:** จับคู่กับ Google Authenticator
- **วิธีใช้:**
  1. สแกน QR Code ด้วย Google Authenticator
  2. ใส่รหัส 6 หลักเพื่อยืนยัน
  3. บันทึก backup codes

#### **Tab 2: LOCK/UNLOCK (totpConfig-switch)**
- **หน้าที่:** เปิด/ปิด 2FA
- **วิธีใช้:**
  1. ใส่รหัส TOTP ปัจจุบัน
  2. เลือก Enable/Disable
  3. ยืนยันด้วยรหัสอีกครั้ง

💡 **เคล็ดลับ:** เปิด 2FA สำหรับ account ที่มี asset มีค่า

---

### 9. ⏰ **TASK SCHEDULER Modal** (taskScheduler) {#9-task-scheduler-modal}

**การเข้าถึง:** เมนูระบบ → modal taskScheduler

**คุณสมบัติหลัก:**
- **กำหนดตารางเวลา** การขุดอัตโนมัติ
- **ตั้งค่าให้หยุด/เริ่ม** ทำงานตามเวลา
- **วางแผนการใช้ทรัพยากร** ประจำวัน

**วิธีใช้งาน:**

1. **สร้างตารางเวลาใหม่**
   ```
   Task Name: Daily Mining Schedule
   Start Time: 06:00
   End Time: 22:00
   Days: Monday-Friday
   ```

2. **เลือก Actions**
   ```
   06:00 - Start Mining
   12:00 - Check Resources  
   18:00 - Collect TLM
   22:00 - Stop Mining
   ```

3. **บันทึกตารางเวลา**
   - ตรวจสอบความถูกต้อง
   - Enable scheduler

💡 **เคล็ดลับ:** ตั้งให้หยุดขุดช่วงกลางคืนเพื่อประหยัดทรัพยากร

---

### 10. 🔍 **WAX DETECTIVE Modal** (waxDetective) {#10-wax-detective-modal}

**การเข้าถึง:** เมนูการวิเคราะห์ → modal waxDetective

**คุณสมบัติหลัก:**
- **ติดตามและวิเคราะห์** transaction history
- **ตรวจสอบ account performance** รายละเอียด
- **สร้างรายงานการทำงาน** เชิงลึก
- **ตรวจจับพฤติกรรม** ผิดปกติ

**วิธีใช้งาน:**
1. **เลือก Account**: เลือกบัญชีที่ต้องการวิเคราะห์
2. **เลือกช่วงเวลา**: กำหนดระยะเวลาที่ต้องการดูข้อมูล
3. **เลือกประเภทการวิเคราะห์**: Transaction Analysis, Mining Performance, Resource Usage, Suspicious Activity
4. **ดูผลการวิเคราะห์**: ดูสถิติและรายงานที่ได้

**เกี่ยวกับ WAX Detective:**
WAX Detective เป็นบริการ Web Application ที่อยู่นอกระบบทำหน้าที่ตรวจสอบเส้นทางธุรกรรมของบัญชีต่างๆ

💡 **เคล็ดลับ:** ใช้ประจำสัปดาห์เพื่อติดตามประสิทธิภาพและหาจุดปรับปรุง

---

### 11. 📊 **ACTION REPORT Modal** (actionReport) {#11-action-report-modal}

**การเข้าถึง:** เมนูรายงาน → modal actionReport

**คุณสมบัติหลัก:**
- **รายงานการกระทำทั้งหมด** ของ account
- **สรุปสถิติการทำงาน** รายวัน/รายสัปดาห์
- **วิเคราะห์ประสิทธิภาพ** การขุด

**วิธีใช้งาน:**

1. **เลือกช่วงเวลารายงาน**
   ```
   Report Period: Last 30 days
   Account Filter: All Accounts
   Report Type: Detailed
   ```

2. **กำหนดประเภทรายงาน**
   ```
   ✓ Mining Actions
   ✓ Transfer History
   ✓ Resource Changes
   ✓ Error Logs
   ```

3. **สร้างและดาวน์โหลดรายงาน**
   ```
   Format: PDF / Excel / CSV
   Include Charts: Yes
   Email Report: admin@domain.com
   ```

💡 **เคล็ดลับ:** ใช้สำหรับติดตามผลการดำเนินงานและวางแผนระยะยาว

---

### 12. 🔐 **SESSIONS TOKEN Modal** (sessionsToken) {#12-sessions-token-modal}

**การเข้าถึง:** เมนูความปลอดภัย → modal sessionsToken

**คุณสมบัติหลัก:**
- **จัดการ session tokens** ทั้งหมด
- **ดู session ที่ active** อยู่
- **ยกเลิก session** ที่น่าสงสัย

**วิธีใช้งาน:**

1. **ดู Active Sessions**
   ```
   Session ID: abc123...
   Device: Chrome on Windows
   Location: Bangkok, Thailand
   Last Activity: 5 minutes ago
   ```

2. **จัดการ Sessions**
   ```
   ✓ Terminate Suspicious Sessions
   ✓ Set Session Timeout
   ✓ Enable Auto-Logout
   ```

3. **ตั้งค่าความปลอดภัย**
   ```
   Session Timeout: 2 hours
   Max Concurrent Sessions: 3
   Require 2FA for New Sessions: Yes
   ```

💡 **เคล็ดลับ:** ตรวจสอบ sessions เป็นประจำและยกเลิก session ที่ไม่รู้จัก

---

## 👥 **Team Modals - การทำงานแบบทีม**

### 13. 👥 **TEAM MINE CONFIG Modal** (teamMineConfig) {#13-team-mine-config-modal}

**การเข้าถึง:** เมนู Team → modal teamMineConfig

**คุณสมบัติหลัก:**
- **ตั้งค่าการขุดแบบทีม**
- **กำหนดสมาชิกในทีม**
- **แบ่งหน้าที่การขุด**

**วิธีใช้งาน:**

1. **สร้างทีมใหม่**
   ```
   Team Name: Mining Team Alpha
   Team Leader: masteraccount
   Max Members: 10
   ```

2. **เพิ่มสมาชิก**
   ```
   Member 1: account1 (Miner)
   Member 2: account2 (Resource Manager)  
   Member 3: account3 (Token Collector)
   ```

3. **กำหนดกลยุทธ์ทีม**
   ```
   Mining Strategy: Synchronized
   Resource Sharing: Enabled
   Profit Distribution: Equal
   ```

💡 **เคล็ดลับ:** ใช้ทีมสำหรับการขุดที่มีประสิทธิภาพสูงและจัดการง่าย

---

### 14. 🏊 **TEAM POOL CONFIG Modal** (teamPoolConfig) {#14-team-pool-config-modal}

**การเข้าถึง:** เมนู Team → modal teamPoolConfig

**คุณสมบัติหลัก:**
- **จัดการ mining pool สำหรับทีม**
- **ตั้งค่าการแบ่งปันผลกำไร**
- **สถิติผลงานของทีม**

**วิธีใช้งาน:**

1. **ตั้งค่า Pool**
   ```
   Pool Name: Alpha Mining Pool
   Commission: 5%
   Min Contribution: 100 WAX
   ```

2. **กำหนดการแบ่งปัน**
   ```
   Distribution Method: Proportional
   Payout Frequency: Daily
   Min Payout: 10 TLM
   ```

3. **ติดตามสถิติ**
   ```
   Total Pool Power: 15,250 TLM/day
   Active Members: 8/10
   Pool Efficiency: 97.3%
   ```

💡 **เคล็ดลับ:** ตั้งค่า commission ให้เหมาะสมเพื่อดึงดูดสมาชิกคุณภาพ

---

## 💳 **Wallet Modals - สร้าง Account**

### 15. ☁️ **CREATE WAX CLOUD WALLET Modal** (createWaxCloudWallet) {#15-create-wax-cloud-wallet-modal}

**การเข้าถึง:** เมนู Wallet → modal createWaxCloudWallet

**คุณสมบัติหลัก:**
- **สร้าง WAX Cloud Wallet ใหม่**
- **ตั้งค่า account ใหม่**
- **Import เข้าระบบอัตโนมัติ**

**วิธีใช้งาน Step-by-Step:**

1. **เริ่มสร้าง Wallet**
   ```
   Account Name: newminer2025
   Password: [Strong Password]
   Confirm Password: [Same Password]
   ```

2. **ยืนยันตัวตน**
   ```
   Email: user@domain.com
   Phone: +66-XXX-XXXX (Optional)
   ```

3. **บันทึก Credentials**
   ```
   ⚠️ สำคัญ: บันทึกข้อมูลเหล่านี้ไว้ในที่ปลอดภัย
   Account Name: newminer2025
   Password: [Your Password]
   Private Keys: [Generated Keys]
   ```

4. **Import เข้าระบบ**
   - Account จะถูก import เข้า AWCLOUD อัตโนมัติ
   - พร้อมใช้งานทันที

💡 **เคล็ดลับ:** สร้าง account name ที่จำง่ายและไม่ซ้ำกับที่มีอยู่

---

### 16. ⚓ **CREATE ANCHOR WALLET Modal** (createAnchorWallet) {#16-create-anchor-wallet-modal}

**การเข้าถึง:** เมนู Wallet → modal createAnchorWallet

**คุณสมบัติหลัก:**
- **สร้าง Anchor Wallet ใหม่**
- **เชื่อมต่อกับระบบ**
- **ตั้งค่าความปลอดภัย**

**วิธีใช้งาน:**

1. **ติดตั้ง Anchor App**
   - ดาวน์โหลด Anchor จาก official website
   - ติดตั้งบนอุปกรณ์ที่ต้องการ

2. **สร้าง Account ใหม่**
   ```
   Account Name: anchorminer1
   Master Password: [Ultra Strong Password]
   Biometric: Enabled (ถ้าใช้มือถือ)
   ```

3. **เชื่อมต่อกับ AWCLOUD**
   ```
   QR Code Scan: [Scan from AWCLOUD]
   Permission Setup: [Grant Required Permissions]
   ```

4. **ทดสอบการเชื่อมต่อ**
   - ลอง sign transaction ง่ายๆ
   - ตรวจสอบการทำงาน

💡 **เคล็ดลับ:** Anchor มีความปลอดภัยสูงกว่า WAX Cloud แต่ใช้งานซับซ้อนกว่า

---

### 17. ✍️ **REGISTER WALLET SIGN Modal** (registerWalletSign) {#17-register-wallet-sign-modal}

**การเข้าถึง:** เมนู Wallet → modal registerWalletSign

**คุณสมบัติหลัก:**
- **ลงทะเบียน wallet signature**
- **ยืนยันตัวตน wallet**
- **เซ็ตอัพ permission**

**วิธีใช้งาน:**

1. **เตรียม Wallet**
   ```
   Wallet Type: Anchor / WAX Cloud / Hardware
   Account Name: [Your Account]
   ```

2. **ลงทะเบียน Signature**
   ```
   Message to Sign: "Register with AWCLOUD CPanel"
   Signature: [Generated by Wallet]
   Public Key: [Your Public Key]
   ```

3. **ตั้งค่า Permissions**
   ```
   Mining Permission: ✓ Granted
   Transfer Permission: ✓ Granted  
   Staking Permission: ✓ Granted
   ```

💡 **เคล็ดลับ:** ตรวจสอบ message ที่จะเซ็นให้ถูกต้องเสมอ

---

### 18. 🔑 **SETUP SOFT PRIVATE KEY Modal** (setupSoftPrivateKey) {#18-setup-soft-private-key-modal}

**การเข้าถึง:** เมนูขั้นสูง → modal setupSoftPrivateKey

⚠️ **คำเตือน:** ใช้สำหรับผู้ใช้ขั้นสูงเท่านั้น

**คุณสมบัติหลัก:**
- **ตั้งค่า soft private key**
- **รองรับ MCW, WCW wallet types**
- **เพิ่มความปลอดภัยขั้นสูง**

**วิธีใช้งาน:**

1. **เลือกประเภท Wallet**
   ```
   Wallet Type: MCW (My Cloud Wallet)
   Security Level: High
   ```

2. **ใส่ Private Key**
   ```
   Private Key: [Enter Your Private Key]
   Confirm Key: [Confirm Same Key]
   Encryption: AES-256 (Recommended)
   ```

3. **ตั้งค่าความปลอดภัย**
   ```
   Auto-Lock: 30 minutes
   Require Password: Every Transaction
   Backup Options: Encrypted File + Cloud
   ```

💡 **เคล็ดลับ:** ใช้เฉพาะกรณีที่เข้าใจความเสี่ยงและมีความรู้ด้านความปลอดภัย

---

## 🛠️ **Utility Modals - เครื่องมือเสริม**

### 19. 🔄 **ALCOR TOOL Modal** (alcorTool) {#19-alcor-tool-modal}

**การเข้าถึง:** เมนู Trading → modal alcorTool

**คุณสมบัติหลัก:**
- **เชื่อมต่อ Alcor exchange**
- **Trading WAX/TLM อัตโนมัติ**
- **ติดตามราคาแบบเรียลไทม์**

**วิธีใช้งาน:**

1. **เชื่อมต่อ Alcor**
   ```
   API Connection: ✓ Connected
   Account Linked: tradingaccount1
   Available Pairs: WAX/TLM, WAX/USDT
   ```

2. **ตั้งค่าการ Trade**
   ```
   Trading Pair: WAX/TLM
   Strategy: DCA (Dollar Cost Average)
   Buy Threshold: 0.018 WAX per TLM
   Sell Threshold: 0.025 WAX per TLM
   ```

3. **เปิดใช้งาน Auto Trading**
   ```
   Auto Trade: ✓ Enabled
   Max Trade Size: 100 WAX
   Stop Loss: 10%
   ```

💡 **เคล็ดลับ:** เริ่มต้นด้วยจำนวนเล็กๆ เพื่อทดสอบกลยุทธ์ก่อน

---

### 20. 💰 **COST MINER CONFIG Modal** (costMinerConfig) {#20-cost-miner-config-modal}

**การเข้าถึง:** เมนูการตั้งค่า → modal costMinerConfig

**คุณสมบัติหลัก:**
- **ตั้งค่าต้นทุนการขุด**
- **คำนวณ ROI อัตโนมัติ**
- **วิเคราะห์ความคุ้มค่า**

**วิธีใช้งาน:**

1. **ใส่ข้อมูลต้นทุน**
   ```
   Initial Investment: 1000 WAX
   Monthly Operating Cost: 50 WAX
   Tool Depreciation: 10% per month
   ```

2. **ตั้งค่าการคำนวณ**
   ```
   TLM Price: Auto-Update from Market
   WAX Price: Auto-Update from Market
   Calculation Period: Monthly
   ```

3. **ดูผลการวิเคราะห์**
   ```
   Expected Monthly Earnings: 120 WAX
   Monthly Profit: 70 WAX
   ROI: 7% per month
   Break-even Time: 14.3 months
   ```

💡 **เคล็ดลับ:** อัปเดตข้อมูลต้นทุนเป็นประจำเพื่อผลลัพธ์ที่แม่นยำ

---

### 21. 📋 **SUBSCRIPTION INFO Modal** (subscriptionInfo) {#21-subscription-info-modal}

**การเข้าถึง:** เมนูระบบ → modal subscriptionInfo

#### **2 Tabs ภายใน Modal:**

#### **Tab 1: RENEW (subscriptionInfo-main)**
- **หน้าที่:** ต่ออายุบริการ
- **วิธีใช้:**
  1. ดูข้อมูลแพ็คเกจปัจจุบัน
  2. เลือกระยะเวลาที่ต้องการต่อ
  3. ชำระเงินผ่านช่องทางที่มี

#### **Tab 2: ADDITIONAL (subscriptionInfo-additional)**
- **หน้าที่:** เพิ่มบริการเสริม
- **วิธีใช้:**
  1. ดูบริการเสริมที่มี
  2. เลือกสิ่งที่ต้องการเพิ่ม
  3. อัปเกรดแพ็คเกจ

**ข้อมูลแพ็คเกจ:**
```
Current Package: Premium
Expiry Date: 2025-12-31
Included Accounts: 50
Additional Services: API Access, Priority Support
```

💡 **เคล็ดลับ:** ต่ออายุล่วงหน้าเพื่อได้ส่วนลดและไม่มีการหยุดบริการ

---

### 22. 🚫 **GOT BAN Modal** (gotBAN/gotBan) {#22-got-ban-modal}

**การเข้าถึง:** เมนูความปลอดภัย → modal gotBAN

**คุณสมบัติหลัก:**
- **จัดการ account ที่โดน ban**
- **วิเคราะห์สาเหตุ ban**
- **วางแผนการแก้ไข**

**วิธีใช้งาน:**

1. **ตรวจสอบสถานะ Ban**
   ```
   Account: bannedaccount1
   Ban Type: Temporary Mining Ban
   Duration: 24 hours
   Reason: Suspicious Mining Pattern
   ```

2. **วิเคราะห์สาเหตุ**
   ```
   Detection Criteria:
   - Mining frequency too high
   - Pattern too regular
   - Multiple accounts from same IP
   ```

3. **วางแผนแก้ไข**
   ```
   Recommended Actions:
   ✓ Reduce mining frequency
   ✓ Add random delays
   ✓ Use different IP addresses
   ✓ Wait for ban to expire
   ```

💡 **เคล็ดลับ:** ปรับปรุงพฤติกรรมการขุดให้ดูเป็นธรรมชาติมากขึ้น

---

### 23. ❓ **HOW TO Modal** (howto) {#23-how-to-modal}

**การเข้าถึง:** ปุ่ม Help → modal howto

**คุณสมบัติหลัก:**
- **คู่มือการใช้งานแบบ interactive**
- **วิดีโอสาธิต**
- **FAQ และการแก้ไขปัญหา**

**เนื้อหาหลัก:**

1. **Getting Started Guide**
   ```
   ✓ วิธีการสร้าง account แรก
   ✓ การตั้งค่าระบบเบื้องต้น
   ✓ การขุดครั้งแรก
   ```

2. **Advanced Tutorials**
   ```
   ✓ การจัดการหลาย account
   ✓ การใช้งาน team features
   ✓ การปรับแต่งการขุดให้มีประสิทธิภาพ
   ```

3. **Troubleshooting Section**
   ```
   ✓ Account ไม่ขุด
   ✓ ทรัพยากรหมด
   ✓ การเชื่อมต่อขัดข้อง
   ```

4. **Video Tutorials**
   ```
   ✓ Dashboard Overview (5 min)
   ✓ Modal System Guide (15 min)
   ✓ Advanced Features (20 min)
   ```

💡 **เคล็ดลับ:** เริ่มจาก Getting Started แล้วค่อยไปขั้นสูง

---

## 🎯 **เคล็ดลับการใช้งาน Modal System**

### 🔄 **การนำทางระหว่าง Modals**
- ใช้ปุ่ม "Back" เพื่อกลับไปหน้าก่อน
- ปุ่ม "Close" เพื่อปิด modal ทั้งหมด
- คลิกพื้นที่ว่างรอบ modal เพื่อปิด

### ⌨️ **Keyboard Shortcuts**
```
ESC - ปิด modal ปัจจุบัน
Tab - เปลี่ยน field ถัดไป
Enter - ยืนยันการกระทำ
Ctrl+S - บันทึกการตั้งค่า
```

### 💾 **การบันทึกการตั้งค่า**
- การตั้งค่าส่วนใหญ่จะบันทึกอัตโนมัติ
- บางการตั้งค่าต้องคลิก "Save" หรือ "Apply"
- การตั้งค่าสำคัญจะมีการยืนยันก่อนบันทึก

### 🔔 **การแจ้งเตือน**
- สีเขียว = สำเร็จ
- สีเหลือง = คำเตือน  
- สีแดง = ข้อผิดพลาด
- สีน้ำเงิน = ข้อมูล

---

## 🚨 **การแก้ไขปัญหาที่พบบ่อย**

### ❌ **Modal ไม่เปิด**
1. รีเฟรชหน้าเว็บ
2. ตรวจสอบ JavaScript ใน browser
3. ปิด ad blocker
4. ลองใช้ browser อื่น

### ⚠️ **ข้อมูลไม่โหลด**
1. ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
2. ดู console error ใน browser
3. ลองรีเฟรชหน้าใหม่

### 🔧 **ปุ่มไม่ทำงาน**
1. รอให้หน้าโหลดเสร็จสิ้น
2. ตรวจสอบ popup blocker
3. ลองคลิกปุ่มอื่นเพื่อทดสอบ

### 🔄 **Transaction ล้มเหลว**
1. ตรวจสอบ account balance
2. ดูสถานะ WAX blockchain
3. ลองทำ transaction ใหม่หลังจาก 1-2 นาที

---

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง

**🔗 ลิงก์ที่เกี่ยวข้อง:**
- [Dashboard Guide](dashboard-guide.md)
- [Advanced Features](advanced-features.md)  
- [Troubleshooting Guide](../troubleshooting/common-issues.md)

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** บุ๊คมาร์กหน้านี้ไว้เพื่อใช้อ้างอิงขณะใช้งาน Modal ต่างๆ ใน AWCLOUD CPanel
{% endhint %}