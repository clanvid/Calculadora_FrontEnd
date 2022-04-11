$(document).ready(function(){
    
    // Titulo principal y encabezados.
    $('.contenedor_1').css('text-align','center');
    $('#tit_principal').css('color','cadetblue')
                       .text("JAVA M2 Sprint Final.");
    $('#tit_desc_ejercicio').css('color','rgb(71, 119, 121')
                            .text("Calculadora FrontEnd");
    $('h4').css('color','rgb(81, 103, 104)');
    $('#tit_autor').text("Autor: Claudio Vidal.");
    $('#tit_fecha').text("Abril 2022 - Awakelab");

});


var operando_a;
var operando_b;
var operacion;

function init(){
    //alert("Hola");
    //Variables.
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    //Eventos.
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operando_a = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operando_a = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operando_a = resultado.textContent;
        operacion = "x";
        limpiar();
    }
    division.onclick = function(e){
        operando_a = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operando_b = resultado.textContent;
        calcular();
    }
    
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operando_a = 0;
    operando_b = 0;
    operacion = "";
}

function calcular(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operando_a) + parseFloat(operando_b);
            break;
        case "-":
            res = parseFloat(operando_a) - parseFloat(operando_b);
            break;
        case "x":
            res = parseFloat(operando_a) * parseFloat(operando_b);
            break;
        case "/":
            res = parseFloat(operando_a) / parseFloat(operando_b);
            break;
    }
    resetear();
resultado.textContent = res;
}

