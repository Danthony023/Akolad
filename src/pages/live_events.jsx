import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import TournamentImage from "../assets/images/pastevent.png";
import HandballImage from "../assets/images/liveevent.png";
import RectangleDesign from "../assets/images/rectangleDesign.png";

import RectangleDesign2 from "../assets/images/rectangleDesign2.png";

const LiveEvents = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Handball Finals",
      date: "15/05, 2024",
      time: "3:45 PM",
      location: "Lagos, Nigeria",
      image: HandballImage,
    },
    {
      id: 2,
      title: "Handball Finals",
      date: "15/05, 2024",
      time: "3:45 PM",
      location: "Lagos, Nigeria",
      image: HandballImage,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Lagos Handball Tournaments",
      date: "15/05, 2024",
      location: "Lagos, Nigeria",
      image: TournamentImage,
    },
    {
      id: 2,
      title: "Lagos Handball Tournaments",
      date: "15/05, 2024",
      location: "Lagos, Nigeria",
      image: TournamentImage,
    },
    {
      id: 3,
      title: "Lagos Handball Tournaments",
      date: "15/05, 2024",
      location: "Lagos, Nigeria",
      image: TournamentImage,
    },
  ];

  return (
    <div className="min-h-screen bg-white relative font-oswald w-full flex flex-col">
      <Navbar />

      <main className="flex-1 md:py-8 space-y-12">
        {/* Header Section */}
        <section className="bg-white">
          <img
            src={RectangleDesign}
            alt="Logo"
            className="col-span-1 hidden md:block w-auto -left-10 absolute z-[12]"
          />
          <div className="col-span-1 w-auto relative opacity-0" />
          <div className="col-span-2 flex justify-center items-center md:mt-20">
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-4xl font-bold mb-4">
                  <span className="text-primary">Live Events</span>
                  <span className="text-black">
                    {" "}
                    - Stay Updated on the Action!
                  </span>
                </h4>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the thrill of the game with AKOLAD CONCEPTS! Stay
                  tuned for upcoming competitions, training sessions, and
                  special events. Don’t miss a moment—watch live, follow
                  updates, and relive past highlights!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="px-4 md:px-44">
          <h3 className="text-2xl font-bold text-primary mb-8">
            Upcoming Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden "
              >
                <div className="relative">
                  <img
                    src={HandballImage}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="p-6 bg-red-100/50">
                  <h5 className="font-bold text-lg mb-4">{event.title}</h5>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span className="font-medium">Date:</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Time:</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section className="px-4 md:px-44">
          <h3 className="text-2xl font-bold text-red-600 mb-8">Past Events</h3>

          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="flex gap-4 bg-white rounded-lg shadow-md overflow-hidden border-b border-primary"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-54 object-cover flex-shrink-0"
                />

                <div className="flex-1 p-4">
                  <h5 className="font-bold text-lg mb-4">{event.title}</h5>

                  <div className="space-y-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Date:</span> {event.date}
                    </div>
                    <div>
                      <span className="font-medium">Location:</span>{" "}
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            className="uppercase px-4 py-2 shadow-lg bg-primary text-white rounded-xl hover:bg-red-600/80"
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

export default LiveEvents;

