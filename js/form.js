button.addEventListener("click", function(event){
    event.preventDefault(); //Previna o comportamento default do button que é recarregar a página
    //pegando dados do form
    var form= document.querySelector("#form");
    var tablePacientes= document.querySelector("#tabela-pacientes");
    var message= document.querySelector("#messageError");
    var paciente= getValuesInputs(form);
    var erros= validatePaciente(paciente);
    
    if(erros.length > 0){
        message.textContent= erros.pop(0);
        console.log("Paciente inválido!");
        return;
    }

    var pacienteTr= createTr(paciente);

    tablePacientes.appendChild(pacienteTr);
    form.reset(); //clean form
 
});

function getValuesInputs(form){
    //conseguimos acessar os inputs pelo name
    //var altura= form.altura.value;
    //var peso= form.peso.value;
    //var gordura= form.gordura.value;
    //criando objetos
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function createTr(paciente){
    //Um paciente é uma tr, que possui várias td    
    var newPacienteTr= document.createElement("tr");
    newPacienteTr.classList.add("paciente");

    // var nomeTd= document.createElement("td").classList.add("info-nome");
    // var alturaTd= document.createElement("td").classList.add("info-altura");
    // var pesoTd= document.createElement("td").classList.add("info-peso");
    // var gorduraTd= document.createElement("td").classList.add("info-gordura");
    // var imcTd= document.createElement("td").classList.add("info-imc");

    // nomeTd.textContent= paciente.nome;
    // alturaTd.textContent= paciente.altura;
    // pesoTd.textContent= paciente.peso;
    // gorduraTd.textContent= paciente.gordura;
    // imcTd.textContent= paciente.imc;

    newPacienteTr.appendChild(createTd(paciente.nome, "info-nome"));
    newPacienteTr.appendChild(createTd(paciente.peso, "info-peso"));
    newPacienteTr.appendChild(createTd(paciente.altura, "info-altura"));
    newPacienteTr.appendChild(createTd(paciente.gordura, "info-gordura"));
    newPacienteTr.appendChild(createTd(paciente.imc, "info-imc"));
    return newPacienteTr;
}

function createTd(data, classe){
    var td= document.createElement("td");
    td.classList.add(classe);
    td.textContent= data;
    return td;
}

function validatePaciente(paciente){
    var erros= [];
    if(!validateWeigth(paciente.peso)){
        erros.push("Peso inválido!");
    }
    if(!validateHeight(paciente.altura)){
        erros.push("Altura inválida!");
    }
    return erros;
}