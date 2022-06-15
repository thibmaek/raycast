#!/usr/bin/osascript

# @raycast.title Merge Finder windows
# @raycast.author Thibault Maekelbergh
# @raycast.authorURL https://thibmaek.com
# @raycast.description Merges all Finder windows together in one
# @raycast.schemaVersion 1

# @raycast.mode silent
# @raycast.packageName Finder

on run argv
	tell application "System Events"
		set frontApp to name of first application process whose frontmost is true
	end tell
	
	tell application frontApp
		activate
		tell application "System Events"
			tell process frontApp
				click menu item "Merge All Windows" of menu "Window" of menu bar 1
			end tell
		end tell
	end tell
end run