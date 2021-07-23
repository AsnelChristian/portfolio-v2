import Iframe from 'react-iframe';
import emailjs from 'emailjs-com';
import { store } from 'react-notifications-component';

import { useState } from 'react';
import { Typography, ContactForm, Button } from '../components';

import emailKey from '../emailKey';

export function ContactContainer() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendFeedback(variables) {
    emailjs
      .send(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, variables, emailKey.USER_ID)
      .then((res) => {
        store.addNotification({
          title: 'Success',
          message: 'Message sent successfully',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        store.addNotification({
          title: 'Error',
          message: "Couldn't send the message",
          type: 'error',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        })
      );
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendFeedback({ message, lastname: lastName, firstname: firstName, email, reply_to: email });
  }

  return (
    <ContactForm.Section id="Contact">
      <Typography.SectionTitle>Get in touch</Typography.SectionTitle>
      <ContactForm.Container>
        <ContactForm onSubmit={handleSubmit}>
          <ContactForm.Input
            isInput
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            type="text"
            placeholder="First name"
            key="contact-firstname"
          />
          <ContactForm.Input
            isInput
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            type="text"
            placeholder="Last name"
            key="contact-lastname"
          />
          <ContactForm.Input
            isInput
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            key="contact-email"
          />
          <ContactForm.Input
            type="text"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            placeholder="Your message"
            key="contact-message"
          />
          <Button primary>
            <span>Send message &rarr;</span>
          </Button>
        </ContactForm>
        <ContactForm.Map>
          <Iframe
            position="relative"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 'none' }}
            frameBorder="0"
            allowFullScreen
            url="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnX0jdld7vkcRYLPaENXUIgQ&key=AIzaSyAtvB_8Kzh6NonXsCCQufwEKZ9jmgxY6-Y"
          />
        </ContactForm.Map>
      </ContactForm.Container>
    </ContactForm.Section>
  );
}
