import Image from "next/image";
import Perfil from "../api/Perfil";
import ListadoPeliculas from "@/components/ListadoPeliculas";
import { UserContext } from "../_app";
import { useContext, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Cuenta = () => {
  const { sessionId, setUserId } = useContext(UserContext);

  const {
    datos,
    peliculasVistas,
    seriesVistas,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasPendientes,
    seriesPendientes,
  } = Perfil(sessionId);

  useEffect(() => {
    if (datos.id) {
      localStorage.setItem("userId", datos.id);
    }
  }, [datos.id]);

  // Sacamos un número aleatorio para sacar una foto favorita aleatoria
  const fotoPeli =
    peliculasFavoritas && peliculasFavoritas.total_results > 0
      ? Math.floor(Math.random() * (peliculasFavoritas.total_results - 1))
      : 0;

  // Sacamos una foto aleatoria de las series favoritas
  const backgroundImage =
    peliculasFavoritas &&
    peliculasFavoritas.results &&
    peliculasFavoritas.results.length > 0
      ? `url('https://image.tmdb.org/t/p/original${peliculasFavoritas.results[fotoPeli]?.backdrop_path}')`
      : "none";

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const pageNumbers = [1, 2, 3, 4, 5];
  const totalPages = 5;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: backgroundImage,
          height: "30vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container columns-2 z-10">
          <div className="col-span-2 flex justify-center">
            <Image
              className="rounded-full"
              src={`https://image.tmdb.org/t/p/w500${datos.avatar?.tmdb.avatar_path}`}
              alt={datos.name}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-bold text-white">{datos.name}</h1>
            <p className="text-white mb-0.5">
              <span className="font-bold">Última película vista:</span>{" "}
              {peliculasVistas &&
              peliculasVistas.results &&
              peliculasVistas.results.length > 0
                ? peliculasVistas.results[peliculasVistas.results.length - 1]
                    ?.title
                : "No hay películas vistas"}
            </p>
            <p className="text-white mb-0.5">
              <span className="font-bold">Última serie vista:</span>{" "}
              {seriesVistas &&
              seriesVistas.results &&
              seriesVistas.results.length > 0
                ? seriesVistas.results[seriesVistas.results.length - 1]?.name
                : "No hay series vistas"}
            </p>
            <p className="text-white mb-0.5">
              <span className="font-bold">Última película favorita:</span>{" "}
              {peliculasFavoritas &&
              peliculasFavoritas.results &&
              peliculasFavoritas.results.length > 0
                ? peliculasFavoritas.results[
                    peliculasFavoritas.results.length - 1
                  ]?.title
                : "No hay películas favoritas"}
            </p>
            <p className="text-white mb-0.5">
              <span className="font-bold">Última serie favorita:</span>{" "}
              {seriesFavoritas &&
              seriesFavoritas.results &&
              seriesFavoritas.results.length > 0
                ? seriesFavoritas.results[seriesFavoritas.results.length - 1]
                    ?.name
                : "No hay series favoritas"}
            </p>
          </div>
        </div>
      </div>

      <div className="relative inline-block text-left">
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span>{selectedOption || "Selecciona una opción"}</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="z-10 absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {options.map((option) => (
                        <div
                          key={option.name}
                          className="-m-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                          <Popover.Button
                            className="flex items-center text-sm font-medium text-gray-900"
                            onClick={() => setSelectedOption(option.name)}
                          >
                            {option.name}
                          </Popover.Button>

                          {selectedOption === option.name && (
                            <div className="mt-2 grid gap-2 grid-cols-1">
                              {option.suboptions.map((suboption) => (
                                <a
                                  key={suboption}
                                  href={`/${option.name.toLowerCase()}/${suboption.toLowerCase()}`}
                                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                  {suboption}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      <div className="flex justify-center mt-4">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {currentPage !== 1 && (
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.707 5.293a1 1 0 00-1.414 0L5.586 9.586a1 1 0 000 1.414L9.293 14.707a1 1 0 001.414-1.414L7.414 10l3.293-3.293a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                currentPage === page
                  ? "text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50"
              } focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              {page}
            </button>
          ))}
          {currentPage !== totalPages && (
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 14.707a1 1 0 001.414 0l3.293-3.293a1 1 0 000-1.414L10.707 5.293a1 1 0 00-1.414 1.414L12.586 10l-3.293 3.293a1 1 0 000 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </nav>
      </div>

      <div className="container mx-auto my-5">
        <ListadoPeliculas
          movies={peliculasPendientes.results}
          titulo={"Películas por ver"}
          tipo={"Peliculas"}
        />
        <ListadoPeliculas
          movies={seriesPendientes.results}
          titulo={"Series por ver"}
          tipo={"Series"}
        />
        <ListadoPeliculas
          movies={peliculasVistas.results}
          titulo={"Películas vistas"}
          tipo={"Peliculas"}
        />
        <ListadoPeliculas
          movies={seriesVistas.results}
          titulo={"Series vistas"}
          tipo={"Series"}
        />
        <ListadoPeliculas
          movies={peliculasFavoritas.results}
          titulo={"Películas favoritas"}
          tipo={"Peliculas"}
        />
        <ListadoPeliculas
          movies={seriesFavoritas.results}
          titulo={"Series favoritas"}
          tipo={"Series"}
        />
      </div>
    </>
  );
};

export default Cuenta;
