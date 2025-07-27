# 🏠 การใช้งาน Dashboard หลัก

## 📋 ภาพรวม Dashboard

Dashboard หลักของ AWCLOUD CPanel เป็นจุดศูนย์กลางสำหรับการควบคุมและติดตาม WAX accounts ทั้งหมดของคุณในที่เดียว พร้อมระบบ **32+ modals** สำหรับจัดการทุกด้านของการขุด cryptocurrency และ blockchain gaming

## 🎯 ส่วนประกอบหลักของ Dashboard

### 📊 แถบข้อมูลด้านบน (Top Information Bar)
- **Pack Info**: แสดงแพ็คเกจที่คุณใช้งานอยู่
- **เวลาหมดอายุ**: วันเวลาที่บริการจะหมดอายุ
- **จำนวน ID**: จำนวน account ที่สามารถใช้งานได้
- **ปุ่มการจัดการ**: PAYMENT, ADDITIONAL, STATEMENT
- **ราคา Cryptocurrency**: แสดงราคาล่าสุดของ WAX และ TLM

### 🗂️ ระบบ Tab Navigation หลัก

**📊 Tab System ของ AWCLOUD CPanel:**
- **🌍 AW (Alien Worlds)** - หน้าหลักการขุด Alien Worlds
- **🔥 FW (Future Worlds)** - ฟีเจอร์เกมส์อนาคต (อยู่ระหว่างพัฒนา)  
- **📈 SS (Statistics)** - สถิติและการวิเคราะห์ขั้นสูง
- **⚙️ CC (Control Center)** - ศูนย์ควบคุมระบบและการตั้งค่า

**💡 เคล็ดลับ**: เริ่มต้นที่ Tab **AW** เสมอ เพราะเป็นหน้าหลักที่มีฟีเจอร์ครบครันสำหรับการขุด

### 📈 ตารางจัดการ Account (Account Management Table)

#### คอลัมน์ต่างๆ ในตาราง:
1. **# ID**: หมายเลข account
2. **CPU/NET/RAM/SHARDS**: ข้อมูลทรัพยากร WAX
3. **STAKE**: จำนวนที่ stake ไว้
4. **TIME**: เวลาการทำงานล่าสุด
5. **LAND**: ที่ดินที่ใช้ขุด
6. **NFT**: mining tools ที่ใช้
7. **STATUS**: สถานะการทำงาน
8. **CONTROL**: ปุ่มควบคุม
9. **EXPAND**: ขยายรายละเอียด

## ⚡ การใช้งานปุ่มควบคุมหลัก

### 🔍 ปุ่ม "EXPAND ALL HISTORY" - ฟีเจอร์สำคัญที่สุด

**🎯 การใช้งาน:**
1. **คลิกปุ่ม "EXPAND ALL HISTORY"** ที่มุมขวาบน
2. **ระบบจะโหลด iframe** สำหรับทุก account พร้อมกัน
3. **แสดงสถิติเรียลไทม์** ของการขุดแต่ละ account
4. **ดูประวัติการทำงาน** รายละเอียดของ 24 ชั่วโมงที่ผ่านมา

**💡 ประโยชน์:**
- ติดตามประสิทธิภาพทุก account ในครั้งเดียว
- เปรียบเทียบผลการขุดระหว่าง account ต่างๆ
- ตรวจจับปัญหาได้อย่างรวดเร็ว
- วิเคราะห์แนวโน้มการทำงาน

**⚠️ หมายเหตุ**: การใช้ EXPAND ALL จะใช้ bandwidth มาก เหมาะสำหรับการตรวจสอบครั้งใหญ่

### 🎮 ปุ่มควบคุมแต่ละ Account - Modal System

**📋 การเข้าถึง Modals หลัก (จากการวิเคราะห์ระบบจริง):**

## 🎯 **Core Modal Systems - ฟีเจอร์หลักที่ใช้งานบ่อย**

### 1. 🛠️ **BOX NFT Modal** (boxNFT)
**การเข้าถึง:** ปุ่ม **TOOLS** ในแถว account → modal boxNFT

