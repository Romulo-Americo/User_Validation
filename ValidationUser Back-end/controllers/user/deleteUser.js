const User = require('../../models/users');

module.exports = (req, res) =>{
    User.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(() =>{
        console.log('Deleted user succesfuly');
        res.send({message: 'Deleted user succesfuly'});
    })
    .catch((err) =>{
        console.log(`Error to delete user ${err}`);
        res.send({message: `Error to delete user ${err}`});
    })
}