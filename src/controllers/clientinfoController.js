import { Clientinfo } from "../Models/Clientinfo.js";

// Create a new client
const createClient = async (req, res) => {
  const { fullName, contactNo, emailId } = req.body;
  const photo = req.file ? req.file.buffer.toString("base64") : null;
  try {
    const newClient = new Clientinfo({ fullName, contactNo, emailId, photo });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Clientinfo.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific client
const getClientById = async (req, res) => {
  try {
    const client = await Clientinfo.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a client
const updateClient = async (req, res) => {
  const { fullName, contactNo, emailId } = req.body;
  const photo = req.file ? req.file.buffer.toString("base64") : req.body.photo;
  try {
    const updatedClient = await Clientinfo.findByIdAndUpdate(
      req.params.id,
      { fullName, contactNo, emailId, photo },
      { new: true }
    );
    if (!updatedClient)
      return res.status(404).json({ message: "Client not found" });
    res.json(updatedClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a client
const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Clientinfo.findByIdAndDelete(req.params.id);
    if (!deletedClient)
      return res.status(404).json({ message: "Client not found" });
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
