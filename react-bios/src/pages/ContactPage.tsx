import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("David Breckx");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // const [contactState, setContactState] = useState()

  return (
    <div>
      <h1>Contact</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          console.log(`Naam: ${name}, Email: ${email}, Opmerking: ${comments}`);

          // POST request versturen met deze data naar de API
          // Reset nu het form
        }}
        // method="GET"
        // action="https://api.hogent.be/contact"
        className="flex flex-col gap-4 p-4">
        <input
          name="name"
          className="block border rounded-lg px-4 py-2"
          placeholder="Naam"
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          name="email"
          className="block border rounded-lg px-4 py-2"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <textarea
          required
          name="comments"
          className="block border rounded-lg px-4 py-2"
          placeholder="Commentaar"
          value={comments}
          onChange={(event) => {
            setComments(event.target.value);
          }}
        />

        <input
          className="block border rounded-lg px-4 py-2"
          type="submit"
          value="Verstuur"
        />
      </form>
    </div>
  );
};

export default ContactPage;
