import Iframe from 'react-iframe';
import { ContactForm } from '../components';
import Typography from '../components/Typography';

export function ContactContainer() {
  return (
    <ContactForm.Section id="Contact">
      <Typography.SectionTitle>Get in touch</Typography.SectionTitle>
      <ContactForm.Container>
        <ContactForm>
          <ContactForm.Input isInput type="text" placeholder="First name" key="contact-firstname" />
          <ContactForm.Input isInput type="text" placeholder="Last name" key="contact-lastname" />
          <ContactForm.Input isInput type="email" placeholder="Email" key="contact-email" />
          <ContactForm.Input type="text" placeholder="Your message" key="contact-message" />
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
