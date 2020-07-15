const lista = document.querySelector(".listadeagendamentos");
const date = document.getElementById("datadaily");
const inputFuncionario = document.getElementById("employee");
const inputCliente = document.getElementById("client");

let categorias = [];
let servicos = [];
let funcionario = [];
let agendamentos = [];

let filtroFuncionario = false;
let filtroCliente = false;
let filtroData = false;

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
		for (let i = 0; i < funcionario.length; i++) {
			inputFuncionario.innerHTML += `
            <option value="${funcionario[i].id}">${funcionario[i].name} ${funcionario[i].lastname}</option>
            `;
		}
	});

fetch("https://casarao-estetica.herokuapp.com/api/schedules")
	.then((resposta) => resposta.json())
	.then((dados) => {
		agendamentos = dados;
		lista.innerHTML = "";
		dados.forEach((agendamento) => {
			lista.innerHTML += `
            <form class="forms" id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                <input id="idschedule" name="idschedule" value="${
									agendamento.id
								}" type="text" hidden/>
                <div class="cartao-servico mb-5 p-4">
                    <div class="d-flex">
                        <div>
                            <img class="img-servico" src="/images/${
															categorias[
																servicos[(agendamento.id_service - 1) / 10]
																	.id_category - 1
															].icon
														}" alt="${
				categorias[servicos[(agendamento.id_service - 1) / 10].id_category - 1]
					.name
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
		});

		if (lista.innerHTML == "") {
			lista.innerHTML =
				'<div class="m-5">Você não possui nenhum procedimento agendado.</div>';
		}
	});

inputFuncionario.addEventListener("change", function () {
	if (inputFuncionario.value != 0) {
		filtroFuncionario = true;
	} else filtroFuncionario = false;

	if (!filtroData && !filtroCliente && filtroFuncionario) {
		lista.innerHTML = "";
		agendamentos.forEach((agendamento) => {
			if (agendamento.id_employee == inputFuncionario.value) {
				lista.innerHTML += `
            <form class="forms" id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                <input id="idschedule" name="idschedule" value="${
									agendamento.id
								}" type="text" hidden/>
                <div class="cartao-servico mb-5 p-4">
                    <div class="d-flex">
                        <div>
                            <img class="img-servico" src="/images/${
															categorias[
																servicos[(agendamento.id_service - 1) / 10]
																	.id_category - 1
															].icon
														}" alt="${
					categorias[
						servicos[(agendamento.id_service - 1) / 10].id_category - 1
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
	}
	if (lista.innerHTML == "") {
		lista.innerHTML =
			'<div class="m-5">Não há nenhum agendamento para a data selecionada.</div>';
	}
});

date.addEventListener("change", function () {
	if (date.value == "") {
		filtroData = true;
	} else filtroData = false;
	lista.innerHTML = "";
	agendamentos.forEach((agendamento) => {
		console.log(date.value);
		const dataFormat = new Date(date.value + "T00:00:00-03:00");
		const dateformatBR = new Intl.DateTimeFormat("pt-br").format(dataFormat);
		if (
			dateformatBR == agendamento.start_date &&
			!filtroFuncionario &&
			!filtroCliente
		) {
			lista.innerHTML += `
            <form class="forms" id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                <input id="idschedule" name="idschedule" value="${
									agendamento.id
								}" type="text" hidden/>
                <div class="cartao-servico mb-5 p-4">
                    <div class="d-flex">
                        <div>
                            <img class="img-servico" src="/images/${
															categorias[
																servicos[(agendamento.id_service - 1) / 10]
																	.id_category - 1
															].icon
														}" alt="${
				categorias[servicos[(agendamento.id_service - 1) / 10].id_category - 1]
					.name
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
		} else if (
			dateformatBR == agendamento.start_date &&
			filtroFuncionario &&
			!filtroCliente
		) {
			if (inputFuncionario.value == agendamento.id_employee) {
				lista.innerHTML += `
            <form class="forms" id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                <input id="idschedule" name="idschedule" value="${
									agendamento.id
								}" type="text" hidden/>
                <div class="cartao-servico mb-5 p-4">
                    <div class="d-flex">
                        <div>
                            <img class="img-servico" src="/images/${
															categorias[
																servicos[(agendamento.id_service - 1) / 10]
																	.id_category - 1
															].icon
														}" alt="${
					categorias[
						servicos[(agendamento.id_service - 1) / 10].id_category - 1
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
		}
	});
	if (lista.innerHTML == "") {
		lista.innerHTML =
			'<div class="m-5">Não há nenhum agendamento para a data selecionada.</div>';
	}
});
