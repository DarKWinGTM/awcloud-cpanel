# 🔑 Authentication

## ระบบการพิสูจน์ตัวตนของ AWCLOUD CPanel

AWCLOUD CPanel ใช้ระบบการพิสูจน์ตัวตนแบบหลายชั้นเพื่อความปลอดภัยสูงสุด รวมถึงการรองรับ WAX Wallet Authentication และ Multi-Factor Authentication

## 🔐 ภาพรวมระบบ Authentication

### **หลักการทำงาน**
```
WAX Wallet → WAM Files → AWCLOUD Auth → Session Management → API Access
     ↓            ↓           ↓              ↓               ↓
Private Keys → Encryption → Verification → Cookie/Token → Authorized Actions
```

### **ระดับความปลอดภัย**
- **Level 1**: WAX Wallet Authentication (.wam files)
- **Level 2**: Session-based Authentication (cookies)
- **Level 3**: API Token Authentication (for automated access)
- **Level 4**: TOTP/2FA Authentication (for admin functions)

## 📁 ระบบ WAM Authentication

### **1. โครงสร้างไฟล์ WAM**

```
auth/
├── cc-xxxxx.wam     # Crypto Castles accounts
├── kq-xxxxx.wam     # Kingdom Quest accounts  
├── aw-xxxxx.wam     # Alien Worlds accounts
├── fw-xxxxx.wam     # Farmers World accounts
└── master.key       # Master encryption key
```

### **2. รูปแบบไฟล์ WAM**

```json
{
  "account_name": "example.wam",
  "private_key": "encrypted_private_key_data",
  "public_key": "EOS_public_key_string",
  "encryption": {
    "algorithm": "Fernet",
    "salt": "random_salt_value",
    "iterations": 100000
  },
  "metadata": {
    "created_at": "2025-01-15T10:30:00Z",
    "last_used": "2025-07-26T15:45:00Z",
    "game_assignments": ["alien_worlds", "farmers_world"],
    "permissions": ["mining", "staking", "trading"]
  }
}
```

### **3. การสร้างและจัดการ WAM Files**

```python
from cryptography.fernet import Fernet
import json
import hashlib

class WAMManager:
    """
    ระบบจัดการไฟล์ WAM Authentication
    """
    
    def __init__(self, master_key_path="auth/master.key"):
        self.master_key_path = master_key_path
        self.cipher_suite = self._load_or_create_master_key()
    
    def _load_or_create_master_key(self):
        """โหลดหรือสร้าง master key สำหรับเข้ารหัส"""
        try:
            with open(self.master_key_path, 'rb') as f:
                key = f.read()
        except FileNotFoundError:
            key = Fernet.generate_key()
            with open(self.master_key_path, 'wb') as f:
                f.write(key)
            os.chmod(self.master_key_path, 0o600)  # ตั้งค่า permissions
        
        return Fernet(key)
    
    def create_wam_file(self, account_name, private_key, games=None, permissions=None):
        """สร้างไฟล์ WAM ใหม่"""
        # เข้ารหัส private key
        encrypted_private_key = self.cipher_suite.encrypt(private_key.encode())
        
        # สร้าง public key จาก private key (simplified)
        public_key = self.derive_public_key(private_key)
        
        wam_data = {
            "account_name": account_name,
            "private_key": encrypted_private_key.decode(),
            "public_key": public_key,
            "encryption": {
                "algorithm": "Fernet",
                "salt": self.generate_salt(),
                "iterations": 100000
            },
            "metadata": {
                "created_at": datetime.utcnow().isoformat() + "Z",
                "last_used": None,
                "game_assignments": games or [],
                "permissions": permissions or ["mining"]
            }
        }
        
        # บันทึกไฟล์
        file_path = f"auth/{account_name}.wam"
        with open(file_path, 'w') as f:
            json.dump(wam_data, f, indent=2)
        
        os.chmod(file_path, 0o600)  # ตั้งค่า permissions
        return file_path
    
    def load_wam_file(self, account_name):
        """โหลดและถอดรหัสไฟล์ WAM"""
        file_path = f"auth/{account_name}.wam"
        
        try:
            with open(file_path, 'r') as f:
                wam_data = json.load(f)
            
            # ถอดรหัส private key
            encrypted_key = wam_data["private_key"].encode()
            private_key = self.cipher_suite.decrypt(encrypted_key).decode()
            
            # อัปเดต last_used
            wam_data["metadata"]["last_used"] = datetime.utcnow().isoformat() + "Z"
            
            with open(file_path, 'w') as f:
                json.dump(wam_data, f, indent=2)
            
            return {
                "account_name": wam_data["account_name"],
                "private_key": private_key,
                "public_key": wam_data["public_key"],
                "permissions": wam_data["metadata"]["permissions"],
                "games": wam_data["metadata"]["game_assignments"]
            }
            
        except Exception as e:
            raise AuthenticationError(f"Failed to load WAM file: {e}")
```

