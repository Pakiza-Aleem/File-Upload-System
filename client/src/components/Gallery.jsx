export default function Gallery({
  images,
  onOpen,
  onDelete,
  onFavorite,
  onEdit,
}) {
  if (!images.length) {
    return (
      <p className="empty">
        No images yet. Upload your first one.
      </p>
    );
  }

  return (
    <div className="grid">
      {images.map((img, i) => (
        <div className="card" key={img._id}>
          
          {/* Image */}
          <img
            src={img.imageUrl}
            alt={img.title || "Gallery image"}
            onClick={() => onOpen(i)}
          />

          {/* Image information */}
          <div className="card-info">
            <h3>
              {img.title || "Untitled image"}
            </h3>

            {img.description && (
              <p>{img.description}</p>
            )}

            {img.tags?.length > 0 && (
              <div className="tags">
                {img.tags.map((tag, index) => (
                  <span key={index}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Favorite */}
          <button
            className="favorite"
            onClick={() =>
              onFavorite(
                img._id,
                !img.isFavorite
              )
            }
            aria-label={
              img.isFavorite
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            {img.isFavorite ? "❤️" : "♡"}
          </button>

          {/* Edit */}
          <button
            className="edit"
            onClick={() => onEdit(img)}
          >
            Edit
          </button>

          {/* Delete */}
          <button
            className="delete"
            onClick={() => onDelete(img._id)}
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  );
}