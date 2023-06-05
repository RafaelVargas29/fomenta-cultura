/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useState, useEffect } from "react";
import {
  StorageError,
  getDownloadURL,
  ref,
  uploadBytesResumable
} from "firebase/storage";
import { v4 as createUUID } from "uuid";
import { storage } from "../config/firebase";

export function useStorage(nameStorage: string, file: any) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<StorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const namePhoto = createUUID();
    const storageRef = ref(storage, `${nameStorage}/${namePhoto}`);
    uploadBytesResumable(storageRef, file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(storageRef);
        setUrl(url);
      }
    );
  }, [file, nameStorage]);

  return { progress, error, url };
}
