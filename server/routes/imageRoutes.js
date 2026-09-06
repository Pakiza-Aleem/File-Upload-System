import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Image from "../models/Image.js";
import upload from "../middleware/upload.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(__dirname, "..", "uploads");

const router = express.Router();

// POST /api/images
// Receive the file + metadata, save the file, and store its information in MongoDB
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "No image file received" });
    }

    const base =
      process.env.BASE_URL ||
      `${req.protocol}://${req.get("host")}`;

    const imageUrl = `${base}/uploads/${req.file.filename}`;

    const { title, description, tags } = req.body;

    const image = await Image.create({
      imageUrl,
      title,
      description,
      tags: tags ? JSON.parse(tags) : [],
    });

    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// GET /api/images
// Get images with optional search, favorite filter, and sorting
router.get("/", async (req, res) => {
  try {
    const { search, favorite, sort } = req.query;

    const filter = {};

    // Search title, description, or tags
    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
        {
          tags: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Show only favorites
    if (favorite === "true") {
      filter.isFavorite = true;
    }

    // Sorting
    const sortOrder =
      sort === "oldest" ? 1 : -1;

    const images = await Image.find(filter).sort({
      createdAt: sortOrder,
    });

    res.json(images);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// PATCH /api/images/:id
// Update image metadata
router.patch("/:id", async (req, res) => {
  try {
    const {
      title,
      description,
      tags,
    } = req.body;

    // Update ONLY metadata
    // imageUrl stays unchanged
    const image = await Image.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        tags,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!image) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    res.json(image);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// PATCH /api/images/:id/favorite
// Update favorite status
router.patch(
  "/:id/favorite",
  async (req, res) => {
    try {
      const { isFavorite } = req.body;

      if (typeof isFavorite !== "boolean") {
        return res.status(400).json({
          message:
            "isFavorite must be true or false",
        });
      }

      const image =
        await Image.findByIdAndUpdate(
          req.params.id,
          { isFavorite },
          {
            new: true,
            runValidators: true,
          }
        );

      if (!image) {
        return res.status(404).json({
          message: "Image not found",
        });
      }

      res.json(image);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// DELETE /api/images/:id
// Remove the MongoDB record and image file
router.delete("/:id", async (req, res) => {
  try {
    const deleted =
      await Image.findByIdAndDelete(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    const filename =
      deleted.imageUrl.split("/uploads/")[1];

    if (filename) {
      fs.promises
        .unlink(
          path.join(uploadDir, filename)
        )
        .catch(() => {});
    }

    res.json({
      message: "Deleted",
      id: req.params.id,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;