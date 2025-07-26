# 📦 Installation Guide

## คู่มือการติดตั้ง AWCLOUD CPanel

คู่มือนี้จะแนะนำการติดตั้ง AWCLOUD CPanel ตั้งแต่เริ่มต้นจนพร้อมใช้งาน

## 🚀 การติดตั้งแบบเร็ว (Quick Installation)

### **ขั้นตอนที่ 1: เตรียมระบบ**

```bash
# อัปเดตระบบ (Ubuntu/Debian)
sudo apt update && sudo apt upgrade -y

# ติดตั้ง Python 3.8+ และ dependencies
sudo apt install python3 python3-pip python3-venv git -y

# ตรวจสอบเวอร์ชัน Python
python3 --version  # ต้องเป็น 3.8 หรือสูงกว่า
```

### **ขั้นตอนที่ 2: ดาวน์โหลดและติดตั้ง**

```bash
# Clone หรือ Download โปรเจ็ค
git clone https://github.com/DarKWinGTM/awcloud-cpanel.git
cd awcloud-cpanel

# หรือ Download แล้ว Extract
# wget https://github.com/DarKWinGTM/awcloud-cpanel/archive/main.zip
# unzip main.zip && cd awcloud-cpanel-main
```

### **ขั้นตอนที่ 3: สร้าง Virtual Environment**

```bash
# สร้าง Virtual Environment
python3 -m venv awcloud-env

# เปิดใช้งาน Virtual Environment
source awcloud-env/bin/activate  # Linux/macOS
# awcloud-env\Scripts\activate    # Windows
```

### **ขั้นตอนที่ 4: ติดตั้ง Dependencies**

```bash
# ติดตั้ง Python packages
pip install --upgrade pip
pip install -r requirements.txt

# ตรวจสอบการติดตั้ง
pip list | grep -E "(Flask|cloudscraper|cryptography)"
```

### **ขั้นตอนที่ 5: การกำหนดค่าเบื้องต้น**

```bash
# Copy และแก้ไขไฟล์ configuration
cp endpoint.json.example endpoint.json    # ถ้ามี
cp config.py.example config.py            # ถ้ามี

# สร้างโฟลเดอร์สำคัญ
mkdir -p auth static/log dev-log-backups
```

## 🔧 การติดตั้งแบบละเอียด (Detailed Installation)

### **1. การเตรียม Environment ตามระบบปฏิบัติการ**

#### **🐧 Ubuntu/Debian Linux**

```bash
# ติดตั้ง system dependencies
sudo apt update
sudo apt install -y python3 python3-pip python3-venv python3-dev \
                    build-essential libssl-dev libffi-dev \
                    git curl wget nginx supervisor

# ติดตั้ง Node.js (สำหรับ frontend tools)
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# ตรวจสอบการติดตั้ง
python3 --version && pip3 --version && node --version
```

#### **🍎 macOS**

```bash
# ติดตั้ง Homebrew (ถ้ายังไม่มี)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# ติดตั้ง dependencies
brew install python@3.9 git node nginx

# เพิ่ม Python ใน PATH
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### **🪟 Windows**

```powershell
# ติดตั้งผ่าน Chocolatey (แนะนำ)
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# ติดตั้ง Python, Git, Node.js
choco install python git nodejs -y

# หรือดาวน์โหลดโดยตรงจาก:
# Python: https://www.python.org/downloads/
# Git: https://git-scm.com/download/win
# Node.js: https://nodejs.org/
```

### **2. การตั้งค่า Virtual Environment**

```bash
# สร้างและจัดการ Virtual Environment
python3 -m venv awcloud-env

# เปิดใช้งาน (เลือกตามระบบ)
source awcloud-env/bin/activate           # Linux/macOS
awcloud-env\Scripts\activate.bat          # Windows Command Prompt
awcloud-env\Scripts\Activate.ps1          # Windows PowerShell

# ตรวจสอบว่าอยู่ใน Virtual Environment
which python  # ควรแสดง path ไปยัง awcloud-env
pip list      # ควรมี packages น้อย
```

### **3. การติดตั้ง Python Dependencies แบบละเอียด**

```bash
# อัปเกรด pip และ setuptools
pip install --upgrade pip setuptools wheel

