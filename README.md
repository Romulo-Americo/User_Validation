# User_Validation
Pequeno projeto voltado para estudo e desenvolvimento de uma aplicação fullstack.

## Tecnologias utilizadas:
- **Node.js**
  - express.js
  - sequelize.js
- **Banco de dados**: MySQL

## Backend:
Para inicializar e criar o modelo da tabela do banco de dados, siga os passos abaixo:

1. Inicialize o npm (se necessário):

2. Navegue até a pasta do banco de dados:

3. Execute o script sync.js para sincronizar o banco de dados

Fique à vontade para modificar, melhorar e utilizar este projeto para fins educativos.

##Manual
Este mini sistema serve para validar se o usuário existe na base de dados ou não
Utilize um software de teste de api para criar sua base de dados (PostMan, Insomnia por exemplo).
Os tipos de usuário que eu estou utilizando é servidor ou gerente (fique a vontade para modificar ou adicionar).
O typeUser "gerente" tem a interface que realiza o CRUD. Nele ativamos, criamos e deletamos.
A condição de usuário bloqueado (false ou 0) é ativado quando o usuário erra a senha 3 vezes.

  
