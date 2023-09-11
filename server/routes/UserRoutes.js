const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.get('/:password/:email', userController.getSingleUser);
router.post("/", userController.addNewUser);

module.exports = router;