import Banner from "@/components/home/banner";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="flex">
          <div className="basis-full">Content</div>
        </div>
      </div>
    </>
  );
};

export default Home;
