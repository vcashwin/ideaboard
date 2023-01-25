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
    <div className="flex flex-col p-6 space-y-4 border rounded-md text-sm">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <p
        className={`text-white p-2 px-4 rounded-full font-bold text-xs w-fit ${cardStatusColor[status]}`}
      >
        {status}
      </p>
    </div>
  );
}
