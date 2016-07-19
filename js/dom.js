

function dayTable(arrayOfStores) {

	for (var currentStore = 0; currentStore < arrayOfStores.length; currentStore++) {
		var howHour, dailyCookies, dailyCust; //howHour track each hour,  dailyCookies tracks total a day
		dailyCookies =0;
		dailyCust =0;
		howHour=0;

		var newTable = document.createElement("TABLE");
		var table = document.getElementById("cookieDOM");
		var newRow = table.insertRow(currentStore);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);

		cell1.innerText = "Time";
		cell2.innerText = "Cookies";
		cell3.innerText = "Customers";

		for (var hours = 10; hours < 18; hours++) {
			howHour = arrayOfStores[currentStore].getCustomers();
			qtyCookie = arrayOfStores[currentStore].getSales();
			console.log(arrayOfStores[currentStore].storeName+": "+whatTime(hours)+" "+howHour+" "+qtyCookie)
			cell1.appendChild = whatTime(hours);
			cell2.appendChild = qtyCookie;
			cell3.appendChild = howHour;
			dailyCust += howHour;
			dailyCookies += qtyCookie;
		}

	}

}
