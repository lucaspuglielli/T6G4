const lista = document.querySelector(".listadeagendamentos");
const usuario = document.getElementById("usuario");

let categorias = [];
let servicos = [];
let funcionario = [];

fetch("https://casarao-estetica.herokuapp.com/api/categories")
	.then((resposta) => resposta.json())
	.then((dados) => {
		categorias = dados;
	});

fetch("https://casarao-estetica.herokuapp.com/api/services")
	.then((resposta) => resposta.json())
	.then((dados) => {
		servicos = dados;
	});

fetch("https://casarao-estetica.herokuapp.com/api/funcionario")
	.then((resposta) => resposta.json())
	.then((dados) => {
		funcionario = dados;
	});

fetch("https://casarao-estetica.herokuapp.com/api/schedules")
	.then((resposta) => resposta.json())
	.then((dados) => {
		lista.innerHTML = "";
		dados.forEach((agendamento) => {
			if (agendamento.id_client == usuario.value) {
				lista.innerHTML += `
            <form class="forms" id="formdeletar" method="POST" action="/usuario/agendamento?_method=delete">
                <input id="idschedule" name="idschedule" value="${
									agendamento.id
								}" type="text" hidden/>
                <div class="cartao-servico mb-5 p-4">
                    <div class="d-flex">
                        <div>
                            <img class="img-servico" src="/images/${
															categorias[
																(servicos[(agendamento.id_service - 1) / 10]
																	.id_category - 1) / 10
															].icon
														}" alt="${
					categorias[
						(servicos[(agendamento.id_service - 1) / 10].id_category - 1) / 10
					].name
				}">
                        </div>
                        <div class="d-flex flex-column justify-content-between">
                            <div>
                                <h2 class="titulo-servico-card">${
																	servicos[(agendamento.id_service - 1) / 10]
																		.name
																}</h2>
                            </div>
                            <div>
                                <p class="data-servico-card">${
																	agendamento.start_date
																} - ${agendamento.start_time}</p>
                            </div>
                            <div class="d-flex">
                                <span class="label-info">Profissional: </span>
                                <span class="nome-info">${
																	funcionario[
																		(agendamento.id_employee - 1) / 10
																	].name
																} ${
					funcionario[(agendamento.id_employee - 1) / 10].lastname
				}</span>
                                
                            </div>
                            <div class="d-flex">
                                <span class="label-info">Valor: </span>
                                <span class="nome-info">R$:${
																	servicos[(agendamento.id_service - 1) / 10]
																		.price
																}</span>
                            </div>
                            <div class="d-flex">
                                <span class="label-info">Status: </span>
                                <span class="status-info">Agendado</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start">
                
                <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${
									agendamento.id
								}">
                Cancelar<i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                </button>

                
                <div class="modal fade" id="exampleModal${
									agendamento.id
								}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tem certeza que deseja cancelar esse agendamento?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Sim</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Não</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</form>
            `;
			}
		});

		if (lista.innerHTML == "") {
			lista.innerHTML =
				'<div class="m-5">Você não possui nenhum procedimento agendado.</div>';
		}
	})
	.catch(function (e) {
		if (e) {
			console.log(e);
			Location.reload(true);
		}
	});