**7 Tabs ที่มีอยู่จริง:**
- **BOX NFT (set-tool)**: จัดการ NFT inventory และ mining tools
- **SEND NFT (send-nft)**: ส่ง NFT ระหว่าง account
- **CLAIM NFT (claim-nft)**: เคลม NFT ที่ได้รับ
- **BACK TOKEN (back-token)**: คืน token จาก NFT
- **CREATE LINK (create-link)**: สร้างลิงก์แชร์ NFT
- **CLAIM LINK (claim-link)**: รับ NFT จากลิงก์
- **BURN NFT (burn-nft)**: ทำลาย NFT เพื่อรับ token

**💡 เคล็ดลับ**: เริ่มจาก tab BOX NFT เพื่อดู inventory ก่อน แล้วค่อยใช้ tabs อื่น

### 2. 🌍 **SET LAND Modal** (setLand)
**การเข้าถึง:** ปุ่ม **LAND** ในแถว account → modal setLand

**4 Tabs ที่มีอยู่จริง:**
- **MAIN (setland-main)**: เลือก planet และ land สำหรับขุด
- **REGISTER (setland-register)**: ลงทะเบียน land ใหม่
- **RANDOM (setland-random)**: สุ่มเลือก land อัตโนมัติ
- **CHOOSE (setland-choose)**: เลือก land เฉพาะ

### 3. 💸 **TRANSFER WAX Modal** (transferWax)
**การเข้าถึง:** ปุ่ม **TRANSFER** ในแถว account → modal transferWax

**2 Tabs ที่มีอยู่จริง:**
- **MAIN (transfer-main)**: ส่ง WAX, TLM ไปยัง account อื่น
- **TASK (transfer-task)**: ตั้งค่าการส่ง token อัตโนมัติ

### 4. ⚡ **STAKE WAX Modal** (stakeWax)
**การเข้าถึง:** ปุ่ม **RESOURCES** ในแถว account → modal stakeWax

**6 Tabs ที่มีอยู่จริง:**
- **STAKE (stake)**: Stake WAX เพื่อเพิ่มทรัพยากร
- **RENT STAKE (rent-safe-stake)**: เช่า stake จากคนอื่น
- **UNSTAKE (unstake)**: Unstake WAX เพื่อเอา WAX กลับ
- **RENT UNSTAKE (rent-unstake)**: ยกเลิกการเช่า stake
- **FREE STAKE (free-stake)**: ใช้ free stake ถ้ามี
- **GOVERNANCE (governance)**: โหวตใน WAX governance

### 5. 🔄 **ALLOCATE WAX Modal** (allocateWax)
**การเข้าถึง:** ปุ่มระบบหลัก → modal allocateWax

**คุณสมบัติ:**
- กระจาย WAX ไปหลาย account พร้อมกัน
- ตั้งค่าจำนวนและอัตราการแจกจ่าย
- รองรับการแจกจ่ายแบบเท่าๆ กันหรือตามสัดส่วน

### 6. 🔄 **SWAP TLM Modal** (swapTLM)
**การเข้าถึง:** ปุ่มระบบหลัก → modal swapTLM

**คุณสมบัติ:**
- แลกเปลี่ยน TLM ↔ WAX
- ตรวจสอบอัตราแลกเปลี่ยนแบบเรียลไทม์
- รองรับการ swap แบบอัตโนมัติ

## 🚀 **Advanced Modal Systems - ฟีเจอร์ขั้นสูง**

### 7. 📊 **POOL MINEABLE Modal** (poolMineable)
**การเข้าถึง:** เมนูระบบ → modal poolMineable

**2 Tabs ที่มีอยู่จริง:**
- **WAX BLOKS (poolMineable-waxblock-io)**: การตั้งค่าผ่าน Wax Bloks
- **EOS USA IO (poolMineable-eosusa-io)**: การตั้งค่าผ่าน EOS USA

**คุณสมบัติ:**
- ตั้งค่า mining parameters ขั้นสูง
- กำหนด delay time และ retry attempts
- เลือก mining strategy ตามสถานการณ์

### 8. 🛡️ **TOTP CONFIG Modal** (totpConfig)
**การเข้าถึง:** เมนูความปลอดภัย → modal totpConfig

**2 Tabs ที่มีอยู่จริง:**
- **PAIR (totpConfig-main)**: จับคู่กับ Google Authenticator
- **LOCK/UNLOCK (totpConfig-switch)**: เปิด/ปิด 2FA

### 9. ⏰ **TASK SCHEDULER Modal** (taskScheduler)
**การเข้าถึง:** เมนูระบบ → modal taskScheduler

