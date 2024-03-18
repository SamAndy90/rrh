import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { LoginForm } from "components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
}
