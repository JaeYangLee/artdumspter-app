import { useState } from "react";
import axios from "axios";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdLandingPage from "./pages/AdLandingPage";
import AdRegisterPage from "./pages/AdRegisterPage";

function App() {
  const [user, setUser] = useState(null);

  const registerUser = async (
    username,
    email,
    password,
    bio,
    location,
    tool_id,
    artstyle_id
  ) => {
    try {
      const registeredUser = axios.post(
        `http://localhost:5000/artDumpster/register`,
        {
          username,
          email,
          password,
          bio,
          location,
          tool_id,
          artstyle_id,
        }
      );

      setUser(registeredUser.data);

      console.log("[POST /App.jsx]: User registration successful!");
    } catch (err) {
      console.error("[POST /App.jsx]: Error creating new user!");
    }
  };

  const loginUser = async (email, password) => {
    try {
      const loggedInUser = await axios.post(
        `http://localhost:5000/artDumpster/login`,
        {
          email,
          password,
        }
      );

      if (!loggedInUser) {
        console.error("[POST /App.jsx]: Invalid User!");
      }

      const { token, user } = loggedInUser.data;
      localStorage.setItem("token", token);

      setUser(user);

      console.log("User logged in successfully!", loggedInUser.data);
    } catch (err) {
      console.error("[POST /App.jsx]: Error logging in user!");
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<AdLandingPage />}></Route>
          <Route path="/register" element={<AdRegisterPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
