const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { preconnect } = require("react-dom");
const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "Password must be 6 character"],
      select: false,
    },
  },
  { timestamps: true },
);

//Hooks
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

AdminSchema.methods.comparePassword = async function (matched) {
  return await bcrypt.compare(matched, this.password);
};

const AdminModel = mongoose.model("Admin", AdminSchema);
module.exports = AdminModel;
