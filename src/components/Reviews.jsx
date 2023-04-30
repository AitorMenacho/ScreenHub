export default function Reviews({ reviews }) {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">Reseñas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews &&
          reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-stone-800 bg-blend-darken rounded-lg p-4"
            >
              <p className="text-white">{review.content}</p>
              <p className="text-white mt-3">
                <span className="font-bold">Autor:</span> {review.author}
              </p>
            </div>
          ))}
        {reviews && reviews.length === 0 && <p className="text-2xl">No hay reseñas</p>}
      </div>
    </div>
  );
}
