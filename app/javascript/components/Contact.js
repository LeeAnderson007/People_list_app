import React from "react";

const Contact = (props) => {
  return (
    <div>
      <h1>{props.contact.name}</h1>
      <h1>{props.contact.age}</h1>
      <h1>{props.contact.phone}</h1>
      <a href="/">contacts</a>
    </div>
  );
};

export default Contact;