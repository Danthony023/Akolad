import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Eye,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import AdminNavbar from "../../components/AdminNavbar";

// Mock Navbar component
const Navbar = () => (
  <nav className="bg-white shadow-md px-8 py-4">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-primary">AKOLAD CONCEPTS</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700">Athletes Management</span>
      </div>
    </div>
  </nav>
);

export default function AthletesAdmin() {
  const [athletes, setAthletes] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@email.com",
      phone: "+234 901 234 5678",
      dateOfBirth: "1995-03-15",
      sport: "Football",
      position: "Midfielder",
      height: "5'10\"",
      weight: "75kg",
      nationality: "Nigerian",
      state: "Lagos",
      experience: "5 years",
      achievements: "State Championship Winner 2023",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      status: "Active",
      dateJoined: "2023-01-15",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@email.com",
      phone: "+234 902 345 6789",
      dateOfBirth: "1998-07-22",
      sport: "Basketball",
      position: "Point Guard",
      height: "5'8\"",
      weight: "65kg",
      nationality: "Nigerian",
      state: "Abuja",
      experience: "3 years",
      achievements: "Regional MVP 2024",
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616b332c42c?w=150&h=150&fit=crop&crop=face",
      status: "Active",
      dateJoined: "2023-06-20",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Adebayo",
      email: "michael.adebayo@email.com",
      phone: "+234 903 456 7890",
      dateOfBirth: "1996-11-08",
      sport: "Athletics",
      position: "Sprinter",
      height: "6'2\"",
      weight: "80kg",
      nationality: "Nigerian",
      state: "Ogun",
      experience: "7 years",
      achievements: "National Record Holder 100m",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "Active",
      dateJoined: "2022-09-10",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    sport: "",
    position: "",
    height: "",
    weight: "",
    nationality: "",
    state: "",
    experience: "",
    achievements: "",
    profileImage: "",
    status: "Active",
  });

  const sports = [
    "Football",
    "Basketball",
    "Athletics",
    "Tennis",
    "Swimming",
    "Boxing",
    "Wrestling",
    "Volleyball",
  ];
  const nigerianStates = [
    "Lagos",
    "Abuja",
    "Kano",
    "Ogun",
    "Rivers",
    "Kaduna",
    "Oyo",
    "Delta",
    "Imo",
    "Anambra",
  ];

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      sport: "",
      position: "",
      height: "",
      weight: "",
      nationality: "Nigerian",
      state: "",
      experience: "",
      achievements: "",
      profileImage: "",
      status: "Active",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAthlete = () => {
    const newAthlete = {
      ...formData,
      id: athletes.length + 1,
      dateJoined: new Date().toISOString().split("T")[0],
    };
    setAthletes((prev) => [...prev, newAthlete]);
    setIsAddModalOpen(false);
    resetForm();
  };

  const handleEditAthlete = () => {
    setAthletes((prev) =>
      prev.map((athlete) =>
        athlete.id === selectedAthlete.id
          ? {
              ...formData,
              id: selectedAthlete.id,
              dateJoined: selectedAthlete.dateJoined,
            }
          : athlete
      )
    );
    setIsEditModalOpen(false);
    setSelectedAthlete(null);
    resetForm();
  };

  const handleDeleteAthlete = (id) => {
    if (window.confirm("Are you sure you want to delete this athlete?")) {
      setAthletes((prev) => prev.filter((athlete) => athlete.id !== id));
    }
  };

  const openEditModal = (athlete) => {
    setSelectedAthlete(athlete);
    setFormData(athlete);
    setIsEditModalOpen(true);
  };

  const openViewModal = (athlete) => {
    setSelectedAthlete(athlete);
    setIsViewModalOpen(true);
  };

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.sport.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSport = sportFilter === "" || athlete.sport === sportFilter;

    return matchesSearch && matchesSport;
  });

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const AthleteForm = ({ onSubmit, submitLabel }) => (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth *
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sport *
          </label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Sport</option>
            {sports.map((sport) => (
              <option key={sport} value={sport}>
                {sport}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience
          </label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="e.g., 5 years"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height
          </label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            placeholder="e.g., 5'10&quot;"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight
          </label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder="e.g., 75kg"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nationality
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select State</option>
            {nigerianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profile Image URL
        </label>
        <input
          type="url"
          name="profileImage"
          value={formData.profileImage}
          onChange={handleInputChange}
          placeholder="https://example.com/image.jpg"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Achievements
        </label>
        <textarea
          name="achievements"
          value={formData.achievements}
          onChange={handleInputChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="List notable achievements..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={() => {
            setIsAddModalOpen(false);
            setIsEditModalOpen(false);
            resetForm();
          }}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="flex-1 px-4 py-2 bg-primary text-white rounded-xl hover:opacity-50 transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 w-full flex flex-col">
      <AdminNavbar />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Athletes Management
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage your scouted athletes
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:opacity-50 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Athlete
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search athletes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={sportFilter}
                  onChange={(e) => setSportFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[150px]"
                >
                  <option value="">All Sports</option>
                  {sports.map((sport) => (
                    <option key={sport} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Athletes Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Athlete
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Sport
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Age
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAthletes.map((athlete) => (
                    <tr key={athlete.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              athlete.profileImage ||
                              `https://ui-avatars.com/api/?name=${athlete.firstName}+${athlete.lastName}&background=007bff&color=fff`
                            }
                            alt={`${athlete.firstName} ${athlete.lastName}`}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">
                              {athlete.firstName} {athlete.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {athlete.position}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {athlete.sport}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {athlete.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {athlete.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {calculateAge(athlete.dateOfBirth)} years
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            athlete.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : athlete.status === "Inactive"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {athlete.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openViewModal(athlete)}
                            className="p-2 text-primary hover:bg-blue-100 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openEditModal(athlete)}
                            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                            title="Edit Athlete"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteAthlete(athlete.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Delete Athlete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredAthletes.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg">No athletes found</div>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-2xl font-bold text-primary">
                {athletes.length}
              </div>
              <div className="text-gray-600">Total Athletes</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-2xl font-bold text-green-600">
                {athletes.filter((a) => a.status === "Active").length}
              </div>
              <div className="text-gray-600">Active Athletes</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(athletes.map((a) => a.sport)).size}
              </div>
              <div className="text-gray-600">Sports Covered</div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Athlete Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Athlete"
      >
        <AthleteForm onSubmit={handleAddAthlete} submitLabel="Add Athlete" />
      </Modal>

      {/* Edit Athlete Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Athlete"
      >
        <AthleteForm
          onSubmit={handleEditAthlete}
          submitLabel="Update Athlete"
        />
      </Modal>

      {/* View Athlete Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Athlete Details"
      >
        {selectedAthlete && (
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-6">
              <img
                src={
                  selectedAthlete.profileImage ||
                  `https://ui-avatars.com/api/?name=${selectedAthlete.firstName}+${selectedAthlete.lastName}&background=007bff&color=fff`
                }
                alt={`${selectedAthlete.firstName} ${selectedAthlete.lastName}`}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedAthlete.firstName} {selectedAthlete.lastName}
                </h3>
                <p className="text-lg text-gray-600">
                  {selectedAthlete.sport} - {selectedAthlete.position}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      selectedAthlete.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : selectedAthlete.status === "Inactive"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {selectedAthlete.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{selectedAthlete.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{selectedAthlete.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>
                    Age: {calculateAge(selectedAthlete.dateOfBirth)} years
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    {selectedAthlete.state}, {selectedAthlete.nationality}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-700">Height:</span>
                  <span className="ml-2">{selectedAthlete.height}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Weight:</span>
                  <span className="ml-2">{selectedAthlete.weight}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Experience:
                  </span>
                  <span className="ml-2">{selectedAthlete.experience}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Joined:</span>
                  <span className="ml-2">
                    {new Date(selectedAthlete.dateJoined).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {selectedAthlete.achievements && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Achievements:
                </h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {selectedAthlete.achievements}
                </p>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-6 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
