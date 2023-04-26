import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Temporada from "@/pages/api/Temporada";

const Temporadas = () => {
  const router = useRouter();
  const { id, temp } = router.query;

  const { temporada, trailer } = Temporada(id, temp);

  if (!temporada) return null;

  console.log(temporada);

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${temporada.backdrop_path}')`,
          height: "70vh",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container columns-2 z-10">
          <div className="col-span-2">
            <Image
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${temporada.poster_path}`}
              alt={temporada.title}
              width={300}
              height={450}
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-bold text-white">{temporada.name}</h1>
            <div className="bg-yellow-500 text-stone-950 py-2 px-4 rounded-lg my-2">
              <h3 className="text-2xl font-bold">{temporada.tagline}</h3>
            </div>
            <p className="text-white">{temporada.overview}</p>
            <p className="text-white my-1">
              <span className="font-bold">Fecha de estreno:</span>{" "}
              {temporada.first_air_date}
            </p>
            <p className="text-white my-1">
              <span className="font-bold">Temporadas:</span>{" "}
              {temporada.number_of_seasons}
            </p>
            <p className="font-bold mt-5 mb-2">Género</p>
            <p className="text-white">
              {temporada.genres &&
                temporada.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-yellow-500 text-stone-950 mr-2"
                  >
                    {genre.name}
                  </span>
                ))}
            </p>
            <div className="flex items-center my-5">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-6 w-6 fill-current ${
                    index < Math.round(temporada.vote_average / 2)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 7.569l-6.159-.828L10 .512 6.16 6.741 0 7.569l4.501 4.383L3.849 20 10 16.399l6.152 3.6-1.65-8.048L20 7.569z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Temporadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {temporada.seasons &&
            temporada.seasons.map((season) => (
              <Link
                key={season.id}
                href="[id]/Temporada/[num]"
                as={`${id}/Temporada/${season.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                    alt={season.name}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">{season.name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Trailer</h2>
        <div className="container mx-auto">
          {trailer && (
            <iframe
              className="w-full"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={temporada.title}
              allowFullScreen
            ></iframe>
          )}
          {!trailer && <p className="text-2xl">No hay trailer disponible</p>}
        </div>
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Productoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {temporada.production_companies &&
            temporada.production_companies.map((company) => (
              <Link
                key={company.id}
                href="/company/[id]"
                as={`/company/${company.id}`}
              >
                <div className="w-40 h-40 flex flex-col object-cover items-center bg-yellow-500 text-stone-950 justify-center p-3 rounded-xl">
                  {company.logo_path == null ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  ) : (
                    <Image
                      src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                      alt={company.name}
                      width={200}
                      height={200}
                    />
                  )}
                  <p className="text-center font-semibold">{company.name}</p>
                </div>
              </Link>
            ))}
          {!temporada.production_companies && (
            <p className="text-2xl">Sin datos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Temporadas;
