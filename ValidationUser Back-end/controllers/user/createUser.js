const User = require('../../models/users');

module.exports = (req, res) =>{
    User.create(req.body)
    .then(() =>{
        console.log('Created user succesfuly');
        res.send({message: 'Created user succesfuly'});
    })
    .catch((err) =>{
        console.log(`Error to create user ${err}`);
        res.send({message: `Error to create user ${err}`});
    });
}