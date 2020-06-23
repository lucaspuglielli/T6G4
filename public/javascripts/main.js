let administrador = false;
let cliente = false;
let funcionario = false;
let servico = false;
let categoria = false;


let formIndex = 4;

showForms(formIndex);

function currentForm(n) {
	showForms((formIndex = n));
}

function showForms(n) {
	let i;
	let forms = document.getElementsByClassName("forms");
	let subforms = document.getElementsByClassName("subforms");
	let borda = document.getElementsByClassName("opcaoinfos");
	if (formIndex != 1) {
		administrador = false;
		subforms[0].style.display = "none";
		forms[0].style.display = "block";
	}
	if (formIndex != 3) {
		cliente = false;
		subforms[1].style.display = "none";
		forms[2].style.display = "block";
	}
	if (formIndex != 4) {
		funcionario = false;
		subforms[2].style.display = "none";
		forms[3].style.display = "block";
	}
	if (formIndex != 6) {
		servico = false;
		categoria = false;
		subforms[3].style.display = "none";
		subforms[4].style.display = "none";
		forms[5].style.display = "block";
	}
	for (i = 0; i < forms.length; i++) {
		forms[i].style.display = "none";
	}
	for (i = 0; i < forms.length; i++) {
		borda[i].className = borda[i].className.replace(" borda", "");
	}
	if (
		!administrador &&
		!cliente &&
		!funcionario &&
		!servico &&
		!categoria
	) {
		forms[formIndex - 1].style.display = "block";
	}
	borda[formIndex - 1].className += " borda";
}

function displaysub(n) {
	let forms = document.getElementsByClassName("forms");
	let subforms = document.getElementsByClassName("subforms");
	for (i = 0; i < subforms.length; i++) {
		subforms[i].style.display = "none";
	}
	subforms[n - 1].style.display = "block";
	if ((n = 1)) {
		forms[0].style.display = "none";
		administrador = true;
	}
	if ((n = 2)) {
		forms[2].style.display = "none";
		cliente = true;
	}
	if ((n = 3)) {
		forms[3].style.display = "none";
		funcionario = true;
	}
	if ((n = 4)) {
		forms[5].style.display = "none";
		servico = true;
	}
	if ((n = 5)) {
		forms[5].style.display = "none";
		categoria = true;
	}
}



// *** FORM EDIÇÃO DE FUNCIONÁRIOS ***

const editEmployeeSelect = document.getElementById("editemployeenameselection");
const editEmployeeImage = document.querySelector(".subcontainereditarfuncionario2");
const editEmployeeEmail = document.getElementById("editemployeeemail");
const editEmployeePhone = document.getElementById("editemployeephone");
const editEmployeeDom = document.getElementById("dominfosfuncionario");
const editEmployeeSeg = document.getElementById("seginfosfuncionario");
const editEmployeeTer = document.getElementById("terinfosfuncionario");
const editEmployeeQua = document.getElementById("quainfosfuncionario");
const editEmployeeQui = document.getElementById("quiinfosfuncionario");
const editEmployeeSex = document.getElementById("sexinfosfuncionario");
const editEmployeeSab = document.getElementById("sabinfosfuncionario");
const editEmployeeShiftstart = document.getElementById("editemployeeshiftstart");
const editEmployeeShiftend = document.getElementById("editemployeeshiftend");
const editEmployeeName = document.getElementById("editemployeename");
const editEmployeeLastname = document.getElementById("editemployeelastname");

// Parte de filtragem de serviços e preços e funcionarios
const inputServico = document.getElementById('clientscheduleservice')
const inputCategoria = document.getElementById('clientschedulecategory')
const inputPreco = document.getElementById('clientscheduleserviceprice')
const divInputPreco = document.getElementById('divclientscheduleserviceprice')
const divInputServico = document.getElementById('divclientscheduleservice')
const inputFuncionario = document.getElementById('clientscheduleemployee')
const inputDias = document.getElementById('clientscheduledate')
const inputHorario = document.getElementById('clientscheduletime')


let employees = []
let dias = []
let servicos = []
let employeesSkills = []
let agendamentos = []

fetch('http://localhost:3000/api/funcionario')
.then((resposta) => resposta.json())
.then((dados) => {
	return employees = dados
})

fetch('http://localhost:3000/api/dias')
.then((resposta) => resposta.json())
.then((dados) => {
	return dias = dados
})

fetch('http://localhost:3000/api/services')
.then((resposta) => resposta.json())
.then((dados) => {
	return servicos = dados
})

fetch('http://localhost:3000/api/employee-skills')
.then((resposta) => resposta.json())
.then((dados) => {
	return employeesSkills = dados
})

fetch('http://localhost:3000/api/schedules')
.then((resposta) => resposta.json())
.then((dados) => {
	return agendamentos = dados
})

