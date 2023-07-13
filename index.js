        // WEEK-05-ASSIGNMENT //
        // I created a class named "cars" and wrote my constructor with 3 
        // propeties make,model,year an then used the decribe method to return
        //  my propeties using the templents

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
    //  Next Class i used is called Carcollection with the propertie name
    //  then i have my addcar with an if function with th same describe Method.

class CarCollection {
    constructor(name) {
        this.name = name;
        this.cars = [];
    }

    addCar(car) {
        if (car instanceof Car) {
            this.cars.push(car);
        } else {
            throw new Error(`You can only add an instance of Car. Argument is not a Car: ${car}`);
        }
    }

    describe() {
        return `${this.name} has ${this.cars.length} cars.`;
    }
}

    //  Classed named menu with or constructor for our car collections.

class Menu {
    constructor() {
        this.collections = [];
        this.selectedCollection = null;
    }

    // next is our menu options with a while function along with our switch and
    // break method to use the create,view delete and with a display of 
    // the collections with an alert saying goodbye for our exit.
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createCollection();
                    break;
                case "2":
                    this.viewCollection();
                    break;
                case "3":
                    this.deleteCollection();
                    break;
                case "4":
                    this.displayCollections();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }
    // This is the how the menu will display on the alert of our browser
    showMainMenuOptions() {
        return prompt(`
            1.) Create Collection
            2.) View Collection
            3.) Delete Collection
            4.) Display All Collections
            5.) Exit
        `);
    }
//   This part will show once we input the number 2.) view collection option.
    showCollectionMenuOptions(collectionInfo) {
        return prompt(`
            1.) Add Car
            2.) Remove Car
            -------------------------
            ${collectionInfo}
        `);
    }
//  for loop for out car display
    displayCollections() {
        let collectionString = "";
        for (let i = 0; i < this.collections.length; i++) {
            collectionString += i + ") " + this.collections[i].name + "\n";
        }
        alert(collectionString);
    }
//  this will let us create a name for our collection
    createCollection() {
        let name = prompt("Enter name for new collection:");
        this.collections.push(new CarCollection(name));
    }
// viewing the collection with a for loop and it with count the collections by
 //the index lenght. and show if we want to delete a car or add a new one to that
  //collection
    viewCollection() {
        let index = prompt("Enter the index of the collection you wish to view:");
        if (index > -1 && index < this.collections.length) {
            this.selectedCollection = this.collections[index];
            let description = "Collection Name: " + this.selectedCollection.name + "\n";

            for (let i = 0; i < this.selectedCollection.cars.length; i++) {
                description += i + ") " + this.selectedCollection.cars[i].describe() + "\n";
            }

            let selection = this.showCollectionMenuOptions(description);
            switch (selection) {
                case "1":
                    this.createCar();
                    break;
                case "2":
                    this.deleteCar();
                    break;
                default:
                    break;
            }
        }
    }

    //  these three are little the same but these will also let us navigate our car menu 
    //in the browser like the createcar one it askes use to input names for our properties 
    // make, model, year of the car. and for the deletecar one i used the splice so it would
     //let us delete a car by removing it by its index number.
    deleteCollection() {
        let index = prompt("Enter the index of the collection you wish to delete:");
        if (index > -1 && index < this.collections.length) {
            this.collections.splice(index, 1);
        }
    }

    createCar() {
        let make = prompt("Enter car make:");
        let model = prompt("Enter car model:");
        let year = prompt("Enter car year:");
        this.selectedCollection.cars.push(new Car(make, model, year));

    }

    deleteCar() {
        let index = prompt("Enter the index of the car you wish to delete:");
        if (index > -1 && index < this.selectedCollection.cars.length) {
            this.selectedCollection.cars.splice(index, 1);
        }
    }
}

// lastly we invoke the code 


let menu = new Menu();
menu.start();

// class Makeup {
//     constructor(brand, product, year) {
//         this.brand = brand;
//         this.product = product;
//         this.year = year;
//     }

//     describe() {
//         return `${this.year} ${this.brand} ${this.product}`;
//     }
// }


// class MakeupCollection {
//     constructor(name) {
//         this.name = name;
//         this.makeups = [];
//     }

//     addMakeup(makeup) {
//         if (makeup instanceof Makeup) {
//             this.makeups.push(makeup);
//         } else {
//             throw new Error(`You can only add an instance of Makeup. Argument is not a Makeup: ${makeup}`);
//         }
//     }

//     describe() {
//         return `${this.name} has ${this.makeups.length} makeup items.`;
//     }
// }


// class Menu {
//     constructor() {
//         this.makeups = [];
//         this.selectedMakeup = null;
//     }

//     start() {
//         let selection = this.showMainMenuOptions();
//         while (selection != 0) {
//             switch (selection) {
//                 case "1":
//                     this.createMakeup();
//                     break;
//                 case "2":
//                     this.viewMakeup();
//                     break;
//                 case "3":
//                     this.deleteMakeup();
//                     break;
//                 case "4":
//                     this.displayMakeups();
//                     break;
//                 default:
//                     selection = 0;
//             }
//             selection = this.showMainMenuOptions();
//         }
//         alert("Goodbye!");
//     }

//     showMainMenuOptions() {
//         return prompt(`
//             1.) Create Makeup
//             2.) View Makeup
//             3.) Delete Makeup
//             4.) Display All Makeup
//             5.) Exit
//         `);
//     }

//     showMakeupMenuOptions(makeupInfo) {
//         return prompt(`
//             1.) Add Makeup
//             2.) Remove Makeup
//             -------------------------
//             ${makeupInfo}
//         `);
//     }


//     displayMakeups() {
//         let makeupString = "";
//         for (let i = 0; i < this.makeups.length; i++) {
//             makeupString += i + ") " + this.makeups[i].name + "\n";
//         }
//         alert(makeupString);
//     }

// createMakeup() {
//     let brand = prompt("Enter makeup brand:");
//     let product = prompt("Enter makeup product:");
//     let year = prompt("Enter makeup year:");
//     this.makeups.push(new Makeup(brand, product, year));
// }


//     viewMakeup() {
//         let index = prompt("Enter the index of the makeup you wish to view:");
//         if (index > -1 && index < this.makeups.length) {
//             this.selectedMakeup = this.makeups[index];
//             let description = "Makeup Name: " + this.selectedMakeup.name + "\n";
            
              

//             for (let i = 0; i < this.selectedMakeup.makeups.length; i++) {
//                 description += i + ") " + this.selectedMakeup.makeups[i].describe() + "\n";
//             }

//             let selection = this.showMakeupMenuOptions(description);
//             switch (selection) {
//                 case "1":
//                     this.createMakeup();
//                     break;
//                 case "2":
//                     this.deleteMakeup();
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }

//     deleteMakeup() {
//         let index = prompt("Enter the index of the collection you wish to delete:");
//         if (index > -1 && index < this.makeups.length) {
//             this.makeups.splice(index, 1);
//         }
//     }

// }


// let menu = new Menu();
// menu.start();
