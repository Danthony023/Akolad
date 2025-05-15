import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable Header component
function Header() {
    const navigate = useNavigate()
    return (
        <header className="bg-slate-800 text-white p-6">
            <nav className="mb-2 flex space-x-6">
                <div onClick={() => navigate("/")} className="font-bold hover:underline">Home</div>
                <div onClick={() => navigate("/about")} className="font-bold hover:underline">About</div>
                <div onClick={() => navigate("/players")} className="font-bold hover:underline">Players</div>
            </nav>
            <h1 className="text-3xl font-semibold m-0">Football Project</h1>
        </header>
    );
}

// Reusable Footer component
function Footer() {
    return (
        <footer className="bg-slate-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} Football Project. All rights reserved.</p>
        </footer>
    );
}

// Home Page
export default function Home() {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header />
            <main className="flex-1 p-8 bg-slate-100">
                <h2 className="text-2xl font-bold mb-4">Welcome to the Football Project!</h2>
                <p className="text-lg">
                    Explore player stats, team info, and more. Use the navigation above to get started.
                </p>
            </main>
            <Footer />
        </div>
    );
}
