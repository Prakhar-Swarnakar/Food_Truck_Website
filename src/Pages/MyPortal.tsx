import React from 'react';
import AddSection from '../Components/MyPortal/AddSection';
import Section from '../Components/MyPortal/Section';
import { Stack } from 'react-bootstrap';
import PlansTabs from '../Components/MyPortal/PlansTabs';

const MyPortal: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My Portal</h1>
            {/* Add your component(s) here */}
            <PlansTabs/>
            
            
            
        </div>
    );
};

export default MyPortal;
