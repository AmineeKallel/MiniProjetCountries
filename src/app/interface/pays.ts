export interface Pays {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  region: string;
  population: string;
  area: string;
  languages: {
    nativeName: string;
    name: string;
  };
}
