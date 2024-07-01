import ContainerLandingPage from "@/components/container-landingpage";
import Navigation from "@/components/navigation";

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerLandingPage>
      <Navigation />
      {children}
    </ContainerLandingPage>
  );
}
