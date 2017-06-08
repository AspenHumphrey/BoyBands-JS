var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)

	var loopCount = bands.length;

for (var i = 0; i < loopCount; i++) {
	console.log(`${bands[i]} ${vegetables[i]}`);

var currentBand = bands[i];
var currentVeggie = vegetables[i];

	poop(currentBand, currentVeggie);
}

function poop(currentBand, currentVeggie) {
	var bandElement = document.getElementById("boy-bands");
	var newNewBandElement = document.createElement ("p");
	var newBandElement = document.createTextNode(currentBand);

	newNewBandElement.appendChild(newBandElement);

	var veggieElement = document.getElementById("vegetables");
	var newNewVeggieElement = document.createElement ("p");
	var newVeggieElement = document.createTextNode(currentVeggie);

	newNewVeggieElement.appendChild(newVeggieElement);

	bandElement.appendChild(newNewBandElement);

	veggieElement.appendChild(newNewVeggieElement);

}



 // Keep track of which band we're on in the loop
 //var currentBand = bands[i];

// Keep track of which veggie we're on in the loop
//var currentVeggie = vegetables[i];

// // Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById("boy-bands");

// // Get a reference to the appropriate DOM element for vegetables
// var veggieElement = document.getElementById("vegetables");

// // Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
//   // Add the band names into the correct <div>
//   currentBand = "";

  
//   // Add the veggie names into the correct <div>
//   currentVeggie = "";

// }