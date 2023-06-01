import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

export function Header() {
  return (
    <header className="fixed-element flex-col-center h-24 shadow-lg bg-secondary/80">
      <div className="w-full py-7 px-4 mb-3 flex-center justify-around">
        <h2 className="text-2xl md:text-[40px] font-bold text-white">
          Fomenta Cultura
        </h2>
        <Link to="/login" className="text-primary md:btn md:bg-gradient ">
          <BiLogIn size={20} className="text-invisible" />
          <span className="capitalize font-bold">entrar</span>
        </Link>
      </div>
    </header>
  );
}
