import ViewContainer from "../../templates/ViewContainer";
import { Summary } from "../../components/Dashboard/Summary";
import { SectionTop } from "../../components/SectionTop";

export function Dashboard() {
  return (
    <ViewContainer>
      <Summary />
      <section className={`mt-16 overflow-auto h-[320px] w-full m-auto px-6`}>
        <SectionTop title="Histórico" />
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
