import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { PasswordResetConfirmForm } from "components/Auth/PasswordResetConfirmForm";

export default function NewPasswordPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <PasswordResetConfirmForm />
        </Container>
      </Section>
    </>
  );
}
