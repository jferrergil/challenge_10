let name = prompt("Introduzca su nombre");
let carton = [];
let turno = 0;
let aciertos = 0;

let linea1 = [];
let linea2 = [];
let linea3 = [];

// Funcion para generar los cartones

const cartones = () => {
  carton = [];
  for (let index = 0; index < 15; index++) {
    const element = {
      number: Math.floor(Math.random() * 99) + 1,
      matched: false,
    };
    carton.push(element);
  }
  // console.clear();
  console.table(carton);
  let pregunta = confirm("¿Desea otro carton?");
  if (pregunta) {
    cartones();
  }
};
cartones();

// Funcion para ejecutar el juego

function bingo() {
  turno += 1;
  let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
  for (let i = 0; i < carton.length; i++) {
    if (carton[i].number === numeroAleatorio) {
      console.log(carton);
      carton[i].number = "X";
      carton[i].matched = true;
      aciertos += 1;
    }
  }
  console.clear();
  console.table(carton);
  if (aciertos === carton.length) {
    alert("Has ganado!!!");
    let nextGame = confirm("otra partia?");
    if (nextGame) {
      cartones();
      turno = 0;
      aciertos = 0;

      bingo();
    } else {
      return alert("Hasta luego");
    }
  }

  for (let index = 0; index < carton.length; index++) {
    if (carton[index].matched) {
      if (index < 5) {
        linea1.numeros.push(carton[index]);
      } else if (index < 10) {
        linea2.numeros.push(carton[index]);
      } else {
        linea3.numeros.push(carton[index]);
      }
    }
    if (linea1.numeros.length === 5 && linea1.cantado === false) {
      alert(`LINEA!!`);
      linea1.cantado = true;
      linea2.cantado = true;
      linea3.cantado = true;
    }
    if (linea2.numeros.length === 5 && linea2.cantado === false) {
      alert(`LINEA!!`);
      linea1.cantado = true;
      linea2.cantado = true;
      linea3.cantado = true;
    }
    if (linea3.numeros.length === 5 && linea3.cantado === false) {
      alert(`LINEA!!`);
      linea1.cantado = true;
      linea2.cantado = true;
      linea3.cantado = true;
    }
  }

  let nexTourn = confirm(`¿Desea otro truno? Usted lleva ${turno} turnos`);

  if (nexTourn) {
    bingo();
  }
}
bingo();
