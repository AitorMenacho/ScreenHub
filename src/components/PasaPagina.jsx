import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function PasaPagina({
  page,
  setPage,
  totalPaginas,
  totalResultados,
}) {
  const handleNextPage = () => {
    page == totalPaginas ? setPage(totalPaginas) : setPage(page + 1);
  };

  const handlePreviousPage = () => {
    page == 1 ? setPage(1) : setPage(page - 1);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6 mb-5 mt-5">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          href="#"
          className="relative inline-flex items-center rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
        >
          Anterior
        </Link>
        <Link
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-50"
        >
          Siguiente
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Viendo página <span className="font-medium">{page}</span> de{" "}
            <span className="font-medium">{totalPaginas}</span> de{" "}
            <span className="font-medium">{totalResultados}</span> resultados
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
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-white hover:bg-yellow-500 focus:z-20 focus:outline-offset-0"
              onClick={handleNextPage}
            >
              <span className="sr-only">Siguiente</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
