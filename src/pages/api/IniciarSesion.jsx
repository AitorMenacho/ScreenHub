import { useEffect, useState } from "react";

const IniciarSesion = (usuario, contrasenna) => {
  const [token, setToken] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      setToken(data.request_token);
    };

    const getValidaToken = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usuario,
            password: contrasenna,
            request_token: token,
          }),
        }
      );
      const data = await response.json();
      setToken(data.request_token);
    };

    const getSessionId = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request_token: token,
          }),
        }
      );
      const data = await response.json();
      setSessionId(data.session_id);
    };

    getToken();
    getValidaToken();
    getSessionId();
  }, [usuario, contrasenna, token]);

  return { sessionId };
};

export default IniciarSesion;
