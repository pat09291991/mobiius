import ContentCenter from "@/components/content-center";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/lib/types";
import GenerateUserButton from "./GenerateUserButton";
import UserRow from "./UserRow";

async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${process.env.API}/users`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

export default async function AdminPage() {
  const users = await fetchUsers();

  return (
    <ContentCenter>
      <div className="flex justify-between w-full items-center">
        <h1 className="font-semibold">Mobiius Admin</h1>
        <GenerateUserButton />
      </div>
      <UsersTable users={users} />
    </ContentCenter>
  );
}

function UsersTable({ users }: { users: User[] }) {
  const latestUsers = users.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }

    if (a.id < b.id) {
      return -1;
    }

    return 0;
  });

  if (latestUsers.length == 0) {
    return (
      <div className="bg-white text-black rounded-xl w-full">
        <div className="p-8">No users found</div>
      </div>
    );
  }

  return (
    <Table className="bg-white text-black rounded-xl w-full text-left">
      <TableCaption className="text-white">List of users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Verification Link</TableHead>
          <TableHead>QR Code</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {latestUsers.map((user) => (
          <UserRow user={user} key={user.id} />
        ))}
      </TableBody>
    </Table>
  );
}
