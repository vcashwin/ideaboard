import React from "react";
import CardContainer from "./components/card-container";
import { CardStatus } from "./components/card";

const todoCards = [
  {
    title: "IdeaBoard App",
    description:
      "Build an app to manage ideas like todo, in progress, and done",
    status: CardStatus.Backlog,
  },
];
const inProgressCards = [
  {
    title: "IdeaBoard App",
    description:
      "Build an app to manage ideas like todo, in progress, and done",
    status: CardStatus.InProgress,
  },
  {
    title: "IdeaBoard App",
    description:
      "Build an app to manage ideas like todo, in progress, and done",
    status: CardStatus.InProgress,
  },
  {
    title: "IdeaBoard App",
    description:
      "Build an app to manage ideas like todo, in progress, and done",
    status: CardStatus.InProgress,
  },
];
const completedCards = [
  {
    title: "IdeaBoard App",
    description:
      "Build an app to manage ideas like todo, in progress, and done",
    status: CardStatus.Completed,
  },
];

function App() {
  return (
    <div className="flex flex-col lg:flex-row p-6 space-y-4 lg:space-x-4 lg:space-y-0 bg-[#e0e0e0] lg:min-h-screen">
      <CardContainer title="To-Do" cards={todoCards} />
      <CardContainer title="In Progress" cards={inProgressCards} />
      <CardContainer title="Completed" cards={completedCards} />
    </div>
  );
}

export default App;
