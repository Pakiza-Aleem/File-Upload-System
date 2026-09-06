import { useState } from "react";

export default function UploadForm({ onUpload, busy }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const submit = () => {
    if (!file) {
      return alert("Please choose an image first.");
    }

    if (!title.trim()) {
      return alert("Please enter a title.");
    }

    // Convert "nature, sunset, beach" into an array
    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    onUpload(file, title, description, tagArray);

    // Clear the form
    setFile(null);
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="upload-bar">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button onClick={submit} disabled={busy}>
        {busy ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}