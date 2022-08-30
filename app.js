alert(
  "Bienvenidos a Mathfis Calculator, la aplicación web que te permitirá resolver tus problemas físicos y matemáticos brindandote las herramientas que automatizarán el cálculo de tus incógnitas !"
);

alert(
  "Completá el siguiente recuadro con el nombre de la figura que querés analizar, podes aplicar las siguientes:"
);

alert("TRIANGULO, CUADRADO, RECTANGULO, CIRCULO");

let figura = prompt("Ingresá el nombre de la figura:");

let triangulo = "TRIANGULO";
let cuadrado = "CUADRADO";
let rectangulo = "RECTANGULO";
let circulo = "CIRCULO";

if (figura === triangulo) {
  let base = Number(prompt("Ingresá la longitud de la base del triángulo"));
  let altura = Number(prompt("Ingresá la longitud de la altura del triangulo"));
  let diagonal = Number(
    prompt("Ingresá la longitud de la diagonal del triangulo")
  );
  if (base != 0 && altura != 0 && diagonal != 0) {
    let area = (base * altura) / 2;
    let perimetro = base + altura + diagonal;
    alert(
      `El area del triangulo está compuesta de ${area} centímetros cuadrados`
    );
    alert(`El perimetro del triangulo es de ${perimetro} centímetros`);
  } else {
    alert(
      "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud."
    );
  }
} else if (figura === cuadrado) {
  let lado = Number(
    prompt("Ingresá la longitud de uno de los lados del cuadrado:")
  );
  if (lado != 0) {
    let area = lado * lado;
    let perimetro = lado * 4;
    alert(
      `El area del cuadrado está compuesta de ${area} centímetros cuadrados`
    );
    alert(`El perimetro del cuadrado es de ${perimetro} centímetros`);
  } else {
    alert(
      "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud."
    );
  }
} else if (figura === rectangulo) {
  let base = Number(prompt("Ingresá la longitud de la base del rectángulo"));
  let altura = Number(
    prompt("Ingresá la longitud de la altura del rectángulo")
  );
  if (base != 0 && altura != 0) {
    let area = base * altura;
    let perimetro = (base + altura) * 2;
    alert(
      `El area del rectángulo está compuesta de ${area} centímetros cuadrados`
    );
    alert(`El perimetro del rectángulo es de ${perimetro} centímetros`);
  } else {
    alert(
      "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud."
    );
  }
} else if (figura === circulo) {
  let radio = prompt("Ingresá el radio del circulo:");
  if (radio != 0) {
    const pi = Math.PI;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    let areaDosDecimales = area.toFixed(2);
    let perimetroDosDecimales = perimetro.toFixed(2);
    alert(
      `El area del círculo está compuesta de ${areaDosDecimales} centímetros cuadrados`
    );
    alert(
      `El perimetro del círculo es de ${perimetroDosDecimales} centímetros`
    );
  } else {
    alert(
      "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud."
    );
  }
} else {
  alert(
    "No ingresaste una figura correcta, por favor reiniciá la aplicación y revisa nuevamente las figuras disponibles para su análisis."
  );
}
