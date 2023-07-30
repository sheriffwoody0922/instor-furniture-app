// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import Header from "../../components/Header/Header";

// Definiere die React-Komponente 'MiddleStuff'
const Register = () => {
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