## 🌐 Web Authentication System

### **1. Session-based Authentication**

```python
from flask import session, request, jsonify
from functools import wraps

class WebAuthManager:
    """
    ระบบ Authentication สำหรับ Web Interface
    """
    
    def __init__(self, secret_key):
        self.secret_key = secret_key
        self.session_timeout = 24 * 60 * 60  # 24 hours
    
    def login_required(self, f):
        """Decorator สำหรับตรวจสอบการ login"""
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not self.is_authenticated():
                return redirect('/login')
            return f(*args, **kwargs)
        return decorated_function
    
    def is_authenticated(self):
        """ตรวจสอบว่า user login แล้วหรือไม่"""
        if 'user_id' not in session:
            return False
        
        if 'login_time' not in session:
            return False
        
        # ตรวจสอบ session timeout
        login_time = session['login_time']
        if time.time() - login_time > self.session_timeout:
            session.clear()
            return False
        
        return True
    
    def authenticate_user(self, username, password):
        """ตรวจสอบ username และ password"""
        # ในระบบจริงจะตรวจสอบกับฐานข้อมูล
        valid_users = {
            "admin": self.hash_password("admin_password"),
            "user": self.hash_password("user_password")
        }
        
        if username in valid_users:
            if self.verify_password(password, valid_users[username]):
                session['user_id'] = username
                session['login_time'] = time.time()
                session.permanent = True
                return True
        
        return False
    
    def logout_user(self):
        """ลบ session และ logout"""
        session.clear()
        return True

# Flask routes สำหรับ authentication
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if auth_manager.authenticate_user(username, password):
            return redirect('/')
        else:
            return render_template('login.html', error='Invalid credentials')
    
    return render_template('login.html')

@app.route('/logout')
def logout():
    auth_manager.logout_user()
    return redirect('/login')
```

### **2. API Token Authentication**

```python
class APITokenManager:
    """
    ระบบจัดการ API Tokens สำหรับการเข้าถึงอัตโนมัติ
    """
    
    def __init__(self):
        self.tokens = {}  # ในระบบจริงจะเก็บในฐานข้อมูล
        self.token_timeout = 7 * 24 * 60 * 60  # 7 days
    
    def generate_api_token(self, user_id, permissions=None):
        """สร้าง API token ใหม่"""
        token_data = {
            "user_id": user_id,
            "permissions": permissions or ["read"],
            "created_at": time.time(),
            "expires_at": time.time() + self.token_timeout,
            "last_used": None
        }
        
        # สร้าง token string
        token_string = secrets.token_urlsafe(32)
        self.tokens[token_string] = token_data
        
        return token_string
    
    def validate_api_token(self, token):
        """ตรวจสอบ API token"""
        if token not in self.tokens:
            return False
        
        token_data = self.tokens[token]
        
        # ตรวจสอบ expiration
        if time.time() > token_data["expires_at"]:
            del self.tokens[token]
            return False
        
        # อัปเดต last_used
        token_data["last_used"] = time.time()
        return token_data
    
    def revoke_api_token(self, token):
        """ยกเลิก API token"""
        if token in self.tokens:
            del self.tokens[token]
            return True
        return False

# Decorator สำหรับ API authentication
def api_auth_required(permissions=None):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            auth_header = request.headers.get('Authorization')
            
            if not auth_header or not auth_header.startswith('Bearer '):
                return jsonify({"error": "Missing or invalid authorization header"}), 401
            
            token = auth_header.split(' ')[1]
            token_data = api_token_manager.validate_api_token(token)
            
            if not token_data:
                return jsonify({"error": "Invalid or expired token"}), 401
            
            # ตรวจสอบ permissions
            if permissions:
                user_permissions = token_data.get("permissions", [])
                if not any(perm in user_permissions for perm in permissions):
                    return jsonify({"error": "Insufficient permissions"}), 403
            
            # เพิ่ม token_data ใน request context
            request.token_data = token_data
            return f(*args, **kwargs)
        
        return decorated_function
    return decorator
```

## 🔒 Two-Factor Authentication (2FA)

