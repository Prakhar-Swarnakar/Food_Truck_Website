import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';

interface PopupProps {
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        // Add logic for handling the add button click here
        // You can use the 'description' state value for further processing
    };

    return (
        <div className="popup" >
            <h2>Popup Heading</h2>
            <Stack>
            <div className="grid" >
                {/* Grid content goes here */}
            </div>
            <div className="description">
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
            </div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={onClose}>Close</button>
        
            </Stack>
        </div> 
    );
};

export default Popup;
