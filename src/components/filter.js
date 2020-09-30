import React from "react";
const Filter = ({ filter, onChangeFilter }) => (
  <>
    <label>
      Find contacts by name
      <br />
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  </>
);

export default Filter;
