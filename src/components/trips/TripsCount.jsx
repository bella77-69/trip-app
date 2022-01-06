import React from "react";
import { GiHiking } from "react-icons/gi";
import { FaWalking } from "react-icons/fa";
import { SiClubhouse } from "react-icons/si";


const getProgress = (total, goal) => {
  return Math.floor((total / goal) * 100) + "%";
};

const getProgressBarWidth = (width) => {
  return { width };
};

export const TripsCount = ({ total, tropic, trek, club, goal = 15 }) => (
  <div className="trips-count">
    <div className="content">
      <div className="total">
        <h1>{total}</h1>trips
      </div>
      <div className="tropic">
        <h3>{tropic}</h3>
        <GiHiking />
      </div>
      <div className="trek">
        <h3>{trek}</h3>
        <FaWalking />
      </div>
      <div className="club">
        <h3>{club}</h3>
        <SiClubhouse />
      </div>
      <div className="goal">
        <div
          className="progress"
          style={getProgressBarWidth(getProgress(total, goal))}
        ></div>{" "}
        {getProgress(total, goal)}
      </div>
    </div>
  </div>
);
