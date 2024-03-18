import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { RegistrationForm } from "components/Auth";

export default function RegistrationPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <RegistrationForm />
        </Container>
      </Section>
    </>
  );
}
