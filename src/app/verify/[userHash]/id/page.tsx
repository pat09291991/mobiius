import IdPageContent from "./content";

export default function IdPage({ params }: { params: { userHash: string } }) {
  return <IdPageContent userHash={params.userHash} />;
}
