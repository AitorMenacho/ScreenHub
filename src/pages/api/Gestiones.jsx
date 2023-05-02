import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_app";

const Gestiones = (idPelicula) => {
  const [guardadoBBDD, setGuardadoBBDD] = useState(false);

  const { sessionId, setUserId } = useContext(UserContext);

  useEffect(() => {
    // Petición para guardar la película como favorita
    const guardar = async () => {
      const url = `https://api.themoviedb.org/3/account/${setUserId}/favorite?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`;
      const data = {
        media_type: "movie",
        media_id: idPelicula,
        favorite: true,
      };
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const result = await response.json();
      setGuardadoBBDD(result);
      console.log(result);
    };

    guardar();
  }, [idPelicula, sessionId, setUserId]);

  return { guardadoBBDD };
};

export default Gestiones;
