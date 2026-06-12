import React from 'react';
import { mainData } from '../../../core/data/layoutData';
import { useSelector } from 'react-redux';
import data from '../../../core/data/portfolioData';
import ContactMapComponent from './ContactMapComponent';

const ContactComponent = () => {
  const { language } = useSelector((state) => state.menuComponentReducer);
  return (
    <section className="contact-box container">
      <div className="contact-map">
        <ContactMapComponent />
      </div>

      <div className="contact-text">
        <h1 className="contact-title">{data.contact_title[language]}</h1>
        <p className="contact-description">
          {data.contact_description[language]}
        </p>
        <a
          href="mailto:agscm2@gmail.com"
          className="contact-info-link"
          target="_blank"
          title={mainData.send_mail[language]}
        >
          agscm2@gmail.com
        </a>
        <a
          href="https://github.com/Alegarse"
          className="contact-info-link"
          target="_blank"
          title={mainData.go_github[language]}
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/alegarse/"
          className="contact-info-link"
          target="_blank"
          title={mainData.go_linkedin[language]}
        >
          LinkedIn
        </a>
        <a
          href="https://wa.me/34644321368"
          className="contact-info-link"
          title={mainData.go_phone[language]}
          target="_blank"
        >
          +34 644321 368
        </a>
      </div>
    </section>
  );
};

export default ContactComponent;
