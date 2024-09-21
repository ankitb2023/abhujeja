import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import { sendForm } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendForm(
      'service_bfj4jw8',
      'template_b741vy7',
      form.current,
      'IdjjJa1wjSwqvOZNi'
    )
      .then((result) => {
        console.log('Message sent:', result.text);
        toast.success('Message sent successfully!', {
          position: 'top-right',
        });
      })
      .catch((error) => {
        console.log('Error:', error.text);
        toast.error('Failed to send message!', {
          position: 'top-right',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset();
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src="/images/contact1.png" alt="Contact" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input type="email" name="email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <textarea placeholder="Message" name="message" required />
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" disabled={isSubmitting}>
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
