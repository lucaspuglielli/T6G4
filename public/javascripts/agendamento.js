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

fetch("http://localhost:3000/api/categories")
.then((resposta) => resposta.json())
.then((dados) => {
	return categories = dados
})

"http://localhost:3000/api/categories"

inputCategoria.addEventListener('focusin', function(){
	inputCategoria.innerHTML = '<option value="0" selected="selected">Selecione</option>';
	for(let i = 0; i < categories.length; i++) {
		inputCategoria.innerHTML += `<option value="${categories[i].id}">${categories[i].name}</option>`;
	};
});

inputServico.addEventListener('focusin', function(){
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

	idFuncionarios = idFuncionarios.filter(function(este, i) {
		return idFuncionarios.indexOf(este) === i;
	});

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

const datelocal = document.getElementById('datelocal')

// function resetDates(date){
// 	let habilitar = setCustomDate(date)
//   }

// inputFuncionario.addEventListener('focusin', function(){
// 	$("#clientscheduledate").datepicker('destroy')
// 	$( "#clientscheduledate" ).datepicker( "setDate", null );
// 	$(function () {
//         $("#clientscheduledate").datepicker({
//           dateFormat: 'dd/mm/yy',
// 		  minDate: new Date(),
// 		  maxDate: "+1m",
// 		  beforeShowDay: resetDates,
// 		  beforeShowDay: setCustomDate
// 		});
//       });
// })



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

	// resetar datepicker
	// datelocal.innerHTML = ''
	// datelocal.innerHTML = `
	// <div class="form-group">
	// 	<label for="clientscheduledate" class="label-form">Dia</label><br>
	// 	<input type="text" placeholder="Selecione a data." name="clientscheduledate" class="form-control form-control-lg form-border" id="clientscheduledate">
	// </div>
	// `
	
	// employeeDayOff = []
	for(let i=0; i< dias.length; i++){
		if(dias[i].id_employee == inputFuncionario.value){
			if(dias[i].monday == 0){
				employeeDayOff.push(1)
			}
			if(dias[i].tuesday == 0){
				employeeDayOff.push(2)
			}
			if(dias[i].wednesday == 0){
				employeeDayOff.push(3)
			}
			if(dias[i].thursday == 0){
				employeeDayOff.push(4)
			}
			if(dias[i].friday == 0){
				employeeDayOff.push(5)
			}
			if(dias[i].saturday == 0){
				employeeDayOff.push(6)
			}
			if(dias[i].sunday == 0){
				employeeDayOff.push(0)
			}
		}
	}

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
	lotadasDatas = datasLotadas
	diasDisponiveis = datas;
	console.log(dates)
})

// *** DATEPICKER DINÂMICO AGENDAMENTO MANUAL DE CLIENTE ***
var dates = [];
var employeeDayOff = []
var lotadasDatas = []

		
function daysOff(date){
	for(let i=0; i< employeeDayOff.length; i++){
		if(date.getDay() == employeeDayOff[i]){
			// console.log('dia igual ao elemento do array: ' + employeeDayOff[i])
			var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
			return[dates.push(string)]
		}
	}
	return[true, '']
}

      function DisableDates(date) {
		var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
        return [dates.indexOf(string) == -1];
	  }
	  
	  function setCustomDate(date){
		  var clazz = ''
		  var arr1 = daysOff(date)
		  if(arr1[1] != '') clazz = arr1[1]

		  var arr2 = DisableDates(date)

		  return[(!arr2[0]) ? false : true, clazz]
		//   return[]
	  }

	  

      $(function () {
        $("#clientscheduledate").datepicker({
          dateFormat: 'dd/mm/yy',
		  minDate: new Date(),
		  maxDate: "+1m",
		  beforeShowDay: setCustomDate
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

	
	if(diasDisponiveis.length > 0) {
		for(let i = 0; i < diasDisponiveis.length; i++) {
			if(diasDisponiveis[i].data == dataEscolhida) {
				horariosDisponiveis = diasDisponiveis[i].horarios;
			} else {
				horariosDisponiveis = horariosPadraoFuncionario;
			}
		}
	} else {
		horariosDisponiveis = horariosPadraoFuncionario
	}

	for(let i = 0; i < horariosDisponiveis.length; i++) {
		inputHorario.innerHTML += `<option value="${horariosDisponiveis[i]}">${horariosDisponiveis[i]}</option>`
	}
})