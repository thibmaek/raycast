#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Today
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📆
# @raycast.packageName Returns today's date & time

# Documentation:
# @raycast.description Returns today's date & time
# @raycast.author Thibault Maekelbergh
# @raycast.authorURL https://github.com/thibmaek

echo -n "$(date +'%a, %d %b %Y (%H:%M)')"
