import Image from "next/image";
import Informacion from "./Informacion";
import SinInformacion from "./SinInformacion";

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
  console.log(backgroundImage);

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
              src={fotoPerfil}
              alt={nombre}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-span-1 items-center justify-center text-center mt-5">
            <h1 className="text-3xl font-bold text-white">{nombre}</h1>
            <div className="container columns-6 mt-5">
              {peliculasVistas.totalResults.length > 0 ? (
                <>
                  <Informacion
                    titulo={"Última película vista"}
                    portada={
                      peliculasVistas &&
                      peliculasVistas.totalResults &&
                      peliculasVistas.totalResults[0].poster_path
                    }
                    tipo={"Peliculas"}
                    pelicula={
                      peliculasVistas &&
                      peliculasVistas.totalResults &&
                      peliculasVistas.totalResults[0].id
                    }
                  />
                </>
              ) : (
                <>
                  <SinInformacion
                    titulo={"Última película vista"}
                    mensaje={"Sin+películas+vistas"}
                  />
                </>
              )}
              {seriesVistas.totalResults.length > 0 ? (
                <>
                  <Informacion
                    titulo={"Última serie vista"}
                    portada={
                      seriesVistas &&
                      seriesVistas.totalResults &&
                      seriesVistas.totalResults[0].poster_path
                    }
                    tipo={"Series"}
                    pelicula={
                      seriesVistas &&
                      seriesVistas.totalResults &&
                      seriesVistas.totalResults[0].id
                    }
                  />
                </>
              ) : (
                <>
                  <SinInformacion
                    titulo={"Última serie vista"}
                    mensaje={"Sin+series+vistas"}
                  />
                </>
              )}
              {peliculasPendientes.totalResults.length > 0 ? (
                <>
                  <Informacion
                    titulo={"Última película pendiente"}
                    portada={
                      peliculasPendientes &&
                      peliculasPendientes.totalResults &&
                      peliculasPendientes.totalResults[0].poster_path
                    }
                    tipo={"Peliculas"}
                    pelicula={
                      peliculasPendientes &&
                      peliculasPendientes.totalResults &&
                      peliculasPendientes.totalResults[0].id
                    }
                  />
                </>
              ) : (
                <>
                  <SinInformacion
                    titulo={"Última película pendiente"}
                    mensaje={"Sin+películas+pendientes"}
                  />
                </>
              )}
              {seriesPendientes.totalResults.length > 0 ? (
                <>
                  <Informacion
                    titulo={"Última serie pendiente"}
                    portada={
                      seriesPendientes &&
                      seriesPendientes.totalResults &&
                      seriesPendientes.totalResults[0].poster_path
                    }
                    tipo={"Series"}
                    pelicula={
                      seriesPendientes &&
                      seriesPendientes.totalResults &&
                      seriesPendientes.totalResults[0].id
                    }
                  />
                </>
              ) : (
                <>
                  <SinInformacion
                    titulo={"Última serie pendiente"}
                    mensaje={"Sin+series+pendientes"}
                  />
                </>
              )}
              {peliculasFavoritas.totalResults.length > 0 ? (
                <>
                  <Informacion
                    titulo={"Última película favorita"}
                    portada={
                      peliculasFavoritas &&
                      peliculasFavoritas.totalResults &&
                      peliculasFavoritas.totalResults[0].poster_path
                    }
                    tipo={"Peliculas"}
                    pelicula={
                      peliculasFavoritas &&
                      peliculasFavoritas.totalResults &&
                      peliculasFavoritas.totalResults[0].id
                    }
                  />
                </>
              ) : (
                <>
                  <SinInformacion
                    titulo={"Última película favorita"}
                    mensaje={"Sin+películas+favoritas"}
                  />
                </>
              )}
              {seriesFavoritas.totalResults.length > 0 ? (
                <>
                  <Informacion
                    titulo={"Última serie favorita"}
                    portada={
                      seriesFavoritas &&
                      seriesFavoritas.totalResults &&
                      seriesFavoritas.totalResults[0].poster_path
                    }
                    tipo={"Series"}
                    pelicula={
                      seriesFavoritas &&
                      seriesFavoritas.totalResults &&
                      seriesFavoritas.totalResults[0].id
                    }
                  />
                </>
              ) : (
                <>
                  <SinInformacion
                    titulo={"Última serie favorita"}
                    mensaje={"Sin+series+favoritas"}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
