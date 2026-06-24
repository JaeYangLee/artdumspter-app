import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import AdNavBar from "../components/AdNavBar";
import AdValidatorModal from "../components/AdValidatorModal";
import AdThemeModal from "../components/AdThemeModal";

function AdSettingsPage({ user, onDelete, setTheme, onLogout }) {
  const [isValidatorModalOpen, setValidatorModalOpen] = useState(false);
  const [isThemeModalOpen, setThemeModalOpen] = useState(false);
  return (
    <>
      <div className="w-screen h-screen pt-15 bg-backgroundColor">
        <section className="flex flex-col items-center justify-center w-full">
          <div
            onClick={() => setValidatorModalOpen(true)}
            className="flex flex-row items-center justify-start w-full gap-2 px-2 py-4 border-b md:justify-center text-textColor hover:shadow-[inset_0px_-4px_4px_rgb(0,0,0,0.1)] transition duration-300 cursor-pointer"
          >
            <BsFillTrashFill />
            <label>Delete account</label>
          </div>
          <div
            onClick={() => setThemeModalOpen(true)}
            className="flex flex-row items-center justify-start w-full gap-2 px-2 py-4 border-b text-textColor md:justify-center cursor-pointer hover:shadow-[inset_0px_-8px_8px_rgb(0,0,0,0.1)] transition duration-300"
          >
            <BsFillMoonFill />
            <label>Theme</label>
          </div>
          <div className="flex flex-row items-center justify-start w-full gap-2 px-2 py-4 border-b text-textColor md:justify-center cursor-pointer hover:shadow-[inset_0px_-8px_8px_rgb(0,0,0,0.1)] transition duration-300">
            <BsInfoCircleFill />
            <label>About</label>
          </div>
        </section>
      </div>

      <AdNavBar onLogout={onLogout} user={user} />

      <AdValidatorModal
        user={user}
        title={"Are you sure?"}
        subject={"account"}
        message={"Your profile will be deleted"}
        onDelete={() => onDelete(user.user_id)}
        isValidatorModalOpen={isValidatorModalOpen}
        onValidatorModalClose={() => setValidatorModalOpen(false)}
      />

      <AdThemeModal
        setTheme={setTheme}
        isThemeModalOpen={isThemeModalOpen}
        onThemeModalClose={() => setThemeModalOpen(false)}
      />
    </>
  );
}

export default AdSettingsPage;
