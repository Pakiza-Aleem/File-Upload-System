import { useEffect, useState } from "react";

import {
  getImages,
  deleteImage,
  uploadImage,
  toggleFavorite,
  updateImage,
} from "./api";

import UploadForm from "./components/UploadForm";
import Gallery from "./components/Gallery";
import Viewer from "./components/Viewer";
import EditForm from "./components/EditForm";

export default function App() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(null);
  const [busy, setBusy] = useState(false);

  // Search, favorite filter, and sorting
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [sort, setSort] = useState("recent");

  // Image currently being edited
  const [editingImage, setEditingImage] = useState(null);

  // Load images
  const load = () => {
    getImages(search, favorite, sort)
      .then(setImages)
      .catch(console.error);
  };

  // Reload when search, favorite filter, or sorting changes
  useEffect(() => {
    load();
  }, [search, favorite, sort]);

  // Upload
  const handleUpload = async (
    file,
    title,
    description,
    tags
  ) => {
    setBusy(true);

    try {
      await uploadImage(
        file,
        title,
        description,
        tags
      );

      await load();
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setBusy(false);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this image?")) return;

    try {
      await deleteImage(id);

      setCurrent(null);

      setImages((prev) =>
        prev.filter((img) => img._id !== id)
      );
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  };

  // Favorite
  const handleFavorite = async (
    id,
    isFavorite
  ) => {
    try {
      await toggleFavorite(
        id,
        isFavorite
      );

      await load();
    } catch (err) {
      alert(
        "Failed to update favorite: " +
          err.message
      );
    }
  };

  // Open edit form
  const handleEdit = (image) => {
    setEditingImage(image);
  };

  // Save edited metadata
  const handleSaveEdit = async (
    id,
    title,
    description,
    tags
  ) => {
    try {
      await updateImage(
        id,
        title,
        description,
        tags
      );

      // Close edit form
      setEditingImage(null);

      // Reload gallery
      await load();
    } catch (err) {
      alert(
        "Failed to update image: " +
          err.message
      );
    }
  };

  return (
    <div className="app">

      {/* Header */}
      <header>
        <h1>MERN File Upload System</h1>
        <span>
          {images.length} images
        </span>
      </header>

      {/* Upload */}
      <UploadForm
        onUpload={handleUpload}
        busy={busy}
      />

      {/* Search + Favorite + Sort */}
      <div className="controls">

        <input
          type="text"
          placeholder="Search images..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button
          onClick={() =>
            setFavorite(!favorite)
          }
        >
          {favorite
            ? "❤️ Favorites"
            : "☆ All photos"}
        </button>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="recent">
            Most recent
          </option>

          <option value="oldest">
            Oldest first
          </option>
        </select>

      </div>

      {/* Gallery */}
      <Gallery
        images={images}
        onOpen={setCurrent}
        onDelete={handleDelete}
        onFavorite={handleFavorite}
        onEdit={handleEdit}
      />

      {/* Edit Form */}
      {editingImage && (
        <EditForm
          image={editingImage}
          onSave={handleSaveEdit}
          onCancel={() =>
            setEditingImage(null)
          }
        />
      )}

      {/* Viewer */}
      {current !== null && (
        <Viewer
          images={images}
          index={current}
          onClose={() =>
            setCurrent(null)
          }
          onChange={setCurrent}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
}