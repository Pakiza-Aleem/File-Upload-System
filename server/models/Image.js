import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },

  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },

  tags: {
    type: [String],
    default: [],
  },

  isFavorite: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Image", imageSchema);