// Importiere das 'dotenv'-Modul, um Umgebungsvariablen zu laden
import dotenv from "dotenv";

// Importiere die Middleware 'app' und 'upload' aus der Datei './middlewares/middleware.js'
import { app, upload } from "./middlewares/middleware.js";
import { authenticateToken } from "./middlewares/authenticateToken.js";

// Importiere die Controller-Funktionen für die Möbel-Endpoints
import {
  getAllFurniture,
  getAllFurnitureTwo,
  getFurnitureById,
  addFurniture,
  updateFurniture,
  deleteFurniture,
} from "./controllers/furnitureController.js";

// Importiere die Controller-Funktionen für die User-Endpoints
import {
  getAllUsers,
  getAllUserTwo,
  addUser,
  updateUser,
  deleteUser,
  getUserByHandleOrId,
  addFurnitureToUser,
  loginUser,
  signupUser,
  authenticateUser,
} from "./controllers/userController.js";

// Importiere die Konfigurationsdatei und das Modell aus den entsprechenden Dateien
import "./config/config.js";
import "./models/index.js";

// Importiere das 'express'-Modul für die Erstellung der Express-App
import express from "express";

// Importiere die Funktionen 'fileURLToPath' und 'dirname' aus dem 'url'- und 'path'-Modul
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Ermittle den aktuellen Dateinamen und den Verzeichnisnamen
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Definiere das Verzeichnis für das Frontend und stelle es als statisches Verzeichnis bereit
const FE_DIR = join(__dirname, "../frontend/dist/");
app.use(express.static(FE_DIR));

// Lade die Umgebungsvariablen aus der '.env'-Datei
dotenv.config();

// Definiere den Server-Port und den Pfad zur Index-Datei des Frontends
const PORT = 3001;
const FE_INDEX = join(__dirname, "../frontend/dist/index.html");

// Routen
// Definiere die Routen für die Möbel-Endpoints und verknüpfe sie mit den entsprechenden Controller-Funktionen
app.get("/api/furniture", authenticateToken, getAllFurnitureTwo);
app.get("/api/furniture/:id", getFurnitureById);
app.post("/api/addFurniture", upload.single("image"), addFurniture);
app.put("/api/updateFurniture/:id", upload.single("image"), updateFurniture);
app.delete("/api/deleteFurniture/:id", deleteFurniture);

// Definiere die Routen für die User-Endpoints und verknüpfe sie mit den entsprechenden Controller-Funktionen
app.get("/api/user", getAllUserTwo);
app.get("/api/user/:userHandle", authenticateToken, getUserByHandleOrId);
app.post("/api/addUser", upload.single("image"), addUser);
app.put("/api/updateUser/:id", upload.single("image"), updateUser);
app.put("/api/addFurnitureToUser/:id", addFurnitureToUser);
app.delete("/api/deleteUser/:id", deleteUser);
app.post("/api/user/login", upload.single("image"), loginUser);
app.post("/api/user/signup", upload.single("image"), signupUser);
app.get("/secure", authenticateToken, authenticateUser);

// Definiere einen Catch-All-Route für alle anderen Anfragen und sende die Index-Datei des Frontends
app.get("*", (req, res) => res.sendFile(FE_INDEX));

// Starte den Server und lausche auf dem angegebenen Port
app.listen(PORT, () => {
  console.log("Server läuft auf: ", PORT);
});
