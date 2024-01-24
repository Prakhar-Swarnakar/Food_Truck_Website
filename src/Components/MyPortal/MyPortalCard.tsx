import React from 'react';
import { Button } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

const MyPortalCard: React.FC = () => {
    return (
        <div>
             <div className="card">
                        <img 
                            src = {"/Imgs/car.jpg"} 
                            className="card-img-top" 
                            alt="Dish" 
                            height = "175px" 
                            width = "175px" 
                            style = {{objectFit : "cover"}}
                        />
                        <div className="card-body">
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-danger mr-2" style={{ position: 'absolute', top: 0, left: 0 }}>
                                        <MdOutlineDeleteOutline />
                                    </button>
                                    <button className="btn btn-primary" style={{ position: 'absolute', top: 0, right: 0 }}>
                                        <CiEdit/>
                                    </button>
                                </div>
                                <span className="card-title">Dish Name</span>
                            </div>
                            <p className="card-text">Description of the dish</p>
                            <textarea/>
                            </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="card-text">Price: $10</span>
                            <span className="card-text">Quantity: 2</span>
                        </div>
                    </div>
        </div>
    );
};

export default MyPortalCard;

