import { Link } from "react-router-dom";
export function Register() {
  return (
    <main
      className={`min-h-screen flex flex-col gap-9 items-center justify-center px-4 sm:px-0`}
    >
      <div
        className={`max-w-xs bg-secondary/80 text-white w-full flex flex-col gap-4 shadow-2xl rounded-md p-8 lg:max-w-lg`}
      >
        <h2 className="text-center mb-3 text-xl font-semibold ">
          Realize seu cadastro na plataforma
        </h2>
        <form className={`flex flex-col gap-4`}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Nome da Organização</label>
            <input
              className="input input-clean"
              type="text"
              placeholder="Nome da Organização"
              id="name"
              name="name"
              value={""}
            />
            <span className="text-xs pl-1">Digite seu e-mail </span>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input
              className="input input-clean"
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
              value={""}
            />
            <span className="text-xs pl-1">Digite seu e-mail </span>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Senha</label>
            <div className="relative w-full">
              <input
                className="input input-clean"
                type={"password"}
                placeholder="Senha"
                id="password"
                name="password"
                value={""}
              />
              <div className="cursor-pointer absolute right-3 top-2"></div>
            </div>
            <span className="text-xs pl-1">Digite sua senha </span>
          </div>

          <button
            type="submit"
            className="bg-green-500 rounded font-semibold h-10 text-white hover:bg-green-600 transition-colors"
          >
            Inscrever-se
          </button>
          <div className="border-t-2 border-zinc-950 mt-4 pt-4 text-sm sm:text-base">
            <p>
              Você já tem conta?{" "}
              <Link to={"/auth/login"} className="text-blue-50 hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
