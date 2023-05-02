import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Recommendations({ recomendation, tipo }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">
        Si te ha gustado, también te gustarán
      </h2>
      {loading && (
        <div className="absolute z-10 inset-0 bg-stone-950 bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recomendation &&
          recomendation.slice(0, 10).map((recommendation) => (
            <Link
              key={recommendation.id}
              href={`/${tipo}/[id]`}
              as={`/${tipo}/${recommendation.id}`}
            >
              <div className="flex flex-col items-center">
                <Image
                  className="w-50 h-50 object-cover rounded-lg"
                  src={`https://image.tmdb.org/t/p/original${recommendation.poster_path}`}
                  alt={recommendation.name}
                  onLoad={() => setLoading(false)}
                  width={200}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
                {tipo === "Peliculas" ? (
                  <p className="text-center font-semibold">
                    {recommendation.title}
                  </p>
                ) : (
                  <p className="text-center font-semibold">
                    {recommendation.name}
                  </p>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
