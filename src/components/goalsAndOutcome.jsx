import React from "react";
import { NewTransaction } from "./newTransaction";
import { Outcome } from "./outcome";
import { Goals } from "./goals";

export const GoalsAndOutcome = () => {
  return (
    <div className="w-full md:w-[48%]">
      <Goals />
      <Outcome />

      <NewTransaction />
    </div>
  );
};
