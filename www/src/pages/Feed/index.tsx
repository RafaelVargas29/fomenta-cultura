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
import CategoryFilter from "../../components/Feed/CategoryFilter";

export function Feed() {
  const [categoryFilter, setCategoryFilter] = useState("");
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
          <div className="flex flex-col gap-4">
            <strong className="text-2xl text-black block">
              Se joga, selecione a categoria que deseja e encontre a atividade agora!
            </strong>
            <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}/>
          </div>
        </Wrapper>

        <Wrapper className="pb-10">
          <WrapperGrid>
            {act
              .filter((a) => {
                if (search === "" && categoryFilter === "") {
                  return true; 
                }
                return (
                  a.title.toLowerCase().includes(search.toLowerCase()) &&
                  (categoryFilter === "" || a.category === categoryFilter)
                );
              })
              .map((activities) => (
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
              ))}
          </WrapperGrid>
        </Wrapper>
      </main>
    </>
  );
}
