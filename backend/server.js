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

dotenv.config();

const PORT = 3001;

// Routen
app.get("/api/furniture", getAllFurniture);
app.get("/api/furniture/:id", getFurnitureById);
app.post("/api/addFurniture", upload.single("image"), addFurniture);
app.put("/api/updateFurniture/:id", upload.single("image"), updateFurniture);
app.delete("/api/deleteFurniture/:id", deleteFurniture);

app.listen(PORT, () => {
  console.log("Server läuft auf: ", PORT);
});
