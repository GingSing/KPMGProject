const KeyForm = require("../models/KeyForm");

const getKeyForm = (req, res) => {
  const { id } = req.params;
  KeyForm.find({ id })
    .then(keyForm => {
      res.status(200).json(keyForm);
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err);
    });
};

const saveKeyForm = (req, res) => {
  const {
    dateIssued,
    fileNumber,
    caseType,
    index,
    applicant,
    respondent,
    respondentByCounterClaim,
    tribunalMember
  } = req.body;

  const newKeyForm = new KeyForm({
    dateIssued,
    fileNumber,
    caseType,
    index,
    applicant,
    respondent,
    respondentByCounterClaim,
    tribunalMember
  });

  newKeyForm.save((err, keyForm) => {
    if (err) {
      res.status(400).json(err);
      console.log(err);
    } else {
      res.status(200).json(keyForm);
    }
  });
};

module.exports = {
  getKeyForm,
  saveKeyForm
};
