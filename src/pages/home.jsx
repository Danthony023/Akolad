import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home1 from "../assets/images/home1.png";
import RectangleDesign from "../assets/images/rectangleDesign.png";
import RectangleDesign2 from "../assets/images/rectangleDesign2.png";
import HighlightBg from "../assets/images/highlight-bg.png";
import Highlight1 from "../assets/images/highlight1.png";
import Highlight2 from "../assets/images/highlight2.png";
import Highlight3 from "../assets/images/highlight3.png";
import Gallery1 from "../assets/images/gallery1.png";
import Gallery2 from "../assets/images/gallery2.png";
import Gallery3 from "../assets/images/gallery3.png";
import Gallery4 from "../assets/images/gallery4.png";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contact = document.getElementById("contact-form");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToContact = () => {
    setTimeout(() => {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className="min-h-screen bg-white font-oswald w-full flex flex-col">
      <Navbar />
      <main className="flex-1 py-8 space-y-12">
        {/* section 1 */}
        <section className="grid grid-cols-2 xl:grid-cols-3 items-center gap-4 bg-white">
          <div className="col-span-2 flex space-x-16 items-center">
            <img src={RectangleDesign} alt="Logo" className=" w-auto" />
            <div className="space-y-4">
              <div>
                <h2 className="text-5xl font-bold mb-4">
                  <span className="text-primary">Building</span>
                  <span>{" Champions,"}</span>
                </h2>
                <h2 className="text-5xl font-bold mb-4">
                  <span>Inspiring</span>
                  <span className="text-primary">{" Excellence."}</span>
                </h2>
              </div>
              <p className="text-xl xl:w-[579px]">
                At AKOLAD CONCEPTS, we are committed to nurturing athletic
                talent, organizing top-tier sports events, and empowering the
                next generation of champions. Join us as we shape the future of
                sports.
              </p>
              <button
                onClick={scrollToContact}
                className="uppercase px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/80"
              >
                CONTACT US
              </button>
            </div>{" "}
          </div>
          <div className="my-20 xl:my-0 col-span-2 xl:col-span-1 flex flex-col items-end w-full">
            <div className="relative">
              {/* Background boxes */}
              <div className="absolute -top-14 right-0 bg-primary h-[202px] w-3/5 z-0" />
              <div className="absolute -bottom-18 -left-18 bg-primary h-[202px] w-[309px] z-0" />

              {/* Image with higher z-index */}
              <img
                src={Home1}
                alt="Home"
                className="h-auto w-auto relative z-10"
              />
            </div>
          </div>
        </section>
        <section
          className="relative bg-cover bg-center bg-no-repeat py-16 px-4"
          style={{
            backgroundImage: `url(${HighlightBg})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/80 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Highlights
            </h2>
            <p className="text-lg font-poppins text-center mb-12">
              A glimpse into our most exciting moments
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AKOLAD Star Wins Gold!",
                  description:
                    "One of our rising stars secured 1st place at the National Championship.",
                  image: Highlight1,
                },
                {
                  title: "New Sponsorship Deal Signed!",
                  description:
                    "AKOLAD CONCEPTS secures a major sponsorship for upcoming events..",
                  image: Highlight2,
                },
                {
                  title: "Inside AKOLAD’s Training Camp",
                  description:
                    "A sneak peek into our intensive training sessions.",
                  image: Highlight3,
                },
                {
                  title: "Inside AKOLAD’s Training Camp",
                  description:
                    "A sneak peek into our intensive training sessions.",
                  image: Highlight3,
                },
                {
                  title: "AKOLAD Star Wins Gold!",
                  description:
                    "One of our rising stars secured 1st place at the National Championship.",
                  image: Highlight1,
                },
                {
                  title: "New Sponsorship Deal Signed!",
                  description:
                    "AKOLAD CONCEPTS secures a major sponsorship for upcoming events..",
                  image: Highlight2,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-white rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover"
                    style={{ aspectRatio: "405 / 286" }}
                  />
                  <div className="mt-4 p-4 text-center font-poppins">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Gallery */}
        <section className="mx-auto px-16">
          <div className="relative max-w-7xl mx-auto text-primary">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute -bottom-10 -left-10 bg-primary h-[322px] w-[150px] z-0" />

                <img src={Gallery1} alt={"gallery"} className="relative z-10" />
              </div>
              <div className="space-y-2 h-full flex flex-col justify-between">
                <img src={Gallery2} alt={"gallery"} className="" />
                <img src={Gallery3} alt={"gallery"} className="" />
              </div>
              <div className="relative">
                <div className="absolute -top-10 -right-10 bg-primary h-[394px] w-[187px] z-0" />

                <img src={Gallery4} alt={"gallery"} className="relative z-10" />
              </div>
            </div>
            <p
              onClick={() => {}}
              className="text-lg font-bold text-center cursor-pointer mb-4 mt-4"
            >
              View More <ArrowRight className="inline-block font-bold" />
            </p>
          </div>
        </section>
        {/* Contact Form */}
        <section
          id="contact-form"
          className="relative w-full flex justify-center rounded-lg"
        >
          <img
            src={RectangleDesign2}
            alt="Logo"
            className="hidden xl:block absolute z-0 bottom-0 right-0 w-auto"
          />

          <div className="relative z-10 p-6 md:w-2/3 rounded-lg">
            <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
              Contact Us
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex space-x-4 w-full">
                <div className="w-full">
                  {/* <label className="block font-semibold mb-1">Email</label> */}
                  <input
                    type="email"
                    required
                    className="w-full p-3 bg-secondary-light rounded-xl focus:outline-none focus:ring"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full">
                  {/* <label className="block font-semibold mb-1">Phone Number</label> */}
                  <input
                    type="tel"
                    pattern="[\d+ ]{7,15}"
                    required
                    className="w-full p-3 bg-secondary-light rounded-xl focus:outline-none focus:ring"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div>
                {/* <label className="block font-semibold mb-1">Name</label> */}
                <input
                  type="text"
                  required
                  className="w-full p-3 bg-secondary-light rounded-xl focus:outline-none focus:ring"
                  placeholder="Your full name"
                />
              </div>
              <div>
                {/* <label className="block font-semibold mb-1">Message</label> */}
                <textarea
                  required
                  className="w-full p-3 bg-secondary-light rounded-xl focus:outline-none focus:ring"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary uppercase text-white font-bold px-6 py-2 rounded-xl hover:bg-opacity-90"
              >
                Contact Us
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