### **1. TOTP Implementation**

```python
import pyotp
import qrcode
from io import BytesIO
import base64

class TOTPManager:
    """
    ระบบ Time-based One-Time Password (TOTP) สำหรับ 2FA
    """
    
    def __init__(self):
        self.issuer_name = "AWCLOUD CPanel"
    
    def generate_secret(self, user_id):
        """สร้าง TOTP secret สำหรับ user"""
        secret = pyotp.random_base32()
        
        # บันทึก secret (ในระบบจริงจะเข้ารหัสและเก็บในฐานข้อมูล)
        self.save_user_secret(user_id, secret)
        
        return secret
    
    def generate_qr_code(self, user_id, secret):
        """สร้าง QR Code สำหรับ Google Authenticator"""
        totp_uri = pyotp.totp.TOTP(secret).provisioning_uri(
            name=user_id,
            issuer_name=self.issuer_name
        )
        
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(totp_uri)
        qr.make(fit=True)
        
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Convert to base64 for web display
        buffered = BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return f"data:image/png;base64,{img_str}"
    
    def verify_totp(self, user_id, token):
        """ตรวจสอบ TOTP token"""
        secret = self.get_user_secret(user_id)
        if not secret:
            return False
        
        totp = pyotp.TOTP(secret)
        return totp.verify(token, valid_window=1)  # อนุญาตให้ผิดพลาด 30 วินาที
    
    def is_2fa_enabled(self, user_id):
        """ตรวจสอบว่า user เปิดใช้ 2FA หรือไม่"""
        return self.get_user_secret(user_id) is not None

# Flask routes สำหรับ 2FA
@app.route('/setup-2fa')
@auth_manager.login_required
def setup_2fa():
    user_id = session['user_id']
    
    if totp_manager.is_2fa_enabled(user_id):
        return redirect('/profile')
    
    secret = totp_manager.generate_secret(user_id)
    qr_code = totp_manager.generate_qr_code(user_id, secret)
    
    return render_template('setup_2fa.html', qr_code=qr_code, secret=secret)

@app.route('/verify-2fa', methods=['POST'])
@auth_manager.login_required  
def verify_2fa():
    user_id = session['user_id']
    token = request.form['token']
    
    if totp_manager.verify_totp(user_id, token):
        session['2fa_verified'] = True
        return jsonify({"success": True})
    else:
        return jsonify({"success": False, "error": "Invalid token"})
```

## 🔌 API Endpoints

### **1. Authentication Endpoints**

```python
# POST /api/auth/login
@app.route('/api/auth/login', methods=['POST'])
def api_login():
    """
    API endpoint สำหรับ login
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    totp_token = data.get('totp_token')
    
    # ตรวจสอบ username/password
    if not auth_manager.authenticate_user(username, password):
        return jsonify({"error": "Invalid credentials"}), 401
    
    # ตรวจสอบ 2FA ถ้าเปิดใช้งาน
    if totp_manager.is_2fa_enabled(username):
        if not totp_token or not totp_manager.verify_totp(username, totp_token):
            return jsonify({"error": "Invalid 2FA token"}), 401
    
    # สร้าง API token
    api_token = api_token_manager.generate_api_token(
        username, 
        permissions=["read", "write", "admin"]
    )
    
    return jsonify({
        "success": True,
        "token": api_token,
        "expires_in": 7 * 24 * 60 * 60  # 7 days in seconds
    })

# POST /api/auth/refresh
@app.route('/api/auth/refresh', methods=['POST'])
@api_auth_required()
def refresh_token():
    """
    API endpoint สำหรับ refresh token
    """
    user_id = request.token_data['user_id']
    permissions = request.token_data['permissions']
    
    # สร้าง token ใหม่
    new_token = api_token_manager.generate_api_token(user_id, permissions)
    
    return jsonify({
        "success": True,
        "token": new_token,
        "expires_in": 7 * 24 * 60 * 60
    })

# DELETE /api/auth/logout
@app.route('/api/auth/logout', methods=['DELETE'])
@api_auth_required()
def api_logout():
    """
    API endpoint สำหรับ logout (revoke token)
    """
    auth_header = request.headers.get('Authorization')
    token = auth_header.split(' ')[1]
    
    if api_token_manager.revoke_api_token(token):
        return jsonify({"success": True})
    else:
        return jsonify({"error": "Token not found"}), 404
```

### **2. WAM Management Endpoints**

