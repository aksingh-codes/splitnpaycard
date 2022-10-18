import React from "react";

const Select = ({setSelected}) => {
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <select
    style={{backgroundColor: '#3F3F3F'}}
      onChange={handleChange}
      className="select select-sm pr-6 focus:outline-none rounded-none"
    >
      <option className="bg-inherit" defaultChecked>this week</option>
      <option>this day</option>
      <option>this month</option>
      <option>this year</option>
    </select>
  );
};

export default Select;
