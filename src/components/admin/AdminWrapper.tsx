export default function AdminWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#2E2D2D] min-h-96 p-5 md:p-10 rounded-xl w-full">
      {children}
    </div>
  );
}