**คุณสมบัติ:**
- กำหนดตารางเวลาการขุดอัตโนมัติ
- ตั้งค่าให้หยุด/เริ่มทำงานตามเวลา
- วางแผนการใช้ทรัพยากรประจำวัน

### 10. 🔍 **WAX DETECTIVE Modal** (waxDetective)
**การเข้าถึง:** เมนูการวิเคราะห์ → modal waxDetective

**คุณสมบัติ:**
- ติดตามและวิเคราะห์ transaction history
- ตรวจสอบ account performance รายละเอียด
- สร้างรายงานการทำงานเชิงลึก
- ตรวจจับพฤติกรรมผิดปกติ

### 11. 📊 **ACTION REPORT Modal** (actionReport)
**การเข้าถึง:** เมนูรายงาน → modal actionReport

**คุณสมบัติ:**
- รายงานการกระทำทั้งหมดของ account
- สรุปสถิติการทำงานรายวัน/รายสัปดาห์
- วิเคราะห์ประสิทธิภาพการขุด

### 12. 🔐 **SESSIONS TOKEN Modal** (sessionsToken)
**การเข้าถึง:** เมนูความปลอดภัย → modal sessionsToken

**คุณสมบัติ:**
- จัดการ session tokens ทั้งหมด
- ดู session ที่ active อยู่
- ยกเลิก session ที่น่าสงสัย

## 👥 **Team Management Modals**

### 13. 👥 **TEAM MINE CONFIG Modal** (teamMineConfig)
**การเข้าถึง:** เมนู Team → modal teamMineConfig

**คุณสมบัติ:**
- ตั้งค่าการขุดแบบทีม
- กำหนดสมาชิกในทีม
- แบ่งหน้าที่การขุด

### 14. 🏊 **TEAM POOL CONFIG Modal** (teamPoolConfig)
**การเข้าถึง:** เมนู Team → modal teamPoolConfig

**คุณสมบัติ:**
- จัดการ mining pool สำหรับทีม
- ตั้งค่าการแบ่งปันผลกำไร
- สถิติผลงานของทีม

## 💳 **Wallet & Account Creation Modals**

### 15. ☁️ **CREATE WAX CLOUD WALLET Modal** (createWaxCloudWallet)
**การเข้าถึง:** เมนู Wallet → modal createWaxCloudWallet

**คุณสมบัติ:**
- สร้าง WAX Cloud Wallet ใหม่
- ตั้งค่า account ใหม่
- Import เข้าระบบอัตโนมัติ

### 16. ⚓ **CREATE ANCHOR WALLET Modal** (createAnchorWallet)
**การเข้าถึง:** เมนู Wallet → modal createAnchorWallet

**คุณสมบัติ:**
- สร้าง Anchor Wallet ใหม่
- เชื่อมต่อกับระบบ
- ตั้งค่าความปลอดภัย

### 17. ✍️ **REGISTER WALLET SIGN Modal** (registerWalletSign)
**การเข้าถึง:** เมนู Wallet → modal registerWalletSign

**คุณสมบัติ:**
- ลงทะเบียน wallet signature
- ยืนยันตัวตน wallet
- เซ็ตอัพ permission

### 18. 🔑 **SETUP SOFT PRIVATE KEY Modal** (setupSoftPrivateKey)
**การเข้าถึง:** เมนูขั้นสูง → modal setupSoftPrivateKey

**คุณสมบัติ:**
- ตั้งค่า soft private key
- รองรับ MCW, WCW wallet types
- เพิ่มความปลอดภัยขั้นสูง

## 🛠️ **Additional Tools & Utilities**

### 19. 🔄 **ALCOR TOOL Modal** (alcorTool)
**การเข้าถึง:** เมนู Trading → modal alcorTool

**คุณสมบัติ:**
- เชื่อมต่อ Alcor exchange
- Trading WAX/TLM อัตโนมัติ
- ติดตามราคาแบบเรียลไทม์

### 20. 💰 **COST MINER CONFIG Modal** (costMinerConfig)
**การเข้าถึง:** เมนูการตั้งค่า → modal costMinerConfig

**คุณสมบัติ:**
- ตั้งค่าต้นทุนการขุด
- คำนวณ ROI อัตโนมัติ
- วิเคราะห์ความคุ้มค่า

