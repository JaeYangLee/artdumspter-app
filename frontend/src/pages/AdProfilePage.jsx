import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdNavBar from "../components/AdNavBar";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";

function AdProfilePage({ onLogout }) {
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
  }, []);

  if (!user) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center pt-16 w-screen h-screen p-2">
        <div className="flex flex-col items-center w-full justify-center  rounded py-4 px-2 gap-4 bg-gray-200">
          <div className="flex flex-col items-center justify-center gap-2">
            <BsPersonCircle className="text-textColor size-28 opacity-80" />
            <h1 className="text-lg font-bold">{user.username}</h1>
            <p className="w-full italic">
              <span className="opacity-40">" </span>
              {user.bio}
              <span> "</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center gap-4 w-full justify-start">
              <BsEnvelope className="size-6 " />
              <h3>{user.email}</h3>
            </div>
            <div className="flex flex-row  w-full justify-start items-center gap-4">
              <BsFillPinMapFill className="size-6" />
              <h3>{user.location}</h3>
            </div>

            <div className="pt-8 w-full">
              <button className="px-2 rounded border w-full bg-primary text-backgroundColor border-textColor shadow-textColor shadow-[2px_2px_0px_0px]">
                Edit profile
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full  md:h-full rounded py-4 px-2 gap-4">
          <div className="flex flex-col w-full items-start justify-start">
            <h1 className="font-bold">Most used tool:</h1>
            <h3 className="w-full bg-gray-200 p-2">{user.tool_name}</h3>
          </div>
          <div className="flex flex-col w-full items-start justify-start">
            <h1 className="font-bold">Art style:</h1>
            <h3 className="w-full bg-gray-200 p-2">{user.artstyle_name}</h3>
          </div>

          <div className="flex md:h-full items-end">
            <button
              onClick={onLogout}
              className=" w-full border rounded  bg-secondary shadow-[2px_2px_0px_0px]"
            >
              Log out
            </button>
          </div>
        </div>
      </div>

      <AdNavBar />
    </>
  );
}

export default AdProfilePage;
