tell application "Adobe Illustrator"
	set user interaction level to never interact
	set ctr to count group items of layer 1 of current document
	repeat with i from ctr to 1 by -1
		set selection of current document to group item i of layer 1 of current document
		do script "ssIntersect" from "Slitscan" without dialogs
	end repeat
end tell
