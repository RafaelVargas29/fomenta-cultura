import { useContextSelector } from "use-context-selector";
import ViewContainer from "../../../templates/ViewContainer";
import { ActivitiesContext } from "../../../store/context/ActivitiesContext";
import { EmptyActivities } from "../../../components/Activities/EmptyActivities";
import { Link } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";
import { useEffect } from "react";
import { forma } from "../../../utils/formatter";

export function ListallActivity() {
  const { activities, get } = useContextSelector(
    ActivitiesContext,
    (context) => {
      return {
        activities: context.activities,
        get: context.getAll
      };
    }
  );

  useEffect(() => {
    get();
  }, [get]);

  return (
    <ViewContainer className={`mt-12 overflow-auto  w-full m-auto px-6`}>
      <section className={`mb-6 flex items-center justify-between`}>
        <h2 className="text-xl font-medium">Atividades</h2>
        <Link
          to={"/activities/new"}
          className="btn bg-hover flex items-center gap-[4px]"
        >
          <BiPlusCircle />
          Criar Atividade
        </Link>
      </section>

      <section className="overflow-auto h-[160px] md:h-[500px] pb-6">
        {activities.length === 0 ? (
          <EmptyActivities />
        ) : (
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="th">Flyer</th>
                <th className="th">Title</th>
                <th className="th">Descrição</th>
                <th className="th">Data</th>
                <th className="th">Horário</th>
                <th className="th">Status</th>
                <th className="th" />
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => {
                return (
                  <tr
                    key={activity.id}
                    className={`
                    ${activity.status === "cancelado" && "td-cancelado"}
                    ${activity.status === "concluido" && "td-concluido"}
                    td
                    `}
                  >
                    <td>
                      <div className="w-16 object-cover overflow-hidden">
                        <img src={activity.image} alt="" className="w-full" />
                      </div>
                    </td>
                    <td>{activity.title}</td>
                    <td>{activity.description}</td>

                    <td>{forma(activity.dateEvent)}</td>
                    <td>{activity.hoursEvent}</td>
                    <td>{activity.status}</td>
                    <td>
                      {activity.status === "cancelado" ||
                      activity.status === "concluido" ? (
                        ""
                      ) : (
                        <Link
                          to={`/activities/edit/${activity.id}`}
                          className={`btn hover:bg-solid-alt hover:text-white font-bold w-20 `}
                        >
                          editar
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </ViewContainer>
  );
}
