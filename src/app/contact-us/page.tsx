import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { ContactForm } from "components/Contacts/ContactForm";
import GetInTouch from "components/Contacts/GetInTouch";

export default function ContactUsPage() {
  return (
    <>
      <TopBG />
      <GetInTouch />
      <Section size={"default"}>
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
