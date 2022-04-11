//definiendo las variables

var operandoA = "";
var operandoAux = "";
var operacion;
var bandera = false;
var bandera2 = false;
var bandera3 = false;

//no tengo ni idea para qué hace esto el profe si nunca las usa lol
function init() {
  var operando = document.getElementById("operando"),
    resultado = document.getElementById("resultado"),
    resetError = document.getElementById("ceBtn"),
    reset = document.getElementById("cBtn"),
    resetLast = document.getElementById("arrowBtn"),
    divide = document.getElementById("divideBtn"),
    siete = document.getElementById("sieteBtn"),
    ocho = document.getElementById("ochoBtn"),
    nueve = document.getElementById("nueveBtn"),
    multiplica = document.getElementById("multiplicaBtn"),
    cuatro = document.getElementById("cuatroBtn"),
    cinco = document.getElementById("cincoBtn"),
    seis = document.getElementById("seisBtn"),
    resta = document.getElementById("restaBtn"),
    uno = document.getElementById("unoBtn"),
    dos = document.getElementById("dosBtn"),
    tres = document.getElementById("tresBtn"),
    suma = document.getElementById("sumaBtn"),
    zero = document.getElementById("zeroBtn"),
    coma = document.getElementById("comaBtn"),
    igual = document.getElementById("igualBtn");
}

unoBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "1";
    if (bandera == true) {
      operandoAux = operandoAux + "1";
    }
  }
};

dosBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "2";
    if (bandera == true) {
      operandoAux = operandoAux + "2";
    }
  }
};

tresBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "3";
    if (bandera == true) {
      operandoAux = operandoAux + "3";
    }
  }
};

cuatroBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "4";
    if (bandera == true) {
      operandoAux = operandoAux + "4";
    }
  }
};

cincoBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "5";
    if (bandera == true) {
      operandoAux = operandoAux + "5";
    }
  }
};

seisBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "6";
    if (bandera == true) {
      operandoAux = operandoAux + "6";
    }
  }
};

sieteBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "7";
    if (bandera == true) {
      operandoAux = operandoAux + "7";
    }
  }
};

ochoBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "8";
    if (bandera == true) {
      operandoAux = operandoAux + "8";
    }
  }
};

nueveBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "9";
    if (bandera == true) {
      operandoAux = operandoAux + "9";
    }
  }
};

zeroBtn.onclick = function () {
  if (bandera2 == false) {
    operando.textContent = operando.textContent + "0";
    if (bandera == true) {
      operandoAux = operandoAux + "0";
    }
  }
};

comaBtn.onclick = function () {
   // console.log("aca0" + bandera3);
  if (bandera3 == false) {
   // console.log("aca1" + bandera);
    if (bandera == false) {
      operando.textContent = operando.textContent + ".";
      bandera3 = true;
    }
  //  console.log("aca2" + bandera);
    if (bandera == true) {
      operando.textContent = operando.textContent + ".";
      operandoAux = operandoAux + ".";
      bandera3 = true;
    }
  }
};

divideBtn.onclick = function () {
  if (bandera != true) {
    operandoA = operando.textContent;
    operando.textContent = operando.textContent + "÷";
    bandera = true;
    bandera3 = false;
    operacion = "/";
  }
};

multiplicaBtn.onclick = function () {
  if (bandera != true) {
    operandoA = operando.textContent;
    operando.textContent = operando.textContent + "×";
    bandera = true;
    bandera3 = false;
    operacion = "*";
  }
};

restaBtn.onclick = function () {
  if (bandera != true) {
    operandoA = operando.textContent;
    operando.textContent = operando.textContent + "-";
    bandera = true;
    bandera3 = false;
    operacion = "-";
  }
};

sumaBtn.onclick = function () {
  if (bandera != true) {
    operandoA = operando.textContent;
    operando.textContent = operando.textContent + "+";
    bandera = true;
    bandera3 = false;
    operacion = "+";
  }
};

ceBtn.onclick = function () {
  resetear();
};

cBtn.onclick = function () {
  resetear();
};

arrowBtn.onclick = function () {};

function resetear() {
  resultado.textContent = "";
  operando.textContent = "";
  operandoAux = "";
  operandoA = "";
  operacion = "";
  bandera = false;
  bandera2 = false;
  bandera3 = false;
}

igualBtn.onclick = function () {
  if (operacion == "/") {
    var resultadoFinal = parseFloat(operandoA) / parseFloat(operandoAux);
    resultado.textContent = resultadoFinal;
    bandera2 = true;
  } else if (operacion == "*") {
    var resultadoFinal = parseFloat(operandoA) * parseFloat(operandoAux);
    resultado.textContent = resultadoFinal;
    bandera2 = true;
  } else if (operacion == "-") {
    var resultadoFinal = parseFloat(operandoA) - parseFloat(operandoAux);
    resultado.textContent = resultadoFinal;
    bandera2 = true;
  } else if (operacion == "+") {
    var resultadoFinal = parseFloat(operandoA) + parseFloat(operandoAux);
    resultado.textContent = resultadoFinal;
    bandera2 = true;
  }
};
