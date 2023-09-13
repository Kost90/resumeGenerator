const express = require("express");
const router = express.Router();
const resumeController = require('../controller/ResumeController');

router.get("/:IdUser", resumeController.getResume);
router.post("/", resumeController.addResume);
router.delete("/:resumeId", resumeController.deleteUserResume);

module.exports = router;