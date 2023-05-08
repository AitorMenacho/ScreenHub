import Image from "next/image";
import Link from "next/link";

export default function Temporadas({ temporada, idSerie }) {

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">Temporadas</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {temporada &&
          temporada.map((season) => (
            <Link
              key={season.id}
              href="/Series/[id]/[temp]/page"
              as={`/Series/${idSerie}/${season.season_number}/page`}
            >
              <div className="flex flex-col items-center">
                <Image
                  className="w-50 h-50 object-cover rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  alt={`Portada de la temporada`}
                  width={200}
                  height={200}
                />
                <div
                  className="py-2 flex flex-col items-center font-bold justify-center bg-yellow-500 text-stone-950 rounded-b-lg"
                  style={{ width: "200px" }}
                >
                  <p className="text-center font-bold">{season.name}</p>
                  <p className="text-center font-semibold">
                    {season.episode_count} capítulos
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
