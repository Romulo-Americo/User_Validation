const { Sequelize } = require('sequelize');

const db = new Sequelize(
    'user_validation',
    '',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306'
    }
);

let test = db.authenticate()
    .then(()=>{
        console.log('Connected with DATABASE');
    })
    .catch((err) =>{
        console.log(`Error when trying to connect in DATABSE error: ${err} `);
    })

module.exports = db; 