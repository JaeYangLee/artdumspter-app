import AdNavBar from "../components/AdNavBar";
import { BsPersonCircle } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";
import { BsBrushFill } from "react-icons/bs";
import { BsFillPaletteFill } from "react-icons/bs";
import { useFetchUserById } from "../hooks/useFetchUserById";
import AdUpdateUserModal from "../components/AdUpdateUserModal";
import { useState } from "react";
import AdArtworkList from "../components/AdArtworkList";

function AdProfilePage({ user, artworks, onEdit, onLogout }) {
  const [isUpdateUserModalOpen, setUpdateUserModalOpen] = useState(false);

  if (!user) return <p>Loading...</p>;
  return (
    <>
      <div className="flex flex-col items-center w-screen h-screen gap-4 px-2 py-4 pt-16 md:items-start md:flex-row bg-backgroundColor">
        <section className="w-full md:w-[40vw] md:h-full flex flex-col items-center justify-center border rounded-lg shadow-[4px_4px_0px_0px] py-4 px-4">
          <div className="p-4">
            <BsPersonCircle className="size-20 opacity-80" />
          </div>

          <div className="flex flex-col items-center justify-center px-4 text-textColor">
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <p className="text-sm ">{user.email}</p>
          </div>

          <div className="flex flex-col items-center justify-center py-4 pt-4 text-sm italic font-light text-gray-500">
            <p className="text-center">{`"${user.bio}"`}</p>
          </div>

          <div className="flex flex-col items-start justify-center w-full gap-4 py-4 bg-gray-200 rounded-lg wrap-break-words">
            <div className="flex flex-row items-center justify-center flex-1 gap-8 px-4 text-center">
              <BsPinMapFill className="size-8" />
              <p className="text-sm font-bold">{user.location}</p>
            </div>

            <hr className="w-full opacity-20" />

            <div className="flex flex-row items-center justify-center flex-1 gap-8 px-4 text-center">
              <BsBrushFill className="size-8" />
              <p className="text-sm font-bold">{user.tool_name}</p>
            </div>

            <hr className="w-full opacity-20" />

            <div className="flex flex-row items-center justify-center flex-1 gap-8 px-4 text-center">
              <BsFillPaletteFill className="size-8" />
              <p className="text-sm font-bold">{user.artstyle_name}</p>
            </div>
          </div>

          <div className="flex justify-center w-full pt-8 flex-center">
            <button
              onClick={() => setUpdateUserModalOpen(true)}
              className="w-full px-2 border border-textColor shadow-textColor shadow-[2px_2px_0px_0px] rounded bg-primary text-backgroundColor"
            >
              Edit profile
            </button>
          </div>
        </section>
        <section className="w-full flex-wrap flex flex-col items-center justify-center">
          <h1 className="w-full p-2 text-2xl font-bold text-primary">
            {`${user.username}'s Dumpster`}
          </h1>

          <div>
            <AdArtworkList artworks={artworks} />
          </div>
        </section>
      </div>

      <AdNavBar onLogout={onLogout} user={user} />
      <AdUpdateUserModal
        isUpdateUserModalOpen={isUpdateUserModalOpen}
        onUpdateUserModalClose={() => setUpdateUserModalOpen(false)}
        user={user}
        onEdit={onEdit}
      />
    </>
  );
}

export default AdProfilePage;
