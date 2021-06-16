import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="contact">
        <div>
          <h1>Contact</h1>
        </div>

        <div className="contact-wrapper">
          <div className="vLine">4</div>
          <div className="contact-text">
            <a
              href="mailto:patrick@moonport.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              patrick@moonport.app
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
