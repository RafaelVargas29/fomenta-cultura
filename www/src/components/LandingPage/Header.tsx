import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

export function Header() {
  return (
    <header className="fixed-element flex flex-col h-24 shadow-lg bg-white">
      <div className="w-full py-7 px-4 mb-3 flex items-center justify-around">
        <h2 className=" font-semibold text-xl">Fomenta Cultura</h2>

        <Link
          to="/login"
          className="flex items-center gap-2 py-3 text-primary md:btn md:bg-gradient"
        >
          <BiLogIn size={18} className="text-invisible" />
          <span className="capitalize font-bold">entrar</span>
        </Link>
      </div>
    </header>
  );
}
