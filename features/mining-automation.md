# ⛏️ Mining Automation

## ระบบขุดอัตโนมัติขั้นสูง (Advanced Mining Automation)

AWCLOUD CPanel มาพร้อมกับระบบขุดอัตโนมัติที่ทันสมัยที่สุด รองรับการขุดหลายเกมพร้อมกัน พร้อมระบบ AI ที่ช่วยเพิ่มประสิทธิภาพและหลีกเลี่ยงข้อจำกัดต่างๆ

## 🎯 ภาพรวมระบบ (System Overview)

### **หลักการทำงาน**
```
🎮 Multiple Games → 🤖 AI Optimization → ⛏️ Smart Mining → 📊 Real-time Monitoring
     ↓                    ↓                    ↓                    ↓
  15+ Games        Ban Wave Detection    Resource Management    Performance Analytics
```

### **คุณสมบัติหลัก**
- **🎮 Multi-Game Support**: รองรับการขุด 15+ เกมพร้อมกัน
- **🤖 AI-Powered**: ระบบ AI วิเคราะห์และปรับแต่งการขุดอัตโนมัติ
- **⏰ Smart Timing**: หลีกเลี่ยง Ban Wave ด้วยระบบจัดการเวลาอัจฉริยะ
- **📊 Resource Optimization**: จัดการ CPU/NET/RAM อัตโนมัติ
- **👥 Team Coordination**: ระบบ Team Pool สำหรับการทำงานร่วมกัน

## 🎮 เกมที่รองรับ (Supported Games)

### **🌟 เกมหลัก (Primary Games)**

#### **👽 Alien Worlds**
```python
# การกำหนดค่าการขุด Alien Worlds
{
  "game": "alien_worlds",
  "strategy": "planet_optimization",
  "settings": {
    "auto_claim": True,
    "planet_switching": True,
    "tool_management": True,
    "cpu_threshold": 100,  # minimum CPU for mining
    "claim_interval": 300  # seconds
  }
}
```

**คุณสมบัติ:**
- การขุดบนดาวเคราะห์หลากหลาย
- การจัดการเครื่องมือขุดอัตโนมัติ
- การ claim TLM tokens
- การ stake/unstake WAX สำหรับ CPU
- การเลือกดาวเคราะห์ที่เหมาะสม

#### **🚜 Farmers World**
```python
# การกำหนดค่าการเล่น Farmers World
{
  "game": "farmers_world", 
  "strategy": "farming_optimization",
  "settings": {
    "auto_plant": True,
    "auto_harvest": True,
    "animal_care": True,
    "resource_management": True,
    "crop_rotation": ["corn", "barley", "wheat"]
  }
}
```

**คุณสมบัติ:**
- การปลูกพืชและเก็บเกี่ยวอัตโนมัติ
- การดูแลสัตว์และเก็บผลผลิต
- การจัดการทรัพยากรฟาร์ม
- การซื้อขายใน marketplace
- การผลิตและ upgrade อุปกรณ์

#### **🏰 Crypto Castles**
```python
# การกำหนดค่า Crypto Castles
{
  "game": "crypto_castles",
  "strategy": "castle_building",
  "settings": {
    "auto_build": True,
    "resource_gathering": True,
    "army_management": True,
    "research": True,
    "pvp_enabled": False
  }
}
```

**คุณสมบัติ:**
- การสร้างและ upgrade ปราสาท
- การเก็บทรัพยากรอัตโนมัติ
- การจัดการกองทัพ
- การวิจัยเทคโนโลยี
- การป้องกันและโจมตี

### **🎯 เกมเสริม (Additional Games)**

| เกม | ประเภท | คุณสมบัติ | สถานะ |
|-----|--------|-----------|--------|
| **Kingdom Quest** | RPG Adventure | Quest automation, Character management | ✅ Active |
| **Space Ship** | Space Trading | Route optimization, Cargo management | ✅ Active |
| **Blockchain Brawlers** | Fighting | Tournament participation, Training | ✅ Active |
| **Galaxy Miners** | Space Mining | Asteroid mining, Fleet management | ✅ Active |
| **Defira Mining** | DeFi Gaming | Yield farming, Token staking | ✅ Active |
| **Sailors World** | Naval Exploration | Ship management, Trading routes | ✅ Active |
| **Real Mining** | Mining Simulation | Equipment upgrade, Mining optimization | ✅ Active |
| **War Space** | Space Warfare | Fleet battles, Territory control | 🔄 Beta |

## 🤖 ระบบ AI และการเพิ่มประสิทธิภาพ

### **1. Ban Wave Detection System**

