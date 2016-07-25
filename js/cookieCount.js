
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
