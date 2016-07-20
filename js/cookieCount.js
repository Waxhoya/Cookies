// takes index int and returns hour strings
function whatTime(index) {
	if (index < 13) {return index+":00"}
	else { return (index-12)+":00 PM "}
}

// Returns a random number between min and max
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creates cookieStand objs to represent sales/store information
function CookieStand(storeName, minCst, maxCst, avgPer) {
	this.storeName = storeName;
	this.minCst = minCst;
	this.maxCst = maxCst;
	this.avgPer = avgPer;
	this.hourlyCustomer = 0;
}

CookieStand.prototype.getCustomers = function() {
	hourlyCustomer = randInt(this.minCst, this.maxCst);
	return hourlyCustomer;
}

CookieStand.prototype.getSales = function() {
	return Math.floor(hourlyCustomer*this.avgPer);
}

// Stores will be pushed here to be added the the table iteration
var storeArray = [];

//Populating array with known stores
var pioneerSquare = new CookieStand("Pioneer Square", 17, 88, 5.2);
var portlandAirport = new CookieStand("Portland Airport", 6, 24, 1.2);
var washingtonSquare = new CookieStand("Washington Square", 11, 38, 1.9);
var sellwood = new CookieStand("Sellwood", 20, 48, 3.3);
var pearlDistrict = new CookieStand("Pearl District", 3, 24, 2.6);
storeArray.push(pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict);

// iterate through all of the available cookieStand
function howIsDay(arrayOfStores) {
	for (var currentStore = 0; currentStore < arrayOfStores.length; currentStore++) {
		var howHour, dailyCookies, dailyCust; //howHour track each hour,  dailyCookies tracks total a day
		dailyCookies =0;
		dailyCust =0;

		document.write("<h3>"+arrayOfStores[currentStore].storeName+"</sh3><table><tr><br><th scope='col'>Time</th><th scope='col'>Cookies</th><th scope='col'>Customers</th></tr>");

		for (var hours = 10; hours < 18; hours++) {
			howHour = arrayOfStores[currentStore].getCustomers()
			qtyCookie = arrayOfStores[currentStore].getSales()
			document.write("<tr><td>"+whatTime(hours)+"</td><td>"+qtyCookie+"</td><td>"+howHour+"</td></tr>");
			dailyCust += howHour;
			dailyCookies += qtyCookie;
		}

		document.write("<tr><td>Day Total</td><td>"+dailyCookies+"</td><td>"+dailyCust+"</td></tr></table><br>");
	}
	document.write("<button onclick='howIsDay(storeArray)'>Run The Daily Report</button>");
}
