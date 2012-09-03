// Slitscan Type Generator
// created by JK Keller - Dilettante Coder
// http://jk-keller.com/slitscan-type/
//
// This version:
// does not align the letterforms by the paths' bottom
// randomly colors each letterform
// asks what letters you want to do
//
// v1.1 - 2008-10-19 - Update for PostTypography request
//    Added prompt for letters
// v1.0 - 2006-03-26
//
// TO DO - A VERSION THAT ONLY COMPILES THE LETTERS TOGETHER WITH A LIST OF THE FONT NAMES SO YOU CAN SELECT THE ONES TO THEN
//         APPLY ANOTHER SCRIPT THAT SLICES THEM


// COMMENT NEXT THREE LINES
var ssBasics = new Array("J","K");
var ssLetters = "JK"

/* UNCOMMENT TO INPUT YOUR OWN LETTERS */
var ssLetters = prompt("What two letters would you like to do? (No space between) Please Be PATIENT...", "JK");
/*
if (ssLetters == "basic") {
	var ssBasics = new Array("`","1","2","3","4","5","6","7","8","9","0","-","=","q","w","e","r","t","y","u","i","o","p","[","]","\\","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",",".","/","~","!","@","#","$","%","^","&","*","(",")","_","+","Q","W","E","R","T","Y","U","I","O","P","{","}","|","A","S","D","F","G","H","J","K","L",":","\"","Z","X","C","V","B","N","M","<",">","?");
} else {
*/
	// TO DO - check for duplicate letters
	var ssBasics = ssLetters.split("");
/*
}
*/
for (i=0; i<ssBasics.length; i++) {
	ssSlitscan(ssBasics[i] );
}

alert("Thank You! According to Illustrator, you have "+textFonts.length+" fonts installed. Have a nice day!");

function ssSlitscan(aLetter) {
	// declare and initialize variables
	// TO DO - PC VS. MAC HOME FOLDER LOCATION?
	// TO DO - before making new file... check that the script will do something
	// TO DO - CAN I GET A FILE BROWSER TO SHOW UP?
	// TO DO - SPECIAL CHARACTER ESCAPING
	var ssFile = new File("~/Slitscan-"+aLetter+"-"+textFonts.length+".ai");
	var ssDoc = app.documents.add(DocumentColorSpace.RGB);
	var ssFonts = new Array();
	var ssFontNames = new Array(); // is this for error-checking????

	// cycle through all the fonts
	if (textFonts.length > 0) {
		for (var k=0; k<textFonts.length; k++) {
			// place the letter in the document
			var ssText = ssDoc.textFrames.add();
			ssText.contents = aLetter;
			ssText.textRange.characterAttributes.size = 300;
			ssText.textRange.characterAttributes.textFont = textFonts[k];

			// check for fonts that don't produce an outlineable letter
			try {
				// ssObj automatically is a group
				var ssObj = ssText.createOutline();
			} catch (e) {
				ssText.remove();
			};
			if (ssObj != undefined) {
				ssObj.name = k;
				ssObj.left = 306 - (ssObj.width/2.0);
				// error check: make sure there is actually a shape in ssObj
				if (ssObj.compoundPathItems.length <= 0) {
					ssObj.remove();
				} else {
					ssFonts.push(Array(ssObj, ssObj.width));
					ssFontNames.push(textFonts[k].name);
					//alert(textFonts[i].name);
				};
			};
		};
		// sort the list of widths from largest [0] to smallest [length]
		// from outer to inner
		ssFonts.sort(sortWidths);

		// declare and initialize variables used for overlay shapes
		var ssBaseIndex = 0;
		var ssBaseSliceWidth = (ssFonts[0][1]/2.0) / ssFonts.length;
		var ssRunningLeft = 306 - (ssFonts[0][1]/2.0);
		var ssRunningRight= 306 + (ssFonts[0][1]/2.0);


		for (var j=0; j<ssFonts.length; j++) {
			if (ssFonts.length > 1) {  // make sure there is more than one font
				if (j != 0) { // skip the first one???
					ssRunningLeft += ssBaseSliceWidth;
					ssRunningRight -= ssBaseSliceWidth;
					ssBaseSliceWidth = ssFonts[ssBaseIndex][1] / 2.0 / (ssFonts.length - ssBaseIndex);
				}
				// check if the difference between letters is bigger than slice
				if (j < ssFonts.length - 1) {
					if (ssRunningLeft + ssBaseSliceWidth < ssFonts[j+1][0].left) {
						ssBaseSliceWidth = ssFonts[j+1][0].left - ssRunningLeft;
						ssBaseIndex = j+1;
					}
				}
			}

			// add the shape to use the pathfinder with
			var ssPath = ssFonts[j][0].pathItems.add();
			var ssPathTop = ssFonts[j][0].top;
			var ssPathBottom = ssFonts[j][0].top - ssFonts[j][0].height;
			var ssPathLeft = ssFonts[j][0].left;
			var ssPathRight = ssFonts[j][0].left + ssFonts[j][0].width;
			ssPath.setEntirePath(Array(Array(ssRunningLeft, ssDoc.height), Array(ssRunningLeft + ssBaseSliceWidth, ssDoc.height), Array(ssRunningLeft + ssBaseSliceWidth, -500), Array(ssRunningRight - ssBaseSliceWidth, -500), Array(ssRunningRight - ssBaseSliceWidth, ssDoc.height), Array(ssRunningRight, ssDoc.height), Array(ssRunningRight, -600), Array(ssRunningLeft, -600)));
			ssPath.stroked = false;
			ssPath.filled = true;
			ssPath.closed = true;
			var ssFillColor = new RGBColor;
			// TO DO - COLOR CHOICES PROMPT
			ssFillColor.red = Math.ceil(Math.random()*254);
			ssFillColor.green = Math.ceil(Math.random()*254);
			ssFillColor.blue = Math.ceil(Math.random()*254);
			ssPath.fillColor = ssFillColor;
		};
	};
	ssDoc.saveAs(ssFile);
	if (ssLetters == "basic") {
		ssDoc.close();
	};
	ssDoc = null;
};


function sortWidths(a,b) {
	// Note that each thing we are passed is an array, so we don't compare the things
	// we're passed; instead, we compare their second column
	if (a[1]>b[1]) {
		return -1;
	}
	if (a[1]<b[1]) {
		return 1;
	}
	return 0;
}