# ติดตั้ง dependencies หลัก
pip install Flask==2.0.2
pip install cloudscraper==1.2.58
pip install pytz==2021.1
pip install cryptography==3.4.7
pip install grequests==0.6.0

# ติดตั้ง dependencies เสริม
pip install requests>=2.25.0
pip install websocket-client>=1.0.0
pip install Pillow>=8.0.0

# หรือติดตั้งทั้งหมดจาก requirements.txt
pip install -r requirements.txt

# ตรวจสอบการติดตั้ง
pip check  # ตรวจสอบ dependency conflicts
```

### **4. การเตรียม Configuration Files**

#### **📁 ไฟล์ที่จำเป็น**

```bash
# สร้างไฟล์ configuration หลัก
touch endpoint.json        # WAX blockchain endpoints
touch binance.json         # Binance API configuration
touch okx.json             # OKX exchange configuration
touch proxies.key          # Proxy configurations
touch exauth.json          # External authentication

# ตั้งค่า permissions
chmod 600 *.json *.key     # ป้องกันการเข้าถึงจากผู้อื่น
```

#### **📝 ตัวอย่าง endpoint.json**

```json
{
  "wax_endpoints": [
    "https://wax.greymass.com",
    "https://api.waxsweden.org", 
    "https://wax.pink.gg",
    "https://api.wax.alohaeos.com",
    "https://wax-mainnet.bloks.io"
  ],
  "hyperion_endpoints": [
    "https://wax.hyperion.eosrio.io",
    "https://api.waxsweden.org"
  ],
  "atomic_endpoints": [
    "https://wax.api.atomicassets.io"
  ]
}
```

## 🔐 การตั้งค่า Authentication

### **1. การเตรียม WAX Accounts**

```bash
# สร้างโฟลเดอร์ auth
mkdir -p auth
chmod 700 auth  # ตั้งค่า permissions แบบปลอดภัย

# สร้างไฟล์ WAM authentication (ตัวอย่าง)
# ไฟล์เหล่านี้จะต้องได้จากการ export จาก WAX wallet
# cc-xxxxx.wam  (Crypto Castles accounts)
# kq-xxxxx.wam  (Kingdom Quest accounts)
# aw-xxxxx.wam  (Alien Worlds accounts)
```

### **2. การตั้งค่า Security**

```bash
# สร้าง encryption key สำหรับระบบ
python3 -c "
from cryptography.fernet import Fernet
key = Fernet.generate_key()
with open('secret.key', 'wb') as f:
    f.write(key)
print('Secret key generated successfully')
"

