let persona = {
    //Propiedades del Objeto
    name: "John",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["reading", "hiking", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    //Método
    saludar(){
        console.log("Hola, soy " + this.name);
    }
}

console.log(persona.address.city);
persona.email = "correo@correo.com";
console.log(persona.email);
delete persona.age;
console.log(persona);
persona.saludar();
// console.log(this);
console.log("Hola Mundo");