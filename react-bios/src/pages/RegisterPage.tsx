import { Link } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

const registerValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Voornaam moet minstens 2 karakters bevatten")
    .required("Voornaam is verplicht"),
  lastName: Yup.string()
    .min(2, "Achternaam moet minstens 2 karakters bevatten")
    .required("Achternaam is verplicht"),
  email: Yup.string()
    .email("Geef een geldig e-mailadres")
    .required("E-mail is verplicht"),
  password: Yup.string()
    .min(8, "Wachtwoord moet minstens 8 karakters bevatten")
    .required("Wachtwoord is verplicht"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Wachtwoorden komen niet overeen")
    .required("Bevestig je wachtwoord"),
  terms: Yup.boolean().oneOf([true], "Je moet akkoord gaan met de voorwaarden"),
});

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const RegisterPage = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
  } = useFormik<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values, helpers) => {
      console.log("Register data:", values);
      helpers.setSubmitting(false);
    },
  });

  return (
    <main className="min-h-full bg-teal-50/60 px-4 py-10 md:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-teal-100 bg-white p-6 shadow-lg md:p-8">
        <h1 className="mb-2 text-2xl font-bold text-teal-700">Registreren</h1>
        <p className="mb-6 text-sm text-slate-600">
          Maak een nieuw account aan.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-1 block text-sm font-medium text-slate-700">
              Voornaam
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Voornaam"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName ? (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-1 block text-sm font-medium text-slate-700">
              Achternaam
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Achternaam"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.lastName && errors.lastName ? (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            ) : null}
          </div>

          <div className="md:col-span-2">
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
              placeholder="Minstens 8 karakters"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block text-sm font-medium text-slate-700">
              Bevestig wachtwoord
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Herhaal wachtwoord"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            ) : null}
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={values.terms}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              Ik ga akkoord met de voorwaarden.
            </label>
            {touched.terms && errors.terms ? (
              <p className="mt-1 text-sm text-red-600">{errors.terms}</p>
            ) : null}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-teal-300"
              disabled={isSubmitting}>
              Account aanmaken
            </button>
          </div>
        </form>

        <p className="mt-5 text-sm text-slate-600">
          Heb je al een account?{" "}
          <Link
            to="/login"
            className="font-semibold text-teal-700 underline underline-offset-4">
            Login hier
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
