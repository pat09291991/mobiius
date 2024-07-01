import { VerifyComponentsProps } from "@/lib/types";

export default function PageHeader({
  className,
  children,
}: VerifyComponentsProps) {
  return (
    <span className={`font-semibold text-2xl ${className}`}>{children}</span>
  );
}
