import { useState } from "react";
import { navbarLinks } from "../data/data";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";
import { motion } from "motion/react"; //Animacion 1

//import data from 'autoprefixer/data/index.js'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8 font-bold">

          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 uppercase">
            <ImBooks />
            <p>El sitio de BARG</p>
            <p className="text-secondary">Cursos</p>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <motion.a
                    href={item.url}
                    className="relative inline-block py-1 px-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover="hover"
                  >
                    {item.title}

                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
                      variants={{
                        hover: { scaleX: 1 },
                        initial: { scaleX: 0 },
                      }}
                      initial="initial"
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.a>º

                </li>
              ))}
            </ul>
          </div>

          {/* Iconos */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <PiShoppingCartLight />
            </button>
            <button className="hidden md:block bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary duration-300">
              Ingresar
            </button>
          </div>

          {/* Menú móvil */}
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
      </nav>

      {/* Menú responsivo */}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
    </>
  );
};

export default Navbar;
