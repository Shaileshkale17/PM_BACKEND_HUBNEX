import { ProjectInterest } from "../Models/ProjectInterest.js";
import { APIError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asycHandler.js";

const create = asyncHandler(async (req, res) => {
  const { projectLocation, projectTimeline, typeProject } = req.body;

  if (!(projectLocation && projectTimeline && typeProject)) {
    throw new APIError(400, "Invalid project data");
  }

  const projectData = await ProjectInterest.create({
    projectLocation,
    projectTimeline,
    typeProject,
  });

  if (!projectData) {
    throw new APIError(400, "connot been created");
  }
  console.log(projectData);
  res.json(projectData).status(200);
});

const getalls = asyncHandler(async (req, res) => {
  const allData = await ProjectInterest.find({});

  if (!allData) {
    throw new APIError(500, "not found");
  }

  res.json(allData).status(200);
});

export { create, getalls };
