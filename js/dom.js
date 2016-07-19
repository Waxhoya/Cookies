

function dayTable(arrayOfStores) {

	for (var currentStore = 0; currentStore < arrayOfStores.length; currentStore++) {
		var howHour, dailyCookies, dailyCust; //howHour track each hour,  dailyCookies tracks total a day
		dailyCookies =0;
		dailyCust =0;

		var newTable = document.createElement("TABLE");
		var table = document.getElementById("cookieDOM");
		var newRow = table.insertRow(currentStore);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);

		for (var hours = 10; hours < 18; hours++) {
			newRow
			console.log(hours+arrayOfStores[currentStore])
			howHour = arrayOfStores[currentStore].getCustomers();
			qtyCookie = arrayOfStores[currentStore].getSales();
			cell1.innerHTML = whatTime(hours);
			cell2.innerHTML = qtyCookie;
			cell3.innerHTML = howHour;
			dailyCust += howHour;
			dailyCookies += qtyCookie;
		}


	}

}
