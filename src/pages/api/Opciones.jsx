import { useEffect } from "react";

const Opciones = (idPelicula) => {
  useEffect(() => {
    // Petición para guardar la película como favorita
    const guardar = async () => {
      const url = `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`;
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
      console.log(result);
    };
  });
};

export default Opciones;
