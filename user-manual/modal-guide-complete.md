# 🎯 คู่มือ Modal System ครบถ้วน - AWCLOUD CPanel

{% hint style="success" %}
**คู่มือฉบับสมบูรณ์** สำหรับการใช้งาน Modal Systems ทั้ง **25 modals** ที่มีอยู่จริงในระบบ AWCLOUD CPanel (จากการวิเคราะห์ระบบจริง)
{% endhint %}

## 🔗 คู่มือที่เกี่ยวข้อง

- **[Dashboard Guide](dashboard-guide.md)** - วิธีเข้าถึง Modals จาก Dashboard และการจัดการ WAX Accounts
- **[Transfer Resources](transfer-resources.md)** - การจัดการ WAX Resources แบบละเอียด

## 🔰 การใช้งานพื้นฐานสำหรับผู้เริ่มต้น

### 📖 ก่อนใช้งาน Modal Systems

**สิ่งที่ควรรู้:**
- Modal คือหน้าต่างป๊อปอัพที่เปิดขึ้นมาเพื่อทำงานเฉพาะ
- แต่ละ Modal มีหน้าที่ต่างกัน เช่น จัดการ NFT, ตั้งค่า Land, โอน Token
- เข้าถึงได้ผ่านปุ่มต่างๆ ใน Dashboard หลัก

**วิธีการใช้งานทั่วไป:**
1. คลิกปุ่มที่เกี่ยวข้องใน Dashboard
2. Modal จะเปิดขึ้นมา
3. เลือก Tab ที่ต้องการ (ถ้ามี)
4. กรอกข้อมูลหรือเลือกตัวเลือก
5. คลิกปุ่มยืนยันเพื่อดำเนินการ

### 🎯 Modal ที่ใช้บ่อยที่สุด

