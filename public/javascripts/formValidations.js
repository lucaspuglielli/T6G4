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
const formServiceUpdate = selectId("formServiceUpdate");
const formScheduleClient = selectId("formScheduleClient");
const formEmployeeRegistration = selectId("formEmployeeRegistration");
const formServiceRegistration = selectId("formServiceRegistration");
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

// const formAdministratorRegistration = selectId("formAdministratorRegistration");

// const administratorRegistrationErrorListUl = document.querySelector("#administratorRegistrationErrorList ul");
// const administratorRegistrationErrorList = document.querySelector("#administratorRegistrationErrorList");

// formClientRegistration.addEventListener("submit", function (e) {
// 	let errorMessage = (message) => {
// 		clientRegistrationErrorListUl.innerHTML += "<li>" + message + "</li>";
// 	};

// 	clientRegistrationErrorListUl.innerHTML = "";

// 	if (emptyField(nomeinfoscliente)) {
// 		errorMessage("Campo <b>Nome</b> não pode estar vazio.");
// 	}

// 	if (emptyField(sobrenomeinfoscliente)) {
// 		errorMessage("Campo <b>Sobrenome</b> não pode estar vazio.");
// 	}

// 	if (emptyField(emailinfoscliente)) {
// 		errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
//     }
    
//     if (emptyField(cpfinfoscliente)) {
// 		errorMessage("Campo <b>CPF</b> não pode estar vazio.");
//     }
    
//     if (emptyField(birthdateinfoscliente)) {
// 		errorMessage("Campo <b>Data de Nascimento</b> não pode estar vazio.");
// 	}
    
//     if (emptyField(phoneinfoscliente)) {
// 		errorMessage("Campo <b>Telefone</b> não pode estar vazio.");
// 	}

// 	if (clientRegistrationErrorListUl.querySelectorAll("li").length > 0) {
// 		e.preventDefault();
// 		clientregistrationerrorlist.hidden = "";
// 	}
// });