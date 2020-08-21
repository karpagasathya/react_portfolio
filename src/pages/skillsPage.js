import React from "react";
import "../components/style.css";
import SkillsCard from "../components/Skills";
import { skill1, skill2, skill3 } from "../utils/skillsData";

const SkillsPage=()=> {
    return (
      <>
        <h1 className="pt-5 mt-3 text-center font-details">SKILLS</h1>
        <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
          <SkillsCard skills={skill1} title="" icon="desktop" name="client" animate="slide-left" />
          <SkillsCard skills={skill2} title="" icon="server" name="server" animate="slide-up" />
          <SkillsCard skills={skill3} title="" icon="server" name="server" animate="slide-right" />
        </div>
      </>
    );
};

export default SkillsPage;
