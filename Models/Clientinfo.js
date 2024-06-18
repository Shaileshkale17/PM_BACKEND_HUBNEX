import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // Store the photo as a Base64-encoded string
    required: false,
  },
});

export const Clientinfo = mongoose.model("Clientinfo", ClientSchema);
