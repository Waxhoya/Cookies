
//Taken from MDN
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookieStand(minCst, maxCst, avgPer, ) {
	this.minCst = minCst;
	this.maxCst = maxCst;
	this.avgPer = avgPer;
	var lastProfit = "";
	function getCustomers() {
		lastProfit = randInt(minCst, maxCst);
		return lastSold
	}
	function getSales() {
		return lastSold*this.avgPer
	}
}

var pioneerSquare = new cookieStand(17, 88, 5.2);
var portlandAirport = new cookieStand(6, 24, 1.2);
var Washington Square = new cookieStand(11, 38, 1.9);
var Sellwood = new cookieStand(20, 48, 3.3);
var Pearl Distric = new cookieStand(3, 24, 2.6);
