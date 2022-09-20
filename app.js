// Creación de Figuras dinámicas

let figurasCreadas = [];

const articulo = document.getElementById("figuras");
const iniciar = document.createElement("div");
iniciar.className = "text-center";
iniciar.innerHTML = `<button type="button" class="btn btn-success fs-5" id="triangulo" onClick="crearFigura()">Iniciar</button>`;
articulo.appendChild(iniciar);

function crearFigura() {
  articulo.innerHTML = "";
  const opciones = document.createElement("div");
  opciones.className = "container text-center";
  opciones.innerHTML = `
  <h2 id="subtitulo">Seleccioná la figura de la cual deseas obtener el area y su perímetro</h2>
  <div class="container">
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
          <img src="./assets/rectangulo.png" class="p-3" alt="rectangulo" />
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

function mostrarResultados() {
  figurasCreadas.forEach((item, index) => {
    articulo.innerHTML = "";
    const resultados = document.createElement("div");
    resultados.innerHTML = `<p>Esta figura es la número${index}</p><p>Su area era de ${item.area} centímetros cuadrados</p><p>Su períemtro era de ${item.perimetro} centímetros</p><button type="button" class="btn btn-secondary" onClick="crearFigura()">Nueva figura</button>`;
    articulo.appendChild(resultados);
    console.log(figurasCreadas);
  });
}

// Display: Ingresar datos para figura Triangulo
function datosTriangulo() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `<input class="field" type="text" name="base" id="base" placeholder="Ingrese la base"/>
   <input class="field" type="text" name="altura" id="altura" placeholder="Ingrese la altura"/>
   <input class="field" type="text" name="diagonal" id="diagonal" placeholder="Ingrese la diagonal"/>
   <button type="button" class="btn btn-secondary" onClick="cargarTriangulo()">Calcular</button>`;
  articulo.appendChild(datos);
}

// Display: Ingresar datos para figura Paralelogramos
function datosParalelogramos() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `<input class="field" type="text" name="base" id="base" placeholder="Ingrese la base"/>
  <input class="field" type="text" name="altura" id="altura" placeholder="Ingrese la altura"/>
  <button type="button" class="btn btn-secondary" onClick="cargarParalelogramos()">Calcular</button>`;
  articulo.appendChild(datos);
}

// Display: Ingresar datos para figura Circulo
function datosCirculo() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `<input class="field" type="text" name="radio" id="radio" placeholder="Ingrese el radio"/>
  <button type="button" class="btn btn-secondary" onClick="cargarCirculo()">Calcular</button>`;
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
  resultados.innerHTML = `<p>El area de la figura es de ${area} centímetros cuadrados</p><p>El perimetro de la figura es de ${perimetro} centímetros</p><button type="button" class="btn btn-secondary" onClick="crearFigura()">Nueva figura</button> <button type="button" class="btn btn-secondary" onClick="mostrarResultados()">Finalizar</button>`;
  articulo.appendChild(resultados);
  guardarFigura(area, perimetro);
}
// PARALELOGRAMOS
function resultadosParalelogramos(area, perimetro) {
  articulo.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.innerHTML = `<p>El area de la figura es de ${area} centímetros cuadrados</p><p>El perimetro de la figura es de ${perimetro} centímetros</p>`;
  articulo.appendChild(resultados);
}
// CIRCULO
function resultadosCirculo(area, perimetro) {
  articulo.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.innerHTML = `<p>El area de la figura es de ${Math.round(
    area
  )} centímetros cuadrados</p><p>El perimetro de la figura es de ${Math.round(
    perimetro
  )} centímetros</p>`;
  articulo.appendChild(resultados);
}

function guardarFigura(area, perimetro) {
  let figura = {
    area: area,
    perimetro: perimetro,
  };
  enviarFigura(figura);
}

function enviarFigura(figura) {
  figurasCreadas.push(figura);
}
