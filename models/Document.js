const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  introduction: { type: String, required: true },
  jurisdictionAndProcedure: { type: String, required: true },
  issues: {},
  positionOfParties: [{ type: String }],
  evidenceAndAnalysis: [{ type: String }],
  orders: {
    decisionAccepted: { type: Boolean, required: true },
    withdrawn: { type: Boolean, required: true },
    claimAmount: { type: Number },
    reimbursementOfTribunalFees: { type: Boolean, required: true },
    reimbursementAmount: { type: Number }
  }
});

module.exports = mongoose.model("Document", documentSchema);
