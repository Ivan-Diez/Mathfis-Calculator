// Creación de Figuras dinámicas
const articulo = document.getElementById("figuras");
const opciones = document.createElement("div");
opciones.innerHTML = `<button type="button" class="btn btn-secondary" id="triangulo" onClick="datosTriangulo()">Triángulo</button>
<button type="button" class="btn btn-secondary" id="cuadrado" onClick="datosParalelogramos()">Cuadrado</button>
<button type="button" class="btn btn-secondary" id="rectangulo" onClick="datosParalelogramos()">Rectángulo</button>
<button type="button" class="btn btn-secondary" id="circulo" onClick="datosCirculo()">Círculo</button>`;
articulo.appendChild(opciones);

// Display: Ingresar datos para figura Triangulo
function datosTriangulo() {
  opciones.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `<input class="field" type="text" name="base" id="base" placeholder="Ingrese la base"/>
   <input class="field" type="text" name="altura" id="altura" placeholder="Ingrese la altura"/>
   <input class="field" type="text" name="diagonal" id="diagonal" placeholder="Ingrese la diagonal"/>
   <button type="button" class="btn btn-secondary" onClick="cargarTriangulo()">Calcular</button>`;
  opciones.appendChild(datos);
}

// Display: Ingresar datos para figura Paralelogramos
function datosParalelogramos() {
  opciones.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `<input class="field" type="text" name="base" id="base" placeholder="Ingrese la base"/>
  <input class="field" type="text" name="altura" id="altura" placeholder="Ingrese la altura"/>
  <button type="button" class="btn btn-secondary" onClick="cargarParalelogramos()">Calcular</button>`;
  opciones.appendChild(datos);
}

// Display: Ingresar datos para figura Circulo
function datosCirculo() {
  opciones.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `<input class="field" type="text" name="radio" id="radio" placeholder="Ingrese el radio"/>
  <button type="button" class="btn btn-secondary" onClick="cargarCirculo()">Calcular</button>`;
  opciones.appendChild(datos);
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
  opciones.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.innerHTML = `<p>El area de la figura es de ${area} centímetros cuadrados</p><p>El perimetro de la figura es de ${perimetro} centímetros</p>`;
  opciones.appendChild(resultados);
}
// PARALELOGRAMOS
function resultadosParalelogramos(area, perimetro) {
  opciones.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.innerHTML = `<p>El area de la figura es de ${area} centímetros cuadrados</p><p>El perimetro de la figura es de ${perimetro} centímetros</p>`;
  opciones.appendChild(resultados);
}
// CIRCULO
function resultadosCirculo(area, perimetro) {
  opciones.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.innerHTML = `<p>El area de la figura es de ${Math.round(
    area
  )} centímetros cuadrados</p><p>El perimetro de la figura es de ${Math.round(
    perimetro
  )} centímetros</p>`;
  opciones.appendChild(resultados);
}
