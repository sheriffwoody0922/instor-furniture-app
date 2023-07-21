import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";

export const upload = multer({ storage: multer.memoryStorage() });

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
