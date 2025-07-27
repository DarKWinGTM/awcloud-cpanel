# 🤔 เมื่อไหร่ควรใช้ฟีเจอร์ไหน - คู่มือการตัดสินใจ

{% hint style="success" %}
**คู่มือการตัดสินใจใช้ฟีเจอร์** - เข้าใจว่าควรใช้ฟีเจอร์อะไร เมื่อไหร่ และทำไม โดยไม่เกี่ยวข้องกับการวิเคราะห์ผลกำไร
{% endhint %}

## 🔍 **การเลือกใช้ฟีเจอร์ตามความต้องการ**

### 🎯 **เมื่อคุณต้องการ...**

#### 📦 **จัดการ NFT และ Tools**
```
ใช้ boxNFT Modal เมื่อ:
✓ ต้องการเปลี่ยน mining tools
✓ มี NFT ที่ต้องการส่งระหว่าง accounts
✓ ต้องการเคลม NFT ที่ได้รับ
✓ ต้องการสร้างลิงก์แชร์ NFT
✓ ต้องการแปลง NFT เป็น token

ไม่ควรใช้เมื่อ:
✗ กำลังขุดอยู่ (อาจขัดจังหวะการทำงาน)
✗ ไม่แน่ใจว่า tools ที่มีใช้งานได้หรือไม่
```

#### 🌍 **เปลี่ยนพื้นที่ขุด**
```
ใช้ setLand Modal เมื่อ:
✓ Mining success rate ต่ำกว่า 85%
✓ ต้องการหา land ที่มี delay สั้นกว่า
✓ Account ใหม่ที่ยังไม่ได้ตั้งค่า land
✓ ต้องการทดลอง planet อื่น
✓ Land ปัจจุบันเต็มหรือมีปัญหา

ไม่ควรเปลี่ยนเมื่อ:
✗ Mining ทำงานปกติและมี success rate > 90%
✗ เพิ่งเปลี่ยน land ไปไม่ถึง 24 ชั่วโมง
```

#### 💰 **จัดการเงินและ Token**
```
ใช้ transferWax Modal เมื่อ:
✓ มี TLM หรือ WAX สะสมในระบบ
✓ ต้องการส่งเงินไป exchange
✓ ต้องการแจกจ่าย WAX ให้ accounts อื่น
✓ ต้องการ backup เงินไป cold wallet

ใช้ allocateWax Modal เมื่อ:
✓ มีเงินใน main account ต้องแจกให้หลาย accounts
✓ ต้องการประหยัดเวลาในการ transfer
✓ ต้องการแจกจ่ายเงินแบบเท่าๆ กัน
✓ มี accounts ใหม่หลายตัวที่ต้องการเงินเริ่มต้น
```

#### ⚡ **จัดการทรัพยากร**
```
ใช้ stakeWax Modal เมื่อ:
✓ CPU/NET/RAM < 20% (ต้องการเพิ่มทรัพยากร)
✓ Account ใหม่ที่ต้องการ stake เพื่อใช้งาน
✓ ต้องการ unstake WAX เพื่อนำไปใช้งานอื่น
✓ ต้องการเช่า resources ชั่วคราว
✓ ต้องการโหวตใน WAX governance

การแนะนำ:
├── Stake เมื่อทรัพยากร < 30%
├── Unstake เมื่อมีทรัพยากรเหลือเฟือ > 80%
└── ใช้ rent เมื่อต้องการทรัพยากรชั่วคราว
```

---

## ⏰ **ฟีเจอร์ตามช่วงเวลาการใช้งาน**

### 🌅 **การใช้งานประจำวัน**

#### **เช้า (6:00-9:00)**
```
📋 Checklist เช้า:
1. เช็คสถานะ accounts ผ่าน Dashboard
2. ใช้ waxDetective ดู overnight performance
3. เช็ค gotBAN modal หาก account ไหนโดน ban
4. เก็บ TLM ที่สะสมค้างคืนผ่าน transferWax

🔧 Modals ที่เหมาะสม:
├── waxDetective - วิเคราะห์ผลงานคืนที่ผ่านมา
├── actionReport - เช็ครายงานกิจกรรม
├── gotBAN - เช็คสถานะ ban
└── transferWax - collect TLM
```

#### **กลางวัน (12:00-14:00)**
```
📋 Checklist กลางวัน:
1. เช็คสถานะทรัพยากร CPU/NET/RAM
2. ปรับแต่งการตั้งค่าถ้าจำเป็น
3. เช็ค session security ผ่าน sessionsToken
4. รีเฟรช browser cache ถ้าระบบช้า

🔧 Modals ที่เหมาะสม:
├── stakeWax - จัดการทรัพยากรที่ขาดแคลน
├── sessionsToken - เช็ค security
├── taskScheduler - ปรับตารางเวลา
└── poolMineable - ปรับการตั้งค่า mining
```

