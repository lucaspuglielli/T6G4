let lista = document.querySelector(".equipehomecontainer");

fetch("http://localhost:3000/api/funcionario")
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
                <div class="subtitulofuncionariohome">Robbie Willians</div>
            </div>
        </div>
        `;
	}
})
