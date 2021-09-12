export interface UserArgs {
  name: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Field {
  name: string;
  alias: string;
}

export interface Service {
  id: string;
  type: string;
  link: string;
  fields: Field[];
}

export interface Dataset {
  title: string;
  domain: string;
  summary: string[];
  sourceLink: string;
  dataProvider: string[];
  service: Service;
}
