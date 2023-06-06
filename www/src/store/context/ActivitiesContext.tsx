/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { Activity } from "../../@types/Activity";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as createUUID } from "uuid";
import { db, storage } from "../../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc
} from "firebase/firestore";

const FIRESTORE_REFERENCE = "activities";

interface ActivityContextType {
  activities: Activity[];
  getAll: () => void;
  create: (data: any) => Promise<string>;
  getById: (id?: string) => Promise<Activity>;
  update: (id: string, data: any) => Promise<void>;
  filterStatus: (paramToFilter: string) => Activity[];
}

interface ActivitiesProviderProps {
  children: ReactNode;
}

export const ActivitiesContext = createContext({} as ActivityContextType);

export function ActivitiesProvider({ children }: ActivitiesProviderProps) {
  const [activities, setActivities] = useState<Activity[]>([]);

  function compareInDays(currentDate: Date, date: Date): number {
    return Math.ceil(
      (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  const checkActivitiesIsConcluid = async (data: any) => {
    const obj = { ...data.data() };
    const id = data.id;
    if (obj.status !== "cancelado" && obj.status !== "concluido") {
      if (compareInDays(new Date(), new Date(obj.dateEvent)) < 0) {
        await updateDoc(doc(db, FIRESTORE_REFERENCE, id), {
          status: "concluido"
        });
      }
    }
  };

  const saveImageInStorage = async (
    nameStorage: string,
    file: any
  ): Promise<string> => {
    const namePhoto = createUUID();
    const image = await uploadBytes(
      ref(storage, `${nameStorage}/${namePhoto}`),
      file
    );
    return await getDownloadURL(image.ref);
  };

  const create = async (data: any): Promise<string> => {
    const colletionRef = collection(db, FIRESTORE_REFERENCE);
    const informations = {
      title: data.get("title"),
      description: data.get("description"),
      dateEvent: data.get("dateEvent"),
      hoursEvent: data.get("hoursEvent"),
      status: "agendado",
      image: await saveImageInStorage("flyers", data.get("flyer"))
    } as Activity;

    const result = await addDoc(colletionRef, informations);
    return result.id;
  };

  const getAll = useCallback(async () => {
    const preview: any[] = [];
    const querySnapshot = await getDocs(
      query(collection(db, FIRESTORE_REFERENCE), orderBy("dateEvent", "desc"))
    );

    querySnapshot.forEach((doc) => {
      checkActivitiesIsConcluid(doc);
    });
    querySnapshot.forEach((doc) => {
      preview.push({
        ...doc.data(),
        id: doc.id
      });
    });
    setActivities(preview);
  }, []);

  const getById = async (id?: string): Promise<Activity> => {
    return activities.filter((activity) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      activity["id"].includes(id!)
    )[0];
  };

  const update = async (id: string, data: any): Promise<void> => {
    const ref = doc(db, FIRESTORE_REFERENCE, id);
    await updateDoc(ref, {
      title: data.get("title"),
      description: data.get("description"),
      dateEvent: data.get("dateEvent"),
      hoursEvent: data.get("hoursEvent"),
      status: data.get("status")
    });
  };

  const filterStatus = (paramToFilter: string) => {
    return activities.filter((activity) =>
      activity["status"].includes(paramToFilter)
    );
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        create,
        getById,
        update,
        filterStatus,
        getAll
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
