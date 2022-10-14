class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Creación de las distintas figuras mediante un método constructor.

class Triangulo {
  constructor(base, altura, diagonal) {
    this.figura = "Triangulo";
    this.base = base;
    this.altura = altura;
    this.diagonal = diagonal;
    this.area = "";
    this.perimetro = "";
  }

  efectuarCalculos() {
    this.area = (this.base * this.altura) / 2;
    this.perimetro = this.base + this.altura + this.diagonal;
  }
}

class Paralelogramo {
  constructor(base, altura) {
    this.figura = "Paralelogramo";
    this.base = base;
    this.altura = altura;
    this.area = "";
    this.perimetro = "";
  }

  efectuarCalculos() {
    this.area = this.base * this.altura;
    this.perimetro = (this.base + this.altura) * 2;
  }
}

class Circulo {
  constructor(radio) {
    this.figura = "Circulo";
    this.radio = radio;
    this.area = "";
    this.perimetro = "";
  }

  efectuarCalculos() {
    this.area = this.radio * this.radio * Math.PI;
    this.perimetro = 2 * this.radio * Math.PI;
  }
}

// Array para almacenar las figuras creadas
const figurasCreadas = [];

const almacenarLocal = (key, value) => {
  localStorage.setItem(key, value);
};
const articulo = document.getElementById("figuras");

let boton = document.getElementById("botonIdentificador");
boton.addEventListener("click", cargarUsuario);

// Utilización de librería
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

// Utilización del operador avanzado "AND"

function cargarUsuario() {
  let nombre = document.getElementById("nombre").value;
  if (nombre == "" || nombre == Number.isNaN()) {
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
  iniciar.innerHTML = `<h3>Hola ${usuario.nombre}, pulsá iniciar para ejecutar el programa.</h3><button type="button" class="btn btn-success fs-5 mt-3" onClick="seleccionarFigura()">Iniciar</button>`;
  articulo.appendChild(iniciar);
}

function seleccionarFigura() {
  articulo.innerHTML = "";
  const opciones = document.createElement("div");
  opciones.className = "container text-center";
  opciones.innerHTML = `
  <h2 id="subtitulo">Seleccioná la figura de la cual deseas obtener el area y su perímetro</h2>
    <div class="container mt-5">
    <div class="row g-5">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="./assets/triangulo.png" class="p-3" alt="triangulo" />
          <button type="button" class="btn btn-success fs-5" id="triangulo" onClick="datosTriangulo()">Triángulo</button>
        </div>
      </div>
  
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="./assets/cuadrado.png" class="p-3" alt="cuadrado" />
          <button type="button" class="btn btn-success fs-5" id="cuadrado" onClick="datosParalelogramo()">Cuadrado</button>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="./assets/circulo.png" class="p-3" alt="circulo" />
          <button type="button" class="btn btn-success fs-5" id="circulo" onClick="datosCirculo()">Círculo</button>
        </div>
      </div>
  </div>`;
  articulo.appendChild(opciones);
}

// Display: Ingresar datos para las distintas figuras
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
      <button type="button" class="btn btn-success fs-5" onClick="crearTriangulo()">Calcular</button>
    </div>`;
  articulo.appendChild(datos);
}

function datosParalelogramo() {
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
      <button type="button" class="btn btn-success fs-5" onClick="crearParalelogramo()">Calcular</button>
    </div>`;
  articulo.appendChild(datos);
}

function datosCirculo() {
  articulo.innerHTML = "";
  let datos = document.createElement("div");
  datos.innerHTML = `
  <div class="offset-md-4 col-md-4 mb-4">
    <input class="field form-control text-center fs-3 mt-5" type="text" name="radio" id="radio" placeholder="Ingrese el radio"/>
  </div>
  <div class="mb-3 text-center">
    <button type="button" class="btn btn-success fs-5" onClick="crearCirculo()">Calcular</button>
  </div>`;
  articulo.appendChild(datos);
}

// Obtención de valores mediante un casillero input, creación del objeto correspondiente a la figura y almacenamiento en un array.

function crearTriangulo() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);
  let diagonal = Number(document.getElementById("diagonal").value);
  const triangulo = new Triangulo(base, altura, diagonal);
  triangulo.efectuarCalculos();
  figurasCreadas.push(JSON.stringify(triangulo));
  mostrarResultado(triangulo.area.toFixed(2), triangulo.perimetro.toFixed(2));
}

function crearParalelogramo() {
  let base = Number(document.getElementById("base").value);
  let altura = Number(document.getElementById("altura").value);
  const paralelogramo = new Paralelogramo(base, altura);
  paralelogramo.efectuarCalculos();
  figurasCreadas.push(JSON.stringify(paralelogramo));
  mostrarResultado(
    paralelogramo.area.toFixed(2),
    paralelogramo.perimetro.toFixed(2)
  );
}

function crearCirculo() {
  let radio = Number(document.getElementById("radio").value);
  const circulo = new Circulo(radio);
  circulo.efectuarCalculos();
  figurasCreadas.push(JSON.stringify(circulo));
  mostrarResultado(circulo.area.toFixed(2), circulo.perimetro.toFixed(2));
}

// Muestra el resultado obtenido del cálculo. Se ofrece la posiblidad de crear una nueva figura, a su vez añadirá la misma a un array y contabilizara la cantidad de figuras creadas o finalizar la ejecución del programa
// Envio los datos de figuras creadas a la api JSON placeholder simulando una carga de los mismos, se muestran a su vez en la consola el último elemento agregado al Array que almacena las mismas.
function mostrarResultado(area, perimetro) {
  articulo.innerHTML = "";
  let resultados = document.createElement("div");
  resultados.className = "container text-center mt-5";
  resultados.innerHTML = `<h3>El area de la figura es de ${area} centímetros cuadrados</h3><h3>El perimetro de la figura es de ${perimetro} centímetros</h3>
  <div class="d-flex flex-column">
  <button type="button" class="btn btn-success fs-5 mt-3" onClick="seleccionarFigura()">Pulsá aqui para crear una nueva figura</button>
  <button type="button" class="btn btn-success fs-5 mt-3" onClick="finalizarPrograma()">Finalizar ejecución del programa</button>
  </div>`;
  articulo.appendChild(resultados);

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "Figura creada",
      body: `${figurasCreadas.at(-1)}`,
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

// Finaliza la ejecución de la aplicación web y efectúa un mensaje de despedida y agradecimiento con el nombre identificado

function finalizarPrograma() {
  let usuario = JSON.parse(localStorage.getItem(`usuarioRegistrado`));
  articulo.innerHTML = "";
  const finalizar = document.createElement("div");
  finalizar.className = "container";
  finalizar.innerHTML = `<p class = "fs-3 text-center">Gracias ${usuario} por utilizar nuestra aplicación web, has analizado un total de ${figurasCreadas.length} figuras. Esperamos que vuelva pronto!</p>`;
  articulo.appendChild(finalizar);
}
