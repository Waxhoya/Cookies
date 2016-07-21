function dayTable(arrayOfStores) {
	// var newTable = document.createElement("TABLE");

	for (var currentStore = 0; currentStore < arrayOfStores.length; currentStore++) {
		var table = document.getElementById("cookieDOM");

		var howHour, dailyCookies, dailyCust; //howHour track each hour,  dailyCookies tracks total a day
		dailyCookies =0;
		dailyCust =0;


		for (var hours = 10; hours < 18; hours++) {

			newRow = table.insertRow(table.rows.length);
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);

			howHour = arrayOfStores[currentStore].getCustomers();
			qtyCookie = arrayOfStores[currentStore].getSales();

			cell1.innerText = arrayOfStores[currentStore].storeName+" at "+whatTime(hours);
			cell2.innerText = qtyCookie+" Cookies";
			cell3.innerText = howHour+" Customers";

			dailyCust += howHour;
			dailyCookies += qtyCookie;

			console.log(arrayOfStores[currentStore].storeName+": "+whatTime(hours)+" "+howHour+" "+qtyCookie)
		}

	}

}
