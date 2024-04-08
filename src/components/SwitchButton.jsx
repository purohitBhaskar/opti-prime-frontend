import React, { useState } from 'react';
import './SwitchButton.css'; // Import your CSS file for styling

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;
