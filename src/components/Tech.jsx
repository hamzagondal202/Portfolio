// eslint-disable-next-line no-unused-vars
import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div key={technology.name}>
          <div className="w-24 h-24 bg-gradient-to-r shadow-xl from-[#5202ff] to-[#720788] rounded-full overflow-hidden relative transform transition-transform hover:scale-105">
            <img
              className="w-20 mx-auto rounded-full my-auto absolute top-0 bottom-0 left-0 right-0"
              src={technology.icon}
              alt={technology.name}
            />
          </div>
          <div
            className="hidden lg:block w-32 h-32 "
            key={`${technology.name}-${index}`}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
