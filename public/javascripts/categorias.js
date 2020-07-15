const lista = document.querySelector(".listadeservicos");

fetch("https://casarao-estetica.herokuapp.com/api/categories")
	.then((resposta) => resposta.json())
	.then((dados) => {
		lista.innerHTML = "";
		dados.forEach((servico) => {
			lista.innerHTML += `
            <div card card-funcionario" style="margin-bottom: 30px; width: 300px">
                <div class="d-flex justify-content-center">
                    <img src="/images/${servico.icon}" style="width: 239px;" alt="${servico.name}">
                </div>
                <div class="card-body d-flex align-items-center flex-column">
                    <h5 class="card-title text-center">${servico.name}</h5>
                    <p class="card-text text-center texto-cards-nossos-servicos d-none d-lg-block">${servico.description}</p>
                    <div class="d-flex justify-content-center">
                        <a href="/usuario/agendamento/${servico.id}" class="servicosbotao">Agendar</a>
                    </div>
                </div>
            </div>
            `;
		});
	});
