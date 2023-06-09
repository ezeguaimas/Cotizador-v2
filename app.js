function calcular() {
  const aporte1 = parseFloat(document.getElementById("aporte1").value) || 0;
  const aporte2 = parseFloat(document.getElementById("aporte2").value) || 0;
  const aporte3 = parseFloat(document.getElementById("aporte3").value) || 0;
  const aporte4 = parseFloat(document.getElementById("aporte4").value) || 0;
  let adultos = document.getElementById("adultos").value.trim();
  let menores = document.getElementById("menores").value.trim();
  const corpAdulto = 3310; //2760;
  const corpMenor = 3310; //2760;
  const vipAdulto = 6240; //5200;
  const vipMenor = 4680; //3900;

  let sueldoBruto = (aporte1 + aporte2 + aporte3 + aporte4) / 0.03;
  // let sueldoBruto1 = (aporte1 + aporte2) / 0.03;
  // let sueldoBruto2 = (aporte3 + aporte4) / 0.03;

  const montoMaximo = 642142.18;

  if (sueldoBruto > montoMaximo) {
    sueldoBruto = montoMaximo;
  }

  // if (sueldoBruto1 > montoMaximo) {
  //   sueldoBruto1 = montoMaximo;
  // }
  // if (sueldoBruto2 > montoMaximo) {
  //   sueldoBruto2 = montoMaximo;
  // }

  // if (adultos === "") {
  //   adultos = 0;
  // }
  if (menores === "") {
    menores = 0;
  }

  if (adultos === "") {
    const mensajeError = document.getElementById("mensaje-error");
    mensajeError.textContent = "Ingrese valores para adultos y menores";
    setTimeout(function () {
      mensajeError.textContent = "";
    }, 3000);
    return;
  }

  // if (isNaN(adultos) || isNaN(menores)) {
  //   const mensajeError = document.getElementById("mensaje-error");
  //   mensajeError.textContent = "Ingrese valores para adultos y menores";

  //   // Establecer un temporizador para eliminar el mensaje de error después de 3 segundos
  //   setTimeout(function() {
  //     mensajeError.textContent = "";
  //   }, 3000);

  //   return;
  // }

  const aporteOS = sueldoBruto * 0.0765;

  // const aporteOS1 = sueldoBruto1 * 0.0765;
  // const aporteOS2 = sueldoBruto2 * 0.0765;
  const aporteTotal = aporteOS;
  // const aporteTotal = aporteOS1 + aporteOS2
  const corpDif = aporteTotal - (corpAdulto * adultos + corpMenor * menores);
  const vipDif = aporteTotal - (vipAdulto * adultos + vipMenor * menores);
  let renderCorp = 0;
  let renderVip = 0;

  if (corpDif > 0) {
    renderCorp = "No Paga Diferencia";
  } else {
    renderCorp = Math.abs(corpDif);
  }

  if (vipDif > 0) {
    renderVip = "No Paga Diferencia";
  } else {
    renderVip = Math.abs(vipDif);
  }

  // Mostramos los resultados en el HTML
  document.getElementById("sueldo_bruto").textContent = sueldoBruto.toFixed(2);
  // document.getElementById("sueldo_bruto_1").textContent = sueldoBruto1.toFixed(2);
  // document.getElementById("sueldo_bruto_2").textContent = sueldoBruto2.toFixed(2);
  document.getElementById("aporte_os").textContent = aporteOS.toFixed(2);
  // document.getElementById("aporte_os_1").textContent = aporteOS1.toFixed(2);
  // document.getElementById("aporte_os_2").textContent = aporteOS2.toFixed(2);
  document.getElementById("aporte_total").textContent = aporteTotal.toFixed(2);
  document.getElementById("dif_corp").textContent =
    typeof renderCorp === "number" ? renderCorp.toFixed(2) : renderCorp;
  document.getElementById("dif_vip").textContent =
    typeof renderVip === "number" ? renderVip.toFixed(2) : renderVip;

  mostrarResultados();
}

function mostrarResultados() {
  document.getElementById("resultados").style.display = "block";
}

function ocultarResultados() {
  document.getElementById("resultados").style.display = "none";
}


const borrarBtn = document.getElementById("borrar");
borrarBtn.addEventListener("click", function () {
  document.getElementById("aporte1").value = "";
  document.getElementById("aporte2").value = "";
  document.getElementById("aporte3").value = "";
  document.getElementById("aporte4").value = "";
  document.getElementById("adultos").value = "";
  document.getElementById("menores").value = "";
  document.getElementById("sueldo_bruto").textContent = "";
  document.getElementById("aporte_os").textContent = "";
  document.getElementById("aporte_total").textContent = "";
  document.getElementById("dif_corp").textContent = "";
  document.getElementById("dif_vip").textContent = "";
  calcular();
  ocultarResultados();
});
