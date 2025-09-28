# URL Shortener App

A full-stack URL shortener built with:
- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose
- **Frontend:** React, TypeScript, Vite, Tailwind CSS

## Features

- Shorten long URLs to neat, shareable links
- View all shortened URLs and their click counts
- Delete URLs
- Responsive, modern UI
- Instant updates (no page reloads)

---

## Project Structure

```
urlshortnerapp/
  backend/   # Node.js + Express + MongoDB API
  client/    # React + Vite + Tailwind frontend
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

---

### 1. Clone the repository

```sh
git clone https://github.com/MeghanathMC/url-shortner-app.git
cd urlshortnerapp
```

---

### 2. Backend Setup

```sh
cd backend
npm install
```

- Create a `.env` file in `backend/` with:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5001
  ```

- Start the backend server (dev mode):
  ```sh
  npm run dev
  ```
  The server runs on [http://localhost:5001](http://localhost:5001) by default.

---

### 3. Frontend Setup

```sh
cd ../client
npm install
npm run dev
```

- The app runs on [http://localhost:5173](http://localhost:5173) by default.

---

## API Endpoints

- `POST   /api/shortUrl`        — Shorten a URL
- `GET    /api/getAllUrl`       — Get all shortened URLs
- `GET    /api/getShortUrl/:id` — Redirect to original URL and increment click count
- `DELETE /api/deleteUrl/:id`   — Delete a shortened URL

---

## Development Notes

- Backend uses TypeScript, ts-node, and nodemon for hot reloads.
- Frontend uses React, Vite, and Tailwind CSS.
- CORS is enabled for local development.
- All URLs are sorted by newest first.

---

## Customization

- Update MongoDB connection in `backend/.env`.
- Change allowed frontend origin in `backend/src/server.ts` (CORS config).
- Tweak UI in `client/src/components/`.

---

## License

MIT
