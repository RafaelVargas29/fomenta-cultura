import { useEffect, useState } from "react";
import ViewContainer from "../../../templates/ViewContainer";
import { Activity } from "../../../@types/Activity";
import { getAllActivities } from "../../../business/Activities/GetAll";
import { TableActivities } from "../../../components/Activities/TableActivities";
import { EmptyActivities } from "../../../components/Activities/EmptyActivities";
import { SectionTop } from "../../../components/SectionTop";

export function ListallActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const getActivities = async () => {
    const result = await getAllActivities();
    setActivities(result);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <ViewContainer>
      <section className={`mt-12 overflow-auto  w-full m-auto px-6`}>
        <SectionTop title="Atividades" />
        {activities.length === 0 ? (
          <EmptyActivities />
        ) : (
          <TableActivities activities={activities} />
        )}
      </section>
    </ViewContainer>
  );
}
