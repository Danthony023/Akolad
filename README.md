<p align="center">
  <img src="./src/assets/images/logo.png" alt="Akolad Concepts Logo" width="220"/>
</p>

<h1 align="center">AKOLAD CONCEPTS</h1>

<p align="center">
  A modern sports development web application — nurturing athletic talent, organizing top-tier sports events, and empowering the next generation of champions.
</p>

---

## 🏆 About the Project

AKOLAD CONCEPTS is a full-featured sports academy web platform with a public-facing site for fans, athletes, and visitors — plus a protected admin panel for managing the academy's operations and athlete roster.

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
├── public/                        # Static assets
├── src/
│   ├── assets/
│   │   ├── images/                # Image assets
│   │   │   ├── logo.png           # App logo
│   │   │   ├── home1.png          # Hero image
│   │   │   ├── highlight1-3.png   # Highlights section images
│   │   │   ├── gallery1-4.png     # Gallery images
│   │   │   ├── player1-2.png      # Athlete profile images
│   │   │   ├── liveevent.png      # Live events image
│   │   │   ├── pastevent.png      # Past events image
│   │   │   ├── rectangleDesign.png
│   │   │   └── rectangleDesign2.png
│   │   └── live_events.jsx        # Live events data/component asset
│   ├── components/
│   │   ├── Navbar.jsx             # Public site navigation bar
│   │   ├── AdminNavbar.jsx        # Admin panel navigation bar
│   │   ├── Footer.jsx             # Site-wide footer
│   │   └── live_events.jsx        # Live events shared component
│   ├── pages/
│   │   ├── home.jsx               # Landing page (hero, highlights, gallery, contact)
│   │   ├── about.jsx              # About page (vision, mission, achievements)
│   │   ├── athletes.jsx           # Public athletes listing page
│   │   ├── player.jsx             # Individual athlete profile page
│   │   ├── live_events.jsx        # Live & past events page
│   │   ├── gallery.jsx            # Photo gallery page
│   │   └── admin/
│   │       ├── login.jsx          # Admin login page
│   │       ├── dashboard.jsx      # Admin dashboard (profile & analytics)
│   │       └── athletes.jsx       # Athletes management (CRUD)
│   ├── App.jsx                    # Root component & route definitions
│   ├── AuthContext.jsx            # Authentication context & provider
│   ├── ProtectedRoute.jsx         # Route guard for admin pages
│   └── main.jsx                   # App entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## ✨ Features

### Public Site
- **Home Page** — Hero section with tagline, highlights grid, photo gallery preview, and contact form
- **About Page** — Academy story, vision & mission statements, and key achievements
- **Athletes Page** — Grid listing of all academy athletes with profile previews
- **Player Profile Page** — Individual athlete detail page with bio, achievements, and stats & performance
- **Live Events Page** — Upcoming events with date/time/location cards, plus a past events archive
- **Gallery Page** — Full photo gallery with hover animations and a contact CTA
- **Smooth Scroll** — Contact form scroll navigation triggered from any page

### Admin Panel *(Protected)*
- **Login Page** — Admin sign-in with credential validation
- **Dashboard** — Welcome screen with admin profile card and analytics (total athletes, new signups)
- **Athletes Management** — Full CRUD interface for managing athlete profiles (sport, position, contact, status)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Danthony023/Akolad.git
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

Authentication is handled via `localStorage` using an `authToken` and `userData` key. The `AuthContext` provider manages login/logout state across the app, and `ProtectedRoute` redirects unauthenticated users away from all `/admin/*` pages.

> **Note:** The current login implementation uses mock data. To connect to a real backend, update the `login` function in [`src/AuthContext.jsx`](./src/AuthContext.jsx) with your actual API endpoint.

---

## 📄 Pages & Routes

| Route | Component | Access |
|---|---|---|
| `/` | Home | Public |
| `/about` | About | Public |
| `/athletes` | Athletes Listing | Public |
| `/player` | Player Profile | Public |
| `/live-events` | Live Events | Public |
| `/gallery` | Gallery | Public |
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
