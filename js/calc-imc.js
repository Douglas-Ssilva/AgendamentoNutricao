
//console.log(document.querySelector("h1")); Colocar sempre como última coisa.Nao sabe da existencia do que exite p baixo. No console ele consegue encontrar pois a tela já foi renderizada
//console.log(title);
var title= document.querySelector(".title"); //Boa prática buscando pela class, visto que se mudar de h1 p h2 nao quebra o codigo. Devolve um objeto que representa algo
console.log(title.textContent);
title.textContent= "Nutricionista Aparecida"; //Tags que possuem conteúdos de texto, acessamos assim


//get paciente
//var primeiroPaciente= document.querySelector("#primeiroPaciente"); trazendo a tr, tras somente o primeiro tr
var pacientes= document.querySelectorAll(".paciente");
var h2= document.querySelector("#h2NameTable");
var button= document.querySelector("#adicionar-paciente");



for(var i= 0; i < pacientes.length; i++){
    var paciente= pacientes[i];
    
    var tdPeso= paciente.querySelector(".info-peso"); //get td
    var peso= tdPeso.textContent;
    var tdAltura= paciente.querySelector(".info-altura");
    var altura= tdAltura.textContent;
    var tdIMC= paciente.querySelector(".info-imc");

    var flagPeso= validateWeigth(peso);
    var flagAltura= validateHeight(altura);

    if(!flagPeso){
        tdIMC.textContent= "Peso inválido!";
        flagPeso= false;
        paciente.classList.add("message-inputs-invalids");
    }
    if(!flagAltura){
        tdIMC.textContent= "Altura inválida!";
        flagAltura= false;
        paciente.style.backgroundColor= "lightcoral"; //Não aceita o '-'
    }
    canICalculateIMC(flagAltura, flagPeso);
    
    // validateWeigth(peso);
    // validateHeight(altura);
}

title.addEventListener("mouseover", function(){console.log("Teste");
}); //usando function anonima, ou podemos passar o nome da função sem os ()

h2.addEventListener("mouseout", function(){console.log("MouseOut");
});

function calImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function validateWeigth(peso){
    if(peso <= 0 || peso >= 500){
        return false;
    }
    return true;
}

function validateHeight(heigth){
    if(heigth <= 0 || heigth >= 3.00){
        return false;
    }
    return true;
}

function canICalculateIMC(flagAltura, flagPeso){
    if(flagAltura && flagPeso){
        tdIMC.textContent= calImc(peso, altura);
    }
}













































