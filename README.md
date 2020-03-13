# T6G4
Projeto integrador do Grupo 4 - Turma 6

### APRESENTAÇÃO ###

## CONTEXTO E AMBIENTAÇÃO

Em um ambiente de salão de beleza, clínica de estética ou até outros prestadores de serviço que atendam com hora marcada, a agenda e o procedimento usado para administrar essa agenda é parte fundamental do negócio. Esse gerenciamento da agenda demanda muito tempo e atenção, responder às solicitações dos clientes e efetivamente preencher a agenda em empresas muito requisitadas acaba se tornando uma tarefa complexa e exige um profissional em tempo integral para sua realização. Desta forma a gestão de agendamentos se torna também uma tarefa onerosa.
  
# PROBLEMAS
Os clientes que utilizam esse tipo de serviço, muitas vezes e por diversos motivos acabam cancelando seu horário. Isso gera uma lacuna na agenda do profissional que realiza o serviço e na maioria das vezes não há tempo hábil para preencher novamente esse horário. Por vezes o cliente, sem nenhum aviso prévio, deixar de comparecer para o seu agendamento, o que elimina a já remota chance de o profissional preencher esse horário.
Por se tratar de um processo manual, também podem acontecer erros por conta da pessoa responsável pelo agendamento(normalmente causados por falta de atenção). Alguns exemplos são o cadastro errado de dia/hora do cliente, agendamento de mais de um cliente por horário, agendamento de serviço diferente do solicitado pelo cliente e diversos outros problemas nesse contexto.

# CONSEQUÊNCIAS
Em decorrência desses problemas e erros existem diversos impactos negativos. Pela impossibilidade de preencher o horário perdido com o cliente que não aparece ou desmarcou, o profissional perde a venda e, caso seja um novo cliente, perde a oportunidade de mostrar o seu espaço, seu trabalho e a chance de fidelizar o novo cliente.
  	As consequências causadas pelos erros da pessoa responsável pelo agendamento são ainda mais perigosas, pois impactam diretamente o cliente, podendo manchar a reputação tanto da empresa quanto do profissional.
  
## O PROJETO

Dentro desse contexto e dos questionamentos provenientes dele surgiu a idéia da criação de um sistema que pudesse fazer o gerenciamento dessa agenda em busca de minimizar os problemas e erros. A idéia principal é a automatização das tarefas, desde o atendimento ao cliente até o efetivo agendamento de um horário para um determinado serviço.
  



# FUNCIONAMENTO
O sistema deverá apresentar ao cliente uma interface onde, sem outra ajuda, ele será capaz de visualizar os horários disponíveis para o serviço e/ou o profissional desejado, efetivar o agendamento e finalizar com o pagamento do serviço solicitado.
  	Também deverá contar com uma interface de backoffice, onde o profissional responsável pela empresa poderá, através de uma senha de acesso, personalizar e comandar o sistema.
  
# FUNCIONALIDADES DESEMPENHADAS PELO SISTEMA

# INTERFACE DO CLIENTE
Nessa interface o cliente poderá visualizar informações sobre o estabelecimento (história, endereço, contatos...), tipos de serviços prestados, os profissionais prestadores de serviço naquele estabelecimento bem como qualquer outra informação relevante e cabível.
  	Através dessa interface o cliente poderá:
   	- Efetuar o seu cadastro;
   	- Decidir se recebe ou não notificações do sistema;
   	- Fazer login;
   	- Alterar os seus dados;
   	- Agendar um serviço;
   	- Efetuar o pagamento do serviço;
   	- Reagendar um serviço;
   	- Cancelar um agendamento;
   	- Entrar na fila de espera de um serviço/horário já agendado por outro cliente.
   	- Enviar feedback sobre algum serviço, crítica ou sugestão ao estabelecimento ou profissional.
   	- Encerrar sessão.
   	- Entrar em contato com o estabelecimento;
   
# INTERFACE DO BACKOFFICE
Nessa interface o responsável pelo estabelecimento poderá visualizar todos os dados do sistema e através de um acesso de "administrador" pode configurar e personalizar o sistema.
Através dessa interface o "administrador" poderá:
- Cadastrar e editar os clientes;
  	- Realizar um agendamento pelo cliente.
  	- Cadastrar e editar os serviços prestados pelo estabelecimento;
  	- Determinar serviços, dias ou horários com valores promocionais;
  	- Configurar o horário de funcionamento geral do estabelecimento;
  	- Editar o calendário de dias de funcionamento, para "fechar" o estabelecimento em dias específicos (feriados, recessos, etc);
  	- Cadastrar e editar as informações dos profissionais que realizam os serviços;
  	- Editar dias e horários em que os profissionais estarão disponíveis (folgas, férias, etc);
  	- Personalizar a interface do usuário com a identidade visual do estabelecimento (cores, fotos, logo, etc);
  	- Criar e enviar notificações personalizadas à base de clientes.

# FUNCIONALIDADES "BACKEND" (?)
O sistema deverá ser capaz de executar por si só tarefas pré-determinadas, tais como:
  	- Gerenciar o sistema de filas, onde um ou mais clientes podem entrar na espera de um horário já agendado;
  	- Enviar notificação para o cliente na fila de que o horário agendado está livre caso queira agendar;
  	- Quando houver um cancelamento, enviar mensagem à base de clientes comunicando que aquele horário/serviço cancelado pode ser agendado com valor promocional.
  	- Enviar mensagem de parabéns aos clientes aniversariantes do dia;
  
  
## CONSIDERAÇÕES FINAIS

O objetivo do nosso sistema é sanar o problema de cancelamentos e o não comparecimento sem aviso de clientes em estabelecimentos que trabalham com agendamento de serviços, o que, na minha opinião, é o maior problema nesse caso. As funcionalidades e particularidades citadas acima são provenientes deste objetivo ou adjacentes dessa idéia principal, portanto, excluindo-se as essenciais, podem ser alteradas ou eliminadas do projeto conforme necessidade ou conveniência. Essa apresentação é, por enquanto, apenas um rascunho de um guia para a realização do projeto sendo assim espero que seja questionado e discutido para que possamos dentro das nossas capacidades entregar o melhor projeto.

