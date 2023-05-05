const { useEffect } = require("react");

const CerrarSesion = (idSession) => {
  useEffect(() => {
    const cerrarSesion = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/session?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: idSession,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    };

    cerrarSesion();
  }, [idSession]);
};

export default CerrarSesion;
