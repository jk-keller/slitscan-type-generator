Slitscan-Type
=============

Illustrator scripts to generate type

<p>I created an Illustrator script that types a letter (in this case, 'J' &#038; 'K') using every font installed on a computer. It aligns all the letters and then cuts slices out of each letter based on width.</p>

<h3>If you'd like to try this on your computer:</h3>

<p><strong>Pre-requisites:</strong></p>
<ol class="olABC">
	<li>Adobe Illustrator</li>
	<li>Some patience (amount depends on size of font collection)</li>
	<li>Acceptance that this may produce an error and not work for you the first time</li>
</ol>

<p><strong>How to use the Slitscan type generator (as verbosely as I can think) :</strong></p>
<ol class="olDecimal">
	<li>Download & extract the archive. Archive contains 3 files: a javascript file (.jsx), an AppleScript file (.scpt) and an actions file (.aia).</li>
	<li>Open Illustrator</li>
	<li>Open the '<em>Actions</em>' palette</li>
	<li>In the '<em>Actions</em>' palette, open the dropdown menu and select '<em>Load Actions...</em>'.</li>
	<li>Navigate to the actions file titled '<em>Slitscan_Type.aia</em>' and select it. You should now have an action set titled '<em>Slitscan</em>' with an action titled '<em>ssIntersect</em>'.</li>
	<li>Go to the '<em>File</em>' Menu and choose '<em>Scripts</em>' >> '<em>Other Scripts&#8230;</em>'</li>
	<li>Navigate to the javascript file titled '<em>Slitscan_Type.jsx</em>' and select it.</li>
	<li><strong>Wait</strong></li>
	<li>When an alert pops up telling you how many fonts Illustrator thinks you have, click '<em>OK</em>'</li>
	<li>There will be two files that remain open in Illustrator; Go to the '<em>View</em>' menu and select '<em>Preview</em>' for both documents.</li>
	<li>Go to the '<em>File</em>' Menu and choose '<em>Scripts</em>' >> '<em>Other Scripts&#8230;</em>'</li>
	<li>Navigate to the AppleScript file titled '<em>Slitscan_Type-Cut-CS6.scpt</em>' and select it.</li>
	<li><strong>Wait, but keep an eye on it.</strong></li>
	<li><strong>If the dialog "The filter produced no results. Please select two intersecting paths." appears, click 'OK'.</strong> Waiting too long to click 'OK' will timeout the AppleScript.</li>
	<li>Save the files. Always save your files.
	<li>Navigate to your home folder or do a search for '<em>Slitscan</em>'</li>
	<li>There should be two files with the prefix '<em>Slitscan-</em>' in your home folder</li>
</ol>
