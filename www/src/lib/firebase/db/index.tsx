/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  OrderByDirection,
  query,
  QueryConstraint,
  setDoc,
  WhereFilterOp,
  where,
  updateDoc
} from "firebase/firestore";
import { v4 as uuid4 } from "uuid";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../config";

export interface Filter {
  att: string;
  op: WhereFilterOp;
  value: any;
}

export default class DB {
  private db = getFirestore(app);
  private storage = getStorage(app);

  async saveInStorage(nameToStorage: string, file: any) {
    const image = await uploadBytes(
      ref(this.storage, `${nameToStorage}/${uuid4()}`),
      file
    );
    return await getDownloadURL(image.ref);
  }

  async save(path: string, objectData: any, id?: string): Promise<any> {
    const idFinal = id ?? objectData.id ?? uuid4();
    const docRef = doc(this.db, path, idFinal);
    await setDoc(docRef, objectData);
    return {
      ...objectData,
      id: objectData.id ?? idFinal
    };
  }

  async getAll(
    path: string,
    order?: string,
    orderDirection?: OrderByDirection
  ): Promise<any[]> {
    const colletionRef = collection(this.db, path);
    const filtered: QueryConstraint[] = [];
    const ordenation = order ? [orderBy(order, orderDirection)] : [];
    const q = query(colletionRef, ...filtered, ...ordenation);
    const result = await getDocs(q);
    return result.docs.map(this._converterDoFirebase) ?? [];
  }

  async getById(path: string, id?: string): Promise<any> {
    if (!id) return null;
    const snap = await getDoc(doc(this.db, path, id));
    if (snap.exists()) {
      return snap.data();
    }
    return null;
  }

  async getWithFilters(
    path: string,
    filters: Filter[],
    order?: string,
    orderDirection?: OrderByDirection
  ): Promise<any[]> {
    const colecaoRef = collection(this.db, path);
    const wheres = filters?.map((f) => where(f.att, f.op, f.value)) ?? [];
    const orders = order ? [orderBy(order, orderDirection)] : [];
    const q = query(colecaoRef, ...wheres, ...orders);
    const result = await getDocs(q);
    return result.docs.map(this._converterDoFirebase) ?? [];
  }

  async updateDocInfo(path: string, data: any, id?: string): Promise<boolean> {
    if (!id) {
      return false;
    }
    const docRef = doc(this.db, path, id);
    const itemResult = await getDoc(docRef);
    if (!itemResult.exists()) {
      return false;
    }
    await updateDoc(docRef, data);
    return true;
  }

  async updateActivityStatus(
    path: string,
    idActivity: string
  ): Promise<boolean> {
    if (!idActivity) {
      return false;
    }
    await updateDoc(doc(this.db, path, idActivity), {
      status: "concluido"
    });
    return true;
  }

  async delete(path: string, id?: string): Promise<boolean> {
    if (!id) return false;
    const docRef = doc(this.db, path, id);
    const itemResult = await getDoc(docRef);
    if (!itemResult.exists()) return false;
    await deleteDoc(docRef);
    return true;
  }

  private _converterDoFirebase(snapshot: DocumentSnapshot<DocumentData>) {
    if (!snapshot.exists()) return null;
    const entidade: any = { ...snapshot.data(), id: snapshot.id };
    if (!entidade) return entidade;
    return Object.keys(entidade).reduce((obj: any, atributo: string) => {
      const valor: any = entidade[atributo];
      return { ...obj, [atributo]: valor.toDate?.() ?? valor };
    }, {});
  }
}