```python
class BanWaveDetector:
    """
    ระบบตรวจจับและหลีกเลี่ยง Ban Wave อัตโนมัติ
    """
    
    def __init__(self):
        self.pattern_analysis = True
        self.timing_optimization = True
        self.risk_assessment = True
    
    def analyze_ban_patterns(self):
        """วิเคราะห์รูปแบบการ ban จากข้อมูลประวัติ"""
        return {
            "high_risk_hours": [2, 8, 14, 20],  # UTC
            "safe_intervals": [300, 600, 900],   # seconds
            "detection_signals": [
                "unusual_response_times",
                "increased_error_rates", 
                "mining_rate_drops"
            ]
        }
    
    def calculate_safe_timing(self, current_time, last_action):
        """คำนวณเวลาที่ปลอดภัยสำหรับการขุดครั้งต่อไป"""
        risk_level = self.assess_risk(current_time)
        if risk_level > 0.7:
            return random.randint(900, 1800)  # รอนานขึ้น
        elif risk_level > 0.4:
            return random.randint(300, 900)   # รอปานกลาง
        else:
            return random.randint(120, 300)   # รอสั้น
```

### **2. Resource Optimization Engine**

```python
class ResourceOptimizer:
    """
    เครื่องมือเพิ่มประสิทธิภาพการใช้ทรัพยากร WAX
    """
    
    def optimize_cpu_usage(self, accounts):
        """เพิ่มประสิทธิภาพการใช้ CPU"""
        for account in accounts:
            current_cpu = self.get_cpu_status(account)
            
            if current_cpu['available'] < 100:  # ms
                # Auto-stake เพิ่ม CPU
                self.auto_stake_cpu(account, amount=1.0)
            
            elif current_cpu['available'] > 5000:  # ms
                # Auto-unstake CPU ที่เหลือเยอะ
                self.auto_unstake_cpu(account, amount=0.5)
    
    def optimize_net_usage(self, accounts):
        """เพิ่มประสิทธิภาพการใช้ NET"""
        for account in accounts:
            current_net = self.get_net_status(account)
            
            if current_net['used_percentage'] > 90:
                self.auto_stake_net(account, amount=0.5)
    
    def optimize_ram_usage(self, accounts):
        """เพิ่มประสิทธิภาพการใช้ RAM"""
        for account in accounts:
            current_ram = self.get_ram_status(account)
            
            if current_ram['available'] < 4000:  # bytes
                self.auto_buy_ram(account, amount=1000)
```

### **3. Multi-Game Coordination**

```python
class MultiGameCoordinator:
    """
    ระบบประสานงานการขุดหลายเกมพร้อมกัน
    """
    
    def __init__(self):
        self.active_games = {}
        self.resource_allocation = {}
        self.priority_queue = []
    
    def coordinate_mining_schedule(self):
        """จัดตารางการขุดสำหรับหลายเกม"""
        schedule = {}
        
        # เรียงลำดับความสำคัญตาม profitability
        sorted_games = self.sort_by_priority([
            "alien_worlds",    # สูงสุด
            "farmers_world", 
            "crypto_castles",
            "kingdom_quest",
            "space_ship"
        ])
        
        # แบ่งเวลาตาม CPU allocation
        for game in sorted_games:
            schedule[game] = self.calculate_time_slots(game)
        
        return schedule
    
    def balance_resource_allocation(self):
        """ปรับสมดุลการใช้ทรัพยากรระหว่างเกม"""
        total_cpu = sum(acc['cpu'] for acc in self.accounts)
        total_net = sum(acc['net'] for acc in self.accounts)
        
        # แบ่งทรัพยากรตามความสำคัญ
        allocation = {
            "alien_worlds": {"cpu": 0.4, "net": 0.4},    # 40%
            "farmers_world": {"cpu": 0.3, "net": 0.3},   # 30%
            "crypto_castles": {"cpu": 0.2, "net": 0.2},  # 20%
            "others": {"cpu": 0.1, "net": 0.1}           # 10%
        }
        
        return allocation
```

## ⚙️ การกำหนดค่าการขุด (Mining Configuration)

### **1. การตั้งค่าพื้นฐาน**

```json
{
  "mining_config": {
    "global_settings": {
      "auto_mining": true,
      "concurrent_games": 5,
      "max_threads": 10,
      "safety_mode": true,
      "debug_mode": false
    },
    
    "timing_settings": {
      "base_interval": 300,
      "random_variance": 60,
      "ban_wave_detection": true,
      "adaptive_timing": true
    },
    
    "resource_settings": {
      "auto_stake": true,
      "auto_unstake": true,
      "cpu_threshold": 100,
      "net_threshold": 10,
      "ram_threshold": 4000
    }
  }
}
```

