import { api } from "../../libs/axios/api";
import { Activity } from "../../models/Activity";

export async function CreateActivityService(data: Activity) {
  const result = await api.post("activities", data);
  return result;
}
