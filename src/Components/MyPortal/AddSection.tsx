import React, { useState } from 'react';

const AddSection: React.FC = () => {
    const [sectionText, setSectionText] = useState('');

    const handleAddSection = () => {
        // Logic to handle adding the section
        console.log('Section added:', sectionText);
        setSectionText('');
    };

    return (
            <div > 
                {/* align left */}
                <h2>Add Section</h2>
                <input
                    type="text"
                    value={sectionText}
                    onChange={(e) => setSectionText(e.target.value)}
                />
                <button onClick={handleAddSection}>Add</button>
            </div>
    );
};

export default AddSection;
