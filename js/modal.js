//const modalContenedor = document.querySelector(".modal-contenedor");
// const seleccPaquete = document.getElementById("selecc-paquete");
const seleccPaquete = document.querySelector("#prueba");
// const cerrarCotizacion = document.getElementById("btn-cerrar-carrito");
// const modalCotizacion = document.querySelector(".modal-carrito");
seleccPaquete.addEventListener("click", () => {
  console.log("hola");
  Swal.fire({
    title: "Cotización Preliminar",
    text: "Seleccionaste el paquete xx para xx personas.", //checar cómo hago para meter lo del html
    imageUrl: "../img/comida-f5.jpg", //checar cómo toma la foto según el paquete que se elija
    showCancelButton: true,
    confirmButtonColor: "$color-1brand", //checar cómo hago para que tome los colores que definí en mi css
    cancelButtonColor: "$color-2brand",
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Averiguar como me dirige al formulario Cotización");
    }
  }); //Checar como hacer que al dar click en continuar te lleve a la hoja del formulario
});

// cerrarCotizacion.addEventListener("click", () => {
//   modalContenedor.classList.toggle("modal-active");
// });

// modalContenedor.addEventListener("click", () => {
//   cerrarCotizacion.click();
// });

// // Event delegation
// modalCotizacion.addEventListener("click", (e) => {
//   e.stopPropagation();

//   if (e.target.classList.contains("boton-eliminar")) {
//     eliminarPaqueteCarrito(e.target.value);
//   }
// });
