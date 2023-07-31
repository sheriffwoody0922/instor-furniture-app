// Importiere die benötigten Module 'express', 'cors', 'morgan' und 'multer'
import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";

// Erstelle einen Multer-Upload-Middleware und konfiguriere sie mit 'memoryStorage',
// um Dateien im Arbeitsspeicher zu speichern, ohne sie auf der Festplatte zu speichern
export const upload = multer({ storage: multer.memoryStorage() });

// Erstelle eine Express-App und speichere sie in der Variable 'app'
export const app = express();

// Verwende die Middleware 'cors', um Cross-Origin Resource Sharing (CORS) zu ermöglichen
app.use(cors());

// Verwende die Middleware 'morgan' im "dev"-Modus, um HTTP-Requests und Antworten in der Konsole zu protokollieren
app.use(morgan("dev"));

// Verwende die Middleware 'express.json()', um eingehende Anfragedaten (z. B. JSON-Daten) zu parsen
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
