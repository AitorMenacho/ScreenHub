import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IniciarSesion from "./api/IniciarSesion";

export default function InicioSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { sessionId } = IniciarSesion(email, password);

    if (sessionId) {
      localStorage.setItem("sessionId", sessionId);
      window.location.href = "/Cuenta";
    }
  };

  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-32 w-auto"
              src="/logoSolo.svg"
              alt="Your Company"
              width={48}
              height={48}
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Inicia sesión
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text--white"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 pl-2 py-1.5 text-stone-950 shadow-sm ring-1 ring-inset ring-yellow-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <Link
                      href="#"
                      className="font-semibold text-yellow-400 hover:text-yellow-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-stone-950 shadow-sm ring-1 ring-inset ring-yellow-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-950 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  onClick={handleSubmit}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-white">
              ¿No eres miembro?{" "}
              <Link
                href="#"
                className="font-semibold leading-6 text-yellow-400 hover:text-yellow-500"
              >
                Regístrate ahora
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
