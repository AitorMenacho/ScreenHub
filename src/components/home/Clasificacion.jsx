import Image from "next/image";
import Link from "next/link";

const Clasificacion = ({ listado, titulo, tipo }) => {
  const getCardClass = (index) => {
    let cardClass = "rounded-xl absolute inset-0 z-10";

    switch (index) {
      case 0:
        cardClass +=
          " bg-gradient-to-t from-yellow-500 hover:from-yellow-600 transition duration-500 ease-in-out";
        break;
      case 1:
        cardClass += " bg-gradient-to-t from-gray-500 hover:from-gray-600 transition duration-500 ease-in-out";
        break;
      case 2:
        cardClass += " bg-gradient-to-t from-yellow-900 hover:from-yellow-800 transition duration-500 ease-in-out";
        break;
      default:
        cardClass += " bg-white";
    }

    return cardClass;
  };

  return (
    <>
      <div className="m-10 w-2/3 p-10 rounded-xl bg-stone-800">
        <h2 className="text-2xl text-center mb-5">{titulo}</h2>
        <div className="flex flex-wrap justify-between">
          {listado.map((pelicula, index) => (
            <Link key={pelicula.id} href={`/${tipo}/${pelicula.id}`}>
              <div className="relative">
                <div
                  className={`absolute inset-0 ${getCardClass(index)}`}
                ></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-center text-2xl font-bold text-stone-900 z-20">
                    {pelicula.title || pelicula.name}
                  </h3>
                </div>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${
                    pelicula.poster_path || pelicula.profile_path
                  }`}
                  alt={`Portada de ${pelicula.title || pelicula.name}`}
                  className="w-full object-cover object-center rounded-xl"
                  style={{
                    filter: "brightness(70%)",
                    transition: "filter 0.2s ease-in-out",
                    height: "25rem",
                  }}
                  width={500}
                  height={750}
                  quality={50}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clasificacion;
