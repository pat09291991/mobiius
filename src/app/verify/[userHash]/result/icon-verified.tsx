import { Icon } from "@/components/ui/Icon";

export default function IconVerified({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center text-[#5251DA] text-base font-bold">
      <Icon className="material-icons-outlined" icon={icon} size={20} />
      <span>Verified</span>
    </div>
  );
}
