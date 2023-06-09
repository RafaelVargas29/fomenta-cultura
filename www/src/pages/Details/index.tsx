import { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiDetail, BiCalendar, BiMap, BiCategory, BiBookmarks } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { Logo } from "../../components/Logo";
import { Activities } from "../../model/Activities";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";
import Wrapper from "../../templates/Wrapper";
import { forma } from "../../utils/formatter";
import { GoClock } from "react-icons/go";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
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

      <main className="mt-32">
        <Wrapper>
          <span
            className=" text-primary/60 flex items-center font-bold mt-3 ml-4 cursor-pointer hover:text-primary"
            onClick={() => navigate(-1)}
            title="voltar"
          >
            <BiLeftArrowAlt className="icon w-8 h-8" />
          </span>
        </Wrapper>
        <Wrapper>
          <div className="flex justify-center items-center w-full h-[550px] bg-gray-200 my-12 rounded-lg">
            <div className="flex w-full h-[550px] rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2">
                {activity && (
                  <img
                    src={activity.image}
                    alt=""
                    className="h-full object-cover"
                  />
                )}
              </div>
              <div className="w-1/2 bg-secondary p-6 flex flex-col justify-center">
                {activity && (
                  <div className="text-white">
                    <h1 className="text-6xl font-bold leading-tight mb-6">
                      {activity.title}
                    </h1>
                    <div className="flex gap-3 text-2xl mb-2">
                      <div className="pt-1">
                        <BiDetail/>
                      </div>
                      <div>
                        <span className="font-bold">Descrição:</span>{" "}
                        {activity.description}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-1 text-2xl mb-2">
                      <BiCategory/><span className="font-bold">Categoria:</span>{" "}
                      {activity.category}
                    </div>
                    <div className="flex items-center gap-3 pt-1 text-2xl mb-2">
                     <BiBookmarks/> <span className="font-bold">Status:</span>{" "}
                      {activity.status}
                    </div>
                    <div className="flex items-center gap-3 pt-1 text-2xl">
                    <BiCalendar/><span className="font-bold">Data:</span>{" "}
                      {forma(activity.dateEvent)}
                    </div>
                    <div className="flex items-center gap-3 pt-2 text-2xl">
                      <GoClock/><span className="font-bold">Horário:</span>{" "}
                      {activity.hoursEvent}
                    </div>
                    <div className="flex gap-3 pt-2 text-2xl mb-2">
                      <div className="pt-1">
                        <BiMap/>
                      </div>
                      <div>
                        <span className="font-bold">Endereço:</span>{" "}
                        {activity.address?.logradouro}{", "}
                        {activity.address?.number}{", "}
                        {activity.address?.complement}{", "}
                        {activity.address?.bairro}{", "}
                        {activity.address?.localidade}{"/"}
                        {activity.address?.uf}
                      </div>
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
