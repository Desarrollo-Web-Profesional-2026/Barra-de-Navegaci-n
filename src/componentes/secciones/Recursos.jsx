const Recursos = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Recursos de Aprendizaje
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">📘 Documentación</h3>
            <p className="text-gray-600 text-sm">
              Accede a guías oficiales y material de referencia.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">🛠 Herramientas</h3>
            <p className="text-gray-600 text-sm">
              Editores, extensiones y utilidades para desarrollo web.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">🎥 Tutoriales</h3>
            <p className="text-gray-600 text-sm">
              Videos y cursos recomendados para reforzar conocimientos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Recursos;
