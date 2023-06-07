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

export function CardActivity({
  createdAt,
  dateEvent,
  description,
  hoursEvent,
  id,
  status,
  title,
  image
}: CardActivityProps) {
  return (
    <Link to={`details/${id}`} className={style.card}>
      <div
        className={style.containerImage}
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <section className={style.content}>
        <span className={style.category}>
          {dateEvent} - {hoursEvent}
        </span>
        <h1 className={style.title}>{title}</h1>
        <span className={style.text}>{description}</span>
        <span className={style.text}>Local</span>
      </section>
    </Link>
  );
}
