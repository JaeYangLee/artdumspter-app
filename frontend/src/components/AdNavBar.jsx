import { BsJustify } from "react-icons/bs";
function AdNavBar() {
  return (
    <>
      <nav className="fixed top-0 flex flex-row items-center justify-between w-screen p-2 bg-blue-200 shadow z-60 h-14">
        <h1 className="text-lg font-bold">ArtDumpster*</h1>
        <BsJustify className="md:hidden size-8" />
      </nav>
    </>
  );
}

export default AdNavBar;
