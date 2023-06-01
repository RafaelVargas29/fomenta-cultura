export type Activity = {
  id: number;
  title: string;
  description: string;
  dateEvent: string;
  hoursEvent: string;
  status: "agendado" | "confirmado" | "concluido" | "cancelado";
  image?: string;
  createdAt: string;
};
