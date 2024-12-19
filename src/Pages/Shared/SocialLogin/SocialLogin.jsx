import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";

export default function SocialLogin() {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      console.log(result.user);
      navigate(location.state || '/')
    });
  };

  return (
    <div>
      <button
        className="bg-red-400 text-white text-center w-11/12 mx-auto p-2 rounded-lg mb-2 ml-4"
        onClick={handleGoogleSignIn}
      >
        Google
      </button>
    </div>
  );
}
