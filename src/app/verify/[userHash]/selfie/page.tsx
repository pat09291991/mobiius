import SelfiePageContent from "./content";

export default function SelfiePage({
  params,
}: {
  params: { userHash: string };
}) {
  return <SelfiePageContent userHash={params.userHash} />;
}
