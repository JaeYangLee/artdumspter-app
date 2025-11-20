import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdNavBar from "../components/AdNavBar";
import { useFetchUserById } from "../hooks/useFetchUserById";

function AdMyDumpsterPage({ onLogout }) {
  const user = useFetchUserById();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen full-screen pt-14">
        <h1>My Dumpster Page</h1>
      </div>

      <AdNavBar user={user} onLogout={onLogout} />
    </>
  );
}

export default AdMyDumpsterPage;
