import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../stores/useAuth";
import { LoaderCircle } from "lucide-react";

const Navbar = () => {
  const { authUser, logoutUser, isLoggingOut } = useAuth();

  return (
    <nav className=" border-b border-gray-300 fixed w-[100%] bg-white shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-4">
        <ul className="flex space-x-10">
          <li className="text-xl"><Link to={"/"}>Home</Link></li>
          <li className="text-xl"><Link>About</Link></li>
          <li className="text-xl"><Link>Contect Us</Link></li>
        </ul>
        {!authUser ? (
          <div className="flex space-x-4">
            <Link className="btn btn-natural btn-outline" to={"/login"}>
              Login
            </Link>
            <Link className="btn btn-natural btn-outline" to={"/signup"}>
              Sign Up
            </Link>
          </div>
        ) : (
          <button onClick={logoutUser} className="btn btn-natural btn-outline ">
            {isLoggingOut ? (
              <LoaderCircle className="size-5 animate-spin" />
            ) : (
              "Logout"
            )}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
