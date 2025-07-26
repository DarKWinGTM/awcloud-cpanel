# ⚙️ Requirements

## ความต้องการของระบบ (System Requirements)

เพื่อใช้งาน AWCLOUD CPanel ได้อย่างเต็มประสิทธิภาพ คุณจะต้องเตรียมระบบตามความต้องการต่อไปนี้:

## 🖥️ ความต้องการด้านฮาร์ดแวร์ (Hardware Requirements)

### **ระบบขั้นต่ำ (Minimum Requirements)**
- **CPU**: 2 cores (2.0 GHz หรือสูงกว่า)
- **RAM**: 4 GB (แนะนำ 8 GB)
- **Storage**: 20 GB พื้นที่ว่าง
- **Network**: การเชื่อมต่ออินเทอร์เน็ตที่เสถียร (10 Mbps+)

### **ระบบแนะนำ (Recommended Requirements)**
- **CPU**: 4+ cores (3.0 GHz หรือสูงกว่า)
- **RAM**: 16 GB หรือมากกว่า
- **Storage**: 50 GB SSD พื้นที่ว่าง
- **Network**: การเชื่อมต่ออินเทอร์เน็ตความเร็วสูง (50 Mbps+)

### **ระบบสำหรับการใช้งานขนาดใหญ่ (Enterprise Level)**
- **CPU**: 8+ cores (3.5 GHz หรือสูงกว่า)
- **RAM**: 32 GB หรือมากกว่า
- **Storage**: 100 GB NVMe SSD
- **Network**: การเชื่อมต่อ Dedicated หรือ VPS ชั้นสูง

## 💻 ระบบปฏิบัติการ (Operating System)

### **ระบบที่รองรับ (Supported Platforms)**
- ✅ **Linux**: Ubuntu 18.04+, CentOS 7+, Debian 9+
- ✅ **Windows**: Windows 10/11 (พร้อม WSL2)
- ✅ **macOS**: macOS 10.15+ (Catalina หรือใหม่กว่า)
- ✅ **Docker**: รองรับ Docker containers
- ✅ **Cloud Platforms**: AWS, Google Cloud, Azure, DigitalOcean

### **ระบบแนะนำ (Recommended)**
```bash
# Ubuntu 20.04 LTS หรือใหม่กว่า
Ubuntu 20.04.3 LTS (Focal Fossa)
Python 3.8+ พร้อม pip
Node.js 16+ (สำหรับ frontend tools)
```

## 🐍 ความต้องการด้านซอฟต์แวร์ (Software Requirements)

### **Python และ Dependencies หลัก**
```txt
Python >= 3.8.0
pip >= 21.0.0
virtualenv (แนะนำ)
```

### **Python Packages ที่จำเป็น**
```txt
Flask==2.0.2
cloudscraper==1.2.58
pytz==2021.1
cryptography==3.4.7
grequests==0.6.0
requests>=2.25.0
websocket-client>=1.0.0
Pillow>=8.0.0
```

### **เครื่องมือเสริม (Optional Tools)**
```bash
# Process Manager
pm2 (สำหรับ Node.js applications)
supervisor (สำหรับ Python applications)

# Reverse Proxy
nginx >= 1.18
apache2 >= 2.4

# Database (Optional)
redis >= 6.0 (สำหรับ caching)
sqlite3 (built-in with Python)
```

## 🌐 ความต้องการด้านเครือข่าย (Network Requirements)

### **การเชื่อมต่ออินเทอร์เน็ต**
- **ความเร็วขั้นต่ำ**: 10 Mbps download, 5 Mbps upload
- **ความเร็วแนะนำ**: 50+ Mbps download, 20+ Mbps upload
- **Latency**: < 100ms ไปยัง WAX RPC endpoints
- **การเชื่อมต่อ**: เสถียรและไม่ขาดหาย

### **Ports ที่ต้องเปิด**
```bash
# HTTP/HTTPS Traffic
Port 80   (HTTP)
Port 443  (HTTPS)
Port 5000 (Flask default - ปรับแต่งได้)

# Outbound Connections
Port 80, 443 (WAX Blockchain APIs)
Port 1080, 3128, 8080 (Proxy connections)
```

### **WAX Blockchain Endpoints**
ระบบต้องสามารถเชื่อมต่อไปยัง WAX RPC endpoints ต่อไปนี้:
```
https://wax.greymass.com
https://api.waxsweden.org
https://wax.pink.gg
https://api.wax.alohaeos.com
https://wax-mainnet.bloks.io
```

