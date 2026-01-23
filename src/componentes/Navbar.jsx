import { useState } from "react";
import { navbarLinks } from "../data/data";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      {/* NAVBAR ANIMADO */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/70 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="container flex justify-between items-center py-8 font-bold">

          {/* LOGO ANIMADO */}
          <motion.div
            className="text-2xl flex items-center gap-2 uppercase cursor-pointer"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ImBooks />
            <p>El sitio de BARG</p>
            <p className="text-secondary">Cursos</p>
          </motion.div>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <li key={item.id} className="relative">
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      to={item.url}
                      className="inline-block py-1 px-3 hover:text-primary"
                    >
                      {item.title}
                    </Link>

                    {/* LÍNEA ANIMADA */}
                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
                      variants={{
                        initial: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* ICONOS */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
            >
              <CiSearch />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300"
            >
              <PiShoppingCartLight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary duration-300"
            >
              Ingresar
            </motion.button>
          </div>

          {/* MENÚ MÓVIL */}
          <div className="md:hidden">
            <motion.div
              animate={{
                rotate: abierto ? 90 : 0,
                scale: abierto ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <MdMenu
                className="text-4xl cursor-pointer"
                onClick={() => setAbierto(!abierto)}
              />
            </motion.div>
          </div>

        </div>
      </motion.nav>

      {/* MENÚ RESPONSIVO */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  );
};

export default Navbar;
