const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center">
      <div className="container grid md:grid-cols-2 gap-12 items-center px-6">

        {/* TEXTO */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Aprende <span className="text-blue-600">Tecnología</span>  
            <br />de forma moderna
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Domina React, Tailwind y Docker con cursos diseñados
            para el mundo real.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg">
            Ver Cursos
          </button>
        </div>

        {/* IMAGEN */}
        <div>
          <img
            src="/images/home.jpg"
            alt="Home"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
