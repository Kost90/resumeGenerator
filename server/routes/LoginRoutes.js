const express = require("express");
const router = express.Router();
const loginController = require('../controller/LoginController');

router.get("/:email", loginController.getLoginUser);
router.post("/", loginController.addNewLoginUser);
router.delete("/:id", loginController.deleteLoginUser);

module.exports = router;