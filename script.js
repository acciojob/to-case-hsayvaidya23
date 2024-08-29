function toCase(text) {
  // write your code here
	if(!text || text.length>0) {
		return "-";
	}
	text = text.trim();
	if(text.length === 0) {
		return "-";
	}
	return text.toLowerCase() "-" text.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
