import { BsJustify } from "react-icons/bs";
import AdSideBar from "./AdSideBar";
import { useState } from "react";
function AdNavBar({ user }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 flex flex-row items-center justify-between w-screen p-2 bg-primary z-60 h-14 ">
        <h1 className="text-lg font-bold text-backgroundColor">ArtDumpster*</h1>
        <BsJustify
          onClick={() => setSideBarOpen(true)}
          className="md:hidden size-7 text-backgroundColor"
        />
      </nav>

      <AdSideBar
        user={user}
        isSideBarOpen={isSideBarOpen}
        onSideBarClose={() => setSideBarOpen(false)}
      />
    </>
  );
}

export default AdNavBar;
