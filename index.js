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

class Menu {
    constructor() {
        this.collections = [];
        this.selectedCollection = null;
    }

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

    showMainMenuOptions() {
        return prompt(`
            1.) Create Collection
            2.) View Collection
            3.) Delete Collection
            4.) Display All Collections
            5.) Exit
        `);
    }

    showCollectionMenuOptions(collectionInfo) {
        return prompt(`
            1.) Add Car
            2.) Remove Car
            -------------------------
            ${collectionInfo}
        `);
    }

    displayCollections() {
        let collectionString = "";
        for (let i = 0; i < this.collections.length; i++) {
            collectionString += i + ") " + this.collections[i].name + "\n";
        }
        alert(collectionString);
    }

    createCollection() {
        let name = prompt("Enter name for new collection:");
        this.collections.push(new CarCollection(name));
    }

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

let menu = new Menu();
menu.start();