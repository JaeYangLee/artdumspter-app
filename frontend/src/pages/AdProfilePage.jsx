import AdNavBar from "../components/AdNavBar";
function AdProfilePage({ user }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 value={user}>Welcome, {user.username}!</h1>
        <h1 value={user}>{user.email}</h1>
      </div>

      <AdNavBar />
    </>
  );
}

export default AdProfilePage;
