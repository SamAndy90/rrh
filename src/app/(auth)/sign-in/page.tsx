import TopBG from "common/TopBg";
import { Section } from "common/ui";
import AuthWrapper from "components/Auth/AuthWrapper";
import { LoginForm } from "components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <Section className={"flex h-full flex-col"}>
      <TopBG />
      <AuthWrapper>
        <LoginForm />
      </AuthWrapper>
    </Section>
  );
}
