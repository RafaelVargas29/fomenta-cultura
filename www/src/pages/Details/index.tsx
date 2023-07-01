import { Logo } from "../../components/Logo";
import Wrapper from "../../templates/Wrapper";
import { Activities } from "../../model/Activities";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import { useContextSelector } from "use-context-selector";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams(); // Obtém o ID da URL
  const [activity, setActivity] = useState<Activities | null>(null);
  const { activities } = useContextSelector(ActivitiesContext, (context) => {
    return {
      activities: context.activities
    };
  });

  useEffect(() => {
    // Encontra a atividade correspondente com base no ID
    const selectedActivity = activities.find((activity) => activity.id === id);
    setActivity(selectedActivity);
  }, [activities, id]);

  return (
    <>
      <header className="fixed-element h-28 bg-secondary shadow-lg pt-4">
        <nav className="max-w-[1200px] m-auto flex-center flex-between gap-5">
          <a href={"/"}>
            <Logo />
          </a>
        </nav>
      </header>

      <main className="mt-32 space-y-16">
        <Wrapper>
          <div className="flex justify-center items-center w-full h-[550px] bg-gray-200 my-12 rounded-lg">
            <div className="flex w-full h-[550px] rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2">
                {activity && (
                  <img src={activity.image} alt="" className="h-full object-cover" />
                )}
              </div>
              <div className="w-1/2 bg-secondary p-6 flex flex-col justify-center">
                {activity && (
                  <div className="text-white">
                    <h1 className="text-6xl font-bold leading-tight mb-6">{activity.title}</h1>
                    <div className="text-2xl mb-2">
                      <span className="font-bold">Descrição:</span> {activity.description}
                    </div>
                    <div className="text-2xl mb-2">
                      <span className="font-bold">Categoria:</span> {activity.category}
                    </div>
                    <div className="text-2xl mb-2">
                      <span className="font-bold">Status:</span> {activity.status}
                    </div>
                    <div className="text-2xl">
                      <span className="font-bold">Data:</span> {activity.dateEvent}
                    </div>
                    <div className="text-2xl">
                      <span className="font-bold">Horário:</span> {activity.hoursEvent}
                    </div>
                    <div className="text-2xl mb-2">
                      <span className="font-bold">Endereço:</span> {activity.address?.localidade}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
