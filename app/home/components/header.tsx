import Link from "next/link";
import Logo from "./logo";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/croma", label: "Explorar" },
  { href: "#features", label: "Acerca de" },
];

export default function Header() {
  return (
    <header className="mt-2 mx-auto flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur sm:px-6">
      <Logo />
    </header>
  );
}