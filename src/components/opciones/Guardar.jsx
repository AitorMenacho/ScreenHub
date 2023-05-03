export default function Guardar({
  userId,
  sessionId,
  idPelicula,
  guardado,
  setGuardado,
}) {
  const marcarMasTarde = async () => {
    const marcando = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${userId}/watchlist?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: idPelicula,
            watchlist: true,
          }),
        }
      );
      const data = await response.json();
      return data;
    };

    const desmarcando = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${userId}/watchlist?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${sessionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            media_type: "movie",
            media_id: idPelicula,
            watchlist: false,
          }),
        }
      );
      const data = await response.json();
      return data;
    };

    if (!guardado) {
      const res = await marcando();
      if (res) {
        setGuardado(!guardado);
      }
    } else {
      const res = await desmarcando();
      if (res) {
        setGuardado(!guardado);
      }
    }
  };

  return (
    <>
      <div className="tooltip">
        <div className="tooltip-text">
          <p className="text-white text-sm">Guardar</p>
        </div>
        <div
          className="mr-5 bg-yellow-400 p-2 rounded-full text-stone-950 cursor-pointer"
          onClick={() => marcarMasTarde()}
        >
          {!guardado ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
