/* eslint-disable prefer-const */
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { ImageActivities } from "../@types/ImageActivities";
import { storage } from "../libs/firebase";
import { v4 as createId } from "uuid";

export const getAll = async () => {
  let list: ImageActivities[] = [];
  const imagesFolder = ref(storage, "images");
  const images = await listAll(imagesFolder);

  for (let i in images.items) {
    list.push({
      name: images.items[i].name,
      url: await getDownloadURL(images.items[i])
    });
  }
  return list;
};

export const insert = async (file: File): Promise<ImageActivities | Error> => {
  if (
    [
      "image/jpeg",
      "image/svg",
      "image/gif",
      "image/tiff",
      "image/webp",
      "image/jpg",
      "image/png"
    ].includes(file.type)
  ) {
    let randomName = createId();
    let newFile = ref(storage, `images/${randomName}`);
    let upload = await uploadBytes(newFile, file);
    return {
      name: upload.ref.name,
      url: await getDownloadURL(upload.ref)
    } as ImageActivities;
  } else {
    return new Error("Tipo de arquivo não permitido.");
  }
};
