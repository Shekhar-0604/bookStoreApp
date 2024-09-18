import React from "react";
import Card from "./Card";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
            ducimus et sunt ab sapiente distinctio nisi eos unde, expedita
            consequatur eligendi deleniti natus ratione dolor eum cupiditate.
            Perspiciatis placeat illo, eius recusandae culpa, magni ad impedit
            architecto quam officia maiores nihil aspernatur omnis pariatur
            provident sunt nam nemo est amet?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 hover:text-white">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
