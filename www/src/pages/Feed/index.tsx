/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link } from "react-router-dom";
import Boxed from "../../templates/Boxed";
import { WrapperGrid } from "../../templates/WrapperGrid";
import { CardActivity } from "../../components/CardActivity";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { useEffect, useState } from "react";
import SearchForm from "../../components/Feed/SearchForm";
import { Activities } from "../../model/Activities";
import { Logo } from "../../components/Logo";

export function Feed() {
  const [search, setSearch] = useState("");
  const [act, setAct] = useState<Activities[]>([]);
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
      <header className="">
        <nav className=""></nav>
      </header>

      <header className="fixed-element h-24 bg-secondary shadow-lg">
        <nav className="max-w-[1200px] m-auto flex-center flex-between gap-5">
          <a href={"/"}>
            <Logo />
          </a>
          <div className="flex-center gap-8">
            <Link to="/login" className="text-primary hover:text-white">
              <span className="uppercase font-bold">acesse sua conta</span>
            </Link>
            <Link
              to="/register"
              className="text-primary btn border border-white hover:border-transparent  hover:text-white   hover:bg-gradient "
            >
              <span className="uppercase font-bold">cadastre-se</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="mt-32 space-y-12">
        <Boxed>
          <SearchForm search={search} setSearch={setSearch} />
        </Boxed>

        <Boxed>
          <div />
        </Boxed>

        <Boxed className="pb-10">
          <WrapperGrid>
            {act
              .filter((a) =>
                a.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((activities) => {
                return (
                  <CardActivity
                    key={activities.id}
                    id={activities.id!}
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
