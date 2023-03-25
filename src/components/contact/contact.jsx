import React from 'react';
import './contact.css';
import TelegramIcon from '../../images/telegram-icon.png'
import ContacrImage from '../../images/contact.png'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>SAVOLLAR BO’LSA MENEDJERGA MUROJAAT QILISHINGIZ MUMKIN</h2>
        <div className="telegram-contact">
          <a href="#">
               <img src={TelegramIcon} alt="TelegramIcon" width={37} />
               <p>@ARASHOV_TRADER</p>
          </a>          
        </div>
        <p className='phone-number'>+998 (95) 505-11-99</p>
      </div>
      <div className="contact-image">
        <img src={ContacrImage} alt="Contact us" />
      </div>
    </section>
  );
};

export default Contact;

