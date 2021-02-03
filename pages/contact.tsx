import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="w-1/4 mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">Alexis Cotton</h4>
        <p className="text-base text-gray-600 leading-normal">
          1-800-dont-call-me
        </p>
        <p className="">just kidding! or am i?</p>
      </div>
    </div>
  );
};

export default Contact;
