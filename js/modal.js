const modalContenedor = document.querySelector(".modal-contenedor");
const abrirCotizacion = document.getElementById("seleccionar1");
const cerrarCotizacion = document.getElementById("btn-cerrar-carrito");
const modalCotizacion = document.querySelector(".modal-carrito");

abrirCotizacion.addEventListener("click", () => {
  modalContenedor.classList.toggle("modal-active");
});

cerrarCotizacion.addEventListener("click", () => {
  modalContenedor.classList.toggle("modal-active");
});

modalContenedor.addEventListener("click", () => {
  cerrarCotizacion.click();
});

// Event delegation
modalCotizacion.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.classList.contains("boton-eliminar")) {
    eliminarPaqueteCarrito(e.target.value);
  }
});
