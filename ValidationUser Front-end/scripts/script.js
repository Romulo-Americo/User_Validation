let form = document.querySelector('#login');
let userRegistration = document.querySelector('#userRegistration');
let userPassword = document.querySelector('#userPassword');
let spanNull = document.querySelector('#spanNull');
let campNull = document.querySelector('#campNull');

//Código com desempenho lento, verificar
const apiUrl = 'http://localhost:3000/user/listUser'

//Função para alerta de póssíveis erros
function spanAlert(textProblems){
    spanNull.style.display = 'block';
    campNull.textContent = textProblems;
    setTimeout(function(){
        spanNull.style.display = 'none';
    },3000);
}


let countForBlockUser = 0;

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    //Resgatando o valor do front para realizar a lógica 
    let userRegisValue = userRegistration.value;
    let userPasswordValue = userPassword.value;

    if(userRegisValue == '' && userPasswordValue == ''){
        spanAlert('Os campos não podem ser vazios');
    }else{
        fetch(apiUrl)
        .then((response) =>{
            response.json()
            .then((users) => {
                const foundUser = users.find((user) => {
                    return user.registration === userRegisValue && user.password === userPasswordValue;
                });

                if (foundUser) {
                    if(foundUser.typeUser == 'gerente'){
                        window.location.href = '../views/adminPage.html';    
                    }else{
                        if(foundUser.situationUser == false){
                            spanAlert('Usuário bloqueado')
                        }else{
                            window.location.href = '../views/userPage.html';
                        }
                    }
                }else{
                    const foundUser = users.find((user) => {
                        return user.registration === userRegisValue && user.password != userPasswordValue;
                    });
                    if(foundUser){
                        if(foundUser.situationUser == false){
                            spanAlert('Usuário bloqueado');
                        }else{
                            spanAlert('Senha incorreta');
                            countForBlockUser ++;
                            if(countForBlockUser == 3){
                                const situaiton = {
                                    id: foundUser.id,
                                    situationUser: false
                                }
                                const apiUrl = `http://localhost:3000/user/updateUser/${foundUser.id}`;
                                fetch(apiUrl, {
                                    method: 'PUT',
                                    headers:{
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(situaiton)
                                })
                                .then(response => {
                                    return response.json();
                                })
                                .then( spanAlert('Usuário bloqueado') )
                                .catch(err =>{
                                    spanAlert('Estamos com problema no servidor :(')
                                    console.log(`Failure in response ${err}`)
                                });
                                
                            }
                        }
                    }else{
                        spanAlert('Usuário não existe');
                    }
                }
            })
        })
        .catch((err) =>{
            spanAlert('Estamos com problemas no servidor :(')
        })

    }
});

