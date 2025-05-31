import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import TournamentImage from "../assets/images/pastevent.png";
import HandballImage from "../assets/images/liveevent.png";
import RectangleDesign from "../assets/images/RectangleDesign.png";
import Player2 from "../assets/images/player2.png";

import RectangleDesign2 from "../assets/images/RectangleDesign2.png";

const Player = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const profileData = {
    name: "Emmanuel Akolade",
    sport: "Handball",
    dateOfBirth: "21 March, 1998",
    nationality: "Nigerian",
  };

  const achievements = [
    {
      id: 1,
      year: "2024",
      title: "National Handball Championship - Gold Medalist",
    },
    {
      id: 2,
      year: "2023",
      title: "Pan Olympics Award - Elite West African Handball League",
    },
    {
      id: 3,
      year: "2022",
      title: "Represented Nigeria at the African Handball Nations Cup 2022",
    },
    {
      id: 4,
      year: "2021",
      title: "MVP (Most Valuable Player) - Lagos State Handball League 2021",
    },
  ];

  const stats = [
    { label: "Matches Played", value: "94" },
    { label: "Goals Scored", value: "127" },
    { label: "Assists", value: "73" },
    { label: "Blocks", value: "45" },
    { label: "Saves", value: "48" },
    { label: "Win Percentage", value: "78%" },
  ];

  const AthleteImage = Player2;
  return (
    <div className="min-h-screen bg-white relative font-oswald w-full flex flex-col">
      <Navbar />

      <main className="flex-1 md:py-8 space-y-12 md:mx-44">
        {/* Header Section */}
        <section className="bg-white">
          <img
            src={RectangleDesign}
            alt="Logo"
            className="col-span-1 hidden md:block w-auto -left-10 absolute z-[12]"
          />
          <div className="col-span-1 w-auto relative opacity-0" />
          <h4 className="text-4xl text-center mb-10 font-bold mb-4">
            <span>Meet</span>
            <span className="text-primary">{" Our Athletes"}</span>
          </h4>
          <div className="border-2 py-14 border-primary rounded-lg p-6 bg-white">
            <div className="flex  flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={AthleteImage}
                  alt={profileData.name}
                  className="w-32 h-32 rounded-full md:mr-44 object-cover border-4 border-gray-200"
                />
              </div>

              {/* Profile Information */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <div className="grid grid-cols-1 gap-3 text-lg">
                  <div className="flex flex-col md:flex-row">
                    <span className="font-semibold text-gray-700 md:w-40">
                      Name:
                    </span>
                    <span className="text-gray-900">{profileData.name}</span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="font-semibold text-gray-700 md:w-40">
                      Sport:
                    </span>
                    <span className="text-gray-900">{profileData.sport}</span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="font-semibold text-gray-700 md:w-40">
                      Date of Birth:
                    </span>
                    <span className="text-gray-900">
                      {profileData.dateOfBirth}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <span className="font-semibold text-gray-700 md:w-40">
                      Nationality:
                    </span>
                    <span className="text-gray-900">
                      {profileData.nationality}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <div className="border-2 border-primary rounded-lg p-12 bg-white">
            <h2 className="text-2xl font-bold text-center mb-6">
              Achievements
            </h2>

            <div className="space-y-12 md:w-fit mx-auto">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-semibold text-primary">
                      {achievement.year}
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      - {achievement.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats & Performance Section */}
        <section>
          <div className="border-2 py-14 border-primary rounded-lg p-6 bg-white">
            <h2 className="text-2xl font-bold text-center mb-6">
              Stats & Performance
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 text-sm">{stat.label}:</span>
                    <span className="font-bold text-lg text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="flex flex-col gap-3 mt-20 items-center">
          <span>
            Want to learn more about upcoming events? Get in touch with us
            today!
          </span>
          <button
            onClick={() => (window.location.href = "/")}
            className="uppercase px-4 py-2 shadow-lg bg-primary text-white rounded-xl hover:bg-primary/80"
          >
            CONTACT US
          </button>
        </div>
      </main>

      <img
        src={RectangleDesign2}
        alt="Logo"
        className="hidden xl:block absolute z-0 bottom-0 right-0 w-auto"
      />
      <Footer />
    </div>
  );
};

export default Player;
