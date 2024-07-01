import VerifyVoicePageContent from "./content";

export default function VerifyVoicePage({
  params,
}: {
  params: {
    userHash: string;
  };
}) {
  return <VerifyVoicePageContent userHash={params.userHash} />;
}
