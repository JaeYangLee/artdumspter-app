import React, { useState } from "react";

function AdUpdateUser({ isUpdateUserModalOpen, onUpdateUserModalClose }) {
  if (isUpdateUserModalOpen) return null;

  return (
    <>
      <div className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen z-60 bg-black/50">
        <div className="flex flex-col items-center justify-center gap-4 p-4 text-center ">
          <section className="border rounded-lg shadow-[4px_4px_0px_0px] bg-white">
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
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit password:
                  </label>
                  <input
                    required
                    type="password"
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">Edit bio:</label>
                  <textarea
                    type="text"
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
                    className="px-2 border rounded shadow-[2px_2px_0px_0px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="w-full text-sm text-start">
                    Edit your main tool?
                  </label>
                  <select className="px-2 border rounded shadow-[2px_2px_0px_0px]">
                    <option value="">Select your tool:</option>
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
