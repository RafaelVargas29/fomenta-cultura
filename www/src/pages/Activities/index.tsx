import { Link } from "react-router-dom";
import ViewContainer from "../../layouts/ViewContainer";
import { BiPlusCircle } from "react-icons/bi";

export function Activities() {
  return (
    <ViewContainer>
      <section className={`mt-12 overflow-auto  w-full m-auto px-6`}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium">Histórico</h2>
          <Link
            to={"/activities/new"}
            className="btn bg-hover flex items-center gap-[4px]"
          >
            <BiPlusCircle />
            Criar Atividade
          </Link>
        </div>

        <table className="w-full min-w-[600px] border-collapse ">
          <thead>
            <tr>
              <th className="th">Nome</th>
              <th className="th">Descrição</th>
              <th className="th">Data</th>
              <th className="th">Horário</th>
              <th className="th">Status</th>
              <th className="th">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
              <td className="td flex gap-3">
                <button className="btn bg-blue-500">edit</button>
                <button className="btn bg-error">del</button>
              </td>
            </tr>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
            </tr>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
            </tr>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
            </tr>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
            </tr>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
            </tr>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">é um dia em Aruanda para aprendizado</td>
              <td className="td">30/04/2020</td>
              <td className="td">21:00</td>
              <td className="td">concuido</td>
            </tr>
          </tbody>
        </table>
      </section>
    </ViewContainer>
  );
}
