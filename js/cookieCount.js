
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cookieStand(minCst, maxCst, avgPer) {
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


var storeArray = [];

var pioneerSquare = new cookieStand(17, 88, 5.2);
storeArray.push('pioneerSquare');
var portlandAirport = new cookieStand(6, 24, 1.2);
storeArray.push('portlandAirport');
var washingtonSquare = new cookieStand(11, 38, 1.9);
storeArray.push('washingtonSquare');
var sellwood = new cookieStand(20, 48, 3.3);
storeArray.push('sellwood');
var pearlDistric = new cookieStand(3, 24, 2.6);
storeArray.push('pearlDistric');
