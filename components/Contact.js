import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const newEmail = { name, email, message };

    emailjs
      .send(
        "service_pg5o7l7",
        "template_ujvlr4g",
        { newEmail },
        process.env.NEXT_PUBLIC_PRIVATE_KEY
      )
      .then((result) => {
        if (result.status === 200) {
          alert("Message envoyé ! ");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Erreur lors de l'envoie du message");
        }
      });
  };

  return (
    <section className="contact" id="contact" data-aos="fade-down">
      <div className="center-text">
        <h2>
          Contactez <span>Moi</span>
        </h2>
      </div>
      <div className="contact-form" data-aos="zoom-in">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="send-btn">
            ENVOYER
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
