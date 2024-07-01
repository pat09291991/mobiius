import { usePathname } from "next/navigation";

export default function useMatch(pattern: string) {
  const pathname = usePathname();
  return pathname.includes(pattern);
}
