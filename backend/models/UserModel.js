// Importiere das 'mongoose'-Modul, um mit MongoDB zu interagieren
import mongoose from "mongoose";

// Definiere ein Mongoose-Schema namens 'userSchema' für die 'Furniture'-Dokumente in der Datenbank
const userSchema = new mongoose.Schema(
  {
    // Feld 'userHandle': Eine Zeichenkette (String) ist erforderlich (required),
    // mit einer Mindestlänge von 2 Zeichen und einer maximalen Länge von 20 Zeichen
    userHandle: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      unique: true,
      validate: {
        validator: function (value) {
          // Überprüfe, ob das userHandle mit '@' beginnt
          return value.startsWith("@");
        },
        message: "Dein Username muss mit einem '@' beginnen",
      },
    },
    // Feld 'name': Eine Zeichenkette (String) ist erforderlich (required),
    // mit einer Mindestlänge von 5 Zeichen und einer maximalen Länge von 1000 Zeichen
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000,
    },
    // Feld 'description': Eine Zeichenkette (String) ist erforderlich (required),
    // mit einer Mindestlänge von 5 Zeichen und einer maximalen Länge von 1000 Zeichen
    description: {
      type: String,
      required: false,
      minlength: 5,
      maxlength: 1000,
    },

    // Feld 'inventory': Eine Zeichenkette (String), die aus einer festen Liste von Werten (enum) ausgewählt werden muss,
    inventory: {
      type: String,
      required: false,
    },
    // Feld 'image': Ein verschachteltes Objekt, das aus den Feldern 'url' und 'imageId' besteht,
    // beide Felder sind Zeichenketten (String) und sind erforderlich (required)
    image: {
      type: {
        url: String,
        imageId: String,
      },
      required: true,
    },
    email: {
      type: String,
      required: [true, "Bitte gebe eine Emailadresse ein ein!"],
      unique: [true, "Die Email Adresse existiert bereits"],
    },
    password: {
      type: String,
      required: [true, "Bitte gebe ein Passwort ein!"],
      unique: false,
    },
    // Hier werden alle Möbelstücke gespeichert, die auf die InventoryDaten referenzieren
    inventory: [{ type: mongoose.Types.ObjectId, ref: "Furniture" }],
  },
  { timestamps: true }
);

// Exportiere das Mongoose-Modell 'User', das auf dem definierten 'postsSchema' basiert
export const User = mongoose.model("User", userSchema);
