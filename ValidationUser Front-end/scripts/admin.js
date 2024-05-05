const table = document.querySelector('#tableListUsers');
const apiUrl = 'http://localhost:3000/user/listUser';

function spanChanges(textChanges){
    window.alert(textChanges);
    location.reload(true)
}

function editSituation(user) {
    if(!user.situationUser){
        const changeSituation ={
            id: user.id,
            situationUser: true,
            password: 'teste123'
        }
        const apiUrl = `http://localhost:3000/user/updateUser/${user.id}`
        fetch(apiUrl, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeSituation)
        })
        .then((response) =>{
            return response.json()
        })
        .then((user) =>{
            console.log('Activation with success' + user)
            spanChanges(`Usuário reativado com sucesso!`)
        })
        .catch((err) =>{
            console.log(`Error try update user ${err}`);
            spanChanges('Problemas com o servidor :(')
        })
    }else{
        spanChanges('O usuário esta ativo');
    }
    
}

function deleteUser(user){

    const apiUrl = `http://localhost:3000/user/deleteUser/${user.id}`
    fetch(apiUrl,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then((response) =>{
        return response.json();
    })
    .then(() =>{
        spanChanges('Deletado com sucesso');
    })
    .catch((err) =>{
        console.log(`Erro to delete user ${err}`);
    })
}

const addNewUser = document.querySelector('#btnAdd')
addNewUser.addEventListener('click', () =>{window.location.href = '../views/formAddUser.html'});

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const row = table.insertRow();
                const cellRegis = row.insertCell();
                const cellName = row.insertCell();
                const cellSituation = row.insertCell();
                const cellAction = row.insertCell();

                cellRegis.textContent = user.registration;
                cellName.textContent = user.name;
                if(user.situationUser){
                    cellSituation.textContent = 'Ativo'; 
                }else{
                    cellSituation.textContent = 'Bloqueado';
                }

                // Botões
                //Add usuários
                const editButton = document.createElement('button');
                editButton.textContent = 'Alterar Situação';
                editButton.classList.add('btn', 'alterar');
                editButton.addEventListener('click', () => editSituation(user));

                //Deletar usuários
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Deletar';
                deleteButton.classList.add('btn', 'deletar');
                deleteButton.addEventListener('click', () => deleteUser(user))

                cellAction.appendChild(editButton);
                cellAction.appendChild(deleteButton);
            });
        })
        .catch(err => {
            console.log('Erro ao consultar dados: ' + err);
            const row = table.insertRow();
            row.insertCell().textContent = '???';
            row.insertCell().textContent = '???';
            row.insertCell().textContent = '???';
            row.insertCell().innerHTML = '<button class="btn alterar">Alterar Situação</button><button class="btn deletar">Deletar</button>';
        });
});
