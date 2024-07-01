"use client";

import { Button } from "@/components/ui/button";

export default function ButtonShare({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const onShare = () => {
    if (navigator.share) {
      navigator.share({
        url: href,
      });
    }
  };

  return (
    <Button onClick={onShare} className={className}>
      {children}
    </Button>
  );
}
