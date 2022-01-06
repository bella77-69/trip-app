import React from "react";

export default function Trip ({ date, place, type }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{place}</td>
      <td>{type}</td>
    </tr>
  );
};
