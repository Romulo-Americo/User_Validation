const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/userRoutes')

const PORT = 3000;

//Permite o acesso de aplicações externas
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.send({ message:'USER VALIDATION' });
})

//Rota dos usuários
app.use('/user', userRoute);

app.listen(PORT, () =>{
    console.log(`App listening on port http://localhost:${PORT}`)
})