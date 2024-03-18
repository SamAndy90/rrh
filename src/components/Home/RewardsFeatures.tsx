import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Button, Container, Section, Title } from "common/ui";

import ShopInStoreIcon from "./static/features-icons/basket-icon.svg";
import LoginIcon from "./static/features-icons/checkbox-icon.svg";
import CompetitionsIcon from "./static/features-icons/competitions-icon.svg";
import ExtraBenefitsIcon from "./static/features-icons/extra-icon.svg";
import LottoIcon from "./static/features-icons/lotto-icon.svg";
import MyMarketPlaceIcon from "./static/features-icons/marketplace-icon.svg";
import ShopOnlineIcon from "./static/features-icons/shop-online-icon.svg";
import WellbeingIcon from "./static/features-icons/wellbeing-icon.svg";

export default function RewardsFeatures() {
  return (
    <Section size={"default"}>
      <Container>
        <div>
          <div
            className={
              "grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }
          >
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className={"py-4 text-center"}>
            <Link
              className={"sm:inline-block"}
              target={"_blank"}
              href={"http://rewards.recruitmentresourcehub.co.uk"}
            >
              <Button fullWidth className={"sm:w-auto"}>
                Visit Here
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type FeatureCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const { icon, title, description } = props;
  return (
    <div
      className={
        "flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-shadow duration-200 hover:shadow"
      }
    >
      <div className={"relative h-[50px] w-[50px]"}>
        <Image
          src={icon}
          alt={"Feature Icon"}
          fill
          className={"object-contain"}
        />
      </div>
      <Title component={"h4"} size={"2xl"}>
        {title}
      </Title>
      <p>{description}</p>
    </div>
  );
};

const featuresData = [
  {
    icon: ShopInStoreIcon,
    title: "Shop In Store",
    description: "Offers from your favourite retailers.",
  },
  {
    icon: ShopOnlineIcon,
    title: "Shop Online",
    description: "Over 2,000 compelling online offers.",
  },
  {
    icon: WellbeingIcon,
    title: "Wellbeing",
    description:
      "A wealth of information to help you take sure-footed steps toward a full sense of wellbeing.",
  },
  {
    icon: CompetitionsIcon,
    title: "Competitions",
    description: "Free to enter prize draw and win great prizes.",
  },
  {
    icon: LottoIcon,
    title: "Lotto",
    description: "Win a £1,000 every month with Lotto.",
  },
  {
    icon: MyMarketPlaceIcon,
    title: "My Market Place",
    description: "Trade your items for sale and pick up a bargain.",
  },
  {
    icon: ExtraBenefitsIcon,
    title: "Extra Benefits",
    description: "Access all your company benefits in one place.",
  },
  {
    icon: LoginIcon,
    title: "Login",
    description: "Login to use your RRH Reward benefits and collect rewards.",
  },
];
