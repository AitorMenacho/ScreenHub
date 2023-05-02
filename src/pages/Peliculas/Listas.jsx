import { useEffect, useState } from "react";
import PeliculasApi from "../api/Peliculas";
import Listado from "@/components/Listado";

export default function Listas() {
  const { mejorValoradas, populares, proximosEstrenos, cartelera, tendencia } =
    PeliculasApi();

  return (
    <div className="container mx-auto">
      <Listado movies={populares} titulo={"Más populares"} tipo={"Peliculas"} />
      <Listado movies={cartelera} titulo={"En cartelera"} tipo={"Peliculas"} />
      <Listado
        movies={mejorValoradas}
        titulo={"Mejores valoradas"}
        tipo={"Peliculas"}
      />
      <Listado
        movies={proximosEstrenos}
        titulo={"Próximos estrenos"}
        tipo={"Peliculas"}
      />
      <Listado movies={tendencia} titulo={"En tendencia"} tipo={"Peliculas"} />
    </div>
  );
}
