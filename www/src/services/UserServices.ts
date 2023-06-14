/* eslint-disable @typescript-eslint/no-explicit-any */
import DB from "../lib/firebase/db";

export default class UsersServices {
  private PATH_REFERENCE = "users/";
  private colletion = new DB();

  async changeProfileImage(data: any, id: string) {
    const path = `profile/${id}`;
    const result = await this.colletion.saveInStorage(path, data);
    return result;
  }

  async updateProfile(data: any, id?: string) {
    return await this.colletion.updateDocInfo(this.PATH_REFERENCE, data, id);
  }

  async getUser(id?: string) {
    return await this.colletion.getById(this.PATH_REFERENCE, id);
  }
}
