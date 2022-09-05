// FUNCION
function conversor(numeroCentimetros) {
  return numeroCentimetros / 100;
}

//DECLARACIÓN DE FUNCIONES
const calcularAreaTriangulo = (base, altura) => {
  return (area = (base * altura) / 2);
};
const calcularPerimetroTriangulo = (base, altura, diagonal) => {
  return (perimetro = base + altura + diagonal);
};

//DECLARACIÓN DE OBJETOS

const misFiguras = [];

const triangulo = {
  base: "",
  altura: "",
  diagonal: "",
  calcularArea: function () {
    return (this.base * this.altura) / 1;
  },
  calcularPerimetro: function () {
    return this.base + this.altura + this.diagonal;
  },
};

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
alert(
  "Bienvenidos a Mathfis Calculator, la aplicación web que te permitirá resolver tus problemas físicos y matemáticos brindandote las herramientas que automatizarán el cálculo de tus incógnitas !"
);

alert(
  "Elegí que figura queres analizar, en caso de no querer continuar escribí finalizar"
);

alert(
  "Por favor, respete las mayúsculas: triangulo, paralelogramos, circulo o finalizar"
);

let figura = prompt(
  "Ingrese el nombre de la figura que desea analizar en la calculadora de Mathfis. En caso de no querer realizar una consulta ingrese la palabra finalizar"
);

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
