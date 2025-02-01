import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaPlusCircle,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { ContextProvider } from "../Context/Context";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();
  const navRef = useRef(null);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsVisible(true);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      navRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
      navRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isVisible]);

  const [data, setData] = useState(null);
  const { user, signOutUser } = useContext(ContextProvider);

  useEffect(() => {
    if (user?.uid) {
      fetch(`http://localhost:4980/users/${user.uid}`)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => {
          Swal.fire({
            title: "Error Fetching User Data!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Continue",
          })
        });
    }
  }, [user?.uid]);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonText: "Continue",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error Logging Out!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Continue",
        });
      });
    setData(null);
  };

  return (
    <div ref={navRef} className="fixed w-full top-0 z-50 bg-slate-100">
      <nav className="flex items-center justify-between px-6 md:px-9 py-1 md:py-2">
        <p className="font-Teko text-xl md:text-3xl text-zinc-900 font-semibold tracking-wide">
          CrowdCube
        </p>

        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div
          className={`absolute top-9 left-0 w-full bg-slate-100 md:static md:flex md:w-auto md:bg-transparent items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {isMenuOpen && (
            <div className="flex w-full pb-4 items-center justify-center gap-3 mt-3 md:hidden">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src={data?.image || "default-avatar.png"} alt="User" />
                </div>
              </div>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-primary text-white outline-none border-none"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary text-white outline-none border-none">
                    Login
                  </button>
                </Link>
              )}
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-center justify-center w-full md:w-auto">
            <NavItem to="/" icon={<FaHome />} label="Home" />
            <NavItem
              to="/addCampaign"
              icon={<FaPlusCircle />}
              label="Add Campaign"
            />
            <NavItem to="/myCampaign" icon={<FaUser />} label="My Campaign" />
          </div>
        </div>

        <div className="hidden md:flex gap-3">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent shadow-none"
            >
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-7 lg:w-10 rounded-full ring ring-offset-2">
                  <img
                    src={data?.image || "/public/Characters/user.svg"}
                    alt="U"
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content flex menu bg-base-100 rounded-box z-[1] -right-6 items-center justify-center p-2 shadow"
            >
              <li>
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-primary text-white outline-none border-none"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-primary text-white outline-none border-none">
                      Login
                    </button>
                  </Link>
                )}
              </li>
              <li>
                <Link to="/register">
                  <button
                    className={`btn btn-outline text-gray-600 ${
                      user ? "hidden" : "block"
                    }`}
                  >
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-2 text-zinc-900 font-medium py-2 text-sm lg:text-base md:py-0 px-4 hover:text-purple-400 duration-300"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default Navbar;
