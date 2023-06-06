import { useNavigate } from "react-router-dom";
import { Activity } from "../../@types/Activity";

interface TableActivitiesProps {
  activities: Activity[];
  onClick?: (activity: Activity) => void;
}

export function TableActivities({ activities }: TableActivitiesProps) {
  const navigate = useNavigate();
  const loadEdit = (id: number) => {
    navigate("/activities/edit/" + id);
  };
  return (
    <table className="w-full min-w-[600px] border-collapse ">
      <thead>
        <tr>
          <th className="th" />
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
                activity.status === "cancelado" && "bg-gray-300"
              }`}
            >
              <td>
                <div className="w-16 object-cover overflow-hidden">
                  <img src={activity.image} alt="" className="w-full" />
                </div>
              </td>
              <td>{activity.title}</td>
              <td>{activity.description}</td>
              <td>{activity.dateEvent}</td>
              <td>{activity.hoursEvent}</td>
              <td>{activity.status}</td>
              <td>
                {activity.status === "cancelado" ? (
                  ""
                ) : (
                  <button
                    className={`btn bg-gradient-alt font-bold w-20 `}
                    onClick={() => {
                      loadEdit(activity.id);
                    }}
                  >
                    editar
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
