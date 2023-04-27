import { useRouter } from "next/router";
import Image from "next/image";

import Providers from "@/components/Providers";
import Temporadas from "@/components/series/temporadas";
import Actors from "@/components/Actors";
import Trailer from "@/components/Trailer";
import Productoras from "@/components/Productoras";
import Reviews from "@/components/Reviews";
import Recommendations from "@/components/Recommendations";

import Series from "../api/Series";

const Serie = () => {
  const router = useRouter();
  const { id } = router.query;

  const { tvShow, actors, trailer, recomendation, reviews, providers } =
    Series(id);

  if (!tvShow) return null;

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${tvShow.backdrop_path}')`,
          height: "80vh",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container grid grid-cols-2">
          <div className="col-span-1 flex flex-col items-center">
            <Image
              className="rounded-t-lg"
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt={tvShow.title}
              width={300}
              height={450}
            />
            <div
              className="py-2 flex items-center font-bold justify-center bg-stone-950 rounded-b-lg"
              style={{ width: "300px" }}
            >
              {tvShow.status === "Returning Series" && (
                <p className="text-green-500 flex items-center">
                  En emisión
                  <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>
                </p>
              )}
              {tvShow.status === "Ended" && (
                <p className="text-red-500 flex items-center">
                  Finalizada
                  <span className="ml-2 h-2 w-2 rounded-full bg-red-500"></span>
                </p>
              )}
              {tvShow.status === "Canceled" && (
                <p className="text-gray-500 flex items-center">
                  Cancelada
                  <span className="ml-2 h-2 w-2 rounded-full bg-gray-500"></span>
                </p>
              )}
              {tvShow.status === "Pilot" && (
                <p className="text-purple-500 flex items-center">
                  Piloto
                  <span className="ml-2 h-2 w-2 rounded-full bg-purple-500"></span>
                </p>
              )}
              {tvShow.status === "In Production" && (
                <p className="text-blue-500 flex items-center">
                  En producción
                  <span className="ml-2 h-2 w-2 rounded-full bg-blue-500"></span>
                </p>
              )}
              {tvShow.status === "Planned" && (
                <p className="text-yellow-500 flex items-center">
                  Planificada
                  <span className="ml-2 h-2 w-2 rounded-full bg-yellow-500"></span>
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-bold text-white">{tvShow.name}</h1>
            <div className="bg-yellow-500 text-stone-950 py-2 px-4 rounded-lg my-2">
              <h3 className="text-2xl font-bold">{tvShow.tagline}</h3>
            </div>
            <p className="text-white">{tvShow.overview}</p>
            <p className="text-white my-1">
              <span className="font-bold">Fecha de estreno:</span>{" "}
              {tvShow.first_air_date}
            </p>
            <p className="text-white my-1">
              <span className="font-bold">Temporadas:</span>{" "}
              {tvShow.number_of_seasons}
            </p>
            <p className="font-bold mt-5 mb-2">Género</p>
            <p className="text-white">
              {tvShow.genres &&
                tvShow.genres.map((genre) => (
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
                    index < Math.round(tvShow.vote_average / 2)
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
      <Providers providers={providers.ES} />
      <Temporadas temporada={tvShow.seasons} idSerie={id} />
      <Actors actors={actors} idSerie={id} />
      <Trailer trailer={trailer} />
      <Productoras productoras={tvShow.production_companies} />
      <Reviews reviews={reviews} />
      <Recommendations recomendation={recomendation} tipo={"Series"} />
    </>
  );
};

export default Serie;
