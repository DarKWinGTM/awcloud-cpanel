# 👽 Alien Worlds

## คู่มือการใช้งาน Alien Worlds บน AWCLOUD CPanel

Alien Worlds เป็นเกม blockchain หลักที่ได้รับการสนับสนุนอย่างเต็มรูปแบบจาก AWCLOUD CPanel พร้อมฟีเจอร์การขุดอัตโนมัติที่ทันสมัยและระบบเพิ่มประสิทธิภาพขั้นสูง

## 🌍 ภาพรวม Alien Worlds

### **เกี่ยวกับเกม**
- **ประเภท**: Mining & Planet Exploration Game
- **Token**: TLM (Trilium)
- **Blockchain**: WAX Network
- **NFTs**: Tools, Land, Avatars
- **Gameplay**: Mining Trilium on different planets

### **ความสำคัญใน AWCLOUD CPanel**
- 🥇 เกมหลักที่มีผลตอบแทนสูงสุด
- ⛏️ ระบบขุดอัตโนมัติที่สมบูรณ์ที่สุด
- 🤖 AI optimization สำหรับเลือกดาวเคราะห์
- 📊 การตรวจสอบแบบ real-time

## ⚙️ การตั้งค่าและกำหนดค่า

### **1. การเปิดใช้งาน Alien Worlds**

```json
{
  "alien_worlds": {
    "enabled": true,
    "priority": 1,
    "auto_start": true,
    "settings": {
      "auto_claim": true,
      "planet_switching": true,
      "tool_management": true,
      "cpu_optimization": true
    }
  }
}
```

### **2. การกำหนดค่าดาวเคราะห์**

```json
{
  "planet_settings": {
    "preferred_planets": [
      {
        "name": "eyeke",
        "priority": 1,
        "requirements": {
          "min_cpu": 100,
          "min_charge": 1000
        }
      },
      {
        "name": "naron", 
        "priority": 2,
        "requirements": {
          "min_cpu": 150,
          "min_charge": 800
        }
      },
      {
        "name": "kavian",
        "priority": 3,
        "requirements": {
          "min_cpu": 200,
          "min_charge": 600
        }
      }
    ],
    
    "planet_switching": {
      "enabled": true,
      "strategy": "profitability",
      "check_interval": 3600,
      "auto_switch_threshold": 0.15
    }
  }
}
```

### **3. การจัดการเครื่องมือขุด**

```json
{
  "tool_management": {
    "auto_select": true,
    "strategy": "efficiency",
    "tools": [
      {
        "asset_id": "1099658213224",
        "type": "Standard Shovel",
        "rarity": "Common",
        "mining_power": 2.2,
        "nft_luck": 1.1,
        "preferred_planets": ["eyeke", "naron"]
      },
      {
        "asset_id": "1099658213225", 
        "type": "Capacitor",
        "rarity": "Rare",
        "mining_power": 5.5,
        "nft_luck": 2.8,
        "preferred_planets": ["kavian", "magor"]
      }
    ],
    
    "selection_criteria": {
      "primary": "mining_power",
      "secondary": "nft_luck", 
      "planet_compatibility": true,
      "durability_threshold": 10
    }
  }
}
```

## 🎯 กลยุทธ์การขุด (Mining Strategies)

### **1. Planet Optimization Strategy**

```python
class AlienWorldsPlanetOptimizer:
    """
    ระบบเพิ่มประสิทธิภาพการเลือกดาวเคราะห์
    """
    
    def __init__(self):
        self.planet_data = {
            "eyeke": {
                "avg_tlm_per_mine": 0.12,
                "cpu_cost": 85,
                "nft_drop_rate": 0.03,
                "difficulty": "low"
            },
            "naron": {
                "avg_tlm_per_mine": 0.18,
                "cpu_cost": 120,
                "nft_drop_rate": 0.05,
                "difficulty": "medium"
            },
            "kavian": {
                "avg_tlm_per_mine": 0.25,
                "cpu_cost": 180,
                "nft_drop_rate": 0.08,
                "difficulty": "high"
            }
        }
    
    def calculate_profitability(self, planet, tool, account_cpu):
        """คำนวณผลตอบแทนต่อการขุด 1 ครั้ง"""
        planet_stats = self.planet_data[planet]
        
        # คำนวณ TLM ที่คาดหวัง
        base_tlm = planet_stats["avg_tlm_per_mine"]
        tool_multiplier = tool["mining_power"] / 2.0  # baseline
        expected_tlm = base_tlm * tool_multiplier
        
        # คำนวณต้นทุน CPU
        cpu_cost = planet_stats["cpu_cost"]
        if account_cpu < cpu_cost * 2:
            return 0  # ไม่พอ CPU ปลอดภัย
        
        # คำนวณผลตอบแทนสุทธิ
        tlm_value_wax = expected_tlm * 0.02  # ราคา TLM ในหน่วย WAX
        cpu_cost_wax = cpu_cost / 1000 * 0.1  # ประมาณการต้นทุน CPU
        
        profit = tlm_value_wax - cpu_cost_wax
        roi = (profit / cpu_cost_wax) * 100 if cpu_cost_wax > 0 else 0
        
        return {
            "expected_tlm": expected_tlm,
            "profit_wax": profit,
            "roi_percentage": roi,
            "cpu_cost": cpu_cost,
            "recommended": profit > 0 and roi > 50
        }
    
    def recommend_best_planet(self, available_tools, account_cpu):
        """แนะนำดาวเคราะห์ที่เหมาะสมที่สุด"""
        recommendations = []
        
        for planet in self.planet_data.keys():
            for tool in available_tools:
                analysis = self.calculate_profitability(planet, tool, account_cpu)
                if analysis["recommended"]:
                    recommendations.append({
                        "planet": planet,
                        "tool": tool["asset_id"],
                        "analysis": analysis
                    })
        
        # เรียงตามผลตอบแทน
        recommendations.sort(key=lambda x: x["analysis"]["roi_percentage"], reverse=True)
        return recommendations[:3]  # Top 3 recommendations
```

