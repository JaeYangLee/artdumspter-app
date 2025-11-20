import { BsJustify } from "react-icons/bs";
function AdNavBar() {
  return (
    <>
      <nav className="fixed top-0 flex flex-row items-center justify-between w-screen p-2 bg-primary z-60 h-14 ">
        <h1 className="text-lg font-bold text-backgroundColor">ArtDumpster*</h1>
        <BsJustify className="md:hidden size-7 text-backgroundColor" />
      </nav>
    </>
  );
}

export default AdNavBar;
