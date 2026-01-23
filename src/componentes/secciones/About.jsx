const About = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container grid md:grid-cols-2 gap-12 items-center px-6">

        {/* IMAGEN */}
        <img
          src="/images/about.jpg"
          alt="Sobre nosotros"
          className="w-full h-96 md:h-[120px] lg:h-[480px] object-cover rounded-3xl shadow-xl"
/>

        {/* TEXTO */}
        <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            ¿Quiénes Somos?
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            En <span className="text-blue-600 font-semibold">BARG Cursos</span>
            creemos en el aprendizaje práctico, visual y moderno.
            Nuestro objetivo es prepararte para el mundo profesional
            con tecnologías actuales.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