#### **เย็น (18:00-20:00)**
```
📋 Checklist เย็น:
1. เก็บ TLM ที่ได้ระหว่างวัน
2. เตรียมการตั้งค่าสำหรับกลางคืน
3. backup การตั้งค่าสำคัญ
4. วางแผนสำหรับวันถัดไป

🔧 Modals ที่เหมาะสม:
├── transferWax - collect TLM รายวัน
├── taskScheduler - ตั้งตารางกลางคืน
├── alcorTool - เช็คราคาและ trading
└── subscriptionInfo - เช็คสถานะแพ็คเกจ
```

### 📅 **การใช้งานประจำสัปดาห์**

#### **วันจันทร์ - Planning**
```
🎯 เป้าหมาย: วางแผนสัปดาห์ใหม่
├── ใช้ costMinerConfig วิเคราะห์ค่าใช้จ่ายสัปดาห์ที่แล้ว
├── ใช้ waxDetective ดูประสิทธิภาพรวม
├── ปรับแต่ง taskScheduler สำหรับสัปดาห์ใหม่
└── เช็คแพ็คเกจใน subscriptionInfo
```

#### **วันพุธ - Optimization**
```
🔧 เป้าหมาย: ปรับปรุงประสิทธิภาพ
├── เปรียบเทียบ performance ของแต่ละ account
├── เปลี่ยน land ที่มีประสิทธิภาพต่ำ
├── ปรับ tools ที่มี durability ต่ำ
└── อัปเดตการตั้งค่า security
```

#### **วันศุกร์ - Maintenance**
```
🧹 เป้าหมาย: ดูแลรักษาระบบ
├── ล้าง browser cache
├── เช็ค session logs ใน sessionsToken
├── backup การตั้งค่าสำคัญ
└── เตรียมพร้อมสำหรับสุดสัปดาห์
```

---

## 🚨 **การใช้ฟีเจอร์ในสถานการณ์ฉุกเฉิน**

### ⚠️ **เมื่อระบบมีปัญหา**

#### **Account หยุดขุดกะทันหัน**
```
🔧 ขั้นตอนการแก้ไข:
1. เช็ค gotBAN modal ก่อน → หาก ban ให้รอหรือเปลี่ยน pattern
2. เช็ค stakeWax modal → หากทรัพยากรหมดให้ stake เพิ่ม
3. เช็ค boxNFT modal → หาก tools หมด durability ให้เปลี่ยน
4. เช็ค setLand modal → หาก land มีปัญหาให้เปลี่ยน
5. เช็ค waxDetective → หาสาเหตุจาก logs
```

#### **ไม่สามารถเข้าสู่ระบบได้**
```
🔐 ขั้นตอนการแก้ไข:
1. เช็ค sessionsToken modal → ลบ session เก่าที่อาจมีปัญหา
2. เช็ค totpConfig modal → หาก 2FA มีปัญหาให้ re-setup
3. ใช้ browser อื่นทดสอบ
4. เช็ค internet connection และ WAX blockchain status
```

#### **Transaction ล้มเหลวซ้ำๆ**
```
💸 ขั้นตอนการแก้ไข:
1. เช็ค stakeWax modal → ดูว่ามีทรัพยากรพอสำหรับ transaction หรือไม่
2. เช็ค account balance → ดูว่ามีเงินพอสำหรับค่าธรรมเนียมหรือไม่
3. เช็ค WAX blockchain status → ดูว่า network มีปัญหาหรือไม่
4. ลองใช้ registerWalletSign modal เพื่อ re-authenticate
```

---

## 🎯 **การเลือกใช้ฟีเจอร์ตามจำนวน Account**

### 👤 **1-2 Accounts (มือใหม่)**
```
ฟีเจอร์ที่ควรใช้:
✓ boxNFT - จัดการ tools เบื้องต้น
✓ setLand - เลือก land ที่เหมาะสม  
✓ stakeWax - จัดการทรัพยากร
✓ transferWax - ส่ง TLM ออกจากระบบ
✓ Dashboard EXPAND - ดูสถิติ

ฟีเจอร์ที่ยังไม่จำเป็น:
✗ allocateWax - ยังไม่ต้องแจกจ่ายเงิน
✗ teamPoolConfig - ยังไม่ต้องทำ team
✗ taskScheduler - ยังจัดการ manual ได้
```

### 👥 **3-5 Accounts (ผู้ใช้ปกติ)**
```
ฟีเจอร์เพิ่มเติม:
✓ allocateWax - แจกจ่ายเงินให้หลาย accounts
✓ taskScheduler - ตั้งเวลาทำงานอัตโนมัติ
✓ waxDetective - วิเคราะห์ประสิทธิภาพ
✓ actionReport - ติดตามกิจกรรม

ฟีเจอร์ที่ยังไม่จำเป็น:
✗ teamPoolConfig - ยังไม่ซับซ้อนพอ
✗ alcorTool - ยังไม่ต้อง auto trading
```

### 🏢 **6+ Accounts (ผู้ใช้ขั้นสูง)**
```
ฟีเจอร์ทั้งหมด:
✓ teamPoolConfig - จัดการแบบ team
✓ alcorTool - auto trading
✓ costMinerConfig - ติดตามต้นทุน
✓ poolMineable - optimize การขุด
✓ sessionsToken - security ขั้นสูง
✓ totpConfig - 2FA protection
```

