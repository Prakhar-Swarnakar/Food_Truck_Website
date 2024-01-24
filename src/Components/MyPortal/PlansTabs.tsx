import React from 'react';
import { Stack } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Section from './Section';
import AddSection from './AddSection';
import AddItemBox from './AddItemBox';
import Dropdown from 'react-bootstrap/Dropdown';
import { CustomDropdown } from '../Common/CustomDropDown';
import Temp from './Temp';

export default function PlansTabs() {
    return (
        <div>
        <Tabs
            defaultActiveKey="home"
            id="justify-tab-example"
            className="mb-3"
            justify>
            <Tab eventKey="home" title="Home">
            <section id="Section" style={{ border: '1px solid #000' }}> 
                <Stack>
                    <Section/>
                    <Section/>
                </Stack> 
            </section>
            <section id="AddSection" style={{ border: '1px solid #000' }}> 
            <AddSection/>
             </section>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <Temp/>
            </Tab> 
    </Tabs>
    </div>
    );
}