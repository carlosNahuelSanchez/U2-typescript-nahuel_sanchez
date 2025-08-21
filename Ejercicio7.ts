class Car {
    make: string = "" // propiedad

    // Método que usa la propiedad make
    drive(): void {
        console.log(`Manejando ${this.make}`);
    }
}

// Uso:
const car = new Car();
car.make = "Toyota";
car.drive(); // Manejando Toyota