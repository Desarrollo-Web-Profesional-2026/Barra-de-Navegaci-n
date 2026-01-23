const Login = () => {
  return (
    <section className="py-24 flex justify-center">
      <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Iniciar Sesión</h2>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded-xl"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 border rounded-xl"
          />
          <button className="w-full bg-primary text-white py-3 rounded-xl hover:bg-secondary duration-300">
            Entrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
    