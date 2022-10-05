class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const almacenarLocal = (key, value) => {
  localStorage.setItem(key, value);
};
const articulo = document.getElementById("figuras");

let boton = document.getElementById("botonIdentificador");
boton.addEventListener("click", cargarUsuario);

// AÑADO LIBRERIAS
function usuarioAdmin() {
  Swal.fire({
    icon: "question",
    title: "¡ Hola Creador !",
    text: "Ingresaste en modo creador, deseas continuar ?",
  });
}

function usuarioCorrecto() {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "El nombre ingresado es correcto",
    showConfirmButton: false,
    timer: 1250,
  });
}

// AÑADO OPERADOR AVANZADO "AND"

function cargarUsuario() {
  let nombre = document.getElementById("nombre").value;
  if (nombre == "") {
    cargarUsuario();
  } else {
    usuarioCorrecto();
    let usuario = new Usuario(nombre);
    iniciarPrograma(usuario);
    almacenarLocal("usuarioRegistrado", JSON.stringify(nombre));
  }
  nombre === "Ivan Diez" && usuarioAdmin();
}

// Creación de Figuras dinámicas

function iniciarPrograma(usuario) {
  articulo.innerHTML = "";
  const iniciar = document.createElement("div");
  iniciar.className = "container text-center mt-5";
  iniciar.innerHTML = `<h3>Hola ${usuario.nombre}, pulsá iniciar para ejecutar el programa.</h3><button type="button" class="btn btn-success fs-5 mt-3" onClick="crearFigura()">Iniciar</button>`;
  articulo.appendChild(iniciar);
}

function crearFigura() {
  articulo.innerHTML = "";
  const opciones = document.createElement("div");
  opciones.className = "container text-center";
  opciones.innerHTML = `
  <h2 id="subtitulo">Seleccioná la figura de la cual deseas obtener el area y su perímetro</h2>
    <div class="container mt-5">
    <div class="row g-5">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
          <img src="./assets/triangulo.png" class="p-3" alt="triangulo" />
          <button type="button" class="btn btn-success fs-5" id="triangulo" onClick="datosTriangulo()">Triángulo</button>
        </div>
      </div>
  
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
          <img src="./assets/cuadrado.png" class="p-3" alt="cuadrado" />
          <button type="button" class="btn btn-success fs-5" id="cuadrado" onClick="datosParalelogramos()">Cuadrado</button>
        </div>
      </div>
  
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
          <img src="./assets/rectangulo.png" class="p-3 mantenerDimensiones" alt="rectangulo" />
          <button type="button" class="btn btn-success fs-5" id="rectangulo" onClick="datosParalelogramos()">Rectángulo</button>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
          <img src="./assets/circulo.png" class="p-3" alt="circulo" />
          <button type="button" class="btn btn-success fs-5" id="circulo" onClick="datosCirculo()">Círculo</button>
        </div>
      </div>
  </div>`;
  articulo.appendChild(opciones);
}

function finalizarPrograma() {
  let usuario = JSON.parse(localStorage.getItem(`usuarioRegistrado`));
  articulo.innerHTML = "";
  const finalizar = document.createElement("div");
  finalizar.className = "container";
  finalizar.innerHTML = `<p class = "fs-3 text-center">Gracias ${usuario} por utilizar nuestra aplicación web, esperamos que vuelva pronto!</p>`;
  articulo.appendChild(finalizar);
}

// Display: Ingresar datos para figura Triangulo
function datosTriangulo() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `
    <div class="offset-md-4 col-md-4 mb-4">
      <input class="field form-control text-center fs-3 mt-5" type="text" name="base" id="base" placeholder="Ingrese la base"/>
    </div>
    <div class="offset-md-4 col-md-4 mb-4">
      <input class="field form-control text-center fs-3 mt-5" type="text" name="altura" id="altura" placeholder="Ingrese la altura"/>
    </div>
    <div class="offset-md-4 col-md-4 mb-4">
      <input class="field form-control text-center fs-3 mt-5" type="text" name="diagonal" id="diagonal" placeholder="Ingrese la diagonal"/>
    </div>
    <div class="mb-3 text-center">
      <button type="button" class="btn btn-success fs-5" onClick="cargarTriangulo()">Calcular</button>
    </div>`;
  articulo.appendChild(datos);
}

