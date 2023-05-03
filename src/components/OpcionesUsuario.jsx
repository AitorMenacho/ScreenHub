import { UserContext } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import Favorito from "./opciones/Favorito";
import Visto from "./opciones/Visto";
import Guardar from "./opciones/Guardar";

export default function OpcionesUsuario({ idPelicula, valoracion, valorar }) {
  const [guardado, setGuardado] = useState(false);
  const [favorita, setFavorita] = useState(false);
  const [vista, setVista] = useState(false);
  const [rating, setRating] = useState(1);
  const [Pelicula, setPelicula] = useState({}); //[idPelicula.idPelicula

  const { userId, sessionId } = useContext(UserContext);

  useEffect(() => {
    setRating(valoracion);
  }, [valoracion]);

  useEffect(() => {
    setPelicula(idPelicula);
  }, [idPelicula]);

  useEffect(() => {
    // Comprueba el estado de la película para marcar o desmarcar los botones
    const checkStatus = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${Pelicula}/account_states?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`
      );
      const data = await response.json();
      return data;
    };

    const check = async () => {
      const res = await checkStatus();
      if (res.favorite) {
        setFavorita(true);
      } else {
        setFavorita(false);
      }
      if (res.rated) {
        setRating(res.rated.value);
      } else {
        setVista(false);
      }
      if (res.watchlist) {
        setGuardado(true);
      } else {
        setGuardado(false);
      }
    };

    check();
  }, [Pelicula, idPelicula, sessionId, userId]);

  useEffect(() => {
    if (valorar) {
      const cambiarValoracion = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${Pelicula}/rating?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              value: rating,
            }),
          }
        );
        const data = await response.json();
        return data;
      };

      const cambiar = async () => {
        const res = await cambiarValoracion();
        if (res) {
          setRating(res.value);
          setVista(true);
        }
      };

      cambiar();
    } else {
      return;
    }
  }, [Pelicula, sessionId, rating, valorar]);

  return (
    <>
      <div className="flex flex-row items-center pt-5 pb-5">
        <Guardar
          guardado={guardado}
          setGuardado={setGuardado}
          userId={userId}
          sessionId={sessionId}
          idPelicula={Pelicula}
        />
        <Favorito
          favorita={favorita}
          setFavorita={setFavorita}
          userId={userId}
          sessionId={sessionId}
          idPelicula={Pelicula}
        />
        <Visto
          vista={vista}
          setVista={setVista}
          userId={userId}
          sessionId={sessionId}
          idPelicula={Pelicula}
          rating={rating}
        />
        <p>
          Tu valoración:{" "}
          <span className="font-bold">{rating <= 1 ? 0 : rating}</span>/10
        </p>
      </div>
    </>
  );
}
