import { Link } from "react-router-dom";
import { Header } from "../../features/LandingPage/Header";
import Boxed from "../../layouts/Boxed";
import { FiLogIn } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import SocialImg from "../../assets/current_location.svg";

export function Home() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <Boxed id="hero" className="bg-gradient-alt h-[87vh] flex items-center">
          <div className="flex items-center justify-between">
            <div className="max-w-[560px]">
              <h1 className="text-[36px]  md:text-[54px] font-bold">
                Sua plataforma de eventos culturais
              </h1>
              <p className="text-base  md:text-2xl mt-6 font-bold">
                Ajudamos pessoas a encontrar pontos de eventos culturais de
                forma eficiente.
              </p>
              <div className="mt-6 flex gap-4 flex-shrink-0 flex-wrap items-center lg:gap-10">
                <Link
                  to="/auth/login"
                  className="border border-zinc-50 flex items-center gap-3 btn"
                >
                  <span>
                    <FiLogIn />
                  </span>
                  <strong>Cadastrar Atividade</strong>
                </Link>
                <Link
                  to="/eventos"
                  className="bg-secondary flex items-center gap-3 btn"
                >
                  <span>
                    <GoMegaphone />
                  </span>
                  <strong>Encontrar Atividades</strong>
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden lg:block">
              <img src={SocialImg} alt="" />
            </div>
          </div>
        </Boxed>
      </main>
    </>
  );
}
