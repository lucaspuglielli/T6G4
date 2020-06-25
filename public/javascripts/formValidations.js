const selectId = (id) => {
	return document.getElementById(id);
};
const emptyField = (input) => {
	return input.value.trim() === "";
};
const selectField = (select) => {
	return select.value.trim() === "0";
};



const formCloseSchedule = selectId("formCloseSchedule");
const formScheduleClient = selectId("formScheduleClient");


const formCategoryRegistration = selectId("formCategoryRegistration");


//ATUALIZAR INFORMAÇÕES DO ADMINISTRADOR

const formAdministratorUpdate = selectId("formAdministratorUpdate");

const editAdmErrorListUl = document.querySelector("#editadmerrorlist ul");
const editAdmErrorList = document.querySelector("#editadmerrorlist");

formAdministratorUpdate.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		editAdmErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	editAdmErrorListUl.innerHTML = "";

	if (emptyField(nameinfosadm)) {
		errorMessage("Campo <b>Nome</b> não pode estar vazio.");
	}

	if (emptyField(emailinfosadm)) {
		errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
	}

	if (emptyField(cpfinfosadm)) {
		errorMessage("Campo <b>CPF</b> não pode estar vazio.");
	}

	if (emptyField(birthdayinfosadm)) {
		errorMessage("Campo <b>Data de Nascimento</b> não pode estar vazio.");
	}

	if (emptyField(phoneinfosadm)) {
		errorMessage("Campo <b>Telefone</b> não pode estar vazio.");
	}

	if (editAdmErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		editAdmErrorList.hidden = "";
	}
});

//ALTERAR DADOS DA EMPRESA

const formCompanyUpdate = selectId("formCompanyUpdate");

const editCompErrorListUl = document.querySelector("#editcomperrorlist ul");
const editCompErrorList = document.querySelector("#editcomperrorlist");

formCompanyUpdate.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		editCompErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	editCompErrorListUl.innerHTML = "";

	if (emptyField(nomeinfosempresa)) {
		errorMessage("Campo <b>nome</b> não pode estar vazio.");
	}

	if (emptyField(emailinfosempresa)) {
		errorMessage("Campo <b>email</b> não pode estar vazio.");
	}

	if (emptyField(phone1infosempresa)) {
		errorMessage("Campo <b>telefone 1</b> não pode estar vazio.");
	}

	if (editCompErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		editCompErrorList.hidden = "";
	}
});

//CADASTRAR CLIENTE

const formClientRegistration = selectId("formClientRegistration");

const clientRegistrationErrorListUl = document.querySelector("#clientregistrationerrorlist ul");
const clientRegistrationErrorList = document.querySelector("#clientregistrationerrorlist");

formClientRegistration.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		clientRegistrationErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	clientRegistrationErrorListUl.innerHTML = "";

	if (emptyField(nomeinfoscliente)) {
		errorMessage("Campo <b>Nome</b> não pode estar vazio.");
	}

	if (emptyField(sobrenomeinfoscliente)) {
		errorMessage("Campo <b>Sobrenome</b> não pode estar vazio.");
	}

	if (emptyField(emailinfoscliente)) {
		errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
    }
    
    if (emptyField(cpfinfoscliente)) {
		errorMessage("Campo <b>CPF</b> não pode estar vazio.");
    }
    
    if (emptyField(birthdateinfoscliente)) {
		errorMessage("Campo <b>Data de Nascimento</b> não pode estar vazio.");
	}
    
    if (emptyField(phoneinfoscliente)) {
		errorMessage("Campo <b>Telefone</b> não pode estar vazio.");
	}

	if (clientRegistrationErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		clientregistrationerrorlist.hidden = "";
	}
});


// ATUALIZAR FUNCIONÁRIO
const formEmployeeUpdate = selectId("formEmployeeUpdate");

