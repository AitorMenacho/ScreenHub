import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  //Modifica el valor de la variable search cada vez que se escribe en el input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //Busca en la API de TMDB la película o serie o actor que se haya escrito en el input
  const searchMovie = () => {
    if (search === "") return;

    router.push({
      pathname: "/Resultados",
      query: { search },
    });
  };

  return (
    <header className="bg-stone-950">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ScreenHub</span>
            <Image src={logo} alt="ScreenHub" width={100} height={100} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-sm font-semibold leading-6 text-white">
            Películas
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-white">
            Series
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-white">
            Recomendador
          </Link>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <input
            type="text"
            placeholder="Buscar..."
            className=" rounded-md py-2 px-4 text-sm focus:outline-none"
            style={{ color: "#000000" }}
            onChange={handleSearch}
            onKeyDown={(e) => {
              e.key === "Enter" && searchMovie();
            }}
          />
          <button
            type="button"
            className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium"
            style={{ backgroundColor: "#FFD700", color: "#000000" }}
            onClick={() => searchMovie()}
          >
            Buscar
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-white">
            Iniciar sesión <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ScreenHub</span>
              <Image src={logo} alt="ScreenHub" width={100} height={100} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Películas
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Series
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Recomendador
                </Link>
              </div>
              <div className="py-6">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="bg-gray-100 border border-gray-200 rounded-md py-2 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-900/10"
                  onChange={handleSearch}
                />
                <button
                  type="button"
                  className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium"
                  style={{ backgroundColor: "#FFD700", color: "#000000" }}
                  onClick={() => searchMovie()}
                >
                  Buscar
                </button>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
