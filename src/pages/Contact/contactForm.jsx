import React from "react";
import emailjs from "emailjs-com";
import { gsap } from "gsap";

import { RiLoaderLine } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  let formArea = React.useRef(null);
  let messageArea = React.useRef(null);
  let loadingSpinner = React.useRef(null);
  let confirmationMessage = React.useRef(null);

  const handleClick = () => {
    gsap.to(formArea, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      userSelect: "none",
      zIndex: -1,
    });
    gsap.to(loadingSpinner, {
      duration: 0.5,
      delay: 1.5,
      opacity: 1,
    });
    gsap.to(loadingSpinner, {
      duration: 0.5,
      delay: 3.5,
      opacity: 0,
    });
    gsap.to(confirmationMessage, {
      duration: 0.5,
      delay: 4,
      opacity: 1,
      zIndex: 1,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vefjzyf",
        "template_7ri8h4j",
        e.target,
        "user_HQ6gGlL3udVgNtFjbqq2O"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="form-wrapper container">
        <div className="main">
          <form
            className="contact-form"
            ref={(e) => {
              formArea = e;
            }}
            onSubmit={sendEmail}
          >
            <div className="title">To: nestor.monroy.90@gmail.com</div>
            <input type="hidden" name="contact_number" />
            <div className="custom-div">
              <input
                type="text"
                name="user_name"
                placeholder="*name"
                value={name}
                onChange={(ev) => {
                  setName(ev.target.value);
                }}
              />
            </div>
            <div className="custom-div">
              <input
                type="email"
                name="user_email"
                placeholder="*email"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
            </div>
            <div className="custom-div">
              <textarea
                name="message"
                value={message}
                placeholder="*message"
                ref={(e) => {
                  messageArea = e;
                }}
                onChange={(ev) => {
                  setMessage(ev.target.value);
                  gsap.to(messageArea, {
                    duration: 1,
                    height: "50px",
                    ease: "power2",
                  });
                }}
                onSelect={() => {
                  gsap.to(messageArea, {
                    duration: 1,
                    height: "50px",
                    ease: "power2",
                  });
                }}
              />
              <div
                className="textarea-reduced-motion"
                name="message"
                value={message}
                placeholder="*message"
                onChange={(ev) => {
                  setMessage(ev.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              value="send"
              disabled={!name || !email.includes("@") || !message}
              variant="contained"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
      <div
        className="loadin-wrapper"
        ref={(e) => {
          loadingSpinner = e;
        }}
      >
        <div className="logo">
          <RiLoaderLine className="spinning-loader" />
        </div>
      </div>
      <div
        className="confirmation-wrapper"
        ref={(e) => {
          confirmationMessage = e;
        }}
      >
        <div className="confirmation">
          Your message has been sent successfully! I will come back to you as
          soon as I have the chance.
        </div>
      </div>
    </>
  );
};

export default Contact;
