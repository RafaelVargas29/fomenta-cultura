import { useContextSelector } from "use-context-selector";
import ViewContainer from "../../templates/ViewContainer";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { Summary } from "../../components/Dashboard/Summary";
import { Link } from "react-router-dom";
import { BiCalendarAlt, BiPlusCircle } from "react-icons/bi";
import { MdOutlineFilterAltOff } from "react-icons/md";
import { dateFormatter } from "../../utils/formatter";
import { useState } from "react";
import { Activity } from "../../models/Activity";

export function Dashboard() {
  const [keyWord, setKeyWord] = useState("");
  const [statusFiltered, setStatusFilter] = useState<Activity[]>([]);
  const { activities, status } = useContextSelector(
    ActivitiesContext,
    (context) => {
      return {
        status: context.getActivityStatus,
        activities: context.activities
      };
    }
  );

  const applyFilter = (title: string) => {
    setKeyWord(title);
    setStatusFilter(status(title));
  };

  return (
    <ViewContainer className="space-y-5 w-full m-auto px-6">
      <Summary action={applyFilter} />

      <div className={`mb-5 flex-between`}>
        <h2 className="subtitle w-[500px]">
          Histórico{" "}
          {keyWord && (
            <span className="w-[100px]">de atividade {keyWord}.</span>
          )}
        </h2>

        <div className="h-0 w-0 invisible sm:visible sm:h-full sm:w-full flex-end gap-4">
          {keyWord && (
            <div className="btn bg-hover" onClick={() => setKeyWord("")}>
              <MdOutlineFilterAltOff />
            </div>
          )}
          <Link to={"/activities/new"} className="btn bg-hover">
            <BiPlusCircle />
            Criar Atividade
          </Link>
          <a href={"/activities/all"} className="btn bg-hover">
            <BiCalendarAlt />
            Ver Todos
          </a>
        </div>
      </div>

      <section className={`overflow-auto h-[160px] md:h-[320px] pb-6`}>
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="th">Título</th>
              <th className="th">Data</th>
              <th className="th">Horário</th>
              <th className="th">Status</th>
            </tr>
          </thead>
          <tbody>
            {keyWord
              ? statusFiltered.map((activity) => (
                  <tr key={activity.id}>
                    <td className="td">{activity.title}</td>
                    <td className="td">
                      {dateFormatter.format(new Date(activity.dateEvent))}
                    </td>
                    <td className="td">{activity.hoursEvent}</td>
                    <td className="td">{activity.status}</td>
                  </tr>
                ))
              : activities.map(
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
