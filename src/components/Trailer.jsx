export default function Trailer({ trailer }) {
  console.log(trailer)
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">Trailer</h2>
      <div className="container mx-auto">
        {trailer && (
          <iframe
            key={trailer.id}
            className="w-full"
            height="500"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            allowFullScreen
          ></iframe>
        )}
        {!trailer && <p className="text-2xl">No hay trailer disponible</p>}
      </div>
    </div>
  );
}
