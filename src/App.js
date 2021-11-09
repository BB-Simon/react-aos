import './App.css';
// import "animate.css/animate.min.css";

import FadeAos from "./components/FadeAos";
import FlipAos from "./components/FlipAos";
import ZoomAos from "./components/ZoomAos";
import SlideInAos from "./components/SlideInAos";

function App() {
  return (
    <div className="App">
      <FadeAos />
      <FlipAos />
      <ZoomAos />
      <SlideInAos />
    </div>
  );
}

export default App;
