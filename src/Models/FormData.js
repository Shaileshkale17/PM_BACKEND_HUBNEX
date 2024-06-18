import mongoose from "mongoose";

const FormDataSchema = new mongoose.Schema({
  addrequirement: String,
  notes: String,
});

export const FormDataModel = mongoose.model("log_reg_form", FormDataSchema);
