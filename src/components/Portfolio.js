
import React from "react";
import "./style.css";

const PortfolioCard=(props)=> {
  return (
    <div>
      <div className="uk-card uk-card-default portfolio-card">
        <div className="uk-card-body portfolio-card-body">
          <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="true">
            <ul className="uk-slideshow-items">
              <li>
                <img src={props.imgURL} alt="project related images" uk-cover="true" />
              </li>
              <li>
                <h3 className="uk-card-title project-title">{props.title}</h3>
                <p className="project-description">{props.about}</p>
              </li>
            </ul>
            <a className="uk-position-top-right uk-position-small" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
          </div>
        </div>
        <div className="uk-card-footer portfolio-card-footer">
          <div className="uk-text-center">
            <a href={props.siteURL} target="_blank" rel="noopener noreferrer" className="btn-link">
              <button className="uk-button uk-button-default portfolio-btn">View Website</button>
            </a>
            <a href={props.repoURL} target="_blank" rel="noopener noreferrer" className="btn-link">
              <button className="uk-button uk-button-default portfolio-btn">GitHub Repo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;