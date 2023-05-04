import React, { useRef, useState } from "react";
import OpcionesUsuario from "./OpcionesUsuario";
import Sinopsis from "./Sinopsis";

export function Datos({
  id,
  sinopsis,
  titulo,
  tagline,
  fechaEstreno,
  duracion,
  genero,
  valoracion,
  votos,
}) {
  const [rating, setRating] = useState(1);
  const [valorar, setValorar] = useState(false);
  const starsRef = useRef([]);

  [...Array(10)].forEach((_, index) => {
    starsRef.current[index] = React.createRef();
  });

  const highlightStars = (index) => {
    starsRef.current.forEach((star, i) => {
      star.current.setAttribute(
        "class",
        `h-6 w-6 fill-current ${
          i <= index ? "text-yellow-400" : "text-gray-400"
        }`
      );
    });
  };

  return (
    <>
      <div className="col-span-1">
        <h1 className="text-3xl font-bold text-white">{titulo}</h1>
        <div className="bg-yellow-500 text-stone-950 py-2 px-4 rounded-lg my-2">
          <h3 className="text-2xl font-bold">{tagline}</h3>
        </div>
        <Sinopsis sinopsis={sinopsis} titulo={titulo} />

        <p className="text-white my-1">
          <span className="font-bold">Fecha de estreno:</span> {fechaEstreno}
        </p>
        <p className="text-white my-1">
          <span className="font-bold">Duración:</span> {duracion} min
        </p>
        <p className="font-bold mb-2">Género</p>
        <p className="text-white">
          {genero &&
            genero.map((genre) => (
              <span
                key={genre.id}
                className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-yellow-500 text-stone-950 mr-2"
              >
                {genre.name}
              </span>
            ))}
        </p>
        <div
          className="flex items-center mt-5 cursor-pointer w-48"
          onMouseMove={(e) => {
            const containerRect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - containerRect.left;
            const startToHighlight = Math.floor(
              mouseX / (containerRect.width / 10)
            );
            highlightStars(startToHighlight);
          }}
          onMouseLeave={() => {
            highlightStars(valoracion);
          }}
          onClick={(e) => {
            const containerRect = e.currentTarget.getBoundingClientRect();
            const mouseX = e.clientX - containerRect.left;
            const startToHighlight = Math.floor(
              mouseX / (containerRect.width / 10)
            );
            setRating(startToHighlight + 1);
            setValorar(true);
          }}
        >
          {[...Array(10)].map((_, index) => (
            <svg
              key={index}
              className={`h-6 w-6 fill-current ${
                index < Math.round(valoracion)
                  ? "text-yellow-400"
                  : "text-gray-400"
              }`}
              ref={starsRef.current[index]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M20 7.569l-6.159-.828L10 .512 6.16 6.741 0 7.569l4.501 4.383L3.849 20 10 16.399l6.152 3.6-1.65-8.048L20 7.569z" />
            </svg>
          ))}
        </div>
        <span className="text-white ml-2">
          {Math.round(valoracion)} / 10
          {votos > 0 ? ` (${votos} votos)` : ""}
        </span>
        <OpcionesUsuario
          idPelicula={id}
          valoracion={rating}
          valorar={valorar}
        />
      </div>
    </>
  );
}
