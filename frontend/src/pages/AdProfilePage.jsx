import AdNavBar from "../components/AdNavBar";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { useFetchUserById } from "../hooks/useFetchUserById";
import AdUpdateUserModal from "../components/AdUpdateUserModal";
import { useState } from "react";

function AdProfilePage({ onLogout }) {
  const user = useFetchUserById();
  const [isUpdateUserModalOpen, setUpdateUserModalOpen] = useState(false);

  if (!user) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen p-2 pt-16 md:flex-row">
        <div className="flex flex-col items-center justify-center w-full gap-4 px-2 py-4 bg-gray-200 rounded md:h-full">
          <div
            to="/profile"
            className="flex flex-col items-center justify-center gap-2"
          >
            <BsPersonCircle className="text-textColor size-28 opacity-80" />
            <h1 to="/profile" className="text-lg font-bold">
              {user.username}
            </h1>
            <p className="w-full italic">
              <span className="opacity-40">" </span>
              {user.bio}
              <span> "</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center justify-start w-full gap-4">
              <BsEnvelope className="size-6 " />
              <h3>{user.email}</h3>
            </div>
            <div className="flex flex-row items-center justify-start w-full gap-4">
              <BsFillPinMapFill className="size-6" />
              <h3>{user.location}</h3>
            </div>

            <div className="flex flex-col items-start justify-start w-full pt-4">
              <h1 className="font-bold">Most used tool:</h1>
              <h3 className="w-full p-2 ">•{user.tool_name}</h3>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <h1 className="font-bold">Art style:</h1>
              <h3 className="w-full p-2">•{user.artstyle_name}</h3>
            </div>
          </div>

          <div className="w-full pt-8">
            <button
              onClick={() => setUpdateUserModalOpen(true)}
              className="px-2 rounded border w-full bg-primary text-backgroundColor border-textColor shadow-textColor shadow-[2px_2px_0px_0px]"
            >
              Edit profile
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 px-2 py-4 rounded md:h-full">
          <h1 className="font-bold text-lg">{`• ${user.username}'s art dumpster:`}</h1>
        </div>
      </div>

      <AdNavBar onLogout={onLogout} user={user} />
      <AdUpdateUserModal
        isUpdateUserModalOpen={isUpdateUserModalOpen}
        onUpdateUserModalClose={() => setUpdateUserModalOpen(false)}
        user={user}
      />
    </>
  );
}

export default AdProfilePage;
