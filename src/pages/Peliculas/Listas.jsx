import PeliculasApi from "../api/Peliculas";
import Listado from "@/components/Listado";

export default function Listas() {
  const { mejorValoradas, populares, proximosEstrenos, cartelera, tendencia } =
    PeliculasApi();

  return (
    <div className="container mx-auto">
      <Listado movies={populares} titulo={"Más populares"} />
      <Listado movies={cartelera} titulo={"En cartelera"} />
      <Listado movies={mejorValoradas} titulo={"Mejores valoradas"} />
      <Listado movies={proximosEstrenos} titulo={"Próximos estrenos"} />
      <Listado movies={tendencia} titulo={"En tendencia"} />
    </div>
  );
}
