const JOI = require("joi");
const Adminvalid = JOI.object({
  email: JOI.string().email().required(),
  password: JOI.string().required().min(6)
});
module.exports = Adminvalid;
