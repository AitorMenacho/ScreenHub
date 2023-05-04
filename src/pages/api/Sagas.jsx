import { useEffect, useState } from "react";

const SagasApi = (idSaga) => {
  const [saga, setSaga] = useState([]);

  useEffect(() => {
    const getSaga = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/collection/${idSaga}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setSaga(data);
    };

    getSaga();
  }, [idSaga]);

  return {
    saga,
  };
};

export default SagasApi;
