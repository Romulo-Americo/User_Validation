const User = require('../../models/users');

module.exports = (req, res) =>{
    User.findAll()
    .then((users) =>{
        console.log('Succesfull in listed Users');
        res.send(users);
    })
    .catch((err) =>{
        console.log(`Error to consult users ${err}`);
        res.send({ message:`Error to consult users ${err}` });
    })
}