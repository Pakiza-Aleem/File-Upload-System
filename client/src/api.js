import axios from "axios";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Get images
export const getImages = (search, favorite, sort) => {
  const params = {};

  if (search) params.search = search;
  if (favorite) params.favorite = favorite;
  if (sort) params.sort = sort;

  return axios
    .get(`${API}/images`, { params })
    .then((r) => r.data);
};

// Delete an image
export const deleteImage = (id) =>
  axios
    .delete(`${API}/images/${id}`)
    .then((r) => r.data);

// Toggle favorite
export const toggleFavorite = (id, isFavorite) =>
  axios
    .patch(`${API}/images/${id}/favorite`, {
      isFavorite,
    })
    .then((r) => r.data);

// Upload image
export const uploadImage = (
  file,
  title,
  description,
  tags
) => {
  const form = new FormData();

  form.append("image", file);
  form.append("title", title);
  form.append("description", description);
  form.append("tags", JSON.stringify(tags));

  return axios
    .post(`${API}/images`, form)
    .then((r) => r.data);
};

// Update image metadata
export const updateImage = (
  id,
  title,
  description,
  tags
) => {
  return axios
    .patch(`${API}/images/${id}`, {
      title,
      description,
      tags,
    })
    .then((r) => r.data);
};