### **2. Auto-Mining Workflow**

```python
class AlienWorldsAutoMiner:
    """
    ระบบขุดอัตโนมัติสำหรับ Alien Worlds
    """
    
    def __init__(self, account, config):
        self.account = account
        self.config = config
        self.last_mine_time = 0
        self.current_planet = None
        self.current_tool = None
        
    async def mining_loop(self):
        """ลูปการขุดหลัก"""
        while self.config["enabled"]:
            try:
                # 1. ตรวจสอบทรัพยากร
                if not self.check_resources():
                    await self.optimize_resources()
                    continue
                
                # 2. เลือกดาวเคราะห์และเครื่องมือ
                planet, tool = await self.select_optimal_setup()
                
                # 3. ทำการขุด
                result = await self.perform_mine(planet, tool)
                
                # 4. บันทึกผลลัพธ์
                await self.log_mining_result(result)
                
                # 5. คำนวณเวลารอต่อไป
                wait_time = self.calculate_next_mine_time(result)
                await asyncio.sleep(wait_time)
                
            except Exception as e:
                print(f"❌ Mining error: {e}")
                await asyncio.sleep(300)  # รอ 5 นาทีแล้วลองใหม่
    
    async def perform_mine(self, planet, tool):
        """ทำการขุด 1 ครั้ง"""
        try:
            # สร้าง transaction
            tx_data = {
                "account": "m.federation",
                "name": "mine",
                "authorization": [{
                    "actor": self.account,
                    "permission": "active"
                }],
                "data": {
                    "miner": self.account,
                    "planet_name": planet,
                    "referral": ""
                }
            }
            
            # ส่ง transaction
            result = await self.send_transaction(tx_data)
            
            if result["success"]:
                print(f"✅ Mining successful on {planet}")
                return {
                    "success": True,
                    "planet": planet,
                    "tool": tool,
                    "timestamp": time.time(),
                    "tx_id": result["tx_id"]
                }
            else:
                print(f"❌ Mining failed: {result['error']}")
                return {"success": False, "error": result["error"]}
                
        except Exception as e:
            print(f"❌ Mining exception: {e}")
            return {"success": False, "error": str(e)}
```

## 📊 การตรวจสอบและรายงาน

### **1. Real-time Mining Dashboard**

