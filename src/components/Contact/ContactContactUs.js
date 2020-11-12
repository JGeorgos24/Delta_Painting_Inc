import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8grhulh', 'template_yo663zg', e.target, 'user_DrwIKcQYggJOAcbPPmG0M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}