import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import avatarImg from "../../assets/images/placeholder.jpg";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu color="black" />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full w-8 h-8"
              referrerPolicy="no-referrer"
              src={user?.photoURL ? user?.photoURL : avatarImg}
              alt="profile"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 rounded-xl shadow-md w-[50vw] lg:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col ">
            <Link
              to="/"
              className="px-4 lg:hidden block py-3 hover transition font-semibold text-black "
            >
              Home
            </Link>
            <Link
              to="/petlisting"
              className="px-4 lg:hidden block py-3 hover transition font-semibold text-black"
            >
              Pet listing
            </Link>
            <Link
              to="/donationcampaign"
              className="px-4 lg:hidden block py-3 hover transition font-semibold text-black"
            >
              donation campaign
            </Link>
            {user ? (
              <>
                {" "}
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover transition font-semibold text-black"
                >
                  dashboard
                </Link>
                <button
                  onClick={logOut}
                  className="px-4 py-3 uppercase flex hover transition font-semibold text-black"
                >
                  logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover transition font-semibold text-black"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover transition font-semibold text-black"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
