import Link from "next/link";

export default function GlobalTabs() {
  return (
    <nav className="hidden md:flex items-center justify-center text-sm gap-1">
      {LINK_LIST.map((link) => (
        <Link
          href={link.href}
          className="h-8 rounded-full px-3 text-current flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

const LINK_LIST = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];
