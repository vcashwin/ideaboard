import React from "react";
import CardContainer from "./components/card-container";
import { CardStatus } from "./components/card";
import logo from "./logo.png";
import logoDark from "./logo-dark.png";

const todoCards = [
  {
    title: "IdeaBoard App",
    description:
      "Build a personal tracker to manage business ideas, new features etc. into different status buckets on the fly",
    status: CardStatus.Backlog,
  },
];
const inProgressCards = [
  {
    title: "IdeaBoard App",
    description:
      "Build a personal tracker to manage business ideas, new features etc. into different status buckets on the fly",
    status: CardStatus.InProgress,
  },
  {
    title: "IdeaBoard App",
    description:
      "Build a personal tracker to manage business ideas, new features etc. into different status buckets on the fly",
    status: CardStatus.InProgress,
  },
  {
    title: "IdeaBoard App",
    description:
      "Build a personal tracker to manage business ideas, new features etc. into different status buckets on the fly",
    status: CardStatus.InProgress,
  },
];
const completedCards = [
  {
    title: "IdeaBoard App",
    description:
      "Build a personal tracker to manage business ideas, new features etc. into different status buckets on the fly",
    status: CardStatus.Completed,
  },
];

function App() {
  return (
    <div className="flex flex-col p-6 space-y-4 items-center">
      <img src={logo} alt="logo" className="h-10 w-auto object-cover" />
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
        {/* <Login /> */}
        <CardContainer title="To-Do" cards={todoCards} />
        <CardContainer title="In Progress" cards={inProgressCards} />
        <CardContainer title="Completed" cards={completedCards} />
      </div>
    </div>
  );
}

export default App;