const editEmployeeErrorListUl = document.querySelector("#editemployeeerrorlist ul");
const editEmployeeErrorList = document.querySelector("#editemployeeerrorlist");

formEmployeeUpdate.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		editEmployeeErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	editEmployeeErrorListUl.innerHTML = "";

	if (selectField(editemployeenameselection)) {
		errorMessage("Você deve selecionar um funcionário.");
	}

	if (emptyField(editemployeename)) {
		errorMessage("Campo <b>nome</b> não pode estar vazio.");
	}

	if (emptyField(editemployeelastname)) {
		errorMessage("Campo <b>sobrenome</b> não pode estar vazio.");
	}

	if (emptyField(editemployeeemail)) {
		errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
	}

	if (emptyField(editemployeephone)) {
		errorMessage("Campo <b>telefone</b> não pode estar vazio.");
	}

	if (editEmployeeErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		editEmployeeErrorList.hidden = "";
	}
});

//CADASTRAR ADMINISTRADOR

const formAdministratorRegistration = selectId("formAdministratorRegistration");

const administratorRegistrationErrorListUl = document.querySelector("#administratorRegistrationErrorList ul");
const administratorRegistrationErrorList = document.querySelector("#administratorRegistrationErrorList");

formAdministratorRegistration.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		administratorRegistrationErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	administratorRegistrationErrorListUl.innerHTML = "";

	if (emptyField(admregistername)) {
		errorMessage("Campo <b>nome completo</b> não pode estar vazio.");
	}

	if (emptyField(admregisteremail)) {
		errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
	}

	if (emptyField(admregistercpf)) {
		errorMessage("Campo <b>CPF</b> não pode estar vazio.");
    }
    
    if (emptyField(admregisterbirthdate)) {
		errorMessage("Campo <b>data de nascimento</b> não pode estar vazio.");
    }
    
    if (emptyField(admregisterphone)) {
		errorMessage("Campo <b>telefone</b> não pode estar vazio.");
	}

	if (administratorRegistrationErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		administratorRegistrationErrorList.hidden = "";
	}
});


// CADASTRAR FUNCIONÁRIO

const formEmployeeRegistration = selectId("formEmployeeRegistration");

const registerEmployeeErrorListUl = document.querySelector("#registerEmployeeErrorList ul");
const registerEmployeeErrorList = document.querySelector("#registerEmployeeErrorList");

formEmployeeRegistration.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		registerEmployeeErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	registerEmployeeErrorListUl.innerHTML = "";

	if (emptyField(nameemployee)) {
		errorMessage("Campo <b>nome</b> não pode estar vazio.");
	}

	if (emptyField(lastnameemployee)) {
		errorMessage("Campo <b>sobrenome</b> não pode estar vazio.");
	}

	if (emptyField(emailemployee)) {
		errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
	}

	if (emptyField(skillsemployee)) {
		errorMessage("Campo <b>Área de atuação</b> não pode estar vazio.");
	}

	if (emptyField(phoneemployee)) {
		errorMessage("Campo <b>telefone</b> não pode estar vazio.");
	}

	if (emptyField(photoemployee)) {
		errorMessage("Você precisa selecionar uma foto.");
	}

	if (selectField(shiftstart)) {
		errorMessage("Você deve selecionar um horário de início.");
	}

	if (selectField(shiftend)) {
		errorMessage("Você deve selecionar um horário de término.");
	}

	if (parseInt(shiftend.value) <= parseInt(shiftstart.value)) {
		errorMessage("O horário de início deve anteceder o horário de término");
	}

	if (registerEmployeeErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		registerEmployeeErrorList.hidden = "";
	}
});

// AGENDAMENTO MANUAL DE CLIENTE

const formAdmScheduleClient = selectId("formAdmScheduleClient");

const formAdmScheduleClientErrorListUl = document.querySelector("#formAdmScheduleClientErrorList ul");
const formAdmScheduleClientErrorList = document.querySelector("#formAdmScheduleClientErrorList");


