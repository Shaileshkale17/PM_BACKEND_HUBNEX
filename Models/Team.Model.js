import mongoose from "mongoose";

const TeamSchman = mongoose.Schema(
  {
    TeamName: {
      type: String,
      required: true,
    },
    TeamMembers: [
      {
        type: String,
      },
    ],
    Project_Location: [
      {
        type: String,
      },
    ],
  },
  {}
);

export const Team = mongoose.model("Team", TeamSchman);
