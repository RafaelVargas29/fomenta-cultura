export type Activity = {
  id: string;
  title: string;
  description: string;
  dateEvent: string;
  hoursEvent: string;
  status: "agendado" | "confirmado" | "concluido" | "cancelado";
  image?: string;
  createdAt: string;
};
