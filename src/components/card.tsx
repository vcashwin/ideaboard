import React from "react";

export enum CardStatus {
  Backlog = "Backlog",
  InProgress = "In Progress",
  Completed = "Completed",
}

export type CardProps = {
  title: string;
  description: string;
  status: CardStatus;
};

const cardStatusColor = {
  [CardStatus.Backlog]: "bg-gray-500",
  [CardStatus.InProgress]: "bg-blue-500",
  [CardStatus.Completed]: "bg-green-500",
};

/**
 * Card component with title, description, and status
 * @returns JSX of a card element
 */
export function Card({ title, description, status }: CardProps) {
  return (
    <div className="card flex flex-col cursor-pointer hover:border-zinc-700 transition duration-300 dark:hover:border-zinc-400 p-6 space-y-4 rounded-md text-xs dark:card-dark">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <p
        className={`text-white p-1 px-2 rounded-full font-bold text-[8px] w-fit ${cardStatusColor[status]}`}
      >
        {status}
      </p>
    </div>
  );
}
