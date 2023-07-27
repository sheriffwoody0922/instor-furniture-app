// Importiere das 'User'-Modell aus der '../models/UserModel.js'-Datei
// sowie die Funktionen 'uploadToCloudinary' und 'deleteFromCloudinary'
// aus der '../helpers/cloudinaryHelper.js'-Datei
import { User } from "../models/UserModel.js";
import {
  uploadToCloudinaryDirUser,
  deleteFromCloudinaryDirUser,
} from "../helpers/cloudinaryHelperUser.js";

// Definiere die Funktion 'getAllUsers', die alle User aus der Datenbank abruft
export const getAllUsers = async (req, res) => {
  try {
    // Rufe alle Möbelstücke aus der Datenbank basierend auf den Anfragenparametern (req.query) ab. Wenn keine query übermittelt werden, dann werden alle Möbelstücke aus der Datenbank geladen. zb die Url "./api/user?size=gross"
    const user = await User.find(req.query);
    console.log("hi", user);

    // Sende die Möbelstücke als Antwort zurück
    res.send(user);
    // Gebe die Möbelstücke auch in der Konsole aus
    console.log(user);
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log(err);
    res.sendStatus(500);
  }
};

// export const getAllUserTwo = async (req, res) => {
//   const { title, description, room, size, sortBy } = req.query;

//   try {
//     let responseData = await User.find();

//     if (title) {
//       responseData = responseData.filter((data) => {
//         return data.title.toLowerCase().includes(title.toLowerCase());
//       });
//     }
//     if (room) {
//       responseData = responseData.filter((data) => {
//         return data.room.toLowerCase().includes(room.toLowerCase());
//       });
//     }
//     if (size) {
//       responseData = responseData.filter((data) => {
//         return data.size.toLowerCase().includes(size.toLowerCase());
//       });
//     }
//     if (description) {
//       responseData = responseData.filter((data) => {
//         return data.description
//           .toLowerCase()
//           .includes(description.toLowerCase());
//       });
//     }
//     if (sortBy) {
//       // Validiere den Sortierparameter
//       if (!["title", "room", "anotherProperty"].includes(sortBy)) {
//         return res.status(400).json({ error: "Invalid 'sortBy' parameter." });
//       }

//       responseData.sort((dataA, dataB) => {
//         return dataA[sortBy].localeCompare(dataB[sortBy]);
//       });
//     }

//     res.json(responseData);
//   } catch (err) {
//     console.error(err);
//     res
//       .status(500)
//       .json({ error: "There was an error fetching the Big Stuff" });
//   }
// };
export const getAllUserTwo = async (req, res) => {
  try {
    // Daten von außen über den Request erhalten
    const filters = req.query;

    // Beispiel Query:
    // req.query = {
    //   room: "Wohnzimmer",
    //   size: "klein"
    // };

    const sortBy = filters.sortBy; // Zwischenspeichern der sortBy Query

    // Erstellen eines Filterobjekts für die Datenbankabfrage
    // Angenommen, die "key" in den Filtern entspricht dem Datenbankfeld
    const filterObject = {};
    for (const key in filters) {
      if (key !== "sortBy") {
        filterObject[key] = { $regex: new RegExp(filters[key], "i") };
      }
    }
    // Output:
    // filterObject = {
    //   room: { $regex: /Wohnzimmmer/i },
    //   size: { $regex: /klein/i }
    // };
    let query = User.find(filterObject);

    // Sortierung basierend auf dem sortBy-Schlüssel
    if (sortBy) {
      // Wenn sortBy mit "asc" angegeben ist, wird aufsteigend sortiert
      // Ansonsten wird standardmäßig absteigend sortiert
      const sortOrder = sortBy === "asc" ? 1 : -1;
      query = query.sort({ [sortBy]: sortOrder });
    }

    let responseData = await query.exec();
    res.json(responseData);
    console.log(responseData.length);
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Anfrage:", error);
    res.status(500).send("Interner Serverfehler");
  }
};

// Definiere die Funktion 'getUserById', die ein Möbelstück anhand seiner ID aus der Datenbank abruft
export const getUserById = async (req, res) => {
  try {
    // Rufe das Möbelstück aus der Datenbank anhand seiner ID (req.params.id) ab
    const user = await User.findById(req.params.id);
    // Sende das Möbelstück als Antwort zurück
    res.send(user);
    // Gebe das Möbelstück auch in der Konsole aus
    console.log(user);
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log(err);
    res.sendStatus(500);
  }
};

