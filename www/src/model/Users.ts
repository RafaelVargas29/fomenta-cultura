import { Address } from "./Address";

export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  imageUrl: string;
  address: Address;
};
