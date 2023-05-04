import { useRouter } from "next/router";
import Image from "next/image";

import Providers from "@/components/Providers";
import Actors from "@/components/Actors";
import Trailer from "@/components/Trailer";
import Productoras from "@/components/Productoras";
import Reviews from "@/components/Reviews";
import Recommendations from "@/components/Recommendations";

import Series from "../api/Series";
import Temporadas from "@/components/series/Temporadas";
import { Estado } from "@/components/series/Estado";
import { Datos } from "@/components/Datos";
import { ImagenPortada } from "@/components/ImagenPortada";

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
            <ImagenPortada poster={tvShow.poster_path} titulo={tvShow.name} />
            <Estado estado={tvShow.status} />
          </div>
          <Datos
            id={id}
            sinopsis={tvShow.overview}
            titulo={tvShow.name}
            tagline={tvShow.tagline}
            fechaEstreno={tvShow.first_air_date}
            duracion={tvShow.episode_run_time}
            genero={tvShow.genres}
            valoracion={tvShow.vote_average}
            votos={tvShow.vote_count}
            tipo={"tv"}
          />
        </div>
      </div>
      <Providers providers={providers?.ES} />
      <Temporadas temporada={tvShow.seasons} idSerie={id} />
      <Actors actors={actors} idSerie={id} tipo={"Series"} />
      <Trailer trailer={trailer} />
      <Productoras productoras={tvShow.production_companies} />
      <Reviews reviews={reviews} />
      <Recommendations recomendation={recomendation} tipo={"Series"} />
    </>
  );
};

export default Serie;
