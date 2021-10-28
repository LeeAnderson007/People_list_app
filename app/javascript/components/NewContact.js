import React from "react";

const NewContact = () => {
  return (
    <div>
      <h1>Form</h1>
      <form action="/contacts" method="post">
        <p>Name</p>
        <input name="contact[name]" />
        <p>Age</p>
        <input name="contact[age]" />
        <p>Phone</p>
        <input name="contact[phone]" />
        <button type="submit">add</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default NewContact;