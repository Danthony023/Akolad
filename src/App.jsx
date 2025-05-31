import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/admin/login";
import AdminDashboard from "./pages/admin/dashboard";
import AthletesAdmin from "./pages/admin/athletes";
import Athletes from "./pages/athletes";
import LiveEvents from "./pages/live_events";
import Gallery from "./pages/gallery";
import Player from "./pages/player";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/live-events" element={<LiveEvents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/player" element={<Player />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Add more protected routes as needed */}
        <Route
          path="/admin/athletes"
          element={
            <ProtectedRoute>
              <AthletesAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
