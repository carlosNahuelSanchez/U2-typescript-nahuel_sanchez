class Car {
    make: string; // propiedad

    // Constructor: se ejecuta al crear un nuevo Car
    constructor(make: string) {
        this.make = make;
    }

    // Método que usa la propiedad make
    drive(): void {
        console.log(`Manejando ${this.make}`);
    }
}

// Uso:
const myCar = new Car("Toyota");
myCar.drive(); // Manejando un toyota