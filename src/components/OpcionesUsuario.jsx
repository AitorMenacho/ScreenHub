import { UserContext } from "@/pages/_app";
import { useContext, useEffect, useState } from "react";
import Favorito from "./opciones/Favorito";
import Visto from "./opciones/Visto";
import Guardar from "./opciones/Guardar";

export default function OpcionesUsuario({
  idPelicula,
  valoracion,
  valorar,
  tipo,
}) {
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
        `https://api.themoviedb.org/3/${tipo}/${Pelicula}/account_states?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`
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
        setVista(true);
        setRating(res.rated.value);
      } else {
        setVista(false);
        setRating(0);
      }
      if (res.watchlist) {
        setGuardado(true);
      } else {
        setGuardado(false);
      }
    };

    check();
  }, [Pelicula, sessionId, userId, tipo]);

  useEffect(() => {
    if (valorar) {
      const cambiarValoracion = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/${tipo}/${Pelicula}/rating?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`,
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
          setVista(true);
        }
      };

      cambiar();
    } else {
      return;
    }
  }, [Pelicula, sessionId, rating, valorar, tipo]);

  return (
    <>
      <div className="flex flex-row items-center">
        <Guardar
          guardado={guardado}
          setGuardado={setGuardado}
          userId={userId}
          sessionId={sessionId}
          idPelicula={Pelicula}
          tipo={tipo}
        />
        <Favorito
          favorita={favorita}
          setFavorita={setFavorita}
          userId={userId}
          sessionId={sessionId}
          idPelicula={Pelicula}
          tipo={tipo}
        />
        <Visto
          vista={vista}
          setVista={setVista}
          userId={userId}
          sessionId={sessionId}
          idPelicula={Pelicula}
          rating={rating}
          tipo={tipo}
        />
        <p>
          Tu valoración:{" "}
          <span className="font-bold">{rating <= 1 ? 0 : rating}</span>/10
        </p>
      </div>
    </>
  );
}
