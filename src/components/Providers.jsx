import Image from "next/image";

export default function Providers({ providers }) {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">¿Donde verlo?</h2>
      <p className="pb-2 mb-3">contenido sacado de JustWatch</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
        {providers &&
          providers.flatrate.map((provider) => (
            <div
              key={provider.provider_id}
              className="text-center flex flex-col items-center"
            >
              <Image
                className="rounded-full w-24 h-24 object-cover mb-3"
                src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                alt={provider.provider_name}
                width={100}
                height={100}
              />
              <span className="font-bold">{provider.provider_name}</span>{" "}
            </div>
          ))}
      </div>
    </div>
  );
}
