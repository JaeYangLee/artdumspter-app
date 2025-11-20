import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useFetchUserById() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserById = async () => {
      try {
        const authToken = localStorage.getItem("token");

        if (!authToken) return;

        const userProfile = await axios.get(
          "http://localhost:5000/artDumpster/profile",
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );

        setUser(userProfile.data.data);
      } catch (err) {
        console.error(
          "[GET /App.jsx]: Error fetching user profile!",
          err.response?.data || err.message
        );
        setUser(null);
        localStorage.removeItem("token");
        navigate("/");
      }
    };
    getUserById();
  }, [navigate]);

  return user;
}
