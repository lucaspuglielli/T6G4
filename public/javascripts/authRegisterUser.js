const selectId = (id) => {
    return document.getElementById(id);
};

// Validações do form de cadastro do usuário.

const formRegisterUser = selectId('formRegisterUser');
const name = selectId('name');
const errorListUl = document.querySelector('#errorList ul');
const errorList = document.querySelector('#errorList');

const emptyField = (input) => {
    return input.value.trim() === "";
};

const errorMessage = (message) => {
    errorListUl.innerHTML += "<li>" + message + "</li>";
}

formRegisterUser.addEventListener('submit', function (e){
    
    errorListUl.innerHTML = '';

    if (emptyField(name)){
        errorMessage('Campo <b>nome</b> não pode estar vazio.');
    };

    if (emptyField(lastname)){
        errorMessage('Campo <b>sobrenome</b> não pode estar vazio.');
    };

    if (emptyField(email)){
        errorMessage('Campo <b>email</b> não pode estar vazio.');
    };

    if (emptyField(cpf)){
        errorMessage('Campo <b>cpf</b> não pode estar vazio.');
    };

    if (emptyField(birthdate)){
        errorMessage('Campo <b>data de nascimento</b> não pode estar vazio.');
    };

    if (emptyField(phone)){
        errorMessage('Campo <b>telefone</b> não pode estar vazio.');
    };

    if (emptyField(password)){
        errorMessage('Campo <b>senha</b> não pode estar vazio.');
    };

    if(errorListUl.querySelectorAll('li').length > 0) {
        e.preventDefault();
        errorList.hidden = "";
    }
})
