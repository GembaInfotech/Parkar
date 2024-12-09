import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const NotificationList = () => {
  const token = useSelector((state) => state.auth.accessToken);

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`http://localhost:4005/notification/get-notification`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setNotifications(data.notifications);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [token]);


  const markAllAsRead = async (userId) => {
    try {
      const response = await fetch("http://localhost:4005/notification/marked-all-as-read", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setNotifications((prev) =>
          prev.map((notification) => ({ ...notification, isRead: true }))
        );
        console.log(data.mesg);
      } else {
        console.error("Error marking notifications as read:", data.mesg);
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  

  const clearNotifications = async (userId) => {
    try {
      const response = await fetch("http://localhost:4005/notification/delete-all-notifications", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
      });
      const data = await response.json();
      if (response.ok) {
        setNotifications([]);
        console.log(data.mesg); 
      } else {
        console.error("Error clearing notifications:", data.mesg);
      }
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };
  

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Notifications</h2>
        <div>
          <button
            className="text-sm text-blue-600 hover:underline mr-4 ml-4"
            onClick={markAllAsRead}
          >
            Mark All as Read
          </button>
          <button
            className="text-sm text-red-600 hover:underline"
            onClick={clearNotifications}
          >
            Clear All
          </button>
        </div>
      </div>
      {loading ? (
        <p className="text-center text-gray-500">Loading notifications...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : notifications.length === 0 ? (
        <p className="text-gray-500 text-center">No notifications available</p>
      ) : (
        <ul className="space-y-4 max-h-80 overflow-y-auto">
          {notifications.map((notification) => (
            <li
              key={notification._id}
              className={`p-4 rounded-lg shadow-md ${
                notification.isRead ? 'bg-white' : 'bg-gray-200'
              }`}
            >
              <h3 className="font-bold text-lg">{notification.title}</h3>
              <p className="text-sm text-gray-700">{notification.data.description}</p>
              <p className="text-xs text-gray-500 mt-2">
                {notification.createdAt}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
