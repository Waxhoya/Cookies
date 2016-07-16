// Returns a random number between min and max
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates cookieStand objs to represent sales/store information
function cookieStand(storeName, minCst, maxCst, avgPer) {
	this.storeName = storeName;
	this.minCst = minCst;
	this.maxCst = maxCst;
	this.avgPer = avgPer;
	var lastProfit = "";
	function getCustomers() {
		lastProfit = randInt(minCst, maxCst);
		return lastProfit;
	}
	function getSales() {
		return Math.floor(lastProfit*this.avgPer);
	}
}

// Stores will be pushed here to be added the the table iteration
var storeArray = [];

//Populating array with known stores
var pioneerSquare = new cookieStand("Pioneer Square" 17, 88, 5.2);
storeArray.push('pioneerSquare');
var portlandAirport = new cookieStand("Portland Airport", 6, 24, 1.2);
storeArray.push('portlandAirport');
var washingtonSquare = new cookieStand("Washington Square", 11, 38, 1.9);
storeArray.push('washingtonSquare');
var sellwood = new cookieStand("Sellwood", 20, 48, 3.3);
storeArray.push('sellwood');
var pearlDistric = new cookieStand("Pearl District", 3, 24, 2.6);
storeArray.push('pearlDistric');