```html
<!-- Alien Worlds Mining Dashboard -->
<div class="aw-dashboard">
    <div class="row">
        <!-- Mining Stats -->
        <div class="col-md-4">
            <div class="card border-primary">
                <div class="card-header bg-primary text-white">
                    <h5><i class="bi bi-gem me-2"></i>TLM Mining Stats</h5>
                </div>
                <div class="card-body">
                    <div class="stat-item">
                        <label>Today's TLM:</label>
                        <span class="text-success" id="today-tlm">145.67 TLM</span>
                    </div>
                    <div class="stat-item">
                        <label>Total Mines:</label>
                        <span id="total-mines">287</span>
                    </div>
                    <div class="stat-item">
                        <label>Success Rate:</label>
                        <span class="text-info" id="success-rate">94.8%</span>
                    </div>
                    <div class="stat-item">
                        <label>Avg TLM/Mine:</label>
                        <span id="avg-tlm">0.148 TLM</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Current Status -->
        <div class="col-md-4">
            <div class="card border-success">
                <div class="card-header bg-success text-white">
                    <h5><i class="bi bi-globe me-2"></i>Current Mining</h5>
                </div>
                <div class="card-body">
                    <div class="stat-item">
                        <label>Planet:</label>
                        <span class="planet-name" id="current-planet">Eyeke</span>
                    </div>
                    <div class="stat-item">
                        <label>Tool:</label>
                        <span id="current-tool">Standard Shovel</span>
                    </div>
                    <div class="stat-item">
                        <label>Next Mine:</label>
                        <span class="text-warning" id="next-mine">2m 35s</span>
                    </div>
                    <div class="stat-item">
                        <label>Status:</label>
                        <span class="badge bg-success" id="mining-status">Active</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Resource Status -->
        <div class="col-md-4">
            <div class="card border-warning">
                <div class="card-header bg-warning text-dark">
                    <h5><i class="bi bi-lightning me-2"></i>Resources</h5>
                </div>
                <div class="card-body">
                    <div class="resource-bar">
                        <label>CPU</label>
                        <div class="progress">
                            <div class="progress-bar bg-info" style="width: 78%" id="cpu-bar">
                                <span id="cpu-text">2,340ms / 3,000ms</span>
                            </div>
                        </div>
                    </div>
                    <div class="resource-bar">
                        <label>NET</label>
                        <div class="progress">
                            <div class="progress-bar bg-success" style="width: 45%" id="net-bar">
                                <span id="net-text">4.5KB / 10KB</span>
                            </div>
                        </div>
                    </div>
                    <div class="resource-bar">
                        <label>RAM</label>
                        <div class="progress">
                            <div class="progress-bar bg-primary" style="width: 60%" id="ram-bar">
                                <span id="ram-text">6.2KB / 10.3KB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Mining History -->
    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h5><i class="bi bi-clock-history me-2"></i>Mining History</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped" id="mining-history">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Planet</th>
                                    <th>Tool</th>
                                    <th>TLM Mined</th>
                                    <th>CPU Used</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic content loaded here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### **2. Performance Analytics**

```python
class AlienWorldsAnalytics:
    """
    ระบบวิเคราะห์ประสิทธิภาพ Alien Worlds
    """
    
    def generate_daily_report(self, account, date):
        """สร้างรายงานประจำวัน"""
        mining_data = self.get_mining_data(account, date)
        
        report = {
            "date": date,
            "account": account,
            "summary": {
                "total_mines": len(mining_data),
                "successful_mines": len([m for m in mining_data if m["success"]]),
                "total_tlm": sum(m["tlm_mined"] for m in mining_data),
                "total_cpu_used": sum(m["cpu_cost"] for m in mining_data),
                "success_rate": 0
            },
            "planet_breakdown": {},
            "tool_performance": {},
            "hourly_distribution": {},
            "profitability": {}
        }
        
        # คำนวณ success rate
        if report["summary"]["total_mines"] > 0:
            report["summary"]["success_rate"] = (
                report["summary"]["successful_mines"] / 
                report["summary"]["total_mines"] * 100
            )
        
        # วิเคราะห์ตามดาวเคราะห์
        planet_stats = {}
        for mine in mining_data:
            planet = mine["planet"]
            if planet not in planet_stats:
                planet_stats[planet] = {
                    "mines": 0, "tlm": 0, "cpu": 0, "success": 0
                }
            
            planet_stats[planet]["mines"] += 1
            if mine["success"]:
                planet_stats[planet]["tlm"] += mine["tlm_mined"]
                planet_stats[planet]["cpu"] += mine["cpu_cost"]
                planet_stats[planet]["success"] += 1
        
        # คำนวณ efficiency ต่อดาวเคราะห์
        for planet, stats in planet_stats.items():
            if stats["mines"] > 0:
                report["planet_breakdown"][planet] = {
                    "total_mines": stats["mines"],
                    "total_tlm": stats["tlm"],
                    "avg_tlm_per_mine": stats["tlm"] / stats["success"] if stats["success"] > 0 else 0,
                    "success_rate": (stats["success"] / stats["mines"]) * 100,
                    "cpu_efficiency": stats["tlm"] / stats["cpu"] if stats["cpu"] > 0 else 0
                }
        
        return report
    
    def identify_optimization_opportunities(self, historical_data):
        """ระบุโอกาสในการเพิ่มประสิทธิภาพ"""
        opportunities = []
        
        # วิเคราะห์การใช้ดาวเคราะห์
        planet_performance = self.analyze_planet_performance(historical_data)
        best_planet = max(planet_performance.items(), key=lambda x: x[1]["roi"])
        worst_planet = min(planet_performance.items(), key=lambda x: x[1]["roi"])
        
        if best_planet[1]["roi"] > worst_planet[1]["roi"] * 1.5:
            opportunities.append({
                "type": "planet_optimization",
                "priority": "high",
                "recommendation": f"เปลี่ยนจาก {worst_planet[0]} ไป {best_planet[0]}",
                "potential_improvement": f"{((best_planet[1]['roi'] / worst_planet[1]['roi']) - 1) * 100:.1f}% ROI increase"
            })
        
        # วิเคราะห์การใช้เครื่องมือ
        tool_performance = self.analyze_tool_performance(historical_data)
        if len(tool_performance) > 1:
            best_tool = max(tool_performance.items(), key=lambda x: x[1]["efficiency"])
            opportunities.append({
                "type": "tool_optimization",
                "priority": "medium",
                "recommendation": f"ใช้ {best_tool[0]} เป็นหลัก",
                "potential_improvement": f"{best_tool[1]['efficiency']:.2f} TLM/CPU efficiency"
            })
        
        return opportunities
