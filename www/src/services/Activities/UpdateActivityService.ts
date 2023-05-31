import { api } from "../../libs/axios/api";

export async function UpdateActivityService(id: any, info: any) {
  const result = await api.put(`activities/${id}`, info);
  return result.data;
}
