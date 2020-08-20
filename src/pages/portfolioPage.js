import React from "react";
import "../components/style.css";
import PortfolioCard from "../components/Portfolio";
import portfolioData from "../utils/portfolioData";

function PortfolioPage() {
  return (
    <>
      <h1 className="pt-3 text-center font-details pb-3">PORTFOLIO</h1>
      <div className="uk-child-width-1-2@m uk-grid-match" uk-grid="true" id="portfolio-section" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
        {portfolioData.map((portfolio) => (
          <PortfolioCard title={portfolio.title} about={portfolio.about} repoURL={portfolio.repoURL} siteURL={portfolio.siteURL} imgURL={portfolio.imgURL} />
        ))}
      </div>
    </>
  );
}

export default PortfolioPage;
