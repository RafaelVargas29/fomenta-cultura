/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createContext, useContextSelector } from "use-context-selector";
import { Activities } from "../../model/Activities";
import services from "../../services";
import { AuthContext } from "./AuthContext";

const FIRESTORE_REFERENCE = "activities";

interface ActivityContextType {
  activities: Activities[];
  getAll: () => void;
  create: (data: any) => Promise<string>;
  getById: (id?: string) => Promise<Activities>;
  categoryFilter: (name: string) => Activities[];
  search: (name: string) => Activities[];
  update: (id: string, aux: any, data: any) => Promise<boolean>;
  filterStatus: (paramToFilter: string) => Activities[];
}

interface ActivitiesProviderProps {
  children: ReactNode;
}

export const ActivitiesContext = createContext({} as ActivityContextType);

export function ActivitiesProvider({ children }: ActivitiesProviderProps) {
  const [activities, setActivities] = useState<Activities[]>([]);

  const user = useContextSelector(AuthContext, (context) => context.user);

  const imgData = async (data: any) => {
    const dataImage = data.get("flyer");
    if (dataImage.size === 0) {
      return "https://firebasestorage.googleapis.com/v0/b/tcc-fomenta-cultura.appspot.com/o/logo.png?alt=media&token=3a5119a4-5fa3-405f-8f91-ae65e95095f4&_gl=1*1b145xe*_ga*MTk0Nzk5NzA0My4xNjg2MzU4NzIz*_ga_CW55HF8NVT*MTY4NjYxMzUwNy4xOC4xLjE2ODY2MTc5OTEuMC4wLjA.";
    } else {
      return await services.activities.saveImageInStorage(dataImage);
    }
  };

  const update = async (id: string, aux: any, data: any): Promise<boolean> => {
    let result;
    //troquei a imagem ? aux[verdade ou false]
    if (aux) {
      //sim img trocada
      let image = await imgData(data);
      result = await services.activities.updateActivity(id, {
        title: data.get("title"),
        category: data.get("category"),
        description: data.get("description"),
        dateEvent: data.get("dateEvent"),
        hoursEvent: data.get("hoursEvent"),
        status: data.get("status"),
        image
      });
    } else {
      result = await services.activities.updateActivity(id, {
        title: data.get("title"),
        category: data.get("category"),
        description: data.get("description"),
        dateEvent: data.get("dateEvent"),
        hoursEvent: data.get("hoursEvent"),
        status: data.get("status")
      });
    }

    if (result) {
      toast.success("sucesso!");
      return result;
    } else {
      toast.error("Ops, algo deu errado");
      return result;
    }
  };

  const create = async (data: any): Promise<any> => {
    const informations = {
      title: data.get("title"),
      category: data.get("category"),
      description: data.get("description"),
      dateEvent: data.get("dateEvent"),
      hoursEvent: data.get("hoursEvent"),
      status: "agendado",
      address: user?.address,
      producerId: user?.id,
      image: await imgData(data)
    } as Activities;
    toast.success("sucesso!");
    return await services.activities.createActivity(informations);
  };

  const getAll = useCallback(async () => {
    const all = await services.activities.getActivities();
    Promise.all(all).then((values) => {
      setActivities(values);
    });
  }, []);

  const getById = async (id?: string): Promise<Activities> => {
    return activities.filter((activity) => activity["id"] === id)[0];
  };

  const search = (name: string): Activities[] => {
    return activities.filter((Activities) =>
      Activities["title"].includes(name)
    );
  };

  const categoryFilter = (name: string): Activities[] => {
    return activities.filter((Activities) =>
      Activities["category"].includes(name)
    );
  };

  const filterStatus = (paramToFilter: string) => {
    return activities.filter((activity) =>
      activity["status"].includes(paramToFilter)
    );
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        create,
        getById,
        categoryFilter,
        search,
        update,
        filterStatus,
        getAll
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
