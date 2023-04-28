import { useEffect, useState } from "react";

export default function Providers() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&watch_region=ES`
      );

      const data = await response.json();
      setProviders(data.results);
    };

    getProviders();
  }, []);

  return { providers };
}
