import style from "./CardActivity.module.scss";
import { Activities } from "../../model/Activities";

export function CardActivity({
  dateEvent,
  description,
  hoursEvent,
  id,
  status,
  title,
  category,
  address,
  image
}: Activities) {
  return (
    <a href={`details/${id}`} className={style.card}>
      <div
        className={style.containerImage}
        style={{
          backgroundImage: `url(${image})`
        }}
      />

      <div className={style.content}>
        <span className={style.category}>
          <strong>
            {dateEvent} - {hoursEvent}
          </strong>
          <span>{status}</span>
        </span>
        <h1 className={style.title}>{title}</h1>
        <span className={style.text}>{description}</span>
        <span className={style.text}>{category}</span>
        <span className={style.text}>{address?.localidade}</span>
      </div>
    </a>
  );
}
