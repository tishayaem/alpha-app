import React from "react";

export default function Filter(props) {
  return (
    <div className="filter">
      <span>Type of room</span>
      <label htmlFor="room-type">
        <select>
          <option />
          <option>Office</option>
          <option>Studio</option>
          <option>Workshop</option>
        </select>
      </label>
      <span>How many people</span>
      <label htmlFor="number-of-people">
        <select>
          <option />
          <option>1-4</option>
          <option>5-9</option>
          <option>10-1000</option>
        </select>
      </label>
    </div>
  );
}
