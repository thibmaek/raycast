#!/usr/bin/env bash
set -e

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Toggle Wifi
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📡
# @raycast.packageName com.thibmaek.wifi

# Documentation:
# @raycast.description Quickly toggle wifi
# @raycast.author Thibault Maekelbergh
# @raycast.authorURL https://github.com/thibmaek

NET_IFACE=$(networksetup -listallhardwareports | grep -A 1 Wi-Fi | tail -n 1 | cut -b 9-12)

if networksetup -getairportpower "$NET_IFACE" | grep -q 'On'; then
  networksetup -setairportpower "$NET_IFACE" off
  echo "Wifi Off"
else
  networksetup -setairportpower "$NET_IFACE" on
  echo "Wifi On"
fi
