export interface LocationsProps {
  id: number;
  name: string;
  cpf: string;
  cep: string;
  logradouro: string;
  district: string;
  city: string;
  uf: string;
}

export interface Location {
  locations: LocationsProps;
}

export const locations = [
  {
    id: 2,
    name: "São Paulo",
    cpf: "987.654.321-00",
    cep: "01000-000",
    logradouro: "Rua Augusta",
    district: "Consolação",
    city: "São Paulo",
    uf: "SP",
  },
  {
    id: 3,
    name: "Belo Horizonte",
    cpf: "111.222.333-44",
    cep: "30130-000",
    logradouro: "Av. Afonso Pena",
    district: "Centro",
    city: "Belo Horizonte",
    uf: "MG",
  },
  {
    id: 4,
    name: "Salvador",
    cpf: "555.666.777-88",
    cep: "40020-000",
    logradouro: "Av. Sete de Setembro",
    district: "Barra",
    city: "Salvador",
    uf: "BA",
  },
  {
    id: 5,
    name: "Curitiba",
    cpf: "999.888.777-66",
    cep: "80010-000",
    logradouro: "Rua XV de Novembro",
    district: "Centro",
    city: "Curitiba",
    uf: "PR",
  },
  {
    id: 6,
    name: "Fortaleza",
    cpf: "444.555.666-77",
    cep: "60025-000",
    logradouro: "Av. Beira Mar",
    district: "Meireles",
    city: "Fortaleza",
    uf: "CE",
  },
  {
    id: 7,
    name: "Manaus",
    cpf: "222.333.444-55",
    cep: "69010-000",
    logradouro: "Av. Eduardo Ribeiro",
    district: "Centro",
    city: "Manaus",
    uf: "AM",
  },
  {
    id: 8,
    name: "Recife",
    cpf: "666.777.888-99",
    cep: "50030-000",
    logradouro: "Rua do Imperador",
    district: "Santo Antônio",
    city: "Recife",
    uf: "PE",
  },
  {
    id: 9,
    name: "Porto Alegre",
    cpf: "333.222.111-00",
    cep: "90010-000",
    logradouro: "Av. Borges de Medeiros",
    district: "Centro",
    city: "Porto Alegre",
    uf: "RS",
  },
  {
    id: 10,
    name: "Brasília",
    cpf: "777.888.999-00",
    cep: "70040-000",
    logradouro: "Esplanada dos Ministérios",
    district: "Asa Sul",
    city: "Brasília",
    uf: "DF",
  },
  {
    id: 11,
    name: "Florianópolis",
    cpf: "888.999.000-11",
    cep: "88010-000",
    logradouro: "Rua Felipe Schmidt",
    district: "Centro",
    city: "Florianópolis",
    uf: "SC",
  },
];
