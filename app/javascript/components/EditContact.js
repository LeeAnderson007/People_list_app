import React from "react";

const EditContact = (props) => {
  return (
    <div>
      <h1>Form</h1>
      <form action={`/contacts/${props.contact.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.contact.name} name="contact[name]" />
        <p>Age</p>
        <input defaultValue={props.contact.age} name="contact[age]" />
        <button type="submit">update</button>
        <input defaultValue={props.contact.phone} name="contact[phone]" />
        <button type="submit">update</button>
      </form>
      <a href="/">back</a>
    </div>
  );
};

export default EditContact;