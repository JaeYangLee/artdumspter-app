import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsFolderFill } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsPower } from "react-icons/bs";
import { useState } from "react";
import AdSideBar from "./AdSideBar";
function AdNavBar({ user, onLogout }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 flex flex-row items-center justify-between w-screen p-2 bg-primary z-60 h-14 ">
        <h1 className="text-lg font-bold text-backgroundColor">ArtDumpster*</h1>
        <section>
          <BsJustify
            onClick={() => setSideBarOpen(true)}
            className="md:hidden size-7 text-backgroundColor"
          />
        </section>
        <section className="w-full items-center justify-center hidden md:flex flex-row text-backgroundColor gap-4">
          <Link
            to="/profile"
            className="flex flex-col items-center justify-center gap-1"
          >
            <BsFillPersonVcardFill className="size-5" />
            <label className="text-xs">Profile</label>
          </Link>
          <Link
            to="/myDumpster"
            className="flex flex-col items-center justify-center gap-1"
          >
            <BsFolderFill className="size-5" />
            <label className="text-xs">My Dumpster</label>
          </Link>
          <Link
            to="/addAnArtwork"
            className="flex flex-col items-center justify-center gap-1"
          >
            <BsUpload className="size-5" />
            <label className="text-xs">Upload</label>
          </Link>
        </section>
        <section className="hidden md:flex flex-row gap-4 items-end justify-end">
          <div className="flex flex-col text-backgroundColor items-center justify-center gap-1">
            <BsFillGearFill className="size-5" />
            <label className="text-xs">Settings</label>
          </div>
          <div
            onClick={onLogout}
            className="flex flex-col text-backgroundColor items-center justify-center gap-1"
          >
            <BsPower className="size-5" />
            <label className="text-xs">Logout</label>
          </div>
        </section>
      </nav>

      <AdSideBar
        user={user}
        isSideBarOpen={isSideBarOpen}
        onSideBarClose={() => setSideBarOpen(false)}
        onLogout={onLogout}
      />
    </>
  );
}

export default AdNavBar;
