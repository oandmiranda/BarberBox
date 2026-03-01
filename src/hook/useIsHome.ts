import { usePathname } from "next/navigation";

export function useIsHome() {
const pathname = usePathname();
return pathname === "/home";
}