inputCategoria.addEventListener('change', function(){
	divInputServico.hidden = '';
	inputServico.innerHTML = '<option value="0" selected="selected">Selecione</option>'
	for(let i=0; i < servicos.length; i++){
		if(servicos[i].id_category == inputCategoria.value.trim()){
			inputServico.innerHTML += `
			<option value="${servicos[i].id}">${servicos[i].name}</option>
			`
		}
	}
})

inputServico.addEventListener('change', function(){
	inputPreco.value = servicos[inputServico.value.trim()-1].price;
	divInputPreco.hidden = "";
	inputFuncionario.innerHTML = '<option value="0" selected="selected">Selecione</option>'
	let idFuncionarios = []
	for(let i=0; i < employeesSkills.length; i++){
		if(employeesSkills[i].id_service == inputServico.value.trim()){
			idFuncionarios.push(employeesSkills[i].id_employee);
		}
	}
	for(let i=0; i<idFuncionarios.length; i++){
		inputFuncionario.innerHTML += `
			<option value="${employees[idFuncionarios[i]-1].id}">${employees[idFuncionarios[i]-1].name} ${employees[idFuncionarios[i]-1].lastname}</option>
			`
	}
})

function removerPorValor(array, valor) {
	return array.filter(function(el) { 
	  return el != valor; 
	});
}

inputFuncionario.addEventListener('change', function(){
	let datasAgendadas = []
	let horariosPadrao = []
	let datas = []
	let datasLotadas = []
	let filtrarDatas = []
	let idFuncionario = inputFuncionario.value.trim();
	//Variaveis para setar Horarios
	let horarioInicio = 0
	let horarioFim = 0
	let horasTrabalhadas = 0

	for(i = 0; i < agendamentos.length; i++){
		if(agendamentos[i].id_employee == idFuncionario){
			datasAgendadas.push(agendamentos[i])
		};
	};

	function setarHorariosPadrao(diferencaHoras){
		for(let i=0; i < diferencaHoras; i++){
			if(horarioInicio<=horarioFim){
				horariosPadrao.push(`${horarioInicio}:00`)
				horarioInicio += 1;
			}
		}
	}

	horarioInicio = parseInt(employees[idFuncionario - 1].shiftstart)
	horarioFim = parseInt(employees[idFuncionario - 1].shiftend)
	horasTrabalhadas = (horarioFim - horarioInicio) + 1

	setarHorariosPadrao(horasTrabalhadas)

	horariosPadraoFuncionario = horariosPadrao


	for(let i=0; i<datasAgendadas.length;i++){
		filtrarDatas.push(datasAgendadas[i].start_date);
	}

	filtrarDatas = filtrarDatas.filter(function(este, i) {
		return filtrarDatas.indexOf(este) === i;
	});


	for(let i=0; i<filtrarDatas.length;i++){
		let agendamentoPadrao = {
			data: '',
			horarios: []
		}
		agendamentoPadrao.data = filtrarDatas[i]
		datas.push(agendamentoPadrao)
	}

	

	for(let i=0; i<datas.length;i++){
		datas[i].horarios = horariosPadrao
	}

	function filtrarHorarios(array){
		for(let x=0; x<datas.length; x++){
			if(datas[x].data == array.start_date){
				datas[x].horarios = removerPorValor(datas[x].horarios, array.start_time)
			}
		}

	}
	// Verificar
	for(let i=0; i<datasAgendadas.length;i++){
		filtrarHorarios(datasAgendadas[i])
	}

	for(let i=0; i<datas.length; i++){
		if(datas[i].horarios.length == 0){
			datasLotadas.push(datas[i].data)
		}
	}
	

	dates = datasLotadas;
	diasDisponiveis = datas;
})

// *** DATEPICKER DINÂMICO AGENDAMENTO MANUAL DE CLIENTE ***
var dates = [];

      function DisableDates(date) {
        var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
        return [dates.indexOf(string) == -1];
      }

      $(function () {
        $("#clientscheduledate").datepicker({
          dateFormat: 'dd/mm/yy',
          minDate: new Date(),
          beforeShowDay: DisableDates
        });
      });

// *** DATEPICKER DINÂMICO AGENDAMENTO MANUAL DE CLIENTE ***

// Variavel com dia e horário do funcionário.
let diasDisponiveis = {};
let horariosDisponiveis = [];
let horariosPadraoFuncionario = [];

