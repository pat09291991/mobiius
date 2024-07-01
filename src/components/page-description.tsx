import { VerifyComponentsProps } from "@/lib/types";

export default function PageDescription({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`text-gray-200 ${className}`}>{children}</span>;
}
