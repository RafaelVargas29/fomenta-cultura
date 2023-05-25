import { FiLogIn } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";
import { Link } from "react-router-dom";
import Images from "../../assets/brand/logo.png";

import "./Home.css";

export function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={Images} alt="Ecoleta" />
        </header>
        <main>
          <h1>Seu marketplae de eventos culturais</h1>
          <p>
            Ajudamos pessoas a encontrar pontos de eventos culturais de forma
            eficiente.
          </p>
          <div className="flex flex-wrap items-center lg:gap-10">
            <Link to="/auth/login">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastrar Atividade</strong>
            </Link>
            <Link to="/eventos" className="alt">
              <span>
                <GoMegaphone />
              </span>
              <strong>Encontrar Atividades</strong>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
