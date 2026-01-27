import { AnimatePresence, motion } from "motion/react";

const MenuResponsivo = ({ open, navbarLinks }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          {...animacion}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="bg-primary text-white rounded-b-md py-7 m-6 text-xl font-semibold uppercase">
            <ul className="flex flex-col items-center gap-10">
              {navbarLinks.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <a href={item.url}>{item.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  
};

export default MenuResponsivo;
