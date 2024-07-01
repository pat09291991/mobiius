export default function ContentCenter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grow flex justify-center items-center flex-col gap-4 w-full">
      {children}
    </div>
  );
}
