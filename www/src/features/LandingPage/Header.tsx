import { Link } from "react-router-dom";
import { BiLogIn, BiMenuAltLeft, BiX } from "react-icons/bi";
import { useToggle } from "../../hooks/useToggle";
import { Drawer } from "../../components/Drawer";

export function Header() {
  const { open, handleToggle } = useToggle();

  return (
    <header className="fixed-element flex flex-col h-24 shadow-lg bg-white">
      <div className="w-full py-7 px-4 mb-3 flex items-center justify-around">
        {/* <button
          className="text-secondary cursor-pointer flex items-center gap-2"
          onClick={() => {
            handleToggle();
          }}
        >
          <BiMenuAltLeft className="icon" />
          <span className="text-invisible">menu</span>
        </button> */}

        <h2 className=" font-semibold text-xl">Fomenta Cultura</h2>

        <Link
          to="/login"
          className="flex items-center gap-2 py-3 text-primary md:btn md:bg-gradient"
        >
          <BiLogIn size={18} className="text-invisible" />
          <span className="capitalize font-bold">entrar</span>
        </Link>
      </div>
      {open && (
        <Drawer className="bg-black/60">
          <nav className="bg-white h-full w-60 lg:w-[500px] flex flex-col gap-4 ">
            <header className="py-6 px-4 flex items-center gap-4">
              <button
                className="text-secondary cursor-pointer flex items-center gap-2"
                onClick={() => {
                  handleToggle();
                }}
              >
                <BiX className="icon" />
              </button>
              <h2 className="text-primary font-semibold text-xl">
                Fomenta Cultura
              </h2>
            </header>
            <ul className="h-full py-6 px-5 rounded-t-xl shadow-xl bg-gradient text-white font-medium text-base space-y-5">
              <li
                onClick={() => {
                  handleToggle();
                }}
              >
                <Link to={"#about"}>Fomenta Cultura</Link>
              </li>
              <li
                onClick={() => {
                  handleToggle();
                }}
              >
                <Link to={"#activits"}>Atividades</Link>
              </li>
              <li
                onClick={() => {
                  handleToggle();
                }}
              >
                <Link to={"#services"}>Serviços</Link>
              </li>
            </ul>
          </nav>
        </Drawer>
      )}
    </header>
  );
}
