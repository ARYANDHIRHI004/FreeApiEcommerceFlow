import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../stores/useAuth";
import { Loader2Icon, LogOut  } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { authUser, logoutUser, isLoggingOut } = useAuth();

  return (
    <nav className=" border-b border-gray-300 fixed w-[100%] bg-white shadow-sm">
      <div className="flex justify-between items-center w-full px-8 py-4">
        <ul className="flex space-x-10">
          <li className="text-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl">
            <Link>About</Link>
          </li>
          <li className="text-xl">
            <Link>Contect Us</Link>
          </li>
        </ul>
        {!authUser ? (
          <div className="flex space-x-4">
            <Link to={"/login"}>
              <Button variant={"outline"}>Login</Button>
            </Link>
            <Link to={"/signup"}>
              {" "}
              <Button>Sign Up</Button>{" "}
            </Link>
          </div>
        ) : (
          <Button onClick={logoutUser}>
            {isLoggingOut ? (
              <Loader2Icon  className="size-5 animate-spin" />
            ) : (
              <div className="flex items-center gap-1">
                Logout
                <LogOut />
              </div>
            )}
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
