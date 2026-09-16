import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import Player1 from "../assets/images/player1.png";
import Player2 from "../assets/images/player2.png";
import RectangleDesign from "../assets/images/rectangleDesign.png";

import RectangleDesign2 from "../assets/images/rectangleDesign2.png";

const Athletes = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white relative font-oswald w-full flex flex-col">
      <Navbar />
      <main className="flex-1 md:py-8 space-y-12">
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
                  <span>Meet</span>
                  <span className="text-primary">{" Our Athletes"}</span>
                </h4>
                <p>
                  Discover the rising stars and seasoned professionals shaping
                  the future of sports. {"\n"}Explore their profiles,
                  achievements, and career highlights
                </p>
              </div>
            </div>{" "}
          </div>
        </section>

        <div className="w-full px-20 items-center justify-center  flex">
          <div className="px-20 gap-30 grid grid-cols-3">
            {Array(12)
              .fill(0)
              .map((r, i) => (
                <div
                  onClick={() => (window.location.href = "/player")}
                  className="flex cursor-pointer items-center justify-center flex-col space-y-4 hover:scale-105 transition-transform duration-300"
                >
                  {" "}
                  <img
                    src={i % 2 ? Player1 : Player2}
                    alt="Logo"
                    className="rounded-full h-44 w-44 "
                  />
                  <div className="flex gap-1">
                    {i % 2 ? (
                      <>
                        <span>John Cooper</span>
                        <span>-</span>
                        <span>Goalkeeper</span>
                      </>
                    ) : (
                      <>
                        <span>Emmanuel Akolade</span>
                        <span>-</span>
                        <span>Left Winger</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-20 items-center">
          Want to learn more about our athletes? Get in touch with us today!
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

export default Athletes;
