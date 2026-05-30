import AdLandingPage from "./pages/AdLandingPage";
import AdRegisterPage from "./pages/AdRegisterPage";
import AdProtectedRoute from "./components/AdProtectedRoute";
import AdProfilePage from "./pages/AdProfilePage";
import AdMyDumpsterPage from "./pages/AdMyDumpsterPage";
import AdAddAnArtworkPage from "./pages/AdAddAnArtworkPage";
import AdSuccessModal from "./components/AdSuccessModal";
import AdErrorModal from "./components/AdErrorModal";
import AdSettingsPage from "./pages/AdSettingsPage";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  /* KEY NOTE: May bug sa log in, nag a access parin sa account kahit mali yung password. */

  const [user, setUser] = useState(null);
  const [artworks, setArtWorks] = useState([]);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  useEffect(() => {
    getUserById();
  }, []);

  useEffect(() => {
    if (user?.user_id) {
      fetchArtworkByUser(user.user_id);
    }
  }, [user?.user_id]);

  const registerUser = async (
    username,
    email,
    password,
    bio,
    location,
    tool_id,
    artstyle_id,
  ) => {
    try {
      const registeredUser = await axios.post(
        `http://localhost:5000/artDumpster/register`,
        {
          username,
          email,
          password,
          bio,
          location,
          tool_id,
          artstyle_id,
        },
      );

      const { token, data } = registeredUser.data;

      localStorage.setItem("token", token);

      setUser(data);

      setSuccessModalOpen(true);
      console.log("[POST /App.jsx]: Registration successful!");
    } catch (err) {
      console.error("[POST /App.jsx]: Error creating new user!", err.message);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const loggedInUser = await axios.post(
        `http://localhost:5000/artDumpster/login`,
        {
          email,
          password,
        },
      );

      if (!loggedInUser) {
        console.error("[POST /App.jsx]: Invalid User!");
      }

      const { token, user } = loggedInUser.data;
      localStorage.setItem("token", token);

      setUser(user);

      console.log("User logged in successfully!", loggedInUser.data);

      await getUserById();
    } catch (err) {
      console.error("[POST /App.jsx]: Error logging in user!", err.message);
      setErrorModalOpen(true);
    }
  };

  const getUserById = async (user_id) => {
    const token = localStorage.getItem("token");

    if (!token) return null;

    try {
      const fetchedUserId = await axios.get(
        `http://localhost:5000/artDumpster/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser(fetchedUserId.data.data);
    } catch (err) {
      console.error("[GET /App.jsx]: Error fetching user data!");
    }
  };

  const updateUser = async (
    user_id,
    username,
    email,
    password,
    bio,
    location,
    tool_id,
    artstyle_id,
  ) => {
    const token = localStorage.getItem("token");
    try {
      const updatedUser = await axios.put(
        `http://localhost:5000/artDumpster/profile/${user_id}`,
        {
          username,
          email,
          password,
          bio,
          location,
          tool_id,
          artstyle_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUser(updatedUser.data.data);

      await getUserById();
    } catch (err) {
      console.error("[PUT /frontend]: Error updating user!", err.message);
    }
  };

  const deleteUser = async (user_id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `http://localhost:5000/artDumpster/profile/${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.removeItem("token");
      setUser(null);

      console.log("[DELETE /App.jsx]: User Deleted Successfully!");
    } catch (err) {
      console.error("[DELETE /App.jsx]: Error deleting user!");
    }
  };

  const logOutUser = async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
      console.log("Token Deleted!");
    } catch (err) {
      console.error("[LOG OUT /App.jsx]: Error logging out user!", err.message);
    }
  };

  const addArtwork = async (
    title,
    description,
    image_url,
    tool_id,
    artstyle_id,
  ) => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("image_url", image_url);
      formData.append("tool_id", tool_id);
      formData.append("artstyle_id", artstyle_id);

      const newArtwork = await axios.post(
        `http://localhost:5000/artDumpster/artWork/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return newArtwork.data.data;
    } catch (err) {
      console.error("[POST /App.jsx]: Error uploading artwork!", err.message);
    }
  };

  const fetchArtworkByUser = async (user_id) => {
    try {
      const token = localStorage.getItem("token");

      const allArtworkByUser = await axios.get(
        `http://localhost:5000/artDumpster/artWork/user/${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setArtWorks(allArtworkByUser.data.data);
    } catch (err) {
      console.error(
        "[GET /App.jsx]: Error fetching artworks by user!",
        err.message,
      );
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<AdLandingPage onLogin={loginUser} />}
          ></Route>

          <Route
            path="/register"
            element={<AdRegisterPage onRegister={registerUser} />}
          ></Route>

          <Route
            exact
            path="/profile"
            element={
              <AdProtectedRoute user={user}>
                <AdProfilePage
                  user={user}
                  artworks={artworks}
                  onLogout={logOutUser}
                  onEdit={updateUser}
                />
              </AdProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/myDumpster"
            element={
              <AdProtectedRoute user={user}>
                <AdMyDumpsterPage
                  user={user}
                  artworks={artworks}
                  onLogout={logOutUser}
                />
              </AdProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/addAnArtwork"
            element={
              <AdProtectedRoute user={user}>
                <AdAddAnArtworkPage
                  user={user}
                  onUpload={addArtwork}
                  onLogout={logOutUser}
                />
              </AdProtectedRoute>
            }
          ></Route>

          <Route
            exact
            path="/settings"
            element={
              <AdProtectedRoute user={user}>
                <AdSettingsPage
                  user={user}
                  onDelete={deleteUser}
                  onLogOut={logOutUser}
                />
              </AdProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>

      <AdSuccessModal
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => setSuccessModalOpen(false)}
        title={"Registeration successful!"}
        message={"Welcome to ArtDumpster*!"}
      />

      <AdErrorModal
        isErrorModalOpen={isErrorModalOpen}
        onErrorModalClose={() => setErrorModalOpen(false)}
        title={"Invalid credentials!"}
        message={"Try again..."}
      />
    </>
  );
}

export default App;
