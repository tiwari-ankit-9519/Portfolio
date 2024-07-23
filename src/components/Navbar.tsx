import { useState } from "react";
import {
  IconHomeDot,
  IconFileAnalytics,
  IconMapStar,
  IconPhone,
  IconCategory2,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActiveTab = (tabname: string) => {
    setActive(tabname);
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 shadow-lg font-poppins font-semibold h-20">
      <img src="" alt="logo" />
      <div
        className="relative flex sm:flex md:flex lg:hidden xl:hidden items-center cursor-pointer"
        onClick={handleMenuClick}
      >
        <IconCategory2 className="text-blue-500" />
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="absolute top-14 right-1 bg-white shadow-2xl p-5 rounded-md flex flex-col gap-5 w-44 z-50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "12rem", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Link to="/" className="flex items-center gap-2 cursor-pointer">
                  <IconHomeDot />
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="/projects"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IconFileAnalytics />
                  Projects
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="/skills"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IconMapStar />
                  Skills
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IconPhone />
                  Contact Me
                </Link>
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <motion.ul className="gap-5 items-center text-lg text-white hidden sm:hidden md:hidden lg:flex xl:flex">
        <motion.li
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className={`${active === "Home" ? "text-red-500" : ""} duration-300`}
          onClick={() => handleActiveTab("Home")}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className={`${
            active === "Projects" ? "text-red-500" : ""
          } duration-300`}
          onClick={() => handleActiveTab("Projects")}
        >
          <Link to="/">Projects</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className={`${
            active === "Skills" ? "text-red-500" : ""
          } duration-300`}
          onClick={() => handleActiveTab("Skills")}
        >
          <Link to="/">Skills</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          className={`${
            active === "Contact Me" ? "text-red-500" : ""
          } duration-300`}
          onClick={() => handleActiveTab("Contact Me")}
        >
          <Link to="/">Contact Me</Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
