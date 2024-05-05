const User = require('../../models/users');

module.exports = (req, res) => {
    const { id } = req.params;  // Corrigido para extrair corretamente o id

    User.update(req.body, {
        where: {
            id: id
        }
    })
    .then((result) => {
        // O método update retorna um array com o número de registros atualizados
        if (result[0] === 0) {
            console.log('No users updated');
            res.status(404).send({ message: 'User not found' });  // Status 404 para indicar que nenhum usuário foi encontrado
        } else {
            console.log('User updated successfully');
            res.send({ message: 'User updated successfully' }); 
        }
    })
    .catch((err) => {
        console.log(`Error to update user ${err}`);
        res.status(500).json({ message: `Error to update user ${err}` });  // Status 500 para indicar erro no servidor
    });
};
