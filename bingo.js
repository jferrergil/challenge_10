let name = prompt("Introduzca su nombre");
let carton = [1, 2, 3, 4, 5];
let turno = 0;
let aciertos = 0;

console.table(carton);
function bingo() {
  turno += 1;
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < carton.length; i++) {
    if (carton[i] === numeroAleatorio) {
      carton.splice(i, 1, "X");
      aciertos += 1;
    }
  }
  console.clear();
  console.table(carton);
  if (aciertos === carton.length) {
    alert("Has ganado!!!");
    let nextGame = confirm("otra partia?");
    if (nextGame) {
      carton = [1, 2, 3, 4, 5];
      turno = 0;
      aciertos = 0;

      bingo();
    } else {
      return alert("Hasta luego");
    }
  }
  let nexTourn = confirm(`¿Desea otro truno? Usted lleva ${turno} turnos`);

  if (nexTourn) {
    bingo();
  }
}
bingo();
