import MyButton from "../components/MyButton";
import { useAuth } from "react-oidc-context";

const IISLoginPage = () => {
  const auth = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-teal-50/60 px-4 py-10 md:px-8 justify-center">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-teal-100 bg-white p-6 shadow-lg md:p-8">
        <h1 className="mb-2 text-2xl font-bold text-teal-700">
          Identity Login
        </h1>
        <p className="mb-6 text-sm text-slate-600">
          Log in via Identity Server om verder te gaan.
        </p>

        <MyButton
          className="w-full"
          onClick={() => {
            auth.signinRedirect();
          }}>
          Inloggen met Identity Server
        </MyButton>
      </div>
    </div>
  );
};

export default IISLoginPage;
