import React from 'react';
import MyPortalCard from './MyPortalCard';
import { Button, Stack } from 'react-bootstrap';
import {AddButton} from './AddButton';

const Section: React.FC = () => {
    return (
        <div>
            <Stack>
                <h1>Section Name</h1>
                <Stack direction="horizontal" gap={3}>
                    <MyPortalCard/>
                    <MyPortalCard/>
                    <AddButton/>
                </Stack>
            </Stack>
        </div>
    );
};

export default Section;
