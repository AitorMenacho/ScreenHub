export function Estado({ estado }) {
  return (
    <>
      <div
        className="py-2 flex items-center font-bold justify-center bg-stone-950 rounded-b-lg"
        style={{ width: "300px" }}
      >
        {estado === "Returning Series" && (
          <p className="text-green-500 flex items-center">
            En emisión
            <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>
          </p>
        )}
        {estado === "Ended" && (
          <p className="text-red-500 flex items-center">
            Finalizada
            <span className="ml-2 h-2 w-2 rounded-full bg-red-500"></span>
          </p>
        )}
        {estado === "Canceled" && (
          <p className="text-gray-500 flex items-center">
            Cancelada
            <span className="ml-2 h-2 w-2 rounded-full bg-gray-500"></span>
          </p>
        )}
        {estado === "Pilot" && (
          <p className="text-purple-500 flex items-center">
            Piloto
            <span className="ml-2 h-2 w-2 rounded-full bg-purple-500"></span>
          </p>
        )}
        {estado === "In Production" && (
          <p className="text-blue-500 flex items-center">
            En producción
            <span className="ml-2 h-2 w-2 rounded-full bg-blue-500"></span>
          </p>
        )}
        {estado === "Planned" && (
          <p className="text-yellow-500 flex items-center">
            Planificada
            <span className="ml-2 h-2 w-2 rounded-full bg-yellow-500"></span>
          </p>
        )}
      </div>
    </>
  );
}
