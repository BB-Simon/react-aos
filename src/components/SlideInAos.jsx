import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SlideInAos = () => {
  return (
    <div className="aos__slidein">
      <h1>Hello from Slide In Animation On Scroll</h1>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="slideInUp">
        <div className="aos__slidein-box">Slide In 1</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="slideInDown">
        <div className="aos__slidein-box">Slide In 2</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="slideInLeft">
        <div className="aos__slidein-box">Slide In 3</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="slideInRight">
        <div className="aos__slidein-box">Slide In 4</div>
      </ScrollAnimation>
    </div>
  );
};

export default SlideInAos;
