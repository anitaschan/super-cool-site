import React from "react";
import Card from "./Card";
import "./Portfolio.scss";

import portfolioData from "./portfolioData.json";
import whitestuffLogo from "../../assets/White-Stuff.jpg";
import FEMpic from "../../assets/FEM.png";
import sentimentpic from "../../assets/SentimentAnalysis.png";

const Portfolio = () => (
    <div className="portfolio">
      {portfolioData.map(items => (
        <Card
          image={items.image}
          imageName={items.alt}
          key={items.name}
          name={items.name}
          desc={items.desc}
        />
      ))}
    </div>
  );

export default Portfolio;
