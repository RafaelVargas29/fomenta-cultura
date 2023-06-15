import ViewContainer from "../../../templates/ViewContainer";
import { EmptyActivities } from "../../../components/Activities/EmptyActivities";

import { BiPlusCircle } from "react-icons/bi";
import { forma } from "../../../utils/formatter";
import { useEffect, useState } from "react";
import { Activities } from "../../../model/Activities";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../../store/context/ActivitiesContext";

export function ListallActivity() {
  const currentUserId = localStorage.getItem("user")?.split('"')[1];
  const [act, setAct] = useState<Activities[]>([]);
  const { activities } = useContextSelector(ActivitiesContext, (context) => {
    return {
      activities: context.activities
    };
  });

  useEffect(() => {
    activities.map((activ) => {
      if (activ.producerId === currentUserId) {
        setAct((old) => [...old, activ]);
      }
    });
  }, [activities, currentUserId]);

  return (
    <ViewContainer className={`mt-12 overflow-auto  w-full m-auto px-6`}>
      <section className={`mb-6 flex items-center justify-between`}>
        <h2 className="text-xl font-medium">Atividades</h2>
        <a
          href={"/activities/new"}
          className="btn bg-hover flex items-center gap-[4px]"
        >
          <BiPlusCircle />
          Criar Atividade
        </a>
      </section>

      <section className="overflow-auto h-[160px] md:h-[500px] pb-6">
        {act.length === 0 ? (
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
              {act.map((activity) => {
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
                        <a
                          href={`/activities/edit/${activity.id}`}
                          className={`btn hover:bg-solid-alt hover:text-white font-bold w-20 `}
                        >
                          editar
                        </a>
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
