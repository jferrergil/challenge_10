let numero1;
let numero2;

function calculadora() {
  let numero1 = parseInt(prompt("Escriba el primer numero de la operacion:"));
  if (isNaN(numero1)) {
    alert("Introduzca un numero");
  }
  let numero2 = parseInt(prompt("Escriba el segundo numero"));
  if (isNaN(numero2)) {
    alert("Introduzca un numero");
  }

  if (isNaN(numero1) && isNaN(numero2)) {
    alert(`Tienes que introducir numeros`);
    return calculadora();
  } else if (isNaN(numero1)) {
    return console.log(
      `La raiz cuadrada de ${numero2} es: ${Math.sqrt(numero2).toFixed(3)}`
    );
  } else if (isNaN(numero2)) {
    return console.log(
      `La raiz cuadrada de ${numero1} es: ${Math.sqrt(numero1).toFixed(3)}`
    );
  }

  console.log(
    `El resultado de la suma de ${numero1} y ${numero2} es: ${(
      parseInt(numero1) + parseInt(numero2)
    ).toFixed(3)}`
  );
  console.log(
    `El resultado de la resta de ${numero1} y ${numero2} es: ${(
      parseInt(numero1) - parseInt(numero2)
    ).toFixed(3)}`
  );
  console.log(
    `El resultado de la multiplicación de ${numero1} y ${numero2} es: ${parseInt(
      numero1 * numero2
    ).toFixed(3)}`
  );
  console.log(
    `El resultado de la división de ${numero1} y ${numero2} es: ${(
      parseInt(numero1) / parseInt(numero2)
    ).toFixed(3)}`
  );
}

calculadora();
