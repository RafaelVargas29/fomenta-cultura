import { useContextSelector } from "use-context-selector";
import ViewContainer from "../../../templates/ViewContainer";
import { ActivitiesContext } from "../../../store/context/ActivitiesContext";
import { EmptyActivities } from "../../../components/Activities/EmptyActivities";
import { SectionTop } from "../../../components/SectionTop";
import { Link } from "react-router-dom";
import { dateFormatter } from "../../../utils/formatter";

export function ListallActivity() {
  const activities = useContextSelector(ActivitiesContext, (context) => {
    return context.activities;
  });

  return (
    <ViewContainer>
      <section className={`mt-12 overflow-auto  w-full m-auto px-6`}>
        <SectionTop title="Atividades" />
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
                    className={`td h-10 ${
                      activity.status === "cancelado" &&
                      "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <td>
                      <div className="w-16 object-cover overflow-hidden">
                        <img src={activity.image} alt="" className="w-full" />
                      </div>
                    </td>
                    <td>{activity.title}</td>
                    <td>{activity.description}</td>

                    <td>
                      {dateFormatter.format(new Date(activity.dateEvent))}
                    </td>
                    <td>{activity.hoursEvent}</td>
                    <td>{activity.status}</td>
                    <td>
                      {activity.status === "cancelado" ? (
                        ""
                      ) : (
                        <Link
                          to={`/activities/edit/${activity.id}`}
                          className={`btn bg-gradient-alt font-bold w-20 `}
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
