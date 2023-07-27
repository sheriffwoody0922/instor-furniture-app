// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";

import { useState } from "react";
// Definiere die React-Komponente 'MiddleStuff'
const Register = () => {
  const [categoryName, setCategoryName] = useState("mittel");
  return (
    <>
      {/* Container für den grauen Header */}
      <section className="header-grau">
        {/* Header-Komponente anzeigen */}
        <Header />
      </section>
      <CreateUserForm />
    </>
  );
};

export default Register;
