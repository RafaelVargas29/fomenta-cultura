import Boxed from "../../templates/Boxed";
import { FiLogIn } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { Header } from "../../components/LandingPage/Header";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/location.svg";

export function Home() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <Boxed id="hero" className="bg-gradient h-[87vh] flex-center">
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
                <Link to="/login" className="btn btn-outline font-bold">
                  <FiLogIn className="icon" />
                  <span>Cadastrar Atividades</span>
                </Link>
                <Link
                  to="/feed"
                  className="btn bg-secondary font-bold hover:bg-secondary/90"
                >
                  <GoMegaphone className="icon" />
                  <span>Encontrar Atividades</span>
                </Link>
              </div>
            </section>
            <div className="flex-1 hidden md:block">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </Boxed>
      </main>
    </>
  );
}
