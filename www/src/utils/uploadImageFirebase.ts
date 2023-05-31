/* eslint-disable @typescript-eslint/no-explicit-any */
import * as firebase from "../services/firebase";

export async function uploadImageInStorageFirebase(data: FormData) {
  const fileToUpload = data.get("coverUrl") as File;

  if (fileToUpload) {
    const result: any = await firebase.insert(fileToUpload);
    return result;
  }
}
