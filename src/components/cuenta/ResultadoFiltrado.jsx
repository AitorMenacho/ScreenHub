import Image from "next/image";

export default function ResultadoFiltrado({ peliculas, series }) {
  const resultados = peliculas || series;

  console.log(peliculas)
  console.log(series)
  console.log(resultados)
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {resultados && resultados.map((resultado) => (
          <div key={resultado.id} className="m-4">
            <Image
              src={`https://image.tmdb.org/t/p/w500${resultado.poster_path}`}
              alt={resultado.title}
              width={200}
              height={200}
              style={{ objectFit: "cover", width: "200px", height: "200px" }}
            />
            <p>{resultado.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
