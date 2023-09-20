const primerValor= document.querySelector(".primer-valor");

const segundoValor= document.querySelector(".segundo-valor");

const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");


const pantallita = new Pantallita(primerValor,segundoValor);

botonesNumeros.forEach(boton => { 
    boton.addEventListener("click",()=>{
        pantallita.agregarNumero(boton.innerHTML);
    })
})



botonesOperadores.forEach(boton =>{
    boton.addEventListener("click",()=> pantallita.computar(boton.value))
})

