import os
import pytz
import datetime
import gc

timedate = datetime.datetime
timezone = pytz.timezone

os.popen("rm -f .git/index.lock; git fetch --all; git reset --hard; git reset --hard origin/master; git stash save ''; git pull --force; ")