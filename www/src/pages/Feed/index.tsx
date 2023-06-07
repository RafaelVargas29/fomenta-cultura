import { Link } from "react-router-dom";
import Boxed from "../../templates/Boxed";
import { WrapperGrid } from "../../templates/WrapperGrid";
import { CardActivity } from "../../components/CardActivity";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { useEffect, useState } from "react";
import { Activity } from "../../@types/Activity";
import { SearchForm } from "../../components/SearchForm";

export function Feed() {
  const [act, setAct] = useState<Activity[]>([]);
  const { activities } = useContextSelector(ActivitiesContext, (context) => {
    return {
      activities: context.activities
    };
  });

  useEffect(() => {
    activities.map((activ) => {
      if (activ.status === "agendado" || activ.status === "confirmado") {
        setAct((old) => [...old, activ]);
      }
    });
  }, [activities]);

  return (
    <>
      <header className="fixed-element z-30 flex-col-center h-24 shadow-lg bg-secondary">
        <div className="w-full py-7 px-4 mb-3 flex-center justify-around">
          <Link
            to={"/"}
            className="text-2xl md:text-[40px] font-bold text-white"
          >
            Fomenta Cultura
          </Link>
          <nav className="flex-center gap-5">
            <Link to="/login" className="text-primary hover:text-white">
              <span className="uppercase font-bold">acesse sua conta</span>
            </Link>
            <Link
              to="/register"
              className="text-primary btn border border-white hover:border-transparent  hover:text-white   hover:bg-gradient "
            >
              <span className="uppercase font-bold">cadastre-se</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mt-32 space-y-12">
        <Boxed>
          <SearchForm />
        </Boxed>

        <Boxed>
          <div />
        </Boxed>

        <Boxed className="">
          <WrapperGrid>
            {act.map((activities) => {
              return (
                <CardActivity
                  key={activities.id}
                  id={activities.id}
                  createdAt={activities.createdAt}
                  dateEvent={activities.dateEvent}
                  description={activities.description}
                  hoursEvent={activities.hoursEvent}
                  title={activities.title}
                  image={activities.image}
                  status={activities.status}
                />
              );
            })}
          </WrapperGrid>
        </Boxed>
      </main>
    </>
  );
}