## 🔐 ความต้องการด้านบัญชีและการพิสูจน์ตัวตน

### **WAX Wallet Accounts**
- **ขั้นต่ำ**: 1 WAX account พร้อม private key
- **แนะนำ**: 3-5 WAX accounts สำหรับการใช้งานที่มีประสิทธิภาพ
- **ระดับมืออาชีพ**: 10+ WAX accounts พร้อมระบบจัดการ

### **ทรัพยากร WAX ที่จำเป็น**
```
CPU: ขั้นต่ำ 100ms staked
NET: ขั้นต่ำ 50 KB staked
RAM: ขั้นต่ำ 8 KB ต่อ account
WAX: สำหรับ transaction fees (แนะนำ 10+ WAX ต่อ account)
```

### **การสร้าง WAM Authentication Files**
```bash
# ไฟล์ที่จำเป็นสำหรับแต่ละ account
account-name.wam (encrypted private key)
secret configuration
backup keys (แนะนำ)
```

## 🌐 Proxy Services (ถ้าต้องการ)

### **Proxy Providers ที่รองรับ**
- **WebShare.io**: Premium residential proxies
- **PacketStream**: Residential proxy network  
- **PlainProxies**: High-performance datacenter proxies
- **Custom Proxies**: รองรับ HTTP/HTTPS/SOCKS5

### **การกำหนดค่า Proxy**
```json
{
  "http": "http://username:password@proxy-server:port",
  "https": "http://username:password@proxy-server:port",
  "rotation": true,
  "sticky_session": true
}
```

## 📊 ระบบตรวจสอบและ Monitoring

### **Performance Monitoring**
- **CPU Usage**: ควรต่ำกว่า 80% ในการใช้งานปกติ
- **Memory Usage**: ควรเหลือ RAM อย่างน้อย 2GB ว่าง
- **Disk Space**: ควรเหลือพื้นที่อย่างน้อย 20% ว่าง
- **Network Usage**: ตรวจสอบ bandwidth utilization

### **Logging และ Debugging**
```bash
# Log files locations
/var/log/awcloud/
static/log/
dev-log-backups/
```

## 🔧 การเตรียมสภาพแวดล้อม (Environment Preparation)

### **1. ติดตั้ง Python และ pip**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip python3-venv

# CentOS/RHEL
sudo yum install python3 python3-pip

# macOS (with Homebrew)
brew install python3
```

### **2. สร้าง Virtual Environment**
```bash
python3 -m venv awcloud-env
source awcloud-env/bin/activate  # Linux/macOS
# หรือ
awcloud-env\Scripts\activate.bat  # Windows
```

### **3. ติดตั้ง Dependencies**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

## ✅ การตรวจสอบความพร้อม (Readiness Checklist)

ก่อนเริ่มติดตั้ง ตรวจสอบรายการต่อไปนี้:

- [ ] ✅ ระบบปฏิบัติการที่รองรับ
- [ ] ✅ Python 3.8+ ติดตั้งและทำงานได้
- [ ] ✅ การเชื่อมต่ออินเทอร์เน็ตเสถียร
- [ ] ✅ WAX account พร้อม private key
- [ ] ✅ ทรัพยากร WAX เพียงพอ (CPU/NET/RAM)
- [ ] ✅ พื้นที่ storage เพียงพอ
- [ ] ✅ Proxy service (ถ้าต้องการ)
- [ ] ✅ Ports เปิดให้เข้าถึงได้
- [ ] ✅ ไฟล์ configuration พร้อม

{% hint style="info" %}
**เคล็ดลับ**: หากคุณใช้งานบน Cloud Platform แนะนำให้ใช้ instance ที่มี CPU 2+ cores และ RAM 8+ GB เพื่อประสิทธิภาพที่ดีที่สุด
{% endhint %}

{% hint style="warning" %}
**ข้อควรระวัง**: การใช้งาน Proxy ที่ไม่เสถียรอาจส่งผลต่อประสิทธิภาพการขุดและการเชื่อมต่อ blockchain
{% endhint %}

---

**ขั้นต่อไป**: เมื่อระบบพร้อมแล้ว ไปที่ [Installation Guide](installation.md) เพื่อเริ่มติดตั้ง AWCLOUD CPanel