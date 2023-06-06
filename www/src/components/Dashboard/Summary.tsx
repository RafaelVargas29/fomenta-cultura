import {
  BiBlock,
  BiCalendarAlt,
  BiCalendarCheck,
  BiCheckDouble
} from "react-icons/bi";
import { SummaryCard } from "./SummaryCard";
import { useContextSelector } from "use-context-selector";
import { ActivitiesContext } from "../../store/context/ActivitiesContext";

interface SummaryProps {
  action: (title: string) => void;
}

export function Summary(props: SummaryProps) {
  const { statusbar } = useContextSelector(ActivitiesContext, (context) => {
    return {
      statusbar: context.filterStatus
    };
  });
  return (
    <section className="pb-8 pt-6">
      <h2 className="subtitle">Suas Atividades</h2>
      <div className="h-[250px] sm:h-full grid-performance no-scrollbar overflow-scroll">
        <SummaryCard
          action={props.action}
          icon={<BiCalendarAlt />}
          className="bg-hover text-white duration-300"
          title="agendado"
          qtdActivities={statusbar("agendado").length}
        />
        <SummaryCard
          action={props.action}
          icon={<BiCalendarCheck />}
          className="bg-primary/70 hover:bg-primary text-white duration-300"
          title="confirmado"
          qtdActivities={statusbar("confirmado").length}
        />
        <SummaryCard
          action={props.action}
          icon={<BiCheckDouble />}
          className="bg-success/70 hover:bg-success text-white duration-300"
          title="concluido"
          qtdActivities={statusbar("concluido").length}
        />
        <SummaryCard
          action={props.action}
          icon={<BiBlock />}
          className="bg-error/70 hover:bg-error text-white duration-300"
          title="cancelado"
          qtdActivities={statusbar("cancelado").length}
        />
      </div>
    </section>
  );
}
