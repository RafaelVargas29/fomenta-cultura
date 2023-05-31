import { Link } from "react-router-dom";

export function EmptyActivities() {
  return (
    <div className="flex items-center justify-center text-xl font-medium">
      <p>
        Você não tem nenhuma atividade cadastrada {"  "}
        <Link to={"/activities/new"} className="underline">
          comece aqui
        </Link>
      </p>
    </div>
  );
}
