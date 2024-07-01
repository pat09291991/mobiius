import VerifyAboutContent from "./content";

export default function AboutPage({
  params,
}: {
  params: { userHash: string };
}) {
  return <VerifyAboutContent userHash={params.userHash} />;
}
