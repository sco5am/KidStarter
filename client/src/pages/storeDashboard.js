import React from "react";
import Auth from "../../utils/auth";

function StoreDashboard() {
  // Retrieve user information from Auth module
  const { sellerId, sellerName } = Auth.getProfile();

  // Placeholder data for demonstration purposes
  const orderHistory = [
    { id: 1, date: "2023-04-10", customer: "John Smith", total: 25.99 },
    { id: 2, date: "2023-04-08", customer: "Jane Doe", total: 19.99 },
    { id: 3, date: "2023-04-05", customer: "Bob Johnson", total: 34.99 },
  ];

  const productInventory = [
    { id: 1, name: "Lemonade Stand", price: 50.0, quantity: 10 },
    { id: 2, name: "Lemonade Mix", price: 5.0, quantity: 100 },
    { id: 3, name: "Lemon Squeezer", price: 10.0, quantity: 5 },
  ];

  const salesStats = {
    totalRevenue: 1000.0,
    numOrders: 50,
    avgOrderValue: 20.0,
  };

  return (
    <div>
      <h2>Welcome, {sellerName}!</h2>
      <p>Your Seller ID is: {sellerId}</p>

      <h3>Order History</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.customer}</td>
              <td>${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Product Inventory</h3>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productInventory.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sales Statistics</h3>
      <p>Total Revenue: ${salesStats.totalRevenue.toFixed(2)}</p>
      <p>Number of Orders: {salesStats.numOrders}</p>
      <p>Average Order Value: ${salesStats.avgOrderValue.toFixed(2)}</p>
    </div>
  );
}

export default StoreDashboard;