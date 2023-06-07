import { Link } from "react-router-dom";
import Boxed from "../../templates/Boxed";
import { WrapperGrid } from "../../templates/WrapperGrid";
import { CardActivity } from "../../components/CardActivity";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { useEffect, useState } from "react";
import { Activity } from "../../@types/Activity";

export function Feed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const { status } = useContextSelector(ActivitiesContext, (context) => {
    return {
      status: context.filterStatus
    };
  });
  useEffect(() => {
    console.log(status("confirmado"));
    setActivities(status("confirmado"));
  }, [status]);
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
              className="text-primary btn border border-white hover:border-transparent  hover:text-white   hover:bg-primary "
            >
              <span className="uppercase font-bold">cadastre-se</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mt-28">
        <Boxed>
          <section>search</section>
        </Boxed>
        <Boxed>
          <section className="flex-between">
            <p>titulo da pagina</p>
            <p>filtro</p>
          </section>
        </Boxed>
        <Boxed className=" h-screen bg-gray-200 pt-4">
          <WrapperGrid>
            {/* {activities.map((activities) => {
              return <CardActivity key={activities.id} prop={activities} />;
            })} */}
            <CardActivity />
            <CardActivity />
            <CardActivity />
            <CardActivity />
            <CardActivity />
          </WrapperGrid>
        </Boxed>
      </main>
    </>
  );
}
