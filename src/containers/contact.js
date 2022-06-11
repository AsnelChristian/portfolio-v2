import Iframe from 'react-iframe';
import emailjs from 'emailjs-com';
import { store } from 'react-notifications-component';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, ContactForm, Button } from '../components';

const { USER_ID, TEMPLATE_ID, SERVICE_ID } = process.env;

export function ContactContainer() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function sendFeedback(variables) {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, variables, USER_ID)
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

  function handleSendMessage({ message, lastName, firstName, email }) {
    sendFeedback({ message, lastname: lastName, firstname: firstName, email, reply_to: email });
  }

  return (
    <ContactForm.Section id="Contact">
      <Typography.SectionTitle>Get in touch</Typography.SectionTitle>
      <ContactForm.Container>
        <ContactForm onSubmit={handleSubmit(handleSendMessage)}>
          <ContactForm.Input
            isInput
            error={errors.firstName && 'Please provide valid first name.'}
            {...register('firstName', { required: true, maxLength: 20 })}
            type="text"
            placeholder="First name"
            key="contact-firstname"
          />
          <ContactForm.Input
            isInput
            error={errors.lastName && 'Please provide a valid last name.'}
            {...register('lastName', { required: true, maxLength: 20 })}
            type="text"
            placeholder="Last name"
            key="contact-lastname"
          />
          <ContactForm.Input
            isInput
            error={errors.email && 'Please provide a valid email.'}
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            key="contact-email"
          />
          <ContactForm.Input
            type="text"
            error={errors.message && 'Message should have at least 20 characters.'}
            {...register('message', { required: true, minLength: 20 })}
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
            style={[
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
              },
            ]}
            frameBorder="0"
            allowFullScreen
            url="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnX0jdld7vkcRYLPaENXUIgQ&key=AIzaSyAtvB_8Kzh6NonXsCCQufwEKZ9jmgxY6-Y"
          />
        </ContactForm.Map>
      </ContactForm.Container>
    </ContactForm.Section>
  );
}
