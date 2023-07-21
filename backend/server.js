import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT || 3000, () => {
  console.log("Server läuft auf: ", PORT);
});
