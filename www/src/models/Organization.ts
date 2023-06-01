export type Organization = {
  id: number;
  name: string;
  email: string;
  password: string;
  address: Address;
};

export type Address = {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};
