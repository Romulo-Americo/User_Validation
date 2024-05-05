const User = require('../../models/users');

module.exports = (req, res) =>{
    User.findByPk(req.params.id)
    .then((users) =>{
        console.log('Find user succesfully');
        res.send(users);
    })
    .catch((err) =>{
        console.log(`Error to find user or user doesn\'t exist ${err}`);
        res.send(`Error to find user or user doesn\'t exist ${err}`);

    })
}