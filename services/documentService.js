const Document = require("../modles/Document");

const getDocument = (req, res) => {
  const { id } = req.params;
  Document.find({ id })
    .then(document => {
      res.json(document);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

const saveDocument = (req, res) => {
  const {
    introduction,
    jurisdictionAndProcedure,
    issues,
    positionOfParties,
    evidenceAndAnalysis,
    orders
  } = req.body;

  let newDocument = new Document({
    introduction,
    jurisdictionAndProcedure,
    issues,
    positionOfParties,
    evidenceAndAnalysis,
    orders
  });

  newDocument.save((err, document) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(document);
    }
  });
};

module.exports = {
  getDocument,
  saveDocument
};
