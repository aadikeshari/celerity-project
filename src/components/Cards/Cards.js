import React from "react";
import { Card } from "./Cards.styled";

function Cards({topic,description,img}) {
  return (
    <>
      <Card className="bg-white rounded-xl px-5 py-6">
        <div className="flex items-center border-b-2 pb-3">
          {img}
          <span className="items-center ml-8 font-bold">{topic}</span>
        </div>
        <p className="pt-5">{description}</p>
      </Card>
    </>
  );
}

export default Cards;
