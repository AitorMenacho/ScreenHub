import Image from "next/image";
import Link from "next/link";

export default function Recommendations({ recomendation, tipo }) {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">
        Si te ha gustado, también te gustarán
      </h2>
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
                  width={200}
                  height={200}
                  quality={75}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
