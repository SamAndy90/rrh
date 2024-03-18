import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { PasswordResetForm } from "components/Auth/PasswordResetForm";

export default function PasswordResetPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <PasswordResetForm />
        </Container>
      </Section>
    </>
  );
}
