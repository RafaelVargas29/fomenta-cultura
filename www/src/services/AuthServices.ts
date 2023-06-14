/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import DB from "../lib/firebase/db";
import { app } from "../lib/firebase/config";

export default class AuthServices {
  private PATH_REFERENCE = "users/";
  private auth;
  private colletion = new DB();

  constructor() {
    this.auth = getAuth(app);
  }

  async login(email: string, password: string) {
    try {
      const createResult: any = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      await this.colletion.getById(this.PATH_REFERENCE, createResult.user.uid);
      localStorage.setItem("user", JSON.stringify(createResult.user.uid));
      return createResult.user.uid;
    } catch (e) {
      return null;
    }
  }

  async logout() {
    localStorage.removeItem("user");
    return null;
  }

  async register(email: string, password: string): Promise<any | null> {
    try {
      const createResult: any = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const result = this.colletion.save(
        this.PATH_REFERENCE,
        {
          id: createResult.user.uid,
          name: email.split("@")[0],
          email: email,
          bio: "",
          imageUrl: "",
          address: {}
        },
        createResult.user.uid
      );
      return result;
    } catch (e) {
      return null;
    }
  }
}
