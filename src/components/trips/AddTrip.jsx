import React from "react";
import './AddTrip.scss';

export const AddTrip = ({ newTrip }) => {
  let date, place, type;
  const submit = (event) => {
    event.preventDefault();
    newTrip({
      date: date.value,
      place: place.value,
      type: type.value,
    });
    date.value = place.value = type.value = "";
  };

  return (
    <div className="form">
      <form onSubmit={submit} className="form-container">
        <label>
          <h3 className="form-title">Add A Trip</h3>
          <br />
          <br />
          <br />
        </label>
        <label className="form-label">
          Date: <br />
          <input className="form-input"
            id="date"
            type="date"
            required
            ref={(input) => (date = input)}
          />
        </label>
        <label className="form-label">
          Place: <br />
          <input className="form-input"
            id="date"
            type="text"
            required
            ref={(input) => (place = input)}
          />
        </label>
        <label className="form-label">
          Type: <br />
          <select ref={(input) => (type = input)}>
            <option value="Trek">Trek</option>
            <option value="Tropic">Tropic</option>
            <option value="Club">Club</option>
          </select>
        </label>
        <input type="submit" value="Submit" className="form-submit"/>
      </form>
    </div>
  );
};
