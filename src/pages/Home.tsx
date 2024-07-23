import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../components/magicui/typing-animation";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconDownload,
} from "@tabler/icons-react";

import profile from "../assets/profile.png";

const Home = () => {
  return (
    <main
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen mx-5 sm:mx-5 md:mx-5 lg:mx-10 xl:mx-10 text-white"
      style={{ maxHeight: `calc(100vh - 5rem)` }}
    >
      <AnimatePresence>
        <section className="flex flex-1 flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <BoxReveal width="100%">
              <h1 className="text-center flex flex-wrap justify-center gap-2 text-7xl font-semibold">
                I am{" "}
                <motion.p
                  initial={{ y: -50 }}
                  animate={{ y: 0, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                  transition={{ duration: 1 }}
                  className="text-red-500 font-bold"
                >
                  Ankit{" "}
                </motion.p>
                <motion.p
                  initial={{ y: 50 }}
                  animate={{ y: 0, opacity: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                  transition={{ duration: 1 }}
                  className="text-red-500 font-bold"
                >
                  Tiwari
                </motion.p>
              </h1>
            </BoxReveal>

            <BoxReveal width="100%">
              <h2 className="text-center text-xl flex gap-2 justify-center items-center font-semibold">
                I am a{" "}
                <TypingAnimation
                  text="Web Developer"
                  className="text-red-500"
                />
              </h2>
            </BoxReveal>

            <BoxReveal width="100%">
              <p className="text-md font-semibold text-center">
                👋 I'm Ankit, a passionate developer exploring the realms of
                coding and technology. 🚀
              </p>
            </BoxReveal>

            <BoxReveal width="100%">
              <div className="flex p-2 gap-4 justify-center w-full">
                <a href="https://www.linkedin.com/in/ankittiwari3105/">
                  <IconBrandLinkedin className="text-blue-500" />
                </a>
                <a href="whatsapp://send?text=Hello World!&phone=+919519412446">
                  <IconBrandWhatsapp className="text-green-500" />
                </a>
                <a href="https://www.instagram.com/i_am_mr_ankit/">
                  <IconBrandInstagram className="text-red-500" />
                </a>
              </div>
            </BoxReveal>

            <BoxReveal>
              <a
                href=""
                download="CV.pdf"
                className="flex items-center justify-center"
              >
                <button className="py-2 px-4 rounded-md font-semibold bg-white text-black flex gap-2 w-48 shadow-2xl shadow-red-400">
                  <IconDownload className="text-black hover:-rotate-90 duration-300" />
                  <motion.p whileHover={{ scale: 1.1 }}>Download CV</motion.p>
                </button>
              </a>
            </BoxReveal>
          </div>
        </section>
      </AnimatePresence>
      <section className="flex justify-center items-center flex-1 mt-20 sm:mt-20 md:mt-20 lg:mt-0 xl:mt-0">
        <BoxReveal>
          <motion.img
            src={profile}
            alt=""
            className="drop-shadow-custom bg-blend-overlay"
            whileHover={{ rotateX: 15, rotateY: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </BoxReveal>
      </section>
    </main>
  );
};

export default Home;
