import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Actors({ actors, idSerie }) {
  const router = useRouter();

  const handleShowAllActors = () => {
    router.push(`/Series/${idSerie}/Actores`);
  };

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">Actores</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {actors &&
          actors.slice(0, 10).map((actor) => (
            <Link
              key={actor.id}
              href="../Persona/[id]"
              as={`/Persona/${actor.id}`}
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full w-24 h-24 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width={100}
                  height={100}
                />
                <p className="text-center font-semibold">{actor.name}</p>
                <p className="text-center text-sm">{actor.character}</p>
              </div>
            </Link>
          ))}
      </div>
      <button
        className="block mx-auto mt-5 px-4 py-2 text-stone-950 bg-yellow-500 rounded hover:bg-yellow-400"
        onClick={handleShowAllActors}
      >
        Ver todos
      </button>
    </div>
  );
}
