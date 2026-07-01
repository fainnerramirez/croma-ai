import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image alt="logo croma" src="/logo-croma.png" width={40} height={40} className="rounded-md" />
      <h1 className="font-bold text-xl">Croma</h1>
    </div>
  );
}