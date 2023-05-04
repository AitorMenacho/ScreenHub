import Listado from "@/components/Listado";
import SeriesApi from "../api/SeriesApi";

export default function Listas() {
  const { mejorValoradas, populares, proximosEstrenos, enEmision, tendencia } =
    SeriesApi();

  return (
    <div className="container mx-auto">
      <Listado movies={populares} titulo={"Más populares"} tipo={"Series"} />
      <Listado movies={enEmision} titulo={"En emisión"} tipo={"Series"} />
      <Listado
        movies={mejorValoradas}
        titulo={"Mejores valoradas"}
        tipo={"Series"}
      />
      <Listado
        movies={proximosEstrenos}
        titulo={"Lo puedes ver hoy"}
        tipo={"Series"}
      />
      <Listado movies={tendencia} titulo={"En tendencia"} tipo={"Series"} />
    </div>
  );
}
