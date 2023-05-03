import Image from "next/image";
import Perfil from "../api/Perfil";
import ListadoPeliculas from "@/components/listadoPeliculas";
import { UserContext } from "../_app";
import { useContext, useEffect } from "react";

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

  // Función para ver todas las películas vistas
  const verTodasPeliculasVistas = () => {
    router.push(`/Cuenta/${sessionId}/PeliculasVistas`);
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
