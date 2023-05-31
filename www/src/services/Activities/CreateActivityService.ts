import { Activity } from "../../@types/Activity";
import { api } from "../../libs/axios/api";

export async function CreateActivityService(data: Activity) {
  const result = await api.post("activities", data);
  return result;
}
