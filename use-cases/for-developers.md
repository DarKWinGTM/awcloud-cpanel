# 🖥️ สำหรับ Developers

## การพัฒนาและขยายความสามารถของ AWCLOUD CPanel

### 🔧 **API Integration และ Development**

ระบบ AWCLOUD CPanel มอบความยืดหยุ่นสำหรับนักพัฒนาในการขยายความสามารถและสร้าง custom integrations

#### **Core APIs และ Endpoints**

**Authentication API**
```python
# การ authenticate กับระบบ
import requests

def authenticate_account(wam_file, password):
    """
    Authenticate WAX account with WAM file
    """
    endpoint = "https://api.awcloud.local/auth/wam"
    data = {
        "wam_file": wam_file,
        "password": password
    }
    response = requests.post(endpoint, json=data)
    return response.json()
```

**Mining Control API**
```python
# การควบคุมการขุด
def start_mining(account_name, strategy="default"):
    """
    Start mining for specific account
    """
    endpoint = f"https://api.awcloud.local/mining/start"
    data = {
        "account": account_name,
        "strategy": strategy,
        "auto_resource_management": True
    }
    response = requests.post(endpoint, json=data)
    return response.json()

def stop_mining(account_name):
    """
    Stop mining for specific account
    """
    endpoint = f"https://api.awcloud.local/mining/stop"
    data = {"account": account_name}
    response = requests.post(endpoint, json=data)
    return response.json()
```

#### **Data Retrieval APIs**
```python
# การดึงข้อมูลสถิติ
def get_mining_stats(account_name, period="24h"):
    """
    Get mining statistics for account
    """
    endpoint = f"https://api.awcloud.local/stats/{account_name}"
    params = {"period": period}
    response = requests.get(endpoint, params=params)
    return response.json()

def get_account_resources(account_name):
    """
    Get WAX account resources (CPU/NET/RAM)
    """
    endpoint = f"https://api.awcloud.local/resources/{account_name}"
    response = requests.get(endpoint)
    return response.json()
```

### 🛠️ **Custom Plugin Development**

#### **Plugin Architecture**
```python
# Base Plugin Class
class AWCloudPlugin:
    def __init__(self, config):
        self.config = config
        self.name = "Base Plugin"
        self.version = "1.0.0"
    
    def initialize(self):
        """Plugin initialization logic"""
        pass
    
    def on_mining_start(self, account_data):
        """Called when mining starts"""
        pass
    
    def on_mining_stop(self, account_data):
        """Called when mining stops"""
        pass
    
    def on_transaction_success(self, tx_data):
        """Called on successful transaction"""
        pass
    
    def on_error(self, error_data):
        """Called when error occurs"""
        pass
```

#### **Example: Telegram Notification Plugin**
```python
import telebot
from awcloud_plugin import AWCloudPlugin

class TelegramNotifier(AWCloudPlugin):
    def __init__(self, config):
        super().__init__(config)
        self.name = "Telegram Notifier"
        self.bot = telebot.TeleBot(config.get('telegram_token'))
        self.chat_id = config.get('chat_id')
    
    def on_mining_start(self, account_data):
        message = f"🚀 Mining started for {account_data['account_name']}"
        self.bot.send_message(self.chat_id, message)
    
    def on_transaction_success(self, tx_data):
        tlm_amount = tx_data.get('tlm_earned', 0)
        message = f"💎 Mined {tlm_amount} TLM on {tx_data['planet']}"
        self.bot.send_message(self.chat_id, message)
```

### 📊 **Database และ Data Management**

#### **Database Schema Examples**
```sql
-- Mining logs table
CREATE TABLE mining_logs (
    id SERIAL PRIMARY KEY,
    account_name VARCHAR(12) NOT NULL,
    planet VARCHAR(50),
    tlm_earned DECIMAL(10,4),
    nft_found TEXT,
    cpu_used INTEGER,
    net_used INTEGER,
    transaction_id VARCHAR(64),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Account statistics table
CREATE TABLE account_stats (
    account_name VARCHAR(12) PRIMARY KEY,
    total_tlm_earned DECIMAL(12,4),
    total_mines INTEGER,
    average_tlm_per_mine DECIMAL(8,4),
    last_mine_at TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **Data Access Layer**
```python
import sqlite3
from datetime import datetime, timedelta

