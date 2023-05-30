import {
  BiBlock,
  BiCalendarAlt,
  BiCalendarCheck,
  BiCheckDouble
} from "react-icons/bi";
import { SummaryContainer } from "../../templates/SummaryContainer";
import { SummaryCard } from "../SummaryCard";

export function Summary() {
  return (
    <SummaryContainer className="w-full m-auto px-6 py-8 ">
      <h2 className="text-xl font-bold mb-4">Suas Atividades</h2>
      <nav className="grid grid-cols-4 gap-8">
        <SummaryCard url="/dashboard" name="Agendado" className="duration-300">
          <header className="flex items-center justify-between">
            <span className="text-xl font-medium">Agendado</span>
            <BiCalendarAlt className="icon" />
          </header>
          <strong className="block mt-4 text-4xl">2</strong>
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
          <strong className="block mt-4 text-4xl">2</strong>
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
          <strong className="block mt-4 text-4xl">2</strong>
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
          <strong className="block mt-4 text-4xl">30</strong>
        </SummaryCard>
      </nav>
    </SummaryContainer>
  );
}
