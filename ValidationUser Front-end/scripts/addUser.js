const formAddNewUser = document.querySelector('#formAddNewUser');

const apiUrl = 'http://localhost:3000/user/newUser'

function createRegistration() {
    let numeros = "";
    for (let i = 0; i < 6; i++) {
        numeros += Math.floor(Math.random() * 10);
    }
    let digitoAdicional = Math.floor(Math.random() * 10);
    let matriculaFormatada = numeros.substring(0, 3) + '.' + numeros.substring(3, 6) + '-' + digitoAdicional;
    return matriculaFormatada;
}



formAddNewUser.addEventListener('submit', (e) =>{
    e.preventDefault();

    //Recolhendo os dados do formulário
    const formData = new FormData(formAddNewUser);
    
    const getData = {
        name: formData.get('name'),
        registration: createRegistration(),
        password: formData.get('password'),
        typeUser: formData.get('typeUser'),
        situationUser: true
    }

    //Criando o user
    fetch(apiUrl, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(getData)
    })
    .then((res) =>{ return res.json()})
    .then(() =>{
        console.log('Criado com sucesso');
        window.location.href = '../views/adminPage.html'
    })
    .catch((err) =>{console.log(`Error in create user ${err}`)});
})