const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keyFormSchema = new Schema({
  dateIssued: { type: Number, required: true },
  fileNumber: { type: String, required: true },
  caseType: { type: String, required: true },
  index: { type: String, required: true },
  applicant: {
    name: { type: String, required: true },
    lawyerName: { type: String }
  },
  respondent: {
    name: { type: String, required: true },
    lawyerName: { type: String }
  },
  respondentByCounterClaim: { type: String },
  tribunalMember: { type: String, required: true },
  documentId: { type: mongoose.Schema.ObjectId, ref: "Document", unique: true }
});

module.exports = mongoose.model("KeyForm", keyFormSchema);
