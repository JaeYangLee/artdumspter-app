import React from "react";
import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdAddAnArtworkPage({ onLogout }) {
  const user = useFetchUserById();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen pt-14">
        <h1 className="">Add an artwork page</h1>
      </div>
      <AdNavBar onLogout={onLogout} user={user} />
    </>
  );
}

export default AdAddAnArtworkPage;