```

## 🛠️ การแก้ปัญหาและการปรับแต่ง

### **❌ ปัญหาที่พบบ่อย**

#### **1. CPU ไม่พอสำหรับการขุด**
```python
# วิธีแก้ไข: Auto-stake CPU
async def handle_insufficient_cpu(self, account):
    current_cpu = await self.get_cpu_status(account)
    
    if current_cpu["available"] < 100:  # ms
        stake_amount = 1.0  # WAX
        result = await self.stake_cpu(account, stake_amount)
        
        if result["success"]:
            print(f"✅ Auto-staked {stake_amount} WAX for CPU")
            return True
        else:
            print(f"❌ Failed to stake CPU: {result['error']}")
            return False
    
    return True
```

#### **2. Transaction Failed - Insufficient Resources**
```python
# วิธีแก้ไข: ตรวจสอบและเติม NET/RAM
async def handle_transaction_failure(self, account, error):
    if "net" in error.lower():
        await self.stake_net(account, 0.5)
    elif "ram" in error.lower():
        await self.buy_ram(account, 1000)  # bytes
    elif "cpu" in error.lower():
        await self.stake_cpu(account, 1.0)
    
    # รอให้ทรัพยากรอัปเดต
    await asyncio.sleep(30)
```

#### **3. Planet มี Land ไม่เพียงพอ**
```python
# วิธีแก้ไข: เปลี่ยนดาวเคราะห์อัตโนมัติ
async def handle_insufficient_land(self, current_planet):
    alternative_planets = ["eyeke", "naron", "kavian"]
    
    for planet in alternative_planets:
        if planet != current_planet:
            land_availability = await self.check_land_availability(planet)
            if land_availability["available"] > 100:
                print(f"🔄 Switching to {planet} due to land availability")
                return planet
    
    return current_planet  # ไม่มีดาวเคราะห์ที่ดีกว่า
```

### **⚙️ การปรับแต่งขั้นสูง**

#### **1. Custom Mining Strategy**
```python
# ตัวอย่างการสร้าง strategy แบบกำหนดเอง
class CustomAlienWorldsStrategy:
    def __init__(self, focus="profit"):  # "profit", "tlm_volume", "nft_hunting"
        self.focus = focus
        
    def select_planet_and_tool(self, available_options):
        if self.focus == "profit":
            return self.profit_focused_selection(available_options)
        elif self.focus == "tlm_volume":
            return self.volume_focused_selection(available_options)
        elif self.focus == "nft_hunting":
            return self.nft_focused_selection(available_options)
```

#### **2. Advanced Timing Control**
```python
# ควบคุมการขุดในช่วงเวลาเฉพาะ
mining_schedule = {
    "peak_hours": {
        "times": ["08:00-12:00", "19:00-23:00"],
        "strategy": "aggressive",
        "interval_min": 180,
        "interval_max": 300
    },
    "off_peak": {
        "times": ["00:00-06:00", "13:00-18:00"],
        "strategy": "conservative", 
        "interval_min": 600,
        "interval_max": 1200
    }
}
```

{% hint style="success" %}
**🎯 เป้าหมาย**: ด้วยการตั้งค่าที่เหมาะสม Alien Worlds สามารถสร้างผลตอบแทน 50-150 TLM ต่อวันต่อบัญชี
{% endhint %}

{% hint style="info" %}
**💡 เคล็ดลับ**: ใช้ระบบ planet switching อัตโนมัติเพื่อเพิ่มประสิทธิภาพการขุดได้ถึง 25%
{% endhint %}

---

**เรียนรู้เพิ่มเติม**:
- [Mining Automation](../features/mining-automation.md) - ระบบขุดอัตโนมัติทั่วไป
- [Resource Management](../features/resource-management.md) - การจัดการ CPU/NET/RAM
- [Farmers World Guide](farmers-world.md) - เกมการเกษตรที่เสริมกับ Alien Worlds