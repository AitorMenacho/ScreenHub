import Image from "next/image";
import Section from "../components/Section.js";
import FeatureSection from "../components/FeatureSection.js";
import logo from "../../public/logoInicio.svg";

export default function Register() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-stone-950">
        <Image src={logo} alt="ScreenHub" width={800} height={800} />
      </div>
      <Section />
      <FeatureSection />
    </>
  );
}
