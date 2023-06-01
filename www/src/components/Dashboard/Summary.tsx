import {
  BiBlock,
  BiCalendarAlt,
  BiCalendarCheck,
  BiCheckDouble
} from "react-icons/bi";
import { SummaryContainer } from "../../templates/SummaryContainer";
import { SummaryCard } from "../SummaryCard";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";

export function Summary() {
  const actividades = useContextSelector(ActivitiesContext, (context) => {
    return context.activities;
  });

  const agendados = actividades.filter((ac) =>
    ac["status"].includes("agendado")
  );
  const confirmados = actividades.filter((ac) =>
    ac["status"].includes("confirmado")
  );
  const concluidos = actividades.filter((ac) =>
    ac["status"].includes("concluido")
  );
  const cancelados = actividades.filter((ac) =>
    ac["status"].includes("cancelado")
  );

  return (
    <SummaryContainer className="w-full m-auto px-6 py-8 ">
      <h2 className="text-xl font-bold mb-4">Suas Atividades</h2>
      <nav className="grid grid-cols-4 gap-8">
        <SummaryCard url="/dashboard" name="Agendado" className="duration-300">
          <header className="flex items-center justify-between">
            <span className="text-xl font-medium">Agendado</span>
            <BiCalendarAlt className="icon" />
          </header>
          <strong className="block mt-4 text-4xl">{agendados.length}</strong>
        </SummaryCard>

        <SummaryCard
          url="/dashboard"
          name="Confirmado"
          className="bg-primary text-white duration-300"
        >
          <header className="flex items-center justify-between">
            <span className="text-xl font-medium">Confirmado</span>
            <BiCalendarCheck className="icon" />
          </header>
          <strong className="block mt-4 text-4xl">{confirmados.length}</strong>
        </SummaryCard>

        <SummaryCard
          url="/dashboard"
          name="Concluído"
          className="bg-success text-white duration-300"
        >
          <header className="flex items-center justify-between">
            <span className="text-xl font-medium">Concluído</span>
            <BiCheckDouble className="icon" />
          </header>
          <strong className="block mt-4 text-4xl">{concluidos.length}</strong>
        </SummaryCard>

        <SummaryCard
          url="/"
          name="Cancelado"
          className="bg-error text-white duration-300"
        >
          <header className="flex items-center justify-between">
            <span className="text-xl font-medium">Cancelado</span>
            <BiBlock className="icon" />
          </header>
          <strong className="block mt-4 text-4xl">{cancelados.length}</strong>
        </SummaryCard>
      </nav>
    </SummaryContainer>
  );
}
