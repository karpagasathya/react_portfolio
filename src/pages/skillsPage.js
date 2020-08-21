import React from "react";
import "../components/style.css";
import SkillsCard from "../components/Skills";
import { clientSide, serverSide } from "../utils/skillsData";
// import BackgroundImage from "../components/BackgroundImage";
// import imageURL from "../assets/images/background1.jpg";
// import { Parallax } from "react-parallax";

function SkillsPage(props) {
    return (
    //   <Parallax blur={{ min: -30, max: 30 }} bgImage={require("../assets/images/background1.jpg")} strength={-200}>
        <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
          <SkillsCard skills={clientSide} title="Client Side" icon="desktop" name="client" animate="slide-left" />
          <SkillsCard skills={serverSide} title="Server Side" icon="server" name="server" animate="slide-up" />
        </div>
    //   </Parallax>
    );
};

export default SkillsPage;
