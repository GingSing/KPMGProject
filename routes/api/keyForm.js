const express = require("express");
const router = express.Router();
const keyFormService = require("../../services/keyFormService");

router.get("/keyForm/:id", keyFormService.getKeyForm);
router.post("/keyForm", keyFormService.saveKeyForm);

module.exports = router;
