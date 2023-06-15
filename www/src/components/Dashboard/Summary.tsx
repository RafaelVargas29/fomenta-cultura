import {
  BiBlock,
  BiCalendarAlt,
  BiCalendarCheck,
  BiCheckDouble
} from "react-icons/bi";
import { Activities } from "../../model/Activities";
import { SummaryCard } from "./SummaryCard";

interface SummaryProps {
  action: (title: string) => void;
  filt: (title: string) => Activities[];
  dataCurrent: Activities[];
}

export function Summary(props: SummaryProps) {
  return (
    <section className="pb-8 pt-6">
      <h2 className="subtitle">Suas Atividades</h2>
      <div className="h-[250px] sm:h-full grid-performance no-scrollbar overflow-scroll">
        <SummaryCard
          action={props.action}
          icon={<BiCalendarAlt />}
          className="bg-hover text-white duration-300"
          title="agendado"
          qtdActivities={props.filt("agendado").length}
        />
        <SummaryCard
          action={props.action}
          icon={<BiCalendarCheck />}
          className="bg-primary/70 hover:bg-primary text-white duration-300"
          title="confirmado"
          qtdActivities={props.filt("confirmado").length}
        />
        <SummaryCard
          action={props.action}
          icon={<BiCheckDouble />}
          className="bg-success/70 hover:bg-success text-white duration-300"
          title="concluido"
          qtdActivities={props.filt("concluido").length}
        />
        <SummaryCard
          action={props.action}
          icon={<BiBlock />}
          className="bg-error/70 hover:bg-error text-white duration-300"
          title="cancelado"
          qtdActivities={props.filt("cancelado").length}
        />
      </div>
    </section>
  );
}
