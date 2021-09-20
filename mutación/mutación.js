var boton = document.getElementById("btn")
boton.addEventListener("click", osos, true)

var individuos = 
[
    individuo1={
        mutación : Math.floor((Math.random() * 100) + 1),
        muerte : Math.floor((Math.random() * 100) + 1),
        estado:true,
        color:true, 
    },
    individuo2={
        mutación : Math.floor((Math.random() * 100) + 1),
        muerte : Math.floor((Math.random() * 100) + 1),
        estado:true,
        color:true, 
    },
    individuo3={
        mutación : Math.floor((Math.random() * 100) + 1),
        muerte : Math.floor((Math.random() * 100) + 1),
        estado:true,
        color:true, 
    },
    individuo4={
        mutación : Math.floor((Math.random() * 100) + 1),
        muerte : Math.floor((Math.random() * 100) + 1),
        estado:true,
        color:true, 
    },
    individuo5={
        mutación : Math.floor((Math.random() * 100) + 1),
        muerte : Math.floor((Math.random() * 100) + 1),
        estado:true,
        color:true, 
    }
];
var generacion1 = [];
var hijos_generacion1 = [];
var generacion2 = [];
var hijos_generacion2 = [];
var generacion3 = [];
var hijos_generacion3 = [];
var generacion4 = [];
var hijos_generacion4 = [];
var generacion5 = [];
var hijos_generacion5 = [];
var generacion6 = [];
var hijos_generacion6 = [];
var generacion7 = [];
var hijos_generacion7 = [];
var generacion8 = [];
var hijos_generacion8 = [];
var generacion9 = [];
var hijos_generacion9 = [];
var generacion10 = [];
var hijos_generacion10 = [];

// var veses = [];
// class array {
//     constructor(veses) {
//         this.generacion = [
//     ];
//         this.hijos_generacion = [];
//     }
// }

var largoo1 = true;
var ouput_arrayy2 = true;

function ciclo (largoo, input_array, array_1ouput_2input, ouput_array2) {
    estado(largoo, input_array)
    mutación(largoo, input_array)
    sobrevivientes (largoo, input_array, array_1ouput_2input)
    largoo2 = array_1ouput_2input.length-1;
    hijos1(largoo2,array_1ouput_2input, ouput_array2)

    largoo1 = ouput_array2.length-1;
    ouput_arrayy2 = ouput_array2;
    M = 10;
}

function ciclo2 (generacion, hijos_generacion) {
    estado(largoo1, ouput_arrayy2)
    mutación(largoo1, ouput_arrayy2)
    sobrevivientes (largoo1, ouput_arrayy2, generacion)
    largoo2 = generacion.length-1;
    hijos1(largoo2,generacion, hijos_generacion)

    largoo1 = hijos_generacion.length-1;
    ouput_arrayy2 = hijos_generacion;
    M = M + 10;
}

function estado(largoo, input_array) {
    i = i-i;
    while (i <= largoo) {
        if (input_array [0+i].muerte >= 40) 
    {
        input_array [0+i].estado = "vivo"
    }  
    else 
    {
        input_array [0+i].estado = "muerto"
    }
    
    i ++;
    } 
}
function mutación(largoo, input_array) {
    i = i-i;
while (i <= largoo) {

    if (input_array [0+i].estado === "vivo" && input_array [0+i].mutación <= 20) 
    {
        input_array [0+i].color = "blanco"
    } 
    else 
    {
        input_array [0+i].color = "negro"
    }
    i ++;
}   
}

function sobrevivientes (largoo, input_array, ouput_array) {
    i = i-i;
    while (i <= largoo) {

        if (input_array [0+i].estado === "vivo") 
    {
        ouput_array.push(input_array[0+i])
    }  
    else 
    {

    }  
    i ++;
    }
}

N = 0;
function hijos1(largoo,input_array, ouput_array) {
    i = i-i;
    while (i <= largoo) {
        if (input_array[0+i].color === "blanco")
        {
            hijoB= new oso(M);
            ouput_array.push(hijoB)  
            hijoB= new oso(M);
            ouput_array.push(hijoB) 
        } 
        else {
            hijoN= new oso(N);
            ouput_array.push(hijoN);  
            hijoN= new oso(N);
            ouput_array.push(hijoN);
        }
        i ++;
        }
}

class oso {
    constructor(m) {
        this.muerte = Math.floor((Math.random() * 100) + 1+m);
        this.mutación = Math.floor((Math.random() * 100) + 1-m);
        this.estado = true;
        this.color = true;
    }
}

i = 0;
M = 0;

function  osos() {
    largo = individuos.length-1;
    ciclo (largo, individuos, generacion1, hijos_generacion1)
    ciclo2 (generacion2, hijos_generacion2)
    ciclo2 (generacion3, hijos_generacion3)
    ciclo2 (generacion4, hijos_generacion4)
    ciclo2 (generacion5, hijos_generacion5)
    ciclo2 (generacion6, hijos_generacion6)
    ciclo2 (generacion7, hijos_generacion7)
    ciclo2 (generacion8, hijos_generacion8)
    ciclo2 (generacion9, hijos_generacion9)
    ciclo2 (generacion10, hijos_generacion10)
}

// var txt_1 = document.querySelector('input1');
// var txt_2 = document.querySelector('input2');
// var txt_3 = document.querySelector('input3');
// var txt_4 = document.querySelector('input4');
// var txt_5 = document.querySelector('input5');
// var txt_6 = document.querySelector('input6');
// var txt_7 = document.querySelector('input7');
// var txt_8 = document.querySelector('input8');
// var txt_9 = document.querySelector('input9');
// var txt_10 = document.querySelector('input10');

// function printt ()
// {
//     i = 1;
//     largo1 = generacion1.length-1;
//     while (i <= largo1) {
//         b =  generacion1[0].color;
//         var txt_1 = document.querySelector('input1');
//         txt_1.textContent. = b + " " + a;
//         i ++;
//     }
// }


