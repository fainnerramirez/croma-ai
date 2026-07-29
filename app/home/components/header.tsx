import Link from "next/link";
import Logo from "./logo";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/croma", label: "Explorar" },
  { href: "#features", label: "Acerca de" },
];

export default function Header() {
  return (
    <header className="mx-auto flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
      <Logo />
      <nav>
        <ul className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:gap-5">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="transition hover:text-indigo-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}