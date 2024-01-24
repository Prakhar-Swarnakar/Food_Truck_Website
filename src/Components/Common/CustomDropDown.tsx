import React, { useState } from 'react';

export function CustomDropdown( dropdownItems:string[] ){
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="dropdown" >
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                {selectedItem || 'Select an item'}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {dropdownItems.map((item) => (
                        <li key={item} onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

