import React, { useState, useEffect } from "react";
import { Edit, Users, TrendingUp, Award, Activity } from "lucide-react";
import AdminNavbar from "../../components/AdminNavbar";

export default function AdminDashboard() {
  // Mock user data - replace with actual user data from your state management
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    profilePicture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "john.doe@akoladconcepts.com",
    phone: "+234 901 234 5678",
  });

  // Mock analytics data
  const [analytics, setAnalytics] = useState({
    totalAthletes: 247,
    newThisMonth: 23,
    activePrograms: 8,
    upcomingEvents: 5,
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({ ...user });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUser({ ...editForm });
    setIsEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-oswald w-full flex flex-col">
      <AdminNavbar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Welcome back,{" "}
                  <span className="text-primary">{user.firstName}!</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Here's what's happening with your athletes today.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                  <Activity className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Profile Information
              </h2>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Full Name
                  </label>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Username
                  </label>
                  <p className="text-lg font-semibold text-gray-900">
                    @{user.username}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Email
                  </label>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Phone
                  </label>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Total Athletes
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analytics.totalAthletes}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    All time scouted
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    New This Month
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analytics.newThisMonth}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    +12% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Active Programs
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analytics.activePrograms}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    Currently running
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div> */}
            {/* 
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Upcoming Events
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analytics.upcomingEvents}
                  </p>
                  <p className="text-sm text-yellow-600 font-medium">
                    Next 30 days
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div> */}
          </div>

          {/* Recent Activity */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                {
                  action: "New athlete registered",
                  name: "Sarah Johnson",
                  time: "2 hours ago",
                  type: "registration",
                },
                {
                  action: "Training session completed",
                  name: "Marcus Williams",
                  time: "4 hours ago",
                  type: "training",
                },
                {
                  action: "Event participation confirmed",
                  name: "Lisa Chen",
                  time: "6 hours ago",
                  type: "event",
                },
                {
                  action: "Profile updated",
                  name: "David Brown",
                  time: "1 day ago",
                  type: "update",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activity.type === "registration"
                        ? "bg-green-500"
                        : activity.type === "training"
                        ? "bg-blue-500"
                        : activity.type === "event"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600">{activity.name}</p>
                  </div>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Edit Profile</h3>
            </div>

            <div onSubmit={handleEditSubmit} className="p-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={editForm.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={editForm.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={editForm.username}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  name="profilePicture"
                  value={editForm.profilePicture}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleEditSubmit}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
