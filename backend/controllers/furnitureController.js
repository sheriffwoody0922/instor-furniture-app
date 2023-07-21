import { Furniture } from "../models/PostModel.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../helpers/cloudinaryHelper.js";

export const getAllFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.find(req.query);
    res.send(furniture);
    console.log(furniture);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getFurnitureById = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    res.send(furniture);
    console.log(furniture);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const addFurniture = async (req, res) => {
  console.log(req.file);
  try {
    // Überprüfen, ob das Bild erfolgreich hochgeladen wurde
    if (!req.file) {
      return res.status(400).send("No image file found.");
    }

    // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung
    uploadToCloudinary(req.file.buffer, async (err, result) => {
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
    });
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
};

export const updateFurniture = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  try {
    const furnitureId = req.params.id;
    const updatedData = req.body;
    console.log(req.body);
    const existingFurniture = await Furniture.findById(furnitureId);

    // Prüfen, ob ein Bild in der Request vorhanden ist
    if (req.file) {
      // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung. Das neue Bild wird hochgeladen
      uploadToCloudinary(req.file.buffer, async (err, result) => {
        if (err) {
          console.log("Cloudinary upload error:", err);
          return res.status(500).send("Error uploading image to Cloudinary.");
        }
        console.log("Cloudinary upload result:", result);
        try {
          // Nach dem Upload der neuen Bilddatei, wird die alte Bilddatei gelöscht. Bedingung ist, ob ein Bild in dem jeweiligen Furniture Item mit ImageID enthalten ist
          if (existingFurniture.image && existingFurniture.image.imageId) {
            deleteFromCloudinary(existingFurniture.image.imageId);
          }
          // das jeweilige Furniture Item wird überschrieben mit den neuen Bilddaten
          const updatedFurniture = await Furniture.findByIdAndUpdate(
            furnitureId,
            {
              ...updatedData,
              image: {
                url: result.secure_url,
                imageId: result.public_id,
              },
            }
          );
          res.json(updatedFurniture);
          console.log(
            "Updated furniture with replaced image:",
            updatedFurniture
          );
        } catch (err) {
          console.log("Error updating furniture:", err);
          res.status(500).send("Error updating furniture.");
        }
      });
    } else {
      // Ist eine Bilddatei nicht in der Request vorhanden, wird das Item ohne Dateien überschrieben. Es werden reine Daten geschrieben
      try {
        const updatedFurniture = await Furniture.findByIdAndUpdate(
          furnitureId,
          updatedData
        );
        res.json(updatedFurniture);
        console.log("Updated furniture without image:", updatedFurniture);
      } catch (err) {
        console.log("Error updating furniture:", err);
        res.status(500).send("Error updating furniture.");
      }
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
};

export const deleteFurniture = async (req, res) => {
  try {
    const furnitureId = req.params.id;
    const deletedFurniture = await Furniture.findByIdAndDelete(furnitureId);
    if (deletedFurniture.image && deletedFurniture.image.imageId) {
      deleteFromCloudinary(deletedFurniture.image.imageId);
    }
    res.json(deletedFurniture);
    console.log(deletedFurniture);
  } catch (err) {
    console.log(err);
    res.status(500).send("There was an error");
  }
};
