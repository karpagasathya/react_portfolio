import React from "react";
import "./style.css";


const SkillsCard=(props)=> {
  return (
    <div className="mt-5  uk-text-center skills-card" >
      <div className={`uk-card uk-card-secondary ${props.name}-card ${props.animate}`}>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.title}</h3>
          <ul className="uk-list uk-list-divider">
            {props.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={`uk-card-footer portfolio-card-footer ${props.name}-card-footer`}>
          <div>
            <span className="skills-icon" uk-icon={`icon: ${props.icon}; ratio: 1.5`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