---

## 📚 **Decision Tree สำหรับการเลือกใช้ฟีเจอร์**

### 🤔 **"ฉันควรใช้ฟีเจอร์อะไร?"**

```
เริ่มต้น: คุณต้องการทำอะไร?

├── 🔧 จัดการ Account เบื้องต้น
│   ├── เปลี่ยน Tools → boxNFT Modal
│   ├── เปลี่ยน Land → setLand Modal  
│   ├── เพิ่มทรัพยากร → stakeWax Modal
│   └── ส่งเงิน → transferWax Modal
│
├── 📊 ดูข้อมูลและสถิติ
│   ├── ดูสถิติการขุด → waxDetective Modal
│   ├── ดูรายงานกิจกรรม → actionReport Modal
│   ├── ดูสถานะ ban → gotBAN Modal
│   └── ดูการใช้งานระบบ → Dashboard EXPAND
│
├── ⚙️ ตั้งค่าขั้นสูง
│   ├── ตั้งเวลาทำงาน → taskScheduler Modal
│   ├── ตั้งค่าการขุด → poolMineable Modal
│   ├── จัดการ team → teamPoolConfig Modal
│   └── ติดตามต้นทุน → costMinerConfig Modal
│
├── 🔒 จัดการความปลอดภัย
│   ├── เช็ค sessions → sessionsToken Modal
│   ├── ตั้งค่า 2FA → totpConfig Modal
│   ├── ลงทะเบียน wallet → registerWalletSign Modal
│   └── ตั้งค่า private key → setupSoftPrivateKey Modal
│
├── 💰 จัดการเงินขั้นสูง
│   ├── แจกจ่ายหลาย accounts → allocateWax Modal
│   ├── แลกเปลี่ยน TLM/WAX → swapTLM Modal
│   ├── Auto trading → alcorTool Modal
│   └── เช็คสมาชิก → subscriptionInfo Modal
│
└── 🆘 แก้ไขปัญหา
    ├── Account ไม่ขุด → gotBAN, stakeWax, boxNFT, setLand
    ├── ไม่สามารถ login → sessionsToken, totpConfig
    ├── Transaction ล้มเหลว → stakeWax, registerWalletSign
    └── ต้องการความช่วยเหลือ → howto Modal
```

---

## 💡 **เคล็ดลับการใช้งานที่มีประสิทธิภาพ**

### 🚀 **Best Practices**

#### **สำหรับมือใหม่**
```
1. 📱 เริ่มจาก Dashboard → เข้าใจสถานะก่อน
2. 🛠️ ใช้ boxNFT, setLand, stakeWax ให้เป็นก่อน
3. 📊 ใช้ EXPAND button ดูสถิติเป็นประจำ
4. 🔍 อ่าน howto Modal เมื่อมีปัญหา
5. ⏰ อย่าเร่งใช้ฟีเจอร์ขั้นสูงก่อนเวลา
```

#### **สำหรับผู้ใช้ขั้นสูง**
```
1. 🎯 ใช้ taskScheduler ลดงาน manual
2. 📈 ใช้ waxDetective วิเคราะห์แนวโน้ม
3. 🛡️ ใช้ sessionsToken และ totpConfig เพื่อความปลอดภัย
4. 🤖 ใช้ alcorTool และ teamPoolConfig เพิ่มประสิทธิภาพ
5. 💾 backup การตั้งค่าสำคัญเป็นประจำ
```

### ⚠️ **สิ่งที่ควรหลีกเลี่ยง**

```
❌ อย่าใช้หลาย modals พร้อมกันเพื่อป้องกัน conflict
❌ อย่าเปลี่ยนการตั้งค่าบ่อยเกินไป รอดูผลก่อน
❌ อย่าใช้ฟีเจอร์ที่ไม่เข้าใจ อ่านคู่มือก่อน
❌ อย่าลืม logout หรือปิด session เมื่อใช้เสร็จ
❌ อย่าแชร์ private key หรือ seed phrase กับใครฟ
```

### 🎯 **จำหลักการสำคัญ**

```
1. 🎯 ใช้ฟีเจอร์ที่ตอบโจทย์ความต้องการจริง
2. 📊 ดูข้อมูลก่อนตัดสินใจเสมอ
3. 🔒 ความปลอดภัยสำคัญกว่าความสะดวก
4. ⏱️ อดทนและเรียนรู้ทีละขั้นตอน
5. 🤝 ขอความช่วยเหลือเมื่อไม่แน่ใจ
```

{% hint style="info" %}
**💡 สรุป:** การเลือกใช้ฟีเจอร์ที่เหมาะสมจะช่วยให้การใช้งาน AWCLOUD CPanel มีประสิทธิภาพและปลอดภัยมากขึ้น เริ่มจากพื้นฐานและค่อยๆ เรียนรู้ฟีเจอร์ขั้นสูง
{% endhint %}