// Display: Ingresar datos para figura Paralelogramos
function datosParalelogramos() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `
    <div class="offset-md-4 col-md-4 mb-4">
      <input class="field form-control text-center fs-3 mt-5" type="text" name="base" id="base" placeholder="Ingrese la base"/>
    </div>
    <div class="offset-md-4 col-md-4 mb-4">
      <input class="field form-control text-center fs-3 mt-5" type="text" name="altura" id="altura" placeholder="Ingrese la altura"/>
    </div>
    <div class="mb-3 text-center">
      <button type="button" class="btn btn-success fs-5" onClick="cargarParalelogramos()">Calcular</button>
    </div>`;
  articulo.appendChild(datos);
}

// Display: Ingresar datos para figura Circulo
function datosCirculo() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `
  <div class="offset-md-4 col-md-4 mb-4">
    <input class="field form-control text-center fs-3 mt-5" type="text" name="radio" id="radio" placeholder="Ingrese el radio"/>
  </div>
  <div class="mb-3 text-center">
    <button type="button" class="btn btn-success fs-5" onClick="cargarCirculo()">Calcular</button>
  </div>`;
  articulo.appendChild(datos);
}

// Capturar datos
// TRIANGULO
function cargarTriangulo() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);
  let diagonal = Number(document.getElementById("diagonal").value);
  calcularTriangulo(base, altura, diagonal);
}
// PARALELOGRAMOS
function cargarParalelogramos() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);
  calcularParalelogramos(base, altura);
}

// CIRCULO
function cargarCirculo() {
  let radio = Number(document.getElementById("radio").value);
  calcularCirculo(radio);
}

// Calcular area y perímetro
// TRIANGULO
function calcularTriangulo(base, altura, diagonal) {
  let area = (base * altura) / 2;
  let perimetro = base + altura + diagonal;
  resultadosTriangulo(area, perimetro);
}
// PARALELOGRAMOS
function calcularParalelogramos(base, altura) {
  let area = base * altura;
  let perimetro = (base + altura) * 2;
  resultadosParalelogramos(area, perimetro);
}
// CIRCULO
function calcularCirculo(radio) {
  let area = radio * radio * Math.PI;
  let perimetro = 2 * radio * Math.PI;
  resultadosCirculo(area, perimetro);
}

// Mostrar resultados
// TRIANGULO
function resultadosTriangulo(area, perimetro) {
  articulo.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.className = "container text-center mt-5";
  resultados.innerHTML = `<h3>El area de la figura es de ${area} centímetros cuadrados</h3><h3>El perimetro de la figura es de ${perimetro} centímetros</h3>
  <div class="d-flex flex-column">
  <button type="button" class="btn btn-success fs-5 mt-3" onClick="crearFigura()">Pulsá aqui para crear una nueva figura</button>
  <button type="button" class="btn btn-success fs-5 mt-3" onClick="finalizarPrograma()">Finalizar ejecución del programa</button>
  </div>`;
  articulo.appendChild(resultados);

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "Resultados",
      body: `Area:${area}cm Perimetro:${perimetro}cm`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
// PARALELOGRAMOS
function resultadosParalelogramos(area, perimetro) {
  articulo.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.className = "container text-center mt-5";
  resultados.innerHTML = `
  <h3>El area de la figura es de ${area} centímetros cuadrados</h3>
  <h3>El perimetro de la figura es de ${perimetro} centímetros</h3>
  <div class="d-flex flex-column">
    <button type="button" class="btn btn-success fs-5 mt-3" onClick="crearFigura()">Pulsá aqui para crear una nueva figura</button>
    <button type="button" class="btn btn-success fs-5 mt-3" onClick="finalizarPrograma()">Finalizar ejecución del programa</button>
  </div>`;
  articulo.appendChild(resultados);

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "Resultados",
      body: `Area:${area}cm Perimetro:${perimetro}cm`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
// CIRCULO
function resultadosCirculo(area, perimetro) {
  articulo.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.className = "container text-center mt-5";
  resultados.innerHTML = `
  <h3>El area de la figura es de ${Math.round(area)} centímetros cuadrados</h3>
  <h3>El perimetro de la figura es de ${Math.round(perimetro)} centímetros</h3>
  <div class="d-flex flex-column">
    <button type="button" class="btn btn-success fs-5 mt-3" onClick="crearFigura()">Pulsá aqui para crear una nueva figura</button>
    <button type="button" class="btn btn-success fs-5 mt-3" onClick="finalizarPrograma()">Finalizar ejecución del programa</button>
  </div>`;
  articulo.appendChild(resultados);

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "Resultados",
      body: `Area:${area}cm Perimetro:${perimetro}cm`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
