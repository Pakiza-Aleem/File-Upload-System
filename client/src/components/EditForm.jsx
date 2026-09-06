import { useState } from "react";

export default function EditForm({
  image,
  onSave,
  onCancel,
}) {
  const [title, setTitle] = useState(
    image.title || ""
  );

  const [description, setDescription] = useState(
    image.description || ""
  );

  const [tags, setTags] = useState(
    image.tags?.join(", ") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert:
    // "nature, sky, sunset"
    // into:
    // ["nature", "sky", "sunset"]

    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean);

    onSave(
      image._id,
      title,
      description,
      tagArray
    );
  };

  return (
    <div className="edit-form">
      <h2>Edit Image</h2>

      <form onSubmit={handleSubmit}>

        {/* Title */}
        <label>
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          maxLength={80}
          required
        />

        {/* Description */}
        <label>
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          maxLength={240}
        />

        {/* Tags */}
        <label>
          Tags
        </label>

        <input
          type="text"
          value={tags}
          onChange={(e) =>
            setTags(e.target.value)
          }
          placeholder="nature, sky, sunset"
        />

        {/* Buttons */}
        <div className="edit-actions">

          <button type="submit">
            Save Changes
          </button>

          <button
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
}