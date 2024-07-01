import RecentBuy from "@/components/admin/RecentBuy";
import EventSection from "@/components/admin/EventSection";
import UserCount from "@/components/admin/UserCount";
import RecentSignUps from "@/components/admin/RecentSignUps";
import AdminBox from "../adminbox";

export default function Dashboard() {
  return (
    <AdminBox>
      <EventSection />
      <RecentBuy />
      <div className="flex flex-col md:flex-row gap-12">
        <UserCount />
        <RecentSignUps />
      </div>
    </AdminBox>
  );
}
