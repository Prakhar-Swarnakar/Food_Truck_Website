// components/Order.js

import React from 'react';
import { MenuItem } from '../Components/Order/MenuItem';
import MenuAccordion from '../Components/Order/MenuAccordion';


const Order = () => {
  return (
    <section id="order">
      <h2>Place an Order</h2>
      {/* Add order page content */}
      <MenuAccordion/>
    </section>
  );
};

export default Order;
