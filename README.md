## Cookie business calculator

#### Scope:

This project uses a random number generator to calculate cookie sales and display them to the intended interface.

#### Interface

 This project used index.html as the intended interface.

### JS functions

	* randInt(min, max); Returns a random Int. It is called by other functions and has global Scope
	* CookieStand(storeName, minCst, maxCst, avgPer) creates objs to represent the stores. see more below
	* CookieStand.getCustomers() returns randInt() using obj vars
	* CookieStand.getSales() returns total cookies sold using obj vars

### CookieStand(storeName, minCst, maxCst, avgPer) object contructor

This object constructor creates CookieStand objects with the supplied inputs. After creation the objects must be added to storeArray[] with:

		* storeArray.push(<NEW OBJECT NAME>);

CookieStand Has 2 prototype methods that must run in order to work properly.

		* CookieStand.prototype.getCustomers creates a random customer count based on obj data
		* CookieStand.prototype.getSales calculates the number of total cookies stored based on the last .getCustomers

### storeArray

This array contains all of the pre-created objects and any added afterwords.

	storeArray[index].methods is the intended method of access to the randomly generated store data.
