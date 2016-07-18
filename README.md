## Cookie business calculator

#### Scope:

This project uses a random number generator to calculate cookie sales and display them to the intended interface.

#### Interface

 This project used index.html as the intended interface.

#### JS functions

	* randInt(min, max); Returns a random Int. It is called by other functions and has global Scope
	* cookieStand(storeName, minCst, maxCst, avgPer) creates objs to represent the stores. see more below
	* cookieStand.getCustomers() returns randInt() using obj vars
	* cookieStand.getSales() returns total cookies sold using obj vars

#### cookieStand(storeName, minCst, maxCst, avgPer)

	This object constructor creates cookieStand objects with the supplied inputs. After creation the objects must be added to storeArray[] with:

		* storeArray.push(<NEW OBJECT NAME>);

	cookieStand Has 2 prototype methods that must run in order to work properly.

		* cookieStand.prototype.getCustomers creates a random customer count based on obj data
		* cookieStand.prototype.getSales calculates the number of total cookies stored based on the last .getCustomers

#### storeArray

	This array contains all of the pre-created objects and any added afterwords.

	storeArray[index].methods is the intended method of access to the randomly generated store data.
