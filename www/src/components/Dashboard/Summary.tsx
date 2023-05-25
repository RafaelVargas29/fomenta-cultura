import { SummaryContainer } from "../../layouts/Dashborad/SummaryContainer";
import { SummaryCard } from "../SummaryCard";

export function Summary() {
  return (
    <SummaryContainer className="w-full m-auto px-6 ">
      <h2 className="text-xl font-bold mb-4">Suas Atividades</h2>
      <nav className="grid grid-cols-4 gap-8">
        <SummaryCard url="/dashboard" name="Agendado" className="bg-zinc-300">
          <header className="flexCenter justify-between">
            <span className="text-xl font-medium">Agendado</span>
          </header>
          <strong className="block mt-4 text-4xl">10</strong>
        </SummaryCard>

        <SummaryCard url="/dashboard" name="Confirmado" className="bg-primary">
          <header className="flexCenter justify-between">
            <span className="text-xl font-medium">Confirmado</span>
          </header>
          <strong className="block mt-4 text-4xl">1</strong>
        </SummaryCard>

        <SummaryCard url="/dashboard" name="Concluído" className="bg-success">
          <header className="flexCenter justify-between">
            <span className="text-xl font-medium">Concluído</span>
          </header>
          <strong className="block mt-4 text-4xl">2</strong>
        </SummaryCard>

        <SummaryCard url="/dashboard" name="Cancelado" className="bg-error">
          <header className="flexCenter justify-between">
            <span className="text-xl font-medium">Cancelado</span>
          </header>
          <strong className="block mt-4 text-4xl">30</strong>
        </SummaryCard>
      </nav>
    </SummaryContainer>
  );
}
