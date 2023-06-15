import { useEffect, useState } from "react";
import ViewContainer from "../../templates/ViewContainer";
import { Summary } from "../../components/Dashboard/Summary";
import { MdOutlineFilterAltOff } from "react-icons/md";
import { BiCalendarAlt, BiPlusCircle } from "react-icons/bi";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { forma } from "../../utils/formatter";
import { Activities } from "../../model/Activities";

export function Dashboard() {
  const currentUserId = localStorage.getItem("user")?.split('"')[1];
  const [keyWord, setKeyWord] = useState("");
  const [act, setAct] = useState<Activities[]>([]);
  const [statusFiltered, setStatusFilter] = useState<Activities[]>([]);
  const { activities } = useContextSelector(ActivitiesContext, (context) => {
    return {
      activities: context.activities
    };
  });

  const filterStatus = (paramToFilter: string) => {
    return act.filter((activity) => activity["status"].includes(paramToFilter));
  };

  const applyFilter = (title: string) => {
    setKeyWord(title);
    setStatusFilter(filterStatus(title));
  };

  useEffect(() => {
    activities.map((activ) => {
      if (activ.producerId === currentUserId) {
        setAct((old) => [...old, activ]);
      }
    });
  }, [activities, currentUserId]);

  return (
    <ViewContainer className="space-y-5 w-full px-6">
      <Summary action={applyFilter} dataCurrent={act} filt={filterStatus} />
      <section id="buttons" className={`mb-5 flex-between`}>
        <h2 className="subtitle w-[500px]">
          Histórico{" "}
          {keyWord && (
            <span className="w-[100px]">de atividade {keyWord}.</span>
          )}
        </h2>

        <div className="h-0 w-0 invisible sm:visible sm:h-full sm:w-full flex-end gap-4">
          {keyWord && (
            <div
              className="btn bg-hover"
              title="Limpar Fitlro"
              onClick={() => setKeyWord("")}
            >
              <MdOutlineFilterAltOff />
              <span>Limpar Fitlro</span>
            </div>
          )}
          <a href={"/activities/new"} className="btn bg-hover">
            <BiPlusCircle />
            Criar Atividade
          </a>
          <a href={"/activities"} className="btn bg-hover">
            <BiCalendarAlt />
            Ver Todos
          </a>
        </div>
      </section>
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
                  <tr
                    key={activity.id}
                    className={`
                  ${activity.status === "cancelado" && "td-cancelado"}
                  ${activity.status === "concluido" && "td-concluido"}
                  td
                  `}
                  >
                    <td
                      className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                    >
                      {activity.title}
                    </td>
                    <td
                      className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                    >
                      {forma(activity.dateEvent)}
                    </td>
                    <td
                      className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                    >
                      {activity.hoursEvent}
                    </td>
                    <td
                      className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                    >
                      {activity.status}
                    </td>
                  </tr>
                ))
              : act.length > 0
              ? act.map(
                  (activity, index) =>
                    index < 5 && (
                      <tr key={activity.id}>
                        <td
                          className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                        >
                          {activity.title}
                        </td>

                        <td
                          className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                        >
                          {forma(activity.dateEvent)}
                        </td>
                        <td
                          className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                        >
                          {activity.hoursEvent}
                        </td>
                        <td
                          className={`
                          ${activity.status === "cancelado" && "td-cancelado"}
                          ${activity.status === "concluido" && "td-concluido"}
                          td
                          `}
                        >
                          {activity.status}
                        </td>
                      </tr>
                    )
                )
              : ""}
          </tbody>
        </table>
      </section>
    </ViewContainer>
  );
}
