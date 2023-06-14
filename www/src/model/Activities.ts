import { Address } from "./Address";

export type Activities = {
  id?: string;
  title: string;
  description: string;
  dateEvent: string;
  hoursEvent: string;
  status: "agendado" | "confirmado" | "concluido" | "cancelado";
  image?: string;
  producerId?: string;
  producerName?: string;
  address?: Address;
};
