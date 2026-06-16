import React, { useEffect, useState } from "react";
import axios from "axios";
import AdSuccessModal from "./AdSuccessModal";

function AdUpdateUserModal({
  user = null,
  onEdit,
  onDelete,
  isUpdateUserModalOpen,
  onUpdateUserModalClose,
}) {
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newTools, setNewTools] = useState([]);
  const [tool_id, setToolId] = useState("");
  const [newArtStyles, setNewArtStyles] = useState([]);
  const [artstyle_id, setArtStyleId] = useState("");
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !newUserName.trim() ||
        !newEmail.trim() ||
        !newBio.trim() ||
        !newLocation.trim() ||
        !tool_id ||
        !artstyle_id
      ) {
        return;
      }

      await onEdit(
        user.user_id,
        newUserName,
        newEmail,
        "",
        newBio,
        newLocation,
        tool_id,
        artstyle_id,
      );

      setSuccessModalOpen(true);
    } catch (err) {
      console.error("[PUT /frontend]: Error updating user!");
    }
  };

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
          <div className="border rounded-lg shadow-[4px_4px_0px_0px] bg-backgroundColor">
            <section className="flex flex-row items-center justify-between rounded-t-md bg-primary">
              <header className="px-2">
                <h1 className="font-bold text-left text-backgroundColor lg:text-lg">
                  Edit profile
                </h1>
              </header>

              <div className="flex flex-row items-center justify-center gap-2 px-2">
                <p className="text-xs text-green-500 lg:text-sm">●</p>
                <p className="text-xs text-yellow-400 lg:text-sm">●</p>
                <p
                  onClick={onUpdateUserModalClose}
                  className="text-xs text-red-500 lg:text-sm"
                >
                  ●
                </p>
              </div>
            </section>

            <hr />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 p-4 bg-white rounded-lg"
            >
              <section className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start lg:text-lg">
                    Edit username:
                  </label>
                  <input
                    required
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px] lg:text-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start lg:text-lg">
                    Edit email:
                  </label>
                  <input
                    required
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px] lg:text-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start lg:text-lg">
                    Edit bio:
                  </label>
                  <textarea
                    type="text"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px] lg:text-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start lg:text-lg">
                    Edit location:
                  </label>
                  <input
                    required
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px] lg:text-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start lg:text-lg">
                    Edit your main tool:
                  </label>
                  <select
                    value={tool_id}
                    onChange={(e) => setToolId(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px] lg:text-lg"
                  >
                    <option value="">Select your tool:</option>
                    {newTools.map((tools) => (
                      <option key={tools.tool_id} value={tools.tool_id}>
                        {tools.tool_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start lg:text-lg">
                    Edit art style:
                  </label>
                  <select
                    value={artstyle_id}
                    onChange={(e) => setArtStyleId(e.target.value)}
                    className=" px-2 border rounded shadow-[2px_2px_0px_0px] lg:text-lg"
                  >
                    <option value="">Select your art style:</option>
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

              <section className="flex flex-row items-end justify-end w-full gap-2 lg:text-lg">
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
          </div>
        </div>
      </div>

      <AdSuccessModal
        title={"Profile Update Successful!"}
        message={
          "Your profile is now up to date. Let’s keep the creativity flowing!"
        }
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessModalClose={() => {
          setSuccessModalOpen(false);
          onUpdateUserModalClose();
        }}
      />
    </>
  );
}

export default AdUpdateUserModal;