### **2. การตั้งค่าเฉพาะเกม**

```json
{
  "game_specific_config": {
    "alien_worlds": {
      "enabled": true,
      "priority": 1,
      "settings": {
        "auto_claim": true,
        "planet_switching": true,
        "tool_management": true,
        "preferred_planets": ["eyeke", "naron", "kavian"],
        "min_cpu_for_mining": 100,
        "claim_threshold": 0.1
      }
    },
    
    "farmers_world": {
      "enabled": true, 
      "priority": 2,
      "settings": {
        "auto_plant": true,
        "auto_harvest": true,
        "animal_care": true,
        "crop_rotation": ["corn", "barley"],
        "marketplace_selling": true,
        "tool_durability_threshold": 20
      }
    }
  }
}
```

### **3. การตั้งค่า Team Pool**

```json
{
  "team_pool_config": {
    "enabled": true,
    "mode": "collaborative",
    "settings": {
      "team_members": [
        {"account": "team1.wam", "role": "miner", "allocation": 0.4},
        {"account": "team2.wam", "role": "miner", "allocation": 0.3}, 
        {"account": "team3.wam", "role": "support", "allocation": 0.3}
      ],
      
      "time_slots": {
        "00:00-08:00": "team1.wam",
        "08:00-16:00": "team2.wam", 
        "16:00-24:00": "team3.wam"
      },
      
      "shared_resources": {
        "cpu_pool": true,
        "net_pool": true,
        "profit_sharing": true
      }
    }
  }
}
```

## 📊 การตรวจสอบและวิเคราะห์ประสิทธิภาพ

### **1. Real-time Monitoring Dashboard**

```html
<!-- Mining Performance Dashboard -->
<div class="mining-dashboard">
    <div class="row">
        <!-- Overall Statistics -->
        <div class="col-md-3">
            <div class="stat-card">
                <h4>📊 Overall Stats</h4>
                <p>Active Games: <span id="active-games">5</span></p>
                <p>Total Earnings: <span id="total-earnings">125.45 WAX</span></p>
                <p>Uptime: <span id="uptime">23h 45m</span></p>
                <p>Success Rate: <span id="success-rate">94.2%</span></p>
            </div>
        </div>
        
        <!-- Resource Usage -->
        <div class="col-md-3">
            <div class="stat-card">
                <h4>⚡ Resources</h4>
                <div class="resource-bar">
                    <label>CPU Usage</label>
                    <div class="progress">
                        <div class="progress-bar" style="width: 75%">75%</div>
                    </div>
                </div>
                <div class="resource-bar">
                    <label>NET Usage</label>
                    <div class="progress">
                        <div class="progress-bar" style="width: 45%">45%</div>
                    </div>
                </div>
                <div class="resource-bar">
                    <label>RAM Usage</label>
                    <div class="progress">
                        <div class="progress-bar" style="width: 60%">60%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### **2. Performance Analytics**

```python
class MiningAnalytics:
    """
    ระบบวิเคราะห์ประสิทธิภาพการขุด
    """
    
    def calculate_profitability(self, game, duration_hours):
        """คำนวณผลตอบแทนต่อชั่วโมง"""
        earnings = self.get_earnings(game, duration_hours)
        costs = self.calculate_costs(game, duration_hours)
        
        return {
            "game": game,
            "gross_earnings": earnings,
            "operating_costs": costs,
            "net_profit": earnings - costs,
            "roi_percentage": ((earnings - costs) / costs) * 100,
            "profit_per_hour": (earnings - costs) / duration_hours
        }
    
    def analyze_ban_wave_patterns(self):
        """วิเคราะห์รูปแบบ Ban Wave"""
        ban_events = self.get_ban_history()
        
        patterns = {
            "time_patterns": self.find_time_patterns(ban_events),
            "frequency": len(ban_events) / 30,  # per month
            "average_duration": self.calculate_avg_duration(ban_events),
            "risk_factors": self.identify_risk_factors(ban_events)
        }
        
        return patterns
    
    def generate_optimization_recommendations(self):
        """สร้างคำแนะนำการเพิ่มประสิทธิภาพ"""
        recommendations = []
        
        # วิเคราะห์การใช้ทรัพยากร
        resource_efficiency = self.analyze_resource_efficiency()
        if resource_efficiency['cpu_waste'] > 20:
            recommendations.append({
                "type": "resource_optimization",
                "priority": "high",
                "message": "มีการใช้ CPU ไม่เต็มประสิทธิภาพ แนะนำให้ unstake CPU ส่วนเกิน",
                "estimated_savings": f"{resource_efficiency['cpu_waste']:.1f} WAX/month"
            })
        
        # วิเคราะห์การกระจายเกม
        game_distribution = self.analyze_game_distribution()
        if game_distribution['imbalance_score'] > 0.3:
            recommendations.append({
                "type": "game_balancing",
                "priority": "medium", 
                "message": "การกระจายเวลาไม่สมดุล แนะนำให้ปรับสัดส่วนการเล่นแต่ละเกม",
                "potential_increase": f"{game_distribution['improvement_potential']:.1f}% profit increase"
            })
        
        return recommendations
