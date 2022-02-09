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

os.popen("rm -f .git/index.lock; git fetch --all; git reset --hard; git reset --hard origin/master; git stash save ''; git pull --force; ")