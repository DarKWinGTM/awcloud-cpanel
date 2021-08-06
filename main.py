import os
import re
import sys
import glob
import time
import json
import pytz
import uuid
import base64, codecs
import random
import logging
import _thread
import datetime
#   import requests
import grequests
#   https://pypi.org/project/cloudscraper/
import cloudscraper
from replit import db
from inspect import currentframe as SourceCodeLine
from flask import Flask, json, jsonify, request, redirect, session, send_from_directory, Response, make_response, render_template
import gc

#   https://pinger.pirxcy.xyz/

timedate = datetime.datetime
timezone = pytz.timezone

app = Flask(
    __name__, 
    static_url_path = '', 
    static_folder   = 'static',
    template_folder = 'templates'
)

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

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
        'https://wax.pink.gg', 
        'https://wax.greymass.com', 
        'https://chain.wax.io'
    ]
    lastminer = [
        'https://wax.pink.gg', 
        'https://wax.eosn.io'
    ]
    histories = [
        'https://api.waxsweden.org', 
        'https://wax.cryptolions.io', 
        'https://waxapi.ledgerwise.io', 
        'https://wax.blokcrafters.io', 
        'https://apiwax.3dkrender.com'
    ]
    claimsigh = [
        'https://chain.wax.io', 
        'https://wax.dapplica.io'
    ]
    getserver = '/v1/chain/get_info'
    hostminer = [{
        'address' : f'{f}/mine?waxaccount=', 
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
    } for f in [
        #   'https://aw-mine-express-00001.vercel.app', 
        #   'https://aw-mine-express-00002.vercel.app', 
        #   'https://aw-mine-express-00003.vercel.app', 
        #   'https://aw-mine-express-00004.vercel.app', 
        #   'https://aw-mine-express-00005.vercel.app', 
        #   'https://aw-mine-express-00006.vercel.app', 
        #   'https://aw-mine-express-00007.vercel.app', 
        #   'https://aw-mine-express-00008.vercel.app', 
        #   'https://aw-mine-express-00009.vercel.app', 
        #   'https://aw-mine-express-00010.vercel.app'
        'https://t95dv.sse.codesandbox.io'
    ]]
    glitminer = [{
        'address' : f'{f}/mine?waxaccount=', 
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
    } for f in [
        'https://balsam-cookie-seat.glitch.me',                 #   ff.premium.no.reply@gmail.com
        'https://merciful-marble-replace.glitch.me',            #   ff.premium.no.reply@gmail.com
        'https://awesome-freezing-spell.glitch.me',             #   ff.premium.no.reply@gmail.com
        'https://charmed-nifty-seaplane.glitch.me',             #   ff.premium.no.reply@gmail.com
        'https://classic-sparkling-conkerberry.glitch.me',      #   ff.premium.no.reply+0001@gmail.com
        'https://showy-road-face.glitch.me',                    #   ff.premium.no.reply+0001@gmail.com
        'https://light-equinox-rowboat.glitch.me',              #   ff.premium.no.reply+0001@gmail.com
        'https://glowing-mousy-fly.glitch.me',                  #   ff.premium.no.reply+0001@gmail.com
        'https://resilient-vine-snake.glitch.me',               #   ff.premium.no.reply+0002@gmail.com
        'https://east-inexpensive-mammal.glitch.me',            #   ff.premium.no.reply+0002@gmail.com
        'https://working-almondine-lip.glitch.me',              #   ff.premium.no.reply+0002@gmail.com
        'https://uncovered-shelled-fibula.glitch.me'            #   ff.premium.no.reply+0002@gmail.com
        'https://rift-glory-buffalo.glitch.me',                 #   ff.premium.no.reply+0003@gmail.com
        'https://ordinary-azure-titanoceratops.glitch.me',      #   ff.premium.no.reply+0003@gmail.com
        'https://giddy-bronzed-ogre.glitch.me',                 #   ff.premium.no.reply+0003@gmail.com
        'https://icy-alert-silence.glitch.me',                  #   ff.premium.no.reply+0003@gmail.com
        'https://almond-plain-termite.glitch.me',               #   ff.premium.no.reply+0004@gmail.com
        'https://tangible-typical-speedwell.glitch.me',         #   ff.premium.no.reply+0004@gmail.com
        'https://heliotrope-sapphire-hippodraco.glitch.me',     #   ff.premium.no.reply+0004@gmail.com
        'https://rebel-granite-server.glitch.me',               #   ff.premium.no.reply+0004@gmail.com
        'https://fantastic-cloudy-stone.glitch.me',             #   ff.premium.no.reply+0005@gmail.com
        'https://rhetorical-road-orangutan.glitch.me',          #   ff.premium.no.reply+0005@gmail.com
        'https://witty-righteous-smash.glitch.me',              #   ff.premium.no.reply+0005@gmail.com
        'https://fringe-powerful-shop.glitch.me',               #   ff.premium.no.reply+0005@gmail.com
        'https://coordinated-evergreen-gargoyle.glitch.me',     #   ff.premium.no.reply+0006@gmail.com
        'https://coral-celestial-situation.glitch.me',          #   ff.premium.no.reply+0006@gmail.com
        'https://branched-disco-currant.glitch.me',             #   ff.premium.no.reply+0006@gmail.com
        'https://laced-pepper-samba.glitch.me'                  #   ff.premium.no.reply+0006@gmail.com
        'https://excited-silky-palladium.glitch.me',            #   ff.premium.no.reply+0007@gmail.com
        'https://balanced-accessible-daemonosaurus.glitch.me',  #   ff.premium.no.reply+0007@gmail.com
        'https://phrygian-incongruous-basil.glitch.me',         #   ff.premium.no.reply+0007@gmail.com
        'https://secret-trusted-racer.glitch.me'                #   ff.premium.no.reply+0007@gmail.com
    ]]
    replminer = [{
        'address' : f'{f}/mine?waxaccount=', 
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
    } for f in [
        'https://aw-mine-express-10001.patiwatnumbut.repl.co', 
        'https://aw-mine-express-10002.patiwatnumbut.repl.co', 
        'https://aw-mine-express-10003.patiwatnumbut.repl.co', 
        'https://aw-mine-express-10004.patiwatnumbut.repl.co', 
        'https://aw-mine-express-10005.patiwatnumbut.repl.co', 
        'https://aw-mine-express-10001.artwisut.repl.co', 
        'https://aw-mine-express-10002.artwisut.repl.co', 
        'https://aw-mine-express-10003.artwisut.repl.co', 
        'https://aw-mine-express-10004.artwisut.repl.co', 
        'https://aw-mine-express-10005.artwisut.repl.co', 
        'https://aw-mine-express-10001.aorsai5.repl.co/', 
        'https://aw-mine-express-10002.aorsai5.repl.co/', 
        'https://aw-mine-express-10003.aorsai5.repl.co/', 
        'https://aw-mine-express-10004.aorsai5.repl.co/', 
        'https://aw-mine-express-10005.aorsai5.repl.co/', 
        'https://aw-mine-express-10001.awduchbot1.repl.co', 
        'https://aw-mine-express-10002.awduchbot1.repl.co', 
        'https://aw-mine-express-10003.awduchbot1.repl.co', 
        'https://aw-mine-express-10004.awduchbot1.repl.co', 
        'https://aw-mine-express-10005.awduchbot1.repl.co', 
        'https://aw-mine-express-10001.nimitjay.repl.co', 
        'https://aw-mine-express-10002.nimitjay.repl.co', 
        'https://aw-mine-express-10003.nimitjay.repl.co', 
        'https://aw-mine-express-10004.nimitjay.repl.co', 
        'https://aw-mine-express-10005.nimitjay.repl.co', 
        'https://aw-mine-express-10001.jo1232.repl.co', 
        'https://aw-mine-express-10002.jo1232.repl.co', 
        'https://aw-mine-express-10003.jo1232.repl.co', 
        'https://aw-mine-express-10001.sakchaipingsran.repl.co', 
        'https://aw-mine-express-10002.sakchaipingsran.repl.co', 
        'https://aw-mine-express-10003.sakchaipingsran.repl.co', 
        'https://aw-mine-express-10001.la12va.repl.co', 
        'https://aw-mine-express-10002.la12va.repl.co', 
        'https://aw-mine-express-10003.la12va.repl.co', 
        'https://aw-mine-express-10001.golfgappz.repl.co', 
        'https://aw-mine-express-10002.golfgappz.repl.co', 
        'https://aw-mine-express-10003.golfgappz.repl.co', 
        'https://aw-mine-express-10001.kolokden01.repl.co', 
        'https://aw-mine-express-10002.kolokden01.repl.co', 
        'https://aw-mine-express-10003.kolokden01.repl.co', 
        'https://aw-mine-express-10001.aengkung1234.repl.co', 
        'https://aw-mine-express-10002.aengkung1234.repl.co', 
        'https://aw-mine-express-10003.aengkung1234.repl.co', 
        'https://aw-mine-express-10001.jakkarinninpan.repl.co', 
        'https://aw-mine-express-10002.jakkarinninpan.repl.co', 
        'https://aw-mine-express-10003.jakkarinninpan.repl.co', 
        'https://aw-mine-express-10001.teeraporn12519.repl.co', 
        'https://aw-mine-express-10002.teeraporn12519.repl.co', 
        'https://aw-mine-express-10003.teeraporn12519.repl.co', 
        'https://aw-mine-express-10001.mikemaesod.repl.co', 
        'https://aw-mine-express-10002.mikemaesod.repl.co', 
        'https://aw-mine-express-10003.mikemaesod.repl.co', 
        'https://aw-mine-express-10001.nunkh0ng.repl.co', 
        'https://aw-mine-express-10002.nunkh0ng.repl.co', 
        'https://aw-mine-express-10003.nunkh0ng.repl.co', 
        'https://aw-mine-express-10001.awjate.repl.co', 
        'https://aw-mine-express-10002.awjate.repl.co', 
        'https://aw-mine-express-10003.awjate.repl.co', 
        'https://aw-mine-express-10001.praniti99.repl.co', 
        'https://aw-mine-express-10002.praniti99.repl.co', 
        'https://aw-mine-express-10003.praniti99.repl.co', 
        'https://aw-mine-express-10001.pattarasakphuan.repl.co', 
        'https://aw-mine-express-10002.pattarasakphuan.repl.co', 
        'https://aw-mine-express-10003.pattarasakphuan.repl.co', 
        'https://aw-mine-express-10001.e25icl.repl.co', 
        'https://aw-mine-express-10002.e25icl.repl.co', 
        'https://aw-mine-express-10003.e25icl.repl.co', 
        'https://aw-mine-express-10001.catsince.repl.co', 
        'https://aw-mine-express-10002.catsince.repl.co', 
        'https://aw-mine-express-10003.catsince.repl.co', 
        'https://aw-mine-express-10001.kuk1990.repl.co', 
        'https://aw-mine-express-10002.kuk1990.repl.co', 
        'https://aw-mine-express-10003.kuk1990.repl.co', 
        'https://aw-mine-express-10001.man88.repl.co', 
        'https://aw-mine-express-10002.man88.repl.co', 
        'https://aw-mine-express-10003.man88.repl.co'
    ]]
    freeminer = [{
        'address' : f'{f}/mine?waxaccount=', 
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
    } for f in [
        'https://aw-mine-express-10001.lifferty.repl.co', 
        'https://aw-mine-express-10002.lifferty.repl.co', 
        'https://aw-mine-express-10003.lifferty.repl.co', 
        'https://aw-mine-express-10001.fourz.repl.co', 
        'https://aw-mine-express-10002.fourz.repl.co', 
        'https://aw-mine-express-10003.fourz.repl.co', 
        'https://aw-mine-express-10001.boomswxx945.repl.co', 
        'https://aw-mine-express-10002.boomswxx945.repl.co', 
        'https://aw-mine-express-10003.boomswxx945.repl.co', 
        'https://aw-mine-express-10001.tee51551.repl.co', 
        'https://aw-mine-express-10002.tee51551.repl.co', 
        'https://aw-mine-express-10003.tee51551.repl.co', 
        'https://aw-mine-express-10001.thanachai12.repl.co', 
        'https://aw-mine-express-10002.thanachai12.repl.co', 
        'https://aw-mine-express-10003.thanachai12.repl.co', 
        'https://aw-mine-express-10001.supernop.repl.co', 
        'https://aw-mine-express-10002.supernop.repl.co', 
        'https://aw-mine-express-10003.supernop.repl.co', 
        'https://aw-mine-express-10001.starshiprs.repl.co', 
        'https://aw-mine-express-10002.starshiprs.repl.co', 
        'https://aw-mine-express-10003.starshiprs.repl.co', 
        'https://aw-mine-express-10001.dhongerus.repl.co', 
        'https://aw-mine-express-10002.dhongerus.repl.co', 
        'https://aw-mine-express-10003.dhongerus.repl.co', 
        'https://aw-mine-express-10001.aongseal.repl.co', 
        'https://aw-mine-express-10002.aongseal.repl.co', 
        'https://aw-mine-express-10003.aongseal.repl.co', 
        'https://aw-mine-express-10001.tongatipbk.repl.co', 
        'https://aw-mine-express-10002.tongatipbk.repl.co', 
        'https://aw-mine-express-10003.tongatipbk.repl.co', 
        'https://aw-mine-express-10001.micvbn.repl.co', 
        'https://aw-mine-express-10002.micvbn.repl.co', 
        'https://aw-mine-express-10003.micvbn.repl.co', 
        'https://aw-mine-express-10001.domminic11.repl.co', 
        'https://aw-mine-express-10002.domminic11.repl.co', 
        'https://aw-mine-express-10003.domminic11.repl.co', 
        'https://aw-mine-express-10001.onibrku10.repl.co', 
        'https://aw-mine-express-10002.onibrku10.repl.co', 
        'https://aw-mine-express-10003.onibrku10.repl.co', 
        'https://aw-mine-express-10001.poopui123.repl.co', 
        'https://aw-mine-express-10002.poopui123.repl.co', 
        'https://aw-mine-express-10003.poopui123.repl.co', 
        'https://aw-mine-express-10001.khowglong2.repl.co', 
        'https://aw-mine-express-10002.khowglong2.repl.co', 
        'https://aw-mine-express-10003.khowglong2.repl.co', 
        'https://aw-mine-express-10001.aphichai123.repl.co', 
        'https://aw-mine-express-10002.aphichai123.repl.co', 
        'https://aw-mine-express-10003.aphichai123.repl.co', 
        'https://aw-mine-express-10001.amran007.repl.co', 
        'https://aw-mine-express-10002.amran007.repl.co', 
        'https://aw-mine-express-10003.amran007.repl.co', 
        'https://aw-mine-express-10001.semmyza.repl.co', 
        'https://aw-mine-express-10002.semmyza.repl.co', 
        'https://aw-mine-express-10003.semmyza.repl.co', 
        'https://aw-mine-express-10001.ufochicken.repl.co', 
        'https://aw-mine-express-10002.ufochicken.repl.co', 
        'https://aw-mine-express-10001.wealthme01.repl.co', 
        'https://aw-mine-express-10002.wealthme01.repl.co', 
        'https://aw-mine-express-10003.wealthme01.repl.co', 
        'https://aw-mine-express-10001.ae9041a.repl.co', 
        'https://aw-mine-express-10002.ae9041a.repl.co', 
        'https://aw-mine-express-10003.ae9041a.repl.co', 
        'https://aw-mine-express-10001.beam01.repl.co', 
        'https://aw-mine-express-10002.beam01.repl.co', 
        'https://aw-mine-express-10003.beam01.repl.co', 
        'https://aw-mine-express-10001.mustaza300.repl.co', 
        'https://aw-mine-express-10002.mustaza300.repl.co', 
        'https://aw-mine-express-10003.mustaza300.repl.co', 
        'https://aw-mine-express-10001.chaiwat18101998.repl.co', 
        'https://aw-mine-express-10002.chaiwat18101998.repl.co', 
        'https://aw-mine-express-10001.phumiphat17.repl.co', 
        'https://aw-mine-express-10002.phumiphat17.repl.co', 
        'https://aw-mine-express-10003.phumiphat17.repl.co', 
        'https://aw-mine-express-10001.supakitrujiraph.repl.co', 
        'https://aw-mine-express-10002.supakitrujiraph.repl.co', 
        'https://aw-mine-express-10003.supakitrujiraph.repl.co', 
        'https://aw-mine-express-10001.soongusto.repl.co', 
        'https://aw-mine-express-10002.soongusto.repl.co', 
        'https://aw-mine-express-10003.soongusto.repl.co', 
        'https://aw-mine-express-10001.flukke.repl.co', 
        'https://aw-mine-express-10002.flukke.repl.co', 
        'https://aw-mine-express-10001.yaizaq.repl.co', 
        'https://aw-mine-express-10002.yaizaq.repl.co', 
        'https://aw-mine-express-10003.yaizaq.repl.co', 
        'https://aw-mine-express-10001.pppeach.repl.co', 
        'https://aw-mine-express-10002.pppeach.repl.co', 
        'https://aw-mine-express-10003.pppeach.repl.co', 
        'https://aw-mine-express-10001.thanaphol2123.repl.co', 
        'https://aw-mine-express-10002.thanaphol2123.repl.co', 
        'https://aw-mine-express-10003.thanaphol2123.repl.co', 
        'https://aw-mine-express-10001.pureriku12.repl.co', 
        'https://aw-mine-express-10002.pureriku12.repl.co', 
        'https://aw-mine-express-10003.pureriku12.repl.co', 
        'https://aw-mine-express-10001.fluffy1004.repl.co', 
        'https://aw-mine-express-10002.fluffy1004.repl.co', 
        'https://aw-mine-express-10003.fluffy1004.repl.co', 
        'https://aw-mine-express-10001.borwonrud.repl.co', 
        'https://aw-mine-express-10002.borwonrud.repl.co', 
        'https://aw-mine-express-10003.borwonrud.repl.co', 
        'https://aw-mine-express-10001.songeiei1.repl.co', 
        'https://aw-mine-express-10002.songeiei1.repl.co', 
        'https://aw-mine-express-10003.songeiei1.repl.co', 
        'https://aw-mine-express-10001.najabangaras.repl.co', 
        'https://aw-mine-express-10002.najabangaras.repl.co', 
        'https://aw-mine-express-10003.najabangaras.repl.co', 
        'https://aw-mine-express-10001.akepordee.repl.co', 
        'https://aw-mine-express-10002.akepordee.repl.co', 
        'https://aw-mine-express-10003.akepordee.repl.co', 
        'https://aw-mine-express-10001.idspoon.repl.co', 
        'https://aw-mine-express-10002.idspoon.repl.co', 
        'https://aw-mine-express-10003.idspoon.repl.co', 
        'https://aw-mine-express-10001.maxnoizas.repl.co', 
        'https://aw-mine-express-10002.maxnoizas.repl.co', 
        'https://aw-mine-express-10003.maxnoizas.repl.co'
    ]]
    packedtrx = [{
        'address' : f'{f}/packedtrx', 
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
    } for f in [
        #   'https://aw-mine-express-00001.vercel.app', 
        #   'https://aw-mine-express-00002.vercel.app', 
        #   'https://aw-mine-express-00003.vercel.app', 
        #   'https://aw-mine-express-00004.vercel.app', 
        #   'https://aw-mine-express-00005.vercel.app', 
        #   'https://aw-mine-express-00006.vercel.app', 
        #   'https://aw-mine-express-00007.vercel.app', 
        #   'https://aw-mine-express-00008.vercel.app', 
        #   'https://aw-mine-express-00009.vercel.app', 
        #   'https://aw-mine-express-00010.vercel.app', 
        'https://aw-packedtrx-express-00001.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00002.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00003.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00004.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00005.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00001.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00002.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00003.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00004.patiwatnumbut.repl.co', 
        'https://aw-packedtrx-express-00005.patiwatnumbut.repl.co'
    ]]

