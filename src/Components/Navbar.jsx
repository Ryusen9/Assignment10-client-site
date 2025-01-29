import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  FaHome,
  FaPlusCircle,
  FaUser,
  FaDonate,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();
  const navRef = useRef(null);
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsVisible(true);
      navRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      navRef.current.classList.add('floating-nav');
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

  return (
    <div ref={navRef} className="fixed w-full top-0 z-50 bg-slate-100">
      <nav className="flex items-center justify-between px-6 md:px-9 py-1 md:py-2">
        <div>
          <p className="font-Teko text-xl md:text-3xl text-zinc-900 font-semibold tracking-wide">
            CrowdCube
          </p>
        </div>

        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-9 left-0 w-full bg-slate-100 md:static md:flex md:w-auto md:bg-transparent items-center`}
        >
          {isMenuOpen && (
            <div className="flex w-full pb-4 items-center justify-center gap-3 mt-3 md:hidden">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <Link to="/login">
                <button className="btn btn-primary text-white outline-none border-none">
                  Login
                </button>
              </Link>
              {/* <Link to="/register">
                <button className="btn btn-outline text-gray-600">
                  Register
                </button>
              </Link> */}
            </div>
          )}
          <div className="flex flex-col md:flex-row md:items-center justify-center w-full md:w-auto">
            <Link
              to="/"
              className="flex items-center gap-2 text-zinc-900 font-medium py-2 text-sm lg:text-base md:py-0 px-4 hover:text-purple-400 duration-300"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/addCampaign"
              className="flex items-center gap-2 text-zinc-900 font-medium py-2 text-sm lg:text-base md:py-0 px-4 hover:text-purple-400 duration-300"
            >
              <FaPlusCircle />
              <span>Add Campaign</span>
            </Link>
            <Link
              to="/myCampaign"
              className="flex items-center gap-2 text-zinc-900 font-medium py-2 text-sm lg:text-base md:py-0 px-4 hover:text-purple-400 duration-300"
            >
              <FaUser />
              <span>My Campaign</span>
            </Link>
            <Link
              to="/myDonations"
              className="flex items-center gap-2 text-zinc-900 font-medium py-2 text-sm lg:text-base md:py-0 px-4 hover:text-purple-400 duration-300"
            >
              <FaDonate />
              <span>My Donation</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex gap-3">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:bg-transparent hover:outline-none hover:border-none active:outline-none active:border-none bg-transparent shadow-none active:bg-transparent  m-1"
            >
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content flex menu bg-base-100 rounded-box z-[1] -right-6 items-center justify-center p-2 shadow"
            >
              <li>
                <Link to="/login">
                  <button className="btn btn-primary text-white outline-none border-none">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="btn btn-outline text-gray-600">
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

export default Navbar;
