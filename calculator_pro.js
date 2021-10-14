function calculatorPro() {
  let newNumber;
  let numberList = [];
  let resultadoFinal = 0;

  do {
    newNumber = parseFloat(prompt("Enter a number or press cancel to stop"));

    if (isNaN(newNumber)) {
      alert("Valor introducido inválido");
      newNumber = parseFloat(prompt("Enter a number or press cancel to stop"));
    }

    if (!isNaN(newNumber)) {
      numberList.push(newNumber);
    }
  } while (!isNaN(newNumber));

  for (let index = 1; index < numberList.length; index++) {
    let element = numberList[index];
    resultadoFinal = resultadoFinal + element;
  }

  if (numberList.length === 1) {
    console.log(
      `La raiz cuadrada de ${numberList[0]} es: ${Math.sqrt(numberList[0])}`
    );
  } else {
    let sum = numberList[0];
    let res = numberList[0];
    let mul = numberList[0];
    let div = numberList[0];

    for (let i = 1; i < numberList.length; i++) {
      sum += numberList[i];
      res -= numberList[i];
      mul *= numberList[i];
      div /= numberList[i];
    }
    console.log(`los resultados de ${numberList}: el resultado de la suma es ${sum.toFixed(
      3
    )},
    el resultado de la resta es: ${res.toFixed(3)},
    el resultado de la multiplicacion es: ${mul.toFixed(3)},
    el resultado de la division es: ${div.toFixed(3)}.`);
  }

  const continuar = confirm("¿Quiere continuar?");
  if (continuar == true) {
    calculatorPro();
  } else {
    console.log("¡Adios!");
  }
}

calculatorPro();
