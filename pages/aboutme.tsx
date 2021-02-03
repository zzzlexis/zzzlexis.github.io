import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
//import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-500 to-blue-600">
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className="font-bold font-thin">
        Alexis Cotton is an Application Engineer based in Houston, TX.
      </h1>
      <h2 className="font-light">
        She currently works for ConocoPhillips and has been with the company for
        (almost!) 5 years.
      </h2>

      <br></br>

      <h2 className="font-light">
        Outside of work, she enjoys many hobbies such as experimenting in the
        kitchen through sweet and savoury creations (or accidents...), playing
        video games, satisfying her ravenous sweet tooth by visiting local
        bakeries and tea shops, and relaxing at home with her cat Noodle.
      </h2>
    </div>
  );
};

export default AboutMe;
