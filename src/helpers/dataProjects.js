import Correct from "../pages/Project/images/correct.png";
import Login from "../pages/Project/images/login.png";
import Game from "../pages/Project/images/game.png";
import Ranking from "../pages/Project/images/ranking.png";

const data = [
  {
    path: "trivia",
    name: "Trivia",
    description: "This project is a trivia game, built completely in React. Have fun answering easy, medium or hard level questions. Also remember to be fast if you want to be the best!",
    cover: "https://i.ibb.co/bdJNqW1/20220611-214344-0000.png",
    links: {
      repository: "https://github.com/biewwl/project-trivia",
      project: "https://biewwl.github.io/project-trivia/",
    },
    images: [Login, Game, Correct, Ranking],
    skills: ["HTML", "CSS", "Javascript", "React", "Hooks", "API"],
    tools: [
      "react-router-dom",
      "gh-pages",
      "crypto-js",
      "howler",
    ],
    development: "individual",
  },
];
export default data;
