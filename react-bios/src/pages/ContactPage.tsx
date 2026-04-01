// import React, { useState, type ChangeEvent } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
// import { movieAxios } from "../api/movieApi";

import Axios from "axios";
import * as Yup from "yup";

const languages = {
  nl: {
    requiredNameField: "Naam is verplicht!",
  },
  eng: {
    requiredNameField: "Name is required!",
  },
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(languages["nl"].requiredNameField)
    .min(5, "Minstens 5 karakters")
    .max(20),
  email: Yup.string().required().email("Geen geldig emailadres").trim(),
  age: Yup.number().positive(),
  comments: Yup.string().required(),
});

interface Contact {
  name: string;
  age: number;
  email: string;
  comments: string;
}

const ContactPage = () => {
  // const [name, setName] = useState("David Breckx");
  // const [email, setEmail] = useState("");
  // const [comments, setComments] = useState("");

  // const [contactState, setContactState] = useState({
  //   name: "",
  //   email: "",
  //   comments: "",
  // });

  const { mutate, isError, error, isPending, data, isSuccess } = useMutation({
    mutationKey: ["createContact"],
    mutationFn: (values: Contact) => {
      return Axios.post<Contact & { id: number }>(
        "https://jsonplaceholder.typicode.com/todos",
        values,
      );
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["deleteContact"],
    mutationFn: (contactId: number) => {
      return Axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${contactId}`,
      );
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      age: 0,
      email: "",
      comments: "",
    },
    onSubmit: (values) => {
      mutate(values);
      // POST request versturen
    },
    validationSchema: validationSchema,
  });

  // const handleChange = (
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { name, value } = event.target;

  //   setContactState({ ...contactState, [name]: value });
  // };

  if (isPending) {
    return <p>Data wordt verstuurd....</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isSuccess) {
    return <p>{JSON.stringify(data.data)}</p>;
  }

  if (deleteMutation.isSuccess) {
    return <p>Data is verwijderd...</p>;
  }

  return (
    <div>
      <h1>Contact</h1>

      <form
        onSubmit={handleSubmit}
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   const { name, email, comments } = contactState;
        //   console.log(`Naam: ${name}, Email: ${email}, Opmerking: ${comments}`);

        //   // POST request versturen met deze data naar de API
        //   // Reset nu het form
        // }}
        // method="GET"
        // action="https://api.hogent.be/contact"
        className="flex flex-col gap-4 p-4">
        <input
          id="name"
          name="name"
          className="block border rounded-lg px-4 py-2"
          placeholder="Naam"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          name="email"
          className="block border rounded-lg px-4 py-2"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="age"
          className="block border rounded-lg px-4 py-2"
          placeholder="Leeftijd"
          type="number"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && <p>{errors.age}</p>}
        <textarea
          name="comments"
          className="block border rounded-lg px-4 py-2"
          placeholder="Commentaar"
          value={values.comments}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.comments && <p>{errors.comments}</p>}

        <input
          className="block border rounded-lg px-4 py-2"
          type="submit"
          value="Verstuur"
        />
      </form>

      <button
        onClick={() => {
          deleteMutation.mutate(201);
        }}>
        Verwijder contact
      </button>
    </div>
  );
};

export default ContactPage;
