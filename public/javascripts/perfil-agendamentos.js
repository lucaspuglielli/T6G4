const lista = document.querySelector(".listadeagendamentos");
const usuario = document.getElementById('usuario');
let categorias = [];
let servicos = [];
let funcionario = [];

fetch("http://localhost:3000/api/categories")
	.then((resposta) => resposta.json())
	.then((dados) => {
		categorias = dados;
	});

fetch("http://localhost:3000/api/services")
	.then((resposta) => resposta.json())
	.then((dados) => {
		servicos = dados;
	});

fetch("http://localhost:3000/api/funcionario")
	.then((resposta) => resposta.json())
	.then((dados) => {
		funcionario = dados;
	});

fetch("http://localhost:3000/api/schedules")
	.then((resposta) => resposta.json())
	.then((dados) => {
        lista.innerHTML = "";
		dados.forEach((agendamento) => {
            if(agendamento.id_client == usuario.value) {
			lista.innerHTML += `
            <form class="forms" method="POST" action="/admin/admin-register">
                <div class="cartao-servico mb-5 p-4">
                    <div class="d-flex">
                        <div>
                            <img class="img-servico" src="/images/${categorias[servicos[agendamento.id_service - 1].id_category - 1].icon}" alt="${categorias[servicos[agendamento.id_service - 1].id_category - 1].name}">
                        </div>
                        <div class="d-flex flex-column justify-content-between">
                            <div>
                                <h2 class="titulo-servico-card">${servicos[agendamento.id_service - 1].name}</h2>
                            </div>
                            <div>
                                <p class="data-servico-card">${agendamento.start_date} - ${agendamento.start_time}</p>
                            </div>
                            <div class="d-flex">
                                <span class="label-info">Profissional: </span>
                                <span class="nome-info">${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</span>
                                
                            </div>
                            <div class="d-flex">
                                <span class="label-info">Valor: </span>
                                <span class="nome-info">R$:${servicos[agendamento.id_service - 1].price}</span>
                            </div>
                            <div class="d-flex">
                                <span class="label-info">Status: </span>
                                <span class="status-info">Agendado</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start">
                            <div class="d-flex align-items-center">
                                Cancelar<i class="fa fa-close" style="font-size: 3.5vh; color:black; margin-left: 10px;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            `;
		}});
	});
