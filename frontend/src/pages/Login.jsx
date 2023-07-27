import Header from "../components/Header";
import LoginUserForm from "../components/LoginUserForm";

const Login = () => {
  return (
    <>
      {/* Container für den grauen Header */}
      <section className="header-grau">
        {/* Header-Komponente anzeigen */}
        <Header />
      </section>
      <LoginUserForm />
    </>
  );
};

export default Login;