```

## 🔧 การใช้งานและคำสั่ง (Usage & Commands)

### **1. การเริ่มต้นการขุด**

```python
# เริ่มต้นการขุดทั้งหมด
python3 awcloudc.py --start-mining --all-games

# เริ่มต้นการขุดเฉพาะเกม
python3 awcloudc.py --start-mining --games="alien_worlds,farmers_world"

# เริ่มต้นการขุดแบบ Team Pool
python3 awcloudc.py --start-team-pool --config="team_pool.json"
```

### **2. การตรวจสอบสถานะ**

```python
# ตรวจสอบสถานะการขุด
python3 awcloudc.py --status --detailed

# ตรวจสอบผลตอบแทน
python3 awcloudc.py --earnings --last-24h

# ตรวจสอบทรัพยากร
python3 awcloudc.py --resources --all-accounts
```

### **3. การปรับแต่งระบบ**

```python
# ปรับแต่งการขุด Alien Worlds
python3 awcloudc.py --configure-game alien_worlds \
  --planet="eyeke" \
  --tools="[1099658213224]" \
  --cpu-threshold=100

# ปรับแต่งการขุด Farmers World  
python3 awcloudc.py --configure-game farmers_world \
  --crops="corn,barley" \
  --auto-harvest=true \
  --marketplace-selling=true

# ปรับแต่งระบบ Team Pool
python3 awcloudc.py --configure-team-pool \
  --mode="time_rotation" \
  --members="team1.wam,team2.wam,team3.wam"
```

## 🚨 ข้อควรระวังและข้อจำกัด

### **⚠️ ความเสี่ยงและการป้องกัน**

1. **Ban Wave Risks**
   - ใช้ระบบ Ban Wave Detection
   - ตั้งค่า random intervals
   - หลีกเลี่ยงการขุดในช่วงเวลาเสี่ยง

2. **Resource Management**
   - ตรวจสอบ CPU/NET/RAM อย่างสม่ำเสมอ
   - ตั้งค่า auto-stake/unstake อย่างระมัดระวัง
   - เก็บ WAX สำรองสำหรับค่าธรรมเนียม

3. **Technical Issues**
   - ใช้ระบบ monitoring แบบ real-time
   - ตั้งค่า alerts สำหรับปัญหาสำคัญ
   - เตรียม backup และ failover systems

### **📋 Best Practices**

1. **การเพิ่มประสิทธิภาพ**
   - เริ่มต้นด้วยเกมที่มีผลตอบแทนสูง
   - ใช้ระบบ Team Pool สำหรับการทำงานร่วมกัน
   - ปรับแต่ง timing ตามสถิติประสิทธิภาพ

2. **การจัดการความเสี่ยง**
   - แบ่งการขุดออกเป็นหลายบัญชี
   - ใช้ proxy เพื่อกระจายการเชื่อมต่อ
   - ตั้งค่า safety mode สำหรับผู้เริ่มต้น

3. **การตรวจสอบและบำรุงรักษา**
   - ตรวจสอบผลการขุดทุกวัน
   - อัปเดตการตั้งค่าตามข้อมูลใหม่
   - สำรองข้อมูลและการตั้งค่าอย่างสม่ำเสมอ

{% hint style="success" %}
**🎯 เป้าหมายการขุด**: ด้วยระบบขุดอัตโนมัติของ AWCLOUD CPanel คุณสามารถเพิ่มประสิทธิภาพการขุดได้ถึง 300% เมื่อเทียบกับการขุดด้วยตนเอง
{% endhint %}

{% hint style="warning" %}
**⚠️ คำเตือน**: การใช้ระบบขุดอัตโนมัติควรปฏิบัติตาม Terms of Service ของแต่ละเกม และใช้ด้วยความระมัดระวัง
{% endhint %}

---

**เรียนรู้เพิ่มเติม**: 
- [Team Pool Management](team-pool.md) - การจัดการทีมงานการขุด
- [Resource Management](resource-management.md) - การจัดการทรัพยากร WAX
- [Game Guides](../games/) - คู่มือการขุดแต่ละเกม