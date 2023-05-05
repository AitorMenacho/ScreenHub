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
  console.log(peliculasVistas);

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
                pelicula={peliculasVistas}
              />
              <Informacion
                titulo={"Última serie vista"}
                pelicula={seriesVistas}
              />
              <Informacion
                titulo={"Última película pendiente"}
                pelicula={peliculasPendientes}
              />
              <Informacion
                titulo={"Última serie pendiente"}
                pelicula={seriesPendientes}
              />
              <Informacion
                titulo={"Última película favorita"}
                pelicula={peliculasFavoritas}
              />
              <Informacion
                titulo={"Última serie favorita"}
                pelicula={seriesFavoritas}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