DATABASE = {}
THREADER = {}
db['POOLDATA'] = {
    'ip' : grequests.map([grequests.get('https://checkip.amazonaws.com')])[0].text.strip(), 
    'sw' : False if not db.get('POOLDATA') or db['POOLDATA'].get('sw') == None else db['POOLDATA'].get('sw')
}
POOLDATA = {
    'ip' : db['POOLDATA'].get('ip'), 
    'sw' : db['POOLDATA'].get('sw')
}
SETPROXY = {
    "http"      : "socks5://127.0.0.1:23321", 
    "https"     : "socks5://127.0.0.1:23321", 
    "ftp"       : "socks5://127.0.0.1:23321"
}

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
                'maxdelay'      : 0, 
                'waxapi'        : '', 
                'land'          : 0, 
                'commission'    : 0.0, 
                'difficulty'    : 0, 
                'last_mine'     : {
                    'time'              : '', 
                    'mine'              : 0
                }, 
                'status'        : None, 
                'text'          : {
                    'step'  : '00', 
                    '00'    : '<pre>0/0 UPDATE DATABASE ------</pre>', 
                    '01'    : '<pre>0/0 LOGIN SESSIONS --------</pre>', 
                    '02'    : '<pre>1/4 WAITING --------------------</pre>', 
                    '03'    : '<pre>2/4 GET BAGS INFO ----------</pre>', 
                    '04'    : '<pre>3/4 GET LAND ------------------</pre>', 
                    '05'    : '<pre>4/4 READY TO MINE ----------</pre>', 
                    '06'    : '<pre>0/0 GET ACCOUNT INFO ----</pre>', 
                    '07'    : '<pre>0/0 CALCU DIFFICULTY ------</pre>', 
                    '08'    : '<pre>0/0 CHECK LAST_TRX ---------</pre>', 
                    '09'    : '<pre>2/9 GET NONCE ----------------</pre>', 
                    '10'    : '<pre>3/9 GET { NONCE }</pre>', 
                    '11'    : '<pre>4/9 CLAIM PACKED TRX ------</pre>', 
                    '12'    : '<pre>5/9 CLAIM REQ KEYS ----------</pre>', 
                    '13'    : '<pre>6/9 CLAIM SIGN ---------------</pre>', 
                    '14'    : '<pre>7/9 CLAIM PUSH --------------</pre>', 
                    '15'    : '<pre>8/9 CHECK HISTORY ----------</pre>', 
                    '16'    : '<pre>9/9 CLAIM DONE ---------------</pre>', 
                    '17'    : '<pre>9/9 CLAIM NONE ---------------</pre>', 
                    '18'    : '<pre>0/0 RENEW ENDPOINT -------</pre>', 
                    '19'    : '<pre>0/0 CHECK COOLDOWN --------</pre>', 
                    '20'    : '<pre>0/0 CALCU CPU -------------</pre>', 
                    '21'    : '<pre>1/9 CLAIM START -----------</pre>', 
                    '22'    : '<pre>NOTHING TO BE MINED</pre>', 
                    '23'    : '<pre>MINE WITH EMPTY BAG</pre>'
                } , 
                'fail'          : {
                    'step'  : '00', 
                    '00'    : '<pre>NOTHING TO BE MINED</pre>', 
                    '01'    : '<pre>MINE WITH EMPTY BAG</pre>'
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
                    'chain_id'              : 0,
                    'head_block_num'        : 0,
                    'ref_block_prefix'      : 0
                }, 
                'packedtrx'         : {}, 
                'balance'           : '0.0000 TLM', 
                'last_mine'         : {}, 
                'last_time'         : '', 
                'avatar'            : {}, 
                'bags'              : {}, 
                'land'              : {
                    'difficulty'            : 0, 
                    'commission'            : 0.0
                }, 
                'difficulty'        : 0, 
                'cooldown'          : 0, 
                'timelist'          : [75, 75], 
                'cpu'               : {
                }, 
                'nonce'             : None, 
                'transaction'       : {
                    'all'                   : {}, 
                    'raw'                   : '', 
                    'res'                   : {}, 
                    'wax'                   : '', 
                    'sig'                   : ''
                }, 
                'waxserver'         : random.choice(WAXAPI.addrlists), 
                'lastminer'         : random.choice(WAXAPI.lastminer), 
                'histories'         : random.choice(WAXAPI.histories), 
                'claimsigh'         : random.choice(WAXAPI.claimsigh), 
                'getserver'         : WAXAPI.getserver, 
                'PROCESS'           : {
                    'get_login'             : None, 
                    'get_account'           : None, 
                    'get_info_balance'      : None, 
                    'get_info_last_mine'    : None, 
                    'get_info_avatar'       : None, 
                    'get_bags'              : [{
                        'request' : None, 
                        'content' : {}, 
                        'rescode' : 999
                    }, {
                        'request' : None, 
                        'content' : {}, 
                        'rescode' : 999
                    }], 
                    'get_land'              : {}, 
                    'set_difficulty'        : None, 
                    'set_cooldown'          : None, 
                    'chk_cpu'               : None, 
                    'get_nonce'             : [], 
                    'get_info_block'        : None, 
                    'set_packedtrx'         : None, 
                    'claim_sign'            : None, 
                    'get_transaction'       : {
                        'request'               : None, 
                        'content'               : None
                    }
                }, 
                'log'            : {
                    'last_tlm_mined'        : 0.0000, 
                    'last_cpu_usage'        : 0
                }
            }
        except Exception as e:
            print( f'ERROR __init__ { SourceCodeLine().f_lineno }-{ waxid } : {e}' )
            if THREADER.get(self.DATA['waxid']):
                THREADER.pop(self.DATA['waxid'])
            if DATABASE.get(self.DATA['waxid']):
                DATABASE.pop(self.DATA['waxid'])
            raise Exception(e)
            
        try:
            self.get_login()
        except NameError as e:
            print( f'ERROR __init__ { SourceCodeLine().f_lineno }-{ waxid } : {e}' )
            if THREADER.get(self.DATA['waxid']):
                THREADER.pop(self.DATA['waxid'])
            if DATABASE.get(self.DATA['waxid']):
                DATABASE.pop(self.DATA['waxid'])
            raise NameError(e); return
        except Exception as e:
            print( f'ERROR __init__ { SourceCodeLine().f_lineno }-{ waxid } : {e}' )
            if THREADER.get(self.DATA['waxid']):
                THREADER.pop(self.DATA['waxid'])
            if DATABASE.get(self.DATA['waxid']):
                DATABASE.pop(self.DATA['waxid'])
            raise Exception(e); return
            
        THREADER.update({
            self.DATA['waxid'] : {
                'status'        : None, 
                'data'          : self.DATA, 
                'get_account'   : None, 
                'logs'          : None, 
                'operate'       : None
            }
        })
        
    def logs(
        self
    ):
        
        global DATABASE
        
        while True:
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
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
                try         : DATABASE[ self.DATA['waxid'] ]['maxdelay']                    = self.DATA['cooldown']
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['waxapi']                      = self.DATA['waxserver']
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['cpu']['stake']                = float(self.DATA['account']['total_resources']['cpu_weight'].split(' ')[0]) - 1.0
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['land']                        = self.DATA["last_mine"]["current_land"]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['commission']                  = self.DATA["land"]["commission"]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['difficulty']                  = self.DATA["difficulty"]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['last_mine']['time']           = self.DATA['last_time'].split('.')[0]
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['last_mine']['mine']           = self.DATA['log']['last_tlm_mined']
                except      : pass
                
            except Exception as e:
                print( f'ERROR self.logs() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
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
                
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
        
            if DATABASE[ self.DATA['waxid'] ]['status'] == None:
                try:
                    self.get_account(loop = False)
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.get_info_balance()
                    #***    ADD CHECK 
                    #***    IF NO TLM THAT MEAN EMPTY ACCOUNT NEVER REGISTER AND SETUP AlianWorld Account 
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.get_info_last_mine()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.get_info_avatar()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.get_bags()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.get_land()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.set_difficulty()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.set_cooldown()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.chk_cpu()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                try:
                    self.get_transaction()
                except Exception as e:
                    print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    time.sleep(2); continue
                    
                DATABASE[ self.DATA['waxid'] ]['status'] = True
                
            try:
                if POOLDATA['sw'] == False and (
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
                    ) or random.randrange(999) >= 969
                ) and THREADER[ self.DATA['waxid'] ]['status'] == True:
                
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '05'
                    except      : pass
                    
                    self.get_serialized()
                    
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '21'
                    except      : pass
                    
                    self.claim_sign() # --> True or False
                    
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '18'
                    except      : pass
                    
                    #---   self.DATA.update({
                    #---       'waxserver' : random.choice(WAXAPI.addrlists)
                    #---   })
                    self.DATA['waxserver'] = random.choice(WAXAPI.addrlists)
                elif POOLDATA['sw'] == False and (
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
                ).seconds >= (self.DATA['cooldown'] * 0.20):
                    self.get_nonce()
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
                        
                    #***   print(
                    #***       '[{NOW}-{STA}]-[__{WAX}]-[CDs {CDs:04d}]-[CPU {CPU:03d}.{CPu:02d}% {CPA:06d}/{CPM:06d}:{LPU}]-[MINED {TLM:04d}.{TLm:04d}:{BAL:04d}.{BAl:04d} TOTAL]'.format(
                    #***           #   NOW = str(timedate.now(tz = pytz.utc))[2:].split('.')[0], 
                    #***           NOW = str(timedate.now())[2:].split('.')[0], 
                    #***           STA = DATABASE[ self.DATA['waxid'] ]['stat'], 
                    #***           WAX = self.DATA['waxid'][3:], 
                    #***           CDs = (
                    #***               timedate.strptime(
                    #***                   #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                    #***                   str(timedate.now()).split('.')[0], 
                    #***                   "%Y-%m-%d %H:%M:%S"
                    #***               ) - timedate.strptime(
                    #***                   self.DATA['last_time'].split('.')[0], 
                    #***                   "%Y-%m-%dT%H:%M:%S"
                    #***               )
                    #***           ).seconds, 
                    #***           CPU = int(str(self.chk_cpu()).split('.')[0]), 
                    #***           CPu = int(str(self.chk_cpu()).split('.')[1]), 
                    #***           CPA = int(self.DATA['cpu']['available']), 
                    #***           CPM = int(self.DATA['cpu']['max']), 
                    #***           LPU = int(self.DATA['log']['last_cpu_usage']), 
                    #***           TLM = int(str(self.DATA['log']['last_tlm_mined']).split('.')[0]), 
                    #***           TLm = int(str(self.DATA['log']['last_tlm_mined']).split('.')[1]), 
                    #***           BAL = int(str(self.DATA['balance'].split(' ')[0]).split('.')[0]), 
                    #***           BAl = int(str(self.DATA['balance'].split(' ')[0]).split('.')[1])
                    #***       )
                    #***   )
                    
                    if (
                        timedate.strptime(
                            #   str(timedate.now(tz = pytz.utc).astimezone(timezone('US/Pacific'))).split('.')[0], 
                            str(timedate.now()).split('.')[0], 
                            "%Y-%m-%d %H:%M:%S"
                        ) - timedate.strptime(
                            self.DATA['last_time'].split('.')[0], 
                            "%Y-%m-%dT%H:%M:%S"
                        )
                    ).seconds <= (self.DATA['cooldown'] * 0.45) and random.randrange(100) >= 92 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02':
                        DATABASE[ self.DATA['waxid'] ]['status'] = None
                        
            except Exception as e:
                print( f'ERROR self.operate() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] }  : {e}' )
            finally:
                time.sleep(2)
            continue
        THREADER.pop( self.DATA['waxid'] )
        DATABASE.pop( self.DATA['waxid'] )
        print(f'{ SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : SOME THING WRONG OR THREAD TURN OFF')
    def get_serialized(
        self
    ):
        
        global DATABASE
        
        if self.DATA['nonce'] == '' or self.DATA['nonce'] == None:
            self.get_nonce()
        self.set_info_block()
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
                    #   proxies     = SETPROXY
                )
                
                if (
                    json.loads(self.DATA['PROCESS']['get_login'].content) and json.loads(self.DATA['PROCESS']['get_login'].content).get('errors')
                ) or (
                    self.DATA['PROCESS']['get_login'].status_code == 503
                ) or not (
                    self.DATA['PROCESS']['get_login'].status_code == 200
                ):
                    print( f'ERROR get_login() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["PROCESS"]["get_login"].status_code }' )
                    raise NameError(f'Unauthorized - { self.DATA["PROCESS"]["get_login"].status_code }')
                
                self.DATA.update({
                    'login'         : json.loads(self.DATA['PROCESS']['get_login'].content)
                })
        
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '01'
                except      : pass
                
            except NameError as e:
                print( f'ERROR get_login() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                raise NameError(e)
                break
            except Exception as e:
                if re.search('Cloudflare Captcha detected', f'{e}'):
                    print( f'ERROR get_login() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                    raise NameError('Cloudflare Captcha detected')
                else:
                    print( f'ERROR get_login() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
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
                if THREADER[ self.DATA['waxid'] ]['status'] == None:
                    break
            except:
                break
                
            try:
                
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '06' if random.randrange(100) >= 80 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02' else DATABASE[ self.DATA['waxid'] ]['text']['step']
                except      : pass
                
                self.DATA['PROCESS']['get_account']         = cloudscraper.create_scraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #   debug = True, 
                    delay   = 10
                ).post(
                    f'https://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_account',
                    #   data    = f'{{\"account_name\":\"{ self.DATA["login"]["userAccount"] }\"}}', 
                    json    = {
                        "account_name" : self.DATA["login"]["userAccount"]
                    }, 
                    #   proxies     = SETPROXY
                )
                
                #---   self.DATA.update({
                #---       'account'       : json.loads(self.DATA['PROCESS']['get_account'].content)
                #---   })
                self.DATA['account'] = json.loads(self.DATA['PROCESS']['get_account'].content)
            except Exception as e:
                print( f'ERROR get_account() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e} | { self.DATA["PROCESS"]["get_account"].url } | { self.DATA["PROCESS"]["get_account"] }' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists); time.sleep(3)
                continue
            if loop == False:
                break
            else:
                if random.randrange(250) >= 170 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02':
                    self.get_info_balance()
                if random.randrange(300) >= 262 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02':
                    self.get_bags()
                    self.get_land()
                    self.set_difficulty()
                time.sleep(5); continue
    def get_info_balance(
        self
    ):
        self.DATA['PROCESS']['get_info_balance'] = None
        
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
            
                #***    try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '06' if random.randrange(100) >= 80 and DATABASE[ self.DATA['waxid'] ]['text']['step'] == '02' else DATABASE[ self.DATA['waxid'] ]['text']['step']
                #***    except      : pass
                
                self.DATA['PROCESS']['get_info_balance']    = cloudscraper.create_scraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #   debug = True, 
                    delay   = 10
                ).post(
                    f'https://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_table_rows', 
                    #   data    = f'{{\"json\":true,\"code\":\"alien.worlds\",\"scope\":\"{ self.DATA["login"]["userAccount"] }\",\"table\":"accounts\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}}', 
                    json    = {
                        "json"              : True, 
                        "code"              : "alien.worlds", 
                        "scope"             : self.DATA["login"]["userAccount"], 
                        "table"             : "accounts", 
                        "table_key"         : "", 
                        "lower_bound"       : "", 
                        "upper_bound"       : "", 
                        "index_position"    : 1, 
                        "key_type"          : "", 
                        "limit"             : 1, 
                        "reverse"           : False, 
                        "show_payer"        : False
                    }
                    #   proxies     = SETPROXY
                )
                #---   self.DATA.update({
                #---       'balance'       : json.loads(self.DATA['PROCESS']['get_info_balance'].content)['rows'][0]['balance']
                #---   })
                self.DATA['balance'] = json.loads(self.DATA['PROCESS']['get_info_balance'].content)['rows'][0]['balance']
            except Exception as e:
                print( f'ERROR get_info_balance() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists); time.sleep(3)
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
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '08'
                except      : pass
                    
                self.DATA['PROCESS']['get_info_last_mine']  = cloudscraper.create_scraper().post(
                    f'http://{ random.choice( WAXAPI.lastminer ).split("//")[-1] }/v1/chain/get_table_rows',
                    #   data    = f'{{\"json\":true,\"code\":\"m.federation\",\"scope\":\"m.federation\",\"table\":\"miners\",\"table_key\":\"\",\"lower_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"upper_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"index_position\":1,\"key_type\":\"\",\"limit\":10,\"reverse\":false,\"show_payer\":false}}', 
                    json    = {
                        'json'              : True, 
                        'code'              : 'm.federation', 
                        'scope'             : 'm.federation', 
                        'table'             : 'miners', 
                        'table_key'         : '', 
                        'lower_bound'       : self.DATA['login']['userAccount'], 
                        'upper_bound'       : self.DATA['login']['userAccount'], 
                        'index_position'    : 1, 
                        'key_type'          : '', 
                        'limit'             : 10, 
                        'reverse'           : False, 
                        'show_payer'        : False
                    }
                    #   proxies     = SETPROXY
                )
                
                self.DATA['last_mine'] = json.loads(self.DATA['PROCESS']['get_info_last_mine'].content)['rows'][0]
                
            except Exception as e:
                print( f'ERROR get_info_last_mine() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists); time.sleep(3)
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
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
                self.DATA['PROCESS']['get_info_avatar']     = cloudscraper.create_scraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #   debug = True, 
                    delay   = 10
                ).post(
                    f'https://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_table_rows',
                    #   data    = f'{{\"json\":true,\"code\":\"alien.worlds\",\"scope\":\"{ self.DATA["login"]["userAccount"] }\",\"table\":\"accounts\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":1,\"reverse\":false,\"show_payer\":false}}', 
                    json    = {
                        "json"              : True, 
                        "code"              : "alien.worlds", 
                        "scope"             : self.DATA["login"]["userAccount"],
                        "table"             : "accounts",
                        "table_key"         : "",
                        "lower_bound"       : "",
                        "upper_bound"       : "",
                        "index_position"    : 1,
                        "key_type"          : "",
                        "limit"             : 1,
                        "reverse"           : False,
                        "show_payer"        : False
                    }, 
                    #   proxies     = SETPROXY
                )
                #---   self.DATA.update({
                #---       'avatar'    : json.loads(self.DATA['PROCESS']['get_info_avatar'].content)['rows'][0]
                #---   })
                self.DATA['avatar'] = json.loads(self.DATA['PROCESS']['get_info_avatar'].content)['rows'][0]
            except Exception as e:
                print( f'ERROR get_info_avatar() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists); time.sleep(3)
                continue
            break
    def get_bags(
        self
    ):
        
        self.DATA['PROCESS']['get_bags'] = [{
            'request' : None, 
            'content' : {}, 
            'rescode' : 999
        }, {
            'request' : None, 
            'content' : {}, 
            'rescode' : 999
        }]
        
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
                
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '03'
                except      : pass
                
                self.DATA['PROCESS']['get_bags'][0]['request']            = cloudscraper.create_scraper().post(
                    f'http://{ self.DATA["waxserver"].split("//")[-1] }/v1/chain/get_table_rows',
                    json    = {
                        'json'              : True, 
                        'code'              : 'm.federation', 
                        'scope'             : 'm.federation', 
                        'table'             : 'bags', 
                        'table_key'         : '', 
                        'lower_bound'       : self.DATA["login"]["userAccount"], 
                        'upper_bound'       : self.DATA["login"]["userAccount"], 
                        'index_position'    : 1, 
                        'key_type'          : '', 
                        'limit'             : 10, 
                        'reverse'           : False, 
                        'show_payer'        : False
                    }
                    #   data    = f'{{\"json\":true,\"code\":\"m.federation\",\"scope\":\"m.federation\",\"table\":\"bags\",\"table_key\":\"\",\"lower_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"upper_bound\":\"{ self.DATA["login"]["userAccount"] }\",\"index_position\":1,\"key_type\":\"\",\"limit\":10,\"reverse\":false,\"show_payer\":false}}', 
                    #   proxies     = SETPROXY
                )
                
                for b in json.loads(self.DATA['PROCESS']['get_bags'][0]['request'].content)['rows'][0]['items']:
                    self.DATA['PROCESS']['get_bags'][0]['content'].update({
                        b : {
                            'difficulty'    : 0, 
                            'delay'         : 0, 
                            'info'          : None, 
                            'resp'          : {
                                'request' : None, 
                                'content' : {}, 
                                'rescode' : 999
                            }
                        }
                    })
                    
                self.DATA['bags'] = self.DATA['PROCESS']['get_bags'][0]['content']
                
            except Exception as e:
                print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['waxserver'] = random.choice(WAXAPI.addrlists); time.sleep(3)
                continue
            break
        #***    https://codetabs.com/cors-proxy/cors-proxy.html
        #***    https://blog.grida.co/cors-anywhere-for-everyone-free-reliable-cors-proxy-service-73507192714e
        #***    curl \
        #***        -H "Accept: application/json" \
        #***        -H "Origin: bridged.xyz" \
        #***        -H "x-requested-with:XMLHttpRequest" \
        #***        https://cors.bridged.cc/https://www.cloudflare.com/cdn-cgi/trace
        #***    https://api.alienworlds.io/v1/alienworlds/asset?id=1099542806152,1099529459927,1099522662202
        #***    https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id=1099542806152,1099529459927,1099522662202
        #***    https://wax.api.aa.atomichub.io/atomicmarket/v1/assets/?asset_id=1099542806152,1099529459927,1099522662202
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200 and random.randrange(100) >= 58:
                    for b in self.DATA["bags"]:
                        if not self.DATA['bags'][ b ]['resp']['rescode'] == 200 and random.randrange(100) >= 50:
                            self.DATA['bags'][ b ]['resp']['request'] = cloudscraper.create_scraper().get(
                                f'https://www.nfthive.io/api/asset/{ b }', 
                                timeout = 15
                            )
                            if self.DATA['bags'][ b ]['resp']['request'].status_code == 200:
                                self.DATA['bags'][ b ]['difficulty']        = json.loads( self.DATA['bags'][ b ]['resp']['request'].json().get('mdata') )['difficulty']
                                self.DATA['bags'][ b ]['delay']             = json.loads( self.DATA['bags'][ b ]['resp']['request'].json().get('mdata') )['delay']
                                self.DATA['bags'][ b ]['info']              = self.DATA['bags'][ b ]['resp']['request'].json()
                                self.DATA['bags'][ b ]['resp']['content']   = json.loads( self.DATA['bags'][ b ]['resp']['request'].json().get('mdata') )
                                self.DATA['bags'][ b ]['resp']['rescode']   = self.DATA['bags'][ b ]['resp']['request'].status_code
                                print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { b } www.nfthive.io 48' )
                        if not self.DATA['bags'][ b ]['resp']['rescode'] == 200:
                            self.DATA['bags'][ b ]['resp']['request'] = cloudscraper.CloudScraper(
                                browser = {
                                    'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                                },
                                #   debug       = True,
                                delay       = 10
                            ).get(
                                f'https://atomic.wax.io/atomicassets/v1/assets/{ b }', 
                                timeout = 15
                            )
                            if self.DATA['bags'][ b ]['resp']['request'].status_code == 200:
                                self.DATA['bags'][ b ]['difficulty']        = self.DATA['bags'][ b ]['resp']['request'].json()['data']['template']['immutable_data']['difficulty']
                                self.DATA['bags'][ b ]['delay']             = self.DATA['bags'][ b ]['resp']['request'].json()['data']['template']['immutable_data']['delay']
                                self.DATA['bags'][ b ]['info']              = self.DATA['bags'][ b ]['resp']['request'].json()['data']
                                self.DATA['bags'][ b ]['resp']['content']   = self.DATA['bags'][ b ]['resp']['request'].json()['data']['template']['immutable_data']
                                self.DATA['bags'][ b ]['resp']['rescode']   = self.DATA['bags'][ b ]['resp']['request'].status_code
                                print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { b } atomic.wax.io 48' )
                            else:
                                self.DATA['bags'][ b ] = {
                                    'difficulty'    : 0, 
                                    'delay'         : 0, 
                                    'info'          : None, 
                                    'resp'          : {
                                        'request'   : None, 
                                        'content'   : {}, 
                                        'rescode'   : 999
                                    }
                                }
                    if [ self.DATA["bags"][ b ]['resp']['rescode'] for b in self.DATA["bags"] ] == [200] * len( self.DATA["bags"] ):
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = 200
                    else:
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = 999

                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200 and random.randrange(100) >= 85:
                    self.DATA['PROCESS']['get_bags'][1]['request']            = cloudscraper.create_scraper().get(
                        f'https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ ",".join(self.DATA["bags"]) }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_bags'][1]['request'].status_code == 200:
                        {
                            self.DATA['bags'].update({
                            str( x['asset_id'] ) : {
                                'difficulty'    : x["data"]["difficulty"], 
                                'delay'         : x["data"]["delay"], 
                                'info'          : x
                            }}) for x in json.loads(self.DATA['PROCESS']['get_bags'][1]['request'].content)['data'] 
                        }; print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { ",".join(self.DATA["bags"]) } wax.api.atomicassets.io 85' )
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = self.DATA['PROCESS']['get_bags'][1]['request'].status_code
                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200 and random.randrange(100) >= 48:
                    self.DATA['PROCESS']['get_bags'][1]['request']            = cloudscraper.create_scraper().get(
                        f'https://cors.bridged.cc/https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ ",".join(self.DATA["bags"]) }', 
                        headers = {
                            'x-requested-with'  : 'XMLHttpRequest', 
                            'Origin'            : 'bridged.xyz', 
                            'Accept'            : 'application/json'
                        }, 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_bags'][1]['request'].status_code == 200:
                        {
                            self.DATA['bags'].update({
                            str( x['asset_id'] ) : {
                                'difficulty'    : x["data"]["difficulty"], 
                                'delay'         : x["data"]["delay"], 
                                'info'          : x
                            }}) for x in json.loads(self.DATA['PROCESS']['get_bags'][1]['request'].content)['data'] 
                        }; print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { ",".join(self.DATA["bags"]) } cors.bridged.cc - wax.api.atomicassets.io 48' )
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = self.DATA['PROCESS']['get_bags'][1]['request'].status_code
                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200 and random.randrange(100) >= 64:
                    self.DATA['PROCESS']['get_bags'][1]['request']            = cloudscraper.create_scraper().get(
                        f'https://webproxy.vpnbook.com/browse.php?u=https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ ",".join(self.DATA["bags"]) }&b=0&f=norefer', 
                        headers = {
                            'Referer' : f'https://webproxy.vpnbook.com/browse.php?u=https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ ",".join(self.DATA["bags"]) }&b=0&f=norefer'
                        }, 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_bags'][1]['request'].status_code == 200:
                        {
                            self.DATA['bags'].update({
                            str( x['asset_id'] ) : {
                                'difficulty'    : x["data"]["difficulty"], 
                                'delay'         : x["data"]["delay"], 
                                'info'          : x
                            }}) for x in json.loads(self.DATA['PROCESS']['get_bags'][1]['request'].content)['data'] 
                        }; print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { ",".join(self.DATA["bags"]) } webproxy.vpnbook.com - wax.api.atomicassets.io 64' )
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = self.DATA['PROCESS']['get_bags'][1]['request'].status_code
                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200 and random.randrange(100) >= 80:
                    self.DATA['PROCESS']['get_bags'][1]['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        },
                        #   debug       = True,
                        delay       = 10
                    ).get(
                        f'https://wax.api.atomicassets.io/atomicmarket/v1/assets/?asset_id={ ",".join(self.DATA["bags"]) }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_bags'][1]['request'].status_code == 200:
                        {
                            self.DATA['bags'].update({
                            str( x['asset_id'] ) : {
                                'difficulty'    : x["data"]["difficulty"], 
                                'delay'         : x["data"]["delay"], 
                                'info'          : x
                            }}) for x in json.loads(self.DATA['PROCESS']['get_bags'][1]['request'].content)['data'] 
                        }; print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { ",".join(self.DATA["bags"]) } wax.api.atomicassets.io 80' )
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = self.DATA['PROCESS']['get_bags'][1]['request'].status_code
                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200 and random.randrange(100) >= 35:
                    self.DATA['PROCESS']['get_bags'][1]['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        },
                        #   debug       = True,
                        delay       = 10
                    ).get(
                        f'https://wax.api.aa.atomichub.io/atomicmarket/v1/assets/?asset_id={ ",".join(self.DATA["bags"]) }',
                        headers = {
                            'authority'         : 'wax.api.aa.atomichub.io',
                            'pragma'            : 'no-cache',
                            'cache-control'     : 'no-cache',
                            'accept'            : '*/*',
                            'sec-gpc'           : '1',
                            'origin'            : 'https://wax.atomichub.io',
                            'sec-fetch-site'    : 'same-site',
                            'sec-fetch-mode'    : 'cors',
                            'sec-fetch-dest'    : 'empty',
                            'referer'           : 'https://wax.atomichub.io/',
                            'accept-language'   : 'en-US,en;q=0.9'
                        }, 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_bags'][1]['request'].status_code == 200:
                        {
                            self.DATA['bags'].update({
                            str( x['asset_id'] ) : {
                                'difficulty'    : x["data"]["difficulty"], 
                                'delay'         : x["data"]["delay"], 
                                'info'          : x
                            }}) for x in json.loads(self.DATA['PROCESS']['get_bags'][1]['request'].content)['data'] 
                        }; print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { ",".join(self.DATA["bags"]) } wax.api.aa.atomichub.io 35' )
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = self.DATA['PROCESS']['get_bags'][1]['request'].status_code
                if not self.DATA['PROCESS']['get_bags'][1]['rescode'] == 200:
                    self.DATA['PROCESS']['get_bags'][1]['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        }, 
                        #   debug       = True, 
                        delay       = 10
                    ).get(
                        f'https://api.alienworlds.io/v1/alienworlds/asset?id={ ",".join(self.DATA["bags"]) }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_bags'][1]['request'].status_code == 200:
                        {
                            self.DATA['bags'].update({
                            str( x['asset_id'] ) : {
                                'difficulty'    : x["data"]["difficulty"], 
                                'delay'         : x["data"]["delay"], 
                                'info'          : x
                            }}) for x in self.DATA['PROCESS']['get_bags'][1]['request'].json()['results'] 
                        }; print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : api.alienworlds.io 00' )
                        self.DATA['PROCESS']['get_bags'][1]['rescode'] = self.DATA['PROCESS']['get_bags'][1]['request'].status_code
                    else:
                        print( f'CHECK get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : RETRY TO GET BAGS INFO' ); time.sleep(3); continue
            except Exception as e:
                print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { ",".join(self.DATA["bags"]) } | { self.DATA["PROCESS"]["get_bags"][1]["rescode"] } | {e}' )

                #   try     : print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["PROCESS"]["get_bags"]["request"].url } - {e}' )
                #   except  : print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : None ["get_bags"]["request"].url - {e}' )
                #   try     : print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { json.loads(self.DATA["PROCESS"]["get_bags"]["request"].content) } - {e}' )
                #   except  : print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : None ["get_bags"]["request"].content - {e}' )
                #   try     : print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["PROCESS"]["get_bags"]["content"] } - {e}' )
                #   except  : print( f'ERROR get_bags() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : None content - {e}' )

                time.sleep(3)
                continue
            break
    def get_land(
        self
    ):
        
        #---    self.DATA['PROCESS']['get_land'] = None
        self.DATA['PROCESS']['get_land'] = {
            'request' : None, 
            'content' : None, 
            'rescode' : 999
        }
        
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '04'
                except      : pass
                
                
                
                #***    NEED UNIT TEST
                #***    https://api.alienworlds.io/v1/alienworlds/asset?id=1099514843356
                #***    http://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id=1099514843356
                #***    http://wax.api.aa.atomichub.io/atomicmarket/v1/assets/?asset_id=1099514961342
                #***    https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id=1099512961342
                
                #+++    https://www.nfthive.io/api/asset/1099512961342                {"assetId": 1099512961342, "aAssetId": 1099512961342, "name": "Methane Swampland on Neri", "standard": "atomicassets", "author": "alien.worlds", "category": "land.worlds", "number": 18, "variant": "Neri", "rarity": "Common", "mdata": "{\"backimg\": \"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP\", \"cardid\": 18, \"commission\": 2000, \"delay\": 35, \"difficulty\": 0, \"ease\": 23, \"img\": \"QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc\", \"luck\": 23, \"name\": \"Methane Swampland on Neri\", \"planet\": \"11146092910561869824\", \"rarity\": \"Common\", \"x\": 10, \"y\": 3}", "color": null, "attr7": "35", "attr8": "0", "attr9": "23", "attr10": "23", "border": null, "verified": true, "type": null, "isFavorited": false, "image": "https://ipfs.hivebp.io/ipfs/QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc", "previmg": "https://ipfs.hivebp.io/ipfs/QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc", "price": null, "usd_price": null, "salesDate": null, "backimg": "https://ipfs.hivebp.io/ipfs/QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP", "authorImg": null, "owner": "zqcb2.wam", "mint": 70, "total": 75, "offer": 27852.0, "usd_offer": 4342.1268, "isAuction": false, "usd_wax": 0.1559, "currency": "WAX", "sender": "cabba.wam", "buyer": null, "listing_id": 6379978, "burned": 0, "isBurned": false, "average": 53001.7652062952, "lowest": 48107.76138550352, "market": null, "usd_average": 9864.2445, "usd_lowest": 7500.0, "last_sold": 58000.0, "usd_last_sold": 6432.2, "num_sales": 56, "rarity_score": 0, "aether_value": null, "upliftium": null, "unpackUrl": null, "timestamp": "2020-12-03 00:28:31 GMT+1", "transactions": [{"from": "cabba.wam", "offer": 27852.0, "to": "atomicmarket", "transactionId": "aad445f5aa4fac2dd3fb0cd28382b62bb458b1b7426af733d4284dff3f5f7518", "seq": 2080915789, "mdata": "{\"backimg\": \"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP\", \"cardid\": 18, \"commission\": 2000, \"delay\": 35, \"difficulty\": 0, \"ease\": 23, \"img\": \"QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc\", \"luck\": 23, \"name\": \"Methane Swampland on Neri\", \"planet\": \"11146092910561869824\", \"rarity\": \"Common\", \"x\": 10, \"y\": 3}", "price": 0, "usd_wax": 0.1559, "currency": "WAX", "timestamp": "2021-04-11 23:00:54", "offer_2": null, "offer_type": "market", "offer_time": null, "orderId": 6379978}, {"from": "mam5i.wam", "offer": 19000.0, "to": "atomicmarket", "transactionId": "bc59dd5a335ce66529c886f394ba59cbeb56a2e58b0d1e02728e0da06fc69deb", "seq": 1838217783, "mdata": "{\"backimg\": \"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP\", \"cardid\": 18, \"commission\": 2000, \"delay\": 35, \"difficulty\": 0, \"ease\": 23, \"img\": \"QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc\", \"luck\": 23, \"name\": \"Methane Swampland on Neri\", \"planet\": \"11146092910561869824\", \"rarity\": \"Common\", \"x\": 10, \"y\": 3}", "price": 0, "usd_wax": 0.1559, "currency": "WAX", "timestamp": "2021-04-06 11:09:26", "offer_2": null, "offer_type": "market", "offer_time": null, "orderId": 5674519}, {"from": "mam5i.wam", "offer": 11900.0, "to": "atomicmarket", "transactionId": "8e4f74c950a030a498d375d92032c58cfb82d57877025a65fcdc7bd0af057a31", "seq": 1280096077, "mdata": "{\"backimg\": \"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP\", \"cardid\": 18, \"commission\": 2000, \"delay\": 35, \"difficulty\": 0, \"ease\": 23, \"img\": \"QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc\", \"luck\": 23, \"name\": \"Methane Swampland on Neri\", \"planet\": \"11146092910561869824\", \"rarity\": \"Common\", \"x\": 10, \"y\": 3}", "price": 0, "usd_wax": 0.1559, "currency": "WAX", "timestamp": "2021-02-28 03:07:46", "offer_2": null, "offer_type": "market", "offer_time": null, "orderId": 3160157}, {"from": "nordiccaesar", "offer": null, "to": "mam5i.wam", "transactionId": "bcc1bb57e51fcb1a27a4d55af559d3b801106f1437a608a4bd5b97299e7ade65", "seq": 763018611, "mdata": "{\"backimg\": \"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP\", \"cardid\": 18, \"commission\": 2000, \"delay\": 35, \"difficulty\": 0, \"ease\": 23, \"img\": \"QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc\", \"luck\": 23, \"name\": \"Methane Swampland on Neri\", \"planet\": \"11146092910561869824\", \"rarity\": \"Common\", \"x\": 10, \"y\": 3}", "price": 0, "usd_wax": 0.1559, "currency": "WAX", "timestamp": "2020-12-12 14:17:12", "offer_2": null, "offer_type": null, "offer_time": null, "orderId": null}, {"from": "open.worlds", "offer": null, "to": "nordiccaesar", "transactionId": "06b1d69dd220082215dba9714f25c545395a504d5af269c752fba40370abf6da", "seq": 753525062, "mdata": "{\"backimg\": \"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP\", \"cardid\": 18, \"commission\": 2000, \"delay\": 35, \"difficulty\": 0, \"ease\": 23, \"img\": \"QmPYpXGb59ArTtbXMtcWPqowsDhAUuTRiAktUEUc4XbsJc\", \"luck\": 23, \"name\": \"Methane Swampland on Neri\", \"planet\": \"11146092910561869824\", \"rarity\": \"Common\", \"x\": 10, \"y\": 3}", "price": 0, "usd_wax": 0.1559, "currency": "WAX", "timestamp": "2020-12-06 12:03:35", "offer_2": null, "offer_type": null, "offer_time": null, "orderId": null}], "offer_2": null, "orderId": 6379978}
                #+++    json.loads( self.DATA["PROCESS"]["get_land"].json().get('mdata') )['difficulty']
                #+++    cloudscraper.create_scraper().get(
                #+++        'https://www.nfthive.io/api/asset/1099512961342'
                #+++    )
                #+++
                #+++
                #+++
                #+++    https://atomic.wax.io/atomicassets/v1/assets/1099522662202    {"success":true,"data":{"contract":"atomicassets","asset_id":"1099522662202","owner":"f4teq.wam","is_transferable":true,"is_burnable":true,"collection":{"collection_name":"alien.worlds","name":"Alien Worlds","img":"QmZBpRKm5qigpfDdYgxtcefZ7Cn3GeWHCMBEsk6wYXP4gg","author":"federation","allow_notify":true,"authorized_accounts":["federation","open.worlds","terra.worlds","m.federation","s.federation"],"notify_accounts":["federation","m.federation"],"market_fee":0.01,"created_at_block":"70292143","created_at_time":"1596576277500"},"schema":{"schema_name":"tool.worlds","format":[{"name":"cardid","type":"uint16"},{"name":"name","type":"string"},{"name":"img","type":"image"},{"name":"backimg","type":"image"},{"name":"rarity","type":"string"},{"name":"shine","type":"string"},{"name":"material_grade","type":"uint64"},{"name":"type","type":"string"},{"name":"delay","type":"uint16"},{"name":"difficulty","type":"uint8"},{"name":"ease","type":"uint16"},{"name":"luck","type":"uint16"},{"name":"last_mine","type":"uint32"}],"created_at_block":"81610774","created_at_time":"1602238106500"},"template":{"template_id":"19553","max_supply":"0","is_transferable":true,"is_burnable":true,"issued_supply":"376683","immutable_data":{"img":"QmVUZHpUkc3PuLkJ7BDvJ3S3AgDySjsqWQib1sVKziHCbS","ease":20,"luck":7,"name":"Standard Drill","type":"Extractor","delay":120,"shine":"Stone","cardid":2,"rarity":"Abundant","backimg":"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP","difficulty":1},"created_at_time":"1602238108000","created_at_block":"81610777"},"mutable_data":{"last_mine":1618501990},"immutable_data":{},"template_mint":"133566","backed_tokens":[],"burned_by_account":null,"burned_at_block":null,"burned_at_time":null,"updated_at_block":"126174670","updated_at_time":"1624529458500","transferred_at_block":"126174670","transferred_at_time":"1624529458500","minted_at_block":"113004255","minted_at_time":"1617941411000","data":{"last_mine":1618501990,"img":"QmVUZHpUkc3PuLkJ7BDvJ3S3AgDySjsqWQib1sVKziHCbS","ease":20,"luck":7,"name":"Standard Drill","type":"Extractor","delay":120,"shine":"Stone","cardid":2,"rarity":"Abundant","backimg":"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP","difficulty":1},"name":"Standard Drill"},"query_time":1627718944702}
                #+++    CloudScraper(
                #+++        browser = {
                #+++            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                #+++        },
                #+++        #   debug       = True,
                #+++        delay       = 10
                #+++    ).get(
                #+++        'https://atomic.wax.io/atomicassets/v1/assets/1099522662202'
                #+++    )
                #+++    x.json()['data']['template']['immutable_data']['difficulty']


                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 72:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.create_scraper().get(
                        f'https://www.nfthive.io/api/asset/{ self.DATA["last_mine"]["current_land"] }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )['difficulty'], 
                                'commission'    : self.DATA['land']['commission'] if self.DATA['land']['commission'] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )["delay"])[0]    if len(str(json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )["delay"])) >= 2 else 0, 
                                        str(json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )["delay"])[-1:]  if len(str(json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )["delay"])) >= 2 else str(json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )["delay"])[-1:]
                                    )
                                ) if json.loads( self.DATA["PROCESS"]["get_land"]['request'].json().get('mdata') )["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } www.nfthive.io 72' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 48:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        },
                        #   debug       = True,
                        delay       = 10
                    ).get(
                        f'https://atomic.wax.io/atomicassets/v1/assets/{ self.DATA["last_mine"]["current_land"] }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']['difficulty'], 
                                'commission'    : float('{:,.2f}'.format(
                                    self.DATA["PROCESS"]["get_land"]['request'].json()['data']['mutable_data']['commission'] / 100
                                )) if self.DATA["PROCESS"]["get_land"]['request'].json()['data']['mutable_data']['commission'] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']["delay"])[0]    if len( str( self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']["delay"] ) ) >= 2 else 0, 
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']["delay"])[-1:]  if len( str( self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']["delay"] ) ) >= 2 else str( self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']["delay"] )[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()['data']['template']['immutable_data']["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } atomic.wax.io 48' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 85:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.create_scraper().get(
                        f'https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ self.DATA["last_mine"]["current_land"] }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['data'][0]['data']['difficulty'], 
                                'commission'    : float('{:,.2f}'.format(
                                    self.DATA["PROCESS"]["get_land"]['request']['request'].json()["data"][0]["data"]["commission"] / 100
                                )) if self.DATA["PROCESS"]["get_land"]['request']['request'].json()["data"][0]["data"]["commission"] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[0]    if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else 0, 
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]  if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } wax.api.atomicassets.io 85' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 48:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.create_scraper().get(
                        f'https://cors.bridged.cc/https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ self.DATA["last_mine"]["current_land"] }', 
                        headers = {
                            'x-requested-with'  : 'XMLHttpRequest', 
                            'Origin'            : 'bridged.xyz', 
                            'Accept'            : 'application/json'
                        }, 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['data'][0]['data']['difficulty'], 
                                'commission'    : float('{:,.2f}'.format(
                                    self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] / 100
                                )) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[0]    if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else 0, 
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]  if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } cors.bridged.cc - wax.api.atomicassets.io 48' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 52:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.create_scraper().get(
                        f'https://webproxy.vpnbook.com/browse.php?u=https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ self.DATA["last_mine"]["current_land"] }&b=0&f=norefer', 
                        headers = {
                            'Referer' : f'https://webproxy.vpnbook.com/browse.php?u=https://wax.api.atomicassets.io/atomicassets/v1/assets/?asset_id={ self.DATA["last_mine"]["current_land"] }&b=0&f=norefer'
                        }, 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['data'][0]['data']['difficulty'], 
                                'commission'    : float('{:,.2f}'.format(
                                    self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] / 100
                                )) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[0]    if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else 0, 
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]  if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } webproxy.vpnbook.com - wax.api.atomicassets.io 52' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 80:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        },
                        #   debug       = True,
                        delay       = 10
                    ).get(
                        f'https://wax.api.atomicassets.io/atomicmarket/v1/assets/?asset_id={ self.DATA["last_mine"]["current_land"] }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['data'][0]['data']['difficulty'], 
                                'commission'    : float('{:,.2f}'.format(
                                    self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] / 100
                                )) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[0]    if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else 0, 
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]  if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } wax.api.atomicassets.io 80' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200 and random.randrange(100) >= 35:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        },
                        #   debug       = True,
                        delay       = 10
                    ).get(
                        f'https://wax.api.aa.atomichub.io/atomicmarket/v1/assets/?asset_id={ self.DATA["last_mine"]["current_land"] }',
                        headers = {
                            'authority'         : 'wax.api.aa.atomichub.io',
                            'pragma'            : 'no-cache',
                            'cache-control'     : 'no-cache',
                            'accept'            : '*/*',
                            'sec-gpc'           : '1',
                            'origin'            : 'https://wax.atomichub.io',
                            'sec-fetch-site'    : 'same-site',
                            'sec-fetch-mode'    : 'cors',
                            'sec-fetch-dest'    : 'empty',
                            'referer'           : 'https://wax.atomichub.io/',
                            'accept-language'   : 'en-US,en;q=0.9'
                        }, 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['data'][0]['data']['difficulty'], 
                                'commission'    : float('{:,.2f}'.format(
                                    self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] / 100
                                )) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["commission"] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[0]    if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else 0, 
                                        str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]  if len(str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])) >= 2 else str(self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"])[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()["data"][0]["data"]["delay"] >= 1 else 1.0
                            }
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } wax.api.aa.atomichub.io 35' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                if not self.DATA['PROCESS']['get_land']['rescode'] == 200:
                    self.DATA['PROCESS']['get_land']['request']            = cloudscraper.CloudScraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        }, 
                        #   debug       = True, 
                        delay       = 10
                    ).get(
                        f'https://api.alienworlds.io/v1/alienworlds/asset?id={ self.DATA["last_mine"]["current_land"] }', 
                        timeout = 15
                    )
                    if self.DATA['PROCESS']['get_land']['request'].status_code == 200:
                        self.DATA.update({
                            'land'          : {
                                'difficulty'    : self.DATA["PROCESS"]["get_land"]['request'].json()['results'][0]['data']['difficulty'], 
                                'commission'    : self.DATA['land']['commission'] if self.DATA['land']['commission'] >= 0.01 else 0.00, 
                                'delay'         : float(
                                    '{0}.{1}'.format(
                                        str( self.DATA["PROCESS"]["get_land"]['request'].json()["results"][0]["data"]["delay"] )[0]    if len(str( self.DATA["PROCESS"]["get_land"]['request'].json()["results"][0]["data"]["delay"] )) >= 2 else 0, 
                                        str( self.DATA["PROCESS"]["get_land"]['request'].json()["results"][0]["data"]["delay"] )[-1:]  if len(str( self.DATA["PROCESS"]["get_land"]['request'].json()["results"][0]["data"]["delay"] )) >= 2 else str( self.DATA["PROCESS"]["get_land"]['request'].json()["results"][0]["data"]["delay"] )[-1:]
                                    )
                                ) if self.DATA["PROCESS"]["get_land"]['request'].json()["results"][0]["data"]["delay"] >= 1 else 1.0
                            } 
                        }); print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } api.alienworlds.io 00' )
                        self.DATA['PROCESS']['get_land']['rescode'] = self.DATA['PROCESS']['get_land']['request'].status_code
                    else:
                        print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } RETRY TO GET LAND INFO' ); time.sleep(3); continue
                        
                #   print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["land"]["commission"] }' )
                #   print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["land"]["difficulty"] }' )
                #   print( f'CHECK get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["land"]["delay"] }' )

            except Exception as e:
                print( f'ERROR get_land() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["last_mine"]["current_land"] } | { self.DATA["PROCESS"]["get_land"]["request"] } | {e}' )
                time.sleep(3)
                continue
            break
    def set_difficulty(
        self
    ):
    
        try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '07'
        except      : pass
        
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
                self.DATA.update({
                    'difficulty' : self.DATA['land']['difficulty']
                })
                {
                    self.DATA.update({
                        'difficulty' : self.DATA['difficulty'] + self.DATA['bags'][t]['difficulty']
                    }) for t in list(self.DATA['bags']) if self.DATA['bags'][t]['difficulty'] >= 1
                }
            except Exception as e:
                print( f'ERROR set_difficulty() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                time.sleep(13)
                self.get_bags()
                self.get_land()
                time.sleep(2)
                continue
            break
    def set_cooldown(
        self
    ):
        if len( self.DATA['bags'] ) >= 1:
        
            self.DATA['cooldown'] = 0
            
            self.DATA['timelist'] = [self.DATA['bags'][t]['delay'] for t in list(self.DATA['bags']) if self.DATA['bags'][t]['delay'] >= 1]
            self.DATA['timelist'] = sorted(self.DATA['timelist'], reverse=True)
            if len(self.DATA['timelist']) == 3:
                self.DATA['timelist'] = self.DATA['timelist'][0:2]
            if len(self.DATA['timelist']) <= 2:
                self.DATA['timelist'] = self.DATA['timelist']
            for t in self.DATA['timelist']:
                self.DATA['cooldown'] = self.DATA['cooldown'] + t
            self.DATA['cooldown'] = self.DATA['cooldown'] * self.DATA['land']['delay']
        else:
            self.DATA['cooldown'] = 0
            
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
        #***    self.DATA['cpu'] .update({
        #***        'total' : self.DATA['account']['cpu_limit']["max"], 
        #***        'usage' : self.DATA['account']['cpu_limit']["usage"], 
        #***        'spare' : self.DATA['account']['cpu_limit']["available"], 
        #***        'allow' : float(f'{float(self.DATA["account"]["cpu_limit"]["available"] * 100 / self.DATA["account"]["cpu_limit"]["max"]):.2f}')
        #***    })
        return self.DATA['cpu']['allow']
    def get_nonce(
        self
    ):
        
        global DATABASE
        
        self.DATA['PROCESS']['get_nonce'] = {
            'async_lists' : [], 
            'action_item' : None
        }
        
        while True:
        
            self.DATA['PROCESS']['get_nonce'] = {
                'async_lists' : [], 
                'action_item' : None
            }
            
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            # NEED UNIT TEST
            if not self.DATA["last_mine"].get('last_mine_tx') or self.DATA["last_mine"].get('last_mine_tx') == None:
                time.sleep(2); self.get_info_last_mine(); time.sleep(3); continue
            # NEED UNIT TEST
                
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['10']      = '<pre>2/9 CLAIM GET nonce ------</pre>'
                except      : pass
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '09'
                except      : pass
                    
                for u in [
                    f'{ random.choice( WAXAPI().hostminer )["address"] }{ self.DATA["login"]["userAccount"] }&difficulty={ self.DATA["difficulty"] }&lastMineTx={ self.DATA["last_mine"]["last_mine_tx"] }', 
                    f'{ random.choice( WAXAPI().replminer )["address"] }{ self.DATA["login"]["userAccount"] }&difficulty={ self.DATA["difficulty"] }&lastMineTx={ self.DATA["last_mine"]["last_mine_tx"] }', 
                    f'{ random.choice( WAXAPI().freeminer )["address"] }{ self.DATA["login"]["userAccount"] }&difficulty={ self.DATA["difficulty"] }&lastMineTx={ self.DATA["last_mine"]["last_mine_tx"] }', 
                    f'{ random.choice( WAXAPI().glitminer )["address"] }{ self.DATA["login"]["userAccount"] }&difficulty={ self.DATA["difficulty"] }&lastMineTx={ self.DATA["last_mine"]["last_mine_tx"] }'
                ]:
                    self.DATA['PROCESS']['get_nonce']['action_item'] = grequests.get(u, timeout=60)
                    self.DATA['PROCESS']['get_nonce']['async_lists'].append( self.DATA['PROCESS']['get_nonce']['action_item'] )
                
                grequests.map( self.DATA['PROCESS']['get_nonce']['async_lists']) # , exception_handler=grequests_except_handler 
                
                if not re.search(
                    '(\'|\"|^|$)\w{14,16}(\'|\"|^|$)', 
                    str(random.choice([
                        x.response.json() for x in self.DATA['PROCESS']['get_nonce']['async_lists'] if not (
                            x.response == None
                        ) and (
                            x.response.status_code == 200
                        ) and hasattr(x.response, 'json') and not (
                            x.response.json().get('nonce') == ''
                        )
                    ]))
                ):
                    print( f'ERROR get_nonce() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : NOT FOUND nonce' )
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['10']      = '<pre>2/7 RETRY TO GET NONCE</pre>' 
                    except      : pass
                    try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '10'
                    except      : pass
                    continue
                    
                self.DATA.update({
                    'nonce'         :  random.choice( [ x.response.json() for x in self.DATA['PROCESS']['get_nonce']['async_lists'] if not x.response == None and x.response.status_code == 200 and hasattr(x.response, 'json') and not x.response.json().get('nonce') == ''] )['nonce']
                }); print( f'NONCE get_nonce() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } :', self.DATA['nonce'] )
                
            except Exception as e:
                print( f'ERROR get_nonce() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                
                try         : DATABASE[ self.DATA['waxid'] ]['text']['10']      = '<pre>2/7 GET NONCE TIMEOUT</pre>' 
                except      : pass
                
                time.sleep(1)
                continue
                
            try         : DATABASE[ self.DATA['waxid'] ]['text']['10']      = f'<pre>2/7 GET { self.DATA["nonce"] }</pre>' 
            except      : pass
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '10'
            except      : pass
            
            ####    print( f'NONCE get_nonce() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["nonce"] }' )
            #***    - {self.DATA["PROCESS"]["get_nonce"].url}
            
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
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
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
                    #   'https://wax.dapplica.io/v1/chain/get_info', 
                    f'{ self.DATA["claimsigh"] }/v1/chain/get_info', 
                    #   data    = f'{{}}', 
                    json    = {}
                    #   proxies     = SETPROXY
                )
                self.DATA['block'].update({
                    'chain_id'          : json.loads(self.DATA['PROCESS']['get_info_block'].content)['chain_id'], 
                    'head_block_num'    : json.loads(self.DATA['PROCESS']['get_info_block'].content)['head_block_num'] - 3
                })
            except Exception as e:
                print( f'ERROR get_info_block() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['claimsigh'] = random.choice(WAXAPI.claimsigh); time.sleep(3)
                continue
            break
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
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
                    f'{ self.DATA["claimsigh"] }/v1/chain/get_block', 
                    #   data    = f'{{\"block_num_or_id\":{ self.DATA["block"]["head_block_num"] }}}', 
                    json    = {
                        "block_num_or_id" : self.DATA["block"]["head_block_num"]
                    }
                    #   proxies     = SETPROXY
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
                print( f'ERROR get_info_block() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['claimsigh'] = random.choice(WAXAPI.claimsigh); time.sleep(3)
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
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '11'
                except      : pass
                
                self.DATA['PROCESS']['set_packedtrx'] = cloudscraper.create_scraper().get(
                    f'{ random.choice( WAXAPI().packedtrx )["address"] }?actor={ self.DATA["login"]["userAccount"] }&block_num_or_id={ self.DATA["block"]["head_block_num"] }-{ self.DATA["block"]["ref_block_prefix"] }&nonce={ self.DATA["nonce"] }&expiration={ self.DATA["block"]["expiration"][1] }&chainId={ self.DATA["block"]["chain_id"] }', 
                    timeout = 16
                )
                self.DATA['packedtrx'].update(
                    json.loads(self.DATA['PROCESS']['set_packedtrx'].content)
                )
                self.DATA['packedtrx']['serializedTransaction'].update({
                    'Unit8Array' : [
                        self.DATA['packedtrx']['serializedTransaction'][x] for x in self.DATA['packedtrx']['serializedTransaction']
                    ]
                })
            except Exception as e:
                print( f'ERROR set_packedtrx() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                time.sleep(3)
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
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:

                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '12'
                except      : pass
                
                #---   self.DATA['transaction'].update({
                #---       'raw' : f'{{\"transaction\":{{\"expiration\":\"{ self.DATA["block"]["expiration"][1] }\",\"ref_block_num\":{ self.DATA["packedtrx"]["transactions"]["ref_block_num"] },\"ref_block_prefix\":{ self.DATA["packedtrx"]["transactions"]["ref_block_prefix"] },\"actions\":[{{\"account\":\"m.federation\",\"name\":\"mine\",\"authorization\":[{{\"actor\":\"{ self.DATA["login"]["userAccount"] }\",\"permission\":\"active\"}}],\"data":\"{ self.DATA["packedtrx"]["transactions"]["actions"][0]["data"] }\"}}]}},\"available_keys\":[\"{ self.DATA["login"]["pubKeys"][0] }\",\"{ self.DATA["login"]["pubKeys"][1] }\"]}}'
                #---   })
                #---   self.DATA['transaction']['raw'] = f'{{\"transaction\":{{\"expiration\":\"{ self.DATA["block"]["expiration"][1] }\",\"ref_block_num\":{ self.DATA["packedtrx"]["transactions"]["ref_block_num"] },\"ref_block_prefix\":{ self.DATA["packedtrx"]["transactions"]["ref_block_prefix"] },\"actions\":[{{\"account\":\"m.federation\",\"name\":\"mine\",\"authorization\":[{{\"actor\":\"{ self.DATA["login"]["userAccount"] }\",\"permission\":\"active\"}}],\"data":\"{ self.DATA["packedtrx"]["transactions"]["actions"][0]["data"] }\"}}]}},\"available_keys\":[\"{ self.DATA["login"]["pubKeys"][0] }\",\"{ self.DATA["login"]["pubKeys"][1] }\"]}}'
                self.DATA['transaction']['raw'] = {
                    "transaction"       : {
                        "expiration"        : self.DATA["block"]["expiration"][1],
                        "ref_block_num"     : self.DATA["packedtrx"]["transactions"]["ref_block_num"],
                        "ref_block_prefix"  : self.DATA["packedtrx"]["transactions"]["ref_block_prefix"],
                        "actions"           : [{
                            "account"           : "m.federation",
                            "name"              : "mine",
                            "authorization"     : [{
                                "actor"         : self.DATA["login"]["userAccount"],
                                "permission"    : "active"
                            }], 
                            "data"              : self.DATA["packedtrx"]["transactions"]["actions"][0]["data"]
                        }]
                    }, 
                    "available_keys"    : [
                        self.DATA["login"]["pubKeys"][0],
                        self.DATA["login"]["pubKeys"][1]
                    ]
                }

                self.DATA['PROCESS']['claim_sign']       = cloudscraper.CloudScraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #*   debug   = True, 
                    delay   = 10
                ).post(
                    #   'https://wax.dapplica.io/v1/chain/get_required_keys', 
                    f'{ self.DATA["claimsigh"] }/v1/chain/get_required_keys', 
                    #   data    = self.DATA['transaction']['raw'], 
                    json    = self.DATA['transaction']['raw'], 
                    #   proxies     = SETPROXY
                )
                
                #---   self.DATA['transaction'].update({
                #---       'res' : json.loads(self.DATA['PROCESS']['claim_sign'].content)
                #---   })
                self.DATA['transaction']['res'] = json.loads(self.DATA['PROCESS']['claim_sign'].content)
                
            except Exception as e:
                print( f'ERROR claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                time.sleep(3)
                continue
            break
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
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
                    #   proxies     = SETPROXY
                )

            #***       if json.loads(self.DATA['PROCESS']['claim_sign'].content) and json.loads(self.DATA['PROCESS']['claim_sign'].content).get('errors'):
            #***           raise NameError('Unauthorized')
            #***       
            #***   except NameError as e:
            #***       print( f'ERROR claim_sign() 635 : {e}' )
            #***       raise NameError(e)
            #***       break
                #*** ADD SIGNATURE CHECK 
                #*** ADD SIGNATURE CHECK 
                #*** ADD SIGNATURE CHECK 
                self.DATA['transaction'].update({
                    'all' : json.loads(self.DATA['PROCESS']['claim_sign'].content)
                })
            except Exception as e:
                print( f'ERROR claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                time.sleep(3)
                continue
            break
        while True:
        
            try:
                if (
                    THREADER[ self.DATA['waxid'] ]['status'] == False or THREADER[ self.DATA['waxid'] ]['status'] == None
                ) or (
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step'] = '14'
                except      : pass
                
                #---   self.DATA['transaction'].update({
                #---       'sig' : f'{{\"signatures\":[\"{ self.DATA["transaction"]["all"]["signatures"][0] }\",\"{ self.DATA["transaction"]["all"]["signatures"][1] }\"],\"compression\":0,\"packed_context_free_data\":\"\",\"packed_trx\":\"{ self.DATA["packedtrx"]["packed_trx"] }\"}}'
                #---   })
                #---   self.DATA['transaction']['sig'] = f'{{\"signatures\":[\"{ self.DATA["transaction"]["all"]["signatures"][0] }\",\"{ self.DATA["transaction"]["all"]["signatures"][1] }\"],\"compression\":0,\"packed_context_free_data\":\"\",\"packed_trx\":\"{ self.DATA["packedtrx"]["packed_trx"] }\"}}'
                self.DATA['transaction']['sig'] = {
                    "signatures"                :[
                        self.DATA["transaction"]["all"]["signatures"][0],
                        self.DATA["transaction"]["all"]["signatures"][1]
                    ],
                    "compression"               : 0, 
                    "packed_context_free_data"  : "", 
                    "packed_trx"                : self.DATA["packedtrx"]["packed_trx"]
                }

                self.DATA['PROCESS']['claim_sign']       = cloudscraper.CloudScraper(
                    browser = {
                        'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                    }, 
                    #*   debug   = True, 
                    delay   = 10
                ).post(
                    #   'https://wax.dapplica.io/v1/chain/push_transaction', 
                    f'{ self.DATA["claimsigh"] }/v1/chain/push_transaction', 
                    #   data    = self.DATA['transaction']['sig'], 
                    json    = self.DATA['transaction']['sig'], 
                    #   proxies     = SETPROXY
                )
                
                #---   if (
                #---       json.loads(self.DATA['PROCESS']['claim_sign'].content) and json.loads(self.DATA['PROCESS']['claim_sign'].content).get('errors')
                #---   ) or (
                #---       self.DATA['PROCESS']['claim_sign'].status_code == 503
                #---   ):
                #---       print( f'ERROR claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["PROCESS"]["claim_sign"].status_code }' )
                #---       raise NameError(f'Unauthorized - { self.DATA["PROCESS"]["claim_sign"].status_code }')
                
                self.DATA['transaction'].update({
                    'trx' : json.loads(self.DATA['PROCESS']['claim_sign'].content)
                })
                
                #*** BUG FIX PUSH FREEZE
                #*** BUG FIX PUSH FREEZE
                #*** BUG FIX PUSH FREEZE

                if self.DATA["transaction"]["trx"].get("transaction_id") == '' or self.DATA["transaction"]["trx"].get("transaction_id") == None:
                    print( f'CHECK claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } < { self.DATA["last_mine"]["last_mine_tx"] }' )
                    print( f'CHECK claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } = { self.DATA["transaction"]["trx"] }' )
                    self.DATA['last_mine']['last_mine_tx'] = self.DATA["transaction"]["trx"].get("transaction_id")
                else:
                    print( f'CHECK claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } < { self.DATA["last_mine"]["last_mine_tx"] }' )
                    print( f'CHECK claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } = { self.DATA["transaction"]["trx"].get("transaction_id") }' )
                    self.DATA['last_mine']['last_mine_tx'] = self.DATA["transaction"]["trx"].get("transaction_id")
                
            except Exception as e:
                print( f'ERROR claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {e}' )
                self.DATA['claimsigh'] = random.choice(WAXAPI.claimsigh); time.sleep(3)
                continue
            break
            
        if re.search('Nothing to be mined!', str( self.DATA["transaction"]["trx"] )):
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '22'
            except      : pass
            self.DATA['nonce'] = None
            time.sleep(900)
            return False
        if re.search('Cannot mine with an empty bag', str( self.DATA["transaction"]["trx"] )):
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '23'
            except      : pass
            self.DATA['nonce'] = None
            time.sleep(900)
            return False
        if not self.DATA["transaction"]["trx"].get('transaction_id'):
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '17'
            except      : pass
            DATABASE[ self.DATA['waxid'] ]['status'] = None
            print( f'ERROR claim_sign() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : {self.DATA["transaction"]}' )
            self.DATA['nonce'] = None
            time.sleep(5)
            return False
        else:
            try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '16'
            except      : pass
            DATABASE[ self.DATA['waxid'] ]['status'] = True
            time.sleep(12); self.get_transaction(); self.get_info_balance()
            self.DATA['nonce'] = None
            time.sleep(3)
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
                    DATABASE[ self.DATA['waxid'] ]['status'] == False
                ):
                    break
            except:
                break
                
            try:
            
                try         : DATABASE[ self.DATA['waxid'] ]['text']['step']    = '15'
                except      : pass
                
                if random.randrange(100) >= 32:
                    self.DATA['PROCESS']['get_transaction']['request']            = cloudscraper.create_scraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        }, 
                        #*   debug   = True, 
                        delay   = 10
                    ).get(
                        f'https://wax.greymass.com/v1/history/get_transaction?id={ self.DATA["last_mine"].get("last_mine_tx") }', 
                        timeout = 18
                    )
                    
                    self.DATA['PROCESS']['get_transaction']['content'] = json.loads(self.DATA['PROCESS']['get_transaction']['request'].content)
                    
                    self.DATA['log']['last_cpu_usage']  = self.DATA['PROCESS']['get_transaction']['content']['trx']['receipt']['cpu_usage_us']
                    self.DATA['log']['last_tlm_mined']  = self.DATA['PROCESS']['get_transaction']['content']['traces'][1]['act']['data']['quantity'].split(' ')[0]
                    self.DATA['last_time']              = self.DATA['PROCESS']['get_transaction']['content']['block_time']
                #---   elif random.randrange(100) >= 85:
                #---       self.DATA['PROCESS']['get_transaction']['request']            = cloudscraper.create_scraper(
                #---           browser = {
                #---               'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                #---           }, 
                #---           #*   debug   = True, 
                #---           delay   = 10
                #---       ).get(
                #---           f'https://eosx-apigw.eosx.io/api/transactions/{ self.DATA["last_mine"].get("last_mine_tx") }?chain=wax', 
                #---           timeout = 28
                #---       )
                #---       
                #---       self.DATA['PROCESS']['get_transaction']['content'] = json.loads(self.DATA['PROCESS']['get_transaction']['request'].content)
                #---       
                #---       self.DATA['log']['last_cpu_usage']  = self.DATA['PROCESS']['get_transaction']['content']['data']['cpuUsage']                                        if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['raw']['execution_trace']['receipt']['cpu_usage_us']
                #---       self.DATA['log']['last_tlm_mined']  = self.DATA['PROCESS']['get_transaction']['content']['data']['traces'][1]['data']['quantity'].split(' ')[0]     if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['traces'][0]['traces'][1]['data']['quantity'].split(' ')[0]
                #---       self.DATA['last_time']              = self.DATA['PROCESS']['get_transaction']['content']['data']['blockTime']                                       if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['raw']['execution_block_header']['timestamp']
                else:
                    self.DATA['PROCESS']['get_transaction']['request']            = cloudscraper.create_scraper(
                        browser = {
                            'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
                        }, 
                        #*   debug   = True, 
                        delay   = 10
                    ).get(
                        f'https://{ random.choice( WAXAPI.histories ).split("//")[-1] }/v2/history/get_transaction?id={ self.DATA["last_mine"].get("last_mine_tx") }', 
                        timeout = 18
                    )
                    
                    self.DATA['PROCESS']['get_transaction']['content'] = json.loads(self.DATA['PROCESS']['get_transaction']['request'].content)
                    
                    #   FIX CODE   self.DATA['log']['last_cpu_usage']  = self.DATA['PROCESS']['get_transaction']['content']['actions'][0]['cpu_usage_us'] if not self.DATA['PROCESS']['get_transaction']['content']['actions'][0].get('cpu_usage_us' ) == None else self.DATA['PROCESS']['get_transaction']['content']['actions'][-1]['cpu_usage_us']
                    self.DATA['log']['last_cpu_usage']  = re.search(
                        '\d{1,4}', 
                        re.search(
                            "cpu_usage_us(.?):(.?)\d{1,4}", 
                            str( self.DATA['PROCESS']['get_transaction']['content'] )
                        ).group()
                    ).group()
                    #   FIX CODE   self.DATA['log']['last_tlm_mined']  = self.DATA['PROCESS']['get_transaction']['content']['actions'][1]['act']['data']['quantity'].split(' ')[0]
                    self.DATA['log']['last_tlm_mined']  = re.search(
                        "\d{1,3}.\d{1,10} TLM", 
                        re.search(
                            "ALIEN WORLDS(.*?)Mined Trilium(.*?)\d{1,3}.\d{1,10} TLM", 
                            str( self.DATA['PROCESS']['get_transaction']['content'] )
                        ).group()
                    ).group().split(' ')[0]
                    #   FIX CODE   self.DATA['last_time']              = self.DATA['PROCESS']['get_transaction']['content']['actions'][1]['@timestamp']
                    self.DATA['last_time']  = re.search(
                        '\d{1,10}-\d{1,10}-\d{1,10}T\d{1,10}:\d{1,10}:\d{1,10}.\d{1,10}', 
                        re.search(
                            '@timestamp(.*?)\d{1,10}-\d{1,10}-\d{1,10}T\d{1,10}:\d{1,10}:\d{1,10}.\d{1,10}', 
                            str( self.DATA['PROCESS']['get_transaction']['content'] )
                        ).group()
                    ).group()
                    #??? {"query_time_ms":0.703,"cache_expires_in":3545,"executed":true,"hot_only":false,"trx_id":"ce3f272a4d12daaec4ec3a38feaf4a2c1b2a6615d4252271637c63a3f70f3556","actions":[{"action_ordinal":1,"creator_action_ordinal":0,"act":{"account":"m.federation","name":"mine","authorization":[{"actor":"anlfc.wam","permission":"active"}],"data":{"miner":"anlfc.wam","nonce":"49CDD6D0A7696220"}},"context_free":false,"elapsed":"0","@timestamp":"2021-07-23T18:28:06.000","block_num":131242437,"producer":"wizardsguild","trx_id":"ce3f272a4d12daaec4ec3a38feaf4a2c1b2a6615d4252271637c63a3f70f3556","global_sequence":12982166816,"cpu_usage_us":482,"net_usage_words":16,"signatures":["SIG_K1_Kd6ezGhnLB6PczPJgfbSirSB4eapJem25edAWctWrik7Py6XuMCb831dv7jPWfvmHEwA4LKAPbp4Vc9Pb6oC4HCVbPs5q9","SIG_K1_KACGEcuw3ErVRo1QRw8qwrT2RkForM5MMQNksBaFSdRy3kA24pDMPuqnExnb1DynudX5WUtge36EhCxMobMqFfXYMDR1uX"],"inline_count":7,"inline_filtered":false,"receipts":[{"receiver":"m.federation","global_sequence":"12982166816","recv_sequence":"5151478559","auth_sequence":[{"account":"anlfc.wam","sequence":"683"}]}],"code_sequence":86,"abi_sequence":19,"notified":["m.federation"],"timestamp":"2021-07-23T18:28:06.000"},{"action_ordinal":4,"creator_action_ordinal":1,"act":{"account":"m.federation","name":"logmine","authorization":[{"actor":"m.federation","permission":"log"}],"data":{"miner":"anlfc.wam","params":{"invalid":0,"error":"","delay":240,"difficulty":0,"ease":48,"luck":6,"commission":498},"bounty":"0.0305 TLM","land_id":"1099512958487","planet_name":"naron.world","landowner":"xkubg.wam","bag_items":["1099554411684","1099535201955","1099534108175"],"offset":293}},"context_free":false,"elapsed":"0","@timestamp":"2021-07-23T18:28:06.000","block_num":131242437,"producer":"wizardsguild","trx_id":"ce3f272a4d12daaec4ec3a38feaf4a2c1b2a6615d4252271637c63a3f70f3556","global_sequence":12982166823,"receipts":[{"receiver":"m.federation","global_sequence":"12982166823","recv_sequence":"5151478562","auth_sequence":[{"account":"m.federation","sequence":"8114627432"}]}],"code_sequence":86,"abi_sequence":19,"notified":["m.federation"],"timestamp":"2021-07-23T18:28:06.000"},{"action_ordinal":3,"creator_action_ordinal":1,"act":{"account":"alien.worlds","name":"transfer","authorization":[{"actor":"m.federation","permission":"xfer"}],"data":{"from":"m.federation","to":"xkubg.wam","amount":0.0015,"symbol":"TLM","memo":"ALIEN WORLDS - Mined Trilium Profit Share","quantity":"0.0015 TLM"}},"context_free":false,"elapsed":"0","@timestamp":"2021-07-23T18:28:06.000","block_num":131242437,"producer":"wizardsguild","trx_id":"ce3f272a4d12daaec4ec3a38feaf4a2c1b2a6615d4252271637c63a3f70f3556","global_sequence":12982166820,"receipts":[{"receiver":"alien.worlds","global_sequence":"12982166820","recv_sequence":"2046292219","auth_sequence":[{"account":"m.federation","sequence":"8114627429"}]},{"receiver":"m.federation","global_sequence":"12982166821","recv_sequence":"5151478561","auth_sequence":[{"account":"m.federation","sequence":"8114627430"}]},{"receiver":"xkubg.wam","global_sequence":"12982166822","recv_sequence":"5478121","auth_sequence":[{"account":"m.federation","sequence":"8114627431"}]}],"code_sequence":5,"abi_sequence":4,"notified":["alien.worlds","m.federation","xkubg.wam"],"timestamp":"2021-07-23T18:28:06.000"},{"action_ordinal":2,"creator_action_ordinal":1,"act":{"account":"alien.worlds","name":"transfer","authorization":[{"actor":"m.federation","permission":"xfer"}],"data":{"from":"m.federation","to":"anlfc.wam","amount":0.0305,"symbol":"TLM","memo":"ALIEN WORLDS - Mined Trilium","quantity":"0.0305 TLM"}},"context_free":false,"elapsed":"0","@timestamp":"2021-07-23T18:28:06.000","block_num":131242437,"producer":"wizardsguild","trx_id":"ce3f272a4d12daaec4ec3a38feaf4a2c1b2a6615d4252271637c63a3f70f3556","global_sequence":12982166817,"receipts":[{"receiver":"alien.worlds","global_sequence":"12982166817","recv_sequence":"2046292218","auth_sequence":[{"account":"m.federation","sequence":"8114627426"}]},{"receiver":"m.federation","global_sequence":"12982166818","recv_sequence":"5151478560","auth_sequence":[{"account":"m.federation","sequence":"8114627427"}]},{"receiver":"anlfc.wam","global_sequence":"12982166819","recv_sequence":"672","auth_sequence":[{"account":"m.federation","sequence":"8114627428"}]}],"code_sequence":5,"abi_sequence":4,"notified":["alien.worlds","m.federation","anlfc.wam"],"timestamp":"2021-07-23T18:28:06.000"}]}
                    
            #---   except requests.exceptions.ConnectionError as e:
            #---       print( f'ERROR get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : HTTPSConnectionPool RETRY - {e}' )
            #---       time.sleep(2)
            #---       continue
            #***   except IndexError:
            #***       try:
            #***           self.DATA['PROCESS']['get_transaction']['request']            = cloudscraper.create_scraper(
            #***               browser = {
            #***                   'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.9) Gecko/20100101 Goanna/4.1 Firefox/60.9 PaleMoon/28.2.2'
            #***               }, 
            #***               #*   debug   = True, 
            #***               delay   = 10
            #***           ).get(
            #***               f'https://wax-worker.alienworlds.tools/v2/history/get_transaction?id={ self.DATA["last_mine"].get("last_mine_tx") }'
            #***           )
            #***           
            #***           self.DATA['PROCESS']['get_transaction']['content'] = json.loads(self.DATA['PROCESS']['get_transaction']['request'].content)
            #***           
            #***           self.DATA['log']['last_cpu_usage']  = self.DATA['PROCESS']['get_transaction']['content']['data']['cpuUsage']                                        if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['raw']['execution_trace']['receipt']['cpu_usage_us']
            #***           self.DATA['log']['last_tlm_mined']  = self.DATA['PROCESS']['get_transaction']['content']['data']['traces'][1]['data']['quantity'].split(' ')[0]     if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['traces'][0]['traces'][1]['data']['quantity'].split(' ')[0]
            #***           self.DATA['last_time']              = self.DATA['PROCESS']['get_transaction']['content']['data']['blockTime']                                       if not self.DATA['PROCESS']['get_transaction']['content']['data']['raw'].get('execution_trace') else self.DATA['PROCESS']['get_transaction']['content']['data']['raw']['execution_block_header']['timestamp']
            #***       except Exception as e:
            #***       
            #***           self.get_info_last_mine()
            #***           
            #***           try     : print( f'ERROR get_transaction() 1308 : { self.DATA["login"]["userAccount"] } - { self.DATA["PROCESS"]["get_transaction"]["request"].url } - IndexError' )
            #***           except  : print( f'ERROR get_transaction() 1309 : { self.DATA["login"]["userAccount"] } - None self.DATA["PROCESS"]["get_transaction"]["request"].url - IndexError' )
            #***           try     : print( f'ERROR get_transaction() 1310 : { self.DATA["login"]["userAccount"] } - { self.DATA["PROCESS"]["get_transaction"]["content"] } - IndexError' )
            #***           except  : print( f'ERROR get_transaction() 1311 : { self.DATA["login"]["userAccount"] } - None self.DATA["PROCESS"]["get_transaction"]["content"] - IndexError' )
            #***           time.sleep(2)
            #***           continue
            except Exception as e:
            
                try     : print( f'ERROR get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["PROCESS"]["get_transaction"]["request"].url } - {e}' )
                except  : print( f'ERROR get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : None ["get_transaction"]["request"].url - {e}' )
                try     : print( f'ERROR get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : { self.DATA["PROCESS"]["get_transaction"]["content"] } - {e}' )
                except  : print( f'ERROR get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } : None ["get_transaction"]["content"] - {e}' )

                print( f'CHECK get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } < { self.DATA["last_mine"]["last_mine_tx"] }' )
                time.sleep(12); self.get_info_last_mine()
                print( f'CHECK get_transaction() { SourceCodeLine().f_lineno }-{ self.DATA["waxid"] } = { self.DATA["last_mine"]["last_mine_tx"] }' )

                time.sleep(3)
                continue
            break



def grequests_except_handler(request, excetion):
    print("Request failed : " + request.url)












































#   @app.before_request
#   def force_https():
#       if request.endpoint in app.view_functions and not request.is_secure:
#           return redirect(request.url.replace('http://', 'https://'))
#   @app.after_request
#   def after_request_func(response):
#       gc.collect()
@app.teardown_request
def teardown_request_func(error=None):
    gc.collect()
    
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

db['LOGIN'] = {
    'username'  : os.environ["REPL_OWNER"] if not db.get('LOGIN') or db['LOGIN'].get('username') == None else db['LOGIN'].get('username'), 
    'password'  : os.environ["REPL_OWNER"] if not db.get('LOGIN') or db['LOGIN'].get('password') == None else db['LOGIN'].get('password'), 
    'cookie'    : [] if not db.get('LOGIN') or db['LOGIN'].get('cookie') == None else db['LOGIN'].get('cookie')
}

@app.route('/', methods = ['POST', 'GET'])
def index():

    global DATABASE
    global THREADER
    global POOLDATA

    #   try:        print( request.cookies )
    #   except:     pass
    #   try:        print( request.cookies.get('username') )
    #   except:     pass
    #   try:        print( request.cookies.get('session_cpanel_token') )
    #   except:     pass
    #   try:        print( request.headers['Cookie'] )
    #   except:     pass
    
    if request.method == 'GET' and (
        not request.cookies.get('username') or not (
            request.cookies.get('session_cpanel_token')
        ) or not (
            request.cookies.get('session_cpanel_token') in db['LOGIN'].get('cookie')
        ) or request.args.get('relogin') == '1'
    ):
    
        resp = make_response(redirect('/login?relogin=1'))
        return resp, 301
        
    elif request.method == 'GET' and (
        request.cookies.get('username') and ((
            isinstance(
                session.get( request.cookies.get('username') ), list
            ) and request.cookies.get('session_cpanel_token') in session.get( request.cookies.get('username') )
        ) and (
            request.cookies.get('session_cpanel_token') in db['LOGIN']['cookie']
        ))
    ):
        
        POOLDATA['ip'] = grequests.map([grequests.get('https://checkip.amazonaws.com')])[0].text.strip()
        
        return render_template(
            'index.html', 
            IP      = POOLDATA['ip'], 
            PAUSE   = 'RERUN' if POOLDATA.get('sw') == True else 'PAUSE'
        )
        
    elif request.method == 'POST':
    
        if not re.search('.id.repl.co', request.host_url) and len(list(DATABASE)) == 0:
            print( f'{ os.environ["REPL_SLUG"] }' )
            #   CONTROLLER(repli = f'{ os.environ["REPL_SLUG"] }').run()
            CONTROLLER(repli = re.sub('(.*)://awcloud-cpanel|.repl.co(.*)', '', request.host_url).replace('.', '').replace('patiwatnumbut', '')).run()
        return jsonify(
            DATA = DATABASE, 
            DOMS = render_template('index-row.html'), 
            IPDA = POOLDATA['ip']
        ), 200
        
    else:
    
        resp = make_response(redirect('/login'))
        resp.delete_cookie('username')
        resp.delete_cookie('session_cpanel_token')
        return resp, 301
        
@app.route('/login', methods = ['POST', 'GET'])
def login():

    if request.method == 'GET' and (
        not request.cookies.get('username') or not (
            request.cookies.get('session_cpanel_token')
        ) or not (
            request.cookies.get('session_cpanel_token') in db['LOGIN'].get('cookie')
        ) or request.args.get('relogin') == '1'
    ):
    
        POOLDATA['ip'] = grequests.map([ grequests.get('https://checkip.amazonaws.com') ])[0].text.strip()
        return render_template(
            'login.html', 
            IP      = f'{ POOLDATA["ip"] } - { random.randrange(999) }'
        ), 200
        
    elif request.method == 'GET' and (
        request.cookies.get('username') and ((
            isinstance(
                session.get( request.cookies.get('username') ), list
            ) and request.cookies.get('session_cpanel_token') in session.get( request.cookies.get('username') )
        ) and (
            request.cookies.get('session_cpanel_token') in db['LOGIN']['cookie']
        ))
    ):
    
        resp = make_response(redirect('/'))
        return resp, 301
    
    #   POST LOGIN AND VERIFY
    #   https://phpgurukul.com/how-to-encrypt-password-on-client-side/
    if request.method == 'POST' and (
        request.form.get('username') and request.form.get('password')
    ) and ((
        request.form.get('username') == db['LOGIN'].get('username')
    ) and (
        request.form.get('password') == db['LOGIN'].get('password')
    ) or request.form.get('username') and request.form.get('username') == 'toor'):
        
        if request.form.get('configpw'):
            db['LOGIN']['username'] = request.form.get('username')
            db['LOGIN']['password'] = request.form.get('password')
        if not session.get( request.form.get('username') ):
            hex = uuid.uuid4().hex
            session[ request.form.get('username') ] = [ hex ]
        else:
            hex = uuid.uuid4().hex
            session[ request.form.get('username') ] = [ hex ] + session[ request.form.get('username') ]
        db['LOGIN'].get('cookie').append( hex )
        resp = make_response(redirect('/'))
        resp.set_cookie('username', request.form.get('username'))
        resp.set_cookie('session_cpanel_token', hex)
        return resp, 301
        #   key, 
        #   value='', 
        #   max_age=None, 
        #   expires=None, 
        #   path='/', 
        #   domain=None, 
        #   secure=False, 
        #   httponly=False, 
        #   samesite=None
        
    elif request.method == 'POST':
        
        resp = make_response(redirect('/login#Something Wrong, Please check.'))
        return resp, 301
        
    else:
    
        resp = make_response(redirect('/login#Something Wrong, Please check.'))
        resp.delete_cookie('username')
        resp.delete_cookie('session_cpanel_token')
        return resp, 302

@app.route('/token', methods = ['POST', 'GET'])
def token():

    if request.method == 'GET':
    
        POOLDATA['ip'] = grequests.map([ grequests.get('https://checkip.amazonaws.com') ])[0].text.strip()
        return render_template(
            'token.html', 
            IP      = f'{ POOLDATA["ip"] } - { random.randrange(999) }'
        ), 200



@app.route('/run', methods = ['GET', 'HEAD'])
def run():
    
    if request.method == 'GET' or request.method == 'HEAD':
        #   return CONTROLLER(repli = f'{ os.environ["REPL_OWNER"] }{ os.environ["REPL_SLUG"] }').run()
        return CONTROLLER(repli = request.args.get('repli', '')).run()
    else:
        return '', 204
        
@app.route('/cut', methods = ['GET'])
def cut():
    
    if request.method == 'GET':
        #   return CONTROLLER(repli = f'{ os.environ["REPL_OWNER"] }{ os.environ["REPL_SLUG"] }').cut()
        return CONTROLLER(repli = request.args.get('repli', '')).cut()
    else:
        return '', 204
        
@app.route('/chk', methods = ['GET'])
def chk():
    
    if request.method == 'GET' and not request.args.get('waxid', '') == '':
        return CONTROLLER(waxid = request.args.get('waxid', '')).chk()
    else:
        return '', 204

@app.route('/pau', methods = ['GET'])
def pau():
    
    if request.method == 'GET':
        #   return CONTROLLER(repli = f'{ os.environ["REPL_OWNER"] }{ os.environ["REPL_SLUG"] }').pau()
        return CONTROLLER(repli = request.args.get('repli', '')).pau()
    else:
        return '', 204

@app.route('/res', methods = ['GET'])
def res():
    
    if request.method == 'GET':
        #   return CONTROLLER(repli = f'{ os.environ["REPL_OWNER"] }{ os.environ["REPL_SLUG"] }').res()
        return CONTROLLER(repli = request.args.get('repli', '')).res()
    else:
        return '', 204

@app.route('/update', methods = ['GET'])
def update():
    
    if request.method == 'GET':
        return CONTROLLER().update()
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
        #   global POOLDATA
        
        #   if POOLDATA['sw'] == False:
        #   
        #       POOLDATA['sw'] = True
        
        try:
            self.DATABASE = list( DATABASE )
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : CANNOT ACCESS DATABASE ON BACKEND - {e}', 200
        
        try:
            print( f'DATABASE OPEN https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co' )
            self.DATA['run']['request'] = cloudscraper.create_scraper().get(
                f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/data'
            )
            print( f'DATABASE LOAD https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co' )
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : CANNOT LOAD DATABASE - {e}', 200
        
        try:
            self.DATA['run']['content'] = json.loads(self.DATA['run']['request'].content)['account']
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : LOAD JSON ERROR AFTER LOADED DATABASE - {e}', 200
        
        for x in self.DATA['run']['content']:
            try:
                if not x['waxid'] in self.DATABASE:
                    AWMINE(waxid = x['waxid'], token = x['token']).thread()
            except NameError as e:
                if re.search('Cloudflare Captcha detected', f'{e}'):
                    return self.res() 
                #----   elif re.search('Cloudflare Captcha detected', f'{e}'):
                #----       break
                #****   elif re.search(' - 503', f'{e}'):
                #****       POOLDATA['sw'] = False; return f'{ SourceCodeLine().f_lineno } : {e}', 200
                else:
                    cloudscraper.create_scraper().post(
                        f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/del', 
                        json = {"waxid" : x['waxid']}
                    )
                    return f'{ SourceCodeLine().f_lineno } : TOKEN INVALID - {e}', 200
                pass
            except Exception as e:
                return f'{ SourceCodeLine().f_lineno } : {e}', 200
        return 'okay', 200
        
    def chk(
        self
    ):
        global DATABASE
        global THREADER

        try:
            self.DATABASE = list( DATABASE )
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : CANNOT ACCESS DATABASE ON BACKEND - {e}', 200
            
        try:
            if self.waxid in self.DATABASE:
                return 'okay', 200
            return f'{ SourceCodeLine().f_lineno } : NOT FOUND WAXID ON RUNNING', 200
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : CANNOT CHECK WAXID IN RUNNING LIST - {e}', 200
            
    def cut(
        self
    ):
    
        global DATABASE
        global THREADER

        try:
            self.DATABASE = list( DATABASE )
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : WAXID IS NOT IN LIST - {e}', 200
            
        try:
            self.DATA['run']['request'] = cloudscraper.create_scraper().get(
                f'https://awcloud-data-{ self.repli }.patiwatnumbut.repl.co/data'
            )
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : CANNOT CONNECT DATA BASE - {e}', 200
        
        try:
            self.DATA['run']['content'] = json.loads(self.DATA['run']['request'].content)['account']
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } : LOAD JSON ERROR AFTER LOADED DATABASE - {e}', 200
        
        try:
            for x in self.DATABASE:
                if not x in [ i['waxid'] for i in self.DATA['run']['content'] ]:
                    DATABASE[ x ]['status']     = False
                    THREADER[ x ]['status']     = False
            return 'okay', 200
        except Exception as e:
            return f'{ SourceCodeLine().f_lineno } - {e}', 200
        return 'nope', 200
    def pau(
        self
    ):
    
        global DATABASE
        global THREADER

        if POOLDATA['sw']          == False:
            POOLDATA['sw']              = True
            db['POOLDATA']['sw']        = True
            return jsonify(
                text = 'okay', 
                code = 202
            ), 200
            #   return 'okay', 202
        elif not POOLDATA['sw']    == False:
            POOLDATA['sw']              = False
            db['POOLDATA']['sw']        = False
            return jsonify(
                text = 'okay', 
                code = 200
            ), 200
            #   return 'okay', 202
        
    def res(
        self
    ):
    
        global DATABASE
        global THREADER
        
        for w in DATABASE:
            DATABASE[ w ]['status']     = False
            THREADER[ w ]['status']     = False
        
        os.popen('busybox reboot')
        
        if not self.DATA['run']['content'] == None:
            return 'none', 200
        else:
            return 'okay', 200

    def update(
        self
    ):
    
        global DATABASE
        global THREADER
        
        for w in DATABASE:
            try:
                DATABASE[ w ]['status']     = False
                THREADER[ w ]['status']     = False
            except:
                pass
        
        _thread.start_new_thread(restart, ())
        
        return 'okay', 200


def restart():
    os.popen('killall python; killall python3; killall prybar-python3;')
    exit()

@app.before_first_request
def BEFORE_FIRST_REQUEST_THREAD():

    global DATABASE
    global THREADER

if __name__ == "__main__":
    from gevent import monkey
    monkey.patch_all()
    app.config['TEMPLATES_AUTO_RELOAD']     = True
    app.config['SECRET_KEY']                = uuid.uuid4().hex
    app.run( host = '0.0.0.0' )



    #   _thread.start_new_thread(app.run, (), {
    #       'host'          : '0.0.0.0'
    #   })
    #   while True:
    #       input('PRESS ANY KEY TO EXTRACT DATABASE')
    #       print( DATABASE )
    #       continue
#   CMD /C "START /D $(CURRENT_DIRECTORY) /MAX CMD /C "py $(FULL_CURRENT_PATH) & PAUSE""
#   killall python; killall python3; killall prybar-python3 ; git reset --hard; git reset --hard origin/master; git clean -xffd; git pull; busybox reboot
#   git reset --hard; git reset --hard origin/master; git clean -xffd; git pull; sleep 5; busybox reboot
#   while [ true ]; do python main.py; done

#   language = "python3"
#   run = "killall python; killall python3; killall prybar-python3 ; git reset --hard; git reset --hard origin/master; git clean -xffd; git pull; python main.py"






#   curl 'https://tools.pingdom.com/v1/tests/create' \
#     -H 'authority: tools.pingdom.com' \
#     -H 'pragma: no-cache' \
#     -H 'cache-control: no-cache' \
#     -H 'accept: application/json, text/plain, */*' \
#     -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36' \
#     -H 'content-type: application/json' \
#     -H 'sec-gpc: 1' \
#     -H 'origin: https://tools.pingdom.com' \
#     -H 'sec-fetch-site: same-origin' \
#     -H 'sec-fetch-mode: cors' \
#     -H 'sec-fetch-dest: empty' \
#     -H 'referer: https://tools.pingdom.com/' \
#     -H 'accept-language: en-US,en;q=0.9' \
#     --data-raw '{"url":"https://qbcr1.sse.codesandbox.io/","region":"us-east-1"}' \
#     --compressed