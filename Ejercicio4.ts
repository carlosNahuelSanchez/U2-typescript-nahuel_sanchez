
// Se crea una interfaz Person que define las propiedades firstName y lastName, este ultimo de forma opcional

interface Person {
    firstName: string;
    lastName?: string;
}

let person: Person = {
    firstName: "Nahuel"
};