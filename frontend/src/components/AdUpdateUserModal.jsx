import React, { useEffect, useState } from "react";
import { useFetchUserById } from "../hooks/useFetchUserById";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdUpdateUserModal({
  user = null,
  onEdit,
  onDelete,
  isUpdateUserModalOpen,
  onUpdateUserModalClose,
}) {
  const navigate = useNavigate();
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const [newTools, setNewTools] = useState([]);
  const [tool_id, setToolId] = useState("");
  const [newArtStyles, setNewArtStyles] = useState([]);
  const [artstyle_id, setArtStyleId] = useState("");

  useEffect(() => {
    fetchAllTools();
    fetchAllArtStyles();
    if (user) {
      setNewUserName(user.username);
      setNewEmail(user.email);
      setNewBio(user.bio);
      setNewLocation(user.location);
    }
  }, [user]);

  const fetchAllTools = async () => {
    try {
      const res = await axios.get("http://localhost:5000/artDumpster/tools");
      setNewTools(res.data.data);
    } catch (err) {
      console.error("[GET /frontend]: Error fetching all tools!");
    }
  };

  const fetchAllArtStyles = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/artDumpster/artStyles",
      );
      setNewArtStyles(res.data.data);
    } catch (err) {
      console.error("[GET /frontend]: Error fetching all art style!");
    }
  };

  const handleSubmit = async () => {};

  if (!isUpdateUserModalOpen) return null;

  return (
    <>
      <div
        onClick={onUpdateUserModalClose}
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center gap-4 p-4 text-center "
        >
          <section className="border rounded-lg shadow-[4px_4px_0px_0px] bg-backgroundColor">
            <header className="p-2">
              <h1 className="text-lg font-bold text-left">Edit profile</h1>
            </header>

            <hr />

            <form className="flex flex-col gap-8 p-4 bg-white rounded-lg">
              <section className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit username:
                  </label>
                  <input
                    required
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit email:
                  </label>
                  <input
                    required
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">Edit bio:</label>
                  <textarea
                    type="text"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit location:
                  </label>
                  <input
                    required
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit your main tool:
                  </label>
                  <select
                    value={tool_id}
                    onChange={(e) => setToolId(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  >
                    <option>Select your tool:</option>
                    {newTools.map((tools) => (
                      <option key={tools.tool_id} value={tools.tool_id}>
                        {tools.tool_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit art style:
                  </label>
                  <select
                    value={artstyle_id}
                    onChange={(e) => setArtStyleId(e.target.value)}
                    className=" px-2 border rounded shadow-[2px_2px_0px_0px]"
                  >
                    <option>Select your art style:</option>
                    {newArtStyles.map((artstyles) => (
                      <option
                        key={artstyles.artstyle_id}
                        value={artstyles.artstyle_id}
                      >
                        {artstyles.artstyle_name}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <section className="flex flex-row items-end justify-end w-full gap-2">
                <button
                  type="submit"
                  className="px-2 border border-textColor shadow-textColor rounded shadow-[2px_2px_0px_0px] bg-primary text-backgroundColor"
                >
                  Submit
                </button>
                <button
                  onClick={onUpdateUserModalClose}
                  type="button"
                  className="px-2 border border-textColor shadow-textColor rounded shadow-[2px_2px_0px_0px] bg-backgroundColor text-gray opacity-50"
                >
                  Cancel
                </button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default AdUpdateUserModal;
