/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import ViewContainer from "../../../templates/ViewContainer";
import { BiPlusCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { api } from "../../../libs/axios/api";

interface Activity {
  id: number;
  title: string;
  description: string;
  dateEvent: string;
  hoursEvent: string;
  status: string;
  image?: string;
}

export function ListallActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const getActivities = async () => {
    const result = await api.get("/activities");
    setActivities(result.data);
  };

  useEffect(() => {
    getActivities();
    console.log(activities);
  }, []);

  // const [loading, setLoading] = useState(true);
  return (
    <ViewContainer>
      <section className={`mt-12 overflow-auto  w-full m-auto px-6`}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium invisible h-0 w-0" />
          <Link
            to={"/activities/new"}
            className="btn bg-hover flex items-center gap-[4px]"
          >
            <BiPlusCircle />
            Criar Atividade
          </Link>
        </div>

        {activities.length === 0 ? (
          <div className="flex items-center justify-center">
            <p className="text-xl font-medium">Nenhuma Atividade cadastrada</p>
          </div>
        ) : (
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
                  <tr key={activity.id}>
                    <td className="td">
                      <img src={activity.image} alt="" />
                    </td>
                    <td className="td">{activity.title}</td>
                    <td className="td">{activity.description}</td>
                    <td className="td">{activity.dateEvent}</td>
                    <td className="td">{activity.hoursEvent}</td>
                    <td className="td">{activity.status}</td>
                    <td className="td" />
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
