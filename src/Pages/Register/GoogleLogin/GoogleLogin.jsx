import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          badge: "bronze",
        };

        axiosPublic
          .post('/users', userInfo)
          .then((response) => {
            console.log("User saved:", response.data);
            navigate('/');
          })
          .catch((error) => {
            console.error("Error saving user to the database:", error.message);
            alert("Failed to save user data. Please try again.");
          })
          .finally(() => setLoading(false));
      })
      .catch((err) => {
        console.error("Google sign-in error:", err.message);
        alert("Failed to sign in with Google. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`btn bg-[#007bff] hover:bg-[#007bff] w-10/12 mx-auto mb-3 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Signing in..." : <><FaGoogle /> Google</>}
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
