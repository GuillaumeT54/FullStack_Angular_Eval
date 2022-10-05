export interface Restaurant {

  id: number;
  nom: string;
  adresse: string;
  evaluation: Evaluation[];
  moyenne: number;
}

export interface Evaluation {
  id: number;
  evaluateur: string;
  message: string;
  note: number
}
