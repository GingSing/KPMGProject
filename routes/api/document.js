const express = require("express");
const router = express.Router();
const documentService = require("../../services/documentService");

router.get("/document/:id", documentService.getDocument);
router.post("/document", documentService.saveDocument);

module.exports = router;
