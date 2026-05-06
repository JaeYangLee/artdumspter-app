import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import AdNavBar from "../components/AdNavBar";

function AdSettingsPage({ user, onDelete, onLogOut }) {
  return (
    <>
      <div className="w-screen h-screen pt-15">
        <section className="flex flex-col items-center justify-center w-full">
          <div className="w-full flex flex-row items-center justify-start gap-2 py-4 px-2 text-textColor border-b">
            <BsFillTrashFill />
            <label>Delete account</label>
          </div>
          <div className="w-full flex flex-row items-center justify-start gap-2 py-4 px-2 text-textColor border-b">
            <BsInfoCircleFill />
            <label>About</label>
          </div>
        </section>
      </div>

      <AdNavBar onLogOut={onLogOut} user={user} />
    </>
  );
}

export default AdSettingsPage;