**สำหรับผู้เริ่มต้น ควรเรียนรู้ 3 Modal นี้ก่อน:**
1. **BOX NFT** - จัดการเครื่องมือขุดและ NFT
2. **SET LAND** - เลือกพื้นที่สำหรับขุด  
3. **TRANSFER WAX** - ส่ง Token ระหว่าง Account

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
13. [teamPoolConfig](#13-team-pool-config-modal) - จัดการ Team Pool ขั้นสูง

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

### 💎 **NFT Redemption Modals** (แลกเปลี่ยน NFT)
23. [redeemPointNFT](#23-redeem-point-nft-modal) - แลก Point NFTs
24. [redeemPremiumNFT](#24-redeem-premium-nft-modal) - แลก Premium NFTs  
25. [redeemLevelNFT](#25-redeem-level-nft-modal) - แลก Level NFTs

---

## 🎯 **Core Modals - ใช้งานประจำวัน**

### 1. 🛠️ **BOX NFT Modal** (boxNFT) {#1-box-nft-modal}

**การเข้าถึง:** คลิกปุ่ม **TOOLS** ในแถว account ที่ต้องการ

#### **7 Tabs ภายใน Modal:**

#### **Tab 1: BOX NFT (set-tool)**
- **หน้าที่:** จัดการ NFT inventory และ mining tools
- **ฟังก์ชั่นหลัก:**
  - **SET TOOL** - เลือกเครื่องมือสำหรับขุด
  - **SET TOOLS** - ตั้งค่าเครื่องมือสำหรับ account เดียว
  - **SET TOOLS ALL** - ตั้งค่าเครื่องมือให้ทุก account
  - **ดู Durability** - ตรวจสอบความทนทานของเครื่องมือ
  - **ดู Rarity** - ตรวจสอบระดับความหายากของ NFT
- **วิธีใช้:**
  1. เลือก tools ที่ต้องการใช้ขุด
  2. คลิก "Set Tools" เพื่อนำไปใช้งาน
  3. ตรวจสอบ durability ของ tools
  4. ใช้ "SET TOOLS ALL" เพื่อใช้เครื่องมือเดียวกันกับทุก account

#### **Tab 2: SEND NFT (send-nft)**
- **หน้าที่:** ส่ง NFT ระหว่าง account
- **ฟังก์ชั่นหลัก:**
  - **เลือก NFT** - เลือกจาก inventory ที่มี
  - **ใส่ Account ปลายทาง** - ระบุ account ที่จะส่งไป (เช่น xxxxx.wam)
  - **เพิ่ม Memo** - เขียนข้อความแนบ (ถ้าต้องการ)
  - **SEND NFT** - ปุ่มยืนยันการส่ง
  - **ALLOCATE NFT** - จัดสรร NFT ให้หลาย account
- **วิธีใช้:**
  1. เลือก NFT ที่ต้องการส่ง
  2. ใส่ชื่อ account ปลายทาง (เช่น targetaccount.wam)
  3. เขียน memo หากจำเป็น
  4. คลิก "SEND NFT" เพื่อยืนยันการส่ง

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
- **ฟังก์ชั่นหลัก:**
  - **ใส่ Land ID** - ใส่รหัส Land (เช่น 1099512959648)
  - **GET LAND** - ดูข้อมูล Land ที่เลือก
  - **SET LAND** - ใช้ Land สำหรับ account เดียว
  - **SET TO ALL** - ใช้ Land สำหรับทุก account
  - **ดู Mining Rate** - ตรวจสอบอัตราการขุด
  - **ดู Delay** - ตรวจสอบเวลารอระหว่างการขุด
- **วิธีใช้:**
  1. ใส่ Land ID ในช่อง (เช่น 1099512959648)
  2. คลิก "GET LAND" เพื่อดูข้อมูล Land
  3. ตรวจสอบ mining rate และ delay
  4. คลิก "SET LAND" เพื่อใช้กับ account เดียว
  5. หรือคลิก "SET TO ALL" เพื่อใช้กับทุก account

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

### 🌟 **ข้อมูล Planet ใน Alien Worlds (6 ดาว)**

#### **1. 🌍 Eyeke**
- **NFT Multiplier**: ปานกลาง (2-3x)
- **Pot Size**: ขนาดกลาง
- **เหมาะสำหรับ**: Beginner ถึง Intermediate
- **แนะนำ**: เสถียร, แข่งขันไม่สูงมาก

#### **2. 🌕 Kavian**
- **NFT Multiplier**: ปานกลาง (2-3x)
- **Pot Size**: ขนาดกลาง
- **เหมาะสำหรับ**: Beginner ถึง Intermediate
- **แนะนำ**: เสถียร, เหมาะสำหรับผู้เริ่มต้น

#### **3. 🌸 Magor**
- **NFT Multiplier**: สูง (3-5x)
- **Pot Size**: ใหญ่
- **เหมาะสำหรับ**: Advanced miners
- **แนะนำ**: ดุลระหว่างรายได้และความเสี่ยง

#### **4. 🌋 Naron**
- **NFT Multiplier**: สูง (3-5x)
- **Pot Size**: ใหญ่
- **เหมาะสำหรับ**: Advanced miners
- **แนะนำ**: รายได้สูง, เหมาะสำหรับผู้มีประสบการณ์

#### **5. 🌊 Neri**
- **NFT Multiplier**: ปานกลาง (2-4x)
- **Pot Size**: ปานกลาง
- **เหมาะสำหรับ**: Balanced mining
- **แนะนำ**: สมดุล, เหมาะสำหรับการขุดต่อเนื่อง

#### **6. 🌌 Veles**
- **NFT Multiplier**: สูง (5x ขึ้นไป)
- **Pot Size**: ใหญ่มาก
- **เหมาะสำหรับ**: Advanced miners
- **แนะนำ**: รายได้สูงสุด, สำหรับผู้ที่มีทรัพยากรเพียงพอ

### 🎯 **กลยุทธ์การเลือก Land**

#### **📊 ปัจจัยในการเลือก Land:**
1. **💰 NFT Multiplier** - ยิ่งสูงได้ TLM มาก แต่แข่งขันสูง
2. **🏆 Pot Size** - ใหญ่ = มี TLM มากในระบบ
3. **⏰ Mining Cooldown** - สั้น = ขุดบ่อย, ยาว = ได้เยอะต่อครั้ง
4. **👥 จำนวนผู้เล่น** - น้อย = โอกาสสูง, มาก = แข่งขันสูง

#### **🎯 Strategy แนะนำตามระดับ:**

**สำหรับ Beginner (Conservative):**
- **Planet**: Eyeke หรือ Kavian
- **Multiplier**: 2-3x
- **Pot Size**: Medium

**สำหรับ Intermediate (Balanced):**
- **Planet**: Magor หรือ Naron  
- **Multiplier**: 3-5x
- **Pot Size**: Large

**สำหรับ Advanced (Aggressive):**
- **Planet**: Veles หรือ Naron
- **Multiplier**: 5x ขึ้นไป
- **Pot Size**: Very Large

💡 **เคล็ดลับ:** เริ่มจาก Eyeke/Kavian เพื่อเรียนรู้ แล้วค่อยไปยัง Planet ที่ท้าทายกว่า

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

**รายละเอียดการใช้งาน:**

#### 💎 **เลือกประเภท Token**
- **WAX**: สกุลเงินหลักของ WAX blockchain
- **TLM (Trilium)**: token รางวัลจาก Alien Worlds

#### 🔢 **ระบุจำนวน Token**
- ใส่จำนวนที่ต้องการโอน (เช่น 10.0000)
- ระบบจะแสดงยอดคงเหลือปัจจุบัน  
- ตรวจสอบให้แน่ใจว่าพอสำหรับค่าธรรมเนียม

#### 🎯 **ระบุผู้รับ**
- ใส่ WAX account name ของผู้รับ
- **⚠️ สำคัญ:** ตรวจสอบความถูกต้องอย่างละเอียด การโอนผิดไม่สามารถยกเลิกได้
- สามารถใส่ account ของตัวเองได้

#### 📝 **Memo (ข้อความ)**
- ใส่ข้อความแนบ (ไม่บังคับ)
- เหมาะสำหรับการระบุวัตถุประสงค์  
- มีประโยชน์เมื่อโอนไปยัง exchange

**ตัวอย่างการโอน:**
```
Token: WAX
Amount: 5.0000  
To: yourfriend.wam
Memo: Payment for mining tools
```

#### **Tab 2: TASK (transfer-task)**
- **หน้าที่:** ตั้งค่าการส่ง token อัตโนมัติ
- **วิธีใช้:**
  1. กำหนดเงื่อนไขการส่ง (เช่น เมื่อ balance > 100 WAX)
  2. ตั้งเวลาการส่งประจำ
  3. กำหนดจำนวนที่ส่งแต่ละครั้ง

#### ⚠️ **ข้อควรระวังในการโอน**

🔒 **ความปลอดภัย:**
- **ตรวจสอบ account name 2-3 ครั้ง** - การโอนผิดไม่สามารถยกเลิกได้
- **เก็บ private key ให้ปลอดภัย** - ห้ามแชร์ให้ใครฟัง
- **ใช้ secure network** - หลีกเลี่ยง public WiFi

💰 **การจัดการเงิน:**
- **เก็บ WAX สำหรับค่าธรรมเนียม** - อย่างน้อย 0.1 WAX
- **ตรวจสอบยอดคงเหลือ** - ก่อนทำการโอน
- **โอนทีละน้อยก่อน** - เมื่อโอนไปยัง account ใหม่

💡 **เคล็ดลับ:** ใช้ tab TASK สำหรับการจัดการ token แบบอัตโนมัติ

---

### 4. ⚡ **STAKE WAX Modal** (stakeWax) {#4-stake-wax-modal}

**การเข้าถึง:** คลิกปุ่ม **RESOURCES** ในแถว account ที่ต้องการ

#### **6 Tabs ภายใน Modal:**

#### **Tab 1: STAKE (stake)**
- **หน้าที่:** Stake WAX เพื่อเพิ่มทรัพยากร

**🔋 ความเข้าใจ WAX Resources:**
- **CPU (Processing Power):** ใช้สำหรับประมวลผล transactions, mining, smart contract calls
- **NET (Network Bandwidth):** ใช้สำหรับส่งข้อมูลใน network ทุก transaction
- **RAM (Storage Space):** ใช้สำหรับเก็บข้อมูลใน blockchain, สร้าง account, เก็บข้อมูล NFT

**วิธีใช้งาน:**
1. **เลือกประเภท:** CPU หรือ NET (RAM ซื้อแยกใน tab อื่น)
2. **ใส่จำนวน WAX:** ระบุจำนวนที่ต้องการ stake
3. **คลิก "Stake":** เพื่อยืนยันการ stake

**💡 คำแนะนำการ Stake:**

สำหรับ **Basic Mining (1-5 accounts):**
- **CPU:** 200-300 WAX stake (รองรับ mining ตลอดวัน)
- **NET:** 100-150 WAX stake (ส่งข้อมูล transaction ต่อเนื่อง)

สำหรับ **Advanced Mining (5+ accounts):**
- **CPU:** 1500-3000 WAX stake per account
- **NET:** 500-800 WAX stake per account

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

#### ⚠️ **การแก้ไขปัญหาที่พบบ่อย**

**❌ CPU/NET หมด:**
- **อาการ:** Mining หยุด, transactions ล้มเหลว
- **วิธีแก้:** Stake WAX เพิ่มเติมทันที หรือหยุด mining ชั่วคราว

**💾 RAM ไม่พอ:**
- **อาการ:** ไม่สามารถรับ NFT, account data เต็ม
- **วิธีแก้:** ซื้อ RAM เพิ่มทันที หรือขาย NFT ที่ไม่ใช้

**💰 ไม่มี WAX สำหรับค่าธรรมเนียม:**
- **อาการ:** ทุก transaction ล้มเหลว
- **วิธีแก้:** โอน WAX จาก account อื่น หรือ Unstake CPU/NET

💡 **เคล็ดลับสำคัญ:** 
- สำรอง WAX สำหรับ unstake ไว้เสมอ เพราะต้องรอ 3 วัน
- เก็บ WAX อย่างน้อย 0.1 สำหรับค่าธรรมเนียมเสมอ
- Monitor ทรัพยากรเป็นประจำและเติมก่อนจะหมด

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

**การเข้าถึง:** Dashboard หลัก → ปุ่ม "OPEN POOL RATE" (เมื่อเลื่อนลงมา)

{% hint style="info" %}
**Modal สำคัญ:** เป็นหัวใจของการตั้งค่า Mining - ควบคุมอัตราการขุดทุก Planet
{% endhint %}

**คุณสมบัติหลัก:**
- **ตั้งค่าอัตราการขุด** สำหรับ 4 Planet หลัก (WAX, EOS, YEO, LIV)
- **Check Pool Before Mine** - ตรวจสอบสภาพ Pool ก่อนขุด
- **Smart Mining Rate** - ปรับอัตราตามสภาพ Pool อัตโนมัติ
- **Real-time Pool Status** - ดูสถานะ Pool แบบเรียลไทม์

#### **การตั้งค่าแต่ละ Planet:**

#### 🟡 **WAX Pool Configuration**
```
Current Rate: 0.00 (ค่าเริ่มต้น)
ช่วงปรับได้: 0.00 - 2.00
เวลารอ: 160 x Rate ค่าที่ตั้ง = วินาทีรอ
ฟังก์ชั่น: Enable Check WAX Pool Before Mine

ตัวอย่าง:
- Rate 0.50 = รอ 80 วินาที (160 x 0.50)
- Rate 1.00 = รอ 160 วินาที (160 x 1.00)
- Rate 2.00 = รอ 320 วินาที (160 x 2.00)
```

#### 🔵 **EOS Pool Configuration**  
```
Current Rate: 1.00 (ค่าเริ่มต้น) 
ช่วงปรับได้: 0.00 - 2.00
เวลารอ: 160 x Rate = วินาที
ฟังก์ชั่น: Enable Check EOS Pool Before Mine

หมายเหตุ: EOS Pool มีเสถียรภาพสูง เหมาะสำหรับมือใหม่
```

#### 🟣 **YEO Pool Configuration**
```
Current Rate: 1.00 (ค่าเริ่มต้น)
ช่วงปรับได้: 1.00 - 3.00+ 
เวลารอ: สูตรซับซ้อน
- Base: 600 x (Rate ≥ 1.0 ? 1.0 : Rate)
- Bonus: 90 x (((Rate - 1.0) x 10) / 1.25)
- Total: Base + Bonus วินาที

ตัวอย่าง:
- Rate 1.00 = 600 วินาที (10 นาที)
- Rate 1.50 = 600 + 288 = 888 วินาที (14.8 นาที)
- Rate 2.00 = 600 + 576 = 1176 วินาที (19.6 นาที)
```

#### 🟢 **LIV Pool Configuration**
```
Current Rate: 1.00 (ค่าเริ่มต้น)
ช่วงปรับได้: 1.00 - 3.00+
เวลารอ: เหมือน YEO Pool (สูตรเดียวกัน)
- Base: 600 x (Rate ≥ 1.0 ? 1.0 : Rate) 
- Bonus: 90 x (((Rate - 1.0) x 10) / 1.25)

หมายเหตุ: LIV Pool มีผลตอบแทนสูง แต่ความเสี่ยงมากกว่า
```

#### **วิธีการใช้งาน Step-by-Step:**

1. **เปิด Pool Mineable Modal**
   ```
   จาก Dashboard → คลิก "OPEN POOL RATE"
   ```

2. **เลือก Planet ที่ต้องการตั้งค่า**
   ```
   Tabs ที่มี: WAX | EOS | YEO | LIV
   ```

3. **ปรับค่า Mining Rate**
   ```
   ลาก Slider ไปยังค่าที่ต้องการ
   ระบบจะแสดง:
   - CHANGED RATE: ค่าใหม่ที่เลือก
   - เวลารอใหม่ (วินาที)
   - สถานะ Pool Check
   ```

4. **ยืนยันการตั้งค่า**
   ```
   ระบบจะ Auto-Save เมื่อปล่อย Slider
   จะแสดง "CURRENT RATE" เป็นค่าใหม่
   ```

#### **เคล็ดลับการใช้งาน:**

💡 **สำหรับผู้เริ่มต้น:**
- **WAX Pool:** เริ่มที่ Rate 0.50-1.00
- **EOS Pool:** ใช้ Rate 1.00 (ค่าเริ่มต้น)
- **YEO/LIV:** เริ่มที่ Rate 1.00 ก่อน

⚡ **สำหรับผู้เชี่ยวชาญ:**
- **Monitor Pool Status:** ดู Pool efficiency ก่อนปรับ Rate
- **Peak Hours:** ลด Rate ช่วงคนใช้เยอะ (เย็น-กลางคืน)
- **Off-Peak:** เพิ่ม Rate ช่วงคนใช้น้อย (เช้า-บ่าย)

⚠️ **ข้อควรระวัง:**
- Rate สูงเกินไป = รอนาน, ได้ผลน้อย
- Rate ต่ำเกินไป = Pool ล้น, competition สูง
- ดู Pool Stats ก่อนตัดสินใจเสมอ

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
- **บันทึกการสั่งการ** ที่เกิดขึ้นที่ Web UI Interface
- **ติดตาม Action ต่างๆ** เช่น Set Tool, Send NFT, Transfer Token
- **เก็บข้อมูลใน LocalStorage** สำหรับการตรวจสอบ

**วิธีใช้งาน:**
1. **ดูประวัติ Action**: ดูรายการคำสั่งที่เคยใช้งาน
2. **ตรวจสอบสถานะ**: ดูสถานะการทำงานของแต่ละ Action
3. **จัดการข้อมูล**: ล้างหรือจัดการข้อมูลใน LocalStorage

**เกี่ยวกับ Action Report:**
Action Report เป็น Modal สำหรับบันทึกและตรวจสอบการสั่งการต่างๆ ที่ใช้งานผ่าน Web Interface

💡 **เคล็ดลับ:** ใช้เพื่อตรวจสอบและติดตามการใช้งานระบบ

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

### 13. 🏊 **TEAM POOL CONFIG Modal** (teamPoolConfig) {#13-team-pool-config-modal}

**การเข้าถึง:** Dashboard หลัก → ปุ่ม "TEAM POOL CONFIG" (สีเขียว)

{% hint style="success" %}
**📖 คู่มือครบถ้วน:** [Team Pool System Complete Guide](../features/team-pool.md) - เอกสารฉบับสมบูรณ์พร้อม configuration guides, troubleshooting และ enterprise management
{% endhint %}

#### **🎯 Modal Interface Overview**

**คุณสมบัติหลักของ Modal:**
- **🆕 Team Creation Wizard** - สร้าง team pool แบบ step-by-step  
- **⚙️ Mode Selection** - เลือก Standard หรือ MPool mode
- **👥 Member Management** - จัดการ miner/dummy accounts
- **📊 Real-time Statistics** - ดูสถิติการทำงาน team

#### **🚀 Modal Workflow Summary**

**การสร้าง Team Pool ใหม่:**
1. **Team Setup**: กำหนด Team ID และเปิดใช้งาน
2. **Mode Selection**: เลือกระหว่าง LPOOL/MPOOL mode  
3. **Account Assignment**: กำหนด accounts ตาม pool type
4. **Configuration**: ตั้งค่า level requirements และ resources

#### **⚙️ Modal Configuration Options**

**LPOOL Mode (Level Pool):**
- **Primary Purpose:** เก็บเลเวลก่อนส่งต่อให้ Miner Pool
- **Duration Options:** 4h - 4 weeks ตามเป้าหมายระดับ
- **Level Tracking:** ติดตามและจัดการระดับ accounts
- **Transfer System:** ส่งต่อ accounts ที่พร้อมแล้ว
- **เหมาะสำหรับ:** การเตรียม accounts ใหม่, level grinding

**MPOOL Mode (Miner Pool):**  
- **Primary Purpose:** การขุดด้วย accounts ที่มีระดับเพียงพอแล้ว
- **Level Requirements:** รับเฉพาะ accounts ที่ผ่านระดับแล้ว
- **Advanced Tools:** ใช้ mining tools ระดับสูงที่ unlock แล้ว
- **High Performance:** Mining ด้วยประสิทธิภาพสูงสุด
- **เหมาะสำหรับ:** Professional mining, high-level accounts

#### **👥 Member Management Interface**

**การจัดการใน Modal:**
- **Miner Accounts:** กำหนด accounts ที่จะทำหน้าที่ขุด
- **Pool Type:** เลือก LPOOL หรือ MPOOL ตามวัตถุประสงค์
- **Team Settings:** ตั้งค่าการทำงานของ team
- **Resource Management:** จัดการทรัพยากรของ team

#### **📊 Real-time Monitoring in Modal**

**สถิติที่แสดงใน Modal:**
- **📈 Pool Performance:** Success rate และ efficiency metrics
- **👥 Member Status:** สถานะ miner accounts
- **💰 Revenue Tracking:** Daily TLM และ revenue statistics
- **🛡️ Security Status:** Ban detection และ protection status

#### **💡 Modal Usage Best Practices**

**📊 LPOOL Mode (Level Pool) - การใช้งาน:**
- **หน้าที่หลัก:** เก็บประสบการณ์และเลเวลให้กับ accounts
- **เป้าหมาย:** เตรียม accounts ให้พร้อมสำหรับ mining ขั้นสูง
- **ระยะเวลา:** ขึ้นกับเป้าหมายระดับที่ต้องการ
- **Output:** Accounts ที่มีระดับเพียงพอสำหรับ MPOOL

**⚡ MPOOL Mode (Miner Pool) - การใช้งาน:**
- **หน้าที่หลัก:** ขุดด้วยประสิทธิภาพสูงสุด
- **Input Requirements:** Accounts ที่มีระดับจาก LPOOL แล้ว
- **Tools Support:** ใช้เครื่องมือขุดระดับสูงที่ unlock แล้ว
- **Performance:** Mining ด้วยประสิทธิภาพสูงสุด

**🔄 Workflow Integration:**
- **LPOOL → MPOOL:** ส่งต่อ accounts ที่เก็บเลเวลเสร็จแล้ว
- **Continuous Cycle:** สร้างวงจรการทำงานที่ต่อเนื่อง

{% hint style="info" %}
**🔗 รายละเอียดครบถ้วน:** สำหรับ step-by-step configuration, JSON examples, API integration, troubleshooting และ enterprise management โปรดดู [Team Pool System Complete Guide](../features/team-pool.md)
{% endhint %}

---

## 💳 **Wallet Modals - สร้าง Account**

### 14. ☁️ **CREATE WAX CLOUD WALLET Modal** (createWaxCloudWallet) {#14-create-wax-cloud-wallet-modal}

**การเข้าถึง:** คลิกปุ่ม "CREATE WAX CLOUD WALLET" (สีเขียว) ในส่วน Wallet Management

**ภาพรวมระบบ:**
ระบบสร้าง WAX Cloud Wallet อัตโนมัติผ่าน AWCLOUD CPanel ที่มี 3 ขั้นตอนหลัก โดยใช้ระบบ Task-based processing เพื่อจัดการการสร้าง accounts จำนวนมาก (1-20 accounts ต่อ task)

#### **🎛️ ส่วนควบคุมหลัก (Main Controls)**

**TASK ID Management:**
- **Dropdown TASK ID** - เลือก task ที่มีอยู่หรือสร้างใหม่
- **CREATE NEW TASK** - สร้าง task ใหม่สำหรับการสร้าง accounts
- **AMOUNT Slider** - เลือกจำนวน accounts ที่จะสร้าง (1-20)
- **WAX CLOUD WALLET TABLE** - แสดงสถานะ accounts ในรูปแบบตาราง

#### **📋 3 ขั้นตอนการสร้าง WAX Cloud Wallet**

### **🎯 STEP 1: CREATE AND REGISTERING**

**หน้าที่:** สร้าง task และลงทะเบียน account name ใหม่

**กระบวนการ:**
1. **เลือก TASK ID** จาก dropdown หรือสร้างใหม่
2. **กำหนดจำนวน accounts** ด้วย Amount slider (1-20)
3. **คลิก "CREATE NEW TASK"** เพื่อเริ่มกระบวนการ
4. **คลิก "TRYING"** เพื่อเริ่มสร้าง accounts

**สถานะการทำงาน:**
- **Status 1-4:** สร้างแต่ยังไม่ได้ลงทะเบียนสมบูรณ์
- **Status 5:** ลงทะเบียนเสร็จสมบูรณ์ พร้อมขั้นตอนต่อไป

**ค่าใช้จ่าย:** 0.5 WAX ต่อ account (จ่ายจาก Master Key)

**ตัวเลือกเพิ่มเติม:**
- **DELETE** - ลบ task ที่เลือก
- **FORMAT** - จัดรูปแบบข้อมูลในตาราง

### **💳 STEP 2: ACTIVE AND PAY FEES WALLET**

**หน้าที่:** เปิดใช้งาน wallet และชำระค่าธรรมเนียม

**ข้อกำหนด:** Account ต้องมี Status = 5 (ลงทะเบียนสมบูรณ์แล้ว)

**โหมดการเปิดใช้งาน:**
- **Binance Mode** (แนะนำ) - ค่าธรรมเนียม 0.7 WAX
- **Exchange (OKX) Mode** - ค่าธรรมเนียม 1.1 WAX (ปิดใช้งาน)
- **Basic Transfer Mode** - ค่าธรรมเนียม 0.5 WAX (ปิดใช้งาน)

**การตั้งค่า:**
1. **เลือก Active Mode** - ปัจจุบันใช้ Binance เท่านั้น
2. **กำหนดจำนวน WAX** - ค่าเริ่มต้น 10 WAX (ขั้นต่ำ 10, สูงสุด 1,000)
3. **คลิก "ACTIVE"** เพื่อเริ่มกระบวนการเปิดใช้งาน

**สถานะหลังการทำงาน:** Status = 6 (สร้าง transaction สำหรับเปิดใช้งาน)

### **🔑 STEP 3: INTEND SETUP AND CLAIM SOFT KEY**

**หน้าที่:** ตั้งค่าขั้นสุดท้ายและรับ private keys

**ข้อกำหนด:** Account ต้องมี Status = 6 (เปิดใช้งานแล้ว)

**กระบวนการ:**
1. **ตรวจสอบสถานะ** - ให้แน่ใจว่า account มี Status = 6
2. **คลิก "INTEND"** เพื่อเริ่มกระบวนการสุดท้าย
3. **รับ Private Keys** - ระบบจะสร้างและส่งมอบ private keys

**สถานะสุดท้าย:** Status = 7 (สร้างและรับ private key สมบูรณ์)

#### **📊 ระบบติดตามสถานะ (Status Monitoring)**

**สถานะต่างๆ ในระบบ:**
- **Status 1-4:** กำลังสร้างและลงทะเบียน account
- **Status 5:** ลงทะเบียนสมบูรณ์ พร้อม STEP 2
- **Status 6:** เปิดใช้งานแล้ว พร้อม STEP 3
- **Status 7:** สร้างสมบูรณ์ พร้อมใช้งาน

**การติดตามแบบ Real-time:**
- **WAX CLOUD WALLET TABLE** แสดงสถานะทุก account
- **Automatic Updates** - อัปเดตสถานะอัตโนมัติ
- **Task Progress** - แสดงความคืบหน้าของแต่ละ task

#### **⚠️ ข้อควรระวังและข้อกำหนด**

**ความรับผิดชอบ:**
- ผู้ใช้ยอมรับความเสี่ยงทั้งหมดในการใช้งาน
- AWCLOUD ไม่รับผิดชอบต่อการใช้งานและความเสี่ยงที่เกิดขึ้น

**ข้อจำกัดการใช้งาน:**
- สร้างได้สูงสุด 20 accounts ต่อ task
- ต้องมี WAX เพียงพอใน Master Key สำหรับค่าธรรมเนียม
- กระบวนการอาจใช้เวลาหลายนาทีขึ้นอยู่กับ network

#### **💡 Tips การใช้งานอย่างมีประสิทธิภาพ**

**การจัดการ Task:**
- สร้าง task เล็กๆ (5-10 accounts) เพื่อทดสอบก่อน
- ตั้งชื่อ task ให้สื่อความหมายเพื่อง่ายต่อการติดตาม
- ตรวจสอบสถานะเป็นระยะจนกว่าจะเสร็จสมบูรณ์

**การประหยัดค่าใช้จ่าย:**
- ใช้ Binance Mode เพื่อประหยัดค่าธรรมเนียม
- วางแผนจำนวน accounts ให้เหมาะสมกับการใช้งาน
- เตรียม WAX สำรองไว้เพียงพอสำหรับทั้ง task

**การรักษาความปลอดภัย:**
- บันทึก account names และ private keys ไว้อย่างปลอดภัย
- ไม่แชร์ task IDs หรือข้อมูลส่วนตัวให้ผู้อื่น
- ตรวจสอบสถานะ accounts เป็นประจำ

---

### 15. ⚓ **CREATE ANCHOR WALLET Modal** (createAnchorWallet) {#15-create-anchor-wallet-modal}

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

### 16. ✍️ **REGISTER WALLET SIGN Modal** (registerWalletSign) {#16-register-wallet-sign-modal}

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

### 17. 🔑 **SETUP SOFT PRIVATE KEY Modal** (setupSoftPrivateKey) {#17-setup-soft-private-key-modal}

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

### 18. 🔄 **ALCOR TOOL Modal** (alcorTool) {#18-alcor-tool-modal}

**การเข้าถึง:** เมนู Trading → modal alcorTool

**คุณสมบัติหลัก:**
- **เชื่อมต่อ Alcor exchange**
- **Trading WAX/TLM อัตโนมัติ**
- **ติดตามราคาแบบเรียลไทม์**

**วิธีใช้งาน:**

1. **เชื่อมต่อ Alcor**

2. **ตั้งค่าการ Trade** - เลือกคู่สกุลเงินและกำหนด trading strategy
3. **เปิดใช้งาน Auto Trading** - เปิดใช้การซื้อขายอัตโนมัติ

💡 **เคล็ดลับ:** เริ่มต้นด้วยจำนวนเล็กๆ เพื่อทดสอบกลยุทธ์ก่อน

---

### 19. 💰 **COST MINER CONFIG Modal** (costMinerConfig) {#19-cost-miner-config-modal}

**การเข้าถึง:** เมนูการตั้งค่า → modal costMinerConfig

**คุณสมบัติหลัก:**
- **การจัดการ Power UP ใน WAX Chain**
- **ตั้งค่าการจ่าย WAX เพื่อรับ Resources**
- **จัดการค่าใช้จ่ายในการทำธุรกรรม**

**วิธีใช้งาน:**

1. **ตั้งค่า Power UP** - กำหนดการใช้ WAX สำหรับ CPU/NET/RAM
2. **จัดการ Resource Costs** - ควบคุมค่าใช้จ่ายในการทำธุรกรรม
3. **ติดตามการใช้งาน** - ดูการใช้ WAX สำหรับ resources

💡 **เคล็ดลับ:** ใช้งานร่วมกับระบบ Power UP เพื่อประหยัดค่าธรรมเนียม

---

### 20. 📋 **SUBSCRIPTION INFO Modal** (subscriptionInfo) {#20-subscription-info-modal}

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

### 21. 🚫 **GOT BAN Modal** (gotBAN/gotBan) {#21-got-ban-modal}

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

### 22. ❓ **HOW TO Modal** (howto) {#22-how-to-modal}

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

## 💎 **NFT Redemption Modals - แลกเปลี่ยน NFT**

### 23. 🏆 **REDEEM POINT NFT Modal** (redeemPointNFT) {#23-redeem-point-nft-modal}

**การเข้าถึง:** ระบบ NFT Management → Redeem Point NFTs

**คุณสมบัติหลัก:**
- **แลกเปลี่ยน Point NFTs** จากคะแนนที่สะสมได้
- **รับ NFTs พิเศษ** ที่ไม่สามารถหาได้จากการขุดปกติ
- **NFTs คุณภาพสูง** สำหรับการขุดที่มีประสิทธิภาพ

**วิธีใช้งาน:**
1. **ตรวจสอบคะแนน**: ดูจำนวน points ที่มีอยู่
2. **เลือก NFTs**: เลือก NFTs ที่ต้องการแลก
3. **ยืนยันการแลก**: ยืนยันการแลกเปลี่ยน
4. **รับ NFTs**: NFTs จะถูกส่งไปยัง account

💡 **เคล็ดลับ:** สะสม points เพื่อแลก NFTs คุณภาพสูง

---

### 24. 💰 **REDEEM PREMIUM NFT Modal** (redeemPremiumNFT) {#24-redeem-premium-nft-modal}

**การเข้าถึง:** ระบบ NFT Management → Redeem Premium NFTs

**คุณสมบัติหลัก:**
- **แลกเปลี่ยน Premium NFTs** สำหรับสมาชิกพิเศษ
- **NFTs Exclusive** ที่มีเฉพาะใน premium packages
- **Mining Efficiency สูง** เหมาะสำหรับ professional miners

**วิธีใช้งาน:**
1. **ตรวจสอบสมาชิก**: ยืนยันสถานะ premium membership
2. **ดูรายการ NFTs**: ดู premium NFTs ที่แลกได้
3. **เลือกและแลก**: เลือก NFTs และทำการแลกเปลี่ยน

💡 **เคล็ดลับ:** Premium NFTs ให้ผลตอบแทนสูงกว่า NFTs ปกติ

---

### 25. 📈 **REDEEM LEVEL NFT Modal** (redeemLevelNFT) {#25-redeem-level-nft-modal}

**การเข้าถึง:** ระบบ NFT Management → Redeem Level NFTs

**คุณสมบัติหลัก:**
- **แลกเปลี่ยน Level NFTs** ตามระดับ account
- **ปลดล็อค NFTs** เมื่อถึงระดับที่กำหนด
- **NFTs เฉพาะระดับ** ที่ไม่สามารถหาได้จากที่อื่น

**วิธีใช้งาน:**
1. **ตรวจสอบระดับ**: ดูระดับปัจจุบันของ account
2. **ดู NFTs ที่ปลดล็อค**: ดูรายการ NFTs ที่สามารถแลกได้
3. **ทำการแลกเปลี่ยน**: แลก NFTs ตามระดับที่มี

💡 **เคล็ดลับ:** ยิ่งขุดมากยิ่งได้ระดับสูง และปลดล็อค NFTs ดีๆ

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


## 🚨 **การแก้ไขปัญหา Modal Systems**

**ปัญหาพื้นฐานที่พบบ่อย:**
- ❌ Modal ไม่เปิด → ตรวจสอบ popup blocker, JavaScript
- ⚠️ ข้อมูลไม่โหลด → ตรวจสอบอินเทอร์เน็ต, รีเฟรช
- 🔧 ปุ่มไม่ทำงาน → รอหน้าโหลดเสร็จ, ทดสอบปุ่มอื่น
- 🔄 Transaction ล้มเหลว → ตรวจสอบ WAX balance และ blockchain

{% hint style="info" %}
**การแก้ไขปัญหาครบถ้วน:** [Troubleshooting Guide](../troubleshooting/common-issues.md) - คู่มือแก้ไขปัญหาทั้งหมดพร้อมขั้นตอนละเอียด
{% endhint %}

---

**📝 หมายเหตุ:** คู่มือนี้อัปเดตล่าสุดเมื่อวันที่ 27 กรกฎาคม 2568 จากการวิเคราะห์ระบบจริง

**🔗 ลิงก์ที่เกี่ยวข้อง:**
- [Dashboard Guide](dashboard-guide.md)
- [Mining Systems Guide](mining-systems-guide.md)  
- [Troubleshooting Guide](../troubleshooting/common-issues.md)

{% hint style="info" %}
**💡 เคล็ดลับสุดท้าย:** บุ๊คมาร์กหน้านี้ไว้เพื่อใช้อ้างอิงขณะใช้งาน Modal ต่างๆ ใน AWCLOUD CPanel
{% endhint %}