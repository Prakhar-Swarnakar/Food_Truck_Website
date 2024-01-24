import React, { useState, ChangeEvent } from "react";
import { Button } from "react-bootstrap";

interface FormData {
  name: string;
  phone: string;
  email: string;
  specialInstructions: string;
  timeSlot: string;
}

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    specialInstructions: "",
    timeSlot: "",
  });

  const submitOrder = () => {
    // Add logic to handle the submission of the order, e.g., send it to the server.
    console.log("Order submitted:", formData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Order Details</h2>
      <div style={{ display: "flex" }}>
        {/* Left side - Form */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Special Instructions:
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Select Time Slot:
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
              >
                <option value="">Select a time slot</option>
                <option value="9AM-12PM">9 AM - 12 PM</option>
                <option value="12PM-3PM">12 PM - 3 PM</option>
                {/* Add more time slot options as needed */}
              </select>
            </label>
            <br />
            <div>
              <p>Available Time Slots:</p>
              {[9, 10, 11, 12, 1, 2].map((hour) => (
                <button key={hour}>{`${hour} AM - ${hour + 3} PM`}</button>
              ))}
            </div>
          </form>
        </div>

        {/* Right side - Order Summary */}
        <div style={{ flex: 1 }}>
          <h3>Order Summary</h3>
          {/* Display order items and total */}
          <div>
            <p>Item 1: $10.00</p>
            <p>Item 2: $15.00</p>
            {/* Add more items as needed */}
            <p>Total: $25.00</p>
          </div>
          <button /* onClick={handleEditOrder} */>Edit Order</button>
          <button /* onClick={handlePlaceOrder} */>Place Order</button>
        </div>
      </div>
      <div>
        <Button onClick={submitOrder}>Submit order</Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
