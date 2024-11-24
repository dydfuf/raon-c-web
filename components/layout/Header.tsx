import Link from "next/link";
import GlobalTabs from "./GlobalTabs";

export default function Header() {
  return (
    <header className="fixed top-0 w-full h-16 z-50 border-b">
      <div className="w-full h-full mx-auto px-5 max-w-screen-md border-x">
        <div className="relative size-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
            <Link href="/">Raon</Link>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <GlobalTabs />
          </div>
        </div>
      </div>
    </header>
  );
}
