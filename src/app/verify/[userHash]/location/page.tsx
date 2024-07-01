import VerifyLocationPageContent from "./content";

export default function VerifyLocationPage({
  params,
}: {
  params: { userHash: string };
}) {
  return <VerifyLocationPageContent userHash={params.userHash} />;
}
