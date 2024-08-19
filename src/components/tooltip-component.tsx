"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Maricel D. Cruz",
    designation: "IMG Dominate",
    image: "/logo.jpg",
  },
];

export const TooltipComponent = () => {
  return (
    <div className="flex items-start justify-start  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
};
