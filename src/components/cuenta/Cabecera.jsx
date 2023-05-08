import Image from "next/image";
import Informacion from "./Informacion";

export default function Cabecera({
  peliculasVistas,
  seriesVistas,
  peliculasPendientes,
  seriesPendientes,
  peliculasFavoritas,
  seriesFavoritas,
  nombre,
  backgroundImage,
  fotoPerfil,
}) {
  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: backgroundImage,
          height: "100vh",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container columns-1 z-10">
          <div className="col-span-1 flex flex-col mt-10 justify-center items-center">
            <Image
              className="rounded-full"
              src={`https://image.tmdb.org/t/p/w500${fotoPerfil}`}
              alt={nombre}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-span-1 items-center justify-center text-center mt-5">
            <h1 className="text-3xl font-bold text-white">{nombre}</h1>
            <div className="container columns-6 mt-5">
              <Informacion
                titulo={"Última película vista"}
                portada={
                  peliculasVistas &&
                  peliculasVistas.results &&
                  peliculasVistas.results[0].poster_path
                }
                tipo={"Peliculas"}
                pelicula={
                  peliculasVistas &&
                  peliculasVistas.results &&
                  peliculasVistas.results[0].id
                }
              />
              <Informacion
                titulo={"Última serie vista"}
                portada={
                  seriesVistas &&
                  seriesVistas.results &&
                  seriesVistas.results[0].poster_path
                }
                tipo={"Series"}
                pelicula={
                  seriesVistas &&
                  seriesVistas.results &&
                  seriesVistas.results[0].id
                }
              />
              <Informacion
                titulo={"Última película pendiente"}
                portada={
                  peliculasPendientes &&
                  peliculasPendientes.results &&
                  peliculasPendientes.results[0].poster_path
                }
                tipo={"Peliculas"}
                pelicula={
                  peliculasPendientes &&
                  peliculasPendientes.results &&
                  peliculasPendientes.results[0].id
                }
              />
              <Informacion
                titulo={"Última serie pendiente"}
                portada={
                  seriesPendientes &&
                  seriesPendientes.results &&
                  seriesPendientes.results[0].poster_path
                }
                tipo={"Series"}
                pelicula={
                  seriesPendientes &&
                  seriesPendientes.results &&
                  seriesPendientes.results[0].id
                }
              />
              <Informacion
                titulo={"Última película favorita"}
                portada={
                  peliculasFavoritas &&
                  peliculasFavoritas.results &&
                  peliculasFavoritas.results[0].poster_path
                }
                tipo={"Peliculas"}
                pelicula={
                  peliculasFavoritas &&
                  peliculasFavoritas.results &&
                  peliculasFavoritas.results[0].id
                }
              />
              <Informacion
                titulo={"Última serie favorita"}
                portada={
                  seriesFavoritas &&
                  seriesFavoritas.results &&
                  seriesFavoritas.results[0].poster_path
                }
                tipo={"Series"}
                pelicula={
                  seriesFavoritas &&
                  seriesFavoritas.results &&
                  seriesFavoritas.results[0].id
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
