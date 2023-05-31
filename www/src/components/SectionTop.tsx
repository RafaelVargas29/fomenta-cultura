import { BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

interface SectionTopProps {
  title?: string;
}
export function SectionTop({ title }: SectionTopProps) {
  return (
    <div className={`mb-6 flex items-center justify-between`}>
      <h2 className="text-xl font-medium">{title}</h2>
      <Link
        to={"/activities/new"}
        className="btn bg-hover flex items-center gap-[4px]"
      >
        <BiPlusCircle />
        Criar Atividade
      </Link>
    </div>
  );
}
