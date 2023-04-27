import Listado from "@/components/Listado";
import SeriesApi from "../api/SeriesApi";

export default function Listas() {
  const { mejorValoradas, populares, proximosEstrenos, enEmision, tendencia } =
    SeriesApi();

  return (
    <div className="container mx-auto">
      <Listado movies={populares} titulo={"Más populares"} />
      <Listado movies={enEmision} titulo={"En emisión"} />
      <Listado movies={mejorValoradas} titulo={"Mejores valoradas"} />
      <Listado movies={proximosEstrenos} titulo={"Lo puedes ver hoy"} />
      <Listado movies={tendencia} titulo={"En tendencia"} />
    </div>
  );
}
