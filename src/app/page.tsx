import About from "@/components/about";
import Banner from "@/components/banner";
import Carousel from "@/components/carousel";
import ContainerLandingPage from "@/components/container-landingpage";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Newsletter from "@/components/newsletter";
import ProgressBar from "@/components/progress-bar";
import Scenario from "@/components/scenario";
import Statistics from "@/components/statistics";
import Steps from "@/components/steps";

export default function HomePage() {
  return (
    <ContainerLandingPage>
      <ProgressBar />
      <Navigation />
      <Banner />
      <div className="absolute w-[550px] h-[550px] rounded-[550px] sm:w-[600px] sm:h-[600px] sm:rounded-[600px] md:w-[800px] md:h-[800px] md:rounded-[800px] lg:w-[850px] lg:h-[850px] lg:rounded-[850px] 2xl:w-[1223px] 2xl:h-[1223px] 2xl:rounded-[1223px] top-0 bg-glow filter blur-[270px] z-[-1] transform -translate-x-1/2 -translate-y-1/2" />
      <About />
      <Steps />
      <Scenario />
      <Carousel />
      <Statistics />
      <Newsletter />
      <Footer />
    </ContainerLandingPage>
  );
}
