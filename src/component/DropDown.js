import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ options, label,onChange,value,onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedOption || 'Select an option'}
                <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} className="dropdown-icon" />
                {/* <img src='/dropdown.png' /> */}
            </div>
            {isOpen && (
                <div className="dropdown-options">
                    {options.map((option, index) => (
                        <div key={index} className="dropdown-option" onClick={() => handleSelect(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
        // <label>
        //     {label}
        //     <select value={value} onChange={onChange}>
        //         {options.map((option) => (
        //             <option value={option.value}>{option.label}</option>
        //         ))}
        //     </select>
        // </label>
    );
};

export default Dropdown;
