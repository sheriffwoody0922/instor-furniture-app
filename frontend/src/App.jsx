// Importiere die CSS-Datei für das Styling der App
import "./App.css";

// Importiere die notwendigen Komponenten und Funktionen aus dem 'react-router-dom'-Modul
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importiere die verschiedenen Seiten-Komponenten aus ihren jeweiligen Dateien
import Home from "./pages/Home";
import Bigstuff from "./pages/BigStuff";
import Middlestuff from "./pages/MiddleStuff";
import Smallstuff from "./pages/SmallStuff";
import Detailpage from "./pages/Detailpage";
import AllFurniture from "./pages/AllFurniture";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

// Definiere die App-Komponente
function App() {
  return (
    <>
      {/* Verwende das 'BrowserRouter'-Wrapper für die Routing-Funktionalität */}
      <BrowserRouter>
        {/* Definiere die Routen und welche Komponenten aufgerufen werden sollen */}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Wenn der Pfad '/home' übereinstimmt, zeige die 'Home'-Komponente an */}
          <Route path="/big-stuff" element={<Bigstuff />} />{" "}
          {/* Wenn der Pfad '/big-stuff' übereinstimmt, zeige die 'Bigstuff'-Komponente an */}
          <Route path="/allfurnitures" element={<AllFurniture />} />{" "}
          {/* Wenn der Pfad '/big-stuff' übereinstimmt, zeige die 'Bigstuff'-Komponente an */}
          <Route path="/middle-stuff" element={<Middlestuff />} />{" "}
          {/* Wenn der Pfad '/middle-stuff' übereinstimmt, zeige die 'Middlestuff'-Komponente an */}
          <Route path="/small-stuff" element={<Smallstuff />} />{" "}
          {/* Wenn der Pfad '/small-stuff' übereinstimmt, zeige die 'Smallstuff'-Komponente an */}
          <Route path="/furniture/:id" element={<Detailpage />} />{" "}
          {/* Wenn der Pfad '/furniture/:id' übereinstimmt , zeige die 'Detailpage'-Komponente an */}
          <Route path="/register" element={<Register />} />{" "}
          {/* Wenn der Pfad '/register' übereinstimmt , zeige die 'Register'-Komponente an */}
          <Route path="/login" element={<Login />} />{" "}
          {/* Wenn der Pfad '/login' übereinstimmt , zeige die 'Login'-Komponente an */}
          <Route path="/user/:userHandle" element={<UserProfile />} />{" "}
          {/* Wenn der Pfad '/register' übereinstimmt , zeige die 'Register'-Komponente an */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Exportiere die 'App'-Komponente, damit sie in anderen Dateien verwendet werden kann
export default App;
