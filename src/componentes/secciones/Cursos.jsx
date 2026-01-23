const Cursos = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container px-6">

        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Nuestros Cursos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            { title: "React", img: "/images/cursos1.jpg" },
            { title: "Tailwind CSS", img: "/images/cursos2.jpg" },
            { title: "Docker", img: "/images/cursos3.jpg" },
          ].map((curso, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* IMAGEN */}
              <img
                src={curso.img}
                alt={curso.title}
                className="w-full h-40 object-cover"
              />

              {/* TEXTO */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {curso.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Aprende desde cero con ejemplos reales.
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Cursos;
