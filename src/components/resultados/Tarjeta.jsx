import Image from "next/image";
import Link from "next/link";

export function Tarjeta({ id, tipo, nombre, imagen, loading, setLoading }) {
  return (
    <Link href={`/${tipo}/${id}`} className="group">
      <div className="w-full overflow-hidden rounded-lg bg-yellow-500">
        {loading ? (
          <div className="animate-pulse flex items-center justify-center h-full w-full bg-gray-800">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white">{nombre}</h3>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${imagen}`}
          alt={`Portada de ${nombre}`}
          className="w-full object-cover object-center"
          style={{
            filter: loading ? "blur(5px)" : "none",
            transition: "filter 0.2s ease-in-out",
            height: "25rem",
          }}
          width={500}
          height={750}
          quality={50}
          onLoad={() => setLoading(false)}
        />
      </div>
    </Link>
  );
}
