import { Activity } from "../../@types/Activity";
import { api } from "../../libs/axios/api";

export async function getAllActivities() {
  const preResult = await api.get("activities");
  const result: Activity[] = preResult.data;
  return result;
}
