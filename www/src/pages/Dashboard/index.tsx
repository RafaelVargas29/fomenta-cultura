import { BiPlusCircle } from "react-icons/bi";
import ViewContainer from "../../layouts/ViewContainer";
import { Summary } from "../../components/Dashboard/Summary";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <ViewContainer>
      <Summary />
      <section className={`mt-16 overflow-auto h-[320px] w-full m-auto px-6`}>
        <div className="mb-6 flexCenter justify-between">
          <h2 className="text-xl font-medium">Histórico</h2>
          <Link
            to={"/activities/new"}
            className="btn bg-color-hover flexCenter gap-[4px]"
          >
            <BiPlusCircle />
            Criar Atividade
          </Link>
        </div>
        <table className="w-full min-w-[600px] border-collapse ">
          <thead className={``}>
            <tr>
              <th className="th">Nome</th>
              <th className="th">Data</th>
              <th className="th">Horário</th>
              <th className="th">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">Cinema Popular: Filme Aruanda</td>
              <td className="td">23/08/2032</td>
              <td className="td">21:00</td>
              <td className="td">Cinema Popular: Filme Aruanda</td>
            </tr>
          </tbody>
        </table>
      </section>
    </ViewContainer>
  );
}