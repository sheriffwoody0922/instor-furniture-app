// Importiere die 'Header'-Komponente aus dem '../components/Header'-Modul
import CreateUserForm from "../../components/CreateUserForm/CreateUserForm";
import Header from "../../components/Header/Header";

// Definiere die React-Komponente 'MiddleStuff'
const Register = () => {
  return (
    <>
      <Header />
      <main>
        <CreateUserForm />
      </main>
    </>
  );
};

export default Register;
