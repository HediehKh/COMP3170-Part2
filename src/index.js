import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import News from "./components/News";
import Story from "./components/Story";

//import App from "./App";

import "./styles.css";

function App() {
  return (
    <div>
      <News>
        <Story
          image="https://picsum.photos/id/60/200/300"
          title="Rosie skinny legend"
          link="https://www.allkpop.com/article/2023/07/blackpinks-rose-sparks-concerns-with-her-alarmingly-slim-figure-during-a-recent-concert"
          author="Sophie Ha"
          description="Rosé took to the stage wearing a top from Saint Laurent's 2023 Spring/Summer collection, where she passionately sang gone and on the ground captivating the audience with her dance moves."
        />
        <Story
          image="https://picsum.photos/id/60/200/300"
          title="LISA LEAVING BLACKPINK?!"
          link="https://www.dazeddigital.com/music/article/60859/1/lisa-leaving-blackpink-contract-renewal-rejection-yg-entertainment-share-price"
          author="Elliot Hoste"
          description="Is Lisa leaving BLACKPINK?"
        />
        <Story
          image="https://picsum.photos/id/60/200/300"
          title="BLACKPINK Jisoo And Jennie’s Ideal Types — Revealed By Each Other"
          link="https://www.koreaboo.com/stories/blackpink-jisoo-jennie-ideal-types-revealed/"
          author="KoreaBoo"
          description="BLACKPINK‘s Jisoo and Jennie got together for a past episode of Star Road, where they answered personal questions about each other. First, Jennie began by correctly answering questions about Jisoo straight in a row!"
        />
      </News>
    </div>
  );
}

function New(props) {
  return (
    <div className="entirePage">
      <div className="titleBox">
        <h1 className="title">Blackpink In Your Area</h1>
      </div>
      <div className="listOutline">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}

function Storys(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=News";
  } else {
    image = props.image;
  }
  return (
    <li className="list">
      <div className="wholeList">
        <div>
          <img className="image" src={image} alt="" />
        </div>
        <div className="rightSide">
          <a href={props.link}>
            <h2>{props.title}</h2>
          </a>
          <h3 className="author">By: {props.author}</h3>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
