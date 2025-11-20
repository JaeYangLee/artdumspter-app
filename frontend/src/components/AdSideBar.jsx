import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsFolderFill } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsPower } from "react-icons/bs";

function AdSideBar({ user, isSideBarOpen, onSideBarClose }) {
  if (!isSideBarOpen) return null;

  return (
    <>
      <div
        onClick={onSideBarClose}
        className="fixed top-0 flex flex-col items-end justify-center w-full h-full z-60 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center h-full gap-4 p-4 bg-primary"
        >
          <div className="flex items-center gap-2 flex-crow text-backgroundColor">
            <BsPersonCircle className="text-textColor size-8 opacity-80" />
            <h1 className="text-base">{user.username}</h1>
          </div>

          <ul className="flex flex-col items-start w-full gap-2 text-base text-backgroundColor ">
            <div className="flex flex-row items-center gap-2">
              <BsFillPersonVcardFill className="size-4" />
              <Link to="/profile">Profile</Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsFolderFill className="size-4" />
              <Link to="/myDumpster">My Dumpster</Link>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsUpload className="size-4" />

              <Link to="/addAnArtwork">Add an artwork</Link>
            </div>
          </ul>

          <ul className="flex flex-col justify-end w-full h-full gap-2 text-base text-backgroundColor ">
            <div className="flex flex-row items-center gap-2">
              <BsFillGearFill className="size-4" />

              <a>Settings</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsPower className="size-4" />

              <a>Log out</a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdSideBar;
