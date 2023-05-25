import HomeApi from "./api/homeApi";
import Clasificacion from "@/components/home/Clasificacion";

export default function Home() {
  const { mejoresPeliculasHoy, mejoresSeriesHoy, mejoresActoresHoy } =
    HomeApi();

  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto min-h-screen">
        <Clasificacion
          listado={mejoresPeliculasHoy}
          titulo="Películas más populares hoy"
          tipo="Peliculas"
        />
        <Clasificacion
          listado={mejoresSeriesHoy}
          titulo="Series más populares hoy"
          tipo="Series"
        />
        <Clasificacion
          listado={mejoresActoresHoy}
          titulo="Actores más populares hoy"
          tipo="Persona"
        />
      </div>
    </>
  );
}
