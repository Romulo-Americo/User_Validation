const apiUrl = 'http://localhost:3000/user/listUser';

fetch(apiUrl)
.then((response) => {
    // Aqui deve-se retornar o resultado de response.json()
    return response.json(); 
})
.then((users) => {
    // Agora 'users' conterá os dados parseados como JSON
    console.log(users)
})
.catch((err) => {
    console.log(`Error to consult API ${err}`);
});
