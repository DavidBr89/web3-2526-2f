import { Link } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Geef een geldig e-mailadres")
    .required("E-mail is verplicht"),
  password: Yup.string()
    .min(8, "Wachtwoord moet minstens 8 karakters bevatten")
    .required("Wachtwoord is verplicht"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    touched,
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values, helpers) => {
      console.log("Login data:", values);
      helpers.setSubmitting(false);
    },
  });

  return (
    <main className="min-h-full bg-teal-50/60 px-4 py-10 md:px-8">
      <section className="mx-auto w-full max-w-md rounded-2xl border border-teal-100 bg-white p-6 shadow-lg md:p-8">
        <h1 className="mb-2 text-2xl font-bold text-teal-700">Login</h1>
        <p className="mb-6 text-sm text-slate-600">
          Log in met je accountgegevens.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@hogent.be"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-slate-700">
              Wachtwoord
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="*****"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-teal-300"
            disabled={isSubmitting}>
            Inloggen
          </button>
        </form>

        <p className="mt-5 text-sm text-slate-600">
          Nog geen account?{" "}
          <Link
            to="/register"
            className="font-semibold text-teal-700 underline underline-offset-4">
            Registreer hier
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
