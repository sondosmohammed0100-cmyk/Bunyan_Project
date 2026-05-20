const AdminModel = require("../models/Admin_model");
const Adminvalid = require("../Validation/Validation");
const JWT = require("jsonwebtoken");
const signToken = (id) => {
  return JWT.sign({ id }, process.env.SK_JWT, { expiresIn: "7d" });
};
//login controller
//Export
