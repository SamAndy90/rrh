import TopBG from "common/TopBg";
import { Container, Section } from "common/ui";
import { AccountForm } from "components/User/AccountForm";

export default function AccountPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <AccountForm />
        </Container>
      </Section>
    </>
  );
}
