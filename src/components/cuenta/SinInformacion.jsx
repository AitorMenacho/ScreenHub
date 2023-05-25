import Image from "next/image";

export default function SinInformacion({ titulo, mensaje }) {
  return (
    <>
      <Image
        className="rounded-xl"
        src={`https://via.placeholder.com/300x450.png?text=${mensaje}`}
        alt={titulo}
        width={200}
        height={200}
        style={{
          objectFit: "cover",
          width: "30rem",
          height: "25rem",
        }}
      />
      <h2 className="text-white text-xl font-bold">{titulo}</h2>
    </>
  );
}
