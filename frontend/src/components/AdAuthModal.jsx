import { Link } from "react-router-dom";

function AdDecisionModal({ isAuthModalOpen, onAuthModalClose }) {
  if (!isAuthModalOpen) return null;
  return (
    <>
      <div
        onClick={onAuthModalClose}
        className="fixed top-0 flex flex-col items-center justify-center w-screen h-screen z-70 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-row items-center justify-center gap-4 p-4 bg-white rounded"
        >
          <Link to="/register" className="px-2 border rounded">
            Register
          </Link>
          <Link to="/login" className="px-2 border rounded">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdDecisionModal;
