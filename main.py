import os
import re
import sys
import glob
import time
import json
import pytz
import uuid
import base64
import random
import logging
import _thread
import datetime
import resource
#   import requests
import grequests
import collections
#   https://pypi.org/project/cloudscraper/
import cloudscraper
from replit import db
from cryptography.fernet import Fernet
from inspect import currentframe as SourceCodeLine
from flask import Flask, json, jsonify, request, redirect, session, send_from_directory, Response, make_response, render_template
import gc

timedate = datetime.datetime
timezone = pytz.timezone




#   app = Flask(
#       __name__, 
#       static_url_path = '', 
#       static_folder   = 'static',
#       template_folder = 'templates'
#   )
#   
#   
#   
#   if __name__ == "__main__":
#       app.config['TEMPLATES_AUTO_RELOAD']     = True
#       app.config['SECRET_KEY']                = uuid.uuid4().hex
#       app.run( host = '0.0.0.0' )

#   import awcloud