import { useState } from "react";

export default function Filtrado({ setFilter, username }) {
  const [active, setActive] = useState("peliculasVistas");

  const handleOptionClick = (option) => {
    setActive(option);
    setFilter(option);
  };
  return (
    <>
      <div className="flex justify-between rounded-xl bg-yellow-500 text-stone-950 p-5">
        <div>
          <h1 className="text-2xl font-bold">{username}</h1>
        </div>
        <div className="flex gap-5">
          <div
            className={`cursor-pointer ${
              active === "peliculasVistas" ? "font-bold" : ""
            }`}
            onClick={() => handleOptionClick("peliculasVistas")}
          >
            Películas vistas
          </div>
          <div
            className={`cursor-pointer ${
              active === "peliculasFavoritas" ? "font-bold" : ""
            }`}
            onClick={() => handleOptionClick("peliculasFavoritas")}
          >
            Películas favoritas
          </div>
          <div
            className={`cursor-pointer ${
              active === "peliculasPendientes" ? "font-bold" : ""
            }`}
            onClick={() => handleOptionClick("peliculasPendientes")}
          >
            Películas pendientes
          </div>
          <div
            className={`cursor-pointer ${
              active === "seriesVistas" ? "font-bold" : ""
            }`}
            onClick={() => handleOptionClick("seriesVistas")}
          >
            Series vistas
          </div>
          <div
            className={`cursor-pointer ${
              active === "seriesFavoritas" ? "font-bold" : ""
            }`}
            onClick={() => handleOptionClick("seriesFavoritas")}
          >
            Series favoritas
          </div>
          <div
            className={`cursor-pointer ${
              active === "seriesPendientes" ? "font-bold" : ""
            }`}
            onClick={() => handleOptionClick("seriesPendientes")}
          >
            Series pendientes
          </div>
        </div>
      </div>
    </>
  );
}
