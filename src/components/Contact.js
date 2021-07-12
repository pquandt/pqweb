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
              <div className="contact-button-mail">Email</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
