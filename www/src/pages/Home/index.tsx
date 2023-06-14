import { FiLogIn } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import HeroImg from "../../assets/images/location.svg";
import { Logo } from "../../components/Logo";
import { BiLogIn } from "react-icons/bi";
import Wrapper from "../../templates/Wrapper";

export function Home() {
  return (
    <>
      <header className="fixed-element h-24 bg-secondary shadow-lg flex-between px-4 lg:px-14">
        <nav className="flex-between w-full lg:w-[1100px] m-auto">
          <Logo />
          <a href="/login" className="text-primary md:btn md:bg-gradient ">
            <BiLogIn size={20} className="text-invisible" />
            <span className="capitalize font-bold">entrar</span>
          </a>
        </nav>
      </header>
      <main className="mt-24">
        <Wrapper id="hero" className="bg-gradient h-[87vh] flex-center">
          <div className="flex-between">
            <section className="max-w-[560px]">
              <h1 className="text-[36px]  md:text-[72px] font-bold">
                Fomenta Cultura
              </h1>
              <h2 className="text-[18px]  md:text-[27px]">
                Sua plataforma de eventos culturais
              </h2>
              <p className="text-base md:text-2xl mt-6 font-normal">
                Ajudamos pessoas a encontrar atividades e eventos culturais de
                forma eficiente.
              </p>

              <div className="mt-6 flex-start flex-wrap flex-shrink-0 gap-4 md:gap-10">
                <a href="/login" className="btn btn-outline font-bold">
                  <FiLogIn className="icon" />
                  <span>Cadastrar Atividades</span>
                </a>
                <a
                  href="/feed"
                  className="btn bg-secondary font-bold hover:bg-secondary/90"
                >
                  <GoMegaphone className="icon" />
                  <span>Encontrar Atividades</span>
                </a>
              </div>
            </section>
            <div className="flex-1 hidden md:block">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
