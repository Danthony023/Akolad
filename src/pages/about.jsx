import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import Home1 from "../assets/images/home1.png";
import RectangleDesign from "../assets/images/rectangleDesign.png";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const achievements = [
    {
      title: "200+ Athletes Trained",
      description:
        "Developed and mentored over 200 athletes across multiple sports disciplines.",
    },
    {
      title: "Partnerships with Top Sports Bodies",
      description:
        "We collaborate with recognized institutions to offer world-class training.",
    },
    {
      title: "50+ Championship Titles",
      description:
        "Our athletes have won over 50 medals in various regional and national competitions.",
    },
    {
      title: "200+ Athletes Trained",
      description:
        "Developed and mentored over 200 athletes across multiple sports disciplines.",
    },
    {
      title: "Partnerships with Top Sports Bodies",
      description:
        "We collaborate with recognized institutions to offer world-class training.",
    },
    {
      title: "50+ Championship Titles",
      description:
        "Our athletes have won over 50 medals in various regional and national competitions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-oswald w-full flex flex-col">
      <Navbar />
      <main className="flex-1 md:py-8 space-y-12">
        <section className="grid md:grid-cols-7 items-centers gap-12 bg-white">
          <img
            src={RectangleDesign}
            alt="Logo"
            className="col-span-1 hidden md:block w-auto -left-10 absolute z-[12]"
          />
          <div className="col-span-1 w-auto relative opacity-0" />

          <div className="md:mt-10 col-span-3 flex flex-col items-end w-full">
            <div className="relative">
              <div className="md:h-3/4 rounded-2xl w-auto overflow-hidden">
                <img
                  src={Home1}
                  alt="Home"
                  className="h-auto w-auto object-fill rounded-2xl p-2 relative z-[13]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex space-x-16 p-4 items-centers md:mt-20">
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span>About</span>
                  <span className="text-primary">{" the Academy."}</span>
                </h2>
              </div>
              <p className="text-md xl:w-[400px]">
                At AKOLAD CONCEPTS, we are dedicated to shaping the future of
                sports by nurturing talent, organizing world-class athletic
                events, and providing a platform for athletes to showcase their
                skills. Our mission is to inspire excellence, foster discipline,
                and create opportunities for aspiring sports professionals.
                Through structured training programs, competitive events, and a
                commitment to athlete development, we strive to build champions
                both on and off the field. Whether you're an aspiring athlete, a
                sports enthusiast, or a sponsor looking to support the next
                generation of talent, AKOLAD CONCEPTS is the home of passion,
                perseverance, and performance.
              </p>
            </div>{" "}
          </div>
        </section>
        <div className="relative mt-32 ">
          <div className="relative pt-8  pb-16 w-full mx-auto flex justify-start ">
            <div className="absolute -top-10 left-1/8">
              <h4 className="text-4xl font-bold mb-4">
                <span>Our</span>
                <span className="text-primary">{" Vision"}</span>
              </h4>
            </div>
            <div className="relative ">
              <div className="relative bg-red-200 py-18 rounded-r-[5rem] p-12 md:pl-52 max-w-4xl z-10">
                <p className="text-gray-800 leading-relaxed text-md !z-10">
                  To be a leading sports development academy that nurtures and
                  empowers athletes to reach their full potential, inspiring
                  excellence and global recognition in the world of sports
                </p>
              </div>
              <div className="absolute -top-8 md:-right-10 right-0 bg-primary h-[102px] w-[302px] -z-0" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative pt-8 md:pt-0  pb-16 w-full mx-auto flex justify-end ">
            <div className="absolute -top-12 right-20">
              <h4 className="text-4xl font-bold mb-4">
                <span>Our</span>
                <span className="text-primary">{" Mission"}</span>
              </h4>
            </div>
            <div className="relative ">
              <div className="relative py-18 bg-red-200 rounded-l-[5rem] p-12 max-w-4xl !z-10">
                <p className="text-gray-800 leading-relaxed text-md !z-10">
                  At<span className="font-bold"> ACOLAD CONCEPTS</span>, our
                  mission is to provide a structured and professional platform
                  for athlete development, teamwork, and resilience. We are
                  committed to organizing competitive events that showcase and
                  refine athletic talent while creating opportunities for
                  athletes to connect with scouts, sponsors, and global sports
                  communities.
                </p>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary h-[102px] w-[302px] -z-0" />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={RectangleDesign}
            alt="Logo"
            className="-right-10 z-2 absolute rotate-180"
          />
          <div className="max-w-5xl mx-auto p-20 bg-white">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">
              Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-20">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <span className="text-primary text-2xl">★</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 w-4/5">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
