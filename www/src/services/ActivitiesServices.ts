/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

import DB from "../lib/firebase/db";

export default class ActivitiesServices {
  private PATH_REFERENCE = "activities/";
  private colletion = new DB();

  private compareInDays(currentDate: Date, date: Date): number {
    return Math.ceil(
      (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  applyFilter(colletions: any, field: string, query: string) {
    return colletions.filter((item: any) => item[`${field}`].includes(query));
  }

  async modifierToConcluided(data: any) {
    if (data.status !== "cancelado" && data.status !== "concluido") {
      if (this.compareInDays(new Date(), new Date(data.dateEvent)) < 0) {
        this.colletion.updateActivityStatus(this.PATH_REFERENCE, data.id);
      }
    }
    return data;
  }

  async saveImageInStorage(file: any) {
    return this.colletion.saveInStorage("flyers", file);
  }

  async createActivity(data: any): Promise<any | null> {
    return await this.colletion.save(this.PATH_REFERENCE, data);
  }

  async getActivities(): Promise<any[]> {
    const all = await this.colletion.getAll(
      this.PATH_REFERENCE,
      "dateEvent",
      "asc"
    );
    const preview = all.map(async (event: any) => {
      return await this.modifierToConcluided(event);
    });
    return preview;
  }

  async getActivitiesForUserId(idUser?: string): Promise<any[] | null> {
    if (!idUser) return null;
    const all = await this.getActivities();
    const filter = this.applyFilter(all, "producerId", idUser);
    return filter;
  }

  async getActivity(id: string): Promise<void> {
    return this.colletion.getById(this.PATH_REFERENCE, id);
  }

  async updateActivity(id: string, data: any): Promise<boolean> {
    return await this.colletion.updateDocInfo(this.PATH_REFERENCE, data, id);
  }
}
