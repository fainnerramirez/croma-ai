import { Button } from "@heroui/react";
import { Palette } from "lucide-react";
import Image from "next/image";
import Header from "./home/components/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-[90%] m-auto">
        <div className="w-1/2 p-2 block md:hidden">
          <Image
            src="/home.jpg"
            alt="home app"
            width={200}
            height={150}
            priority
            className="w-[200px] h-[100px] border-2 border-gray-300 rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-2 flex flex-col gap-5">
          <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">
            Encuentra la paleta perfecta para cualquier proyecto
          </h1>
          <h3>
            Desde una simple descripción, la IA genera colores listos para usar en diseño, branding o desarrollo.
          </h3>
          <Button size="lg" className="w-full md:w-fit gap-2">
            <Palette />
            Crear paleta
          </Button>
        </div>
        <div className="w-1/2 p-2 hidden md:block">
          <Image
            src="/home.jpg"
            alt="home app"
            width={800}
            height={600}
            priority
            className="w-[800px] h-[70vh] max-w-full border-2 border-gray-300 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