class MiningDataManager:
    def __init__(self, db_path):
        self.db_path = db_path
    
    def log_mining_result(self, account, planet, tlm_earned, nft_found=None):
        """Log mining result to database"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute("""
            INSERT INTO mining_logs 
            (account_name, planet, tlm_earned, nft_found)
            VALUES (?, ?, ?, ?)
        """, (account, planet, tlm_earned, nft_found))
        
        conn.commit()
        conn.close()
    
    def get_account_daily_stats(self, account, days=7):
        """Get account statistics for specified days"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute("""
            SELECT 
                DATE(created_at) as date,
                SUM(tlm_earned) as daily_tlm,
                COUNT(*) as daily_mines
            FROM mining_logs 
            WHERE account_name = ? 
            AND created_at >= date('now', '-{} days')
            GROUP BY DATE(created_at)
            ORDER BY date DESC
        """.format(days), (account,))
        
        results = cursor.fetchall()
        conn.close()
        return results
```

### 🔄 **Webhook Integration**

#### **Webhook Server Setup**
```python
from flask import Flask, request, jsonify
import hmac
import hashlib

app = Flask(__name__)

@app.route('/webhook/mining-event', methods=['POST'])
def handle_mining_webhook():
    """Handle mining event webhooks"""
    
    # Verify webhook signature
    signature = request.headers.get('X-Signature')
    if not verify_signature(request.data, signature):
        return jsonify({'error': 'Invalid signature'}), 401
    
    event_data = request.json
    event_type = event_data.get('type')
    
    if event_type == 'mining_success':
        handle_mining_success(event_data)
    elif event_type == 'account_error':
        handle_account_error(event_data)
    elif event_type == 'resource_low':
        handle_resource_warning(event_data)
    
    return jsonify({'status': 'processed'})

def verify_signature(data, signature):
    """Verify webhook signature"""
    secret = "your-webhook-secret"
    expected = hmac.new(
        secret.encode('utf-8'), 
        data, 
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(signature, expected)
```

### 🧪 **Testing และ Development Tools**

#### **Unit Testing Example**
```python
import unittest
from unittest.mock import patch, MagicMock
from awcloud_mining import MiningBot

class TestMiningBot(unittest.TestCase):
    def setUp(self):
        self.config = {
            'account_name': 'testaccount',
            'wam_file': 'test.wam',
            'strategy': 'conservative'
        }
        self.bot = MiningBot(self.config)
    
    @patch('awcloud_mining.WAXConnector')
    def test_mining_flow(self, mock_connector):
        """Test complete mining flow"""
        mock_connector.return_value.mine.return_value = {
            'success': True,
            'tlm_earned': 0.1234,
            'transaction_id': 'abc123'
        }
        
        result = self.bot.start_mining()
        self.assertTrue(result['success'])
        self.assertGreater(result['tlm_earned'], 0)
    
    def test_resource_check(self):
        """Test resource availability check"""
        resources = {
            'cpu': {'available': 150000, 'max': 200000},
            'net': {'available': 50000, 'max': 100000}
        }
        
        self.assertTrue(self.bot.check_resources(resources))

if __name__ == '__main__':
    unittest.main()
```

### 📚 **Documentation และ Best Practices**

#### **Code Documentation Standards**
```python
def mine_alien_worlds(account_name: str, planet: str = None, 
                     tools: list = None) -> dict:
    """
    Perform mining operation on Alien Worlds
    
    Args:
        account_name (str): WAX account name for mining
        planet (str, optional): Specific planet to mine on. 
                               If None, auto-select optimal planet.
        tools (list, optional): List of tool asset IDs to use.
                                If None, auto-select best tools.
    
    Returns:
        dict: Mining result containing:
            - success (bool): Whether mining was successful
            - tlm_earned (float): Amount of TLM earned
            - nft_found (str): Asset ID of NFT found (if any)
            - transaction_id (str): WAX transaction ID
            - planet_used (str): Planet where mining occurred
            - tools_used (list): Tools used for mining
    
    Raises:
        AuthenticationError: If WAM authentication fails
        InsufficientResourceError: If account lacks CPU/NET/RAM
        MiningCooldownError: If account is still in cooldown
    
    Example:
        >>> result = mine_alien_worlds('myaccount', 'eyeke')
        >>> print(f"Earned {result['tlm_earned']} TLM")
    """
    pass
```

### 🔐 **Security Best Practices**

#### **Secure Configuration Management**
```python
import os
from cryptography.fernet import Fernet

class SecureConfig:
    def __init__(self, config_file):
        self.config_file = config_file
        self.encryption_key = os.environ.get('AWCLOUD_ENCRYPTION_KEY')
        self.fernet = Fernet(self.encryption_key.encode())
    
    def encrypt_sensitive_data(self, data):
        """Encrypt sensitive configuration data"""
        return self.fernet.encrypt(data.encode()).decode()
    
    def decrypt_sensitive_data(self, encrypted_data):
        """Decrypt sensitive configuration data"""
        return self.fernet.decrypt(encrypted_data.encode()).decode()
    
    def save_config(self, config_dict):
        """Save configuration with encrypted sensitive fields"""
        sensitive_fields = ['private_key', 'proxy_password', 'api_secret']
        
        for field in sensitive_fields:
            if field in config_dict:
                config_dict[field] = self.encrypt_sensitive_data(
                    config_dict[field]
                )
        
        with open(self.config_file, 'w') as f:
            json.dump(config_dict, f, indent=2)
```
