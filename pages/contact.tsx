import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="w-1/4 mx-auto flex p-6 bg-white dark:bg-gray-700 rounded-lg shadow-xl">
      <Head>
        <title>Contact</title>
      </Head>

      <div className="pt-1">
        <h4 className="text-xl leading-tight">hello@alexiscotton.com</h4>
        <p className="text-base text-gray-600 dark:text-gray-100 leading-normal">
          send me an email!
        </p>
      </div>
    </div>
  );
};

export default Contact;
