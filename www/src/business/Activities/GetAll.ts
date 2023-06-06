import { api } from "../../config/axios";
import { Activity } from "../../@types/Activity";

export async function getAllActivities() {
  const preResult = await api.get("activities");
  const result: Activity[] = preResult.data;
  return result;
}
