import express from "express";
import {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js"; // Import controller functions

const router = express.Router(); // Create an instance of Express Router

// Define routes and map them to corresponding controller functions
router.post("/", createClient); // Route for creating a new client
router.get("/", getClients); // Route for fetching all clients
router.get("/:id", getClientById); // Route for fetching a client by ID
router.put("/:id", updateClient); // Route for updating a client by ID
router.delete("/:id", deleteClient); // Route for deleting a client by ID

export default router; // Export the router instance with defined routes
