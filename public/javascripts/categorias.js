const lista = document.querySelector(".listadeservicos");

fetch("http://localhost:3000/api/categories")
	.then((resposta) => resposta.json())
	.then((dados) => {
		lista.innerHTML = "";
		dados.forEach((servico) => {
            console.log(servico)
            lista.innerHTML += `
            <div card card-funcionario" style="margin-bottom: 30px; width: 300px">
                <div class="d-flex justify-content-center">
                    <img src="/images/${servico.icon}" style="width: 239px;" alt="${servico.name}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${servico.name}</h5>
                    <p class="card-text text-center texto-cards-nossos-servicos d-none d-lg-block">${servico.description}</p>
                    <div class="d-flex justify-content-center">
                        <a href="/agendamento?Servico=${servico.name}" class="navbutton">Agendar</a>
                    </div>
                </div>
            </div>
            `;
		});
	});
