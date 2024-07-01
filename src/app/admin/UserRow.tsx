"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { User } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserRow({ user }: { user: User }) {
  const router = useRouter();

  const deleteUser = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API}/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.refresh();
  };

  return (
    <TableRow key={user.id}>
      <TableCell>
        <Link
          href={`/admin/${user.id}`}
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          {user.firstName ? user.firstName + " " + user.lastName : "No Name"}
        </Link>
      </TableCell>
      <TableCell>
        {user.hashKey && (
          <Link
            href={`/verify/${user.hashKey}/welcome`}
            className="text-blue-500 hover:text-blue-700 hover:underline"
          >
            Visit Form
          </Link>
        )}
      </TableCell>
      <TableCell>
        <Link
          href={`/admin/qr/${user.hashKey}`}
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          View QR
        </Link>
      </TableCell>
      <TableCell>
        <button
          onClick={deleteUser}
          className="text-red-500 hover:text-red-700 hover:underline"
        >
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
}
