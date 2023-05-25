import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IniciarSesion from "./api/IniciarSesion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const getToken = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();
  return data.request_token;
};

const getValidaToken = async (usuario, contrasenna, token) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usuario,
        password: contrasenna,
        request_token: token,
      }),
    }
  );

  const data = await response.json();
  return data.request_token;
};

const getSessionId = async (token) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request_token: token,
      }),
    }
  );

  const data = await response.json();
  return data.session_id;
};

export default function InicioSesion() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const MySwal = withReactContent(Swal);

  const handleSubmit = async () => {
    const token = await getToken();
    const validaToken = await getValidaToken(usuario, password, token);
    const sessionId = await getSessionId(validaToken);

    if (sessionId) {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "Iniciaste sesión correctamente",
        showConfirmButton: false,
        timer: 3000,
        background: "#0c0a09",
        color: "#fff",
      }).then(() => {
        localStorage.setItem("sessionId", sessionId);
        localStorage.setItem("usuario", usuario);
        window.location.href = "/Cuenta/Cuenta";
      });
      
    } else {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Usuario o contraseña incorrectos",
        showConfirmButton: false,
        timer: 3000,
        background: "#0c0a09",
        color: "#fff",
      });
    }
  };

  const hanldleRegister = () => {
    alert(
      "Se abrirá una nueva ventana para que puedas registrarte al registrar tu cuenta, vuelve a esta pestaña para iniciar sesión"
    );

    const newWindow = window.open(
      "https://www.themoviedb.org/account/signup?language=es-ES",
      "_blank",
      "width=700,height=700"
    );
  };

  // useEffect(() => {
  //   if (submit) {
  //     if (sessionId) {
  //       localStorage.setItem("sessionId", sessionId);
  //       localStorage.setItem("usuario", usuario);
  //       window.location.href = "/Cuenta/Cuenta";
  //     }
  //   }
  // }, [submit, sessionId, usuario]);

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
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="usuario"
                  className="block text-sm font-medium leading-6 text--white"
                >
                  usuario
                </label>
                <div className="mt-2">
                  <input
                    id="usuario"
                    name="usuario"
                    type="text"
                    autoComplete="usuario"
                    onChange={(e) => setUsuario(e.target.value)}
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
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-950 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  onClick={handleSubmit}
                >
                  Iniciar sesión
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-white">
              ¿No eres miembro?{" "}
              <button
                onClick={hanldleRegister}
                className="font-semibold leading-6 text-yellow-400 hover:text-yellow-500"
              >
                Regístrate ahora
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
