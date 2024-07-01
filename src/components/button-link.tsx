import Link from "next/link";
import { Button } from "./ui/button";

export default function ButtonLink({
  href,
  disabled = false,
  className,
  variant,
  children,
}: {
  href: string;
  disabled?: boolean;
  className?: string;
  // TODO: Find a way to import this type from the button component
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild={!disabled}
      disabled={disabled}
      className={className}
      variant={variant}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
