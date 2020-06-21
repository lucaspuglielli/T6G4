const lista = document.querySelector(".listadefuncionarios");

fetch("http://localhost:3000/api/funcionario")
	.then((resposta) => resposta.json())
	.then((dados) => {
		lista.innerHTML = "";
		dados.forEach((funcionario) => {
			lista.innerHTML += `
            <div class="card card-funcionario" style="margin-bottom: 30px">
                <div>
                    <img src="/images/${funcionario.photo}" style="width: 239px;" alt="funcionario">
                </div>
                <div class="card-body">
                    <div class="titulofuncionariohome">${funcionario.name} ${funcionario.lastname}</div>
                    <div class="subtitulofuncionariohome">Robbie Williams</div>
                </div>
            </div>
            `;
        });
	});