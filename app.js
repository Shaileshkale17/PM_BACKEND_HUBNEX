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
//! AssignLead
app.get("/", (req, res) => {
  res.status(200).json("success");
});

app.use("/api/v1/AssignLead", AssignLeadrouter);
app.use("/api/v1/clients", clientRoutes);
app.use("/api/v1/clientsinfo", clientinfoRoutes);
app.use("/api/v1/FromData", FromDataRoutes);

export { app };
