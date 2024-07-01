export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex justify-start grow items-center flex-col gap-8 ${className}`}
    >
      {children}
    </div>
  );
}
