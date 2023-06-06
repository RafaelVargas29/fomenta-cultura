import { Activity } from "../../@types/Activity";

import { uploadImageInStorageFirebase } from "../../utils/uploadImageFirebase";

export async function create(formData: FormData) {
  //fazer upload da imagem
  // pegar url da imagem
  //salva as informação no banco
}

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
}
