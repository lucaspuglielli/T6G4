let lista = document.querySelector(".equipehomecontainer");

fetch("https://casarao-estetica.herokuapp.com/api/funcionario")
	.then((resposta) => resposta.json())
	.then((dados) => {
		lista.innerHTML = "";
	for (let i = 0; i < 4; i++) {
		lista.innerHTML += `
        <div class="equipehomecards">
            <div>
                <img src="/images/${dados[i].photo}" class="funcionario1bg" alt="funcionario">
            </div>
            <div class="descricaofuncionariohome">
                <div class="titulofuncionariohome">${dados[i].name} ${dados[i].lastname}</div>
                <div class="subtitulofuncionariohome">${dados[i].skills}</div>
            </div>
        </div>
        `;
	}
})

const listaservicos = document.querySelector(".overflowservicos");
const listaservicosmobile = document.querySelector(".containerservicosmobile");

fetch("https://casarao-estetica.herokuapp.com/api/categories")
	.then((resposta) => resposta.json())
	.then((dados) => {
		listaservicos.innerHTML = "";
		listaservicosmobile.innerHTML = "";
		dados.forEach((servico) => {
            listaservicos.innerHTML += `
            <div card card-funcionario" style="margin-bottom: 30px; width: 300px">
                <div class="d-flex justify-content-center">
                    <img src="/images/${servico.icon}" style="width: 239px;" alt="${servico.name}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${servico.name}</h5>
                    <p class="texto-cards-nossos-servicos">${servico.description}</p>
                    <div class="d-flex justify-content-center">
                        <a href="/usuario/agendamento/${servico.id}" class="servicosbotao">Agendar</a>
                    </div>
                </div>
            </div>
            `;
            listaservicosmobile.innerHTML += `
            <div class="servicoscontainer">
                    <label class="servicostitulo" for="${servico.name}">
                        <img src="/images/${servico.icon}" class="espacoopcao" alt="${servico.name}">
                        <div>${servico.name}</div>
                        <div class="espacoopcao">+</div>
                    </label>
                    <input type="checkbox" class="cabelo" style="position: absolute; z-index: -1;" id="${servico.name}">
                    <div class="servicosdescricao">
                        <div>
                        ${servico.description}
                        </div>
                        <div class="servicosbotaocontainer">
                            <a href="/usuario/agendamento/${servico.id}" class="servicosbotao">Agendar</a>
                        </div>
                    </div>
                </div>
            `
		});
    });


    // function limparcampo() {
    //     let nome = document.getElementById("nomeindex");
    //     let email = document.getElementById("emailindex");
    //     nome.value = ""
    //     email.value = ""
    //     alert("Newsletter cadastrado com sucesso!")
    // }

    // VALIDAÇÃO NEWSLETTER
    const emptyField = (input) => {
        return input.value.trim() === "";
    };

    const newsform = document.getElementById('newsform');

    const errorListUl = document.querySelector("#errorList ul");
const errorList = document.querySelector("#errorList");

newsform.addEventListener("submit", function (e) {
        let errorMessage = (message) => {
            errorListUl.innerHTML += "<li>" + message + "</li>";
        };
    
        errorListUl.innerHTML = "";
    
        if (emptyField(newsname)) {
            errorMessage("Campo <b>Nome</b> não pode estar vazio.");
        }
    
        if (emptyField(newsemail)) {
            errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
        }
    
    
        if (errorListUl.querySelectorAll("li").length > 0) {
            e.preventDefault();
            errorList.hidden = "";
        } else {
            alert('Seu email foi cadastrado com sucesso.');
        }
    });


    // VALIDAÇÃO NEWS FOOTER
    const newsformfooter = document.getElementById('newsformfooter');

    const errorListfooterUl = document.querySelector("#errorListfooter ul");
const errorListfooter = document.querySelector("#errorListfooter");

newsformfooter.addEventListener("submit", function (e) {
        let errorMessage = (message) => {
            errorListfooterUl.innerHTML += "<li>" + message + "</li>";
        };
    
        errorListfooterUl.innerHTML = "";
    
        if (emptyField(newsnamefooter)) {
            errorMessage("Campo <b>Nome</b> não pode estar vazio.");
        }
    
        if (emptyField(newsemailfooter)) {
            errorMessage("Campo <b>E-mail</b> não pode estar vazio.");
        }
    
    
        if (errorListfooterUl.querySelectorAll("li").length > 0) {
            e.preventDefault();
            errorListfooter.hidden = "";
        } else {
            alert('Seu email foi cadastrado com sucesso.');
        }
    });