inputHorario.addEventListener('focusin', function() {
	const dataEscolhida = inputDias.value;
	
	inputHorario.innerHTML = `<option value="0" selected="selected" disabled>Selecione o horário.</option>`

	for(let i = 0; i < diasDisponiveis.length; i++) {
		if(diasDisponiveis[i].data == dataEscolhida) {
			horariosDisponiveis = diasDisponiveis[i].horarios;
		} else {
			horariosDisponiveis = horariosPadraoFuncionario;
		}
	}

	for(let i = 0; i < horariosDisponiveis.length; i++) {
		inputHorario.innerHTML += `<option value="${horariosDisponiveis[i]}">${horariosDisponiveis[i]}</option>`
	}
})


function preencherCampo() {
	let selectedEmployee = employees.filter(function (elem) {
		return elem.id == editEmployeeSelect.value.trim();
	});
	editEmployeeName.value = selectedEmployee[0].name;
	editEmployeeImage.innerHTML = `<img src="/images/${selectedEmployee[0].photo}" alt="" class="editemployeeimage">`;
	console.log(selectedEmployee[0].photo)
	editEmployeeLastname.value = selectedEmployee[0].lastname;
	editEmployeeEmail.value = selectedEmployee[0].email;
	editEmployeePhone.value = selectedEmployee[0].phone;
	editEmployeeShiftstart.value = selectedEmployee[0].shiftstart;
	editEmployeeShiftend.value = selectedEmployee[0].shiftend;
	if(dias.find(element => element.id_employee == selectedEmployee[0].id).sunday == 0){
		editEmployeeDom.checked = false;
	}else {
		editEmployeeDom.checked = true;
	}

	if(dias.find(element => element.id_employee == selectedEmployee[0].id).monday == 0){
		editEmployeeSeg.checked = false;
	}else {
		editEmployeeSeg.checked = true;
	}

	if(dias.find(element => element.id_employee == selectedEmployee[0].id).tuesday == 0){
		editEmployeeTer.checked = false;
	}else {
		editEmployeeTer.checked = true;
	}

	if(dias.find(element => element.id_employee == selectedEmployee[0].id).wednesday == 0){
		editEmployeeQua.checked = false;
	}else {
		editEmployeeQua.checked = true;
	}

	if(dias.find(element => element.id_employee == selectedEmployee[0].id).thursday == 0){
		editEmployeeQui.checked = false;
	}else {
		editEmployeeQui.checked = true;
	}

	if(dias.find(element => element.id_employee == selectedEmployee[0].id).friday == 0){
		editEmployeeSex.checked = false;
	}else {
		editEmployeeSex.checked = true;
	}

	if(dias.find(element => element.id_employee == selectedEmployee[0].id).saturday == 0){
		editEmployeeSab.checked = false;
	}else {
		editEmployeeSab.checked = true;
	}
	
}

// *** DINÂMICA FORMULÁRIO DE EDIÇÃO DE SERVIÇO

// const formServiceUpdate = document.getElementById('formServiceUpdate');
const editServiceSelectCategory = document.getElementById('editserviceselectcategory');
const editServiceSelectName = document.getElementById('editserviceselectname');
const editServiceName = document.getElementById('editservicename');
const editServiceDuration = document.getElementById('editserviceduration');
const editServiceDescription = document.getElementById('editservicedescription');
const editServicePrice = document.getElementById('editserviceprice');



editServiceSelectCategory.addEventListener('change', function() {
	
	editServiceSelectName.innerHTML = `<option value='0' selected='selected' disabled>Selecionar</option>`;
	
	const idCategory = editServiceSelectCategory.value.trim();

	for ( let i = 0; i < servicos.length; i++) {
		if(servicos[i].id_category == idCategory){
			editServiceSelectName.innerHTML += `<option value='${servicos[i].id}'>${servicos[i].name}</option>`;
		}	
		
	}

})

editServiceSelectName.addEventListener('change', function() {
	
	const idCategory = editServiceSelectCategory.value.trim();
	
	for(let i=0; i< servicos.length; i++){
	if(servicos[i].id_category == idCategory){
	editServiceName.value = servicos[i].name
	editServiceDuration.value = servicos[i].duration
	editServiceDescription.value = servicos[i].description
	editServicePrice.value = servicos[i].price
	}
}
// checkboxes
	const editserviceemployeescheckboxes = document.querySelector('#editserviceemployeescheckboxes');
	const idEmployee = editserviceemployeescheckboxes.querySelectorAll('input');
	
function checkbox(id) {
	for(let i = 0; i < idEmployee.length; i++) {
		if(id == idEmployee[i].value) {
			idEmployee[i].checked = true;
		}
	}
}

for(let i = 0; i < idEmployee.length; i++) {
	
	idEmployee[i].checked = false;
	
}

	for (let i = 0; i< employeesSkills.length; i++) {
		if(employeesSkills[i].id_service == editServiceSelectName.value.trim()) {
			checkbox(employeesSkills[i].id_employee);
		}
	}
});

