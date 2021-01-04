import React from "react";
import {
  Container,
} from "react-bootstrap"
import BackgroundSlideshow from "react-background-slideshow"

import Img1 from "./../../assets/images/laptop.png";
import Img2 from "./../../assets/images/womenDress.png";
import Img3 from "./../../assets/images/Vivo.png";

const Home = () => {

  return (
    <Container>
      <div style={{ top: "56px", position: "absolute", width: "100%", height: "90%", left: "2px" }}>
        <BackgroundSlideshow images={[Img1, Img2, Img3]} />
      </div>
    </Container>
  );
};

export default Home;
