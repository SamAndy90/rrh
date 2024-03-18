import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { PasswordResetSuccess } from "components/Auth/PasswordResetSuccess";

export default function SuccessPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <PasswordResetSuccess />
        </Container>
      </Section>
    </>
  );
}
