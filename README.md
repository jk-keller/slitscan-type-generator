# Slitscan-Type #
=============

Illustrator scripts to generate type

For more info & results: [Slitscan Type Generator](http://www.c71123.com/archive-2010/slitscan/)
And feel free to send me results/issues!

* * * *

### If you'd like to try this on your computer: ###

**Pre-requisites:**
- Adobe Illustrator (this version only tested on CS6)
- Some patience (amount depends on size of font collection)
- Acceptance that this may produce an error and not work for you the first time

**How to use the Slitscan type generator (as verbosely as I can think):**
. Download & extract the archive. Archive contains: Read me, a javascript file (.jsx), two AppleScript files (.scpt & .applescript) and an actions file (.aia).
. Open Illustrator
. Open the `Actions` palette
. In the `Actions` palette, open the dropdown menu and select `Load Actions...`.
. Navigate to the actions file titled `Slitscan_Type.aia` and select it. You should now have an action set titled `Slitscan` with an action titled `ssIntersect`.
. Go to the `File` Menu and choose `Scripts` >> `Other Scripts&#8230;`
. Navigate to the javascript file titled `Slitscan_Type.jsx` and select it.
. <strong>Wait...</strong>
. When an alert pops up telling you how many fonts Illustrator thinks you have, click `OK`
. There will be two files that remain open in Illustrator; Go to the `View` menu and select `Preview` for both documents.
. Go to the `File` Menu and choose `Scripts` >> `Other Scripts&#8230;`
. Navigate to the AppleScript file titled `Slitscan_Type.scpt` and select it.
. <strong>Wait...</strong>
. There may be a few letters that do not get sliced because the pathfinder tool produced "no results". These should OK to delete.
. Save the files. Always save your files.
. Navigate to your home folder or do a search for `Slitscan`
. There should be two files with the prefix `Slitscan-` in your home folder</li>