formAdmScheduleClient.addEventListener("submit", function (e) {
	let errorMessage = (message) => {
		formAdmScheduleClientErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	formAdmScheduleClientErrorListUl.innerHTML = "";

	if (selectField(clientschedulename)) {
		errorMessage("Você deve selecionar um cliente.");
	}

	if (selectField(clientschedulecategory)) {
		errorMessage("Você deve selecionar uma categoria.");
	}

	if (selectField(clientscheduleservice)) {
		errorMessage("Você deve selecionar um serviço.");
	}

	if (selectField(clientscheduleemployee)) {
		errorMessage("Você deve selecionar um profissional.");
	}

	if (emptyField(clientscheduledate)) {
		errorMessage("Você deve selecionar uma data.");
	}

	if (selectField(clientscheduletime)) {
		errorMessage("Você deve selecionar um horário.");
	}

	if (formAdmScheduleClientErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		formAdmScheduleClientErrorList.hidden = "";
	}
});


// FORMULÁRIO DE EDIÇÃO DE SERVIÇO

const formServiceUpdate = selectId("formServiceUpdate");
const formAdmEditServiceErrorListUl = document.querySelector('#formAdmEditServiceErrorList ul')
const formAdmEditServiceErrorList = document.querySelector('#formAdmEditServiceErrorList')

formServiceUpdate.addEventListener('submit', function(e){
		let errorMessage = (message) => {
			formAdmEditServiceErrorListUl.innerHTML += "<li>" + message + "</li>";
		};

		formAdmEditServiceErrorListUl.innerHTML = ''

		if(selectField(editserviceselectcategory)){
			errorMessage('Você deve escolher uma categoria')
		}

		if(selectField(editserviceselectname)){
			errorMessage('Você deve escolher um serviço')
		}

		if(emptyField(editservicename)){
			errorMessage('O campo <b>nome</b> não pode estar vazio.')
		}

		if(emptyField(editserviceduration)){
			errorMessage('O campo <b>duração</b> não pode estar vazio.')
		}

		if(emptyField(editservicedescription)){
			errorMessage('O campo <b>descrição</b> não pode estar vazio.')
		}

		if(emptyField(editserviceprice)){
			errorMessage('O campo <b>Preço</b> não pode estar vazio.')
		}

		if (formAdmEditServiceErrorListUl.querySelectorAll("li").length > 0) {
			e.preventDefault();
			formAdmEditServiceErrorList.hidden = "";
		}
	
})

// CADASTRAR SERVIÇO

const formServiceRegistration = selectId("formServiceRegistration");
const formAdmServiceRegistrationErrorListUl = document.querySelector('#formAdmServiceRegistrationErrorList ul')
const formAdmServiceRegistrationErrorList = document.querySelector('#formAdmServiceRegistrationErrorList')

formServiceRegistration.addEventListener('submit', function(e) {
	let errorMessage = (message) => {
		formAdmServiceRegistrationErrorListUl.innerHTML += "<li>" + message + "</li>";
	};

	formAdmServiceRegistrationErrorListUl.innerHTML = ''

	if(emptyField(serviceregistername)){
		errorMessage('O campo <b>nome</b> não pode estar vazio.')
	}

	if(selectField(serviceregistercategory)){
		errorMessage('Você deve escolher uma categoria')
	}

	if(emptyField(serviceduration)){
		errorMessage('O campo <b>duração</b> não pode estar vazio.')
	}

	if(emptyField(servicedescription)){
		errorMessage('O campo <b>descrição</b> não pode estar vazio.')
	}

	if(emptyField(serviceprice)){
		errorMessage('O campo <b>preço</b> não pode estar vazio.')
	}

	if (formAdmServiceRegistrationErrorListUl.querySelectorAll("li").length > 0) {
		e.preventDefault();
		formAdmServiceRegistrationErrorList.hidden = "";
	}
})