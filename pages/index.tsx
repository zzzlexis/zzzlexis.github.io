// This is the index (level 1 for my site)
// We are using TypeScript!
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define our page with anonymous functions
const ListItem = ({ children }) => (
  <li className="mr-2 text-2xl font-medium">{children}</li>
);

const Layout = ({ children }) => {
  return (
    <div>
      {" "}
      <nav className="flex justify-between">
        {" "}
        <div> {/* <button>Click</button>{" "} */}</div>{" "}
        <ul className="flex justify-end mb-6 mt-2 mr-2">
          {" "}
          <ListItem>
            <a className="px-4 font-mono font-bold text-opacity-25" href="/">
              home
            </a>
          </ListItem>{" "}
          <ListItem>
            <a className="px-4 font-mono hover:text-blue-500" href="/aboutme">
              about
            </a>
          </ListItem>{" "}
          <ListItem>
            <a className="px-4 font-mono hover:text-blue-500" href="/contact">
              contact
            </a>
          </ListItem>{" "}
        </ul>{" "}
      </nav>{" "}
      <div>{children}</div>{" "}
    </div>
  );
};

const IndexPage = () => {
  return (
    <div>
      <Layout>
        {" "}
        <div className="container mx-auto flex">
          <div className="w-1/3">
            {" "}
            <img src="/images/Platform934c.png"></img>
          </div>
          <div className="w-1/3 p-10 font-mono font-semibold lg:text-2xl">
            hi, i'm alexis!
            <div className="font-mono font-normal sm:text-xs">
              currently an IT professional who enjoys eating, baking, playing
              games and most of all... learning!
              <br></br>
              <br></br>
              congrats for somehow making it to my site; it's still a work in
              progress but i hope you come back and see the new changes
              sometime.
              <br></br>
              <br></br>
              until then, bye!
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

// Export what you want to serve when your client makes a request
// it's always a react component!
export default IndexPage;
