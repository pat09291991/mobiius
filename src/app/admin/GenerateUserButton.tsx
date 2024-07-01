"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GenerateUserButton() {
  const router = useRouter();

  const handleGenerateUserForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { hashKey } = await response.json();

    router.push(`/admin/qr/${hashKey}`);
  };

  return (
    <form onSubmit={handleGenerateUserForm}>
      <Button type="submit">Generate New User Form</Button>
    </form>
  );
}
