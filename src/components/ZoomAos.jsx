import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ZoomAos = () => {
  return (
    <div className="aos__zoom">
      <h1>Hello from Zoom In Out Animation On Scroll</h1>
      {/* ZoomIn */}
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomIn">
        <div className="aos__zoom-box">Zoom In 1</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomInUp">
        <div className="aos__zoom-box">Zoom In 2</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomInDown">
        <div className="aos__zoom-box">Zoom In 3</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomInLeft">
        <div className="aos__zoom-box">Zoom In 4</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomInRight">
        <div className="aos__zoom-box">Zoom In 5</div>
      </ScrollAnimation>

      {/* Zoom Out */}
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomOut">
        <div className="aos__zoom-box">Zoom Out 1</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomOutUp">
        <div className="aos__zoom-box">Zoom Out 2</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomOutDown">
        <div className="aos__zoom-box">Zoom Out 3</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomOutLeft">
        <div className="aos__zoom-box">Zoom Out 4</div>
      </ScrollAnimation>
      <ScrollAnimation style={{ margin: "80px 0" }} animateIn="zoomOutRight">
        <div className="aos__zoom-box">Zoom Out 5</div>
      </ScrollAnimation>
    </div>
  );
};

export default ZoomAos;
