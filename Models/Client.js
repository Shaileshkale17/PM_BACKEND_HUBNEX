import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  budget: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

export const Client = mongoose.model("Client", ClientSchema);
