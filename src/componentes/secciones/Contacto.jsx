const Contacto = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-6">
      
      <div className="w-full max-w-xl bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Contáctanos
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Déjanos tu mensaje y nos pondremos en contacto contigo.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            Enviar mensaje
          </button>
        </div>
      </div>

    </section>
  );
};

export default Contacto;
