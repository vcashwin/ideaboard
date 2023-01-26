import React from "react";
import CardContainer from "./components/card-container";
import { CardStatus } from "./components/card";
import logo from "./logo.png";
import logoDark from "./logo-dark.png";
import { useDarkMode } from "./contexts/darkmode-context";
import { TbSun, TbMoonStars } from "react-icons/tb";

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

function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="cursor-pointer rounded-lg bg-[#e0e0e0] dark:bg-[#212121]">
      {!darkMode ? (
        <TbSun
          className="w-6 h-6 stroke-yellow-500 outline-none"
          onClick={toggleDarkMode}
        />
      ) : (
        <TbMoonStars
          className="w-6 h-6 stroke-sky-500 outline-none"
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
}

function App() {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex flex-col p-6 space-y-4 items-center dark:bg-[#212121] dark:text-white relative">
      <img
        src={darkMode ? logoDark : logo}
        alt="logo"
        className="h-12 w-auto object-cover static"
      />
      <div className="absolute right-6 top-5 ">
        <DarkModeButton />
      </div>
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
