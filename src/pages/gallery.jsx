import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import TournamentImage from "../assets/images/pastevent.png";
import HandballImage from "../assets/images/liveevent.png";
import RectangleDesign from "../assets/images/RectangleDesign.png";
import Highlight2 from "../assets/images/highlight2.png";
import Highlight3 from "../assets/images/highlight3.png";
import Gallery1 from "../assets/images/gallery1.png";
import Gallery2 from "../assets/images/gallery2.png";
import Gallery3 from "../assets/images/gallery3.png";
import Gallery4 from "../assets/images/gallery4.png";
import Player1 from "../assets/images/highlight3.png";
import Player2 from "../assets/images/highlight3.png";

import RectangleDesign2 from "../assets/images/RectangleDesign2.png";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: Highlight2,
      alt: "Handball match action",
    },
    {
      id: 2,
      src: TournamentImage,
      alt: "Team celebration",
    },
    {
      id: 3,
      src: Highlight2,
      alt: "Trophy ceremony",
    },
    {
      id: 4,
      src: Highlight3,
      alt: "Player in action",
    },
    {
      id: 5,
      src: Gallery1,
      alt: "Championship trophy",
    },
    {
      id: 6,
      src: Gallery2,
      alt: "Team training",
    },
    {
      id: 7,
      src: Highlight2,
      alt: "Match highlights",
    },
    {
      id: 8,
      src: Gallery3,
      alt: "Player portrait",
    },
    {
      id: 9,
      src: Highlight2,
      alt: "Game action",
    },
    {
      id: 10,
      src: Gallery4,
      alt: "Team celebration",
    },
    {
      id: 11,
      src: Highlight2,
      alt: "Victory moment",
    },
    {
      id: 12,
      src: Highlight2,
      alt: "Player headshot",
    },
    {
      id: 13,
      src: Player2,
      alt: "Match action",
    },
    {
      id: 14,
      src: Highlight2,
      alt: "Team group",
    },
    {
      id: 15,
      src: Player1,
      alt: "Championship moment",
    },
    {
      id: 16,
      src: Highlight2,
      alt: "Athletic performance",
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

          <section className="bg-white">
            <div className="col-span-2 flex justify-center items-center md:mt-20">
              <div className="space-y-4 text-center max-w-4xl mx-auto px-4">
                <div>
                  <h4 className="text-4xl font-bold mb-4">
                    <span>Our </span>
                    <span className="text-primary">Gallery</span>
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-20">
                    Step into the world of AKOLAD CONCEPTS through our gallery,
                    where passion, dedication, and excellence come to life.
                    Explore snapshots of intense training sessions, thrilling
                    match-day moments, proud victories, and the relentless
                    pursuit of greatness by our athletes. Every image tells a
                    story of commitment, teamwork, and the journey to success!{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Grid Section */}
          <section className="px-4 md:px-36">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
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

export default Gallery;
