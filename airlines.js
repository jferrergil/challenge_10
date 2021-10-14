let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


let nombre = prompt('Intruduzca su nombre: ');
if( nombre === ''){
    alert (`Bienveido a Skylab Airlines Desconocido`);
}else{
alert ( `Bienvenido a Skylab Airlines ${nombre}`);
console.log(`Bienvenido a Skylab Airlines  ${nombre}: `);
console.log(" ")
}
for ( let i = 0; i < flights.length; i++){
    if( flights[i].scale === false){
        console.log(`El vuelo con salida ${flights[i].to} y llegada a ${flights[i].from} con un precio de ${flights[i].cost} $ no realizada escala.`)
    }else{
        console.log(`El vuelo con salida ${flights[i].to} y llegada a ${flights[i].from} con un precio de ${flights[i].cost} $ realiza escala.`)
    };
}
console.log(" ");

//Coste medio

let costs = [];
for (let i = 0; i < flights.length; i++){
    let element = flights[i]
    costs.push(element.cost)
    
}


let total = 0;
for ( let i = 0; i < costs.length; i++){
    let cost = costs[i];
    total += cost
}
console.log(`El coste medio de los vuelos es de: ${(total / costs.length).toFixed(2)}`)
console.log(" ")


//Vuelos con escala
for(let i = 0; i < flights.length; i++){
    if ( flights[i].scale === true){
        console.log(`Vuelo con salida desde ${flights[i].to} y llegada a ${flights[i].from} realizan escala`)
    }
}

console.log(" ");
//Cinco ultimos vuelos 

for (let i = 5; i < flights.length; i++){
    console.log(`Vuelo con salida desde ${flights[i].to} y llegada a ${flights[i].from}`)
}






