import "../components/ContactFormStyles.css";
import React from "react";

const ContactForm = () => {
  return (
    <div className="conatct">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows={4} />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
