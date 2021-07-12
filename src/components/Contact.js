import React from "react";

export default function Contact() {
  return (
    <section id="contactsection">
      <div className="contact">
        <div>
          <h1>Contact</h1>
        </div>

        <div className="contact-wrapper">
          <div>
            <a
              href="mailto:patrick@moonport.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-button">Email</div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/pquandt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-button">Github</div>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/patrick-quandt-8848841b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-button">LinkedIn</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
