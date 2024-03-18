import Advantages from "components/Home/Advantages";
import Hero from "components/Home/Hero";
import Rewards from "components/Home/Rewards";
import RewardsFeatures from "components/Home/RewardsFeatures";
import Support from "components/Home/Support";

export default function Home() {
  return (
    <>
      <Hero />
      <Rewards />
      <RewardsFeatures />
      <Advantages />
      <Support />
    </>
  );
}
