import React from "react";
import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../customHooks/useFetchUserById";

function AdAddAnArtworkPage({}) {
  const user = useFetchUserById();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen pt-14">
        <h1>Add an artwork page</h1>
      </div>
      <AdNavBar user={user} />
    </>
  );
}

export default AdAddAnArtworkPage;
