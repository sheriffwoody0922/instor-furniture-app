import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import "./config/config.js";
import "./models/index.js";
import { Furniture } from "./models/PostModel.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const app = express();
const PORT = 3001;
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// # Fetche alle Möbelstücke oder Möbelstücke einer bestimmten Größe
app.get("/api/furniture", async (req, res) => {
  try {
    const furniture = await Furniture.find(req.query);
    res.send(furniture);
    console.log(furniture);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// # Fetche ein Möbelstück mit der ID
app.get("/api/furniture/:id", async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    res.send(furniture);
    console.log(furniture);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// # Poste ein neues Möbelstück
app.post("/api/addFurniture", upload.single("image"), async (req, res) => {
  console.log(req.file);
  try {
    // Überprüfen, ob das Bild erfolgreich hochgeladen wurde
    if (!req.file) {
      return res.status(400).send("No image file found.");
    }

    // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung
    cloudinary.uploader
      .upload_stream(
        { resource_type: "image", folder: "MyFurniture" },
        async (err, result) => {
          if (err) {
            console.log("Cloudinary upload error:", err);
            return res.status(500).send("Error uploading image to Cloudinary.");
          }

          console.log("Cloudinary upload result:", result);
          try {
            const response = await Furniture.create({
              ...req.body,
              image: { url: result.secure_url, imageId: result.public_id },
            });
            res.json(response);
          } catch (err) {
            console.log("Error creating furniture:", err);
            res.status(500).send("Error creating furniture.");
          }
        }
      )
      .end(req.file.buffer);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
});

// # Update einen Post mit der ID
app.put("/api/updateFurniture/:id", async (req, res) => {
  try {
    const response = await Furniture.findByIdAndUpdate(
      req.params.id,
      req.body
    ).then((response) => {
      res.json(response);
      console.log(response);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("there was an error");
  }
});
// # Lösche ein Möbelstück mit der ID
app.delete("/api/deleteFurniture/:id", async (req, res) => {
  try {
    const response = await Furniture.findByIdAndDelete(req.params.id);
    cloudinary.uploader.destroy(response.image?.imageId, (err) => {
      console.log(err);
    });
    res.json(response);
    console.log(response);
  } catch (err) {
    console.log(err);
    res.status(500).send("there was an error");
  }
});
app.listen(PORT || 3000, () => {
  console.log("Server läuft auf: ", PORT);
});
