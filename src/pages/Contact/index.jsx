
import Text from "./text";
import ContactForm from "./contactForm";
import SocialMedia from "@components/SocialMedia";

const Contact = () => {
  return (
    <div className="container">
      <Text />
      <ContactForm />
      <div className="contact-social-media">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
