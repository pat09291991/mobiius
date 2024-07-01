export default function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`text-white text-xl md:text-2xl font-bold ${className}`}>
      {children}
    </label>
  );
}
