let administrador = false;
let cliente = false;
let funcionario = false;
let servico = false;
let categoria = false;

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

let employees = []
let dias = []

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


function preencherCampo() {
	const idEmployee = editEmployeeSelect.value.trim();
	editEmployeeName.value = employees[idEmployee -1].name;
	editEmployeeLastname.value = employees[idEmployee -1].lastname;
	editEmployeeEmail.value = employees[idEmployee - 1].email;
	editEmployeePhone.value = employees[idEmployee - 1].phone;
	editEmployeeShiftstart.value = employees[idEmployee - 1].shiftstart;
	editEmployeeShiftend.value = employees[idEmployee - 1].shiftend;
	if(dias.find(element => element.id_employee == idEmployee).sunday == 0){
		editEmployeeDom.checked = false;
	}else {
		editEmployeeDom.checked = true;
	}

	if(dias.find(element => element.id_employee == idEmployee).monday == 0){
		editEmployeeSeg.checked = false;
	}else {
		editEmployeeSeg.checked = true;
	}

	if(dias.find(element => element.id_employee == idEmployee).tuesday == 0){
		editEmployeeTer.checked = false;
	}else {
		editEmployeeTer.checked = true;
	}

	if(dias.find(element => element.id_employee == idEmployee).wednesday == 0){
		editEmployeeQua.checked = false;
	}else {
		editEmployeeQua.checked = true;
	}

	if(dias.find(element => element.id_employee == idEmployee).thursday == 0){
		editEmployeeQui.checked = false;
	}else {
		editEmployeeQui.checked = true;
	}

	if(dias.find(element => element.id_employee == idEmployee).friday == 0){
		editEmployeeSex.checked = false;
	}else {
		editEmployeeSex.checked = true;
	}

	if(dias.find(element => element.id_employee == idEmployee).saturday == 0){
		editEmployeeSab.checked = false;
	}else {
		editEmployeeSab.checked = true;
	}
	
}
