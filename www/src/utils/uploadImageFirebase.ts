/* eslint-disable @typescript-eslint/no-explicit-any */

export async function uploadImageInStorageFirebase(data: FormData) {
  const fileToUpload = data.get("coverUrl") as File;

  if (fileToUpload) {
    const result: any = await firebase.insert(fileToUpload);
    return result;
  }
}
