import React from "react";

const Trip = ({ date, place, type }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{place}</td>
      <td>{type}</td>
    </tr>
  );
};
export default Trip;