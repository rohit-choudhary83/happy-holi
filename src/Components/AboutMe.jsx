import React from "react";
import Card from "./Card";

const AboutMe = () => {
  return (
    <div className="flex justify-center mt-8">
      <Card title="About Me">
        <p><span>Name : </span>Rohit Choudhary</p>
        <p><span>Collage: </span>Jijamata Government Polytechnic College, Burhanpur</p>
        <p><span>Branch: </span> CSE (Computer Science and Engineering) 3rd Year</p>
        <p><span>District: </span>Burhanpur (M P)</p>
      </Card>
    </div>
  );
};

export default AboutMe;
