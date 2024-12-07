// import React from "react";
// import img from "../assets/Screenshot 2024-11-11 at 10.52.56 AM.png"; // Replace with the actual image path
// const About: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative flex flex-col items-center text-center px-4 py-16 md:px-8 md:py-24">
     
//         <h1 className="text-4xl font-extrabold text-black md:text-6xl mt-4">
//           Empowering Innovation, Shaping the Future
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg md:text-xl">
//           At GenuIQ Labs, we’re committed to driving technological transformation, empowering businesses, and creating a lasting impact.
//         </p>

//         {/* Team Section */}
//         <div className="mt-12 w-2/3">
//           <img
//             src={img} // Replace with the actual image path
//             alt="Our Team"
//             className="rounded-lg w-full object-cover shadow-md"
//           />
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="bg-white  py-16 px-4 md:py-24 md:px-8">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-sm font-semibold text-gray-500 mb-2">
//             MISSION & VISION
//           </h2>
//           <h3 className="text-3xl font-bold text-black md:text-4xl">
//             Our Mission: Building Solutions That Inspire
//           </h3>
//           <p className="mt-6 text-gray-600 text-lg leading-relaxed">
//             We aim to empower organizations with cutting-edge AI and digital solutions, enabling them to excel in an ever-evolving technological landscape. Our mission is to simplify complexity, enhance productivity, and deliver unmatched value.
//           </p>
//           <h3 className="text-3xl font-bold text-black mt-12 md:text-4xl">
//             Our Vision: Transforming Tomorrow
//           </h3>
//           <p className="mt-6 text-gray-600 text-lg leading-relaxed">
//             We envision a world where technology bridges gaps, fuels creativity, and drives human potential. By fostering innovation and collaboration, we aim to become global leaders in delivering intelligent solutions that shape a better future for all.
//           </p>
//         </div>
//         <div className="absolute right-0 bottom-0 opacity-10">
//           <svg
//             className="h-48 w-48 md:h-64 md:w-64"
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <text
//               x="50%"
//               y="50%"
//               textAnchor="middle"
//               alignmentBaseline="middle"
//               fontSize="30"
//               fill="#e0e7ff"
//               transform="rotate(45, 50, 50)"
//             >
//               GenuIQ
//             </text>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import img from "../assets/Screenshot 2024-11-11 at 10.52.56 AM.png"; // Replace with the actual image path

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default animation duration
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-4 py-32 md:px-8 md:py-32">
        <h1 className="text-3xl font-extrabold text-black md:text-5xl lg:text-6xl">
          Empowering Innovation, Shaping the Future
        </h1>
        <p
          className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl max-w-lg md:max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At GenuIQ Labs, we’re committed to driving technological
          transformation, empowering businesses, and creating a lasting impact.
        </p>

        {/* Team Section */}
        <div
          className="mt-12 w-full max-w-md md:max-w-lg lg:max-w-xl"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src={img} // Replace with the actual image path
            alt="Our Team"
            className="rounded-lg w-full object-cover shadow-md"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-12 px-4 md:py-16 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide"
            // data-aos="fade-right"
          >
            Mission & Vision
          </h2>
          <h3
            className="text-2xl font-bold text-black md:text-3xl lg:text-4xl"
            // data-aos="fade-left"
            // data-aos-delay="200"
          >
            Our Mission: Building Solutions That Inspire
          </h3>
          <p
            className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            // data-aos="fade-up"
            // data-aos-delay="400"
          >
            We aim to empower organizations with cutting-edge AI and digital
            solutions, enabling them to excel in an ever-evolving technological
            landscape. Our mission is to simplify complexity, enhance
            productivity, and deliver unmatched value.
          </p>
          <h3
            className="text-2xl font-bold text-black mt-12 md:text-3xl lg:text-4xl"
            // data-aos="fade-left"
            // data-aos-delay="600"
          >
            Our Vision: Transforming Tomorrow
          </h3>
          <p
            className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            // data-aos="fade-up"
            // data-aos-delay="800"
          >
            We envision a world where technology bridges gaps, fuels creativity,
            and drives human potential. By fostering innovation and
            collaboration, we aim to become global leaders in delivering
            intelligent solutions that shape a better future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
