const syncModel = require('../models/users');

syncModel.sequelize.sync({ force:true })
    .then(() =>{
        console.log('Table created, synchronized model');
    })
    .catch((err) =>{
        console.log(`Error to synchornize this table ${err}`);
    })

