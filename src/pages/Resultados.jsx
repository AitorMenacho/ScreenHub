import { useRouter } from "next/router";
import Buscar from "./api/Buscar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Resultados = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { search } = router.query;

  const { movies, pages, results } = Buscar(search, page);

  const handleNextPage = () => {
    page == pages ? setPage(pages) : setPage(page + 1);
  };

  const handlePreviousPage = () => {
    page == 1 ? setPage(1) : setPage(page - 1);
  };

  if (!movies) return null;

  console.log(movies);

  return (
    <>
      <div className="bg-stone-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between border-b border-yellow-500 px-4 py-3 sm:px-6 mb-5">
            <div className="flex flex-1 justify-between sm:hidden">
              <Link
                href="#"
                className="relative inline-flex items-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
              >
                Previous
              </Link>
              <Link
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-50"
              >
                Next
              </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white">
                  Viendo página <span className="font-medium">{page}</span> de{" "}
                  <span className="font-medium">{pages}</span> de{" "}
                  <span className="font-medium">{results}</span> resultados
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-yellow-500 focus:z-20 focus:outline-offset-0"
                    onClick={handlePreviousPage}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-yellow-500 focus:z-20 focus:outline-offset-0"
                    onClick={handleNextPage}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
              <div key={movie.id}>
                {movie.poster_path == null ? (
                  <Link
                    href="/Persona/[id]"
                    as={`/Persona/${movie.id}`}
                    className="group"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-yellow-500 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`}
                        alt={movie.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={500}
                        height={750}
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-white">
                      {movie.title == null ? movie.name : movie.title}
                    </h3>
                    <p
                      className="mt-1 text-lg font-medium"
                      style={{
                        color:
                          movie.vote_average < 5
                            ? "red"
                            : movie.vote_average < 7
                            ? "orange"
                            : "green",
                      }}
                    >
                      {movie.vote_average}
                    </p>
                  </Link>
                ) : movie.media_type === "tv" ? (
                  <Link
                    key={movie.id}
                    href="/Series/[id]"
                    as={`/Series/${movie.id}`}
                    className="group"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-yellow-500 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={500}
                        height={750}
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-white">
                      {movie.title == null ? movie.name : movie.title}
                    </h3>
                    <p
                      className="mt-1 text-lg font-medium"
                      style={{
                        color:
                          movie.vote_average < 5
                            ? "red"
                            : movie.vote_average < 7
                            ? "orange"
                            : "green",
                      }}
                    >
                      {movie.vote_average}
                    </p>
                  </Link>
                ) : (
                  <Link
                    key={movie.id}
                    href="/Peliculas/[id]"
                    as={`/Peliculas/${movie.id}`}
                    className="group"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-yellow-500 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={500}
                        height={750}
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-white">
                      {movie.title == null ? movie.name : movie.title}
                    </h3>
                    <p
                      className="mt-1 text-lg font-medium"
                      style={{
                        color:
                          movie.vote_average < 5
                            ? "red"
                            : movie.vote_average < 7
                            ? "orange"
                            : "green",
                      }}
                    >
                      {movie.vote_average}
                    </p>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-yellow-500 px-4 py-3 sm:px-6 mt-5">
            <div className="flex flex-1 justify-between sm:hidden">
              <Link
                href="#"
                className="relative inline-flex items-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
              >
                Previous
              </Link>
              <Link
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-50"
              >
                Next
              </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-white">
                  Viendo página <span className="font-medium">{page}</span> de{" "}
                  <span className="font-medium">{pages}</span> de{" "}
                  <span className="font-medium">{results}</span> resultados
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-yellow-500 focus:z-20 focus:outline-offset-0"
                    onClick={handlePreviousPage}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-yellow-500 focus:z-20 focus:outline-offset-0"
                    onClick={handleNextPage}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resultados;
