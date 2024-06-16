import { Team } from "../Models/Team.Model.js";
import { APIError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asycHandler.js";

const addTeam = asyncHandler(async (req, res) => {
  const { TeamName, TeamMembers, Project_Location } = req.body;
  try {
    if (
      [TeamName, TeamMembers, Project_Location].some(
        (team) => team.trim() === ""
      )
    ) {
      throw new APIError(400, "Invalid team field");
    }

    const createTeam = await Team.create({
      TeamName,
      TeamMembers,
      Project_Location,
    });

    if (!createTeam) {
      throw APIError(500, "Team id not Created");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, createTeam, "Team created successfully"));
  } catch (error) {
    throw new APIError(error);
  }
});

const GetTeam = asyncHandler(async (req, res) => {
  try {
    const teams = await Team.find({});
    if (!teams) {
      throw new APIError(404, "Team not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, teams, "Team Data Sending successfully"));
  } catch (error) {
    throw new APIError(error);
  }
});

const UpdateTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { TeamName, TeamMembers, Project_Location } = req.body;
  try {
    if (!id) {
      throw new APIError(404, "invalid request");
    }

    if (
      [TeamName, TeamMembers, Project_Location].some(
        (team) => team.trim() === ""
      )
    ) {
      throw new APIError(400, "Invalid team field");
    }

    const UpdatedTeam = await Team.findByIdAndUpdate(id, {
      TeamName,
      TeamMembers,
      Project_Location,
    });

    if (!UpdatedTeam) {
      throw new APIError(400, "con not been updated");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, UpdatedTeam, "Updated successfully"));
  } catch (error) {
    throw new APIError(error);
  }
});

const DeleteTeam = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new APIError(404, "Team not found");
    }
    const DeletedTeam = await Team.findByIdAndDelete(id);

    if (!DeletedTeam) {
      throw new APIError(404, "Team cannot be deleted");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Team deleted successfully"));
  } catch (error) {
    throw new APIError(error);
  }
});

export { addTeam, GetTeam, UpdateTeam, DeleteTeam };
