const express = require('express');
const router = express.Router();

const createUser = require('../controllers/user/createUser');
const deleteUser = require('../controllers/user/deleteUser');
const listUser = require('../controllers/user/readUser');
const updateUser = require('../controllers/user/updateUser');
const findUser = require('../controllers/user/findUser');
const testRouter = require('../controllers/user/testRouter');


router.get('/', testRouter);
router.post('/newUser', createUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/listUser', listUser);
router.put('/updateUser/:id', updateUser);
router.get('/findUser/:id', findUser);


module.exports = router;