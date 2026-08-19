'use client';

import { auth } from "@/firebase/config";
import { Button, Chip } from "@heroui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Sparkles, Wand2 } from "lucide-react";
import Image from "next/image";
import { AuthForm } from "./croma/components/AuthForm";
import Header from "./home/components/header";
import { BorderBeam } from "@stianlarsen/border-beam";
// @ts-ignore
// import "@stianlarsen/border-beam/css";

export default function Home() {

  const handleSignInUser = async () => {
    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("User logged: ", user)
    }
    catch (error) {
      console.error("Error al iniciar sesión ", error);
    }
  }

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Header />

      <main className="mx-auto flex w-[92%] max-w-7xl flex-col gap-8 px-2 py-8 md:py-12">
        <section className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.2)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="flex flex-col gap-5">
            <Chip color="default" variant="soft" className="relative p-2">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Nueva experiencia visual
              </span>
              <BorderBeam borderWidth={4} duration={5}/>
            </Chip>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Encuentra la paleta perfecta para cualquier proyecto
              </h1>
              <p className="max-w-xl text-lg text-slate-600">
                Desde una idea simple, Croma crea combinaciones de color listas para usar en diseño, branding y desarrollo.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <AuthForm handleSignIn={handleSignInUser} />
            </div>

            {/* <ul className="grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
              {highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul> */}
          </div>

          <div className="hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-2 shadow-lg md:block">
            <Image
              src="/home.jpg"
              alt="Vista previa de Croma"
              width={800}
              height={350}
              priority
              className="h-[350px] w-full rounded-[1.2rem] object-cover object-center"
            />
          </div> 
        </section>

        {/* <section id="features" className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Diseño rápido", text: "Obtén tonalidades armoniosas con una sola descripción." },
            { title: "Accesible", text: "Tu paleta queda lista para implementar en UI y productos." },
            { title: "Flexible", text: "Cámbiala, compártela y úsala en tus proyectos reales." },
          ].map((card) => (
            <Card key={card.title} className="border border-slate-200 bg-white/80 p-4 shadow-sm">
              <div className="pb-2">
                <h2 className="text-lg font-semibold text-slate-900">{card.title}</h2>
              </div>
              <div>
                <p className="text-sm leading-6 text-slate-600">{card.text}</p>
              </div>
            </Card>
          ))}
        </section> */}
      </main>
    </div>
  );
}
