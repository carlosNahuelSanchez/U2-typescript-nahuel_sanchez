function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hola Mundo")); 
console.log(identity<number>(18));