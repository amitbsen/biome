export interface UserArgs {
  name: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Dataset {
  title: string;
  domain: string;
  summary: string[];
  sourceLink: string;
  dataProvider: string[];
}
