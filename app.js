/*
// FUNCION
function conversor(numeroCentimetros) {
  return numeroCentimetros / 100;
}

//DECLARACIÓN DE OBJETOS

const misFiguras = [];

//
/
/
/
/
/
/
//

const paralelogramos = {
  base: "",
  altura: "",
  calcularArea: function () {
    return this.base * this.altura;
  },
  calcularPerimetro: function () {
    return (this.base + this.altura) * 2;
  },
};

const circulo = {
  radio: "",
  calcularArea: function () {
    return this.radio * this.radio * Math.PI;
  },
  calcularPerimetro: function () {
    return 2 * this.radio * Math.PI;
  },
};

// COMIENZO DE LA APLICACIÓN

const FIGURAS = {
  triangulo: "triangulo",
  paralelogramos: "paralelogramos",
  circulo: "circulo",
};

const seleccion = FIGURAS[figura];

while (figura != "finalizar") {
  // FIGURA: TRIANGULO
  if (seleccion === "triangulo") {
    triangulo.base = Number(
      prompt("Ingresá la longitud de la base del triangulo")
    );
    triangulo.altura = Number(
      prompt("Ingresá la longitud de la altura del triangulo")
    );
    triangulo.diagonal = Number(prompt("Ingresá la longitud de la diagonal"));
    if (triangulo.base > 0 && triangulo.altura > 0 && triangulo.diagonal > 0) {
      triangulo.calcularArea();
      triangulo.calcularPerimetro();
      alert(
        `El area del triangulo es de ` +
          triangulo.calcularArea() +
          ` centímetros cuadrados`
      );
      alert(
        `El perimetro del triangulo es de ` +
          triangulo.calcularPerimetro() +
          ` centímetros`
      );
      // USO DEL METODO PUSH - ARRAYS
      misFiguras.push(
        `La figura analizada fue un triangulo`,
        "\nEl area es de: " +
          Math.round(triangulo.calcularArea()) +
          " centimetros cuadrados",
        "\nEl períemtro es de: " +
          Math.round(triangulo.calcularPerimetro()) +
          " centimetros"
      );
      break;
    } else {
      alert(
        "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud. Por favor, volvé a intentarlo."
      );
    }
  }
  // FIGURA: PARALELOGRAMOS
  else if (seleccion === "paralelogramos") {
    let figura = prompt(
      "Ingrese el tipo de paralelogramo: cuadrado, rectangulo"
    );
    if (figura === "cuadrado") {
      paralelogramos.base = Number(
        prompt(`Ingresá la longitud de un lado del ${figura}`)
      );
      paralelogramos.altura = paralelogramos.base;
    } else if (figura === "rectangulo") {
      paralelogramos.base = Number(
        prompt(`Ingresá la longitud de la base del ${figura}`)
      );
      paralelogramos.altura = Number(
        prompt(`Ingresá la longitud de la altura del ${figura}`)
      );
    }
    if (paralelogramos.base > 0 && paralelogramos.altura > 0) {
      paralelogramos.calcularArea();
      paralelogramos.calcularPerimetro();
      alert(
        `El area del ${figura} es de ` +
          paralelogramos.calcularArea() +
          ` centímetros cuadrados`
      );
      alert(
        `El perimetro del ${figura} es de ` +
          paralelogramos.calcularPerimetro() +
          ` centímetros`
      );
      misFiguras.push(
        `La figura analizada fue un ${figura}`,
        "\nEl area es de: " +
          Math.round(paralelogramos.calcularArea()) +
          " centimetros cuadrados",
        "\nEl períemtro es de: " +
          Math.round(paralelogramos.calcularPerimetro()) +
          " centimetros"
      );
      break;
    } else {
      alert(
        "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud. Por favor, volvé a intentarlo."
      );
    }
  }
  // FIGURA: CIRCULO
  else if (seleccion === "circulo") {
    circulo.radio = Number(prompt("Ingresá el valor de radio del circulo"));

    if (circulo.radio > 0) {
      circulo.calcularArea();
      circulo.calcularPerimetro();
      alert(
        `El area del circulo es de ` +
          Math.round(circulo.calcularArea()) +
          ` centimetros cuadrados aproximadamente`
      );
      alert(
        `El perimetro del circulo es de ` +
          Math.round(circulo.calcularPerimetro()) +
          ` centimetros aproximadamente`
      );
      misFiguras.push(
        "La figura analizada fue un Circulo",
        "\nEl area es de: " +
          Math.round(circulo.calcularArea()) +
          " centimetros cuadrados",
        "\nEl períemtro es de: " +
          Math.round(circulo.calcularPerimetro()) +
          " centimetros"
      );
      break;
    } else {
      alert(
        "Ingresaste un valor de 0, es imposible efectuar el cálculo con esa longitud. Por favor, volvé a intentarlo."
      );
    }
  }
}

if (figura != "finalizar") {
  alert(misFiguras);
  alert("Gracias por visitar nuestro sitio web!");
} else {
  alert("Gracias por visitar nuestro sitio web!");
}

*/

let article = document.getElementById("figuras");
let subtitulo = document.getElementById("subtitulo");

let opciones = document.createElement("div");
opciones.innerHTML = `<button type="button" class="btn btn-secondary" onClick="ingresarDatos()">Triángulo</button>
<button type="button" class="btn btn-secondary" onClick="mostrarCalculadora()">Cuadrado</button>
<button type="button" class="btn btn-secondary" onClick="mostrarCalculadora()">Rectángulo</button>
<button type="button" class="btn btn-secondary" onClick="mostrarCalculadora()">Círculo</button>`;
article.appendChild(opciones);

//OBJETO TRIANGULO

const triangulo = {
  base: "",
  altura: "",
  diagonal: "",
  area: "",
  perimetro: "",
};

function ingresarDatos() {
  triangulo.base = prompt("Ingrese la base del triángulo");
  triangulo.altura = prompt("Ingrese la altura del triángulo");
  triangulo.diagonal = prompt("Ingrese la diagonal del triángulo");
  if (triangulo.base > 0 && triangulo.altura > 0 && triangulo.diagonal > 0) {
    realizarCalculos();
  } else {
    mostrarError();
  }
}

function realizarCalculos() {
  triangulo.area = (triangulo.base * triangulo.altura) / 2;
  triangulo.perimetro = triangulo.base + triangulo.altura + triangulo.diagonal;
  mostrarResultados();
}

function mostrarResultados() {
  article.innerHTML = "";
  subtitulo.innerHTML = "";
  let calculador = document.createElement("div");
  calculador.innerHTML = `<h2>Resultado obtenido:</h2><p class="font-monospace">El area de tu triangulo es de ${triangulo.area} centímetros cuadrados</p><p class="font-monospace">El perímetro de tu triángulo es de ${triangulo.perimetro} centímetros</p>`;
  article.appendChild(calculador);
}

function mostrarError() {
  article.innerHTML = "";
  subtitulo.innerHTML = "";
  let error = document.createElement("div");
  error.innerHTML = `<h2>Resultado obtenido:</h2><p class="font-monospace">No fue posible efectuar el cálculo dado que uno o más datos de los ingresados tiene un valor de incorrecto, es imposible efectuar el cálculo con ese valor de longitud. Por favor, recargá la página y volvé a intentarlo.</p>`;
  article.appendChild(error);
}
