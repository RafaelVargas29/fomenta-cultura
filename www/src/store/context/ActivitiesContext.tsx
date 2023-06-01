/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../libs/axios";
import { Activity } from "../../models/Activity";

interface CreateActivityInput {
  title: string;
  description: string;
  dateEvent: string;
  hoursEvent: string;
  status: string;
  image?: string;
}

interface ActivityContextType {
  activities: Activity[];
  fetchActivities: (query?: string) => Promise<void>;
  createActivity: (data: CreateActivityInput) => Promise<void>;
  updateActivity: (id: number, data: any) => Promise<void>;
}

interface ActivitiesProviderProps {
  children: ReactNode;
}

export const ActivitiesContext = createContext({} as ActivityContextType);

export function ActivitiesProvider({ children }: ActivitiesProviderProps) {
  const [activities, setActivities] = useState<Activity[]>([]);

  /** getAll & getById or Name*/
  const fetchActivities = useCallback(async (query?: string) => {
    const response = await api.get("activities", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query
      }
    });

    setActivities(response.data);
  }, []);

  /** update */
  const updateActivity = useCallback(async (id: number, data: any) => {
    console.log(`updateActivity`);
    console.log(`param id: ${id}`);
    console.log(`param data: ${data}`);
  }, []);

  /**Create */
  const createActivity = useCallback(async (data: CreateActivityInput) => {
    console.log("dentro do contexto dentro da função cria atividade");
    /**
     * fazer upload da imagem no firebase
     */
    const { dateEvent, description, hoursEvent, status, title, image } = data;
    const response = await api.post("activities", {
      dateEvent,
      description,
      hoursEvent,
      status,
      title,
      image,
      createdAt: new Date()
    });

    setActivities((state) => [response.data, ...state]);
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        fetchActivities,
        updateActivity,
        createActivity
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
