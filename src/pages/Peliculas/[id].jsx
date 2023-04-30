import { useRouter } from "next/router";
import Image from "next/image";

import Providers from "@/components/Providers";
import Actors from "@/components/Actors";
import Trailer from "@/components/Trailer";
import Productoras from "@/components/Productoras";
import Reviews from "@/components/Reviews";
import Recommendations from "@/components/Recommendations";

import Pelicula from "../api/Pelicula";

const Peliculas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { movie, actors, trailer, recomendation, reviews, providers } =
    Pelicula(id);

  if (!movie) return null;

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          height: "70vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container columns-2 z-10">
          <div className="col-span-2">
            <Image
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
            <div className="bg-yellow-500 text-stone-950 py-2 px-4 rounded-lg my-2">
              <h3 className="text-2xl font-bold">{movie.tagline}</h3>
            </div>
            <p className="text-white">{movie.overview}</p>
            <p className="text-white my-1">
              <span className="font-bold">Fecha de estreno:</span>{" "}
              {movie.release_date}
            </p>
            <p className="text-white my-1">
              <span className="font-bold">Duración:</span> {movie.runtime} min
            </p>
            <p className="font-bold mt-5 mb-2">Género</p>
            <p className="text-white">
              {movie.genres &&
                movie.genres.map((genre) => (
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
                    index < Math.round(movie.vote_average / 2)
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
      <Actors actors={actors} idSerie={id} tipo={"Peliculas"} />
      <Trailer trailer={trailer} />
      <Productoras productoras={movie.production_companies} />
      <Reviews reviews={reviews} />
      <Recommendations recomendation={recomendation} tipo={"Peliculas"} />
    </>
  );
};

export default Peliculas;
