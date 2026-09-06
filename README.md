<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F7F3EC,50:E8D8CC,100:B96548&height=220&section=header" width="100%"/>

<br>

# MERN GALLERY / File Upload System

### Upload. Organize. Discover.

<p>
  <strong>A full-stack image gallery for uploading, organizing, searching, and managing images.</strong>
</p>

<p>
  Built with React, Node.js, Express.js & MongoDB.
</p>

<br>

<img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-25221F?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=B96548&height=2&width=700"/>

</div>

---

## 📖 About

**MERN Gallery** is a full-stack image management application built as a practical MERN stack project.

It allows users to upload images along with metadata, browse their gallery, search and filter images, mark favorites, edit information, and delete images.

The project demonstrates how a **React frontend communicates with a Node.js + Express backend and MongoDB database** through REST APIs.

---

## ✨ Features

<table>
<tr>

<td width="33%" valign="top">

### 📤 Image Upload

* Upload images locally
* Add title & description
* Add multiple tags
* Form validation
* Store image metadata

</td>

<td width="33%" valign="top">

### 🔍 Search & Filter

* Search by title
* Search by description
* Search by tags
* Case-insensitive search
* Favorites-only filtering

</td>

<td width="33%" valign="top">

### ❤️ Favorites

* Mark images as favorite
* Remove from favorites
* Filter favorite images
* Persistent favorite state

</td>

</tr>

<tr>

<td width="33%" valign="top">

### ✏️ Edit

* Edit title
* Edit description
* Edit tags
* Update metadata
* Preserve image file

</td>

<td width="33%" valign="top">

### 🗑️ Delete

* Delete image
* Remove database record
* Remove local image file
* Confirmation before deletion

</td>

<td width="33%" valign="top">

### 🖼️ Image Viewer

* Full image preview
* Previous / next navigation
* Gallery navigation
* Close viewer

</td>

</tr>

<tr>

<td width="33%" valign="top">

### 📊 Sorting

* Recent images
* Oldest images
* Database-level sorting
* Dynamic results

</td>

<td width="33%" valign="top">

### 🏷️ Metadata

* Titles
* Descriptions
* Tags
* Tag normalization
* Creation dates

</td>

<td width="33%" valign="top">

### 📱 UI / UX

* Responsive layout
* Interactive cards
* Empty states
* Form states
* Accessible controls

</td>

</tr>
</table>

---

## 🧠 Concepts Used

<table>
<tr>

<td width="50%" valign="top">

### ⚛️ React

* Functional components
* Component composition
* Props
* `useState`
* `useEffect`
* Controlled forms
* Event handling
* Conditional rendering
* Dynamic lists
* State synchronization

</td>

<td width="50%" valign="top">

### 🌐 REST API

* RESTful routes
* GET requests
* POST requests
* PATCH requests
* DELETE requests
* Request bodies
* Query parameters
* HTTP status codes
* JSON responses
* Error handling

</td>

</tr>

<tr>

<td width="50%" valign="top">

### 🟢 Node.js & Express

* Express server
* Express Router
* Middleware
* Route handlers
* `express.json()`
* Static file serving
* Environment variables
* Async/await
* Server-side error handling

</td>

<td width="50%" valign="top">

### 🍃 MongoDB & Mongoose

* MongoDB integration
* Mongoose schemas
* Mongoose models
* CRUD operations
* Data validation
* Query filtering
* Regex search
* Sorting
* Document updates

</td>

</tr>

<tr>

<td width="50%" valign="top">

### 📁 File Handling

* `multipart/form-data`
* Multer
* Local file storage
* File naming
* Image URL generation
* File deletion
* Static uploads

</td>

<td width="50%" valign="top">

### 🔗 Frontend ↔ Backend

* Axios
* API abstraction
* Async requests
* Promise handling
* Loading states
* Error handling
* Data fetching
* UI updates after mutations

</td>

</tr>
</table>

---

## 🔌 REST API

|  Method  | Endpoint                   | Description                |
| :------: | :------------------------- | :------------------------- |
|  `POST`  | `/api/images`              | Upload image with metadata |
|   `GET`  | `/api/images`              | Fetch gallery images       |
|  `PATCH` | `/api/images/:id`          | Update image metadata      |
|  `PATCH` | `/api/images/:id/favorite` | Update favorite status     |
| `DELETE` | `/api/images/:id`          | Delete image               |

### 🔎 Query Parameters

**Search**

```http
GET /api/images?search=nature
```

**Favorites**

```http
GET /api/images?favorite=true
```

**Oldest First**

```http
GET /api/images?sort=oldest
```

**Combined Filters**

```http
GET /api/images?search=sunset&favorite=true&sort=recent
```

---

## 🔄 Application Flow

```text
                    USER
                      │
                      ▼
              ┌──────────────┐
              │   React UI   │
              └──────┬───────┘
                     │
                   Axios
                     │
                     ▼
              ┌──────────────┐
              │ Express API  │
              └──────┬───────┘
                     │
             ┌───────┴────────┐
             ▼                ▼
      ┌────────────┐    ┌────────────┐
      │  MongoDB   │    │   Multer   │
      │  Metadata  │    │ Image File │
      └────────────┘    └────────────┘
```

### Request Flow

```text
React Component
       ↓
API Function
       ↓
Axios Request
       ↓
Express Route
       ↓
Mongoose
       ↓
MongoDB
       ↓
JSON Response
       ↓
React State Update
       ↓
Updated UI
```

