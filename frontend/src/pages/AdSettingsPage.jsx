import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import AdNavBar from "../components/AdNavBar";
import AdValidatorModal from "../components/AdValidatorModal";

function AdSettingsPage({ user, onDelete, onLogOut }) {
  const [isValidatorModalOpen, setValidatorModalOpen] = useState(false);
  return (
    <>
      <div className="w-screen h-screen pt-15">
        <section className="flex flex-col items-center justify-center w-full">
          <div
            onClick={() => setValidatorModalOpen(true)}
            className="flex flex-row items-center justify-start w-full gap-2 px-2 py-4 border-b text-textColor"
          >
            <BsFillTrashFill />
            <label>Delete account</label>
          </div>
          <div className="flex flex-row items-center justify-start w-full gap-2 px-2 py-4 border-b text-textColor">
            <BsInfoCircleFill />
            <label>About</label>
          </div>
        </section>
      </div>

      <AdNavBar onLogOut={onLogOut} user={user} />

      <AdValidatorModal
        user={user}
        title={"Are you sure?"}
        subject={"account"}
        message={"Your profile will be deleted"}
        onDelete={() => onDelete(user.user_id)}
        isValidatorModalOpen={isValidatorModalOpen}
        onValidatorModalClose={() => setValidatorModalOpen(false)}
      />
    </>
  );
}

export default AdSettingsPage;
