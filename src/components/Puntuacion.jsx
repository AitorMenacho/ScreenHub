export function Puntuacion({ puntuacion }) {
  return (
    <p
      className="absolute text-white font-bold text-xl bg-stone-950 rounded-full p-2 w-12 h-12 flex items-center justify-center"
      style={{
        color: puntuacion < 5 ? "red" : puntuacion < 7 ? "orange" : "green",
        top: "-10px",
        left: "-10px",
      }}
    >
      {(Math.round(puntuacion * 10) / 10).toFixed(1)}
    </p>
  );
}
