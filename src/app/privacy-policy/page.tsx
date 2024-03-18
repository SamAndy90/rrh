import Link from "next/link";

import TopBG from "common/TopBg";
import { Container, LinkButton, Section, Title } from "common/ui";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBG />
      <Section size={"default"}>
        <Container>
          <div className={"flex flex-col gap-8"}>
            <div className={"flex flex-col gap-4"}>
              <Title size={"3xl"} className={"text-center"}>
                The Recruitment Resource Hub &#xB7; Privacy Policy
              </Title>
              <p className={"text-center opacity-70"}>
                Welcome to The Recruitment Resource Hub privacy notice
              </p>
              <p>
                The Recruitment Resource Hub respects your privacy and is
                committed to protecting your personal data. This privacy notice
                will inform you as to how we look after your personal data when
                you visit our website, regardless of where you visit it from,
                and tell you about your privacy rights and how the law protects
                you.
              </p>
              <p>
                <strong className={"opacity-100"}>Last updated:</strong>
                <span className={"opacity-70"}> Monday 13th May 2021</span>
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                PURPOSE OF THIS PRIVACY NOTICE
              </Title>
              <p>
                This privacy notice aims to give you information on how we
                collect and process your personal data through your use of this
                website, including any data you may provide when you purchase a
                product or service.
              </p>
              <p>
                This website is not intended for children and we do not
                knowingly collect data relating to children.
              </p>
              <p>
                It is important that you read this privacy notice together with
                any other privacy notice or fair processing notice we may
                provide on specific occasions when we are collecting or
                processing personal data about you so that you are fully aware
                of how and why we are using your data. This privacy notice
                supplements the other notices and is not intended to override
                them.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                CONTROLLER
              </Title>
              <p>
                The Company processes information on behalf of data controllers
                and is responsible as a data processor for your personal data
                (collectively referred to as “we”, “us” or “our” in this privacy
                notice) when you engage our services or obtain any information.
              </p>
              <p>
                We are the data controller of all personal Data relating to our
                Company Personnel and Personal Data used in our business for our
                own commercial purposes.
              </p>
              <p>
                We have appointed a <strong>Compliance Manager</strong> who is
                responsible for overseeing questions in relation to this privacy
                notice. If you have any questions about this privacy notice,
                including any requests to exercise your legal rights, please
                contact the <strong>Compliance Manager</strong> using the
                details set out below.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                CONTACT DETAIL
              </Title>
              <p>Our full details are:</p>
              <p>
                <strong>The Recruitment Resource Hub</strong> is a trading name
                of <strong>The Recruitment Resource Hub</strong> Ltd (company
                registration number: 13361631).
              </p>
              <div>
                <p>
                  Valentina Glazunkova, <strong>Compliance Manager</strong>:
                </p>
                <p>
                  Email address:{" "}
                  <Link href={"mailto:valentina@recruitmentresourcehub.co.uk"}>
                    <LinkButton colorVariant={"secondary"}>
                      valentina@recruitmentresourcehub.co.uk
                    </LinkButton>
                  </Link>
                </p>
              </div>
              <p>
                Postal address: 6 Perth House, Corby Gate Business Park, Priors
                Haw Road, Corby, NN17 5JG
              </p>
              <p>
                Telephone number:{" "}
                <Link href={"tel:01536850332"}>
                  <LinkButton colorVariant={"secondary"}>
                    01536 850 332
                  </LinkButton>
                </Link>
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                CHANGES TO THE PRIVACY NOTICE AND YOUR DUTY TO INFORM US OF
                CHANGES
              </Title>
              <p>
                It is important that the personal data we hold about you is
                accurate and current. Please keep us informed if your personal
                data changes during your relationship with us.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                THIRD-PARTY LINKS
              </Title>
              <p>
                This website may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                website, we encourage you to read the privacy notice of every
                website you visit.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                THE DATA WE COLLECT ABOUT YOU
              </Title>
              <p>
                Personal data, or personal information, means any information
                about an individual from which that person can be identified.
                For example, an individual’s name and email address in order to
                send you information. It does not include data where the
                identity has been removed (anonymous data).
              </p>
              <p>
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together for:
              </p>
              <div>
                <p>
                  Services for your employees’ and business that we have or are
                  currently assisting you with.
                </p>
                <p>
                  Communications Data includes your preferences in receiving
                  information from us and our third parties and your
                  communication preferences.
                </p>
              </div>
              <p>
                We also collect, use and share Aggregated Data such as
                statistical or demographic data for any purpose. Aggregated Data
                may be derived from your personal data but is not considered
                personal data in law as this data does not directly or
                indirectly reveal your identity. For example, we may aggregate
                your Usage Data to calculate the percentage of users accessing a
                specific website feature. However, if we combine or connect
                Aggregated Data with your personal data so that it can directly
                or indirectly identify you, we treat the combined data as
                personal data which will be used in accordance with this privacy
                notice.
              </p>
              <p>
                We do not collect any Special Categories of Personal Data about
                you; this includes details about your race or ethnicity,
                religious or philosophical beliefs, sex life, sexual
                orientation, political opinions, trade union membership,
                information about your health and genetic and biometric data.
                Nor do we collect any information about criminal convictions and
                offences unless the same forms part of or is associated with the
                services provided to you.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                IF YOU FAIL TO PROVIDE PERSONAL DATA
              </Title>
              <p>
                Where we need to collect personal data by law, or under the
                terms of a contract we have with you and you fail to provide
                that data when requested, we may not be able to perform the
                contract we have or are trying to enter into with you; for
                example, to provide you with services. In this case, we may have
                to cancel the relevant service you have with us, but we will
                notify you if this is the case at the time.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                HOW WE USE YOUR PERSONAL DATA
              </Title>
              <div>
                <p className={"mb-2"}>
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your personal data in the following
                  circumstances:
                </p>
                <ul className={"list-inside list-disc"}>
                  <li>
                    Where we need to perform the contract(s) we are about to
                    enter into or have entered into with you.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those
                    of a third party) and your interests and fundamental rights
                    do not override those interests.
                  </li>
                  <li>
                    Where we need to comply with a legal or regulatory
                    obligation.
                  </li>
                  <li>
                    We do not sell your personal data or provide it to third
                    parties for their direct marketing use.
                  </li>
                </ul>
              </div>
              <p>
                If you need details about the specific legal ground we are
                relying on to process your personal data where more than one
                ground has been set out in the table below.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                CHANGE OF PURPOSE
              </Title>
              <p>
                We will only use your personal data for the purposes for which
                we collected it, unless we reasonably consider that we need to
                use it for another reason and that reason is compatible with the
                original purpose. If you wish to get an explanation as to how
                the processing for the new purpose is compatible with the
                original purpose, please Contact us.
              </p>
              <p>
                If we need to use your personal data for an unrelated purpose,
                we will notify you and we will explain the legal basis which
                allows us to do so.
              </p>
              <p>
                Please note that we may process your personal data without your
                knowledge or consent, in compliance with the above rules, where
                this is required or permitted by law.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                DISCLOSURES OF YOUR PERSONAL DATA
              </Title>
              <p>
                We may have to share your personal data with third party service
                providers and regulatory authorities for the purposes set out
                below and within the table provided in the How We Use Your
                Personal Data section above.
              </p>
              <div>
                <p className={"mb-2"}>
                  External Third Parties that provide operational services to
                  ensure:
                </p>
                <ul className={"list-inside list-disc"}>
                  <li>Secure archive storage facilities;</li>
                  <li>IT technician support;</li>
                  <li>Ongoing security of systems and data;</li>
                  <li>Internet and Telecommunication Services;</li>
                  <li>Banking requirements;</li>
                  <li>Maintenance of our Case Management systems; and</li>
                  <li>Continuity of the Services provided to you.</li>
                </ul>
              </div>
              <p>
                Third parties to whom we may choose to sell, transfer, or merge
                parts of our business or our assets. Alternatively, we may seek
                to acquire other businesses or merge with them. If a change
                happens to our business, then the new owners may use your
                personal data in the same way as set out in this privacy notice.
              </p>
              <p>
                We require all third parties to respect the security of your
                personal data and to treat it in accordance with the law. We do
                not allow our third-party service providers to use your personal
                data for their own purposes and only permit them to process your
                personal data for specified purposes and in accordance with our
                instructions.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                INTERNATIONAL TRANSFERS
              </Title>
              <p>
                We do not transfer your personal data outside the European
                Economic Area <strong>(EEA)</strong>.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                DATA SECURITY
              </Title>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorised way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know. They will only process your personal
                data on our instructions and they are subject to a duty of
                confidentiality.
              </p>
              <p>
                We have put in place procedures to deal with any suspected
                personal data breach and will notify you and any applicable
                regulator of a breach where we are legally required to do so.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                DATA RETENTION
              </Title>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                HOW LONG WILL YOU USE MY PERSONAL DATA FOR?
              </Title>
              <p>
                We will only retain your personal data for as long as necessary
                to fulfil the purposes we collected it for, including for the
                purposes of satisfying any legal, accounting, or reporting
                requirements.
              </p>
              <p>
                To determine the appropriate retention period for personal data,
                we consider the amount, nature, and sensitivity of the personal
                data, the potential risk of harm from unauthorised use or
                disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal
                requirements.
              </p>
              <p>
                By law we have to keep basic information about our customers
                (including Contact, Identity, Financial and Transaction Data)
                for six years after they cease being customers for tax and legal
                purposes.
              </p>
              <p>
                In some circumstances you can ask us to delete your data: see
                Request Erasure below for further information.
              </p>
              <p>
                In some circumstances we may anonymise your personal data (so
                that it can no longer be associated with you) for research or
                statistical purposes in which case we may use this information
                indefinitely without further notice to you.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                YOUR LEGAL RIGHTS
              </Title>
              <div>
                <p className={"mb-2"}>
                  Unless subject to an exemption under the GDPR you have the
                  following rights with respect to your personal data:
                </p>
                <ul className={"list-inside list-disc"}>
                  <li>
                    The right to request a copy of your personal data which we
                    hold about you;
                  </li>
                  <li>
                    The right to request that we correct any personal data if it
                    is found to be inaccurate or out of date;
                  </li>
                  <li>
                    The right to request your personal data is erased where it
                    is no longer necessary for us to retain such data;
                  </li>
                  <li>
                    The right to withdraw your consent (where consent has been
                    obtained) to the processing at any time;
                  </li>
                  <li>
                    The right to request that we provide the data subject with
                    his/her personal data and where possible, to transmit that
                    data directly to another data controller, (known as the
                    right to data portability), (where applicable);
                  </li>
                  <li>
                    The right, where there is a dispute in relation to the
                    accuracy or processing of your personal data, to request a
                    restriction is placed on further processing;
                  </li>
                  <li>
                    The right to object to the processing of personal data,
                    (where applicable).
                  </li>
                </ul>
              </div>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                FURTHER PROCESSING
              </Title>
              <p>
                If we need to use your personal data for a new purpose, not
                covered by this Data Privacy Notice, then we will update this
                website with a new notice explaining this new use prior to
                commencing the processing. This revised notice will set out the
                new relevant purposes and processing conditions. Where and
                whenever necessary, we will seek your prior consent to the new
                processing.
              </p>
              <p>
                We have put in place procedures to deal with any suspected
                personal data breach and will notify you and any applicable
                regulator of a breach where we are legally required to do so.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                Contact
              </Title>
              <p>
                To exercise all relevant rights, queries of complaints or to
                remove your information from our system, please contact the{" "}
                <strong>Compliance Manager</strong> on the Contact Details
                provided above.
              </p>
            </div>
            <div className={"flex flex-col gap-4"}>
              <Title
                component={"h5"}
                size={"lg"}
                className={"text-center uppercase"}
              >
                Complaints
              </Title>
              <p>
                If you have requested details of the information we hold about
                you and you are not happy with our response, or you think we
                have not complied with the GDPR or DPA 2018 in some other way,
                you can complain to us. Please contact us on{" "}
                <Link
                  href={"tel:01536850332"}
                  title={"Call us on 01536 850 332"}
                >
                  <LinkButton colorVariant={"secondary"}>
                    01536 850 332
                  </LinkButton>
                </Link>{" "}
                or you can send your complaints to{" "}
                <Link href={"mailto:admin@recruitmentresourcehub.co.uk"}>
                  <LinkButton colorVariant={"secondary"}>
                    admin@recruitmentresourcehub.co.uk
                  </LinkButton>
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
