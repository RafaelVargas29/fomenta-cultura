import { api } from "../../config/axios";

export async function getByIdActivities(id: any) {
  const result = await api.get(`activities/${id}`);
  return result.data;
}
