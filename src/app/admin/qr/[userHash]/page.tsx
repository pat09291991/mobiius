import ContentCenter from "@/components/content-center";
import Link from "next/link";
import QRCode from "react-qr-code";
import { headers } from "next/headers";

export default function QRPage({
  params,
}: {
  params: {
    userHash: string;
  };
}) {
  const headersList = headers();

  return (
    <ContentCenter>
      <div className="bg-white p-4 rounded-xl flex justify-center items-center mx-auto">
        <QRCode value={`/verify/${params.userHash}/welcome`} />
      </div>
      <Link href={`/verify/${params.userHash}/welcome`}>
        {`${headersList.get("host")}/verify/${params.userHash}/welcome`}
      </Link>
    </ContentCenter>
  );
}