### 21. 📋 **SUBSCRIPTION INFO Modal** (subscriptionInfo)
**การเข้าถึง:** เมนูระบบ → modal subscriptionInfo

**2 Tabs ที่มีอยู่จริง:**
- **RENEW (subscriptionInfo-main)**: ต่ออายุบริการ
- **ADDITIONAL (subscriptionInfo-additional)**: เพิ่มบริการเสริม

### 22. ⛔ **GOT BAN Modal** (gotBAN/gotBan)
**การเข้าถึง:** เมนูความปลอดภัย → modal gotBAN

**คุณสมบัติ:**
- จัดการ account ที่โดน ban
- วิเคราะห์สาเหตุ ban
- วางแผนการแก้ไข

### 23. ❓ **HOW TO Modal** (howto)
**การเข้าถึง:** ปุ่ม Help → modal howto

**คุณสมบัติ:**
- คู่มือการใช้งานแบบ interactive
- วิดีโอสาธิต
- FAQ และการแก้ไขปัญหา

**💡 เคล็ดลับ**: แต่ละ modal มีหลาย tabs ให้ศึกษาและใช้งาน เริ่มจาก Basic tabs ก่อนแล้วค่อยไปขั้นสูง

## 📊 การอ่านข้อมูลสถิติ

### 🟢 สถานะสีเขียว (Active)
- Account กำลังทำงานปกติ
- Mining อย่างต่อเนื่อง
- ไม่มีปัญหาทรัพยากร

### 🟡 สถานะสีเหลือง (Warning)
- ทรัพยากรเหลือน้อย (CPU/NET/RAM)
- ต้องการการดูแล
- ควรเติมทรัพยากร

### 🔴 สถานะสีแดง (Error)
- Account หยุดทำงาน
- เกิดข้อผิดพลาด
- ต้องการแก้ไขทันที

### ⏸️ สถานะ Pause
- Account ถูกหยุดโดยตั้งใจ
- ไม่ทำ mining
- สามารถเปิดใช้งานได้ตลอดเวลา

## 💡 เคล็ดลับการใช้งาน Dashboard

### 🔄 การรีเฟรชข้อมูล
- ข้อมูลจะอัพเดทอัตโนมัติทุก 5 วินาทีที่
- คลิกรีเฟรชหน้าเพื่อข้อมูลล่าสุด
- ใช้ปุ่ม EXPAND ALL สำหรับข้อมูลครบถ้วน

### 📱 การใช้งานบนมือถือ
- Dashboard รองรับการใช้งานบนมือถือ
- ปัดซ้าย-ขวาเพื่อดูข้อมูลในตาราง
- ใช้งานได้บนทุก browser

### ⚙️ การตั้งค่าการแสดงผล
- เลือก SortType เพื่อเรียงลำดับ account
- ปรับขนาดตารางตามต้องการ
- บันทึกการตั้งค่าอัตโนมัติ

## 🚨 การแก้ไขปัญหาที่พบบ่อย

### ❌ Account ไม่แสดงข้อมูล
1. ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
2. รีเฟรชหน้าเว็บ
3. ตรวจสอบสถานะ WAX blockchain

### ⚠️ ข้อมูลไม่อัพเดท
1. คลิก EXPAND ALL HISTORY
2. ตรวจสอบ browser cache
3. ลองเปิดหน้าใหม่

### 🔧 ปุ่มไม่ทำงาน
1. ตรวจสอบ JavaScript ใน browser
2. ปิด ad blocker ที่อาจขัดขวาง
3. ใช้ browser ที่รองรับ (Chrome, Firefox, Safari)

## 📈 การติดตามประสิทธิภาพ

### 📊 การดูสถิติรายวัน
- ดูจำนวน TLM ที่ได้รับในแต่ละวัน
- เปรียบเทียบประสิทธิภาพระหว่าง account
- วางแผนการปรับปรุง mining strategy

### 🎯 การวิเคราะห์ ROI
- คำนวณต้นทุนทรัพยากร vs รายได้
- ติดตามอัตราการขุดต่อชั่วโมง
- เปรียบเทียบประสิทธิภาพ land และ tools

Dashboard หลักนี้เป็นหัวใจของการจัดการ AWCLOUD CPanel ใช้เวลาทำความคุ้นเคยเพื่อการใช้งานที่มีประสิทธิภาพสูงสุด