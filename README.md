# AKOLAD CONCEPTS

A modern sports development web application for **AKOLAD CONCEPTS** — a sports academy dedicated to nurturing athletic talent, organizing top-tier sports events, and empowering the next generation of champions.

---

## 🏆 About the Project

AKOLAD CONCEPTS provides a platform for athlete development, competitive event management, and community engagement. The web app consists of a public-facing website and a protected admin panel for managing athletes and academy operations.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 6](https://vitejs.dev/) | Build tool & dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Icons](https://react-icons.github.io/react-icons/) | Extended icon set |

---

## 📁 Project Structure

```
akolad/
├── public/                  # Static assets
├── src/
│   ├── assets/
│   │   └── images/          # Image assets (logos, gallery, highlights, etc.)
│   ├── components/
│   │   ├── Navbar.jsx        # Public site navigation bar
│   │   ├── AdminNavbar.jsx   # Admin panel navigation bar
│   │   └── Footer.jsx        # Site-wide footer
│   ├── pages/
│   │   ├── home.jsx          # Landing page
│   │   ├── about.jsx         # About page (vision, mission, achievements)
│   │   └── admin/
│   │       ├── login.jsx     # Admin login page
│   │       ├── dashboard.jsx # Admin dashboard (profile & analytics)
│   │       └── athletes.jsx  # Athletes management (CRUD)
│   ├── App.jsx               # Root component & route definitions
│   ├── AuthContext.jsx       # Authentication context & provider
│   ├── ProtectedRoute.jsx    # Route guard for admin pages
│   └── main.jsx              # App entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## ✨ Features

### Public Site
- **Home Page** — Hero section, highlights gallery, photo gallery, and contact form
- **About Page** — Academy story, vision & mission statements, and key achievements
- **Smooth Scroll** — Contact form scroll navigation from any page section

### Admin Panel
- **Protected Routes** — Token-based authentication guards all admin pages
- **Login Page** — Admin sign-in with credential validation
- **Dashboard** — Welcome screen with admin profile card and analytics overview (total athletes, new signups)
- **Athletes Management** — Full CRUD interface for managing athlete profiles including sport, position, contact info, and status

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd akolad

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will start at `http://localhost:5173` by default.

### Other Scripts

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🔐 Authentication

Authentication is currently handled via `localStorage` using an `authToken` and `userData` key. The `AuthContext` provider manages login/logout state across the app, and `ProtectedRoute` redirects unauthenticated users away from admin pages.

> **Note:** The current login implementation uses mock data. To connect to a real backend, update the `login` function in [`src/AuthContext.jsx`](./src/AuthContext.jsx) with your actual API endpoint.

---

## 📄 Pages & Routes

| Route | Component | Access |
|---|---|---|
| `/` | Home | Public |
| `/about` | About | Public |
| `/admin` | Login | Public |
| `/admin/dashboard` | Admin Dashboard | Protected |
| `/admin/athletes` | Athletes Management | Protected |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📬 Contact

For inquiries, reach out via the contact form on the website or email us at **info@akoladconcepts.com**.
