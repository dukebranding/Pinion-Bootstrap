var paragraph1 = "Born: Sapphi, Bo, Biff, Skitch, Crash, Archimedes";
var paragraph2 = "Died: Lolli, Aristotle, Bunkie";

function catNames(paragraph) {
	var delimiterChar = paragraph.indexOf(":");
	var nameString = paragraph.substring(delimiterChar, paragraph.length);
	var catArray = nameString.split(",");
	return (catArray);
}