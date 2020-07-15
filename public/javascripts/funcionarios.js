const lista = document.querySelector(".listadefuncionarios");

fetch("https://casarao-estetica.herokuapp.com/api/funcionario")
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
                    <div class="subtitulofuncionariohome">${funcionario.skills}</div>
                </div>
            </div>
            `;
		});
	});
