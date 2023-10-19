const pintarPaquetes = (data) => {
  const contenedor = document.getElementById("paquete-contenedor");

  //Pendiente Checar por qué no agarra las fotos y cambiar las imágenes y checar si aquí sería necesario cambiar el 'alt=' e incluirlo en el array de Paquetes

  data.forEach((paquete) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<div class="col-lg-4 my-3 tarjeta-completa">
  <div class="container d-flex flex-column card-paquetes">
    <div class="row card-paquetes__title pt-3">
      <h2>${paquete.nombre}</h2>
    </div>
    <div class="row">
      <img
        data-aos="flip-down"
        class="card-paquetes__imagen"
        src="${paquete.foto}" 
        alt="Montaje de comida y cafe"
      />
    </div>
    <div class="row card-paquetes__descripcion">
      <ul class="card-paquetes__descripcion__lista">
        <li>${paquete.incluye}</li>
        <li>${paquete.coffbreak}</li>
        <li>${paquete.alimento}</li>
      </ul>
    </div>
    <div class="row mx-auto mb-3 px-5 pt-3">
      <button class="btn btn-seleccionar seleccionar1" id="selecc-paquete" type="submit">
        Seleccionar
      </button>
    </div>
  </div>
</div>`;
    contenedor.appendChild(div);
  });
};
