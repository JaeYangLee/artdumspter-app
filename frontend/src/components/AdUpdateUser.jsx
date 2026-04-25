import React, { useState } from "react";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdUpdateUser({
  user = [],
  onEdit,
  isUpdateUserModalOpen,
  onUpdateUserModalClose,
}) {
  const [newUserName, setNewUserName] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newBio, setNewBio] = useState(user.bio);
  const [newLocation, setNewLocation] = useState(user.location);

  if (!isUpdateUserModalOpen) return null;

  const handleSubmit = async () => {};

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
                    value={user.username}
                    onChange={() => setNewUserName(e.target.value)}
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
                    value={user.email}
                    onChange={() => setNewEmail(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">Edit bio:</label>
                  <textarea
                    type="text"
                    value={user.bio}
                    onChange={() => setNewBio(e.target.value)}
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
                    value={user.location}
                    onChange={() => setNewLocation(e.target.value)}
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit your main tool?
                  </label>
                  <select className="px-2 border rounded shadow-[2px_2px_0px_0px]">
                    <option>Select your tool:</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit art style?
                  </label>
                  <select className=" px-2 border rounded shadow-[2px_2px_0px_0px]">
                    <option value="">Select your art style:</option>
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
        <footer></footer>
      </div>
    </>
  );
}

export default AdUpdateUser;
