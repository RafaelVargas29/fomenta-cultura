import ViewContainer from "../../templates/ViewContainer";
import { Summary } from "../../components/Dashboard/Summary";
import { SectionTop } from "../../components/SectionTop";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { dateFormatter } from "../../utils/formatter";
import { Link } from "react-router-dom";
import { BiCalendarAlt, BiPlusCircle } from "react-icons/bi";

export function Dashboard() {
  const activities = useContextSelector(ActivitiesContext, (context) => {
    return context.activities;
  });

  return (
    <ViewContainer>
      <Summary />
      <section className={`mt-16 overflow-auto h-[350px] w-full m-auto px-6`}>
        <div className={`mb-6 flex items-center justify-between`}>
          <h2 className="text-xl font-medium">Histórico</h2>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              to={"/activities/new"}
              className="btn bg-hover flex items-center gap-[4px]"
            >
              <BiPlusCircle />
              Criar Atividade
            </Link>
            <a
              href={"/activities/all"}
              className="btn bg-hover flex items-center gap-[4px]"
            >
              <BiCalendarAlt />
              Ver Todos
            </a>
          </div>
        </div>
        <table className="w-full min-w-[600px] border-collapse ">
          <thead className={``}>
            <tr>
              <th className="th">Título</th>
              <th className="th">Data</th>
              <th className="th">Horário</th>
              <th className="th">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(
              (activity, index) =>
                index < 5 && (
                  <tr key={activity.id}>
                    <td className="td">{activity.title}</td>
                    <td className="td">
                      {dateFormatter.format(new Date(activity.dateEvent))}
                    </td>
                    <td className="td">{activity.hoursEvent}</td>
                    <td className="td">{activity.status}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </section>
    </ViewContainer>
  );
}
