export default function AdminBox({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-12 w-full lg:w-4/5">{children}</div>;
}
