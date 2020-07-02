const lista = document.querySelector(".listadeagendamentos");
const date = document.getElementById("datadaily");
const inputFuncionario = document.getElementById('employee')
const inputCliente = document.getElementById('client')

let categorias = [];
let servicos = [];
let funcionario = [];
let agendamentos = [];
let clientes = [];

let filtroFuncionario = false
let filtroCliente = false
let filtroData = false


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
        for(let i=0; i< funcionario.length; i++){
            inputFuncionario.innerHTML += `
            <option value="${funcionario[i].id}">${funcionario[i].name} ${funcionario[i].lastname}</option>
            `
        }
    });

fetch("http://localhost:3000/api/clients")
    .then((resposta) => resposta.json())
    .then((dados) => {
        clientes = dados;
    });


fetch("http://localhost:3000/api/schedules")
    .then((resposta) => resposta.json())
    .then((dados) => {
        agendamentos = dados;
        lista.innerHTML = "";
        dados.forEach((agendamento) => {
            lista.innerHTML += `
            <tr>
                <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                <td>${agendamento.start_date}</td>
                <td>${agendamento.start_time}</td>
                <td>${servicos[agendamento.id_service - 1].name}</td>
                <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                <td>${servicos[agendamento.id_service - 1].price}</td>
                <td>Agendado</td>
                <td>
                    <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                        <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                        <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                            Cancelar
                            <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                        </button>
                        <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    </form>
                </td>
            </tr>
            `;
        });

        if (lista.innerHTML == "") {
            lista.innerHTML = '<div class="m-5">Você não possui nenhum procedimento agendado.</div>'
        };
    });

    inputFuncionario.addEventListener('change', function() {
        lista.innerHTML = "";
        if(inputFuncionario.value != 0){
            filtroFuncionario = true
        } else {
            filtroFuncionario = false
        }
        if(!filtroData && !filtroCliente && !filtroFuncionario){
            agendamentos.forEach((agendamento) => {
                lista.innerHTML += `
                <tr>
                    <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                    <td>${agendamento.start_date}</td>
                    <td>${agendamento.start_time}</td>
                    <td>${servicos[agendamento.id_service - 1].name}</td>
                    <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                    <td>${servicos[agendamento.id_service - 1].price}</td>
                    <td>Agendado</td>
                    <td>
                        <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                            <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                            <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                                Cancelar
                                <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                            </button>
                            <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </form>
                    </td>
                </tr>
                `;
            });
    
            if (lista.innerHTML == "") {
                lista.innerHTML = '<div class="m-5">Você não possui nenhum procedimento agendado.</div>'
            };
        }else if(!filtroData && filtroCliente && !filtroFuncionario){
            lista.innerHTML = "";
            agendamentos.forEach((agendamento) => {
                if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase())){
                    lista.innerHTML += `
                <tr>
                    <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                    <td>${agendamento.start_date}</td>
                    <td>${agendamento.start_time}</td>
                    <td>${servicos[agendamento.id_service - 1].name}</td>
                    <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                    <td>${servicos[agendamento.id_service - 1].price}</td>
                    <td>Agendado</td>
                    <td>
                        <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                            <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                            <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                                Cancelar
                                <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                            </button>
                            <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </form>
                    </td>
                </tr>
                `;
                }
            
    })
} else if(filtroData && filtroCliente && !filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(!filtroData && filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && agendamento.id_employee == inputFuncionario.value){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(filtroData && filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && agendamento.id_employee == inputFuncionario.value && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}else if(filtroData && !filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(agendamento.id_employee == inputFuncionario.value && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(filtroData && !filtroCliente && !filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}else if(!filtroData && !filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        if(agendamento.id_employee == inputFuncionario.value){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}
        
            

            
    if (lista.innerHTML == "") {
        lista.innerHTML = '<div class="m-5">Não há nenhum agendamento para a data selecionada.</div>'
    };
})

    function pegarNomeCliente(id){
        for(let i=0; i<clientes.length; i++){
            if(clientes[i].id == id){
                return (clientes[i].name + clientes[i].lastname)
            }
        }
    }


    date.addEventListener('change', function () {
        if(date.value != ''){
            filtroData = true
        } else filtroData = false;
        lista.innerHTML = "";
        if(!filtroData && !filtroCliente && !filtroFuncionario){
            agendamentos.forEach((agendamento) => {
                lista.innerHTML += `
                <tr>
                    <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                    <td>${agendamento.start_date}</td>
                    <td>${agendamento.start_time}</td>
                    <td>${servicos[agendamento.id_service - 1].name}</td>
                    <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                    <td>${servicos[agendamento.id_service - 1].price}</td>
                    <td>Agendado</td>
                    <td>
                        <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                            <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                            <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                                Cancelar
                                <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                            </button>
                            <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </form>
                    </td>
                </tr>
                `;
            });
    
            if (lista.innerHTML == "") {
                lista.innerHTML = '<div class="m-5">Você não possui nenhum procedimento agendado.</div>'
            };
        }else if(!filtroData && filtroCliente && !filtroFuncionario){
            lista.innerHTML = "";
            agendamentos.forEach((agendamento) => {
                if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase())){
                    lista.innerHTML += `
                <tr>
                    <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                    <td>${agendamento.start_date}</td>
                    <td>${agendamento.start_time}</td>
                    <td>${servicos[agendamento.id_service - 1].name}</td>
                    <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                    <td>${servicos[agendamento.id_service - 1].price}</td>
                    <td>Agendado</td>
                    <td>
                        <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                            <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                            <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                                Cancelar
                                <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                            </button>
                            <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </form>
                    </td>
                </tr>
                `;
                }
            
    })
} else if(filtroData && filtroCliente && !filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(!filtroData && filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && agendamento.id_employee == inputFuncionario.value){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(filtroData && filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && agendamento.id_employee == inputFuncionario.value && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}else if(filtroData && !filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(agendamento.id_employee == inputFuncionario.value && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(filtroData && !filtroCliente && !filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}else if(!filtroData && !filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        if(agendamento.id_employee == inputFuncionario.value){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}
        if (lista.innerHTML == "") {
            lista.innerHTML = '<div class="m-5">Não há nenhum agendamento para a data selecionada.</div>'
        };
    
    })

    inputCliente.addEventListener('change', function () {
        lista.innerHTML = "";
        if(inputCliente.value != ''){
            filtroCliente = true
        } else {
            filtroCliente = false
        }

        if(!filtroData && !filtroCliente && !filtroFuncionario){
            agendamentos.forEach((agendamento) => {
                lista.innerHTML += `
                <tr>
                    <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                    <td>${agendamento.start_date}</td>
                    <td>${agendamento.start_time}</td>
                    <td>${servicos[agendamento.id_service - 1].name}</td>
                    <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                    <td>${servicos[agendamento.id_service - 1].price}</td>
                    <td>Agendado</td>
                    <td>
                        <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                            <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                            <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                                Cancelar
                                <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                            </button>
                            <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </form>
                    </td>
                </tr>
                `;
            });
    
            if (lista.innerHTML == "") {
                lista.innerHTML = '<div class="m-5">Você não possui nenhum procedimento agendado.</div>'
            };
        }else if(!filtroData && filtroCliente && !filtroFuncionario){
            lista.innerHTML = "";
            agendamentos.forEach((agendamento) => {
                if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase())){
                    lista.innerHTML += `
                <tr>
                    <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
                    <td>${agendamento.start_date}</td>
                    <td>${agendamento.start_time}</td>
                    <td>${servicos[agendamento.id_service - 1].name}</td>
                    <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
                    <td>${servicos[agendamento.id_service - 1].price}</td>
                    <td>Agendado</td>
                    <td>
                        <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                            <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                            <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                                Cancelar
                                <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                            </button>
                            <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        </form>
                    </td>
                </tr>
                `;
                }
            
    })
} else if(filtroData && filtroCliente && !filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(!filtroData && filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && agendamento.id_employee == inputFuncionario.value){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(filtroData && filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(pegarNomeCliente(agendamento.id_client).toLowerCase().includes(inputCliente.value.toLowerCase()) && agendamento.id_employee == inputFuncionario.value && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}else if(filtroData && !filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(agendamento.id_employee == inputFuncionario.value && dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
} else if(filtroData && !filtroCliente && !filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        const dataFormat =  new Date(date.value+'T00:00:00-03:00')
        const dateformatBR = new Intl.DateTimeFormat('pt-br').format(dataFormat);
        if(dateformatBR == agendamento.start_date){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}else if(!filtroData && !filtroCliente && filtroFuncionario){
    lista.innerHTML = "";
    agendamentos.forEach((agendamento) => {
        if(agendamento.id_employee == inputFuncionario.value){
            lista.innerHTML += `
        <tr>
            <td>${clientes[agendamento.id_client - 1].name} ${clientes[agendamento.id_client - 1].lastname}</td>
            <td>${agendamento.start_date}</td>
            <td>${agendamento.start_time}</td>
            <td>${servicos[agendamento.id_service - 1].name}</td>
            <td>${funcionario[agendamento.id_employee - 1].name} ${funcionario[agendamento.id_employee - 1].lastname}</td>
            <td>${servicos[agendamento.id_service - 1].price}</td>
            <td>Agendado</td>
            <td>
                <form id="formdeletar" method="POST" action="/administracao/daily?_method=delete">
                    <input id="idschedule" name="idschedule" value="${agendamento.id}" type="text" hidden/>
                    <button type="button" class="d-flex align-items-center btn btn-danger" data-toggle="modal" data-target="#exampleModal${agendamento.id}">
                        Cancelar
                        <i class="fa fa-close" style="font-size: 3.5vh; color:white; margin-left: 10px;"></i>
                    </button>
                    <div class="modal fade" id="exampleModal${agendamento.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                </form>
            </td>
        </tr>
        `;
        }
    
})
}
if (lista.innerHTML == "") {
    lista.innerHTML = '<div class="m-5">Você não possui nenhum procedimento agendado.</div>'
};
    })