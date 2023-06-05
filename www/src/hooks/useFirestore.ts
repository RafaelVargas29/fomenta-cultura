/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export function useFirestore(myColletion: string) {
  const [docs, setDocs] = useState<any[]>([]);
  useEffect(() => {
    const getDocuments = onSnapshot(
      query(collection(db, myColletion), orderBy("createdAt", "desc")),
      (snap) => {
        const preDocs: any[] = [];
        snap.forEach((item) => {
          preDocs.push({ ...item.data(), id: item.id });
        });
        setDocs(preDocs);
      }
    );
    return () => getDocuments();
  }, [myColletion]);
  return { docs };
}
