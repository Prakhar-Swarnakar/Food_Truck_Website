import { Dropdown, Stack } from "react-bootstrap";
import React from "react";

export default function Temp() {
    return (
        <div className="popup" style={{ border: '1px solid #000' }}>
                <Stack>
                    <h2 className='heading'>Popup Heading</h2>
                    <div className='grid'>
                        <Stack>
                        <Stack direction="horizontal" gap={3}>
                            <Stack gap={3} className='dropdowns'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Priority
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>High</Dropdown.Item>
                                        <Dropdown.Item>Low</Dropdown.Item>
                                        <Dropdown.Item>Medium</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Priority
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>High</Dropdown.Item>
                                        <Dropdown.Item>Low</Dropdown.Item>
                                        <Dropdown.Item>Medium</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Priority
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>High</Dropdown.Item>
                                        <Dropdown.Item>Low</Dropdown.Item>
                                        <Dropdown.Item>Medium</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* <CustomDropdown(["high","low","medium"])/> */}
                            </Stack>
                            <button>+ Add Image</button>
                        </Stack>
                        <Stack>
                            Quantity //input
                            prince <text/>
                        </Stack>
                        </Stack>
                    </div>
                    <div className="description">
                        <textarea
                            // value={description}
                            // onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description"
                        />
                    </div>
                    <Stack direction="horizontal" gap={2}> 
                        <button>Add</button>
                        <button>Close</button>
                    </Stack>
                </Stack>
        </div> 
    );
}