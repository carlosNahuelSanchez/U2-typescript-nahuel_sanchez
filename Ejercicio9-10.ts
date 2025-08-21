class Car {
    private make: string; // propiedad privada

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`Manejando un ${this.make}`);
    }

    // Método getter explícito
    getMake(): string {
        return this.make;
    }
}

// Uso
const car = new Car("Toyota");
car.drive();
console.log(car.getMake()); // Toyota

class ElectricCar extends Car {
    private batteryLife: number; // propiedad adicional

    constructor(make: string, batteryLife: number) {
        super(make); // llamamos al constructor de Car
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log(
            `${this.getMake()} El coche esta cargando:  ${this.batteryLife}%`
        );
    }
}

// Uso
const tesla = new ElectricCar("Tesla", 100);
tesla.drive();
tesla.charge();
