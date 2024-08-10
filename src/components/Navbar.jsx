import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeMenu = () => setNav(false);

  const handleNav = () => setNav(!nav);
  return (
    <header className="w-full py-4 px-6 sticky top-0 bg-slate-200">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* ----Logo---- */}
        <div className="md:w-40 w-32 overflow-hidden">
          <a target="_self" href="/">
            <img
              src="./Images/MMBadsha-Logo.png"
              alt="logo"
              className="w-full h-full mix-blend-multiply"
            />
          </a>
        </div>
        {/* -------Nav----- */}
        <nav>
          <ul
            className={`list-none gap-10 md:flex md:static md:h-0 md:flex-row absolute top-[3.9rem] left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-200  transition-all ease-in-out duration-300 delay-150 ${
              nav ? "top-24" : "left-[-100%]"
            }`}
          >
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-gray-600 font-semibold hover:text-black transition-all duration-200"
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-600 font-semibold hover:text-black transition-all duration-200"
                onClick={closeMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-600 font-semibold hover:text-black transition-all duration-200"
                onClick={closeMenu}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-79}
                className="text-gray-600 font-semibold hover:text-black transition-all duration-200"
                onClick={closeMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-600 font-semibold hover:text-black transition-all duration-200 ease-linear"
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* ---Menu_Buttons-- */}
          <div
            className="md:hidden block cursor-pointer z-20"
            onClick={handleNav}
          >
            {nav ? <IoClose size={30} /> : <IoMenu size={30} />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
