import dotenv from "dotenv";
import { app, upload } from "./middlewares/middleware.js";
import {
  getAllFurniture,
  getFurnitureById,
  addFurniture,
  updateFurniture,
  deleteFurniture,
} from "./controllers/furnitureController.js";
import "./config/config.js";
import "./models/index.js";
import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FE_DIR = join(__dirname, "../frontend/dist/");
app.use(express.static(FE_DIR));
dotenv.config();

const PORT = 3001;
const FE_INDEX = join(__dirname, "../frontend/dist/index.html");

// Routen
app.get("/api/furniture", getAllFurniture);
app.get("/api/furniture/:id", getFurnitureById);
app.post("/api/addFurniture", upload.single("image"), addFurniture);
app.put("/api/updateFurniture/:id", upload.single("image"), updateFurniture);
app.delete("/api/deleteFurniture/:id", deleteFurniture);

app.get("*", (req, res) => res.sendFile(FE_INDEX));

app.listen(PORT, () => {
  console.log("Server läuft auf: ", PORT);
});
