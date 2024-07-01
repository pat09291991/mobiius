import UsersSection from "@/components/admin/UsersSection";
import UserCount from "@/components/admin/UserCount";
import RecentSignUps from "@/components/admin/RecentSignUps";
import AdminBox from "../adminbox";

export default function Dashboard() {
  return (
    <AdminBox>
      <UsersSection />
      <div className="flex flex-col md:flex-row gap-12">
        <UserCount />
        <RecentSignUps />
      </div>
    </AdminBox>
  );
}
