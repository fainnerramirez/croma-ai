import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-5 justify-center items-center w-[90%] m-auto">
      <div className="w-1/2 p-2">
        <h1 className="font-bold text-5xl">
          Encuentra la paleta perfecta para cualquier proyecto
        </h1>
        <h3>
          Desde una simple descripción, la IA genera colores listos para usar en diseño, branding o desarrollo.
        </h3>
        <Button>
          Explorar
        </Button>
      </div>
      <div className="w-1/2 p-2">
        <Image src="/home.jpg" alt="home app" width={400} height={200} priority style={{ transform: "rotate(90deg)" }} />
      </div>
    </div>
  );
}
