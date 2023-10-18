"use strict";

import { inicializarPaquetes } from "./clases.js";

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

const ArrayPaquetes = [];
let ArrayCotizacion = JSON.parse(localStorage.getItem("seleccion")) || [];
let idPaq = 1;

const seleccionar = document.querySelector(".seleccionar");

seleccionar.addEventListener("click", function () {
  paqueteSeleccionado = ArrayPaquetes.find(
    (el) => el.nombre === click.target.value
  );
});

seleccionar.addEventListener("keypress", (event) => {
  event.key === "Enter" &&
    paqueteSeleccionado &&
    console.log("el paquete es:", paqueteSeleccionado);
});

seleccionar.addEventListener("click", () => {
  const cotizacion = numIngresado * el.precio;
});

ArrayPaquetes.forEach((el) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
  <div class="col-lg-4 my-3 tarjeta-completa">
  <div class="container d-flex flex-column card-paquetes">
    <div class="row card-paquetes__title pt-3">
      <h2>${el.nombre}</h2>
    </div>
    <div class="row">
      <img
        data-aos="flip-down"
        class="card-paquetes__imagen"
        src="${el.foto}"
        alt="Montaje de comida y cafe"
      />
    </div>
    <div class="row card-paquetes__descripcion">

      <ul class="card-paquetes__descripcion__lista">
      <p>${el.descripcion}</p>
      </ul>
    </div>
    <div class="row mx-auto mb-3 px-5 pt-3">
      <button class="btn btn-seleccionar seleccionar1" type="submit">
        Seleccionar
      </button>
    </div>
  </div>
</div>
  `;

  app.appendChild(tarjeta);
});
