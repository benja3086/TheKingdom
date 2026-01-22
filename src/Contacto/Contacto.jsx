import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bkaotil", "template_j9uho1e", form.current, {
        publicKey: "q5vv-b1UPzORYcQNW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <div>
      <h1>Contactanos</h1>
      <form ref={form} onSubmit={sendEmail} className="contacto-wrapper">
        <div className="form-control">
          <input type="text" name="user_name" required />
          <label>
            {"Nombre y Apellido".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </div>

        <div className="form-control">
          <input type="email" name="user_email" required />
          <label>
            {"Email".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </div>

        <div className="form-control">
          <textarea name="message" required />
          <label>
            {"Mensaje".split("").map((c, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {c}
              </span>
            ))}
          </label>
        </div>

        <button className="ui-btn">
          <span>Enviar</span>
        </button>
      </form>
    </div>
  );
};
export default Contacto;
