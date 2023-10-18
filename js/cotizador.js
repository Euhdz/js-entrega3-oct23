let numIngresado = 0; // Número de personas del paquete que ingresará el visitante a la página

const numBasePersonas = Number(10); // Número de personas que incluye la renta base del jardín

const numMaxPersonas = Number(200); // Número de personas máximo de personas para paquetes

let numExtraPersonas = 0; // Resultado de diferencia entre el numIngresado y el numBasePersonas (i.e. num personas que incluye la renta base del jardín)

const rentaBaseJardin = Number(7000); // Precio base de renta jardín (contempla num minimo de personas)

const rentaXpersonaExtraJardin = Number(200); //Precio correspondiente al jardín por persona adicional a las incluidas en al renta base

let rentaExtraJardin = 0; //Resultado de multiplicar numExtraPersonas * rentaXpersonaExtraJardin

let subtotalRentaJardin = 0; //Resultado de sumar rentaBaseJardin + rentaExtraJardin

let subtotalAlimentos = 0; //Resultado de multiplicar el precio de alimentos del paquete seleccionado por el numIngresado

let subtotalPaq = 0; // Resultado de sumar subtotalAlimentos + subtotalRentaJardin

let subtotalPaqXpersona = 0; // Resultado de dividir subtotalPaq / numIngresado

const iva = parseFloat(0.16); // Tasa de iva en México

let ivaPaq = 0; // Resultado de multiplicar subtotalPaq * iva

let totalPaq = 0; // Resultado de sumar subtotalPaq + ivaPaq

let totalPaqXpersona = 0; // Resultado de dividir totalPaq / numIngresado

// INGRESAR NUMERO DE PERSONAS AL COTIZADOR

const enviar = document.querySelector(".enviar");
const ingresanum = document.querySelector(".ingresa-num");

enviar.addEventListener("click", function () {
  numIngresado = parseInt(ingresanum.value);
  if (numIngresado <= numBasePersonas) {
    numIngresado = 10;
  } else if (numIngresado >= numMaxPersonas) {
    numIngresado = 200;
  }
  ingresanum.value = numIngresado;
  console.log(numIngresado, typeof numIngresado);
});

let cotizacion = [];

const paqueteContenedor = document.getElementById("paquete-contenedor");

// Event delegation - delegación de eventos
paqueteContenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("agregar")) {
    validarPaqueteCotizacion(e.target.id);
  }
});

const validarPaqueteCotizacion = (paqueteId) => {
  const estaRepetido = paquete.some((paquete) => paquete.id == paqueteId);

  if (!estaRepetido) {
    const paquete = paquetes.find((paquete) => paquete.id == paqueteId);
    cotizacion.push(paquete);
    pintarPaqueteCotizacion(paquete);
    actualizarTotalesCotizacion(paquete);
  } else {
    const paquete = cotizacion.find((paquete) => paquete.id == paqueteId);
    const cantidad = document.getElementById(`cantidad${paquete.id}`);
    paquete.cantidad++;
    cantidad.innerText = `Cantidad: ${paquete.cantidad}`;
    actualizarTotalesCotizacion(cotizacion);
  }
};

const pintarPaqueteCotizacion = (paquete) => {
  const contenedor = document.getElementById("cotizacion-contenedor");
  const div = document.createElement("div");
  div.classList.add("paqueteEnCotizacion");
  div.innerHTML = `
        <p>${paquete.nombre}</p>
        <p>Precio: $${paquete.precio}</p>
        <p id=cantidad${paquete.id}>Cantidad: ${paquete.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${paquete.id}">X</button>
    `;
  contenedor.appendChild(div);
};

const actualizarTotalesCotizacion = (cotizacion) => {
  const totalCantidad = cotizacion.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );
  const totalCompra = cotizacion.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  pintarTotalesCotizacion(totalCantidad, totalCompra);
  guardarCotizacionStorage(cotizacion);
};

const pintarTotalesCotizacion = (totalCantidad, totalCompra) => {
  const contadorCotizacion = document.getElementById("contador-cotizacion");
  const precioTotal = document.getElementById("precioTotal");

  contadorCotizacion.innerText = totalCantidad;
  precioTotal.innerText = totalCompra;
};

const pintarCotizacion = (cotizacion) => {
  const contenedor = document.getElementById("cotizacion-contenedor");

  contenedor.innerHTML = "";

  cotizacion.forEach((paquete) => {
    const div = document.createElement("div");
    div.classList.add("paqueteEnCotizacion");
    div.innerHTML = `
            <p>${paquete.nombre}</p>
            <p>Precio: $${paquete.precio}</p>
            <p id=cantidad${paquete.id}>Cantidad: ${paquete.cantidad}</p>
            <button class="btn waves-effect waves-ligth boton-eliminar" value="${paquete.id}">X</button>
        `;
    contenedor.appendChild(div);
  });
};

const eliminarPaqueteCotizacion = (paqueteId) => {
  const paqueteIndex = cotizacion.findIndex(
    (paquete) => paquete.id == paqueteId
  );
  paquete.splice(paqueteIndex, 1);
  pintarCotizacion(cotizacion);
  actualizarTotalesCotizacion(cotizacion);
};

const guardarCotizacionStorage = (cotizacion) => {
  localStorage.setItem("cotizacion", JSON.stringify(cotizacion));
};

const obtenerCotizacionStorage = () => {
  return JSON.parse(localStorage.getItem("cotizacion"));
};

const cargarCotizacion = () => {
  if (localStorage.getItem("cotizacion")) {
    cotizacion = obtenerCotizacionStorage();
    pintarCotizacion(cotizacion);
    actualizarTotalesCotizacion(cotizacion);
  }
};