```python
# GET /api/wam/accounts
@app.route('/api/wam/accounts', methods=['GET'])
@api_auth_required(permissions=["read", "admin"])
def list_wam_accounts():
    """
    ดึงรายการ WAM accounts
    """
    try:
        accounts = []
        for file_name in os.listdir('auth'):
            if file_name.endswith('.wam'):
                account_name = file_name[:-4]  # ลบ .wam extension
                
                # โหลดข้อมูล metadata (ไม่รวม private key)
                with open(f'auth/{file_name}', 'r') as f:
                    wam_data = json.load(f)
                
                accounts.append({
                    "account_name": account_name,
                    "games": wam_data["metadata"]["game_assignments"],
                    "permissions": wam_data["metadata"]["permissions"],
                    "last_used": wam_data["metadata"]["last_used"],
                    "status": "active"  # ในระบบจริงจะตรวจสอบสถานะจริง
                })
        
        return jsonify({"accounts": accounts})
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# POST /api/wam/test-auth
@app.route('/api/wam/test-auth', methods=['POST'])
@api_auth_required(permissions=["admin"])
def test_wam_authentication():
    """
    ทดสอบการ authentication ของ WAM account
    """
    data = request.get_json()
    account_name = data.get('account_name')
    
    try:
        # โหลด WAM file และทดสอบการเชื่อมต่อ
        wam_data = wam_manager.load_wam_file(account_name)
        
        # ทดสอบการเชื่อมต่อ WAX blockchain
        test_result = test_wax_connection(wam_data['private_key'])
        
        return jsonify({
            "success": True,
            "account": account_name,
            "connection_test": test_result,
            "permissions": wam_data['permissions']
        })
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
```

## 🛡️ Security Best Practices

### **1. การป้องกันการโจมตี**

```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

# Rate limiting
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["100 per hour"]
)

# ป้องกัน brute force attack
@app.route('/api/auth/login', methods=['POST'])
@limiter.limit("5 per minute")  # จำกัด 5 ครั้งต่อนาที
def api_login():
    # ... implementation
    pass

# CSRF Protection
from flask_wtf.csrf import CSRFProtect
csrf = CSRFProtect(app)

# Secure Headers
@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
    return response
```

### **2. การจัดการข้อผิดพลาด**

```python
class AuthenticationError(Exception):
    """Exception สำหรับปัญหา authentication"""
    pass

class AuthorizationError(Exception):
    """Exception สำหรับปัญหา authorization"""
    pass

@app.errorhandler(AuthenticationError)
def handle_auth_error(e):
    return jsonify({"error": "Authentication failed", "message": str(e)}), 401

@app.errorhandler(AuthorizationError)
def handle_authz_error(e):
    return jsonify({"error": "Authorization failed", "message": str(e)}), 403
```

## 📋 การใช้งานตัวอย่าง

### **1. การ Login ผ่าน Web Interface**

```javascript
// Frontend JavaScript สำหรับ login
async function login(username, password, totpToken = null) {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            totp_token: totpToken
        })
    });
    
    const data = await response.json();
    
    if (data.success) {
        // เก็บ token ใน localStorage
        localStorage.setItem('api_token', data.token);
        return true;
    } else {
        throw new Error(data.error);
    }
}
```

### **2. การใช้งาน API Token**

```python
import requests

# ใช้ API token สำหรับเรียก API
def call_api_with_token(endpoint, token, method='GET', data=None):
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    if method == 'GET':
        response = requests.get(endpoint, headers=headers)
    elif method == 'POST':
        response = requests.post(endpoint, headers=headers, json=data)
    
    return response.json()

# ตัวอย่างการใช้งาน
token = "your_api_token_here"
accounts = call_api_with_token("/api/wam/accounts", token)
print(accounts)
```

{% hint style="success" %}
**🔒 ความปลอดภัย**: ระบบ Authentication ของ AWCLOUD CPanel ใช้การเข้ารหัสระดับองค์กรและรองรับ 2FA เพื่อความปลอดภัยสูงสุด
{% endhint %}

{% hint style="warning" %}
**⚠️ คำเตือน**: อย่าแชร์ไฟล์ .wam หรือ API tokens กับผู้อื่น และเปลี่ยนรหัสผ่านอย่างสม่ำเสมอ
{% endhint %}

---

**เรียนรู้เพิ่มเติม**:
- [Mining Endpoints](mining-endpoints.md) - API สำหรับการขุด
- [Resource Management](resource-management.md) - การจัดการทรัพยากร
- [Security Configuration](../configuration/security.md) - การตั้งค่าความปลอดภัย