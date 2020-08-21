import React from "react";
import "../components/style.css";
import PortfolioCard from "../components/Portfolio";
import portfolioData from "../utils/portfolioData";

const style = {
  portfolio: {
        backgroundColor: "grey",
        margin: "20px",
        padding:"30px",
  },
};

function PortfolioPage() {
  return (
    <>
      <div className="portfolio-container" style={style.portfolio}>
        <h1 className="pt-3 text-center font-details pb-3">PORTFOLIO</h1>
        <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true" id="portfolio-section" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
          {portfolioData.map((portfolio) => (
            <PortfolioCard title={portfolio.title} about={portfolio.about} repoURL={portfolio.repoURL} siteURL={portfolio.siteURL} imgURL={portfolio.imgURL} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
