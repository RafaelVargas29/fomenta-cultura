import { Activity } from "../../@types/Activity";
import { UpdateActivityService } from "../../services/Activities/UpdateActivityService";

export async function updateActivity(id: any, formData: Activity) {
  const resp = UpdateActivityService(id, formData);
  return resp;
}
