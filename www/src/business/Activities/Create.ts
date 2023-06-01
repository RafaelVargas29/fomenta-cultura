import { Activity } from "../../models/Activity";
import { CreateActivityService } from "../../services/Activities/CreateActivityService";
import { uploadImageInStorageFirebase } from "../../utils/uploadImageFirebase";

export async function createActivity(formData: FormData) {
  //chama e aguarda fazer upload no firebase
  const image = await uploadImageInStorageFirebase(formData);
  const informations = {
    title: formData.get("title"),
    description: formData.get("description"),
    dateEvent: formData.get("dateEvent"),
    hoursEvent: formData.get("hoursEvent"),
    status: "agendado",
    image: image.url
  } as Activity;
  const result = await CreateActivityService(informations);
  return result;
}
