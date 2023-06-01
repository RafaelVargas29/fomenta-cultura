export type Organization = {
  id?: number;
  name: string;
  email: string;
  password: string;
  address: Address;
};

export type Address = {
  cep: string;
  logradouro: string;
  complemento?: string;
  numero?: string;
  bairro: string;
  localidade: string;
  uf: string;
};
