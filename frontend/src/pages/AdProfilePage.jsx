import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdNavBar from "../components/AdNavBar";

function AdProfilePage({ user }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById();
  }, []);

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

      setUser(res.data.data);
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

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 value={user}>Welcome, {user.username}!</h1>
        <h1 value={user}>{user.email}</h1>
      </div>

      <AdNavBar />
    </>
  );
}

export default AdProfilePage;
