import { useRouter } from "next/router";
import Pelicula from "../api/Pelicula";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Peliculas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { movie, actors, trailer, recomendation, reviews } = Pelicula(id);
  const [showAllActors, setShowAllActors] = useState(false);

  const handleShowAllActors = () => {
    setShowAllActors(true);
  };

  if (!movie) return null;

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          height: "70vh",
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
            <p className="text-white my-5">
              <span className="font-bold">Género:</span>{" "}
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
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Actores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {actors &&
            actors.slice(0, 10).map((actor) => (
              <div key={actor.id} className="flex flex-col items-center">
                <Image
                  className="rounded-full w-24 h-24 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width={100}
                  height={100}
                />
                <p className="text-center font-semibold">{actor.name}</p>
                <p className="text-center text-sm">{actor.character}</p>
              </div>
            ))}
        </div>
        {!showAllActors && (
          <button
            className="block mx-auto mt-5 px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400"
            onClick={handleShowAllActors}
          >
            Ver todos
          </button>
        )}
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Trailer</h2>
        <div className="container mx-auto">
          {trailer && (
            <iframe
              className="w-full"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={movie.title}
              allowFullScreen
            ></iframe>
          )}
          {!trailer && (
            <p className="text-center text-white">No hay trailer disponible</p>
          )}
        </div>
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">
          Si te ha gustado esta película
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {recomendation &&
            recomendation.slice(0, 10).map((recommendation) => (
              <Link
                key={recommendation.id}
                href="/Peliculas/[id]"
                as={`/Peliculas/${recommendation.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${recommendation.poster_path}`}
                    alt={recommendation.title}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">
                    {recommendation.title}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Reseñas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews &&
            reviews.slice(0, 6).map((review) => (
              <div
                key={review.id}
                className="bg-gray-900 bg-opacity-50 bg-blend-darken rounded-lg p-4"
              >
                <p className="text-white">{review.content}</p>
                <p className="text-white mt-3">
                  <span className="font-bold">Autor:</span> {review.author}
                </p>
              </div>
            ))}
          {reviews.length === 0 && <p className="text-white">No hay reseñas</p>}
        </div>
      </div>
    </>
  );
};

export default Peliculas;
