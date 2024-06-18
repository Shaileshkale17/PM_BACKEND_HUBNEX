import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import AssignLeadrouter from "./router/AssignLead.routes.js";
import clientRoutes from "./router/clientRoutes.routes.js";
import clientinfoRoutes from "./router/clients.js";
import FromDataRoutes from "./router/FromData.routes.js";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Declarations
app.use("/api/v1/", AssignLeadrouter);
app.use("/api/v1/", clientRoutes);
app.use("/api/v1/", clientinfoRoutes);
app.use("/api/v1/", FromDataRoutes);

export { app };
