import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function Sinopsis({ sinopsis, titulo }) {
  const [mostrarSinopsis, setMostrarSinopsis] = useState(false);
  const [mayor, setMayor] = useState(false);

  // Limitar la sinopsis a 300 caracteres
  const sinopsisAcortada =
    sinopsis && sinopsis.length > 250 && !mostrarSinopsis
      ? sinopsis.slice(0, 250).concat("...")
      : sinopsis;

  useEffect(() => {
    if (sinopsis && sinopsis.length > 250 && !mostrarSinopsis) {
      setMayor(true);
    }
  }, [sinopsis, mostrarSinopsis]);

  return (
    <>
      <p className="text-white">
        {sinopsisAcortada}
        {!mostrarSinopsis && mayor ? (
          <button
            onClick={() => setMostrarSinopsis(true)}
            className="ml-3 text-yellow-400 hover:underline"
          >
            Leer más
          </button>
        ) : null}
      </p>
      <Modal
        isOpen={mostrarSinopsis}
        onRequestClose={() => setMostrarSinopsis(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1000,
          },
          content: {
            backgroundColor: "rgb(12, 10, 9)",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "50%",
          },
        }}
      >
        <div className="bg-stone-950 text-white p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-white">{titulo}</h1>
          <p className="text-white">{sinopsis}</p>
        </div>
      </Modal>
    </>
  );
}
