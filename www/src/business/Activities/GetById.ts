import { api } from "../../libs/axios/api";

export async function getByIdActivities(id: any) {
  const result = await api.get(`activities/${id}`);
  return result.data;
}
