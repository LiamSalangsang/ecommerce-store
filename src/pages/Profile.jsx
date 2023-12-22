import { motion } from "framer-motion";
import React from "react";
import Header from "../components/commonUI/Header";

const Profile = () => {
  // Dummy user data (replace with actual user data from your application)
  const user = {
    id: 1,
    username: "JohnDoe",
    email: "john.doe@example.com",
    orders: [
      { id: 101, date: "2023-01-15", total: 89.99 },
      { id: 102, date: "2023-02-02", total: 124.515 },
    ],
    addresses: [
      {
        id: 201,
        label: "Home",
        street: "123 Main St",
        city: "Cityville",
        zip: "12345",
      },
      {
        id: 202,
        label: "Work",
        street: "456 Office Ave",
        city: "Worktown",
        zip: "54321",
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="pt-[7rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto my-8 p-4 bg-white/20 backdrop-blur-md shadow-2xl rounded-md"
        >
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">User Details</h3>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">Order History</h3>
              {user.orders.map((order) => (
                <div key={order.id} className="mb-2">
                  <p>
                    <strong>Order ID:</strong> {order.id}
                  </p>
                  <p>
                    <strong>Date:</strong> {order.date}
                  </p>
                  <p>
                    <strong>Total:</strong> ${order.total.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Saved Addresses</h3>
            {user.addresses.map((address) => (
              <div key={address.id} className="mb-4">
                <p>
                  <strong>{address.label}:</strong>
                </p>
                <p>{address.street}</p>
                <p>
                  {address.city}, {address.zip}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