# ตั้งค่า permissions
chmod 600 secret.key
chmod 600 auth/*.wam
```

## 🌐 การตั้งค่า Proxy (ถ้าต้องการ)

### **1. การกำหนดค่า Proxy Providers**

```bash
# แก้ไขไฟล์ proxies.key
cat > proxies.key << 'EOF'
{
  "webshare": {
    "username": "your-username",
    "password": "your-password",
    "endpoints": [
      "rotating-residential.webshare.io:9000",
      "rotating-residential.webshare.io:9001"
    ]
  },
  "packetstream": {
    "username": "your-username", 
    "password": "your-password",
    "endpoint": "proxy.packetstream.io:31112"
  }
}
EOF

chmod 600 proxies.key
```

## 🚀 การทดสอบการติดตั้ง

### **1. การทดสอบ Basic Installation**

```bash
# ทดสอบ Python และ dependencies
python3 -c "
import flask, cloudscraper, cryptography, pytz
print('✅ All core dependencies imported successfully')
print(f'Flask version: {flask.__version__}')
print(f'CloudScraper version: {cloudscraper.__version__}')
"

# ทดสอบการเชื่อมต่อ WAX blockchain
python3 -c "
import requests
try:
    response = requests.get('https://wax.greymass.com/v1/chain/get_info', timeout=10)
    if response.status_code == 200:
        print('✅ WAX blockchain connection successful')
    else:
        print('❌ WAX blockchain connection failed')
except Exception as e:
    print(f'❌ Connection error: {e}')
"
```

### **2. การทดสอบระบบหลัก**

```bash
# ทดสอบการโหลด main application
python3 -c "
import sys
sys.path.append('.')
try:
    import awcloudc
    print('✅ Main application imports successfully')
except ImportError as e:
    print(f'❌ Import error: {e}')
"

# ทดสอบ development log system
python3 update-dev-log.py list --limit 5
```

### **3. การรัน Application ครั้งแรก**

```bash
# รัน development server
python3 awcloudc.py

# หรือรันด้วย Flask
export FLASK_APP=awcloudc.py
export FLASK_ENV=development
flask run --host=0.0.0.0 --port=5000

# เปิดเบราว์เซอร์ไปที่
# http://localhost:5000
```

## ⚙️ การตั้งค่าการรันอัตโนมัติ (Production Setup)

### **1. การตั้งค่า Systemd Service (Linux)**

```bash
# สร้าง service file
sudo tee /etc/systemd/system/awcloud.service << 'EOF'
[Unit]
Description=AWCLOUD CPanel Service
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/awcloud-cpanel
Environment=PATH=/home/ubuntu/awcloud-cpanel/awcloud-env/bin
ExecStart=/home/ubuntu/awcloud-cpanel/awcloud-env/bin/python awcloudc.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# เปิดใช้งาน service
sudo systemctl daemon-reload
sudo systemctl enable awcloud
sudo systemctl start awcloud
sudo systemctl status awcloud
```

### **2. การตั้งค่า Nginx Reverse Proxy**

```bash
# สร้าง Nginx configuration
sudo tee /etc/nginx/sites-available/awcloud << 'EOF'
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location /static {
        alias /home/ubuntu/awcloud-cpanel/static;
        expires 7d;
    }
}
EOF

# เปิดใช้งาน site
sudo ln -s /etc/nginx/sites-available/awcloud /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 🔍 การตรวจสอบการติดตั้ง (Installation Verification)

### **✅ Checklist การติดตั้งสำเร็จ**

```bash
# 1. ตรวจสอบ Python และ Virtual Environment
python3 --version    # >= 3.8
which python         # ต้องอยู่ใน awcloud-env
pip list | wc -l     # ต้องมี packages มากกว่า 10

# 2. ตรวจสอบ Core Dependencies
python3 -c "import flask, cloudscraper, cryptography; print('✅ Core OK')"

# 3. ตรวจสอบไฟล์ Configuration
ls -la *.json *.key auth/  # ตรวจสอบไฟล์และ permissions

# 4. ทดสอบ Network Connectivity
python3 -c "
import requests
urls = [
    'https://wax.greymass.com/v1/chain/get_info',
    'https://wax.api.atomicassets.io/health'
]
for url in urls:
    try:
        r = requests.get(url, timeout=5)
        print(f'✅ {url}: {r.status_code}')
    except Exception as e:
        print(f'❌ {url}: {e}')
"

# 5. ทดสอบ Development Log System
python3 update-dev-log.py version
```

## 🚨 การแก้ปัญหาการติดตั้ง (Troubleshooting)

### **❌ ปัญหาที่พบบ่อย**

#### **1. Python Version Issues**
```bash
# ถ้า Python < 3.8
sudo apt install python3.9 python3.9-venv
python3.9 -m venv awcloud-env
```

#### **2. Permission Denied Errors**
```bash
# แก้ไข permissions
sudo chown -R $USER:$USER awcloud-cpanel/
chmod 755 awcloud-cpanel/
chmod 600 awcloud-cpanel/*.json awcloud-cpanel/*.key
```

#### **3. Network Connection Issues**
```bash
# ทดสอบ DNS และ connectivity
nslookup wax.greymass.com
curl -I https://wax.greymass.com/v1/chain/get_info
```

#### **4. Virtual Environment Problems**
```bash
# ลบและสร้างใหม่
rm -rf awcloud-env/
python3 -m venv awcloud-env
source awcloud-env/bin/activate
pip install -r requirements.txt
```

{% hint style="success" %}
**🎉 การติดตั้งสำเร็จ!** ตอนนี้คุณพร้อมที่จะไปยังขั้นตอนต่อไป: [Configuration Setup](configuration.md)
{% endhint %}

{% hint style="info" %}
**💡 เคล็ดลับ**: หากพบปัญหาใดๆ ในการติดตั้ง สามารถดู [Troubleshooting Guide](../troubleshooting/common-issues.md) เพื่อหาวิธีแก้ไขได้
{% endhint %}

---

**ขั้นต่อไป**: [Configuration Setup](configuration.md) - การกำหนดค่าระบบให้พร้อมใช้งาน