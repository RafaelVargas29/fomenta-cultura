import { Link } from "react-router-dom";
import style from "./CardActivity.module.scss";

interface CardActivityProps {
  id: string;
  title: string;
  description: string;
  dateEvent: string;
  hoursEvent: string;
  status: "agendado" | "confirmado" | "concluido" | "cancelado";
  image?: string;
  createdAt: string;
}

export function CardActivity(props: any) {
  return (
    <Link to={""} className={style.card}>
      <div
        className={style.containerImage}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`
        }}
      />
      <section className={style.content}>
        <span className={style.category}>Data - Hora</span>
        <h1 className={style.title}>Title da Atividade</h1>
        <span className={style.text}>Local</span>
      </section>
    </Link>
  );
}
