import React from "react";
import "../components/style.css";
import SkillsCard from "../components/Skills";
import { clientSide, serverSide } from "../utils/skillsData";

function SkillsPage(props) {
    return (
      <>
        <h1 className="pt-5 mt-3 text-center font-details pb-3">SKILLS</h1>
        <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true" id="skills-section">
          <SkillsCard skills={clientSide} title="Client Side" icon="desktop" name="client" animate="slide-left" />
          <SkillsCard skills={serverSide} title="Server Side" icon="server" name="server" animate="slide-up" />
        </div>
      </>
    );
};

export default SkillsPage;
