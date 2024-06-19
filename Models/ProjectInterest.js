import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  typeProject: {
    type: String,
    required: true,
  },
  projectTimeline: {
    type: String,
    required: true,
  },

  projectLocation: {
    type: String,
    required: true,
  },
});

export const ProjectInterest = mongoose.model("ProjectInterest", ProjectSchema);
