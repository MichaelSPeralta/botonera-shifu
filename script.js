var oficinaOn = "definir variables a ifttt";
var oficinaOff = "definir variables a ifttt";
var banoOff = "definir variables a ifttt";
var banoOn = "definir variables a ifttt";
var cocinaOn = "definir variables a ifttt";
var cocinaOff = "definir variables a ifttt";
var comedorOn = "definir variables a ifttt";
var comedorOff = "definir variables a ifttt";
var habitacionOff = "definir variables a ifttt";
var habitacionOn = "definir variables a ifttt";
var salaOff = "definir variables a ifttt";
var salaOn = "definir variables a ifttt";
var vaniOff = "definir variables a ifttt";
var vaniOn = "definir variables a ifttt";
var vestidorOff = "definir variables a ifttt";
var vestidorOn = "definir variables a ifttt";

function fComedor() {
  let comedor = document.getElementById("comedor");
  let pcomedor = document.getElementById("pcomedor");

  if (comedor.className == "btn") {
    comedor.className = "btn-active";
    pcomedor.className = "p-active";

    fetch(comedorOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    comedor.className = "btn";
    pcomedor.classList.remove("p-active");

    fetch(comedorOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fBano() {
  let bano = document.getElementById("bano");
  let pbano = document.getElementById("pbano");

  if (bano.className == "btn") {
    bano.className = "btn-active";
    pbano.className = "p-active";

    fetch(banoOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    bano.className = "btn";
    pbano.classList.remove("p-active");

    fetch(banoOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fSala() {
  let sala = document.getElementById("sala");
  let psala = document.getElementById("psala");

  if (sala.className == "btn") {
    sala.className = "btn-active";
    psala.className = "p-active";

    fetch(salaOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    sala.className = "btn";
    psala.classList.remove("p-active");

    fetch(salaOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fCocina() {
  let cocina = document.getElementById("cocina");
  let pcocina = document.getElementById("pcocina");

  if (cocina.className == "btn") {
    cocina.className = "btn-active";
    pcocina.className = "p-active";

    fetch(cocinaOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    cocina.className = "btn";
    pcocina.classList.remove("p-active");

    fetch(cocinaOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fHabitacion() {
  let habitacion = document.getElementById("habitacion");
  let phabitacion = document.getElementById("phabitacion");

  if (habitacion.className == "btn") {
    habitacion.className = "btn-active";
    phabitacion.className = "p-active";

    fetch(habitacionOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    habitacion.className = "btn";
    phabitacion.classList.remove("p-active");

    fetch(habitacionOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fOficina() {
  let oficina = document.getElementById("oficina");
  let poficina = document.getElementById("poficina");

  if (oficina.className == "btn") {
    oficina.className = "btn-active";
    poficina.className = "p-active";

    fetch(oficinaOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    oficina.className = "btn";
    poficina.classList.remove("p-active");

    fetch(oficinaOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fVani() {
  let vani = document.getElementById("vani");
  let pvani = document.getElementById("pvani");

  if (vani.className == "btn") {
    vani.className = "btn-active";
    pvani.className = "p-active";

    fetch(vaniOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    vani.className = "btn";
    pvani.classList.remove("p-active");

    fetch(vaniOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}

function fVestidor() {
  let vestidor = document.getElementById("vestidor");
  let pvestidor = document.getElementById("pvestidor");

  if (vestidor.className == "btn") {
    vestidor.className = "btn-active";
    pvestidor.className = "p-active";

    fetch(vestidorOn, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  } else {
    vestidor.className = "btn";
    pvestidor.classList.remove("p-active");

    fetch(vestidorOff, {
      method: "POST",
      mode: "no-cors",
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }
}
