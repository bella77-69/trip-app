import React from "react";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import './TripsList.scss';

export const TripsList = ({ match, days }) => {
  const filter = match.params.filter;
  const trips = filter ? days.filter((trip) => trip.type === filter) : days;
  return (
    <div className="list">
      <h3 className="list-title">{filter ? filter : "All"} Trips</h3>
      <table className="list-table">
        <thead className="list-thead">
          <tr className="list-tr">
            <th className="list-th">Date</th>
            <th className="list-th">Place</th>
            <th className="list-th">Type</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <Trip key={index} {...trip} />
          ))}
        </tbody>
      </table>
      <div className="list-filters">
        Filter By:
        <Link to="/list" className="list-all">All</Link>&#9679;
        <Link to="/list/Trek" className="list-trek">Treks</Link>&#9679;
        <Link to="/list/Club" className="list-club">Club</Link>&#9679;
        <Link to="/list/Tropic" className="list-tropic">Tropic</Link>&#9679;
      </div>
    </div>
  );
};
