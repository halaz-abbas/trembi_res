import React, { useEffect } from "react";
import { useOrder } from "../contexts/OrderContext";

const Orders = () => {
  const { orders, loading, error, fetchOrders } = useOrder();

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ordersPage">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h3>Order #{order.id}</h3>
              <p>Total: ${order.total}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
