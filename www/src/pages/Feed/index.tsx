/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Wrapper from "../../templates/Wrapper";
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
      <header className="fixed-element h-28 bg-secondary shadow-lg pt-4">
        <nav className="max-w-[1200px] m-auto flex-center flex-between gap-5">
          <a href={"/"}>
            <Logo />
          </a>
          <Wrapper className="w-96">
            <SearchForm search={search} setSearch={setSearch} />
          </Wrapper>
        </nav>
      </header>

      <main className="mt-32 space-y-16">
        <Wrapper>
          <strong className="text-2xl text-black block">
            Se joga, encontre a atividade agora!
          </strong>
          <div className="mt-4">
            <div className=" cursor-pointer border border-purple-600 w-14 h-14 rounded-full " />
          </div>
        </Wrapper>

        <Wrapper>
          <div className="flex items-center justify-between">
            <div className="flex">
              <h2>Filtros</h2>
              <span>buscar por agendados e confirmados</span>
            </div>
            <div className="flex">
              <span>buscar hoje</span>
              <span>buscar essa semana</span>
              <span>buscar esse mes</span>
            </div>
          </div>
        </Wrapper>

        <Wrapper className="pb-10">
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
                    category={activities.category}
                    image={activities.image}
                    status={activities.status}
                  />
                );
              })}
          </WrapperGrid>
        </Wrapper>
      </main>
    </>
  );
}
