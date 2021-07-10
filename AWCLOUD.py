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
