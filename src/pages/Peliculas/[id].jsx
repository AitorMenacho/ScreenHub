import { useRouter } from "next/router";

import Providers from "@/components/Providers";
import Actors from "@/components/Actors";
import Trailer from "@/components/Trailer";
import Productoras from "@/components/Productoras";
import Reviews from "@/components/Reviews";
import Recommendations from "@/components/Recommendations";

import Pelicula from "../api/Pelicula";
import Saga from "@/components/pelicula/Saga";
import { Datos } from "@/components/Datos";
import { ImagenPortada } from "@/components/ImagenPortada";
import SagasApi from "../api/Sagas";
import Link from "next/link";

const Peliculas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { movie, actors, trailer, recomendation, reviews, providers } =
    Pelicula(id);

  const { saga } = SagasApi(movie.belongs_to_collection?.id);

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
            <ImagenPortada poster={movie.poster_path} titulo={movie.title} />
          </div>
          <Datos
            id={id}
            sinopsis={movie.overview}
            titulo={movie.title}
            tagline={movie.tagline}
            fechaEstreno={movie.release_date}
            duracion={movie.runtime}
            genero={movie.genres}
            valoracion={movie.vote_average}
            votos={movie.vote_count}
            tipo={"movie"}
          />
        </div>
      </div>
      <Providers providers={providers?.ES} />
      <Actors actors={actors} idSerie={id} tipo={"Peliculas"} />
      <Trailer trailer={trailer && trailer[0]} />
      <Saga saga={saga} />
      <Productoras productoras={movie.production_companies} />
      <Reviews reviews={reviews} />
      <Recommendations recomendation={recomendation} tipo={"Peliculas"} />
    </>
  );
};

export default Peliculas;
