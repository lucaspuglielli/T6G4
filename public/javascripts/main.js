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
	let horariosPadrao = ['08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00']
	let datas = []
	let datasLotadas = []

	let filtrarDatas = []

	let datasParaMostrar = []
	

	let idFuncionario = inputFuncionario.value.trim();

	for(i = 0; i < agendamentos.length; i++){
		if(agendamentos[i].id_employee == idFuncionario){
			datasAgendadas.push(agendamentos[i])
		};
	};

	datas = datas.filter(function(este, i) {
		return datas.indexOf(este) === i;
	});

	for(let i=0; i<datasAgendadas.length;i++){
		filtrarDatas.push(datasAgendadas[i].start_date);
	}

	filtrarDatas = filtrarDatas.filter(function(este, i) {
		return filtrarDatas.indexOf(este) === i;
	});
	//console.log(filtrarDatas)


	for(let i=0; i<filtrarDatas.length;i++){
		let agendamentoPadrao = {
			data: '',
			horarios: []
		}
		agendamentoPadrao.data = filtrarDatas[i]
		datas.push(agendamentoPadrao)
	}

	console.log(datas)

	for(let i=0; i<datas.length;i++){
		datas[i].horarios = ['08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00']
	}

	

	function verificar(data){
		for(let i=0; i<datasAgendadas;i++){
			if(data = datasAgendadas[i].start_date){
				horariosPadrao = removerPorValor(horariosPadrao, datasAgendadas[i].start_time)
			}
		}
	}

	function filtrarHorarios(array){
		for(let x=0; x<datas.length; x++){
			if(datas[x].data == array.start_date){
				datas[x].horarios = removerPorValor(datas[x].horarios, array.start_time)
			}
		}
	}

	for(let i=0; i<datasAgendadas.length;i++){
		filtrarHorarios(datasAgendadas[i])
	}

	console.log(datas)

	for(let i=0; i<datas;i++){
		if(datas.data == ""){
			datasLotadas.push(datas.data)
		}
	}


	// faze de testes
	function setarDatas(){
		let newDate = new Date()
		for(let i=0; i<7; i++){
			inputDias.innerHTML += `
			<option value="${newDate}">${employees[idFuncionarios[i]-1].name} ${employees[idFuncionarios[i]-1].lastname}</option>
			`
		}
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
