import { Link } from "react-router-dom";
import { Divider } from "../../../components/Divider";
export function Login() {
  return (
    <main
      className={`min-h-screen flex flex-col gap-9 items-center justify-center px-4 sm:px-0`}
    >
      <div
        className={`max-w-xs w-full flex flex-col gap-4 shadow-2xl rounded-md p-8 lg:max-w-lg`}
      >
        <h2 className="text-center mb-3 text-xl font-semibold ">
          Realize seu login na plataforma
        </h2>
        <form className={`flex flex-col gap-4`}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input
              className="border border-zinc-200 shadow-sm h-10 px-3 rounded "
              type="email"
              placeholder="E-mail"
            />
            <span className="text-xs pl-1">Digite seu e-mail </span>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Senha</label>
            <div className="relative w-full">
              <input
                className="border border-zinc-200 w-full shadow-sm h-10 px-3 rounded "
                type={"password"}
                placeholder="Senha"
              />
              <div className="cursor-pointer absolute right-3 top-2"></div>
            </div>
            <span className="text-xs pl-1">Digite sua senha </span>
          </div>
          <button
            type="submit"
            className="bg-green-500 rounded font-semibold h-10 text-white hover:bg-green-600 transition-colors"
          >
            Entrar
          </button>
          <div className="border-t-2 border-zinc-950 mt-4 pt-4 text-sm sm:text-base">
            <p>
              Não tem uma conta?{" "}
              <Link
                to={"/auth/register"}
                className="text-blue-500 hover:text-blue-600"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
