import React, { useState } from 'react';
import './CustomSelect.css'; // Import CSS file for styling

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="select-styled" onClick={toggleOptions}>
        {selectedColor ? selectedColor : 'Select a color'}
      </div>
      <div className={`select-options ${isOpen ? 'open' : ''}`}>
        {options.map((color, index) => (
          <div
            key={index}
            className={`select-option ${color.toLowerCase()}`}
            onClick={() => handleOptionClick(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
