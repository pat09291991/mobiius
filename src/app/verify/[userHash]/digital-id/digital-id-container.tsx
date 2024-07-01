export default function DigitalIdContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 w-full justify-start bg-gray-900 rounded-2xl bg-[url('/svg/digital-id-bg.svg')] bg-no-repeat bg-right-bottom ">
      {children}
    </div>
  );
}
