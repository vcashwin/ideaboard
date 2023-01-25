import React from "react";
import { Card, CardProps } from "./card";

type CardContainerProps = {
  title: string;
  cards: CardProps[];
};

const CardContainer = ({ title, cards }: CardContainerProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="font-bold text-2xl text-center">{title}</h2>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
