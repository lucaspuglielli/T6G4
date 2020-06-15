let agendamento = false;
let servico = false;
let categoria = false;
let funcionario = false;
let administrador = false;

let formIndex = 1;

showForms(formIndex);

function currentForm(n) {
    showForms((formIndex = n));
}

function showForms(n) {
    let i;
    let forms = document.getElementsByClassName("forms");
    let subforms = document.getElementsByClassName("subforms");
    let borda = document.getElementsByClassName("opcaoinfos");
    if(formIndex != 1){
    administrador = false;
    subforms[4].style.display = "none";
    forms[0].style.display = "block";
    }
    if(formIndex != 3){
    agendamento = false;
    subforms[0].style.display = "none";
    forms[2].style.display = "block";
    }
    if(formIndex != 4){
    funcionario = false;
    subforms[1].style.display = "none";
    forms[3].style.display = "block";
    }
    if(formIndex != 6){
    servico = false;
    categoria = false;
    subforms[2].style.display = "none";
    subforms[3].style.display = "none";
    forms[5].style.display = "block";
    }
    for (i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }
    for (i = 0; i < forms.length; i++) {
        borda[i].className = borda[i].className.replace(" borda", "");
    }
    if(!agendamento && !servico && !categoria && !funcionario && !administrador){
        forms[formIndex - 1].style.display = "block";
    }
    borda[formIndex - 1].className += " borda";
}

function displaysub(n){
    let forms = document.getElementsByClassName("forms");
    let subforms = document.getElementsByClassName("subforms");
    for (i = 0; i < subforms.length; i++) {
        subforms[i].style.display = "none";
    }
    subforms[n - 1].style.display = "block"
    if(n = 1){
    forms[2].style.display = "none";
    agendamento = true;
    }
    if(n = 2){
    forms[3].style.display = "none";
    funcionario = true;
    }
    if(n = 3){
    forms[5].style.display = "none";
    servico = true;
    }
    if(n = 4){
    forms[5].style.display = "none";
    categoria = true;
    }
    if(n = 5){
    forms[0].style.display = "none";
    administrador = true;
    }
}

// *** FORM EDIÇÃO DE FUNCIONÁRIOS ***

const editEmployeeSelect = document.getElementById('editemployeename');
const editEmployeeEmail = document.getElementById('editemployeeemail');

function preencherCampo() {
    const idEmployee = editEmployeeSelect.value.trim();
    return editEmployeeEmail.value = employees[idEmployee].name;
};