---

## 🖥️ Screenshots

### 🏠 Gallery

<p align="center">
  <img src="screenshots/gallery.png" alt="MERN Gallery Main Gallery" width="850"/>
</p>

### 📤 Upload Image

<p align="center">
  <img src="screenshots/upload.png" alt="MERN Gallery Upload Form" width="850"/>
</p>

### 🔍 Search & Filtering

<p align="center">
  <img src="screenshots/search.png" alt="MERN Gallery Search and Filtering" width="850"/>
</p>

### ❤️ Favorites

<p align="center">
  <img src="screenshots/favorites.png" alt="MERN Gallery Favorites" width="850"/>
</p>

### ✏️ Edit Image

<p align="center">
  <img src="screenshots/edit.png" alt="MERN Gallery Edit Form" width="850"/>
</p>

### 🖼️ Image Viewer

<p align="center">
  <img src="screenshots/viewer.png" alt="MERN Gallery Image Viewer" width="850"/>
</p>

---

## 🗂️ Project Structure

```text
mern-gallery-starter-v2/
│
├── client/
│   └── src/
│       ├── components/
│       │   ├── EditForm.jsx
│       │   ├── Gallery.jsx
│       │   ├── UploadForm.jsx
│       │   └── Viewer.jsx
│       │
│       ├── api.js
│       ├── App.jsx
│       └── index.css
│
├── server/
│   ├── middleware/
│   │   └── upload.js
│   │
│   ├── models/
│   │   └── Image.js
│   │
│   ├── routes/
│   │   └── imageRoutes.js
│   │
│   ├── uploads/
│   └── server.js
│
├── screenshots/
│
└── README.md
```

---

## 🚀 Setup Guide

### Requirements

| Requirement     | Technology           |
| :-------------- | :------------------- |
| Frontend        | React.js + Vite      |
| Backend         | Node.js + Express.js |
| Database        | MongoDB              |
| ODM             | Mongoose             |
| HTTP Client     | Axios                |
| File Upload     | Multer               |
| Version Control | Git + GitHub         |

### Installation

<details>
<summary><strong>Click to expand the installation guide</strong></summary>

<br>

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd mern-gallery-starter-v2
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> Keep your `.env` file private and add it to `.gitignore`.

### 5. Start the backend

```bash
cd server
npm run dev
```

Backend:

```text
http://localhost:5000
```

### 6. Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

Open the Vite development URL shown in your terminal.

</details>

---

## 🧪 API Testing

The REST API can be tested using **Postman** or another API testing tool.

### Upload Image

```http
POST /api/images
Content-Type: multipart/form-data
```

Form fields:

```text
image
title
description
tags
```

### Update Metadata

```http
PATCH /api/images/:id
Content-Type: application/json
```

```json
{
  "title": "Sunset",
  "description": "A beautiful evening sky",
  "tags": ["sunset", "sky", "nature"]
}
```

### Update Favorite

```http
PATCH /api/images/:id/favorite
Content-Type: application/json
```

```json
{
  "isFavorite": true
}
```

---

## 🎯 Key Implementation Areas

### CRUD Operations

```text
CREATE → Upload image + metadata
READ   → Fetch gallery images
UPDATE → Edit metadata / favorite state
DELETE → Remove image + database record
```

### Search

Images can be searched using:

* Title
* Description
* Tags

### Filtering

The backend dynamically builds filters from URL query parameters.

### Sorting

Images can be returned in:

* Recent → Newest first
* Oldest → Oldest first

### File Storage

Uploaded images are stored locally:

```text
server/
└── uploads/
```

MongoDB stores the image URL and metadata rather than the image binary itself.

---

## ⚠️ Current Limitations

This project is designed as a **learning and practice project**, so it has some limitations:

* Images are stored locally rather than in cloud storage.
* There is no user authentication or authorization.
* Gallery data is not separated between individual users.
* No cloud image optimization or CDN is implemented.
* No production deployment configuration is included.
* File storage depends on the local server environment.

These limitations are intentional according to the current project scope.

---

## 🔮 Future Improvements

Potential future upgrades include:

* 🔐 User authentication
* 👤 User-specific galleries
* ☁️ Cloud image storage
* 🖼️ Image compression and optimization
* 📄 Pagination / infinite scrolling
* 🏷️ Advanced tag management
* 🔗 Shareable image links
* 📱 Improved mobile experience
* 🚀 Production deployment
* 🔒 Stronger file validation and security

---

## 🛠️ Technology Stack

<p align="center">

<img src="https://img.shields.io/badge/React.js-Frontend-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-REST%20API-25221F?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
<img src="https://img.shields.io/badge/Multer-File%20Upload-8A2BE2?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

</p>

---

## 📚 Learning Outcomes

Through this project, I practiced:

* Building a complete MERN application
* Designing and consuming REST APIs
* Connecting React with Express
* Working with MongoDB and Mongoose
* Implementing CRUD functionality
* Handling file uploads with Multer
* Managing React state and forms
* Working with asynchronous operations
* Implementing search, filters, and sorting
* Structuring a full-stack project

---

<div align="center">

### 📸 Upload. Organize. Discover.

**MERN Gallery**

*React · Node.js · Express.js · MongoDB*

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F7F3EC,50:E8D8CC,100:B96548&height=120&section=footer" width="100%"/>

</div>