// Definiere die Funktion 'addUser', die ein neues Möbelstück zur Datenbank hinzufügt
export const addUser = async (req, res) => {
  // Gebe das empfangene Dateiobjekt in der Konsole aus
  console.log(req.file);
  try {
    // Überprüfen, ob das Bild erfolgreich hochgeladen wurde
    if (!req.file) {
      // Wenn keine Datei gefunden wurde, sende den Statuscode 400 mit einer Fehlermeldung zurück
      return res.status(400).send("No image file found.");
    }

    // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung
    uploadToCloudinaryDirUser(req.file.buffer, async (err, result) => {
      if (err) {
        // Bei einem Cloudinary-Upload-Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
        console.log("Cloudinary upload error:", err);
        return res.status(500).send("Error uploading image to Cloudinary.");
      }

      // Gebe das Ergebnis des Cloudinary-Uploads in der Konsole aus
      console.log("Cloudinary upload result:", result);
      try {
        // Erstelle ein neues Möbelstück in der Datenbank mit den empfangenen Daten sowie der URL und Image-ID des hochgeladenen Bildes. Dabei wird das Body der Anfrage übernommen und gleichzeitig um den key image erweitert, welcher die Values von Cloudinary enthält
        const response = await User.create({
          ...req.body,
          image: { url: result.secure_url, imageId: result.public_id },
        });
        // Sende die Antwort als JSON zurück
        res.json(response);
      } catch (err) {
        // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
        console.log("Error creating user:", err);
        res.status(500).send("Error creating user.");
      }
    });
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
};

// Definiere die Funktion 'updateUser', die ein Möbelstück in der Datenbank aktualisiert
export const updateUser = async (req, res) => {
  // Gebe das empfangene Dateiobjekt und die empfangenen Daten in der Konsole aus
  console.log(req.file);
  console.log(req.body);
  try {
    // Extrahiere die Möbelstück-ID und die aktualisierten Daten aus der Anfrage
    const userId = req.params.id;
    const updatedData = req.body;

    // Rufe das vorhandene Möbelstück aus der Datenbank basierend auf der ID ab
    const existingUser = await User.findById(userId);

    // Prüfen, ob ein Bild in der Request vorhanden ist
    if (req.file) {
      // Cloudinary-Upload-Stream-Ereignis mit Fehlerbehandlung. Das neue Bild wird hochgeladen
      uploadToCloudinaryDirUser(req.file.buffer, async (err, result) => {
        if (err) {
          // Bei einem Cloudinary-Upload-Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
          console.log("Cloudinary upload error:", err);
          return res.status(500).send("Error uploading image to Cloudinary.");
        }

        // Gebe das Ergebnis des Cloudinary-Uploads in der Konsole aus
        console.log("Cloudinary upload result:", result);
        try {
          // Nach dem Upload der neuen Bilddatei, wird die alte Bilddatei gelöscht.
          // Die Bedingung überprüft, ob ein Bild in dem jeweiligen User Item mit ImageID enthalten ist
          if (existingUser.image && existingUser.image.imageId) {
            deleteFromCloudinaryDirUser(existingUser.image.imageId);
          }
          // Das jeweilige User Item wird überschrieben mit den neuen Bilddaten
          const updatedUser = await User.findByIdAndUpdate(userId, {
            ...updatedData,
            image: {
              url: result.secure_url,
              imageId: result.public_id,
            },
          });
          // Sende das aktualisierte Möbelstück als Antwort zurück und gebe es in der Konsole aus
          res.json(updatedUser);
          console.log("Updated user with replaced image:", updatedUser);
        } catch (err) {
          // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
          console.log("Error updating user:", err);
          res.status(500).send("Error updating user.");
        }
      });
    } else {
      // Ist keine Bilddatei in der Request vorhanden, wird das Item ohne Dateien überschrieben.
      // Es werden nur die reinen Daten geschrieben
      try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData);
        // Sende das aktualisierte Möbelstück als Antwort zurück und gebe es in der Konsole aus
        res.json(updatedUser);
        console.log("Updated user without image:", updatedUser);
      } catch (err) {
        // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
        console.log("Error updating user:", err);
        res.status(500).send("Error updating user.");
      }
    }
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log("Error:", err);
    res.status(500).send("There was an error.");
  }
};

// Definiere die Funktion 'deleteUser', die ein Möbelstück aus der Datenbank löscht
export const deleteUser = async (req, res) => {
  try {
    // Extrahiere die Möbelstück-ID aus der Anfrage
    const userId = req.params.id;
    // Lösche das Möbelstück aus der Datenbank anhand seiner ID
    const deletedUser = await User.findByIdAndDelete(userId);

    // Prüfen, ob das gelöschte Möbelstück ein Bild hatte und ob eine Image-ID vorhanden ist
    if (deletedUser.image && deletedUser.image.imageId) {
      // Lösche das Bild aus Cloudinary mit der Image-ID
      deleteFromCloudinaryDirUser(deletedUser.image.imageId);
    }

    // Sende das gelöschte Möbelstück als Antwort zurück und gebe es in der Konsole aus
    res.json(deletedUser);
    console.log(deletedUser);
  } catch (err) {
    // Bei einem Fehler logge den Fehler in der Konsole und sende den Statuscode 500 zurück
    console.log(err);
    res.status(500).send("There was an error");
  }
};
