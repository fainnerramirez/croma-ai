"use client";

import { Button, Modal } from "@heroui/react";
import { Palette, User } from "lucide-react";
import { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

export function AuthForm({ handleSignIn }: { handleSignIn: Function }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal>
      <Button onPress={() => setIsOpen(true)} className="w-full sm:w-auto" variant="primary">
        <Palette />
        Crear paleta
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger className="text-black" />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <User className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Inicia sesión para crear tu paleta de colores</Modal.Heading>
              <p className="text-sm leading-6 text-slate-600">
                Guarda tus paletas, accede a ellas cuando quieras y sigue creando para tus proyectos.
              </p>
            </Modal.Header>
            <Modal.Body>
              <div className="p-1 flex flex-col gap-2">
                <Button fullWidth onPress={() => handleSignIn()}>
                  <BsGoogle />
                  Continuar con Google
                </Button>
                <Button fullWidth variant="outline">
                  <BsGithub />
                  Continuar con Github
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <p className="text-sm leading-6 text-slate-600 text-center">
                Al continuar, aceptas nuestros Términos y Condiciones y la Política de Privacidad.
              </p>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}