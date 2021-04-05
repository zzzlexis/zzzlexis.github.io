import React from "react";
import Head from "next/head";

const AboutMe = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>About Me</title>
      </Head>

      <div className="w-full px-5">
        <div className="container mx-auto px-5 py-5">
          <div className="text-center mb-5">
            <h1 className="text-2xl md:text-3xl">Who is she?</h1>
            <div className="flex justify-center mt-4">
              <div className="w-16 h-1 rounded-full bg-green-600 inline-flex"></div>
            </div>

            <div className="container mx-auto mt-5">
              <p>
                When her intermittent existential crisis concludes, you may
                know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
