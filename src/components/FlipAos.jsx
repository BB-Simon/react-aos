import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const FlipAos = () => {
  return (
    <div className="aos__flip">
      <h1>Hello from Flip Animation On Scroll</h1>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="flipInX">
        <div className="aos__flip-box">Box 1</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="flipInY">
        <div className="aos__flip-box">Box 2</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="flipOutX">
        <div className="aos__flip-box">Box 3</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="flipOutY">
        <div className="aos__flip-box">Box 4</div>
      </ScrollAnimation>
    </div>
  );
};

export default FlipAos;
