import React from "react";

const Contacts = (props) => {
  return (
    <div>
      <h1>Contacts Page</h1>
      <p>{new Date().toGMTString()}</p>
      <a href="/contacts/new">create new contact</a>
      {props.contacts.map((user) => {
        return (
        <div style={{ margin: "20px", border: "1px solid" }} key={contact.id}>
          <p>ID: {contact.id}</p>
          <p>{contact.name}</p>
          <p>{contact.age}</p>
          <p>{contact.phone}</p>
          <div>
            <a href={`/contacts/${contact.id}`}>show contact</a>
            <a href={`/contacts/${contact.id}/edit`}>edit contact</a>
            <a href={`/contacts/${contact.id}`} data-method="delete">delete contact</a>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Contacts;