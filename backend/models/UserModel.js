import { mongoose } from "mongoose";
import crypto from "crypto";

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
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000,
    },
    description: {
      type: String,
      required: false,
      minlength: 5,
      maxlength: 1000,
    },

    image: {
      type: {
        url: String,
        imageId: String,
      },
      required: false,
    },
    email: {
      type: String,
      required: [true, "Bitte gebe eine Emailadresse ein ein!"],
      unique: [true, "Die Email Adresse existiert bereits"],
    },
    // password: {
    //   type: String,
    //   required: [true, "Bitte gebe ein Passwort ein!"],
    //   unique: false,
    // },
    // Hier werden alle Möbelstücke gespeichert, die auf die InventoryDaten referenzieren
    inventory: [{ type: mongoose.Types.ObjectId, ref: "Furniture" }],
    salt: { type: String, required: true, select: false },
    hash: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  // Salt
  this.salt = crypto.randomBytes(64).toString("hex");
  //   Password mit salt hashen
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

userSchema.methods.verifyPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.hash === hash;
};
// Exportiere das Mongoose-Modell 'User', das auf dem definierten 'postsSchema' basiert
export const User = mongoose.model("User", userSchema);
